import mongoose from 'mongoose';
import { connectDB, environmentConfig } from '@src/configs';

// Mocking mongoose.connection methods
const mockOnConnected = jest.fn();
const mockOnReconnected = jest.fn();
const mockOnError = jest.fn();
const mockOnClose = jest.fn();
const mockOnDisconnected = jest.fn();
const mockOnSigInt = jest.fn();

jest.mock('mongoose', () => {
  const originalModule = jest.requireActual('mongoose');
  return {
    ...originalModule,
    connection: {
      on: jest.fn((event, callback) => {
        switch (event) {
          case 'connected':
            mockOnConnected(callback);
            break;
          case 'reconnected':
            mockOnReconnected(callback);
            break;
          case 'error':
            mockOnError(callback);
            break;
          case 'close':
            mockOnClose(callback);
            break;
          case 'disconnected':
            mockOnDisconnected(callback);
            break;
          case 'SIGINT':
            mockOnSigInt(callback);
            break;
          default:
            break;
        }
      }),
      close: jest.fn((callback) => {
        mockOnSigInt(callback);
      }),
    },
  };
});

afterAll(async () => {
  await mongoose.connection?.db?.dropDatabase();
  await mongoose.disconnect();
  await mongoose.connection.close();
  jest.clearAllMocks();
  jest.setTimeout(5 * 1000);
});

describe('connectDB', () => {
  it('should handle the connected event', () => {
    connectDB(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
    expect(mockOnConnected).toHaveBeenCalled();
  });

  it('should handle the reconnected event', () => {
    connectDB(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
    expect(mockOnReconnected).toHaveBeenCalled();
  });

  it('should handle the error event', () => {
    connectDB(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
    expect(mockOnError).toHaveBeenCalled();
  });

  it('should handle the close event', () => {
    connectDB(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should handle the disconnected event', () => {
    connectDB(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
    expect(mockOnDisconnected).toHaveBeenCalled();
  });

  it('should handle the SIGINT event', () => {
    connectDB(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
    process.emit('SIGINT');
    expect(mockOnSigInt).toHaveBeenCalled();
  });
});
