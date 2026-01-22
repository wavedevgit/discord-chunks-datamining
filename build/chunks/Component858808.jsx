/** Chunk was on 38663 **/
/** chunk id: 858808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk794118 = require("./794118.js");

function f(e) {
  let {
    game: t,
    widgetType: n,
    iconSize: l = "refresh_sm",
    className: f,
    buttonRef: p,
    onRemove: b
  } = e, {
    trackUserProfileEditAction: g
  } = (0, o.NJ)();
  return (0, r.jsx)(a.m, {
    text: u.intl.string(u.t.HUvyDc),
    ariaHidden: true,
    children: (0, r.jsx)(s.DUT, {
      innerRef: p,
      onClick: () => {
        (0, c.ef)(n, t.applicationId), s.ORC.announce(u.intl.string(u.t["08HmMj"])), g({
          action: "GAME_REMOVED",
          gameId: t.applicationId,
          widgetEdited: n
        }), null == b || b()
      },
      "aria-label": u.intl.string(u.t.HUvyDc),
      className: i()(f, d.v),
      children: (0, r.jsx)(s.ucK, {
        size: l,
        className: d.K,
        color: s.LU0.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}