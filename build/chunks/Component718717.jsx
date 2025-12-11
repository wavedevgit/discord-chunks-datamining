/** Chunk was on 72261 **/
/** chunk id: 718717, original params: e,a,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => n
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk843731 = require("./843731.js");
let n = Chunk473749.memo(function(e) {
  let {
    application: a
  } = e, s = (0, c.e7)([p.default], () => p.default.getCurrentUser()), r = d.ZP.getUserAvatarURL(s);
  return (0, l.jsxs)("div", {
    className: f.headerIcons,
    children: [(0, l.jsx)(t.Z, {
      className: f.avatar,
      game: a,
      size: t.A.MEDIUM,
      "aria-label": a.name
    }), (0, l.jsxs)("div", {
      className: f.ellipseGroup,
      children: [(0, l.jsx)("div", {
        className: f.ellipse
      }), (0, l.jsx)("div", {
        className: f.ellipse
      }), (0, l.jsx)("div", {
        className: f.ellipse
      })]
    }), (0, l.jsx)(i.qEK, {
      className: f.avatar,
      src: r,
      size: i.EFr.SIZE_48,
      "aria-label": s.username
    })]
  })
})