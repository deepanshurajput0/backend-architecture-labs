
# Make sure wait-for-it.sh is executable
chmod +x ./scripts/wait-for-it.sh
docker compose up -d
echo '🟡 - Waiting for database to be ready...'
./scripts/wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5455/postgres" -- echo '🟢 - Database is ready!'

cd "Integration Testing"

npx prisma migrate dev --name init4
npm run test
docker compose down