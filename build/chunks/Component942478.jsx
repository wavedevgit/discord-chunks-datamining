/** Chunk was on 384 **/
/** chunk id: 942478, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk843991 = require("./843991.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk203377 = require("./203377.js");

function u() {
  let {
    guild: e,
    originalGuild: t,
    submitting: n,
    errors: u
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), g = Chunk473749.useMemo(() => (0, Chunk203377.LG)(u), [u]), m = Chunk473749.useCallback(async () => {
    if (null == module) return Promise.resolve();
    let n = {
      systemChannelFlags: module.systemChannelFlags,
      systemChannelId: module.systemChannelId,
      afkChannelId: module.afkChannelId,
      afkTimeout: module.afkTimeout,
      defaultMessageNotifications: module.defaultMessageNotifications
    };
    if ((0, Chunk843991.O)(new Set(module.features), new Set(exports.features)) || (require.features = module.features), Chunk999382.Z.hasChanges() && await Chunk434404.Z.saveGuild(module.id, require), Chunk999382.Z.widgetHasChanges()) {
      let {
        enabled: t,
        channelId: n
      } = Chunk999382.Z.getWidget();
      await Chunk434404.Z.updateEmbed(module.id, exports, require)
    }
    return Promise.resolve()
  }, [module, exports]), p = Chunk473749.useCallback(() => {
    null != module && Chunk434404.Z.init(module.id)
  }, [module]);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: require,
    errorMessage: g,
    onSave: m,
    onReset: p
  })
}