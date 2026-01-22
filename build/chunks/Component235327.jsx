/** Chunk was on 39572 **/
/** chunk id: 235327, original params: l,i,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(l) {
  let {
    guild: i,
    shiftId: n,
    onSelect: d,
    closePopout: o,
    "aria-label": u
  } = l, p = (0, c.A)({
    id: i.id,
    label: r.intl.string(r.t["94lLD7"]),
    shiftId: n,
    onSuccess: o
  }), h = t.useCallback(l => {
    l.stopPropagation()
  }, []);
  return (0, e.jsx)(a.DUT, {
    onClick: h,
    children: (0, e.jsx)(a.W1t, {
      onSelect: d,
      navId: "guild-discovery-context-menu",
      "aria-label": null != u ? u : r.intl.string(r.t.ogxXGq),
      onClose: s.Z_,
      children: (0, e.jsx)(a.rXV, {
        children: p
      })
    })
  })
}