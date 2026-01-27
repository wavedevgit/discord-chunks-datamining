/** Chunk was on 3911 **/
/** chunk id: 933725, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  m: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");
async function o(e, t) {
  try {
    let n = await i.Bo.put({
      url: l.Rsh.USER_SET_GUILD_IDENTITY,
      body: {
        identity_guild_id: e,
        identity_enabled: t
      },
      rejectWithError: false
    });
    return n.ok && s.h.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, r.default.getCurrentUser(), n.body)
    }), n
  } catch (e) {
    return e
  }
}