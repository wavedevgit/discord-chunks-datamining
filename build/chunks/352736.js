/** Chunk was on 60691 **/
n.d(e, {
  Z: () => Z
});
var r = n(25209),
  a = n(97797),
  u = n(35125),
  l = n(786761),
  i = n(739566),
  o = n(499401),
  s = n(693912),
  c = n(23750),
  d = n(314897),
  N = n(592125),
  m = n(430824),
  f = n(594174),
  _ = n(5192),
  g = n(709054),
  E = n(981631),
  p = n(388032);
let R = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  T = () => [p.t["0cuj7u"], p.t["MuW+CA"], p.t.osqpHR, p.t["5ToSh4"], p.t.JEB8pq, p.t.pkOV5e, p.t.kRb1Jy, p.t.EmKLY2, p.t.rPtBnZ, p.t["5B/ekZ"], p.t.ESNC3d, p.t["Iw6d8/"], p.t.WecSZ2],
  I = () => [p.t.Jm6e09, p.t.MGRnRU, p.t.EXOEGh, p.t["5uCTFB"], p.t.rl45Qk, p.t.Bh9zpa, p.t.RdEy1N, p.t.qcdp09, p.t.F7w2Rk, p.t.gSyOgI, p.t.uYgqv7, p.t["b/1SBQ"], p.t.LhebZG],
  O = () => [p.t["20E/ys"], p.t["oa8+kp"], p.t.zoKkXl, p.t.FP9aS0, p.t.E5Zj1d, p.t["6Anmws"], p.t.sR78HR, p.t.gA9qPz, p.t.Hkiyp6, p.t.w1HMho],
  h = () => [p.t["8fy3DQ"], p.t.UproUV, p.t["7l3EyM"], p.t.GToyaG, p.t["DUs+Zm"], p.t.yLkbfn, p.t.oWdvws, p.t.tOoKTE, p.t["VM7+Oj"], p.t["hJx/u7"]],
  A = t => {
    switch (t) {
      case "NORMAL":
      default:
        return T();
      case "CLAN":
        return O()
    }
  },
  C = t => {
    switch (t) {
      case "NORMAL":
      default:
        return I();
      case "CLAN":
        return h()
    }
  };

function P(t, e) {
  let n = C(e),
    r = g.default.extractTimestamp(t) % n.length;
  return n[r]
}

function G(t) {
  return (0, r.Rp)(p.NW.formatToParts(p.t["ihxM9/"], {
    username: t,
    usernameOnClick: E.dG4
  }))
}

