/** Chunk was on 4756 **/
/** chunk id: 321114, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
async function o(e, t) {
  try {
    let n = await i.tn.put({
      url: l.ANM.USER_SET_GUILD_IDENTITY,
      body: {
        identity_guild_id: e,
        identity_enabled: t
      },
      rejectWithError: false
    });
    return n.ok && r.Z.dispatch({
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
      }({}, s.default.getCurrentUser(), n.body)
    }), n
  } catch (e) {
    return e
  }
}