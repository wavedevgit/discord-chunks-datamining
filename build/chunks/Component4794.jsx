/** Chunk was on 76210 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk445642 = require("./445642.js");
let u = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    useSubtitle: a
  } = t, [c, d] = i.useState(false), f = null == n ? true : n(c), g = null == a ? true : a();
  return (0, l.jsx)("div", {
    className: o.accordion,
    children: (0, l.jsx)(s.I, {
      title: f,
      subtitle: g,
      isOpen: c,
      setIsOpen: d,
      children: u.map(e => (0, l.jsx)(r.Z, {
        node: e
      }, e.key))
    })
  })
})