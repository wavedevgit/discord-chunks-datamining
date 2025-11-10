/** Chunk was on 384 **/
/** chunk id: 308619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js");

function u() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    u = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    g = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    m = Chunk647438.useMemo(() => null == require ? true : require.getAnyErrorMessage(), [require]),
    p = Chunk647438.useCallback(() => {
      if (null == module || null == u) return;
      let t = {
        name: u.name,
        description: u.description,
        icon: u.icon,
        brandColorPrimary: u.brandColorPrimary,
        traits: u.traits,
        visibility: u.visibility,
        gameApplicationIds: u.gameApplicationIds,
        customBanner: u.customBanner
      };
      (0, Chunk699553.pV)(module.id, exports)
    }, [module, u]),
    f = Chunk647438.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk951288.jsx)(Chunk796027.Z, {
    submitting: g,
    errorMessage: m,
    onSave: p,
    onReset: f
  })
}