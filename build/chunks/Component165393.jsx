/** Chunk was on 82477 **/
/** chunk id: 165393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk649742 = require("./649742.js");
let d = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];

function f(e) {
  return (0, o.Rf)(d[function(e) {
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
    className: l,
    icon: o
  } = e, [d, h] = i.useState(f(n));
  return i.useEffect(() => {
    h(f(n))
  }, [n]), (0, r.jsxs)("div", {
    className: a()(u.wrapper, l),
    children: [(0, r.jsx)(c.ZP, {
      mask: c.ZP.Masks.STATUS_SCREENSHARE,
      width: 32,
      height: 32,
      children: null == o || 0 === o.length ? (0, r.jsx)("div", {
        className: u.icon,
        style: {
          backgroundColor: d
        },
        children: null != (t = n[0]) ? t : "?"
      }) : (0, r.jsx)("img", {
        alt: "",
        src: o,
        className: u.icon
      })
    }), (0, r.jsx)(s.Odl, {
      size: "md",
      color: "currentColor",
      className: u.badge
    })]
  })
}