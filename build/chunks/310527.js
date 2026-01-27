/** Chunk was on web.js **/
/** chunk id: 310527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Je: () => o,
  OH: () => l,
  fx: () => s,
  zf: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return r.Bo.get({
    url: a.Rsh.GUILD_VANITY_URL(e),
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
    i.h.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: n,
      error: r
    })
  })
}

function s() {
  i.h.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_RESET"
  })
}

function l(e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_SET",
    code: e
  })
}

function c(e, t, n) {
  return r.Bo.patch({
    url: a.Rsh.GUILD_VANITY_URL(e),
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
    i.h.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: n
    })
  }, e => {
    if (i.h.dispatch({
        type: "GUILD_SETTINGS_VANITY_URL_ERROR",
        error: e.body
      }), null == n ? true : n.throwErr) throw e;
    return e
  })
}