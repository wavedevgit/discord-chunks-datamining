/** Chunk was on 68535 **/
/** chunk id: 602320, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk995532 = require("./995532.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  var l;
  let {
    guildId: t,
    welcomeChannel: o,
    onChannelReorder: r,
    onShowDeleteModal: h,
    index: u,
    onSelect: b
  } = e, g = (0, i.e7)([d.Z], () => d.Z.get(t)), p = (null != (l = null == g ? true : g.welcome_channels) ? l : []).length - 1, x = e => {
    r(o, e, true)
  };
  return (0, n.jsxs)(s.v2r, {
    navId: "welcome-settings-context",
    "aria-label": c.intl.string(c.t.ogxXGq),
    onClose: a.Zy,
    onSelect: b,
    children: [(0, n.jsxs)(s.kSQ, {
      children: [(0, n.jsx)(s.sNh, {
        id: "move-up",
        label: c.intl.string(c.t["4UBqwA"]),
        disabled: u <= 0,
        action: () => x(u - 1)
      }), (0, n.jsx)(s.sNh, {
        id: "move-down",
        label: c.intl.string(c.t.b73Gwa),
        disabled: u >= p,
        action: () => x(u + 1)
      })]
    }), (0, n.jsx)(s.kSQ, {
      children: (0, n.jsx)(s.sNh, {
        id: "delete",
        label: c.intl.string(c.t.JYBc3K),
        action: h,
        color: "danger"
      })
    })]
  })
}