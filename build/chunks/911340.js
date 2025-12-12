/** Chunk was on web.js **/
/** chunk id: 911340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => s
});
var Chunk343573 = require("./343573.js"),
  Chunk98076 = require("./98076.js"),
  Chunk454207 = require("./454207.js");
let o = 100;

function s(e, t) {
  let n = (0, a.s3)(),
    s = (0, a.aF)();
  if (!n) return;
  let {
    beforeBreadcrumb: l = null,
    maxBreadcrumbs: c = o
  } = n.getOptions();
  if (c <= 0) return;
  let u = {
      timestamp: (0, r.yW)(),
      ...e
    },
    d = l ? (0, i.Cf)(() => l(u, t)) : u;
  null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c))
}