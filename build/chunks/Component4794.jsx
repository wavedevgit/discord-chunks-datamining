/** Chunk was on 47129 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk475528 = require("./475528.js");
let u = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    useSubtitle: c
  } = t, [d, f] = i.useState(false), {
    navTransition: g
  } = (0, l.t)();
  i.useEffect(() => {
    var e;
    (null == g || null == (e = g.targetAccordion) ? true : e.key) === t.key && f(true)
  }, [null == g ? true : g.targetAccordion, t.key]);
  let y = null == n ? true : n(d),
    O = null == c ? true : c();
  return (0, r.jsx)("div", {
    className: a.accordion,
    children: (0, r.jsx)(s.I, {
      title: y,
      subtitle: O,
      isOpen: d,
      setIsOpen: f,
      children: u.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))
    })
  })
})