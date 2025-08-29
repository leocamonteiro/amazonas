
  import "./polyfill.mjs";
  
    import { netlifyAppEngineHandler } from "../../../dist/amazonas/server/server.mjs";
    import "./fixup-event.mjs";

    export default netlifyAppEngineHandler;
    
  export const config = {
    path: "/*",
    excludedPath: ["/.netlify/*","/chunk-I5O2P6S4.js","/chunk-SNDJOTY5.js","/favicon.ico","/index.csr.html","/main-DUJGSZXA.js","/styles-DTTV3AOM.css"],
    generator: "@netlify/angular-runtime@3.0.0",
    name: "Angular SSR",
    cache: "manual",
  };
  