/** Chunk was on web.js **/
/** chunk id: 342134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk377527 = require("./377527.js"),
  Chunk481060 = require("./481060.js");

function s(e) {
  let {
    shouldShow: t,
    onExitComplete: n,
    onAnimationRest: s
  } = e, {
    reducedMotion: l
  } = r.useContext(i.Sfi), c = {
    scale: .95,
    opacity: 0
  }, u = {
    scale: 1,
    opacity: 0
  }, d = {
    scale: 1,
    opacity: 1
  };
  return (0, o.Yzy)(t, {
    keys: e => e ? "tooltip" : "empty",
    config: a.F,
    from: l.enabled ? u : c,
    enter: d,
    leave: l.enabled ? u : c,
    onRest: (e, r) => {
      t || null == n || n(), null == s || s(e, r)
    }
  }, "animate-always")
}