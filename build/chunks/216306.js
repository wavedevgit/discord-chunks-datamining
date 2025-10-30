/** Chunk was on 58510 **/
/** chunk id: 216306, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Fo: () => U,
  KY: () => R,
  Uo: () => A,
  fU: () => w,
  qw: () => Z,
  tn: () => M
}), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
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

function L(e, t) {
  e.index = t
}

function U(e, t, n, a) {
  a = a.toLowerCase();
  let o = (0, h.g)(e),
    c = i.useCallback((e, t) => !(o && e.channel.hasFlag(v.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== I.d4z.GUILD_DIRECTORY && (0 === t.length || l()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [o]);
  return i.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[I.d4z.GUILD_CATEGORY].forEach(n => {
      let {
        channel: i
      } = n;
      "null" === i.id && (e.null = t.null.filter(e => c(e, a))), e[i.id] = t[i.id].filter(e => c(e, a))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === a.length || e[t.channel.id].length > 0), (0, d.Z)(e._categories, e).forEach(L), e
  }, [t, n, c, a])
}

function R(e) {
  let t = e.getSections(false);
  if (t[g.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case E.z.GUILD_HOME:
      return v.oC.GUILD_HOME;
    case E.z.GUILD_ROLE_SUBSCRIPTIONS:
      return v.oC.ROLE_SUBSCRIPTIONS;
    case E.z.GUILD_MOD_DASH_MEMBER_SAFETY:
      return v.oC.MEMBER_SAFETY
  }
  for (let i = g.wd; i < e.voiceChannelsSectionNumber; i++)
    if (t[i] > 0) {
      var n;
      let t = null == (n = e.getChannelFromSectionRow(i, 0)) ? true : n.channel;
      if (null != t) return t.id
    } return null
}

function A(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, f.n)(e, t), (0, u.y5)(t.map(e => ({
    channelId: e,
    readStateType: O.W.CHANNEL,
    messageId: C.ZP.lastMessageId(e)
  }))), null != n && (0, b.uL)(I.Z5c.CHANNEL(e, n))
}

function M(e, t, n, i) {
  let a = (0, _.Nj)(s.z.CHANNEL_BROWSER_NUX),
    l = (0, r.cj)([p.Z], () => {
      let t = {},
        n = p.Z.getMutableGuildChannelsForGuild(e);
      for (let e in n) {
        let {
          parent_id: a
        } = n[e];
        if (null != a) {
          var i;
          t[a] = (null != (i = t[a]) ? i : 0) + 1
        }
      }
      return t
    }, [e]),
    o = t._categories.map(e => {
      let i = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === l[e.channel.id] ? 1 : i.length,
        rowHeight: 0 === i.length ? 0 : n
      }
    });
  return a || null == i || o.unshift({
    rowCount: 1,
    rowHeight: i
  }), o
}

function w(e) {
  var t, n;
  let i = (0, r.e7)([m.Z], () => m.Z.getCategories(e)),
    a = i._categories.length,
    l = i._categories[i._categories.length - 1];
  if (null == l) return 0;
  let o = i[null != (n = null == (t = l.channel) ? true : t.id) ? n : "null"];
  return null == o ? 0 : 0 === o.length ? l.index + 2 - a : o[o.length - 1].index + 2 - a
}

function Z(e) {
  var t;
  return N.intl.formatToPlainString(N.t["8N0BHR"], {
    timeAgo: c()(S.default.extractTimestamp(null != (t = C.ZP.lastMessageId(e)) ? t : e)).fromNow()
  })
}