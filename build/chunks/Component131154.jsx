/** Chunk was on 97476 **/
/** chunk id: 131154, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk966786 = require("./966786.js");

function d(e) {
  let {
    guild: n,
    speakers: t,
    speakerCount: i,
    className: d
  } = e, s = t.slice(0, 5), u = s.map(e => {
    var t, i;
    return (0, a.jsxs)("div", {
      className: o.speakerContainer,
      children: [(0, a.jsx)(l.qEK, {
        src: null == e || null == (t = e.user) ? true : t.getAvatarURL(n.id, 20),
        size: l.EFr.SIZE_20,
        className: o.avatar,
        "aria-label": "".concat(null == e ? true : e.userNick, "-avatar")
      }), (0, a.jsx)("div", {
        className: o.textInGridContainer,
        children: (0, a.jsx)(l.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: o.textInGrid,
          children: null == e ? true : e.userNick
        })
      })]
    }, null == e || null == (i = e.user) ? true : i.id)
  }), b = i - s.length;
  return (0, a.jsxs)("div", {
    className: r()(o.grid, d),
    children: [u, b > 0 && (0, a.jsxs)("div", {
      className: o.speakerContainer,
      children: [(0, a.jsx)("div", {
        className: o.iconMicrophone,
        children: (0, a.jsx)(l.S6n, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, a.jsx)(l.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        className: o.textInGrid,
        children: c.intl.format(c.t["185ggO"], {
          count: b
        })
      })]
    })]
  })
}