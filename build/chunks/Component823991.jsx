/** Chunk was on 96110 **/
/** chunk id: 823991, original params: e,c,a (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  t = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928103 = require("./928103.js");

function s(e) {
  let {
    guild: c,
    speakers: a,
    speakerCount: l,
    className: s
  } = e, i = a.slice(0, 5), o = i.map(e => {
    var a, l;
    return (0, n.jsxs)("div", {
      className: f.dq,
      children: [(0, n.jsx)(d.euF, {
        src: null == e || null == (a = e.user) ? true : a.getAvatarURL(c.id, 20),
        size: d._3J.SIZE_20,
        className: f.my,
        "aria-label": "".concat(null == e ? true : e.userNick, "-avatar")
      }), (0, n.jsx)("div", {
        className: f.CU,
        children: (0, n.jsx)(d.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: f.br,
          children: null == e ? true : e.userNick
        })
      })]
    }, null == e || null == (l = e.user) ? true : l.id)
  }), b = l - i.length;
  return (0, n.jsxs)("div", {
    className: t()(f.Vg, s),
    children: [o, b > 0 && (0, n.jsxs)("div", {
      className: f.dq,
      children: [(0, n.jsx)("div", {
        className: f.Ko,
        children: (0, n.jsx)(d.cNw, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, n.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        className: f.br,
        children: r.intl.format(r.t["185ggO"], {
          count: b
        })
      })]
    })]
  })
}