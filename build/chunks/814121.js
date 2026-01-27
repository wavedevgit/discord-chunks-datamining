/** Chunk was on web.js **/
/** chunk id: 814121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk745768 = require("./745768.js"),
  Chunk478681 = require("./478681.js"),
  Chunk663583 = require("./663583.js");
let o = 100;

function s(e, t) {
  let n = (0, a.KU)(),
    s = (0, a.rm)();
  if (!n) return;
  let {
    beforeBreadcrumb: l = null,
    maxBreadcrumbs: c = o
  } = n.getOptions();
  if (c <= 0) return;
  let u = {
      timestamp: (0, r.lu)(),
      ...e
    },
    d = l ? (0, i.pq)(() => l(u, t)) : u;
  null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c))
}