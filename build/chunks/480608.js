/** Chunk was on web.js **/
/** chunk id: 480608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => d,
  H: () => _
});
var Chunk31775 = require("./31775.js"),
  i = require.n(Chunk31775),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js"),
  Chunk243730 = require("./243730.js"),
  Chunk981631 = require("./981631.js");
async function u(e) {
  try {
    a.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = (await o.tn.get({
      url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e),
      rejectWithError: true
    })).body;
    a.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: t
    })
  } catch (t) {
    a.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function d(e) {
  l.Z.shouldFetch(e) && await u(e)
}
let f = new(i())({
  maxAge: 1e4
});

function p(e, t) {
  return o.tn.get({
    url: c.ANM.GUILD_ROLE_MEMBER_IDS(e, t),
    rejectWithError: false
  }).then(t => (s.Z.requestMembersById(e, t.body, false), t.body.length))
}

function _(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = "".concat(e, "-").concat(t);
  return n && null != f.get(r) ? Promise.resolve(null) : (f.set(r, true), p(e, t))
}