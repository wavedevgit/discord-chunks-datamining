/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  R: () => d
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(852860),
  l = n(823379),
  o = n(434404),
  A = n(999382),
  c = n(203377);

function d() {
  let {
    guild: e,
    originalGuild: t,
    submitting: n,
    errors: d
  } = (0, s.cj)([A.Z], () => A.Z.getProps()), u = i.useMemo(() => (0, c.LG)(d), [d]), g = i.useCallback(async () => {
    if (null == e) return Promise.resolve();
    let n = {
      systemChannelFlags: e.systemChannelFlags,
      systemChannelId: e.systemChannelId,
      afkChannelId: e.afkChannelId,
      afkTimeout: e.afkTimeout,
      defaultMessageNotifications: e.defaultMessageNotifications
    };
    if ((0, l.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), A.Z.hasChanges() && await o.Z.saveGuild(e.id, n), A.Z.widgetHasChanges()) {
      let {
        enabled: t,
        channelId: n
      } = A.Z.getWidget();
      await o.Z.updateEmbed(e.id, t, n)
    }
    return Promise.resolve()
  }, [e, t]), f = i.useCallback(() => {
    null != e && o.Z.init(e.id)
  }, [e]);
  return (0, r.jsx)(a.Z, {
    submitting: n,
    errorMessage: u,
    onSave: g,
    onReset: f
  })
}