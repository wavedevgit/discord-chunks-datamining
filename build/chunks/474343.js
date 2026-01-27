/** Chunk was on web.js **/
/** chunk id: 474343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./938796.js"), require("./896048.js");
var Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk439372 = require("./439372.js"),
  Chunk224536 = require("./224536.js"),
  Chunk610101 = require("./610101.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  var t, n;
  let {
    guild: a
  } = e.invite, c = null != (t = e.invite.flags) ? t : 0;
  null != a && (null == a || null == (n = a.features) ? true : n.includes(l.GuildFeatures.HUB)) ? o.A.onOpenHubInvite(e.invite) : !e.invite.new_member || !((0, i.Lt)(c, r.Q.IS_GUEST_INVITE) || (0, i.Lt)(c, r.Q.IS_APPLICATION_BYPASS)) && null != a && (0, s.h)(a) && (0, s.W)(a.id)
}
class d extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "actions", {
      INVITE_ACCEPT_SUCCESS: u
    })
  }
}
let f = new d