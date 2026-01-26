/** Chunk was on 51607 **/
/** chunk id: 320490, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk684013 = require("./684013.js"),
  Chunk592598 = require("./592598.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function f(t) {
  let {
    onSelect: e,
    onClose: i
  } = t, f = (0, c.bG)([l.A], () => l.A.isNotificationDisabled(u.KS.TextChat)), h = n.useRef(i);
  return n.useEffect(() => {
    h.current = i
  }), n.useEffect(() => () => {
    var t;
    return null == (t = h.current) ? true : t.call(h)
  }, []), (0, a.jsx)(s.W1t, {
    "data-menu-migrated-auto": true,
    navId: "overlay-notifications-widget-context-menu",
    onClose: o.Z_,
    "aria-label": d.intl.string(d.t.tPfVWi),
    onSelect: e,
    children: (0, a.jsx)(s.sLh, {
      label: d.intl.string(d.t.Fy5kPp),
      checked: !f,
      id: "overlay-text-chat-notifications",
      action: () => r.A.setNotificationDisabled(u.KS.TextChat, !f)
    })
  })
}