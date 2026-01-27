/** Chunk was on 60667 **/
/** chunk id: 414736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => d,
  _: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927018 = require("./927018.js"),
  Chunk249581 = require("./249581.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  l.h.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let n = (0, s.vM)(e);
  null != n && (0, i.showToast)((0, i.createToast)(o.intl.string(o.t.MPpEUA), i.ToastType.CUSTOM, {
    position: i.ToastPosition.BOTTOM,
    component: (0, r.jsx)(a.A, {
      achievement: n,
      unlocked: t
    }),
    duration: 6e3
  }))
}