/** Chunk was on 36073 **/
/** chunk id: 533815, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    game: t,
    widgetType: r,
    iconSize: i = "refresh_sm",
    className: g
  } = e, {
    trackUserProfileEditAction: f
  } = (0, c.KZ)();
  return (0, n.jsx)(o.u, {
    text: u.intl.string(u.t.HUvyDQ),
    children: (0, n.jsx)(l.P3F, {
      onClick: () => {
        (0, s.$b)(r, t.applicationId), l.uvj.announce(u.intl.string(u.t["08HmMj"])), f({
          action: "GAME_REMOVED",
          gameId: t.applicationId,
          widgetEdited: r
        })
      },
      "aria-label": u.intl.string(u.t.HUvyDQ),
      className: a()(g, d.clickable),
      children: (0, n.jsx)(l.XHJ, {
        size: i,
        className: d.icon,
        color: l.TVs.colors.STATUS_DANGER
      })
    })
  })
}