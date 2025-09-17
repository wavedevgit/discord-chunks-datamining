/** Chunk was on 10576 **/
/** chunk id: 285173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk231338 = require("./231338.js");

function o(e) {
  var t;
  let {
    guildId: n,
    role: o,
    className: u,
    canRemove: c = false,
    onRemove: E = s.dG
  } = e, d = (0, i.dQu)(i.TVs.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == o ? true : o.colorString) ? t : d, A = l.useMemo(() => ({
    backgroundColor: "".concat(_, "27")
  }), [_]);
  return null == o ? null : (0, r.jsx)(i.P3F, {
    children: (0, r.jsx)(a.UB, {
      className: u,
      style: A,
      role: o,
      guildId: n,
      canRemove: c,
      onRemove: E
    })
  })
}