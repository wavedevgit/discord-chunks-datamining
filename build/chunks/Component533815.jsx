/** Chunk was on 47793 **/
/** chunk id: 533815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk51708 = require("./51708.js");

function f(e) {
  let {
    game: t,
    widgetType: n,
    iconSize: i = "refresh_sm",
    className: f,
    buttonRef: g,
    onRemove: p
  } = e, {
    trackUserProfileEditAction: m
  } = (0, c.KZ)();
  return (0, r.jsx)(l.u, {
    text: u.intl.string(u.t.HUvyDc),
    children: (0, r.jsx)(o.P3F, {
      innerRef: g,
      onClick: () => {
        (0, s.$b)(n, t.applicationId), o.uvj.announce(u.intl.string(u.t["08HmMj"])), m({
          action: "GAME_REMOVED",
          gameId: t.applicationId,
          widgetEdited: n
        }), null == p || p()
      },
      "aria-label": u.intl.string(u.t.HUvyDc),
      className: a()(f, d.clickable),
      children: (0, r.jsx)(o.XHJ, {
        size: i,
        className: d.icon,
        color: o.TVs.colors.STATUS_DANGER
      })
    })
  })
}