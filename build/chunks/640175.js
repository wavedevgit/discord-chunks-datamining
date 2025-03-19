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
  c = n(981631),
  A = n(388032);

function d(e) {
  let {
    guildId: t,
    defaultSettings: n,
    canManageGuild: d
  } = e, u = (0, s.e7)([l.Z], () => l.Z.getMemberCount(t)), g = i.useMemo(() => [{
    name: A.NW.string(A.t["n/bTaW"]),
    value: c.bL.ALL_MESSAGES,
    desc: null != u && u >= c.qWG ? A.NW.string(A.t["L+P4t7"]) : null
  }, {
    name: A.NW.string(A.t["6fQPho"]),
    value: c.bL.ONLY_MENTIONS
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