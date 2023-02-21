# React TS

If you want to add Typescript in your existing react app, this is a simple ways that you could do to make it happen. First install the typescript itself

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

After that add the typescript config

```
npx tsc --init
```

Then update packgae.json

```json
"build": "tsc",
```

Also in tsconfig.js activate

```json
"jsx": "preserve"   
```

After that activate or uncomment some more inside the typescript config

```json
"rootDir": "src",    
"outDir": "build",    
```

Update all .js extension file to .tsx. If Everything is done, to prevent any error in index.tsx add !

```js
const root = ReactDOM.createRoot(document.getElementById('root')!);
```

After you could try to run the app

```
npm start
```