/** Chunk was on web.js **/
/** chunk id: 386506, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  M3: () => _,
  aD: () => d,
  bF: () => p,
  f0: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk314897 = require("./314897.js"),
  Chunk12647 = require("./12647.js"),
  Chunk865427 = require("./865427.js");
let l = "/__development/build_overrides",
  c = "/__development/create_build_override_link",
  u = "/__development/link";
async function d(e) {
  try {
    var t;
    let n = await i.tn.put({
      url: (0, s.pU)(l),
      body: {
        overrides: e,
        version: s.Ji
      },
      headers: {
        Authorization: null != (t = o.default.getToken()) ? t : ""
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
    let t = await i.tn.put({
      url: (0, s.pU)(u),
      body: {
        payload: e,
        token: o.default.getToken(),
        version: s.Ji
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
  let e = await Chunk544891.tn.del({
    url: (0, Chunk865427.pU)(l),
    oldFormErrors: true,
    rejectWithError: false
  });
  return await r(module), module
}

function _(e) {
  var t;
  return i.tn.post({
    url: (0, s.pU)(c),
    body: e,
    headers: {
      Authorization: null != (t = o.default.getToken()) ? t : ""
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
    await a.Z.flushCookies()
  } catch (e) {}
}