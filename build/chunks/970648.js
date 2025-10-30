/** Chunk was on 29679 **/
/** chunk id: 970648, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./415506.js");
var Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let a = {
  generateNonce: function() {
    return (0, Chunk772848.Z)()
  },
  createHandoffToken: async function(e) {
    let {
      body: {
        handoff_token: t
      }
    } = await i.tn.post({
      url: l.ANM.HANDOFF,
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