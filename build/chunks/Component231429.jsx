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
  Chunk927997 = require("./927997.js");
let T = 8;

function C(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: s
  } = e, l = Math.max(n, t.length), c = (0, h.yy)({
    maxPartySize: i,
    partySize: l,
    activityActionType: s
  }), u = [...t];
  for (; u.length < n && u.length < T;) u.push(b.ag);
  for (; u.length < i && u.length < T;) u.push(null);
  return (0, r.jsxs)("div", {
    className: I.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(b.ZP, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, T) : T,
      size: b.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function A(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === v.mFx.STREAM_REQUEST
}

function N(e) {
  var t, n;
  let {
    analyticsLocations: o,
    app: h,
    channel: I,
    message: T,
    hideParty: N,
    onView: P
  } = e, R = (0, s.O)(h), w = (0, a.e7)([u.default], () => u.default.getId()), D = (0, a.e7)([p.Z], () => {
    if (null == T.application) return p.Z.findActivity(T.author.id, e => e.type === v.IIU.LISTENING);
    {
      let e = T.author.id;
      return (0, g.H)(T) && (e = e === w && I.isPrivate() ? I.getRecipientId() : w), p.Z.getApplicationActivity(e, T.application.id)
    }
  }, [T, I, w]), x = (0, a.e7)([f.Z, _.Z], () => {
    var e;
    return null != (e = f.Z.getApplicationActivity(R.id)) ? e : _.Z.getApplicationActivity(R.id, true)
  }, [R.id]), L = (0, a.Wu)([d.Z], () => {
    var e;
    return null == D || null == D.party ? [] : Array.from(null != (e = d.Z.getParty(D.party.id)) ? e : [])
  }, [D]), {
    partySize: j,
    maxPartySize: M
  } = (0, E._)(D), k = i.useMemo(() => L.map(e => {
    let t = m.default.getUser(e);
    return null != t ? t : b.ag
  }), [L]), U = i.useMemo(() => {
    var e;
    return (0, r.jsx)(C, {
      partyMembers: k,
      partySize: j,
      maxPartySize: M,
      guildId: I.guild_id,
      activityActionType: null == (e = T.activity) ? true : e.type
    })
  }, [k, j, M, I.guild_id, null == (t = T.activity) ? true : t.type]);
  return (0, S.Ps)(null == D || null == (n = D.party) ? true : n.id) || R.id === c.r9.id ? (0, r.jsx)(O.Z, {
    application: R,
    currentUserPresenceActivity: x,
    hideParty: N,
    message: T,
    onView: P,
    partyStatusElement: U,
    presenceActivity: D,
    guildId: I.guild_id
  }) : A(T) ? (0, r.jsx)(l.Z, {
    analyticsLocations: o,
    application: R,
    channel: I,
    currentUserId: w,
    message: T
  }) : (0, r.jsx)(y.Z, {
    analyticsLocations: o,
    application: R,
    channel: I,
    currentUserId: w,
    currentUserPresenceActivity: x,
    hideParty: N,
    message: T,
    onView: P,
    partyStatusElement: U,
    presenceActivity: D
  })
}