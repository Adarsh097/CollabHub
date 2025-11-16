FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies only
RUN npm install

# Copy the full backend code (including prisma folder)
COPY . .

# Now run prisma generate (schema exists now)
RUN npx prisma generate

EXPOSE 5001

CMD ["npm", "run", "start"]
