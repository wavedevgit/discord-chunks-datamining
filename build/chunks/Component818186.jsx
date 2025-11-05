/** Chunk was on 27 **/
/** chunk id: 818186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk529103 = require("./529103.js"),
  Chunk377171 = require("./377171.js"),
  Chunk497089 = require("./497089.js"),
  Chunk849862 = require("./849862.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk658235 = require("./658235.js");

function f(e) {
  let {
    closePopout: t
  } = e, n = (0, c.If)();
  return (0, r.jsx)(i.u, {
    asContainer: true,
    text: p.intl.string(p.t["lMR96+"]),
    children: (0, r.jsxs)(l.P3F, {
      "aria-label": "".concat(p.intl.string(p.t["lMR96+"]), ", ").concat(n),
      className: h.friendRequestsButton,
      onClick: () => {
        u.default.track(d.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK
        }), o.Z.transitionToSection(d.pJs.PENDING, {
          explicit: true
        }), t()
      },
      children: [(0, r.jsx)(l.iFz, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(l.mAB, {
        count: n,
        color: a.Z.BACKGROUND_ACCENT
      })]
    })
  })
}