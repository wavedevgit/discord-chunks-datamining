/** Chunk was on 9536 **/
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
  } = (0, a.cj)([c.Z], () => c.Z.getProps()), g = i.useMemo(() => (0, d.LG)(u), [u]), m = i.useCallback(async () => {
    if (null == e) return Promise.resolve();
    let n = {
      systemChannelFlags: e.systemChannelFlags,
      systemChannelId: e.systemChannelId,
      afkChannelId: e.afkChannelId,
      afkTimeout: e.afkTimeout,
      defaultMessageNotifications: e.defaultMessageNotifications
    };
    if ((0, l.O)(new Set(e.features), new Set(t.features)) || (n.features = e.features), c.Z.hasChanges() && await o.Z.saveGuild(e.id, n), c.Z.widgetHasChanges()) {
      let {
        enabled: t,
        channelId: n
      } = c.Z.getWidget();
      await o.Z.updateEmbed(e.id, t, n)
    }
    return Promise.resolve()
  }, [e, t]), f = i.useCallback(() => {
    null != e && o.Z.init(e.id)
  }, [e]);
  return (0, r.jsx)(s.Z, {
    submitting: n,
    errorMessage: g,
    onSave: m,
    onReset: f
  })
}