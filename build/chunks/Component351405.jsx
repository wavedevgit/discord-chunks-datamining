/** Chunk was on 9753 **/
/** chunk id: 351405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => C
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

function j(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: l,
    activityActionType: s
  } = e, o = Math.max(n, t.length), c = (0, _.SJ)({
    maxPartySize: i,
    partySize: o,
    activityActionType: s
  }), u = [...t];
  for (; u.length < n && u.length < 8;) u.push(y.mt);
  for (; u.length < i && u.length < 8;) u.push(null);
  return (0, r.jsxs)("div", {
    className: E.UF,
    children: [u.length > 0 && (0, r.jsx)(y.Ay, {
      guildId: l,
      users: u,
      max: i > 0 ? Math.min(i, 8) : 8,
      size: y.DN.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function C(e) {
  var t, n, a;
  let {
    analyticsLocations: _,
    app: E,
    channel: C,
    message: I,
    hideParty: S,
    onView: T
  } = e, N = (0, s.b)(E), P = (0, l.bG)([u.default], () => u.default.getId()), w = (0, l.bG)([m.A], () => {
    if (null == I.application) return m.A.findActivity(I.author.id, e => e.type === O.$pd.LISTENING);
    {
      let e = I.author.id;
      return (0, h.v)(I) && (e = e === P && C.isPrivate() ? C.getRecipientId() : P), m.A.getApplicationActivity(e, I.application.id)
    }
  }, [I, C, P]), R = (0, l.bG)([p.A, f.A], () => {
    var e;
    return null != (e = p.A.getApplicationActivity(N.id)) ? e : f.A.getApplicationActivity(N.id, true)
  }, [N.id]), D = (0, l.yK)([d.A], () => {
    var e;
    return null == w || null == w.party ? [] : Array.from(null != (e = d.A.getParty(w.party.id)) ? e : [])
  }, [w]), {
    partySize: L,
    maxPartySize: M
  } = (0, b._)(w), k = i.useMemo(() => D.map(e => {
    let t = g.default.getUser(e);
    return null != t ? t : y.mt
  }), [D]), U = i.useMemo(() => {
    var e;
    return (0, r.jsx)(j, {
      partyMembers: k,
      partySize: L,
      maxPartySize: M,
      guildId: C.guild_id,
      activityActionType: null == (e = I.activity) ? true : e.type
    })
  }, [k, L, M, C.guild_id, null == (t = I.activity) ? true : t.type]);
  return (0, x.pH)(null == w || null == (n = w.party) ? true : n.id) || N.id === c.HT.id ? (0, r.jsx)(v.A, {
    application: N,
    currentUserPresenceActivity: R,
    hideParty: S,
    message: I,
    onView: T,
    partyStatusElement: U,
    presenceActivity: w,
    guildId: C.guild_id
  }) : (null == (a = I.activity) ? true : a.type) === O.xL.STREAM_REQUEST ? (0, r.jsx)(o.A, {
    analyticsLocations: _,
    application: N,
    channel: C,
    currentUserId: P,
    message: I
  }) : (0, r.jsx)(A.A, {
    analyticsLocations: _,
    application: N,
    channel: C,
    currentUserId: P,
    currentUserPresenceActivity: R,
    hideParty: S,
    message: I,
    onView: T,
    partyStatusElement: U,
    presenceActivity: w
  })
}