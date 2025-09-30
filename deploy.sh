set -e

cd vue
npm run build
cd ..
cp -r vue/dist/* public/
