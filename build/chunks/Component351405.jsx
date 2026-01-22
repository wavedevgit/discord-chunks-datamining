/** Chunk was on web.js **/
/** chunk id: 351405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => N
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk138175 = require("./138175.js"),
  Chunk99072 = require("./99072.jsx"),
  Chunk443795 = require("./443795.js"),
  Chunk961350 = require("./961350.js"),
  Chunk629016 = require("./629016.js"),
  Chunk375492 = require("./375492.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk456060 = require("./456060.js"),
  Chunk850670 = require("./850670.js"),
  Chunk125017 = require("./125017.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk13403 = require("./13403.jsx"),
  Chunk536189 = require("./536189.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk272984 = require("./272984.js"),
  Chunk609653 = require("./609653.js");
let I = 8;

function T(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: o
  } = e, l = Math.max(n, t.length), c = (0, m.SJ)({
    maxPartySize: i,
    partySize: l,
    activityActionType: o
  }), u = [...t];
  for (; u.length < n && u.length < I;) u.push(b.mt);
  for (; u.length < i && u.length < I;) u.push(null);
  return (0, r.jsxs)("div", {
    className: S.UF,
    children: [u.length > 0 && (0, r.jsx)(b.Ay, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, I) : I,
      size: b.DN.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function C(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === A.xL.STREAM_REQUEST
}

function N(e) {
  var t, n;
  let {
    analyticsLocations: s,
    app: m,
    channel: S,
    message: I,
    hideParty: N,
    onView: R
  } = e, w = (0, o.b)(m), P = (0, a.bG)([u.default], () => u.default.getId()), D = (0, a.bG)([p.A], () => {
    if (null == I.application) return p.A.findActivity(I.author.id, e => e.type === A.$pd.LISTENING);
    {
      let e = I.author.id;
      return (0, g.v)(I) && (e = e === P && S.isPrivate() ? S.getRecipientId() : P), p.A.getApplicationActivity(e, I.application.id)
    }
  }, [I, S, P]), x = (0, a.bG)([f.A, _.A], () => {
    var e;
    return null != (e = f.A.getApplicationActivity(w.id)) ? e : _.A.getApplicationActivity(w.id, true)
  }, [w.id]), L = (0, a.yK)([d.A], () => {
    var e;
    return null == D || null == D.party ? [] : Array.from(null != (e = d.A.getParty(D.party.id)) ? e : [])
  }, [D]), {
    partySize: j,
    maxPartySize: M
  } = (0, E._)(D), k = i.useMemo(() => L.map(e => {
    let t = h.default.getUser(e);
    return null != t ? t : b.mt
  }), [L]), U = i.useMemo(() => {
    var e;
    return (0, r.jsx)(T, {
      partyMembers: k,
      partySize: j,
      maxPartySize: M,
      guildId: S.guild_id,
      activityActionType: null == (e = I.activity) ? true : e.type
    })
  }, [k, j, M, S.guild_id, null == (t = I.activity) ? true : t.type]);
  return (0, v.pH)(null == D || null == (n = D.party) ? true : n.id) || w.id === c.HT.id ? (0, r.jsx)(O.A, {
    application: w,
    currentUserPresenceActivity: x,
    hideParty: N,
    message: I,
    onView: R,
    partyStatusElement: U,
    presenceActivity: D,
    guildId: S.guild_id
  }) : C(I) ? (0, r.jsx)(l.A, {
    analyticsLocations: s,
    application: w,
    channel: S,
    currentUserId: P,
    message: I
  }) : (0, r.jsx)(y.A, {
    analyticsLocations: s,
    application: w,
    channel: S,
    currentUserId: P,
    currentUserPresenceActivity: x,
    hideParty: N,
    message: I,
    onView: R,
    partyStatusElement: U,
    presenceActivity: D
  })
}