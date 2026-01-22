/** Chunk was on 84913 **/
/** chunk id: 36456, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk684407 = require("./684407.js"),
  Chunk985018 = require("./985018.jsx");
let c = e => {
  var l;
  let {
    guildId: t,
    welcomeChannel: c,
    onChannelReorder: o,
    onShowDeleteModal: p,
    index: b,
    onSelect: h
  } = e, g = (0, i.bG)([r.A], () => r.A.get(t)), u = (null != (l = null == g ? true : g.welcome_channels) ? l : []).length - 1, x = e => {
    o(c, e, true)
  };
  return (0, n.jsxs)(s.W1t, {
    navId: "welcome-settings-context",
    "aria-label": d.intl.string(d.t.ogxXGq),
    onClose: a.Z_,
    onSelect: h,
    children: [(0, n.jsxs)(s.rXV, {
      children: [(0, n.jsx)(s.Drp, {
        id: "move-up",
        label: d.intl.string(d.t["4UBqwA"]),
        disabled: b <= 0,
        action: () => x(b - 1)
      }), (0, n.jsx)(s.Drp, {
        id: "move-down",
        label: d.intl.string(d.t.b73Gwa),
        disabled: b >= u,
        action: () => x(b + 1)
      })]
    }), (0, n.jsx)(s.rXV, {
      children: (0, n.jsx)(s.Drp, {
        id: "delete",
        label: d.intl.string(d.t.JYBc3K),
        action: p,
        color: "danger"
      })
    })]
  })
}