/** Chunk was on 384 **/
/** chunk id: 308619, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = null == module ? true : module.id,
    n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProfileError()),
    d = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    g = (0, Chunk442837.e7)([Chunk314852.Z], () => Chunk314852.Z.getIsUpdating(exports)),
    m = Chunk473749.useMemo(() => null == require ? true : require.getAnyErrorMessage(), [require]),
    p = Chunk473749.useCallback(() => {
      if (null == module || null == d) return;
      let t = {
        name: d.name,
        description: d.description,
        icon: d.icon,
        brandColorPrimary: d.brandColorPrimary,
        traits: d.traits,
        visibility: d.visibility,
        gameApplicationIds: d.gameApplicationIds,
        customBanner: d.customBanner
      };
      (0, Chunk699553.pV)(module.id, exports)
    }, [module, d]),
    f = Chunk473749.useCallback(() => {
      null != exports && Chunk434404.Z.init(exports)
    }, [exports]);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: g,
    errorMessage: m,
    onSave: p,
    onReset: f
  })
}