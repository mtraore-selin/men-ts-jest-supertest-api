import { connectDB, environmentConfig } from '@src/configs';

import { startServer } from '@src/server';
// Mocking the app module
jest.mock('@src/app', () => ({
  listen: jest.fn(),
}));
jest.mock('@src/configs', () => ({
  ...jest.requireActual('@src/configs'), // Gardez les autres exports non mockés
  connectDB: jest.fn(),
}));
describe('startServer', () => {
  it('should start the server and connect to MongoDB', async () => {
    await startServer();
    expect(connectDB).toHaveBeenCalledWith(environmentConfig.TEST_ENV_MONGODB_CONNECTION_STRING);
  });
});
