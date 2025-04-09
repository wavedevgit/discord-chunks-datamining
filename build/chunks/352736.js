/** Chunk was on 60691 **/
n.d(e, {
  Z: () => Z
}), n(388685);
var r = n(25209),
  a = n(97797),
  l = n(35125),
  u = n(786761),
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
  p = n(981631),
  E = n(388032);
let R = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  T = () => [E.t["0cuj7u"], E.t["MuW+CA"], E.t.osqpHR, E.t["5ToSh4"], E.t.JEB8pq, E.t.pkOV5e, E.t.kRb1Jy, E.t.EmKLY2, E.t.rPtBnZ, E.t["5B/ekZ"], E.t.ESNC3d, E.t["Iw6d8/"], E.t.WecSZ2],
  I = () => [E.t.Jm6e09, E.t.MGRnRU, E.t.EXOEGh, E.t["5uCTFB"], E.t.rl45Qk, E.t.Bh9zpa, E.t.RdEy1N, E.t.qcdp09, E.t.F7w2Rk, E.t.gSyOgI, E.t.uYgqv7, E.t["b/1SBQ"], E.t.LhebZG],
  O = () => [E.t["20E/ys"], E.t["oa8+kp"], E.t.zoKkXl, E.t.FP9aS0, E.t.E5Zj1d, E.t["6Anmws"], E.t.sR78HR, E.t.gA9qPz, E.t.Hkiyp6, E.t.w1HMho],
  h = () => [E.t["8fy3DQ"], E.t.UproUV, E.t["7l3EyM"], E.t.GToyaG, E.t["DUs+Zm"], E.t.yLkbfn, E.t.oWdvws, E.t.tOoKTE, E.t["VM7+Oj"], E.t["hJx/u7"]],
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
  return (0, r.Rp)(E.NW.formatToParts(E.t["ihxM9/"], {
    username: t,
    usernameOnClick: p.dG4
  }))
}

function L(t) {
  var e;
  return (null == (e = m.Z.getGuild(t)) ? void 0 : e.hasFeature(p.oNc.CLAN)) ? "CLAN" : "NORMAL"
}
let Z = {
  stringify: function(t, e) {
    var n, g, R;
    let T = function(t) {
        var e, n, r;
        let [a] = null != (e = t.mentions) ? e : [];
        return null == a ? null : "object" == typeof a ? null != (n = f.default.getUser(a.id)) ? n : null : "string" == typeof a && null != (r = f.default.getUser(a)) ? r : null
      }(t),
      I = t.channel_id,
      O = _.ZP.getName(null, I, t.author);
    switch (t.type) {
      case p.uaV.RECIPIENT_ADD:
        if (null == T) return;
        return (0, r.Rp)(E.NW.formatToParts(E.t["7/Xl0d"], {
          username: O,
          usernameOnClick: p.dG4,
          otherUsername: _.ZP.getName(null, I, T),
          otherUsernameOnClick: p.dG4
        }));
      case p.uaV.RECIPIENT_REMOVE:
        if (null == T) return;
        let h = t.author;
        if (null == h || h.id === T.id) return (0, r.Rp)(E.NW.formatToParts(E.t["Qn5+LS"], {
          username: O,
          usernameOnClick: p.dG4
        }));
        return (0, r.Rp)(E.NW.formatToParts(E.t.QtZ0RE, {
          username: O,
          usernameOnClick: p.dG4,
          otherUsername: _.ZP.getName(null, I, T),
          otherUsernameOnClick: p.dG4
        }));
      case p.uaV.CALL:
        let {
          call: A
        } = t;
        if (null != A && -1 === A.participants.indexOf(d.default.getId())) return (0, r.Rp)(E.NW.formatToParts(E.t.DbgSAw, {
          username: O,
          usernameOnClick: p.dG4
        }));
        return;
      case p.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(E.NW.formatToParts(e.isForumPost() ? E.t["qa0e/v"] : E.t.XCPMEB, {
          username: O,
          usernameOnClick: p.dG4,
          channelName: t.content
        }));
      case p.uaV.CHANNEL_ICON_CHANGE:
        return (0, r.Rp)(E.NW.formatToParts(E.t.wypJZ2, {
          username: O,
          usernameOnClick: p.dG4
        }));
      case p.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, r.Rp)(E.NW.formatToParts(E.t["/M60j4"], {
          username: O,
          usernameOnClick: p.dG4
        }));
      case p.uaV.USER_JOIN:
        let C = L(e.guild_id);
        return (0, r.Rp)(E.NW.formatToParts(P(t.id, C), {
          username: O,
          usernameOnClick: p.dG4
        }));
      case p.uaV.GUILD_BOOST:
        return G(O);
      case p.uaV.GUILD_BOOST_TIER_1:
      case p.uaV.GUILD_BOOST_TIER_2:
      case p.uaV.GUILD_BOOST_TIER_3:
        let Z = N.Z.getChannel(I);
        return null == Z || null == m.Z.getGuild(Z.getGuildId()) ? G(O) : (0, r.Rp)(E.NW.formatToParts(E.t["ihxM9/"], {
          username: O,
          usernameOnClick: p.dG4
        }));
      case p.uaV.GUILD_INVITE_REMINDER:
        return E.NW.string(E.t.gxyKvr);
      case p.uaV.THREAD_STARTER_MESSAGE:
        return E.NW.formatToPlainString(E.t["B8H+Cg"], {
          username: O,
          threadName: e.name
        });
      case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof c.ZP) return null;
        return (0, r.Rp)((0, l.vp)({
          username: O,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case p.uaV.PURCHASE_NOTIFICATION:
        if (t instanceof c.ZP || (null == (g = t.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
        return (0, r.Rp)((0, a.i)({
          username: O,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof c.ZP) return null;
        let U = (0, i.ZH)((0, u.e5)(t));
        return (0, r.Rp)((0, o.Y)({
          application: t.application,
          username: U.nick
        }));
      case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof c.ZP) return null;
        return (0, r.Rp)((0, s.B2)({
          application: t.application,
          username: (0, i.ZH)((0, u.e5)(t)).nick
        }));
      case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof c.ZP) return null;
        return (0, r.Rp)((0, s.hj)({
          application: t.application,
          username: (0, i.ZH)((0, u.e5)(t)).nick
        }));
      case p.uaV.AUTO_MODERATION_ACTION:
        if (null == (R = t.embeds) ? void 0 : R.some(t => {
            let {
              type: e
            } = t;
            return e === p.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let t = N.Z.getChannel(I);
          if (null == t) return null;
          let e = m.Z.getGuild(t.getGuildId());
          return null == e ? null : (0, r.Rp)(E.NW.formatToParts(E.t["a+lJKi"], {
            guildName: e.name
          }))
        }
        return t.content;
      case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var S = t.content;
        let W = N.Z.getChannel(I);
        if (null == W) return null;
        let k = m.Z.getGuild(W.getGuildId());
        return null == k ? null : (0, r.Rp)(E.NW.formatToParts(E.t.iOuWPj, {
          username: O,
          guildName: k.name,
          time: "" !== S ? new Date(S).toLocaleString(E.NW.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let D = N.Z.getChannel(I);
        if (null == D) return null;
        let M = m.Z.getGuild(D.getGuildId());
        return null == M ? null : (0, r.Rp)(E.NW.formatToParts(E.t.axmbpq, {
          username: O,
          guildName: M.name
        }));
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
    return null == R[t] ? null : E.NW.format(E.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(R[t])
      }
    })
  },
  getWelcomeMessageKind: L
}