/** Chunk was on 64982 **/
/** chunk id: 155133, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk544891 = require("./544891.js"),
  Chunk598077 = require("./598077.js"),
  Chunk611480 = require("./611480.js"),
  Chunk981631 = require("./981631.js");
let o = async (e, t) => {
  let {
    body: n
  } = await i.tn.get({
    url: s.ANM.GUILD_STICKER_PACKS(e),
    rejectWithError: false,
    signal: t
  }), r = n.map(e => {
    if (null != e.user) {
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
        user: new l.Z(e.user)
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
    }
    return e
  });
  return 0 === r.length ? a.jO : r
};

function c(e) {
  let [t, n] = r.useState({
    status: "loading"
  });
  return r.useEffect(() => {
    let t = new AbortController,
      r = t.signal;
    return (async () => {
      try {
        let i = await o(e, r);
        n({
          status: "success",
          stickers: i
        }), t = null
      } catch (e) {
        n({
          status: "error"
        }), t = null
      }
    })(), () => {
      n({
        status: "loading"
      }), null == t || t.abort()
    }
  }, [e]), t
}