/** Chunk was on 88844 **/
n.d(t, {
  Z: () => S
});
var r = n(25209),
  i = n(97797),
  a = n(35125),
  l = n(786761),
  u = n(739566),
  o = n(499401),
  c = n(693912),
  d = n(23750),
  s = n(314897),
  f = n(592125),
  _ = n(430824),
  E = n(594174),
  N = n(5192),
  p = n(709054),
  m = n(981631),
  g = n(388032);
let h = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  C = () => [g.t["0cuj7u"], g.t["MuW+CA"], g.t.osqpHR, g.t["5ToSh4"], g.t.JEB8pq, g.t.pkOV5e, g.t.kRb1Jy, g.t.EmKLY2, g.t.rPtBnZ, g.t["5B/ekZ"], g.t.ESNC3d, g.t["Iw6d8/"], g.t.WecSZ2],
  T = () => [g.t.Jm6e09, g.t.MGRnRU, g.t.EXOEGh, g.t["5uCTFB"], g.t.rl45Qk, g.t.Bh9zpa, g.t.RdEy1N, g.t.qcdp09, g.t.F7w2Rk, g.t.gSyOgI, g.t.uYgqv7, g.t["b/1SBQ"], g.t.LhebZG],
  A = () => [g.t["20E/ys"], g.t["oa8+kp"], g.t.zoKkXl, g.t.FP9aS0, g.t.E5Zj1d, g.t["6Anmws"], g.t.sR78HR, g.t.gA9qPz, g.t.Hkiyp6, g.t.w1HMho],
  O = () => [g.t["8fy3DQ"], g.t.UproUV, g.t["7l3EyM"], g.t.GToyaG, g.t["DUs+Zm"], g.t.yLkbfn, g.t.oWdvws, g.t.tOoKTE, g.t["VM7+Oj"], g.t["hJx/u7"]],
  I = e => {
    switch (e) {
      case "NORMAL":
      default:
        return C();
      case "CLAN":
        return A()
    }
  },
  b = e => {
    switch (e) {
      case "NORMAL":
      default:
        return T();
      case "CLAN":
        return O()
    }
  };

function P(e, t) {
  let n = b(t),
    r = p.default.extractTimestamp(e) % n.length;
  return n[r]
}

function R(e) {
  return (0, r.Rp)(g.NW.formatToParts(g.t["ihxM9/"], {
    username: e,
    usernameOnClick: m.dG4
  }))
}

