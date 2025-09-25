/** Chunk was on 64523 **/
/** chunk id: 993097, original params: e,t,n (module,exports,require) **/
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
    errors: f,
    hasChanges: h
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), x = Chunk647438.useMemo(() => null != require ? (0, Chunk770270.i)(null == require ? true : require.code) : (0, Chunk203377.LG)(f), [f, require]), b = Chunk647438.useCallback(async () => {
    if (null != g && (exports && await (0, Chunk621319.en)(g.id, module, {
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
    null != g && (Chunk434404.Z.init(g.id), (0, Chunk621319.H7)())
  }, [g]);
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: p,
    errorMessage: x,
    onSave: b,
    onReset: j
  })
}