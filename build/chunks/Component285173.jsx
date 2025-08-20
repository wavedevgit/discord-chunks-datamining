/** Chunk was on 7318 **/
/** chunk id: 285173, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk231338 = require("./231338.js");

function a(A) {
  var e;
  let {
    guildId: t,
    role: a,
    className: o,
    canRemove: g = false,
    onRemove: c = s.dG
  } = A, f = (0, l.dQu)(l.TVs.unsafe_rawColors.PRIMARY_300).hex(), v = null != (e = null == a ? true : a.colorString) ? e : f, h = r.useMemo(() => ({
    backgroundColor: "".concat(v, "27")
  }), [v]);
  return null == a ? null : (0, n.jsx)(l.P3F, {
    children: (0, n.jsx)(i.UB, {
      className: o,
      style: h,
      role: a,
      guildId: t,
      canRemove: g,
      onRemove: c
    })
  })
}