/** Chunk was on 29679 **/
/** chunk id: 966357, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk572073 = require("./572073.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    m = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    p = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    f = Chunk647438.useMemo(() => (null == require ? true : require.status) === 429 ? Chunk388032.intl.string(Chunk572073.default["bFRS/s"]) : null == require ? true : require.getAnyErrorMessage(), [require]),
    h = Chunk647438.useCallback(() => {
      if (null == module || null == m) return;
      let t = {
        tag: m.tag,
        badge: m.badge,
        badgeColorPrimary: m.badgeColorPrimary,
        badgeColorSecondary: m.badgeColorSecondary
      };
      (0, Chunk699553.pV)(module.id, exports)
    }, [module, m]),
    b = Chunk647438.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: p,
    errorMessage: f,
    onSave: h,
    onReset: b
  })
}