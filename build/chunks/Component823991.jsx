/** Chunk was on 96110 **/
/** chunk id: 823991, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928103 = require("./928103.js");

function _(e) {
  let {
    guild: n,
    speakers: t,
    speakerCount: r,
    className: _
  } = e, s = t.slice(0, 5), d = s.map(e => {
    var t, r;
    return (0, a.jsxs)("div", {
      className: c.dq,
      children: [(0, a.jsx)(l.euF, {
        src: null == e || null == (t = e.user) ? true : t.getAvatarURL(n.id, 20),
        size: l._3J.SIZE_20,
        className: c.my,
        "aria-label": "".concat(null == e ? true : e.userNick, "-avatar")
      }), (0, a.jsx)("div", {
        className: c.CU,
        children: (0, a.jsx)(l.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: c.br,
          children: null == e ? true : e.userNick
        })
      })]
    }, null == e || null == (r = e.user) ? true : r.id)
  }), u = r - s.length;
  return (0, a.jsxs)("div", {
    className: i()(c.Vg, _),
    children: [d, u > 0 && (0, a.jsxs)("div", {
      className: c.dq,
      children: [(0, a.jsx)("div", {
        className: c.Ko,
        children: (0, a.jsx)(l.cNw, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, a.jsx)(l.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        className: c.br,
        children: o.intl.format(o.t["185ggO"], {
          count: u
        })
      })]
    })]
  })
}