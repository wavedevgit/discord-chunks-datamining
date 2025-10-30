/** Chunk was on 29679 **/
/** chunk id: 155133, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk149694 = require("./149694.js"),
  Chunk268350 = require("./268350.js");

function o(e) {
  let [t, n] = r.useState("loading"), o = (0, i.e7)([a.Z], () => a.Z.getStickersByGuildId(e));
  return (r.useEffect(() => {
    let t = new AbortController,
      r = t.signal;
    return (async () => {
      try {
        await (0, s.SV)(e, r), n("success"), t = null
      } catch (e) {
        n("error"), t = null
      }
    })(), () => {
      n("loading"), null == t || t.abort()
    }
  }, [e]), "success" === t) ? {
    status: t,
    stickers: o.map(e => {
      var t, n;
      return t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), n = n = {
        user: l.default.getUser(e.user_id)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t
    })
  } : {
    status: t
  }
}