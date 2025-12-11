/** Chunk was on 9536 **/
/** chunk id: 802005, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  C: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk736617 = require("./736617.js"),
  Chunk566084 = require("./566084.js"),
  Chunk196961 = require("./196961.js"),
  Chunk203377 = require("./203377.js");

function f() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, Chunk442837.cj)([Chunk566084.Z], () => ({
    vanityURLCode: Chunk566084.Z.vanityURLCode,
    hasChanges: Chunk566084.Z.hasChanges(),
    errorDetails: Chunk566084.Z.errorDetails
  })), {
    guild: f,
    submitting: m,
    errors: b,
    hasChanges: p
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), h = Chunk473749.useMemo(() => null != require ? (0, Chunk196961.i)(null == require ? true : require.code) : (0, Chunk203377.LG)(b), [b, require]), x = Chunk473749.useCallback(async () => {
    if (null != f && (exports && await (0, Chunk736617.en)(f.id, module, {
        throwErr: true
      }), p)) {
      let e = {
        premiumProgressBarEnabled: f.premiumProgressBarEnabled,
        banner: f.banner,
        splash: f.splash
      };
      await Chunk434404.Z.saveGuild(f.id, module, {
        throwErr: true
      })
    }
  }, [f, p, exports, module]), j = Chunk473749.useCallback(() => {
    null != f && (Chunk434404.Z.init(f.id), (0, Chunk736617.H7)())
  }, [f]);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: m,
    errorMessage: h,
    onSave: x,
    onReset: j
  })
}