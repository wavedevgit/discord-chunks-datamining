/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  E: () => d,
  H: () => _
});
var r = n(31775),
  i = n.n(r),
  o = n(544891),
  a = n(570140),
  s = n(749210),
  l = n(243730),
  c = n(981631);
async function u(e) {
  try {
    a.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = (await o.tn.get({
      url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e),
      rejectWithError: !0
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
    rejectWithError: !1
  }).then(t => (s.Z.requestMembersById(e, t.body, !1), t.body.length))
}

function _(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = "".concat(e, "-").concat(t);
  return n && null != f.get(r) ? Promise.resolve(null) : (f.set(r, !0), p(e, t))
}