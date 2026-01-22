/** Chunk was on web.js **/
/** chunk id: 681245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk582754 = require("./582754.js"),
  Chunk439372 = require("./439372.js"),
  Chunk667747 = require("./667747.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
  t.type !== s.eA$.PENDING_INCOMING || n || (r.OR.announce(o.intl.formatToPlainString(o.t.zH0kC7, {
    username: t.user.username
  })), a.m(t.user))
}

function u(e) {
  let {
    user: t
  } = e;
  r.OR.announce(o.intl.formatToPlainString(o.t["/+7xky"], {
    username: t.username
  })), a.I(t)
}
class d extends Chunk439372.A {
  constructor(...e) {
    super(...e), l(this, "actions", {
      RELATIONSHIP_ADD: c,
      FRIEND_REQUEST_ACCEPTED: u
    })
  }
}
let f = new d