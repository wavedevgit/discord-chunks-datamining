/** Chunk was on 49902 **/
/** chunk id: 996921, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  h: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk224724 = require("./224724.js"),
  Chunk384166 = require("./384166.jsx"),
  Chunk352614 = require("./352614.js");

function f(e) {
  let t = (0, a.e7)([o.default], () => o.default.getId() === e),
    r = (0, s.zPA)(),
    n = (0, a.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
  return t && (r || n)
}

function g(e) {
  let {
    userId: t,
    className: r
  } = e, i = (0, a.e7)([o.default], () => o.default.getId() === t), c = (0, s.zPA)();
  return i ? (0, n.jsx)("div", {
    className: l()(d.container, r),
    children: c ? (0, n.jsx)(s.c43, {
      className: d.dndKeyboardHelpBar
    }) : (0, n.jsx)(u.Z, {
      className: d.pendingChangesNotice
    })
  }) : null
}