
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SNDJOTY5.js"
    ],
    "route": "/produto/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24652, hash: '61b202c7e1f7bd22fc264905a1263d4fe5e9c073ffb615a5da1537841407f560', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17105, hash: '8571a10fbcb5c43006a4df66f5907b5d7ccb88be1489cadfe0b30d5fd420a113', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
