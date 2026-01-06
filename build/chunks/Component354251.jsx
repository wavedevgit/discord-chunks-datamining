/** Chunk was on web.js **/
/** chunk id: 354251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a,
  y: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk354012 = require("./354012.js");
let a = new Chunk354012.IntlManager({
  initialLocale: "en-US",
  defaultLocale: "en-US"
}).withFormatters({
  format: (0, Chunk354012.makeReactFormatter)({
    $i: (e, t) => (0, r.jsx)("em", {
      children: e
    }, t),
    $b: (e, t) => (0, r.jsx)("strong", {
      children: e
    }, t),
    $del: (e, t) => (0, r.jsx)("del", {
      children: e
    }, t),
    $p: (e, t) => (0, r.jsx)("p", {
      children: e
    }, t),
    $code: (e, t) => (0, r.jsx)("code", {
      children: e
    }, t),
    $link: (e, t) => (0, r.jsx)("span", {
      children: e
    }, t)
  }),
  formatToPlainString: Chunk354012.stringFormatter,
  formatToMarkdownString: Chunk354012.markdownFormatter,
  formatToParts: Chunk354012.astFormatter
});

function o(e) {
  a = e
}