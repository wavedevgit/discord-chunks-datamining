/** Chunk was on 94706 **/
/** chunk id: 168133, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => f
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

function f(t) {
  let {
    onSelect: i,
    onClose: e
  } = t, f = (0, c.e7)([d.Z], () => d.Z.isNotificationDisabled(r.OverlayNotificationDisabledSetting.TEXT_CHAT)), v = a.useRef(e);
  return a.useEffect(() => {
    v.current = e
  }), a.useEffect(() => () => {
    var t;
    return null == (t = v.current) ? true : t.call(v)
  }, []), (0, n.jsx)(l.v2r, {
    navId: "overlay-notifications-widget-context-menu",
    onClose: o.Zy,
    "aria-label": u.intl.string(u.t.tPfVWl),
    onSelect: i,
    children: (0, n.jsx)(l.S89, {
      label: u.intl.string(u.t.Fy5kPj),
      checked: !f,
      id: "overlay-text-chat-notifications",
      action: () => s.Z.setNotificationDisabledSetting(r.OverlayNotificationDisabledSetting.TEXT_CHAT, !f)
    })
  })
}