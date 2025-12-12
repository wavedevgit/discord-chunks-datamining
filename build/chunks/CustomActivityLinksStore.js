/** Chunk was on web.js **/
/** chunk id: 703047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk731725 = require("./731725.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {};

function c(e) {
  let {
    applicationId: t,
    link: n
  } = e;
  null == l[t] && (l[t] = Object.create(null)), l[t][n.link_id] = new a.Z(n)
}

function u() {
  l = {}
}
class d extends(r = Chunk442837.ZP.Store) {
  getOne(e, t) {
    if (null != l[e]) return l[e][t]
  }
}
s(d, "displayName", "CustomActivityLinksStore");
let f = new d(Chunk570140.Z, {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: c,
  LOGOUT: u
})