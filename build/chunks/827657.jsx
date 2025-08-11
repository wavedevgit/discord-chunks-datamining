/** Chunk was on 6850 **/
/** chunk id: 827657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk994463 = require("./994463.js"),
  Chunk472596 = require("./472596.js"),
  Chunk918192 = require("./918192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk128863 = require("./128863.js");

function d(e) {
  let {
    searchState: t
  } = e, n = l.useMemo(() => ({
    [a.po.LOADING]: null,
    [a.po.SUCCESS_STILL_INDEXING]: {
      icon: <i.Z />,
      message: c.intl.string(c.t.AXPbZm)
    },
    [a.po.SUCCESS_EMPTY]: {
      icon: <s.Z />,
      message: c.intl.string(c.t["wdyR5+"])
    },
    [a.po.SUCCESS_FULL]: null
  }), [])[t];
  return null == n ? null : <div className={u.noResultsContainer}>{<div className={u.__invalid_noResultsIconContainer}>{n.icon}</div>}{<o.Text variant={"text-md/normal"} color={"text-muted"}>{n.message}</o.Text>}</div>
}