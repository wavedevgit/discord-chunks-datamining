/** Chunk was on 98206 **/
/** chunk id: 216306, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Fo: () => P,
  KY: () => k,
  Uo: () => E,
  fU: () => T,
  qw: () => R,
  tn: () => M
}), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
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

function D(e, n) {
  e.index = n
}

function P(e, n, t, i) {
  i = i.toLowerCase();
  let o = (0, g.g)(e),
    c = r.useCallback((e, n) => !(o && e.channel.hasFlag(m.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== S.d4z.GUILD_DIRECTORY && (0 === n.length || a()(n, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(n)), [o]);
  return r.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return t[S.d4z.GUILD_CATEGORY].forEach(t => {
      let {
        channel: r
      } = t;
      "null" === r.id && (e.null = n.null.filter(e => c(e, i))), e[r.id] = n[r.id].filter(e => c(e, i))
    }), e._categories = n._categories.filter(n => "null" === n.channel.id || 0 === i.length || e[n.channel.id].length > 0), (0, d.Z)(e._categories, e).forEach(D), e
  }, [n, t, c, i])
}

function k(e) {
  let n = e.getSections(false);
  if (n[f.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case C.z.GUILD_HOME:
      return m.oC.GUILD_HOME;
    case C.z.GUILD_ROLE_SUBSCRIPTIONS:
      return m.oC.ROLE_SUBSCRIPTIONS;
    case C.z.GUILD_MOD_DASH_MEMBER_SAFETY:
      return m.oC.MEMBER_SAFETY
  }
  for (let r = f.wd; r < e.voiceChannelsSectionNumber; r++)
    if (n[r] > 0) {
      var t;
      let n = null == (t = e.getChannelFromSectionRow(r, 0)) ? true : t.channel;
      if (null != n) return n.id
    } return null
}

function E(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, p.n)(e, n), (0, u.y5)(n.map(e => ({
    channelId: e,
    readStateType: w.W.CHANNEL,
    messageId: y.ZP.lastMessageId(e)
  }))), null != t && (0, _.uL)(S.Z5c.CHANNEL(e, t))
}

function M(e, n, t, r) {
  let i = (0, h.Nj)(s.z.CHANNEL_BROWSER_NUX),
    a = (0, l.cj)([v.Z], () => {
      let n = {},
        t = v.Z.getMutableGuildChannelsForGuild(e);
      for (let e in t) {
        let {
          parent_id: i
        } = t[e];
        if (null != i) {
          var r;
          n[i] = (null != (r = n[i]) ? r : 0) + 1
        }
      }
      return n
    }, [e]),
    o = n._categories.map(e => {
      let r = n[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : r.length,
        rowHeight: 0 === r.length ? 0 : t
      }
    });
  return i || null == r || o.unshift({
    rowCount: 1,
    rowHeight: r
  }), o
}

function T(e) {
  var n, t;
  let r = (0, l.e7)([b.Z], () => b.Z.getCategories(e)),
    i = r._categories.length,
    a = r._categories[r._categories.length - 1];
  if (null == a) return 0;
  let o = r[null != (t = null == (n = a.channel) ? true : n.id) ? t : "null"];
  return null == o ? 0 : 0 === o.length ? a.index + 2 - i : o[o.length - 1].index + 2 - i
}

function R(e) {
  var n;
  return O.intl.formatToPlainString(O.t["8N0BHR"], {
    timeAgo: c()(I.default.extractTimestamp(null != (n = y.ZP.lastMessageId(e)) ? n : e)).fromNow()
  })
}