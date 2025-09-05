/** Chunk was on 30355 **/
/** chunk id: 996921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  h: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk224724 = require("./224724.js"),
  Chunk384166 = require("./384166.jsx"),
  Chunk352614 = require("./352614.js");

function f(e) {
  let t = (0, a.e7)([o.default], () => o.default.getId() === e),
    n = (0, s.zPA)(),
    r = (0, a.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
  return t && (n || r)
}

function m(e) {
  let {
    userId: t,
    className: n
  } = e, l = (0, a.e7)([o.default], () => o.default.getId() === t), c = (0, s.zPA)();
  return l ? (0, r.jsx)("div", {
    className: i()(d.container, n),
    children: c ? (0, r.jsx)(s.c43, {
      className: d.dndKeyboardHelpBar
    }) : (0, r.jsx)(u.Z, {
      className: d.pendingChangesNotice
    })
  }) : null
}