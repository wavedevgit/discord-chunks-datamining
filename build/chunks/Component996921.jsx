/** Chunk was on 77443 **/
/** chunk id: 996921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  h: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk224724 = require("./224724.js"),
  Chunk384166 = require("./384166.jsx"),
  Chunk352614 = require("./352614.js");

function f(e) {
  let t = (0, a.e7)([c.default], () => c.default.getId() === e),
    n = (0, o.zPA)(),
    r = (0, a.e7)([s.Z], () => s.Z.hasSaveablePendingChanges());
  return t && (n || r)
}

function g(e) {
  let {
    userId: t,
    className: n
  } = e, i = (0, a.e7)([c.default], () => c.default.getId() === t), s = (0, o.zPA)();
  return i ? (0, r.jsx)("div", {
    className: l()(d.container, n),
    children: s ? (0, r.jsx)(o.c43, {
      className: d.dndKeyboardHelpBar
    }) : (0, r.jsx)(u.Z, {
      className: d.pendingChangesNotice
    })
  }) : null
}