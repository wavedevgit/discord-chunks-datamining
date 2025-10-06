/** Chunk was on 29679 **/
/** chunk id: 802005, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk736617 = require("./736617.js"),
  Chunk566084 = require("./566084.js"),
  Chunk196961 = require("./196961.js"),
  Chunk203377 = require("./203377.js");

function g() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, Chunk442837.cj)([Chunk566084.Z], () => ({
    vanityURLCode: Chunk566084.Z.vanityURLCode,
    hasChanges: Chunk566084.Z.hasChanges(),
    errorDetails: Chunk566084.Z.errorDetails
  })), {
    guild: g,
    submitting: p,
    errors: f,
    hasChanges: h
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), x = Chunk647438.useMemo(() => null != require ? (0, Chunk196961.i)(null == require ? true : require.code) : (0, Chunk203377.LG)(f), [f, require]), b = Chunk647438.useCallback(async () => {
    if (null != g && (exports && await (0, Chunk736617.en)(g.id, module, {
        throwErr: true
      }), h)) {
      let e = {
        premiumProgressBarEnabled: g.premiumProgressBarEnabled,
        banner: g.banner,
        splash: g.splash
      };
      await Chunk434404.Z.saveGuild(g.id, module, {
        throwErr: true
      })
    }
  }, [g, h, exports, module]), j = Chunk647438.useCallback(() => {
    null != g && (Chunk434404.Z.init(g.id), (0, Chunk736617.H7)())
  }, [g]);
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: p,
    errorMessage: x,
    onSave: b,
    onReset: j
  })
}