/** Chunk was on 36878 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk445642 = require("./445642.js");
let a = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    useSubtitle: u
  } = t, [c, d] = l.useState(false), f = null == n ? true : n(c), g = null == u ? true : u();
  return (0, i.jsx)("div", {
    className: r.accordion,
    children: (0, i.jsx)(o.I, {
      title: f,
      subtitle: g,
      isOpen: c,
      setIsOpen: d,
      children: a.map(e => (0, i.jsx)(s.Z, {
        node: e
      }, e.key))
    })
  })
})