/** Chunk was on web.js **/
/** chunk id: 572299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => s
});
var Chunk101284 = require("./101284.js"),
  Chunk622916 = require("./622916.js"),
  Chunk263449 = require("./263449.js");
let a = 100;

function s(e, t) {
  let n = (0, o.s3)(),
    s = (0, o.aF)();
  if (!n) return;
  let {
    beforeBreadcrumb: l = null,
    maxBreadcrumbs: c = a
  } = n.getOptions();
  if (c <= 0) return;
  let u = {
      timestamp: (0, r.yW)(),
      ...e
    },
    d = l ? (0, i.Cf)(() => l(u, t)) : u;
  null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c))
}