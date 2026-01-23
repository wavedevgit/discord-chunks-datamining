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
    index: b,
    onSelect: g
  } = e, h = (0, i.bG)([r.A], () => r.A.get(l)), u = (null != (t = null == h ? true : h.welcome_channels) ? t : []).length - 1, x = e => {
    c(o, e, true)
  };
  return (0, n.jsxs)(a.W1t, {
    "data-menu-migration-ready": true,
    navId: "welcome-settings-context",
    "aria-label": d.intl.string(d.t.ogxXGq),
    onClose: s.Z_,
    onSelect: g,
    children: [(0, n.jsxs)(a.rXV, {
      children: [(0, n.jsx)(a.Drp, {
        id: "move-up",
        label: d.intl.string(d.t["4UBqwA"]),
        disabled: b <= 0,
        action: () => x(b - 1)
      }), (0, n.jsx)(a.Drp, {
        id: "move-down",
        label: d.intl.string(d.t.b73Gwa),
        disabled: b >= u,
        action: () => x(b + 1)
      })]
    }), (0, n.jsx)(a.rXV, {
      children: (0, n.jsx)(a.Drp, {
        id: "delete",
        label: d.intl.string(d.t.JYBc3K),
        action: p,
        color: "danger"
      })
    })]
  })
}