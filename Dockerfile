# Build stage
FROM node:20-alpine as builder

# Copy the application source code from local
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app

# Copy built files and necessary resources
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set environment variables
ENV PORT 3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]