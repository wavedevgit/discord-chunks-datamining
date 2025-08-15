/** Chunk was on 94706 **/
/** chunk id: 168133, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk486016 = require("./486016.js"),
  Chunk624864 = require("./624864.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let {
    onSelect: i,
    onClose: e
  } = t, u = (0, c.e7)([d.Z], () => d.Z.isNotificationDisabled(r.OverlayNotificationDisabledSetting.TEXT_CHAT)), b = a.useRef(e);
  return a.useEffect(() => {
    b.current = e
  }), a.useEffect(() => () => b.current(), []), (0, n.jsx)(o.v2r, {
    navId: "overlay-notifications-widget-context-menu",
    onClose: s.Zy,
    "aria-label": f.intl.string(f.t.tPfVWl),
    onSelect: i,
    children: (0, n.jsx)(o.S89, {
      label: f.intl.string(f.t.Fy5kPj),
      checked: u,
      id: "overlay-text-chat-notifications",
      action: () => l.Z.setNotificationDisabledSetting(r.OverlayNotificationDisabledSetting.TEXT_CHAT, !u)
    })
  })
}