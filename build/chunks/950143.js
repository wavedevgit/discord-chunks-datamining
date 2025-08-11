/** Chunk was on web.js **/
/** chunk id: 950143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./997841.js"), require("./388685.js");
var Chunk533800 = require("./533800.js"),
  Chunk147913 = require("./147913.js"),
  Chunk82085 = require("./82085.js"),
  Chunk630388 = require("./630388.js"),
  Chunk461014 = require("./461014.js"),
  Chunk981631 = require("./981631.js");

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
    guild: i
  } = e.invite, c = null != (n = e.invite.flags) ? n : 0;
  if (null != i && (null == i || null == (t = i.features) ? true : t.includes(l.oNc.HUB))) return void o.Z.onOpenHubInvite(e.invite);
  !((0, a.yE)(c, r.$.IS_GUEST_INVITE) || (0, a.yE)(c, r.$.IS_APPLICATION_BYPASS)) && null != i && (0, s.u)(i) && (0, s._)(i.id)
}
class d extends Chunk147913.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      INVITE_ACCEPT_SUCCESS: u
    })
  }
}
let f = new d