# Stage 1: Build Angular app
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve Angular Universal app with Nginx
FROM nginx:alpine

# Copy the built browser assets
COPY --from=build /app/dist/seedecommerce/browser /usr/share/nginx/html

# Copy server scripts and configuration
# COPY --from=build /app/dist/server /usr/src/app/server

# Copy Nginx configuration file if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
