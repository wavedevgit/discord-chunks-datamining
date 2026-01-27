/** Chunk was on web.js **/
/** chunk id: 545868, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => d,
  a: () => _
});
var Chunk635377 = require("./635377.js"),
  i = require.n(Chunk635377),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk686956 = require("./686956.js"),
  Chunk642133 = require("./642133.js"),
  Chunk652215 = require("./652215.js");
async function u(e) {
  try {
    o.h.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = (await a.Bo.get({
      url: c.Rsh.GUILD_ROLE_MEMBER_COUNTS(e),
      rejectWithError: true
    })).body;
    o.h.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: t
    })
  } catch (t) {
    o.h.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function d(e) {
  l.A.shouldFetch(e) && await u(e)
}
let f = new(i())({
  maxAge: 1e4
});

function p(e, t) {
  return a.Bo.get({
    url: c.Rsh.GUILD_ROLE_MEMBER_IDS(e, t),
    rejectWithError: false
  }).then(t => (s.A.requestMembersById(e, t.body, false), t.body.length))
}

function _(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = "".concat(e, "-").concat(t);
  return n && null != f.get(r) ? Promise.resolve(null) : (f.set(r, true), p(e, t))
}