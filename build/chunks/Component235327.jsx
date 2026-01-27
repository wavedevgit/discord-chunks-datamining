/** Chunk was on 39572 **/
/** chunk id: 235327, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  let {
    guild: a,
    shiftId: e,
    onSelect: d,
    closePopout: o,
    "aria-label": u
  } = t, p = (0, r.A)({
    id: a.id,
    label: c.intl.string(c.t["94lLD7"]),
    shiftId: e,
    onSuccess: o
  }), h = l.useCallback(t => {
    t.stopPropagation()
  }, []);
  return (0, i.jsx)(n.DUT, {
    onClick: h,
    children: (0, i.jsx)(n.W1t, {
      "data-menu-migrated-auto": true,
      onSelect: d,
      navId: "guild-discovery-context-menu",
      "aria-label": null != u ? u : c.intl.string(c.t.ogxXGq),
      onClose: s.Z_,
      children: (0, i.jsx)(n.rXV, {
        children: p
      })
    })
  })
}