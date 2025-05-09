/** Chunk was on 66141 **/
n.d(e, {
  Z: () => O
}), n(388685);
var r = n(25209),
  i = n(97797),
  l = n(35125),
  a = n(786761),
  u = n(739566),
  o = n(499401),
  c = n(693912),
  d = n(23750),
  s = n(314897),
  f = n(592125),
  _ = n(430824),
  E = n(594174),
  p = n(5192),
  m = n(709054),
  h = n(981631),
  C = n(388032);
let N = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  T = () => [C.t["0cuj7u"], C.t["MuW+CA"], C.t.osqpHR, C.t["5ToSh4"], C.t.JEB8pq, C.t.pkOV5e, C.t.kRb1Jy, C.t.EmKLY2, C.t.rPtBnZ, C.t["5B/ekZ"], C.t.ESNC3d, C.t["Iw6d8/"], C.t.WecSZ2],
  g = () => [C.t.Jm6e09, C.t.MGRnRU, C.t.EXOEGh, C.t["5uCTFB"], C.t.rl45Qk, C.t.Bh9zpa, C.t.RdEy1N, C.t.qcdp09, C.t.F7w2Rk, C.t.gSyOgI, C.t.uYgqv7, C.t["b/1SBQ"], C.t.LhebZG];

function A(t) {
  let e = g(),
    n = m.default.extractTimestamp(t) % e.length;
  return e[n]
}

function I(t) {
  return (0, r.Rp)(C.intl.formatToParts(C.t["ihxM9/"], {
    username: t,
    usernameOnClick: h.dG4
  }))
}
let O = {
  stringify: function(t, e) {
    var n, m, N;
    let T = function(t) {
        var e, n, r;
        let [i] = null != (e = t.mentions) ? e : [];
        return null == i ? null : "object" == typeof i ? null != (n = E.default.getUser(i.id)) ? n : null : "string" == typeof i && null != (r = E.default.getUser(i)) ? r : null
      }(t),
      g = t.channel_id,
      O = p.ZP.getName(null, g, t.author);
    switch (t.type) {
      case h.uaV.RECIPIENT_ADD:
        if (null == T) return;
        return (0, r.Rp)(C.intl.formatToParts(C.t["7/Xl0d"], {
          username: O,
          usernameOnClick: h.dG4,
          otherUsername: p.ZP.getName(null, g, T),
          otherUsernameOnClick: h.dG4
        }));
      case h.uaV.RECIPIENT_REMOVE:
        if (null == T) return;
        let v = t.author;
        if (null == v || v.id === T.id) return (0, r.Rp)(C.intl.formatToParts(C.t["Qn5+LS"], {
          username: O,
          usernameOnClick: h.dG4
        }));
        return (0, r.Rp)(C.intl.formatToParts(C.t.QtZ0RE, {
          username: O,
          usernameOnClick: h.dG4,
          otherUsername: p.ZP.getName(null, g, T),
          otherUsernameOnClick: h.dG4
        }));
      case h.uaV.CALL:
        let {
          call: b
        } = t;
        if (null != b && -1 === b.participants.indexOf(s.default.getId())) return (0, r.Rp)(C.intl.formatToParts(C.t.DbgSAw, {
          username: O,
          usernameOnClick: h.dG4
        }));
        return;
      case h.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(C.intl.formatToParts(e.isForumPost() ? C.t["qa0e/v"] : C.t.XCPMEB, {
          username: O,
          usernameOnClick: h.dG4,
          channelName: t.content
        }));
      case h.uaV.CHANNEL_ICON_CHANGE:
        return (0, r.Rp)(C.intl.formatToParts(C.t.wypJZ2, {
          username: O,
          usernameOnClick: h.dG4
        }));
      case h.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, r.Rp)(C.intl.formatToParts(C.t["/M60j4"], {
          username: O,
          usernameOnClick: h.dG4
        }));
      case h.uaV.USER_JOIN:
        return (0, r.Rp)(C.intl.formatToParts(A(t.id), {
          username: O,
          usernameOnClick: h.dG4
        }));
      case h.uaV.GUILD_BOOST:
        return I(O);
      case h.uaV.GUILD_BOOST_TIER_1:
      case h.uaV.GUILD_BOOST_TIER_2:
      case h.uaV.GUILD_BOOST_TIER_3:
        let R = f.Z.getChannel(g);
        return null == R || null == _.Z.getGuild(R.getGuildId()) ? I(O) : (0, r.Rp)(C.intl.formatToParts(C.t["ihxM9/"], {
          username: O,
          usernameOnClick: h.dG4
        }));
      case h.uaV.GUILD_INVITE_REMINDER:
        return C.intl.string(C.t.gxyKvr);
      case h.uaV.THREAD_STARTER_MESSAGE:
        return C.intl.formatToPlainString(C.t["B8H+Cg"], {
          username: O,
          threadName: e.name
        });
      case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof d.ZP) return null;
        return (0, r.Rp)((0, l.vp)({
          username: O,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case h.uaV.PURCHASE_NOTIFICATION:
        if (t instanceof d.ZP || (null == (m = t.purchase_notification) || null == (n = m.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
        return (0, r.Rp)((0, i.i)({
          username: O,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof d.ZP) return null;
        let P = (0, u.ZH)((0, a.e5)(t));
        return (0, r.Rp)((0, o.Y)({
          application: t.application,
          username: P.nick
        }));
      case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof d.ZP) return null;
        return (0, r.Rp)((0, c.B2)({
          application: t.application,
          username: (0, u.ZH)((0, a.e5)(t)).nick
        }));
      case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof d.ZP) return null;
        return (0, r.Rp)((0, c.hj)({
          application: t.application,
          username: (0, u.ZH)((0, a.e5)(t)).nick
        }));
      case h.uaV.AUTO_MODERATION_ACTION:
        if (null == (N = t.embeds) ? void 0 : N.some(t => {
            let {
              type: e
            } = t;
            return e === h.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let t = f.Z.getChannel(g);
          if (null == t) return null;
          let e = _.Z.getGuild(t.getGuildId());
          return null == e ? null : (0, r.Rp)(C.intl.formatToParts(C.t["a+lJKi"], {
            guildName: e.name
          }))
        }
        return t.content;
      case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var y = t.content;
        let S = f.Z.getChannel(g);
        if (null == S) return null;
        let G = _.Z.getGuild(S.getGuildId());
        return null == G ? null : (0, r.Rp)(C.intl.formatToParts(C.t.iOuWPj, {
          username: O,
          guildName: G.name,
          time: "" !== y ? new Date(y).toLocaleString(C.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let U = f.Z.getChannel(g);
        if (null == U) return null;
        let Z = _.Z.getGuild(U.getGuildId());
        return null == Z ? null : (0, r.Rp)(C.intl.formatToParts(C.t.axmbpq, {
          username: O,
          guildName: Z.name
        }));
      default:
        return t.content
    }
  },
  getSystemMessageUserJoin: function(t) {
    let e = T(),
      n = m.default.extractTimestamp(t) % e.length;
    return e[n]
  },
  getSystemMessageUserJoinMobile: A,
  getSystemMessageBotJoin: function(t) {
    return null == N[t] ? null : C.intl.format(C.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(N[t])
      }
    })
  }
}