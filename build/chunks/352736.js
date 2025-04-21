/** Chunk was on 85679 **/
n.d(e, {
  Z: () => C
}), n(388685);
var l = n(25209),
  i = n(97797),
  r = n(35125),
  a = n(786761),
  u = n(739566),
  o = n(499401),
  s = n(693912),
  d = n(23750),
  c = n(314897),
  m = n(592125),
  f = n(430824),
  N = n(594174),
  _ = n(5192),
  g = n(709054),
  p = n(981631),
  E = n(388032);
let I = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  T = () => [E.t["0cuj7u"], E.t["MuW+CA"], E.t.osqpHR, E.t["5ToSh4"], E.t.JEB8pq, E.t.pkOV5e, E.t.kRb1Jy, E.t.EmKLY2, E.t.rPtBnZ, E.t["5B/ekZ"], E.t.ESNC3d, E.t["Iw6d8/"], E.t.WecSZ2],
  R = () => [E.t.Jm6e09, E.t.MGRnRU, E.t.EXOEGh, E.t["5uCTFB"], E.t.rl45Qk, E.t.Bh9zpa, E.t.RdEy1N, E.t.qcdp09, E.t.F7w2Rk, E.t.gSyOgI, E.t.uYgqv7, E.t["b/1SBQ"], E.t.LhebZG];

function h(t) {
  let e = R(),
    n = g.default.extractTimestamp(t) % e.length;
  return e[n]
}

function O(t) {
  return (0, l.Rp)(E.intl.formatToParts(E.t["ihxM9/"], {
    username: t,
    usernameOnClick: p.dG4
  }))
}
let C = {
  stringify: function(t, e) {
    var n, g, I;
    let T = function(t) {
        var e, n, l;
        let [i] = null != (e = t.mentions) ? e : [];
        return null == i ? null : "object" == typeof i ? null != (n = N.default.getUser(i.id)) ? n : null : "string" == typeof i && null != (l = N.default.getUser(i)) ? l : null
      }(t),
      R = t.channel_id,
      C = _.ZP.getName(null, R, t.author);
    switch (t.type) {
      case p.uaV.RECIPIENT_ADD:
        if (null == T) return;
        return (0, l.Rp)(E.intl.formatToParts(E.t["7/Xl0d"], {
          username: C,
          usernameOnClick: p.dG4,
          otherUsername: _.ZP.getName(null, R, T),
          otherUsernameOnClick: p.dG4
        }));
      case p.uaV.RECIPIENT_REMOVE:
        if (null == T) return;
        let A = t.author;
        if (null == A || A.id === T.id) return (0, l.Rp)(E.intl.formatToParts(E.t["Qn5+LS"], {
          username: C,
          usernameOnClick: p.dG4
        }));
        return (0, l.Rp)(E.intl.formatToParts(E.t.QtZ0RE, {
          username: C,
          usernameOnClick: p.dG4,
          otherUsername: _.ZP.getName(null, R, T),
          otherUsernameOnClick: p.dG4
        }));
      case p.uaV.CALL:
        let {
          call: P
        } = t;
        if (null != P && -1 === P.participants.indexOf(c.default.getId())) return (0, l.Rp)(E.intl.formatToParts(E.t.DbgSAw, {
          username: C,
          usernameOnClick: p.dG4
        }));
        return;
      case p.uaV.CHANNEL_NAME_CHANGE:
        return (0, l.Rp)(E.intl.formatToParts(e.isForumPost() ? E.t["qa0e/v"] : E.t.XCPMEB, {
          username: C,
          usernameOnClick: p.dG4,
          channelName: t.content
        }));
      case p.uaV.CHANNEL_ICON_CHANGE:
        return (0, l.Rp)(E.intl.formatToParts(E.t.wypJZ2, {
          username: C,
          usernameOnClick: p.dG4
        }));
      case p.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, l.Rp)(E.intl.formatToParts(E.t["/M60j4"], {
          username: C,
          usernameOnClick: p.dG4
        }));
      case p.uaV.USER_JOIN:
        return (0, l.Rp)(E.intl.formatToParts(h(t.id), {
          username: C,
          usernameOnClick: p.dG4
        }));
      case p.uaV.GUILD_BOOST:
        return O(C);
      case p.uaV.GUILD_BOOST_TIER_1:
      case p.uaV.GUILD_BOOST_TIER_2:
      case p.uaV.GUILD_BOOST_TIER_3:
        let G = m.Z.getChannel(R);
        return null == G || null == f.Z.getGuild(G.getGuildId()) ? O(C) : (0, l.Rp)(E.intl.formatToParts(E.t["ihxM9/"], {
          username: C,
          usernameOnClick: p.dG4
        }));
      case p.uaV.GUILD_INVITE_REMINDER:
        return E.intl.string(E.t.gxyKvr);
      case p.uaV.THREAD_STARTER_MESSAGE:
        return E.intl.formatToPlainString(E.t["B8H+Cg"], {
          username: C,
          threadName: e.name
        });
      case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof d.ZP) return null;
        return (0, l.Rp)((0, r.vp)({
          username: C,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case p.uaV.PURCHASE_NOTIFICATION:
        if (t instanceof d.ZP || (null == (g = t.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
        return (0, l.Rp)((0, i.i)({
          username: C,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof d.ZP) return null;
        let Z = (0, u.ZH)((0, a.e5)(t));
        return (0, l.Rp)((0, o.Y)({
          application: t.application,
          username: Z.nick
        }));
      case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof d.ZP) return null;
        return (0, l.Rp)((0, s.B2)({
          application: t.application,
          username: (0, u.ZH)((0, a.e5)(t)).nick
        }));
      case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof d.ZP) return null;
        return (0, l.Rp)((0, s.hj)({
          application: t.application,
          username: (0, u.ZH)((0, a.e5)(t)).nick
        }));
      case p.uaV.AUTO_MODERATION_ACTION:
        if (null == (I = t.embeds) ? void 0 : I.some(t => {
            let {
              type: e
            } = t;
            return e === p.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let t = m.Z.getChannel(R);
          if (null == t) return null;
          let e = f.Z.getGuild(t.getGuildId());
          return null == e ? null : (0, l.Rp)(E.intl.formatToParts(E.t["a+lJKi"], {
            guildName: e.name
          }))
        }
        return t.content;
      case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var L = t.content;
        let U = m.Z.getChannel(R);
        if (null == U) return null;
        let S = f.Z.getGuild(U.getGuildId());
        return null == S ? null : (0, l.Rp)(E.intl.formatToParts(E.t.iOuWPj, {
          username: C,
          guildName: S.name,
          time: "" !== L ? new Date(L).toLocaleString(E.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let k = m.Z.getChannel(R);
        if (null == k) return null;
        let b = f.Z.getGuild(k.getGuildId());
        return null == b ? null : (0, l.Rp)(E.intl.formatToParts(E.t.axmbpq, {
          username: C,
          guildName: b.name
        }));
      default:
        return t.content
    }
  },
  getSystemMessageUserJoin: function(t) {
    let e = T(),
      n = g.default.extractTimestamp(t) % e.length;
    return e[n]
  },
  getSystemMessageUserJoinMobile: h,
  getSystemMessageBotJoin: function(t) {
    return null == I[t] ? null : E.intl.format(E.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(I[t])
      }
    })
  }
}