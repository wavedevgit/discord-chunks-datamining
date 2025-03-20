/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(725803),
  a = n(546221),
  l = n(489028),
  o = n(674563);
let A = e => {
  let {
    guild: t
  } = e, {
    application: n,
    loading: A
  } = (0, s.Z)(t.id, o.wW.GUILD_ROLE_SUBSCRIPTIONS);
  return A ? (0, r.jsx)(i.$jN, {}) : null != n ? (0, r.jsx)(a.Z, {
    guildId: t.id,
    application: n
  }) : (0, r.jsx)(l.Z, {
    guild: t
  })
}