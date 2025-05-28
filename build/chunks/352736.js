/** Chunk was on 77897 **/
n.d(t, {
  Z: () => O
}), n(388685);
var r = n(25209),
  i = n(97797),
  a = n(35125),
  l = n(786761),
  o = n(739566),
  u = n(499401),
  c = n(693912),
  s = n(23750),
  d = n(314897),
  f = n(592125),
  _ = n(430824),
  E = n(594174),
  p = n(5192),
  m = n(709054),
  N = n(981631),
  T = n(388032);
let A = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  h = () => [T.t["0cuj7u"], T.t["MuW+CA"], T.t.osqpHR, T.t["5ToSh4"], T.t.JEB8pq, T.t.pkOV5e, T.t.kRb1Jy, T.t.EmKLY2, T.t.rPtBnZ, T.t["5B/ekZ"], T.t.ESNC3d, T.t["Iw6d8/"], T.t.WecSZ2],
  C = () => [T.t.Jm6e09, T.t.MGRnRU, T.t.EXOEGh, T.t["5uCTFB"], T.t.rl45Qk, T.t.Bh9zpa, T.t.RdEy1N, T.t.qcdp09, T.t.F7w2Rk, T.t.gSyOgI, T.t.uYgqv7, T.t["b/1SBQ"], T.t.LhebZG];

function g(e) {
  let t = C(),
    n = m.default.extractTimestamp(e) % t.length;
  return t[n]
}

function I(e) {
  return (0, r.Rp)(T.intl.formatToParts(T.t["ihxM9/"], {
    username: e,
    usernameOnClick: N.dG4
  }))
}
let O = {
  stringify: function(e, t) {
    var n, m, A;
    let h = function(e) {
        var t, n, r;
        let [i] = null != (t = e.mentions) ? t : [];
        return null == i ? null : "object" == typeof i ? null != (n = E.default.getUser(i.id)) ? n : null : "string" == typeof i && null != (r = E.default.getUser(i)) ? r : null
      }(e),
      C = e.channel_id,
      O = p.ZP.getName(null, C, e.author);
    switch (e.type) {
      case N.uaV.RECIPIENT_ADD:
        if (null == h) return;
        return (0, r.Rp)(T.intl.formatToParts(T.t["7/Xl0d"], {
          username: O,
          usernameOnClick: N.dG4,
          otherUsername: p.ZP.getName(null, C, h),
          otherUsernameOnClick: N.dG4
        }));
      case N.uaV.RECIPIENT_REMOVE:
        if (null == h) return;
        let b = e.author;
        if (null == b || b.id === h.id) return (0, r.Rp)(T.intl.formatToParts(T.t["Qn5+LS"], {
          username: O,
          usernameOnClick: N.dG4
        }));
        return (0, r.Rp)(T.intl.formatToParts(T.t.QtZ0RE, {
          username: O,
          usernameOnClick: N.dG4,
          otherUsername: p.ZP.getName(null, C, h),
          otherUsernameOnClick: N.dG4
        }));
      case N.uaV.CALL:
        let {
          call: v
        } = e;
        if (null != v && -1 === v.participants.indexOf(d.default.getId())) return (0, r.Rp)(T.intl.formatToParts(T.t.DbgSAw, {
          username: O,
          usernameOnClick: N.dG4
        }));
        return;
      case N.uaV.CHANNEL_NAME_CHANGE:
        return (0, r.Rp)(T.intl.formatToParts(t.isForumPost() ? T.t["qa0e/v"] : T.t.XCPMEB, {
          username: O,
          usernameOnClick: N.dG4,
          channelName: e.content
        }));
      case N.uaV.CHANNEL_ICON_CHANGE:
        return (0, r.Rp)(T.intl.formatToParts(T.t.wypJZ2, {
          username: O,
          usernameOnClick: N.dG4
        }));
      case N.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, r.Rp)(T.intl.formatToParts(T.t["/M60j4"], {
          username: O,
          usernameOnClick: N.dG4
        }));
      case N.uaV.USER_JOIN:
        return (0, r.Rp)(T.intl.formatToParts(g(e.id), {
          username: O,
          usernameOnClick: N.dG4
        }));
      case N.uaV.GUILD_BOOST:
        return I(O);
      case N.uaV.GUILD_BOOST_TIER_1:
      case N.uaV.GUILD_BOOST_TIER_2:
      case N.uaV.GUILD_BOOST_TIER_3:
        let R = f.Z.getChannel(C);
        return null == R || null == _.Z.getGuild(R.getGuildId()) ? I(O) : (0, r.Rp)(T.intl.formatToParts(T.t["ihxM9/"], {
          username: O,
          usernameOnClick: N.dG4
        }));
      case N.uaV.GUILD_INVITE_REMINDER:
        return T.intl.string(T.t.gxyKvr);
      case N.uaV.THREAD_STARTER_MESSAGE:
        return T.intl.formatToPlainString(T.t["B8H+Cg"], {
          username: O,
          threadName: t.name
        });
      case N.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof s.ZP) return null;
        return (0, r.Rp)((0, a.vp)({
          username: O,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case N.uaV.PURCHASE_NOTIFICATION:
        if (e instanceof s.ZP || (null == (m = e.purchase_notification) || null == (n = m.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
        return (0, r.Rp)((0, i.i)({
          username: O,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case N.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof s.ZP) return null;
        let P = (0, o.ZH)((0, l.e5)(e));
        return (0, r.Rp)((0, u.Y)({
          application: e.application,
          username: P.nick
        }));
      case N.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof s.ZP) return null;
        return (0, r.Rp)((0, c.B2)({
          application: e.application,
          username: (0, o.ZH)((0, l.e5)(e)).nick
        }));
      case N.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof s.ZP) return null;
        return (0, r.Rp)((0, c.hj)({
          application: e.application,
          username: (0, o.ZH)((0, l.e5)(e)).nick
        }));
      case N.uaV.AUTO_MODERATION_ACTION:
        if (null == (A = e.embeds) ? void 0 : A.some(e => {
            let {
              type: t
            } = e;
            return t === N.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let e = f.Z.getChannel(C);
          if (null == e) return null;
          let t = _.Z.getGuild(e.getGuildId());
          return null == t ? null : (0, r.Rp)(T.intl.formatToParts(T.t["a+lJKi"], {
            guildName: t.name
          }))
        }
        return e.content;
      case N.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var y = e.content;
        let S = f.Z.getChannel(C);
        if (null == S) return null;
        let U = _.Z.getGuild(S.getGuildId());
        return null == U ? null : (0, r.Rp)(T.intl.formatToParts(T.t.iOuWPj, {
          username: O,
          guildName: U.name,
          time: "" !== y ? new Date(y).toLocaleString(T.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case N.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let Z = f.Z.getChannel(C);
        if (null == Z) return null;
        let G = _.Z.getGuild(Z.getGuildId());
        return null == G ? null : (0, r.Rp)(T.intl.formatToParts(T.t.axmbpq, {
          username: O,
          guildName: G.name
        }));
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = h(),
      n = m.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: g,
  getSystemMessageBotJoin: function(e) {
    return null == A[e] ? null : T.intl.format(T.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(A[e])
      }
    })
  }
}