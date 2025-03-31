/** Chunk was on 79912 **/
n.d(e, {
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
  N = n(594174),
  E = n(5192),
  p = n(709054),
  m = n(981631),
  g = n(388032);
let h = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  T = () => [g.t["0cuj7u"], g.t["MuW+CA"], g.t.osqpHR, g.t["5ToSh4"], g.t.JEB8pq, g.t.pkOV5e, g.t.kRb1Jy, g.t.EmKLY2, g.t.rPtBnZ, g.t["5B/ekZ"], g.t.ESNC3d, g.t["Iw6d8/"], g.t.WecSZ2],
  C = () => [g.t.Jm6e09, g.t.MGRnRU, g.t.EXOEGh, g.t["5uCTFB"], g.t.rl45Qk, g.t.Bh9zpa, g.t.RdEy1N, g.t.qcdp09, g.t.F7w2Rk, g.t.gSyOgI, g.t.uYgqv7, g.t["b/1SBQ"], g.t.LhebZG],
  A = () => [g.t["20E/ys"], g.t["oa8+kp"], g.t.zoKkXl, g.t.FP9aS0, g.t.E5Zj1d, g.t["6Anmws"], g.t.sR78HR, g.t.gA9qPz, g.t.Hkiyp6, g.t.w1HMho],
  O = () => [g.t["8fy3DQ"], g.t.UproUV, g.t["7l3EyM"], g.t.GToyaG, g.t["DUs+Zm"], g.t.yLkbfn, g.t.oWdvws, g.t.tOoKTE, g.t["VM7+Oj"], g.t["hJx/u7"]],
  I = t => {
    switch (t) {
      case "NORMAL":
      default:
        return T();
      case "CLAN":
        return A()
    }
  },
  b = t => {
    switch (t) {
      case "NORMAL":
      default:
        return C();
      case "CLAN":
        return O()
    }
  };

function P(t, e) {
  let n = b(e),
    r = p.default.extractTimestamp(t) % n.length;
  return n[r]
}

function R(t) {
  return (0, r.Rp)(g.NW.formatToParts(g.t["ihxM9/"], {
    username: t,
    usernameOnClick: m.dG4
  }))
}

function v(t) {
  var e;
  return (null === (e = _.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(m.oNc.CLAN)) ? "CLAN" : "NORMAL"
}
let S = {
  stringify: function(t, e) {
    var n, p, h, T;
    let C = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
      A = null != C && "string" != typeof C ? N.default.getUser(C.id) : void 0,
      O = t.channel_id,
      I = E.ZP.getName(null, O, t.author);
    switch (t.type) {
      case m.uaV.RECIPIENT_ADD:
        if (null == A) return;
        return (0, r.Rp)(g.NW.formatToParts(g.t["7/Xl0d"], {
          username: I,
          usernameOnClick: m.dG4,
          otherUsername: E.ZP.getName(null, O, A),
          otherUsernameOnClick: m.dG4
        }));
      case m.uaV.RECIPIENT_REMOVE:
        if (null == A) return;
        let b = t.author;
        if (null == b || b.id === A.id) return (0, r.Rp)(g.NW.formatToParts(g.t["Qn5+LS"], {
          username: I,
          usernameOnClick: m.dG4
        }));
        return (0, r.Rp)(g.NW.formatToParts(g.t.QtZ0RE, {
          username: I,
          usernameOnClick: m.dG4,
          otherUsername: E.ZP.getName(null, O, A),
          otherUsernameOnClick: m.dG4
        }));
      case m.uaV.CALL:
        let {
          call: S
        } = t;
        if (null != S && -1 === S.participants.indexOf(s.default.getId())) return (0, r.Rp)(g.NW.formatToParts(g.t.DbgSAw, {
          username: I,
          usernameOnClick: m.dG4
        }));
        return;
      case m.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(g.NW.formatToParts(e.isForumPost() ? g.t["qa0e/v"] : g.t.XCPMEB, {
          username: I,
          usernameOnClick: m.dG4,
          channelName: t.content
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
        let y = v(e.guild_id);
        return (0, r.Rp)(g.NW.formatToParts(P(t.id, y), {
          username: I,
          usernameOnClick: m.dG4
        }));
      case m.uaV.GUILD_BOOST:
        return R(I);
      case m.uaV.GUILD_BOOST_TIER_1:
      case m.uaV.GUILD_BOOST_TIER_2:
      case m.uaV.GUILD_BOOST_TIER_3:
        return function(t, e) {
          let n = f.Z.getChannel(e);
          return null == n || null == _.Z.getGuild(n.getGuildId()) ? R(t) : (0, r.Rp)(g.NW.formatToParts(g.t["ihxM9/"], {
            username: t,
            usernameOnClick: m.dG4
          }))
        }(I, O);
      case m.uaV.GUILD_INVITE_REMINDER:
        return g.NW.string(g.t.gxyKvr);
      case m.uaV.THREAD_STARTER_MESSAGE:
        return g.NW.formatToPlainString(g.t["B8H+Cg"], {
          username: I,
          threadName: e.name
        });
      case m.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof d.ZP) return null;
        return (0, r.Rp)((0, a.vp)({
          username: I,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case m.uaV.PURCHASE_NOTIFICATION:
        if (t instanceof d.ZP || (null === (h = t.purchase_notification) || void 0 === h ? void 0 : null === (p = h.guild_product_purchase) || void 0 === p ? void 0 : p.product_name) == null) return null;
        return (0, r.Rp)((0, i.i)({
          username: I,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case m.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof d.ZP) return null;
        let G = (0, u.ZH)((0, l.e5)(t));
        return (0, r.Rp)((0, o.Y)({
          application: t.application,
          username: G.nick
        }));
      case m.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof d.ZP) return null;
        return (0, r.Rp)((0, c.B2)({
          application: t.application,
          username: (0, u.ZH)((0, l.e5)(t)).nick
        }));
      case m.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof d.ZP) return null;
        return (0, r.Rp)((0, c.hj)({
          application: t.application,
          username: (0, u.ZH)((0, l.e5)(t)).nick
        }));
      case m.uaV.AUTO_MODERATION_ACTION:
        if (null === (T = t.embeds) || void 0 === T ? void 0 : T.some(t => {
            let {
              type: e
            } = t;
            return e === m.hBH.AUTO_MODERATION_NOTIFICATION
          })) return function(t) {
          let e = f.Z.getChannel(t);
          if (null == e) return null;
          let n = _.Z.getGuild(e.getGuildId());
          return null == n ? null : (0, r.Rp)(g.NW.formatToParts(g.t["a+lJKi"], {
            guildName: n.name
          }))
        }(O);
        return t.content;
      case m.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(t, e, n) {
          let i = f.Z.getChannel(e);
          if (null == i) return null;
          let a = _.Z.getGuild(i.getGuildId());
          return null == a ? null : (0, r.Rp)(g.NW.formatToParts(g.t.iOuWPj, {
            username: t,
            guildName: a.name,
            time: "" !== n ? new Date(n).toLocaleString(g.NW.currentLocale, {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(I, O, t.content);
      case m.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(t, e) {
          let n = f.Z.getChannel(e);
          if (null == n) return null;
          let i = _.Z.getGuild(n.getGuildId());
          return null == i ? null : (0, r.Rp)(g.NW.formatToParts(g.t.axmbpq, {
            username: t,
            guildName: i.name
          }))
        }(I, O);
      default:
        return t.content
    }
  },
  getSystemMessageUserJoin: function(t, e) {
    let n = I(e),
      r = p.default.extractTimestamp(t) % n.length;
    return n[r]
  },
  getSystemMessageUserJoinMobile: P,
  getSystemMessageBotJoin: function(t) {
    return null == h[t] ? null : g.NW.format(g.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(h[t])
      }
    })
  },
  getWelcomeMessageKind: v
}