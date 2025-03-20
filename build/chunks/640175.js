/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  z: () => d
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(650774),
  o = n(434404),
  A = n(981631),
  c = n(388032);

function d(e) {
  let {
    guildId: t,
    defaultSettings: n,
    canManageGuild: d
  } = e, u = (0, s.e7)([l.Z], () => l.Z.getMemberCount(t)), g = i.useMemo(() => [{
    name: c.NW.string(c.t["n/bTaW"]),
    value: A.bL.ALL_MESSAGES,
    desc: null != u && u >= A.qWG ? c.NW.string(c.t["L+P4t7"]) : null
  }, {
    name: c.NW.string(c.t["6fQPho"]),
    value: A.bL.ONLY_MENTIONS
  }], [u]), f = i.useCallback(e => {
    let {
      value: t
    } = e;
    o.Z.updateGuild({
      defaultMessageNotifications: t
    })
  }, []);
  return (0, r.jsx)(a.FXm, {
    options: g,
    value: n,
    disabled: !d,
    onChange: f
  })
}