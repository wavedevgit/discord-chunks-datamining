/** Chunk was on web.js **/
/** chunk id: 562153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  mG: () => u,
  tJ: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t, n) {
  if (null == n) return null;
  if (null != e) return a.Ay.getNick(e, n.id);
  if (null != t) {
    let e = i.A.getChannel(t);
    if (null == e ? true : e.isPrivate()) return s.A.getNickname(n.id)
  }
  return null
}

function u(e, t, n) {
  var r;
  return null == n ? l.intl.string(l.t.sKdZ6U) : null != (r = c(e, t, n)) ? r : o.Ay.getName(n)
}

function d(e, t, n) {
  return (0, r.bG)([a.Ay, i.A, s.A], () => u(e, t, n))
}
let f = {
  getNickname: c,
  getName: u,
  useName: d
}