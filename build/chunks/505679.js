/** Chunk was on web.js **/
/** chunk id: 505679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk953992 = require("./953992.js"),
  Chunk397927 = require("./397927.js");

function s(e) {
  let {
    shouldShow: t,
    onExitComplete: n,
    onAnimationRest: s
  } = e, {
    reducedMotion: l
  } = r.useContext(i.CZY), c = {
    scale: .95,
    opacity: 0
  }, u = {
    scale: 1,
    opacity: 0
  }, d = {
    scale: 1,
    opacity: 1
  };
  return (0, o.pnh)(t, {
    keys: e => e ? "tooltip" : "empty",
    config: a.p,
    from: l.enabled ? u : c,
    enter: d,
    leave: l.enabled ? u : c,
    onRest: (e, r) => {
      t || null == n || n(), null == s || s(e, r)
    }
  }, "animate-always")
}