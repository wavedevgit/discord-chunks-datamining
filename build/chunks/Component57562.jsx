/** Chunk was on 66181 **/
/** chunk id: 57562, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => d,
  T: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk955204 = require("./955204.js"),
  Chunk510273 = require("./510273.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  s.Z.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let n = (0, a.oX)(e);
  null != n && (0, r.showToast)((0, r.createToast)(o.intl.string(o.t.MPpEUF), r.ToastType.CUSTOM, {
    position: r.ToastPosition.BOTTOM,
    component: (0, i.jsx)(l.Z, {
      achievement: n,
      unlocked: t
    }),
    duration: 6e3
  }))
}