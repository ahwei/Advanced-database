const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV;
const vercelEnv = process.env.VERCEL_ENV;

let schemaFile = 'schema.local.prisma';

if (
  env === 'production' ||
  vercelEnv === 'preview' ||
  vercelEnv === 'development'
) {
  schemaFile = 'schema.prod.prisma';
}

const source = path.join(__dirname, '..', 'prisma', schemaFile);
const destination = path.join(__dirname, '..', 'prisma', 'schema.prisma');

fs.copyFileSync(source, destination);
console.log(`Copied ${schemaFile} to schema.prisma`);
