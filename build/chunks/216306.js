/** Chunk was on 18295 **/
/** chunk id: 216306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fo: () => S,
  KY: () => L,
  Uo: () => _,
  fU: () => P,
  qw: () => Z,
  tn: () => C
}), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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

function N(e, t) {
  e.index = t
}

function S(e, t, n, i) {
  i = i.toLowerCase();
  let a = (0, g.g)(e),
    s = r.useCallback((e, t) => !(a && e.channel.hasFlag(y.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== j.d4z.GUILD_DIRECTORY && (0 === t.length || l()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
  return r.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[j.d4z.GUILD_CATEGORY].forEach(n => {
      let {
        channel: r
      } = n;
      "null" === r.id && (e.null = t.null.filter(e => s(e, i))), e[r.id] = t[r.id].filter(e => s(e, i))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0), (0, d.Z)(e._categories, e).forEach(N), e
  }, [t, n, s, i])
}

function L(e) {
  let t = e.getSections(false);
  if (t[p.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case x.z.GUILD_HOME:
      return y.oC.GUILD_HOME;
    case x.z.GUILD_ROLE_SUBSCRIPTIONS:
      return y.oC.ROLE_SUBSCRIPTIONS;
    case x.z.GUILD_MOD_DASH_MEMBER_SAFETY:
      return y.oC.MEMBER_SAFETY
  }
  for (let r = p.wd; r < e.voiceChannelsSectionNumber; r++)
    if (t[r] > 0) {
      var n;
      let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? true : n.channel;
      if (null != t) return t.id
    } return null
}

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, f.n)(e, t), (0, u.y5)(t.map(e => ({
    channelId: e,
    readStateType: w.W.CHANNEL,
    messageId: O.ZP.lastMessageId(e)
  }))), null != n && (0, v.uL)(j.Z5c.CHANNEL(e, n))
}

function C(e, t, n, r) {
  let i = (0, h.Nj)(c.z.CHANNEL_BROWSER_NUX),
    l = (0, o.cj)([m.Z], () => {
      let t = {},
        n = m.Z.getMutableGuildChannelsForGuild(e);
      for (let e in n) {
        let {
          parent_id: i
        } = n[e];
        if (null != i) {
          var r;
          t[i] = (null != (r = t[i]) ? r : 0) + 1
        }
      }
      return t
    }, [e]),
    a = t._categories.map(e => {
      let r = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === l[e.channel.id] ? 1 : r.length,
        rowHeight: 0 === r.length ? 0 : n
      }
    });
  return i || null == r || a.unshift({
    rowCount: 1,
    rowHeight: r
  }), a
}

function P(e) {
  var t, n;
  let r = (0, o.e7)([D.Z], () => D.Z.getCategories(e)),
    i = r._categories.length,
    l = r._categories[r._categories.length - 1];
  if (null == l) return 0;
  let a = r[null != (n = null == (t = l.channel) ? true : t.id) ? n : "null"];
  return null == a ? 0 : 0 === a.length ? l.index + 2 - i : a[a.length - 1].index + 2 - i
}

function Z(e) {
  var t;
  return E.intl.formatToPlainString(E.t["8N0BHR"], {
    timeAgo: s()(b.default.extractTimestamp(null != (t = O.ZP.lastMessageId(e)) ? t : e)).fromNow()
  })
}