/** Chunk was on 46984 **/
/** chunk id: 30434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk925477 = require("./925477.js"),
  Chunk59662 = require("./59662.js");

function a(e) {
  let {
    node: t,
    children: n
  } = e, {
    navTransition: a
  } = (0, o.t)(), s = l.useRef(null), c = l.useContext(i.Sf).reducedMotion.enabled;
  return l.useEffect(() => {
    if ((null == a ? true : a.target) === t.key) {
      var e;
      null == (e = s.current) || e.scrollIntoView({
        behavior: a.animateScroll && !c ? "smooth" : "auto",
        block: "start"
      }), a.complete()
    }
  }, [a, t.key, c]), (0, r.jsx)("div", {
    ref: s,
    "data-debug-key": t.key,
    children: n
  })
}