/** Chunk was on 2155 **/
/** chunk id: 637248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DD: () => L,
  RD: () => b,
  YC: () => M,
  vh: () => D,
  xb: () => C,
  zH: () => x
}), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  a = require.n(Chunk91871),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk334738 = require("./334738.js"),
  Chunk999903 = require("./999903.js"),
  Chunk826673 = require("./826673.js"),
  Chunk473529 = require("./473529.js"),
  Chunk32603 = require("./32603.js"),
  Chunk101579 = require("./101579.js"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk281405 = require("./281405.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx");

function R(e, t) {
  e.index = t
}

function D(e, t, n, r) {
  r = r.toLowerCase();
  let i = (0, d.d)(e),
    s = l.useCallback((e, t) => !(i && e.channel.hasFlag(f.lx.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== m.rbe.GUILD_DIRECTORY && (0 === t.length || a()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [i]);
  return l.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return n[m.rbe.GUILD_CATEGORY].forEach(n => {
      let {
        channel: l
      } = n;
      "null" === l.id && (e.null = t.null.filter(e => s(e, r))), e[l.id] = t[l.id].filter(e => s(e, r))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0), (0, E.A)(e._categories, e).forEach(R), e
  }, [t, n, s, r])
}

function C(e) {
  let t = e.getSections(false);
  if (t[g.PU] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case S.n.GUILD_HOME:
      return f.VV.GUILD_HOME;
    case S.n.GUILD_ROLE_SUBSCRIPTIONS:
      return f.VV.ROLE_SUBSCRIPTIONS;
    case S.n.GUILD_MOD_DASH_MEMBER_SAFETY:
      return f.VV.MEMBER_SAFETY
  }
  for (let l = g.bK; l < e.voiceChannelsSectionNumber; l++)
    if (t[l] > 0) {
      var n;
      let t = null == (n = e.getChannelFromSectionRow(l, 0)) ? true : n.channel;
      if (null != t) return t.id
    } return null
}

function L(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  (0, A.y)(e, t), (0, c.Uq)(t.map(e => ({
    channelId: e,
    readStateType: p.P.CHANNEL,
    messageId: h.Ay.lastMessageId(e)
  }))), null != n && (0, T.pX)(m.BVt.CHANNEL(e, n))
}

function x(e, t, n, l) {
  let r = (0, _.JZ)(u.M.CHANNEL_BROWSER_NUX),
    a = (0, o.cf)([I.A], () => {
      let t = {},
        n = I.A.getMutableGuildChannelsForGuild(e);
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
    i = t._categories.map(e => {
      let l = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
        rowHeight: 0 === l.length ? 0 : n
      }
    });
  return r || null == l || i.unshift({
    rowCount: 1,
    rowHeight: l
  }), i
}

function b(e) {
  var t, n;
  let l = (0, o.bG)([O.A], () => O.A.getCategories(e)),
    r = l._categories.length,
    a = l._categories[l._categories.length - 1];
  if (null == a) return 0;
  let i = l[null != (t = null == (n = a.channel) ? true : n.id) ? t : "null"];
  return null == i ? 0 : 0 === i.length ? a.index + 2 - r : i[i.length - 1].index + 2 - r
}

function M(e) {
  var t;
  return G.intl.formatToPlainString(G.t["8N0BHR"], {
    timeAgo: s()(N.default.extractTimestamp(null != (t = h.Ay.lastMessageId(e)) ? t : e)).fromNow()
  })
}