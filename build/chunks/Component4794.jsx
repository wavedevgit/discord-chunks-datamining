/** Chunk was on 36878 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk445642 = require("./445642.js");
let a = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    useSubtitle: u
  } = t, [c, d] = l.useState(false), f = null == n ? true : n(c), g = null == u ? true : u();
  return (0, i.jsx)("div", {
    className: s.accordion,
    children: (0, i.jsx)(r.I, {
      title: f,
      subtitle: g,
      isOpen: c,
      setIsOpen: d,
      children: a.map(e => (0, i.jsx)(o.Z, {
        node: e
      }, e.key))
    })
  })
})