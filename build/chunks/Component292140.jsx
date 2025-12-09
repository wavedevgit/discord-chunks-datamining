/** Chunk was on 1272 **/
/** chunk id: 292140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk144145 = require("./144145.jsx"),
  Chunk555927 = require("./555927.jsx"),
  Chunk738762 = require("./738762.jsx"),
  Chunk244080 = require("./244080.js"),
  Chunk247530 = require("./247530.jsx"),
  Chunk260889 = require("./260889.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    party: t,
    close: n,
    onSelect: h
  } = e, m = (0, c.Z)(t), _ = (0, p.Z)(t), b = (0, d.Z)(t), E = (0, u.Z)(t), O = (0, s.Z)(t), v = (0, o.Z)(t);
  return (0, l.ZP)(() => {
    let e = t.currentActivities.filter(e => {
      var t, n;
      return (null == (t = e.game) ? true : t.name) != null && (0, a.isGameApplicationType)(null == (n = e.game) ? true : n.type)
    }).map(e => e.game.name);
    a.default.track(f.rMx.OPEN_POPOUT, {
      type: "Now Playing Card Popout",
      games_detected: e
    })
  }), (0, r.jsxs)(i.v2r, {
    navId: "now-playing-menu",
    onClose: n,
    "aria-label": g.intl.string(g.t.ogxXGq),
    onSelect: h,
    children: [m, (0, r.jsxs)(i.kSQ, {
      children: [_, b]
    }), (0, r.jsx)(i.kSQ, {
      children: E
    }), (0, r.jsx)(i.kSQ, {
      children: O
    }), v]
  })
}