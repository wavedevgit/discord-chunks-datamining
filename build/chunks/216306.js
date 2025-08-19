/** Chunk was on 12630 **/
/** chunk id: 216306, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Fo: () => O,
  KY: () => Q,
  Uo: () => P,
  fU: () => V,
  qw: () => m,
  tn: () => j
}), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk45114 = require("./45114.js"),
  Chunk740504 = require("./740504.js"),
  Chunk266454 = require("./266454.js"),
  Chunk931261 = require("./931261.js"),
  Chunk540126 = require("./540126.js"),
  Chunk671098 = require("./671098.js"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk443063 = require("./443063.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx");

function b(A, e) {
  A.index = e
}

function O(A, e, t, r) {
  r = r.toLowerCase();
  let i = (0, v.g)(A),
    a = n.useCallback((A, e) => !(i && A.channel.hasFlag(M.zZ.IS_GUILD_RESOURCE_CHANNEL)) && A.channel.type !== D.d4z.GUILD_DIRECTORY && (0 === e.length || l()(e, A.channel.name.toLowerCase()) || A.channel.topic.toLowerCase().includes(e)), [i]);
  return n.useMemo(() => {
    let A = {
      null: [],
      _categories: []
    };
    return t[D.d4z.GUILD_CATEGORY].forEach(t => {
      let {
        channel: n
      } = t;
      "null" === n.id && (A.null = e.null.filter(A => a(A, r))), A[n.id] = e[n.id].filter(A => a(A, r))
    }), A._categories = e._categories.filter(e => "null" === e.channel.id || 0 === r.length || A[e.channel.id].length > 0), (0, c.Z)(A._categories, A).forEach(b), A
  }, [e, t, a, r])
}

function Q(A) {
  let e = A.getSections(false);
  if (e[u.wZ] > 0) switch (A.getGuildActionSection().getRow(0)) {
    case p.z.GUILD_HOME:
      return M.oC.GUILD_HOME;
    case p.z.GUILD_ROLE_SUBSCRIPTIONS:
      return M.oC.ROLE_SUBSCRIPTIONS;
    case p.z.GUILD_MOD_DASH_MEMBER_SAFETY:
      return M.oC.MEMBER_SAFETY
  }
  for (let n = u.wd; n < A.voiceChannelsSectionNumber; n++)
    if (e[n] > 0) {
      var t;
      let e = null == (t = A.getChannelFromSectionRow(n, 0)) ? true : t.channel;
      if (null != e) return e.id
    } return null
}

function P(A, e) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, h.n)(A, e), (0, g.y5)(e.map(A => ({
    channelId: A,
    readStateType: I.W.CHANNEL,
    messageId: B.ZP.lastMessageId(A)
  }))), null != t && (0, d.uL)(D.Z5c.CHANNEL(A, t))
}

function j(A, e, t, n) {
  let r = (0, f.Nj)(o.z.CHANNEL_BROWSER_NUX),
    l = (0, s.cj)([E.Z], () => {
      let e = {},
        t = E.Z.getMutableGuildChannelsForGuild(A);
      for (let A in t) {
        let {
          parent_id: r
        } = t[A];
        if (null != r) {
          var n;
          e[r] = (null != (n = e[r]) ? n : 0) + 1
        }
      }
      return e
    }, [A]),
    i = e._categories.map(A => {
      let n = e[A.channel.id];
      return {
        rowCount: "null" !== A.channel.id && 0 === l[A.channel.id] ? 1 : n.length,
        rowHeight: 0 === n.length ? 0 : t
      }
    });
  return r || null == n || i.unshift({
    rowCount: 1,
    rowHeight: n
  }), i
}

function V(A) {
  var e, t;
  let n = (0, s.e7)([C.Z], () => C.Z.getCategories(A)),
    r = n._categories.length,
    l = n._categories[n._categories.length - 1];
  if (null == l) return 0;
  let i = n[null != (t = null == (e = l.channel) ? true : e.id) ? t : "null"];
  return null == i ? 0 : 0 === i.length ? l.index + 2 - r : i[i.length - 1].index + 2 - r
}

function m(A) {
  var e;
  return H.intl.formatToPlainString(H.t["8N0BHR"], {
    timeAgo: a()(w.default.extractTimestamp(null != (e = B.ZP.lastMessageId(A)) ? e : A)).fromNow()
  })
}