/** Chunk was on 94357 **/
n.d(t, {
  Z: () => y
}), n(388685);
var r = n(25209),
  l = n(97797),
  i = n(35125),
  a = n(786761),
  u = n(739566),
  o = n(499401),
  s = n(693912),
  c = n(23750),
  d = n(314897),
  f = n(592125),
  m = n(430824),
  p = n(594174),
  E = n(5192),
  g = n(709054),
  h = n(981631),
  S = n(388032);
let O = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  v = () => [S.t["0cuj7u"], S.t["MuW+CA"], S.t.osqpHR, S.t["5ToSh4"], S.t.JEB8pq, S.t.pkOV5e, S.t.kRb1Jy, S.t.EmKLY2, S.t.rPtBnZ, S.t["5B/ekZ"], S.t.ESNC3d, S.t["Iw6d8/"], S.t.WecSZ2],
  b = () => [S.t.Jm6e09, S.t.MGRnRU, S.t.EXOEGh, S.t["5uCTFB"], S.t.rl45Qk, S.t.Bh9zpa, S.t.RdEy1N, S.t.qcdp09, S.t.F7w2Rk, S.t.gSyOgI, S.t.uYgqv7, S.t["b/1SBQ"], S.t.LhebZG];

function I(e) {
  let t = b(),
    n = g.default.extractTimestamp(e) % t.length;
  return t[n]
}

function _(e) {
  return (0, r.Rp)(S.intl.formatToParts(S.t["ihxM9/"], {
    username: e,
    usernameOnClick: h.dG4
  }))
}
let y = {
  stringify: function(e, t) {
    var n, g, O;
    let v = function(e) {
        var t, n, r;
        let [l] = null != (t = e.mentions) ? t : [];
        return null == l ? null : "object" == typeof l ? null != (n = p.default.getUser(l.id)) ? n : null : "string" == typeof l && null != (r = p.default.getUser(l)) ? r : null
      }(e),
      b = e.channel_id,
      y = E.ZP.getName(null, b, e.author);
    switch (e.type) {
      case h.uaV.RECIPIENT_ADD:
        if (null == v) return;
        return (0, r.Rp)(S.intl.formatToParts(S.t["7/Xl0d"], {
          username: y,
          usernameOnClick: h.dG4,
          otherUsername: E.ZP.getName(null, b, v),
          otherUsernameOnClick: h.dG4
        }));
      case h.uaV.RECIPIENT_REMOVE:
        if (null == v) return;
        let Z = e.author;
        if (null == Z || Z.id === v.id) return (0, r.Rp)(S.intl.formatToParts(S.t["Qn5+LS"], {
          username: y,
          usernameOnClick: h.dG4
        }));
        return (0, r.Rp)(S.intl.formatToParts(S.t.QtZ0RE, {
          username: y,
          usernameOnClick: h.dG4,
          otherUsername: E.ZP.getName(null, b, v),
          otherUsernameOnClick: h.dG4
        }));
      case h.uaV.CALL:
        let {
          call: A
        } = e;
        if (null != A && -1 === A.participants.indexOf(d.default.getId())) return (0, r.Rp)(S.intl.formatToParts(S.t.DbgSAw, {
          username: y,
          usernameOnClick: h.dG4
        }));
        return;
      case h.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(S.intl.formatToParts(t.isForumPost() ? S.t["qa0e/v"] : S.t.XCPMEB, {
          username: y,
          usernameOnClick: h.dG4,
          channelName: e.content
        }));
      case h.uaV.CHANNEL_ICON_CHANGE:
        return (0, r.Rp)(S.intl.formatToParts(S.t.wypJZ2, {
          username: y,
          usernameOnClick: h.dG4
        }));
      case h.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, r.Rp)(S.intl.formatToParts(S.t["/M60j4"], {
          username: y,
          usernameOnClick: h.dG4
        }));
      case h.uaV.USER_JOIN:
        return (0, r.Rp)(S.intl.formatToParts(I(e.id), {
          username: y,
          usernameOnClick: h.dG4
        }));
      case h.uaV.GUILD_BOOST:
        return _(y);
      case h.uaV.GUILD_BOOST_TIER_1:
      case h.uaV.GUILD_BOOST_TIER_2:
      case h.uaV.GUILD_BOOST_TIER_3:
        let N = f.Z.getChannel(b);
        return null == N || null == m.Z.getGuild(N.getGuildId()) ? _(y) : (0, r.Rp)(S.intl.formatToParts(S.t["ihxM9/"], {
          username: y,
          usernameOnClick: h.dG4
        }));
      case h.uaV.GUILD_INVITE_REMINDER:
        return S.intl.string(S.t.gxyKvr);
      case h.uaV.THREAD_STARTER_MESSAGE:
        return S.intl.formatToPlainString(S.t["B8H+Cg"], {
          username: y,
          threadName: t.name
        });
      case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof c.ZP) return null;
        return (0, r.Rp)((0, i.vp)({
          username: y,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case h.uaV.PURCHASE_NOTIFICATION:
        if (e instanceof c.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
        return (0, r.Rp)((0, l.i)({
          username: y,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof c.ZP) return null;
        let R = (0, u.ZH)((0, a.e5)(e));
        return (0, r.Rp)((0, o.Y)({
          application: e.application,
          username: R.nick
        }));
      case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof c.ZP) return null;
        return (0, r.Rp)((0, s.B2)({
          application: e.application,
          username: (0, u.ZH)((0, a.e5)(e)).nick
        }));
      case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof c.ZP) return null;
        return (0, r.Rp)((0, s.hj)({
          application: e.application,
          username: (0, u.ZH)((0, a.e5)(e)).nick
        }));
      case h.uaV.AUTO_MODERATION_ACTION:
        if (null == (O = e.embeds) ? void 0 : O.some(e => {
            let {
              type: t
            } = e;
            return t === h.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let e = f.Z.getChannel(b);
          if (null == e) return null;
          let t = m.Z.getGuild(e.getGuildId());
          return null == t ? null : (0, r.Rp)(S.intl.formatToParts(S.t["a+lJKi"], {
            guildName: t.name
          }))
        }
        return e.content;
      case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var P = e.content;
        let T = f.Z.getChannel(b);
        if (null == T) return null;
        let j = m.Z.getGuild(T.getGuildId());
        return null == j ? null : (0, r.Rp)(S.intl.formatToParts(S.t.iOuWPj, {
          username: y,
          guildName: j.name,
          time: "" !== P ? new Date(P).toLocaleString(S.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let C = f.Z.getChannel(b);
        if (null == C) return null;
        let w = m.Z.getGuild(C.getGuildId());
        return null == w ? null : (0, r.Rp)(S.intl.formatToParts(S.t.axmbpq, {
          username: y,
          guildName: w.name
        }));
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = v(),
      n = g.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: I,
  getSystemMessageBotJoin: function(e) {
    return null == O[e] ? null : S.intl.format(S.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(O[e])
      }
    })
  }
}