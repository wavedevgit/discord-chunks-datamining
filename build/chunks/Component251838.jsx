/** Chunk was on 47841 **/
/** chunk id: 251838, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk357758 = require("./357758.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk927573 = require("./927573.js");

function u() {
  let {
    guild: e,
    originalGuild: t,
    submitting: n,
    errors: u
  } = (0, s.cf)([o.A], () => o.A.getProps()), f = i.useMemo(() => (0, d.$s)(u), [u]), g = i.useCallback(async () => {
    if (null == e) return Promise.resolve();
    let n = {
      systemChannelFlags: e.systemChannelFlags,
      systemChannelId: e.systemChannelId,
      afkChannelId: e.afkChannelId,
      afkTimeout: e.afkTimeout,
      defaultMessageNotifications: e.defaultMessageNotifications
    };
    if ((0, l._)(new Set(e.features), new Set(t.features)) || (n.features = e.features), o.A.hasChanges() && await c.A.saveGuild(e.id, n), o.A.widgetHasChanges()) {
      let {
        enabled: t,
        channelId: n
      } = o.A.getWidget();
      await c.A.updateEmbed(e.id, t, n)
    }
    return Promise.resolve()
  }, [e, t]), b = i.useCallback(() => {
    null != e && c.A.init(e.id)
  }, [e]);
  return (0, r.jsx)(a.A, {
    submitting: n,
    errorMessage: f,
    onSave: g,
    onReset: b
  })
}