/** Chunk was on 94706 **/
/** chunk id: 168133, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
  let {
    onSelect: e,
    onClose: i
  } = t, f = (0, c.e7)([l.Z], () => l.Z.isNotificationDisabled(u.n0.TextChat)), h = a.useRef(i);
  return a.useEffect(() => {
    h.current = i
  }), a.useEffect(() => () => {
    var t;
    return null == (t = h.current) ? true : t.call(h)
  }, []), (0, n.jsx)(s.v2r, {
    navId: "overlay-notifications-widget-context-menu",
    onClose: o.Zy,
    "aria-label": d.intl.string(d.t.tPfVWi),
    onSelect: e,
    children: (0, n.jsx)(s.S89, {
      label: d.intl.string(d.t.Fy5kPp),
      checked: !f,
      id: "overlay-text-chat-notifications",
      action: () => r.Z.setNotificationDisabled(u.n0.TextChat, !f)
    })
  })
}