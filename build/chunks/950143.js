/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
}), n(789020), n(47120);
var r = n(533800),
  i = n(147913),
  o = n(82085),
  a = n(630388),
  s = n(461014),
  l = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function u(e) {
  var t, n;
  let {
    guild: i
  } = e.invite, c = null !== (n = e.invite.flags) && void 0 !== n ? n : 0;
  if (null != i && (null == i ? void 0 : null === (t = i.features) || void 0 === t ? void 0 : t.includes(l.oNc.HUB))) {
    o.Z.onOpenHubInvite(e.invite);
    return
  }!((0, a.yE)(c, r.$.IS_GUEST_INVITE) || (0, a.yE)(c, r.$.IS_APPLICATION_BYPASS)) && null != i && (0, s.u)(i) && (0, s._)(i.id)
}
class d extends i.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      INVITE_ACCEPT_SUCCESS: u
    })
  }
}
let f = new d