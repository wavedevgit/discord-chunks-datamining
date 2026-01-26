/** Chunk was on 97887 **/
/** chunk id: 118277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk143245 = require("./143245.js");
let d = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];

function p(e) {
  return (0, a.Hl)(d[function(e) {
    let t = 5381,
      n = 0;
    for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
    return t >>> 0
  }(e) % d.length])
}

function h(e) {
  var t;
  let {
    title: n,
    className: i,
    icon: a
  } = e, [d, h] = l.useState(p(n));
  return l.useEffect(() => {
    h(p(n))
  }, [n]), (0, r.jsxs)("div", {
    className: s()(u.iE, i),
    children: [(0, r.jsx)(c.Ay, {
      mask: c.Ay.Masks.STATUS_SCREENSHARE,
      width: 32,
      height: 32,
      children: null == a || 0 === a.length ? (0, r.jsx)("div", {
        className: u.Kk,
        style: {
          backgroundColor: d
        },
        children: null != (t = n[0]) ? t : "?"
      }) : (0, r.jsx)("img", {
        alt: "",
        src: a,
        className: u.Kk
      })
    }), (0, r.jsx)(o.npA, {
      size: "md",
      color: "currentColor",
      className: u.qS
    })]
  })
}