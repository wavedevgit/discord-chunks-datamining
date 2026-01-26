/** Chunk was on 84913 **/
/** chunk id: 36456, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk684407 = require("./684407.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  var t;
  let {
    guildId: l,
    welcomeChannel: o,
    onChannelReorder: c,
    onShowDeleteModal: p,
    index: u,
    onSelect: b
  } = e, g = (0, i.bG)([d.A], () => d.A.get(l)), h = (null != (t = null == g ? true : g.welcome_channels) ? t : []).length - 1, x = e => {
    c(o, e, true)
  };
  return (0, n.jsxs)(a.W1t, {
    "data-menu-migrated-auto": true,
    navId: "welcome-settings-context",
    "aria-label": r.intl.string(r.t.ogxXGq),
    onClose: s.Z_,
    onSelect: b,
    children: [(0, n.jsxs)(a.rXV, {
      children: [(0, n.jsx)(a.Drp, {
        id: "move-up",
        label: r.intl.string(r.t["4UBqwA"]),
        disabled: u <= 0,
        action: () => x(u - 1)
      }), (0, n.jsx)(a.Drp, {
        id: "move-down",
        label: r.intl.string(r.t.b73Gwa),
        disabled: u >= h,
        action: () => x(u + 1)
      })]
    }), (0, n.jsx)(a.rXV, {
      children: (0, n.jsx)(a.Drp, {
        id: "delete",
        label: r.intl.string(r.t.JYBc3K),
        action: p,
        color: "danger"
      })
    })]
  })
}