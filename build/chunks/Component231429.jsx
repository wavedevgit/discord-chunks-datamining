/** Chunk was on web.js **/
/** chunk id: 231429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk172109 = require("./172109.js"),
  Chunk956512 = require("./956512.jsx"),
  Chunk789407 = require("./789407.js"),
  Chunk314897 = require("./314897.js"),
  Chunk831506 = require("./831506.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk758371 = require("./758371.js"),
  Chunk150248 = require("./150248.js"),
  Chunk984211 = require("./984211.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk493387 = require("./493387.jsx"),
  Chunk579543 = require("./579543.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk837262 = require("./837262.js");
let S = 8;

function A(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: s
  } = e, l = Math.max(n, t.length), c = (0, m.yy)({
    maxPartySize: i,
    partySize: l,
    activityActionType: s
  }), u = [...t];
  for (; u.length < n && u.length < S;) u.push(b.ag);
  for (; u.length < i && u.length < S;) u.push(null);
  return (0, r.jsxs)("div", {
    className: T.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(b.ZP, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, S) : S,
      size: b.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function C(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === v.mFx.STREAM_REQUEST
}

function N(e) {
  var t, n;
  let {
    analyticsLocations: o,
    app: m,
    channel: T,
    message: S,
    hideParty: N,
    onView: R
  } = e, P = (0, s.O)(m), D = (0, a.e7)([u.default], () => u.default.getId()), w = (0, a.e7)([_.Z], () => {
    if (null == S.application) return _.Z.findActivity(S.author.id, e => e.type === v.IIU.LISTENING);
    {
      let e = S.author.id;
      return (0, g.H)(S) && (e = e === D && T.isPrivate() ? T.getRecipientId() : D), _.Z.getApplicationActivity(e, S.application.id)
    }
  }, [S, T, D]), L = (0, a.e7)([f.Z, p.Z], () => {
    var e;
    return null != (e = f.Z.getApplicationActivity(P.id)) ? e : p.Z.getApplicationActivity(P.id, true)
  }, [P.id]), x = (0, a.Wu)([d.Z], () => {
    var e;
    return null == w || null == w.party ? [] : Array.from(null != (e = d.Z.getParty(w.party.id)) ? e : [])
  }, [w]), {
    partySize: M,
    maxPartySize: k
  } = (0, E._)(w), j = i.useMemo(() => x.map(e => {
    let t = h.default.getUser(e);
    return null != t ? t : b.ag
  }), [x]), U = i.useMemo(() => {
    var e;
    return (0, r.jsx)(A, {
      partyMembers: j,
      partySize: M,
      maxPartySize: k,
      guildId: T.guild_id,
      activityActionType: null == (e = S.activity) ? true : e.type
    })
  }, [j, M, k, T.guild_id, null == (t = S.activity) ? true : t.type]);
  return (0, I.Ps)(null == w || null == (n = w.party) ? true : n.id) || P.id === c.r9.id ? (0, r.jsx)(O.Z, {
    application: P,
    currentUserPresenceActivity: L,
    hideParty: N,
    message: S,
    onView: R,
    partyStatusElement: U,
    presenceActivity: w,
    guildId: T.guild_id
  }) : C(S) ? (0, r.jsx)(l.Z, {
    analyticsLocations: o,
    application: P,
    channel: T,
    currentUserId: D,
    message: S
  }) : (0, r.jsx)(y.Z, {
    analyticsLocations: o,
    application: P,
    channel: T,
    currentUserId: D,
    currentUserPresenceActivity: L,
    hideParty: N,
    message: S,
    onView: R,
    partyStatusElement: U,
    presenceActivity: w
  })
}