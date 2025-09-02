/** Chunk was on 47129 **/
/** chunk id: 30434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk59662 = require("./59662.js");

function o(e) {
  let {
    node: t,
    children: n
  } = e, {
    navTransition: o
  } = (0, l.t)(), s = i.useRef(null);
  return i.useEffect(() => {
    var e, n;
    (null == o || null == (e = o.target) ? true : e.key) === t.key && (null == (n = s.current) || n.scrollIntoView({
      behavior: o.animateScroll ? "smooth" : "auto",
      block: "center"
    }), o.complete())
  }, [o, t.key]), (0, r.jsx)("div", {
    ref: s,
    "data-debug-key": t.key,
    children: n
  })
}