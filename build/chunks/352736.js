/** Chunk was on 97870 **/
n.d(t, {
  Z: () => E
}), n(388685);
var a = n(25209),
  r = n(97797),
  i = n(35125),
  o = n(786761),
  c = n(739566),
  l = n(499401),
  s = n(693912),
  u = n(23750),
  d = n(314897),
  _ = n(592125),
  p = n(430824),
  m = n(594174),
  f = n(5192),
  g = n(709054),
  b = n(981631),
  I = n(388032);
let T = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  C = () => [I.t["0cuj7u"], I.t["MuW+CA"], I.t.osqpHR, I.t["5ToSh4"], I.t.JEB8pq, I.t.pkOV5e, I.t.kRb1Jy, I.t.EmKLY2, I.t.rPtBnZ, I.t["5B/ekZ"], I.t.ESNC3d, I.t["Iw6d8/"], I.t.WecSZ2],
  h = () => [I.t.Jm6e09, I.t.MGRnRU, I.t.EXOEGh, I.t["5uCTFB"], I.t.rl45Qk, I.t.Bh9zpa, I.t.RdEy1N, I.t.qcdp09, I.t.F7w2Rk, I.t.gSyOgI, I.t.uYgqv7, I.t["b/1SBQ"], I.t.LhebZG];

function O(e) {
  let t = h(),
    n = g.default.extractTimestamp(e) % t.length;
  return t[n]
}

function A(e) {
  return (0, a.Rp)(I.intl.formatToParts(I.t["ihxM9/"], {
    username: e,
    usernameOnClick: b.dG4
  }))
}
let E = {
  stringify: function(e, t) {
    var n, g, T;
    let C = function(e) {
        var t, n, a;
        let [r] = null != (t = e.mentions) ? t : [];
        return null == r ? null : "object" == typeof r ? null != (n = m.default.getUser(r.id)) ? n : null : "string" == typeof r && null != (a = m.default.getUser(r)) ? a : null
      }(e),
      h = e.channel_id,
      E = f.ZP.getName(null, h, e.author);
    switch (e.type) {
      case b.uaV.RECIPIENT_ADD:
        if (null == C) return;
        return (0, a.Rp)(I.intl.formatToParts(I.t["7/Xl0d"], {
          username: E,
          usernameOnClick: b.dG4,
          otherUsername: f.ZP.getName(null, h, C),
          otherUsernameOnClick: b.dG4
        }));
      case b.uaV.RECIPIENT_REMOVE:
        if (null == C) return;
        let y = e.author;
        if (null == y || y.id === C.id) return (0, a.Rp)(I.intl.formatToParts(I.t["Qn5+LS"], {
          username: E,
          usernameOnClick: b.dG4
        }));
        return (0, a.Rp)(I.intl.formatToParts(I.t.QtZ0RE, {
          username: E,
          usernameOnClick: b.dG4,
          otherUsername: f.ZP.getName(null, h, C),
          otherUsernameOnClick: b.dG4
        }));
      case b.uaV.CALL:
        let {
          call: N
        } = e;
        if (null != N && -1 === N.participants.indexOf(d.default.getId())) return (0, a.Rp)(I.intl.formatToParts(I.t.DbgSAw, {
          username: E,
          usernameOnClick: b.dG4
        }));
        return;
      case b.uaV.CHANNEL_NAME_CHANGE:
        return (0, a.Rp)(I.intl.formatToParts(t.isForumPost() ? I.t["qa0e/v"] : I.t.XCPMEB, {
          username: E,
          usernameOnClick: b.dG4,
          channelName: e.content
        }));
      case b.uaV.CHANNEL_ICON_CHANGE:
        return (0, a.Rp)(I.intl.formatToParts(I.t.wypJZ2, {
          username: E,
          usernameOnClick: b.dG4
        }));
      case b.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, a.Rp)(I.intl.formatToParts(I.t["/M60j4"], {
          username: E,
          usernameOnClick: b.dG4
        }));
      case b.uaV.USER_JOIN:
        return (0, a.Rp)(I.intl.formatToParts(O(e.id), {
          username: E,
          usernameOnClick: b.dG4
        }));
      case b.uaV.GUILD_BOOST:
        return A(E);
      case b.uaV.GUILD_BOOST_TIER_1:
      case b.uaV.GUILD_BOOST_TIER_2:
      case b.uaV.GUILD_BOOST_TIER_3:
        let S = _.Z.getChannel(h);
        return null == S || null == p.Z.getGuild(S.getGuildId()) ? A(E) : (0, a.Rp)(I.intl.formatToParts(I.t["ihxM9/"], {
          username: E,
          usernameOnClick: b.dG4
        }));
      case b.uaV.GUILD_INVITE_REMINDER:
        return I.intl.string(I.t.gxyKvr);
      case b.uaV.THREAD_STARTER_MESSAGE:
        return I.intl.formatToPlainString(I.t["B8H+Cg"], {
          username: E,
          threadName: t.name
        });
      case b.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof u.ZP) return null;
        return (0, a.Rp)((0, i.vp)({
          username: E,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case b.uaV.PURCHASE_NOTIFICATION:
        if (e instanceof u.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
        return (0, a.Rp)((0, r.i)({
          username: E,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case b.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof u.ZP) return null;
        let P = (0, c.ZH)((0, o.e5)(e));
        return (0, a.Rp)((0, l.Y)({
          application: e.application,
          username: P.nick
        }));
      case b.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof u.ZP) return null;
        return (0, a.Rp)((0, s.B2)({
          application: e.application,
          username: (0, c.ZH)((0, o.e5)(e)).nick
        }));
      case b.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof u.ZP) return null;
        return (0, a.Rp)((0, s.hj)({
          application: e.application,
          username: (0, c.ZH)((0, o.e5)(e)).nick
        }));
      case b.uaV.AUTO_MODERATION_ACTION:
        if (null == (T = e.embeds) ? void 0 : T.some(e => {
            let {
              type: t
            } = e;
            return t === b.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let e = _.Z.getChannel(h);
          if (null == e) return null;
          let t = p.Z.getGuild(e.getGuildId());
          return null == t ? null : (0, a.Rp)(I.intl.formatToParts(I.t["a+lJKi"], {
            guildName: t.name
          }))
        }
        return e.content;
      case b.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var R = e.content;
        let L = _.Z.getChannel(h);
        if (null == L) return null;
        let v = p.Z.getGuild(L.getGuildId());
        return null == v ? null : (0, a.Rp)(I.intl.formatToParts(I.t.iOuWPj, {
          username: E,
          guildName: v.name,
          time: "" !== R ? new Date(R).toLocaleString(I.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case b.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let x = _.Z.getChannel(h);
        if (null == x) return null;
        let k = p.Z.getGuild(x.getGuildId());
        return null == k ? null : (0, a.Rp)(I.intl.formatToParts(I.t.axmbpq, {
          username: E,
          guildName: k.name
        }));
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = C(),
      n = g.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: O,
  getSystemMessageBotJoin: function(e) {
    return null == T[e] ? null : I.intl.format(I.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(T[e])
      }
    })
  }
}