function L(t) {
  var e;
  return (null === (e = m.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(E.oNc.CLAN)) ? "CLAN" : "NORMAL"
}
let Z = {
  stringify: function(t, e) {
    var n, g, R, T;
    let I = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
      O = null != I && "string" != typeof I ? f.default.getUser(I.id) : void 0,
      h = t.channel_id,
      A = _.ZP.getName(null, h, t.author);
    switch (t.type) {
      case E.uaV.RECIPIENT_ADD:
        if (null == O) return;
        return (0, r.Rp)(p.NW.formatToParts(p.t["7/Xl0d"], {
          username: A,
          usernameOnClick: E.dG4,
          otherUsername: _.ZP.getName(null, h, O),
          otherUsernameOnClick: E.dG4
        }));
      case E.uaV.RECIPIENT_REMOVE:
        if (null == O) return;
        let C = t.author;
        if (null == C || C.id === O.id) return (0, r.Rp)(p.NW.formatToParts(p.t["Qn5+LS"], {
          username: A,
          usernameOnClick: E.dG4
        }));
        return (0, r.Rp)(p.NW.formatToParts(p.t.QtZ0RE, {
          username: A,
          usernameOnClick: E.dG4,
          otherUsername: _.ZP.getName(null, h, O),
          otherUsernameOnClick: E.dG4
        }));
      case E.uaV.CALL:
        let {
          call: Z
        } = t;
        if (null != Z && -1 === Z.participants.indexOf(d.default.getId())) return (0, r.Rp)(p.NW.formatToParts(p.t.DbgSAw, {
          username: A,
          usernameOnClick: E.dG4
        }));
        return;
      case E.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(p.NW.formatToParts(e.isForumPost() ? p.t["qa0e/v"] : p.t.XCPMEB, {
          username: A,
          usernameOnClick: E.dG4,
          channelName: t.content
        }));
      case E.uaV.CHANNEL_ICON_CHANGE:
        return (0, r.Rp)(p.NW.formatToParts(p.t.wypJZ2, {
          username: A,
          usernameOnClick: E.dG4
        }));
      case E.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, r.Rp)(p.NW.formatToParts(p.t["/M60j4"], {
          username: A,
          usernameOnClick: E.dG4
        }));
      case E.uaV.USER_JOIN:
        let U = L(e.guild_id);
        return (0, r.Rp)(p.NW.formatToParts(P(t.id, U), {
          username: A,
          usernameOnClick: E.dG4
        }));
      case E.uaV.GUILD_BOOST:
        return G(A);
      case E.uaV.GUILD_BOOST_TIER_1:
      case E.uaV.GUILD_BOOST_TIER_2:
      case E.uaV.GUILD_BOOST_TIER_3:
        return function(t, e) {
          let n = N.Z.getChannel(e);
          return null == n || null == m.Z.getGuild(n.getGuildId()) ? G(t) : (0, r.Rp)(p.NW.formatToParts(p.t["ihxM9/"], {
            username: t,
            usernameOnClick: E.dG4
          }))
        }(A, h);
      case E.uaV.GUILD_INVITE_REMINDER:
        return p.NW.string(p.t.gxyKvr);
      case E.uaV.THREAD_STARTER_MESSAGE:
        return p.NW.formatToPlainString(p.t["B8H+Cg"], {
          username: A,
          threadName: e.name
        });
      case E.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof c.ZP) return null;
        return (0, r.Rp)((0, u.vp)({
          username: A,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case E.uaV.PURCHASE_NOTIFICATION:
        if (t instanceof c.ZP || (null === (R = t.purchase_notification) || void 0 === R ? void 0 : null === (g = R.guild_product_purchase) || void 0 === g ? void 0 : g.product_name) == null) return null;
        return (0, r.Rp)((0, a.i)({
          username: A,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case E.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof c.ZP) return null;
        let S = (0, i.ZH)((0, l.e5)(t));
        return (0, r.Rp)((0, o.Y)({
          application: t.application,
          username: S.nick
        }));
      case E.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof c.ZP) return null;
        return (0, r.Rp)((0, s.B2)({
          application: t.application,
          username: (0, i.ZH)((0, l.e5)(t)).nick
        }));
      case E.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof c.ZP) return null;
        return (0, r.Rp)((0, s.hj)({
          application: t.application,
          username: (0, i.ZH)((0, l.e5)(t)).nick
        }));
      case E.uaV.AUTO_MODERATION_ACTION:
        if (null === (T = t.embeds) || void 0 === T ? void 0 : T.some(t => {
            let {
              type: e
            } = t;
            return e === E.hBH.AUTO_MODERATION_NOTIFICATION
          })) return function(t) {
          let e = N.Z.getChannel(t);
          if (null == e) return null;
          let n = m.Z.getGuild(e.getGuildId());
          return null == n ? null : (0, r.Rp)(p.NW.formatToParts(p.t["a+lJKi"], {
            guildName: n.name
          }))
        }(h);
        return t.content;
      case E.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(t, e, n) {
          let a = N.Z.getChannel(e);
          if (null == a) return null;
          let u = m.Z.getGuild(a.getGuildId());
          return null == u ? null : (0, r.Rp)(p.NW.formatToParts(p.t.iOuWPj, {
            username: t,
            guildName: u.name,
            time: "" !== n ? new Date(n).toLocaleString(p.NW.currentLocale, {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(A, h, t.content);
      case E.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(t, e) {
          let n = N.Z.getChannel(e);
          if (null == n) return null;
          let a = m.Z.getGuild(n.getGuildId());
          return null == a ? null : (0, r.Rp)(p.NW.formatToParts(p.t.axmbpq, {
            username: t,
            guildName: a.name
          }))
        }(A, h);
      default:
        return t.content
    }
  },
  getSystemMessageUserJoin: function(t, e) {
    let n = A(e),
      r = g.default.extractTimestamp(t) % n.length;
    return n[r]
  },
  getSystemMessageUserJoinMobile: P,
  getSystemMessageBotJoin: function(t) {
    return null == R[t] ? null : p.NW.format(p.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(R[t])
      }
    })
  },
  getWelcomeMessageKind: L
}