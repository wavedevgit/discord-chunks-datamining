/** Chunk was on 81014 **/
/** chunk id: 30434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk59662 = require("./59662.js");

function i(e) {
  let {
    node: t,
    children: n
  } = e, {
    navTransition: i
  } = (0, o.t)(), a = l.useRef(null);
  return l.useEffect(() => {
    if ((null == i ? true : i.target) === t.key) {
      var e;
      null == (e = a.current) || e.scrollIntoView({
        behavior: i.animateScroll ? "smooth" : "auto",
        block: "center"
      }), i.complete()
    }
  }, [i, t.key]), (0, r.jsx)("div", {
    ref: a,
    "data-debug-key": t.key,
    children: n
  })
}