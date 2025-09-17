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
  Chunk445642 = require("./445642.js");
let u = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    useSubtitle: c
  } = t, [d, g] = i.useState(false), {
    navTransition: f
  } = (0, l.t)();
  i.useEffect(() => {
    var e;
    (null == f || null == (e = f.targetAccordion) ? true : e.key) === t.key && g(true)
  }, [null == f ? true : f.targetAccordion, t.key]);
  let y = null == n ? true : n(d),
    O = null == c ? true : c();
  return (0, r.jsx)("div", {
    className: s.accordion,
    children: (0, r.jsx)(a.I, {
      title: y,
      subtitle: O,
      isOpen: d,
      setIsOpen: g,
      children: u.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))
    })
  })
})