/** Chunk was on web.js **/
/** chunk id: 346835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk469036 = require("./469036.js");

function o(e, t, n) {
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
  null == l[t] && (l[t] = Object.create(null)), l[t][n.link_id] = new s.A(n)
}

function u() {
  l = {}
}
class d extends(r = Chunk311907.Ay.Store) {
  getOne(e, t) {
    if (null != l[e]) return l[e][t]
  }
}
o(d, "displayName", "CustomActivityLinksStore");
let f = new d(Chunk73153.h, {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: c,
  LOGOUT: u
})