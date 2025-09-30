/** Chunk was on 72261 **/
/** chunk id: 718717, original params: e,a,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk77344 = require("./77344.js");
let u = Chunk647438.memo(function(e) {
  let {
    application: a
  } = e, s = (0, i.e7)([p.default], () => p.default.getCurrentUser()), r = d.ZP.getUserAvatarURL(s);
  return (0, l.jsxs)("div", {
    className: n.headerIcons,
    children: [(0, l.jsx)(t.Z, {
      className: n.avatar,
      game: a,
      size: t.A.MEDIUM,
      "aria-label": a.name
    }), (0, l.jsxs)("div", {
      className: n.ellipseGroup,
      children: [(0, l.jsx)("div", {
        className: n.ellipse
      }), (0, l.jsx)("div", {
        className: n.ellipse
      }), (0, l.jsx)("div", {
        className: n.ellipse
      })]
    }), (0, l.jsx)(c.qEK, {
      className: n.avatar,
      src: r,
      size: c.EFr.SIZE_48,
      "aria-label": s.username
    })]
  })
})