/** Chunk was on 16985 **/
/** chunk id: 30434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk925477 = require("./925477.js"),
  Chunk59662 = require("./59662.js"),
  Chunk700425 = require("./700425.js");

function c(e) {
  let {
    node: t,
    children: n
  } = e, {
    navTransition: c
  } = (0, o.t)(), s = l.useRef(null), u = l.useContext(i.Sf).reducedMotion.enabled, {
    onProgrammaticScrollStart: d
  } = (0, a.y)(t);
  return l.useEffect(() => {
    if ((null == c ? true : c.target) === t.key) {
      var e;
      d(), null == (e = s.current) || e.scrollIntoView({
        behavior: c.animateScroll && !u ? "smooth" : "auto",
        block: "start"
      }), c.complete()
    }
  }, [c, t.key, d, u]), (0, r.jsx)("div", {
    ref: s,
    "data-debug-key": t.key,
    children: n
  })
}