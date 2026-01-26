/** Chunk was on 39048 **/
/** chunk id: 740816, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk41237 = require("./41237.js"),
  Chunk631576 = require("./631576.js");

function o(e) {
  let [t, n] = r.useState("loading"), o = (0, i.bG)([s.A], () => s.A.getStickersByGuildId(e));
  return (r.useEffect(() => {
    let t = new AbortController,
      r = t.signal;
    return (async () => {
      try {
        await (0, a.oI)(e, r), n("success"), t = null
      } catch (e) {
        n("error"), t = null
      }
    })(), () => {
      n("loading"), null == t || t.abort()
    }
  }, [e]), "success" === t) ? {
    status: t,
    stickers: o.map(e => {
      let t = l.default.getUser(e.user_id);
      if (null != t) {
        var n, r;
        return n = function(e) {
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
        }({}, e), r = r = {
          user: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n
      }
      return e
    })
  } : {
    status: t
  }
}