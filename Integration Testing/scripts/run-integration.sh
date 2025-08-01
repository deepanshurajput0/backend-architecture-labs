
docker compose up -d
echo '🟡 - Waiting for database to be ready...'
./scripts./wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5455/postgres" -- echo '🟢 - Database is ready!'

cd ..

npx prisma migrate dev --name init4
npm run test
docker-compose down