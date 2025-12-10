/** Chunk was on 49941 **/
/** chunk id: 533815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  } = (0, s.KZ)();
  return (0, r.jsx)(a.u, {
    text: u.intl.string(u.t.HUvyDc),
    ariaHidden: true,
    children: (0, r.jsx)(o.P3F, {
      innerRef: g,
      onClick: () => {
        (0, c.$b)(n, t.applicationId), o.uvj.announce(u.intl.string(u.t["08HmMj"])), m({
          action: "GAME_REMOVED",
          gameId: t.applicationId,
          widgetEdited: n
        }), null == p || p()
      },
      "aria-label": u.intl.string(u.t.HUvyDc),
      className: l()(f, d.clickable),
      children: (0, r.jsx)(o.XHJ, {
        size: i,
        className: d.icon,
        color: o.TVs.colors.STATUS_DANGER
      })
    })
  })
}