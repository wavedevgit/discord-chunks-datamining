/** Chunk was on 88560 **/
/** chunk id: 858523, original params: n,i,l (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = n, p = (0, c.Z)({
    id: i.id,
    label: r.intl.string(r.t["94lLD7"]),
    shiftId: l,
    onSuccess: d
  }), h = t.useCallback(n => {
    n.stopPropagation()
  }, []);
  return (0, e.jsx)(a.P3F, {
    onClick: h,
    children: (0, e.jsx)(a.v2r, {
      onSelect: o,
      navId: "guild-discovery-context-menu",
      "aria-label": null != u ? u : r.intl.string(r.t.ogxXGq),
      onClose: s.Zy,
      children: (0, e.jsx)(a.kSQ, {
        children: p
      })
    })
  })
}