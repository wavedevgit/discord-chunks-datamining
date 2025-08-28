/** Chunk was on 47129 **/
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
  } = t, [c, d] = r.useState(false), _ = null == n ? true : n(c), E = null == u ? true : u();
  return (0, i.jsx)("div", {
    className: s.accordion,
    children: (0, i.jsx)(o.I, {
      title: _,
      subtitle: E,
      isOpen: c,
      setIsOpen: d,
      children: a.map(e => (0, i.jsx)(l.Z, {
        node: e
      }, e.key))
    })
  })
})