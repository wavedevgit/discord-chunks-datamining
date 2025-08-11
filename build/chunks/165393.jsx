/** Chunk was on 34779 **/
/** chunk id: 165393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.js"),
  Chunk629998 = require("./629998.js");
let d = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];

function h(e) {
  return (0, s.Rf)(d[function(e) {
    let t = 5381,
      n = 0;
    for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
    return t >>> 0
  }(e) % d.length])
}

function p(e) {
  var t;
  let {
    title: n,
    className: l,
    icon: s
  } = e, [d, p] = i.useState(h(n));
  return i.useEffect(() => {
    p(h(n))
  }, [n]), <div className={o()(u.wrapper, l)}>{<c.ZP mask={c.ZP.Masks.STATUS_SCREENSHARE} width={32} height={32}>{null == s || 0 === s.length ? (0, r.jsx)("div", {
        className: u.icon,
        style: {
          backgroundColor: d
        },
        children: null != (t = n[0]) ? t : "?"
      }) : (0, r.jsx)("img", {
        alt: "",
        src: s,
        className: u.icon
      })}</c.ZP>}{<a.Odl size={"md"} color={"currentColor"} className={u.badge} />}</div>
}