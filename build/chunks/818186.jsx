/** Chunk was on 34779 **/
/** chunk id: 818186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk529103 = require("./529103.js"),
  Chunk377171 = require("./377171.js"),
  Chunk497089 = require("./497089.js"),
  Chunk849862 = require("./849862.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605938 = require("./605938.js");

function p(e) {
  let {
    closePopout: t
  } = e, n = (0, a.If)();
  return <i.DY3 text={d.intl.string(d.t["lMR96+"])}><i.P3F aria-label={"".concat(d.intl.string(d.t["lMR96+"]), ", ").concat(n)} className={h.friendRequestsButton} onClick={() => {
        c.default.track(u.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK
        }), l.Z.transitionToSection(u.pJs.PENDING, {
          explicit: true
        }), t()
      }}>{<i.iFz size={"xs"} color={"currentColor"} />}{<i.mAB count={n} color={o.Z.BACKGROUND_ACCENT} />}</i.P3F></i.DY3>
}