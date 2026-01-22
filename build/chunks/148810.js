/** Chunk was on web.js **/
/** chunk id: 148810, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  SB: () => _,
  Zk: () => d,
  iD: () => p,
  oA: () => f
});
var Chunk562465 = require("./562465.js"),
  Chunk961350 = require("./961350.js"),
  Chunk353835 = require("./353835.js"),
  Chunk380610 = require("./380610.js");
let l = "/__development/build_overrides",
  c = "/__development/create_build_override_link",
  u = "/__development/link";
async function d(e) {
  try {
    var t;
    let n = await i.Bo.put({
      url: (0, o.i_)(l),
      body: {
        overrides: e,
        version: o.hl
      },
      headers: {
        Authorization: null != (t = a.default.getToken()) ? t : ""
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    return await r(n), n
  } catch (e) {
    return e
  }
}
async function f(e) {
  try {
    let t = await i.Bo.put({
      url: (0, o.i_)(u),
      body: {
        payload: e,
        token: a.default.getToken(),
        version: o.hl
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    return await r(t), t
  } catch (e) {
    return e
  }
}
async function p() {
  let e = await i.Bo.del({
    url: (0, o.i_)(l),
    oldFormErrors: true,
    rejectWithError: false
  });
  return await r(e), e
}

function _(e) {
  var t;
  return i.Bo.post({
    url: (0, o.i_)(c),
    body: e,
    headers: {
      Authorization: null != (t = a.default.getToken()) ? t : ""
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => ({
    url: e.body.url,
    error: false
  }), e => 400 === e.status ? {
    url: false,
    error: e.body
  } : {
    url: false,
    error: "Error making API request (".concat(e.status, ")")
  })
}
r = async e => {
  try {
    await s.A.flushCookies()
  } catch (e) {}
}