/** Chunk was on 14054 **/
/** chunk id: 216306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fo: () => N,
  KY: () => w,
  Uo: () => C,
  fU: () => L,
  qw: () => R,
  tn: () => x
}), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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

function P(e, t) {
  e.index = t
}

function N(e, t, n, i) {
  i = i.toLowerCase();
  let a = (0, g.g)(e),
    o = l.useCallback((e, t) => !(a && e.channel.hasFlag(I.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== v.d4z.GUILD_DIRECTORY && (0 === t.length || r()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
  return l.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[v.d4z.GUILD_CATEGORY].forEach(n => {
      let {
        channel: l
      } = n;
      "null" === l.id && (e.null = t.null.filter(e => o(e, i))), e[l.id] = t[l.id].filter(e => o(e, i))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0), (0, d.Z)(e._categories, e).forEach(P), e
  }, [t, n, o, i])
}

function w(e) {
  let t = e.getSections(false);
  if (t[h.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case E.z.GUILD_HOME:
      return I.oC.GUILD_HOME;
    case E.z.GUILD_ROLE_SUBSCRIPTIONS:
      return I.oC.ROLE_SUBSCRIPTIONS;
    case E.z.GUILD_MOD_DASH_MEMBER_SAFETY:
      return I.oC.MEMBER_SAFETY
  }
  for (let l = h.wd; l < e.voiceChannelsSectionNumber; l++)
    if (t[l] > 0) {
      var n;
      let t = null == (n = e.getChannelFromSectionRow(l, 0)) ? true : n.channel;
      if (null != t) return t.id
    } return null
}

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, m.n)(e, t), (0, c.y5)(t.map(e => ({
    channelId: e,
    readStateType: S.W.CHANNEL,
    messageId: y.ZP.lastMessageId(e)
  }))), null != n && (0, p.uL)(v.Z5c.CHANNEL(e, n))
}

function x(e, t, n, l) {
  let i = (0, f.Nj)(u.z.CHANNEL_BROWSER_NUX),
    r = (0, s.cj)([b.Z], () => {
      let t = {},
        n = b.Z.getMutableGuildChannelsForGuild(e);
      for (let e in n) {
        let {
          parent_id: i
        } = n[e];
        if (null != i) {
          var l;
          t[i] = (null != (l = t[i]) ? l : 0) + 1
        }
      }
      return t
    }, [e]),
    a = t._categories.map(e => {
      let l = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === r[e.channel.id] ? 1 : l.length,
        rowHeight: 0 === l.length ? 0 : n
      }
    });
  return i || null == l || a.unshift({
    rowCount: 1,
    rowHeight: l
  }), a
}

function L(e) {
  var t, n;
  let l = (0, s.e7)([O.Z], () => O.Z.getCategories(e)),
    i = l._categories.length,
    r = l._categories[l._categories.length - 1];
  if (null == r) return 0;
  let a = l[null != (n = null == (t = r.channel) ? true : t.id) ? n : "null"];
  return null == a ? 0 : 0 === a.length ? r.index + 2 - i : a[a.length - 1].index + 2 - i
}

function R(e) {
  var t;
  return j.intl.formatToPlainString(j.t["8N0BHR"], {
    timeAgo: o()(_.default.extractTimestamp(null != (t = y.ZP.lastMessageId(e)) ? t : e)).fromNow()
  })
}