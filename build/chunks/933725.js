/** Chunk was on web.js **/
/** chunk id: 933725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
async function c(e, t) {
  try {
    let n = await r.Bo.put({
      url: s.Rsh.USER_SET_GUILD_IDENTITY,
      body: {
        identity_guild_id: e,
        identity_enabled: t
      },
      rejectWithError: false
    });
    return n.ok && i.h.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: l({}, a.default.getCurrentUser(), n.body)
    }), n
  } catch (e) {
    return e
  }
}