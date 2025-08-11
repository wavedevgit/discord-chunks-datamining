/** Chunk was on 88560 **/
/** chunk id: 858523, original params: n,i,l (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(n) {
  let {
    guild: i,
    shiftId: l,
    onSelect: o,
    closePopout: d,
    "aria-label": u
  } = n, h = (0, c.Z)({
    id: i.id,
    label: r.intl.string(r.t["94lLDw"]),
    shiftId: l,
    onSuccess: d
  }), p = t.useCallback(n => {
    n.stopPropagation()
  }, []);
  return <a.P3F onClick={p}><a.v2r onSelect={o} navId={"guild-discovery-context-menu"} aria-label={null != u ? u : r.intl.string(r.t.ogxXGh)} onClose={s.Zy}><a.kSQ>{h}</a.kSQ></a.v2r></a.P3F>
}