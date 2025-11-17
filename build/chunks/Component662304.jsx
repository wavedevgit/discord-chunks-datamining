/** Chunk was on 65354 **/
/** chunk id: 662304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk781293 = require("./781293.js");
let d = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];

function p(e) {
  return (0, a.Rf)(d[function(e) {
    let t = 5381,
      n = 0;
    for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
    return t >>> 0
  }(e) % d.length])
}

function f(e) {
  var t;
  let {
    title: n,
    className: l,
    icon: a
  } = e, [d, f] = i.useState(p(n));
  return i.useEffect(() => {
    f(p(n))
  }, [n]), (0, r.jsxs)("div", {
    className: o()(u.wrapper, l),
    children: [(0, r.jsx)(c.ZP, {
      mask: c.ZP.Masks.STATUS_SCREENSHARE,
      width: 32,
      height: 32,
      children: null == a || 0 === a.length ? (0, r.jsx)("div", {
        className: u.icon,
        style: {
          backgroundColor: d
        },
        children: null != (t = n[0]) ? t : "?"
      }) : (0, r.jsx)("img", {
        alt: "",
        src: a,
        className: u.icon
      })
    }), (0, r.jsx)(s.Odl, {
      size: "md",
      color: "currentColor",
      className: u.badge
    })]
  })
}