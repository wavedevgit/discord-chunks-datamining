/** Chunk was on 6850 **/
/** chunk id: 827657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk994463 = require("./994463.jsx"),
  Chunk472596 = require("./472596.js"),
  Chunk918192 = require("./918192.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk913997 = require("./913997.js");

function u(e) {
  let {
    searchState: t
  } = e, n = l.useMemo(() => ({
    [o.po.LOADING]: null,
    [o.po.SUCCESS_STILL_INDEXING]: {
      icon: (0, r.jsx)(a.Z, {}),
      message: c.intl.string(c.t.AXPbZr)
    },
    [o.po.SUCCESS_EMPTY]: {
      icon: (0, r.jsx)(s.Z, {}),
      message: c.intl.string(c.t.wdyR52)
    },
    [o.po.SUCCESS_FULL]: null
  }), [])[t];
  return null == n ? null : (0, r.jsxs)("div", {
    className: d.noResultsContainer,
    children: [(0, r.jsx)("div", {
      className: d.__invalid_noResultsIconContainer,
      children: n.icon
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: n.message
    })]
  })
}