/** Chunk was on web.js **/
/** chunk id: 736617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gy: () => l,
  H7: () => s,
  U5: () => o,
  en: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return r.tn.get({
    url: a.ANM.GUILD_VANITY_URL(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    let {
      body: {
        code: t,
        uses: n,
        error: r
      }
    } = e;
    i.Z.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: n,
      error: r
    })
  })
}

function s() {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_RESET"
  })
}

function l(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_SET",
    code: e
  })
}

function c(e, t, n) {
  return r.tn.patch({
    url: a.ANM.GUILD_VANITY_URL(e),
    body: {
      code: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    let {
      body: {
        code: t,
        uses: n
      }
    } = e;
    i.Z.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: n
    })
  }, e => {
    if (i.Z.dispatch({
        type: "GUILD_SETTINGS_VANITY_URL_ERROR",
        error: e.body
      }), null == n ? true : n.throwErr) throw e;
    return e
  })
}