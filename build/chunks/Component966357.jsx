/** Chunk was on 384 **/
/** chunk id: 966357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk766310 = require("./766310.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    m = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    p = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    f = Chunk473749.useMemo(() => (null == require ? true : require.status) === 429 ? Chunk388032.intl.string(Chunk766310.default["bFRS/s"]) : null == require ? true : require.getAnyErrorMessage(), [require]),
    h = Chunk473749.useCallback(() => {
      if (null == module || null == m) return;
      let t = {
        tag: m.tag,
        badge: m.badge,
        badgeColorPrimary: m.badgeColorPrimary,
        badgeColorSecondary: m.badgeColorSecondary
      };
      (0, Chunk699553.pV)(module.id, exports)
    }, [module, m]),
    b = Chunk473749.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: p,
    errorMessage: f,
    onSave: h,
    onReset: b
  })
}