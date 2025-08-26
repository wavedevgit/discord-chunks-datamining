/** Chunk was on 76210 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk445642 = require("./445642.js");
let o = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: o,
    useSubtitle: u
  } = t, [c, d] = i.useState(false), T = null == n ? true : n(c), O = null == u ? true : u();
  return (0, l.jsx)("div", {
    className: a.accordion,
    children: (0, l.jsx)(s.I, {
      title: T,
      subtitle: O,
      isOpen: c,
      setIsOpen: d,
      children: o.map(e => (0, l.jsx)(r.Z, {
        node: e
      }, e.key))
    })
  })
})