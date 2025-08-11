/** Chunk was on 12097 **/
/** chunk id: 285173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk412899 = require("./412899.js"),
  Chunk231338 = require("./231338.js");

function o(e) {
  var t;
  let {
    guildId: n,
    role: o,
    className: u,
    canRemove: c = false,
    onRemove: E = a.dG
  } = e, d = (0, s.dQu)(s.TVs.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == o ? true : o.colorString) ? t : d, A = l.useMemo(() => ({
    backgroundColor: "".concat(_, "27")
  }), [_]);
  return null == o ? null : <s.P3F><i.UB className={u} style={A} role={o} guildId={n} canRemove={c} onRemove={E} /></s.P3F>
}