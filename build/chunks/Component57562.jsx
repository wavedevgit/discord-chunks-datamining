/** Chunk was on web.js **/
/** chunk id: 57562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => d,
  T: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk955204 = require("./955204.js"),
  Chunk510273 = require("./510273.jsx"),
  Chunk388032 = require("./388032.jsx");
let c = 6e3;

function u(e) {
  a.Z.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let n = (0, o.oX)(e);
  null != n && (0, i.showToast)((0, i.createToast)(l.intl.string(l.t.MPpEUA), i.ToastType.CUSTOM, {
    position: i.ToastPosition.BOTTOM,
    component: (0, r.jsx)(s.Z, {
      achievement: n,
      unlocked: t
    }),
    duration: c
  }))
}