/** Chunk was on 6049 **/
/** chunk id: 308619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js");

function u() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    u = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    m = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    g = Chunk73800.useMemo(() => null == require ? true : require.getAnyErrorMessage(), [require]),
    p = Chunk73800.useCallback(() => {
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
    h = Chunk73800.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk255367.jsx)(Chunk852860.Z, {
    submitting: m,
    errorMessage: g,
    onSave: p,
    onReset: h
  })
}