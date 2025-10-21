/** Chunk was on web.js **/
/** chunk id: 859099, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk780384 = require("./780384.js"),
  Chunk147913 = require("./147913.js"),
  Chunk844070 = require("./844070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  let {
    relationship: t
  } = e, n = t.userIgnored;
  t.type !== o.OGo.PENDING_INCOMING || n || (r.uv.announce(s.intl.formatToPlainString(s.t.zH0kC7, {
    username: t.user.username
  })), a.T(t.user))
}

function u(e) {
  let {
    user: t
  } = e;
  r.uv.announce(s.intl.formatToPlainString(s.t["/+7xky"], {
    username: t.username
  })), a.z(t)
}
class d extends Chunk147913.Z {
  constructor(...e) {
    super(...e), l(this, "actions", {
      RELATIONSHIP_ADD: c,
      FRIEND_REQUEST_ACCEPTED: u
    })
  }
}
let f = new d