/** Chunk was on 9536 **/
/** chunk id: 966357, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk551199 = require("./551199.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    f = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    m = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    b = Chunk473749.useMemo(() => (null == require ? true : require.status) === 429 ? Chunk388032.intl.string(Chunk551199.default["bFRS/s"]) : null == require ? true : require.getAnyErrorMessage(), [require]),
    p = Chunk473749.useCallback(() => {
      if (null == module || null == f) return;
      let t = {
        tag: f.tag,
        badge: f.badge,
        badgeColorPrimary: f.badgeColorPrimary,
        badgeColorSecondary: f.badgeColorSecondary
      };
      (0, Chunk699553.pV)(module.id, exports)
    }, [module, f]),
    h = Chunk473749.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: m,
    errorMessage: b,
    onSave: p,
    onReset: h
  })
}