/** Chunk was on 60458 **/
/** chunk id: 209402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    g = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    p = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    h = Chunk73800.useMemo(() => (null == require ? true : require.status) === 429 ? Chunk388032.intl.string(Chunk195196.default["bFRS/v"]) : null == require ? true : require.getAnyErrorMessage(), [require]),
    f = Chunk73800.useCallback(() => {
      if (null == module || null == g) return;
      let t = {
        tag: g.tag,
        badge: g.badge,
        badgeColorPrimary: g.badgeColorPrimary,
        badgeColorSecondary: g.badgeColorSecondary
      };
      (0, Chunk699553.pV)(module.id, exports)
    }, [module, g]),
    b = Chunk73800.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk255367.jsx)(Chunk852860.Z, {
    submitting: p,
    errorMessage: h,
    onSave: f,
    onReset: b
  })
}