/** Chunk was on 76844 **/
/** chunk id: 216306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fo: () => R,
  KY: () => P,
  Uo: () => S,
  fU: () => L,
  qw: () => A,
  tn: () => C
}), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
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

function R(e, t, n, r) {
  r = r.toLowerCase();
  let a = (0, p.g)(e),
    s = l.useCallback((e, t) => !(a && e.channel.hasFlag(O.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== E.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
  return l.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[E.d4z.GUILD_CATEGORY].forEach(n => {
      let {
        channel: l
      } = n;
      "null" === l.id && (e.null = t.null.filter(e => s(e, r))), e[l.id] = t[l.id].filter(e => s(e, r))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0), (0, d.Z)(e._categories, e).forEach(N), e
  }, [t, n, s, r])
}

function P(e) {
  let t = e.getSections(false);
  if (t[g.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case j.z.GUILD_HOME:
      return O.oC.GUILD_HOME;
    case j.z.GUILD_ROLE_SUBSCRIPTIONS:
      return O.oC.ROLE_SUBSCRIPTIONS;
    case j.z.GUILD_MOD_DASH_MEMBER_SAFETY:
      return O.oC.MEMBER_SAFETY
  }
  for (let l = g.wd; l < e.voiceChannelsSectionNumber; l++)
    if (t[l] > 0) {
      var n;
      let t = null == (n = e.getChannelFromSectionRow(l, 0)) ? true : n.channel;
      if (null != t) return t.id
    } return null
}

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, f.n)(e, t), (0, c.y5)(t.map(e => ({
    channelId: e,
    readStateType: x.W.CHANNEL,
    messageId: b.ZP.lastMessageId(e)
  }))), null != n && (0, v.uL)(E.Z5c.CHANNEL(e, n))
}

function C(e, t, n, l) {
  let r = (0, h.Nj)(u.z.CHANNEL_BROWSER_NUX),
    i = (0, o.cj)([m.Z], () => {
      let t = {},
        n = m.Z.getMutableGuildChannelsForGuild(e);
      for (let e in n) {
        let {
          parent_id: r
        } = n[e];
        if (null != r) {
          var l;
          t[r] = (null != (l = t[r]) ? l : 0) + 1
        }
      }
      return t
    }, [e]),
    a = t._categories.map(e => {
      let l = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : l.length,
        rowHeight: 0 === l.length ? 0 : n
      }
    });
  return r || null == l || a.unshift({
    rowCount: 1,
    rowHeight: l
  }), a
}

function L(e) {
  var t, n;
  let l = (0, o.e7)([D.Z], () => D.Z.getCategories(e)),
    r = l._categories.length,
    i = l._categories[l._categories.length - 1];
  if (null == i) return 0;
  let a = l[null != (n = null == (t = i.channel) ? true : t.id) ? n : "null"];
  return null == a ? 0 : 0 === a.length ? i.index + 2 - r : a[a.length - 1].index + 2 - r
}

function A(e) {
  var t;
  return w.intl.formatToPlainString(w.t["8N0BHR"], {
    timeAgo: s()(y.default.extractTimestamp(null != (t = b.ZP.lastMessageId(e)) ? t : e)).fromNow()
  })
}