import dotenv from 'dotenv';

dotenv.config();

export const Config = {
    PORT: process.env.PORT || 5000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'ravenpay_test',
    DB_PORT: process.env.DB_PORT || 3306,   
    JWT_SECRET: process.env.JWT_SECRET
    
}