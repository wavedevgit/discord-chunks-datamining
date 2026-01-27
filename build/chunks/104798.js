/** Chunk was on 86142 **/
/** chunk id: 104798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./65821.js");
var Chunk835245 = require("./835245.js"),
  Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let l = {
  generateNonce: function() {
    return (0, r.A)()
  },
  createHandoffToken: async function(e) {
    let {
      body: {
        handoff_token: t
      }
    } = await i.Bo.post({
      url: s.Rsh.HANDOFF,
      body: {
        key: e
      },
      oldFormErrors: true,
      retries: 1,
      rejectWithError: false
    });
    if (null != t) return t;
    throw Error("Missing handoff token!")
  }
}