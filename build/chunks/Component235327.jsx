/** Chunk was on 39572 **/
/** chunk id: 235327, original params: e,i,l (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk985018 = require("./985018.jsx");

function r(e) {
  let {
    guild: i,
    shiftId: l,
    onSelect: r,
    closePopout: o,
    "aria-label": u
  } = e, p = (0, c.A)({
    id: i.id,
    label: d.intl.string(d.t["94lLD7"]),
    shiftId: l,
    onSuccess: o
  }), h = t.useCallback(e => {
    e.stopPropagation()
  }, []);
  return (0, n.jsx)(a.DUT, {
    onClick: h,
    children: (0, n.jsx)(a.W1t, {
      "data-menu-mixed": true,
      onSelect: r,
      navId: "guild-discovery-context-menu",
      "aria-label": null != u ? u : d.intl.string(d.t.ogxXGq),
      onClose: s.Z_,
      children: (0, n.jsx)(a.rXV, {
        children: p
      })
    })
  })
}