function v(e) {
  var t;
  return (null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(m.oNc.CLAN)) ? "CLAN" : "NORMAL"
}
let S = {
  stringify: function(e, t) {
    var n, p, h, C;
    let T = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
      A = null != T && "string" != typeof T ? E.default.getUser(T.id) : void 0,
      O = e.channel_id,
      I = N.ZP.getName(null, O, e.author);
    switch (e.type) {
      case m.uaV.RECIPIENT_ADD:
        if (null == A) return;
        return (0, r.Rp)(g.NW.formatToParts(g.t["7/Xl0d"], {
          username: I,
          usernameOnClick: m.dG4,
          otherUsername: N.ZP.getName(null, O, A),
          otherUsernameOnClick: m.dG4
        }));
      case m.uaV.RECIPIENT_REMOVE:
        if (null == A) return;
        let b = e.author;
        if (null == b || b.id === A.id) return (0, r.Rp)(g.NW.formatToParts(g.t["Qn5+LS"], {
          username: I,
          usernameOnClick: m.dG4
        }));
        return (0, r.Rp)(g.NW.formatToParts(g.t.QtZ0RE, {
          username: I,
          usernameOnClick: m.dG4,
          otherUsername: N.ZP.getName(null, O, A),
          otherUsernameOnClick: m.dG4
        }));
      case m.uaV.CALL:
        let {
          call: S
        } = e;
        if (null != S && -1 === S.participants.indexOf(s.default.getId())) return (0, r.Rp)(g.NW.formatToParts(g.t.DbgSAw, {
          username: I,
          usernameOnClick: m.dG4
        }));
        return;
      case m.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(g.NW.formatToParts(t.isForumPost() ? g.t["qa0e/v"] : g.t.XCPMEB, {
          username: I,
          usernameOnClick: m.dG4,
          channelName: e.content
        }));
      case m.uaV.CHANNEL_ICON_CHANGE:
        return (0, r.Rp)(g.NW.formatToParts(g.t.wypJZ2, {
          username: I,
          usernameOnClick: m.dG4
        }));
      case m.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, r.Rp)(g.NW.formatToParts(g.t["/M60j4"], {
          username: I,
          usernameOnClick: m.dG4
        }));
      case m.uaV.USER_JOIN:
        let y = v(t.guild_id);
        return (0, r.Rp)(g.NW.formatToParts(P(e.id, y), {
          username: I,
          usernameOnClick: m.dG4
        }));
      case m.uaV.GUILD_BOOST:
        return R(I);
      case m.uaV.GUILD_BOOST_TIER_1:
      case m.uaV.GUILD_BOOST_TIER_2:
      case m.uaV.GUILD_BOOST_TIER_3:
        return function(e, t) {
          let n = f.Z.getChannel(t);
          return null == n || null == _.Z.getGuild(n.getGuildId()) ? R(e) : (0, r.Rp)(g.NW.formatToParts(g.t["ihxM9/"], {
            username: e,
            usernameOnClick: m.dG4
          }))
        }(I, O);
      case m.uaV.GUILD_INVITE_REMINDER:
        return g.NW.string(g.t.gxyKvr);
      case m.uaV.THREAD_STARTER_MESSAGE:
        return g.NW.formatToPlainString(g.t["B8H+Cg"], {
          username: I,
          threadName: t.name
        });
      case m.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof d.ZP) return null;
        return (0, r.Rp)((0, a.vp)({
          username: I,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case m.uaV.PURCHASE_NOTIFICATION:
        if (e instanceof d.ZP || (null === (h = e.purchase_notification) || void 0 === h ? void 0 : null === (p = h.guild_product_purchase) || void 0 === p ? void 0 : p.product_name) == null) return null;
        return (0, r.Rp)((0, i.i)({
          username: I,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case m.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof d.ZP) return null;
        let G = (0, u.ZH)((0, l.e5)(e));
        return (0, r.Rp)((0, o.Y)({
          application: e.application,
          username: G.nick
        }));
      case m.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof d.ZP) return null;
        return (0, r.Rp)((0, c.B2)({
          application: e.application,
          username: (0, u.ZH)((0, l.e5)(e)).nick
        }));
      case m.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof d.ZP) return null;
        return (0, r.Rp)((0, c.hj)({
          application: e.application,
          username: (0, u.ZH)((0, l.e5)(e)).nick
        }));
      case m.uaV.AUTO_MODERATION_ACTION:
        if (null === (C = e.embeds) || void 0 === C ? void 0 : C.some(e => {
            let {
              type: t
            } = e;
            return t === m.hBH.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = f.Z.getChannel(e);
          if (null == t) return null;
          let n = _.Z.getGuild(t.getGuildId());
          return null == n ? null : (0, r.Rp)(g.NW.formatToParts(g.t["a+lJKi"], {
            guildName: n.name
          }))
        }(O);
        return e.content;
      case m.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, n) {
          let i = f.Z.getChannel(t);
          if (null == i) return null;
          let a = _.Z.getGuild(i.getGuildId());
          return null == a ? null : (0, r.Rp)(g.NW.formatToParts(g.t.iOuWPj, {
            username: e,
            guildName: a.name,
            time: "" !== n ? new Date(n).toLocaleString(g.NW.currentLocale, {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(I, O, e.content);
      case m.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let n = f.Z.getChannel(t);
          if (null == n) return null;
          let i = _.Z.getGuild(n.getGuildId());
          return null == i ? null : (0, r.Rp)(g.NW.formatToParts(g.t.axmbpq, {
            username: e,
            guildName: i.name
          }))
        }(I, O);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e, t) {
    let n = I(t),
      r = p.default.extractTimestamp(e) % n.length;
    return n[r]
  },
  getSystemMessageUserJoinMobile: P,
  getSystemMessageBotJoin: function(e) {
    return null == h[e] ? null : g.NW.format(g.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(h[e])
      }
    })
  },
  getWelcomeMessageKind: v
}