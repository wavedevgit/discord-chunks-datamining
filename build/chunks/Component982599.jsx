/** Chunk was on 59569 **/
/** chunk id: 982599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  k: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk961350 = require("./961350.js"),
  Chunk61881 = require("./61881.js"),
  Chunk633098 = require("./633098.jsx"),
  Chunk855255 = require("./855255.js");

function f(e) {
  let t = (0, a.bG)([s.default], () => s.default.getId() === e),
    n = (0, o.VUy)(),
    r = (0, a.bG)([c.A], () => c.A.hasUnsavedChanges());
  return t && (n || r)
}

function p(e) {
  let {
    userId: t,
    className: n
  } = e, l = (0, a.bG)([s.default], () => s.default.getId() === t), c = (0, o.VUy)();
  return l ? (0, r.jsx)("div", {
    className: i()(d.kL, n),
    children: c ? (0, r.jsx)(o.Smm, {
      className: d.Wg
    }) : (0, r.jsx)(u.A, {
      className: d.ZS
    })
  }) : null
}