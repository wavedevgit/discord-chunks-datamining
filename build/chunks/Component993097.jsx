/** Chunk was on 60458 **/
/** chunk id: 993097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk621319 = require("./621319.js"),
  Chunk44550 = require("./44550.js"),
  Chunk770270 = require("./770270.js"),
  Chunk203377 = require("./203377.js");

function g() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, Chunk442837.cj)([Chunk44550.Z], () => ({
    vanityURLCode: Chunk44550.Z.vanityURLCode,
    hasChanges: Chunk44550.Z.hasChanges(),
    errorDetails: Chunk44550.Z.errorDetails
  })), {
    guild: g,
    submitting: p,
    errors: h,
    hasChanges: f
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), b = Chunk73800.useMemo(() => null != require ? (0, Chunk770270.i)(null == require ? true : require.code) : (0, Chunk203377.LG)(h), [h, require]), x = Chunk73800.useCallback(async () => {
    if (null != g && (exports && await (0, Chunk621319.en)(g.id, module, {
        throwErr: true
      }), f)) {
      let e = {
        premiumProgressBarEnabled: g.premiumProgressBarEnabled,
        banner: g.banner,
        splash: g.splash
      };
      await Chunk434404.Z.saveGuild(g.id, module, {
        throwErr: true
      })
    }
  }, [g, f, exports, module]), j = Chunk73800.useCallback(() => {
    null != g && (Chunk434404.Z.init(g.id), (0, Chunk621319.H7)())
  }, [g]);
  return (0, Chunk255367.jsx)(Chunk852860.Z, {
    submitting: p,
    errorMessage: b,
    onSave: x,
    onReset: j
  })
}