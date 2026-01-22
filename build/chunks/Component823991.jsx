/** Chunk was on 81899 **/
/** chunk id: 823991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928103 = require("./928103.js");

function d(e) {
  let {
    guild: t,
    speakers: n,
    speakerCount: a,
    className: d
  } = e, o = n.slice(0, 5), u = o.map(e => {
    var n, a;
    return (0, l.jsxs)("div", {
      className: s.dq,
      children: [(0, l.jsx)(i.euF, {
        src: null == e || null == (n = e.user) ? true : n.getAvatarURL(t.id, 20),
        size: i._3J.SIZE_20,
        className: s.my,
        "aria-label": "".concat(null == e ? true : e.userNick, "-avatar")
      }), (0, l.jsx)("div", {
        className: s.CU,
        children: (0, l.jsx)(i.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: s.br,
          children: null == e ? true : e.userNick
        })
      })]
    }, null == e || null == (a = e.user) ? true : a.id)
  }), f = a - o.length;
  return (0, l.jsxs)("div", {
    className: c()(s.Vg, d),
    children: [u, f > 0 && (0, l.jsxs)("div", {
      className: s.dq,
      children: [(0, l.jsx)("div", {
        className: s.Ko,
        children: (0, l.jsx)(i.cNw, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, l.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        className: s.br,
        children: r.intl.format(r.t["185ggO"], {
          count: f
        })
      })]
    })]
  })
}