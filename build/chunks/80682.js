/** Chunk was on web.js **/
/** chunk id: 80682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => f
}), require("./627968.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438);
require("./52133.js");
var Chunk361610 = require("./361610.js"),
  Chunk728458 = require("./728458.js");

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
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let d = false;

function f(e, t) {
  r.useEffect(() => (a().forEach(e, (e, n) => {
    !d && e.length > 50 && (d = true, s.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
      extra: {
        userIdsCount: e.length,
        guildId: n,
        reason: t
      }
    })), (0, o.un)(n, e)
  }), () => {
    a().forEach(e, (e, t) => (0, o.NE)(t, e))
  }), [e, t])
}