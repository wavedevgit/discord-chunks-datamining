/** Chunk was on web.js **/
/** chunk id: 321114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
async function c(e, t) {
  try {
    let n = await r.tn.put({
      url: a.ANM.USER_SET_GUILD_IDENTITY,
      body: {
        identity_guild_id: e,
        identity_enabled: t
      },
      rejectWithError: false
    });
    return n.ok && i.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: l({}, o.default.getCurrentUser(), n.body)
    }), n
  } catch (e) {
    return e
  }
}