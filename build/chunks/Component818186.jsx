/** Chunk was on 46467 **/
/** chunk id: 818186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk529103 = require("./529103.js"),
  Chunk497089 = require("./497089.js"),
  Chunk849862 = require("./849862.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk658235 = require("./658235.js");

function p(e) {
  let {
    closePopout: t
  } = e, n = (0, c.If)();
  return (0, r.jsx)(l.u, {
    asContainer: true,
    text: h.intl.string(h.t["lMR96+"]),
    children: (0, r.jsxs)(o.P3F, {
      "aria-label": "".concat(h.intl.string(h.t["lMR96+"]), ", ").concat(n),
      className: f.friendRequestsButton,
      onClick: () => {
        u.default.track(d.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK
        }), a.Z.transitionToSection(d.pJs.PENDING, {
          explicit: true
        }), t()
      },
      children: [(0, r.jsx)(o.iFz, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(o.mAB, {
        count: n,
        color: i.Z.colors.BACKGROUND_ACCENT.css
      })]
    })
  })
}