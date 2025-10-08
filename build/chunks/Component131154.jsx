/** Chunk was on 98878 **/
/** chunk id: 131154, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140764 = require("./140764.js");

function s(e) {
  let {
    guild: n,
    speakers: t,
    speakerCount: a,
    className: s
  } = e, d = t.slice(0, 5), u = d.map(e => {
    var t, a;
    return (0, i.jsxs)("div", {
      className: c.speakerContainer,
      children: [(0, i.jsx)(l.qEK, {
        src: null == e || null == (t = e.user) ? true : t.getAvatarURL(n.id, 20),
        size: l.EFr.SIZE_20,
        className: c.avatar,
        "aria-label": "".concat(null == e ? true : e.userNick, "-avatar")
      }), (0, i.jsx)("div", {
        className: c.textInGridContainer,
        children: (0, i.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: c.textInGrid,
          children: null == e ? true : e.userNick
        })
      })]
    }, null == e || null == (a = e.user) ? true : a.id)
  }), _ = a - d.length;
  return (0, i.jsxs)("div", {
    className: r()(c.grid, s),
    children: [u, _ > 0 && (0, i.jsxs)("div", {
      className: c.speakerContainer,
      children: [(0, i.jsx)("div", {
        className: c.iconMicrophone,
        children: (0, i.jsx)(l.S6n, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, i.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: c.textInGrid,
        children: o.intl.format(o.t["185ggI"], {
          count: _
        })
      })]
    })]
  })
}