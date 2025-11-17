/** Chunk was on web.js **/
/** chunk id: 616780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => f
}), require("./54381.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711);
require("./902704.js");
var Chunk941028 = require("./941028.js"),
  Chunk960048 = require("./960048.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let d = false;

function f(e, t) {
  r.useEffect(() => (a().forEach(e, (e, n) => {
    !d && e.length > 50 && (d = true, s.Z.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
      extra: {
        userIdsCount: e.length,
        guildId: n,
        reason: t
      }
    })), (0, o.ym)(n, e)
  }), () => {
    a().forEach(e, (e, t) => (0, o.w5)(t, e))
  }), [e, t])
}