const fs = require('fs');
const path = require('path');

const source = process.argv[2];

try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'prisma', source),
    path.join(__dirname, '..', 'prisma', 'schema.prisma'),
  );
  console.log(`Successfully copied schema from ${source} to schema.prisma`);
} catch (err) {
  console.error('Error copying schema file:', err);
  process.exit(1);
}
