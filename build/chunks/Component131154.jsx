/** Chunk was on 84722 **/
/** chunk id: 131154, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449774 = require("./449774.js");

function o(e) {
  let {
    guild: n,
    speakers: t,
    speakerCount: l,
    className: o
  } = e, u = t.slice(0, 5), d = u.map(e => {
    var t, l;
    return (0, i.jsxs)("div", {
      className: c.speakerContainer,
      children: [(0, i.jsx)(a.qEK, {
        src: null == e || null == (t = e.user) ? true : t.getAvatarURL(n.id, 20),
        size: a.EFr.SIZE_20,
        className: c.avatar,
        "aria-label": "".concat(null == e ? true : e.userNick, "-avatar")
      }), (0, i.jsx)("div", {
        className: c.textInGridContainer,
        children: (0, i.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: c.textInGrid,
          children: null == e ? true : e.userNick
        })
      })]
    }, null == e || null == (l = e.user) ? true : l.id)
  }), h = l - u.length;
  return (0, i.jsxs)("div", {
    className: r()(c.grid, o),
    children: [d, h > 0 && (0, i.jsxs)("div", {
      className: c.speakerContainer,
      children: [(0, i.jsx)("div", {
        className: c.iconMicrophone,
        children: (0, i.jsx)(a.S6n, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: c.textInGrid,
        children: s.intl.format(s.t["185ggI"], {
          count: h
        })
      })]
    })]
  })
}