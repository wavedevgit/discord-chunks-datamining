/** Chunk was on 64982 **/
/** chunk id: 802005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk736617 = require("./736617.js"),
  Chunk566084 = require("./566084.js"),
  Chunk196961 = require("./196961.js"),
  Chunk203377 = require("./203377.js");

function m() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, Chunk442837.cj)([Chunk566084.Z], () => ({
    vanityURLCode: Chunk566084.Z.vanityURLCode,
    hasChanges: Chunk566084.Z.hasChanges(),
    errorDetails: Chunk566084.Z.errorDetails
  })), {
    guild: m,
    submitting: p,
    errors: f,
    hasChanges: h
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), b = Chunk647438.useMemo(() => null != require ? (0, Chunk196961.i)(null == require ? true : require.code) : (0, Chunk203377.LG)(f), [f, require]), x = Chunk647438.useCallback(async () => {
    if (null != m && (exports && await (0, Chunk736617.en)(m.id, module, {
        throwErr: true
      }), h)) {
      let e = {
        premiumProgressBarEnabled: m.premiumProgressBarEnabled,
        banner: m.banner,
        splash: m.splash
      };
      await Chunk434404.Z.saveGuild(m.id, module, {
        throwErr: true
      })
    }
  }, [m, h, exports, module]), j = Chunk647438.useCallback(() => {
    null != m && (Chunk434404.Z.init(m.id), (0, Chunk736617.H7)())
  }, [m]);
  return (0, Chunk951288.jsx)(Chunk796027.Z, {
    submitting: p,
    errorMessage: b,
    onSave: x,
    onReset: j
  })
}