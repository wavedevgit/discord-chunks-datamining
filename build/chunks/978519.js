/** Chunk was on web.js **/
/** chunk id: 978519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u
}), require("./35282.js"), require("./473749.js"), require("./399606.js");
var Chunk430824 = require("./430824.js"),
  Chunk358085 = require("./358085.js"),
  Chunk341653 = require("./341653.js"),
  Chunk981631 = require("./981631.js");
let s = "13.2",
  l = [Chunk981631.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

function c(e, t) {
  let n = e.split(".").map(Number),
    r = t.split(".").map(Number),
    i = Math.max(n.length, r.length);
  for (let e = 0; e < i; e++) {
    var a, o;
    let t = null != (a = n[e]) ? a : 0,
      i = null != (o = r[e]) ? o : 0;
    if (t < i) return false;
    if (t > i) return 1
  }
  return 0
}

function u(e) {
  if (!(0, i.isIOS)()) returnfalse;
  let t = (0, a.e)();
  if (null == t || false === c(t, s)) returnfalse;
  let n = r.Z.getGuild(e);
  return null != n && !!l.every(e => n.features.has(e))
}