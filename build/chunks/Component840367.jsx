/** Chunk was on 29458 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk825354 = require("./825354.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk678299 = require("./678299.js");
let m = {
  [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar6),
  [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnur),
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwc),
  [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKER)
};

function g(e) {
  var t;
  let {
    userId: n,
    headingId: g,
    widget: b,
    disableInteraction: j = false
  } = e, y = (0, o.e7)([c.default], () => c.default.getId() === n), x = (0, s.kQ)(b), O = m[b.type](), h = y ? (t = b.type) === i.l.FAVORITE_GAMES ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], {
    numGames: l.k[t]
  }) : true;
  return (0, r.jsxs)("div", {
    className: p.headerRow,
    children: [(0, r.jsxs)("div", {
      className: p.title,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: g,
        children: O
      }), null != h && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: h
      })]
    }), y && !j && (0, r.jsxs)("div", {
      className: p.actions,
      children: [(0, r.jsx)(d.Z, {
        disabled: x,
        widgetType: b.type
      }), (0, r.jsx)(u.Z, {
        widget: b
      })]
    })]
  })
}