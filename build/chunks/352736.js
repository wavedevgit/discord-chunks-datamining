/** Chunk was on 16766 **/
/** chunk id: 352736, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk721355 = require("./721355.js"),
  Chunk320285 = require("./320285.js"),
  Chunk25209 = require("./25209.js"),
  Chunk97797 = require("./97797.js"),
  Chunk35125 = require("./35125.js"),
  Chunk786761 = require("./786761.js"),
  Chunk739566 = require("./739566.js"),
  Chunk499401 = require("./499401.js"),
  Chunk693912 = require("./693912.js"),
  Chunk23750 = require("./23750.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let A = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot"
};

function C(t) {
  let e = [p.t.Jm6e09, p.t.MGRnRU, p.t.EXOEGh, p.t["5uCTFB"], p.t.rl45Qk, p.t.Bh9zpa, p.t.RdEy1N, p.t.qcdp09, p.t.F7w2Rk, p.t.gSyOgI, p.t.uYgqv7, p.t["b/1SBQ"], p.t.LhebZG],
    n = E.default.extractTimestamp(t) % e.length;
  return e[n]
}

function O(t) {
  return (0, a.Rp)(p.intl.formatToParts(p.t["ihxM9/"], {
    username: t,
    usernameOnClick: R.dG4
  }))
}
let h = {
  stringify: function(t, e) {
    var n, E, A, h;
    let g = function(t) {
        var e, n, r;
        let [l] = null != (e = t.mentions) ? e : [];
        return null == l ? null : "object" == typeof l ? null != (n = I.default.getUser(l.id)) ? n : null : "string" == typeof l && null != (r = I.default.getUser(l)) ? r : null
      }(t),
      P = t.channel_id,
      L = f.ZP.getName(null, P, t.author);
    switch (t.type) {
      case R.uaV.RECIPIENT_ADD:
        if (null == g) return;
        return (0, a.Rp)(p.intl.formatToParts(p.t["7/Xl0d"], {
          username: L,
          usernameOnClick: R.dG4,
          otherUsername: f.ZP.getName(null, P, g),
          otherUsernameOnClick: R.dG4
        }));
      case R.uaV.RECIPIENT_REMOVE:
        if (null == g) return;
        let G = t.author;
        if (null == G || G.id === g.id) return (0, a.Rp)(p.intl.formatToParts(p.t["Qn5+LS"], {
          username: L,
          usernameOnClick: R.dG4
        }));
        return (0, a.Rp)(p.intl.formatToParts(p.t.QtZ0RE, {
          username: L,
          usernameOnClick: R.dG4,
          otherUsername: f.ZP.getName(null, P, g),
          otherUsernameOnClick: R.dG4
        }));
      case R.uaV.CALL:
        let {
          call: S
        } = t;
        if (null != S && false === S.participants.indexOf(N.default.getId())) return (0, a.Rp)(p.intl.formatToParts(p.t.DbgSAw, {
          username: L,
          usernameOnClick: R.dG4
        }));
        return;
      case R.uaV.CHANNEL_NAME_CHANGE:
        return (0, a.Rp)(p.intl.formatToParts(e.isForumPost() ? p.t["qa0e/v"] : p.t.XCPMEB, {
          username: L,
          usernameOnClick: R.dG4,
          channelName: t.content
        }));
      case R.uaV.CHANNEL_ICON_CHANGE:
        return (0, a.Rp)(p.intl.formatToParts(p.t.wypJZ2, {
          username: L,
          usernameOnClick: R.dG4
        }));
      case R.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, a.Rp)(p.intl.formatToParts(p.t["/M60j4"], {
          username: L,
          usernameOnClick: R.dG4
        }));
      case R.uaV.USER_JOIN:
        return (0, a.Rp)(p.intl.formatToParts(C(t.id), {
          username: L,
          usernameOnClick: R.dG4
        }));
      case R.uaV.GUILD_BOOST:
        return O(L);
      case R.uaV.GUILD_BOOST_TIER_1:
      case R.uaV.GUILD_BOOST_TIER_2:
      case R.uaV.GUILD_BOOST_TIER_3:
        let U = _.Z.getChannel(P);
        return null == U || null == T.Z.getGuild(U.getGuildId()) ? O(L) : (0, a.Rp)(p.intl.formatToParts(p.t["ihxM9/"], {
          username: L,
          usernameOnClick: R.dG4
        }));
      case R.uaV.GUILD_INVITE_REMINDER:
        return p.intl.string(p.t.gxyKvr);
      case R.uaV.THREAD_STARTER_MESSAGE:
        return p.intl.formatToPlainString(p.t["B8H+Cg"], {
          username: L,
          threadName: e.name
        });
      case R.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof d.ZP) return null;
        return (0, a.Rp)((0, u.vp)({
          username: L,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case R.uaV.PURCHASE_NOTIFICATION:
        if (t instanceof d.ZP || (null == (E = t.purchase_notification) || null == (n = E.guild_product_purchase) ? true : n.product_name) == null) return null;
        return (0, a.Rp)((0, i.i)({
          username: L,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof d.ZP) return null;
        let k = (0, s.ZH)((0, o.e5)(t));
        return (0, a.Rp)((0, c.Y)({
          application: t.application,
          username: k.nick
        }));
      case R.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof d.ZP) return null;
        return (0, a.Rp)((0, m.B2)({
          application: t.application,
          username: (0, s.ZH)((0, o.e5)(t)).nick
        }));
      case R.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof d.ZP) return null;
        return (0, a.Rp)((0, m.hj)({
          application: t.application,
          username: (0, s.ZH)((0, o.e5)(t)).nick
        }));
      case R.uaV.AUTO_MODERATION_ACTION:
        if (null == (A = t.embeds) ? true : A.some(t => {
            let {
              type: e
            } = t;
            return e === R.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let e = t.embeds.find(t => {
              let {
                type: e
              } = t;
              return e === R.hBH.AUTO_MODERATION_NOTIFICATION
            }),
            n = null == e || null == (h = e.fields) ? true : h.find(t => "name" in t && t.name === r.D.NOTIFICATION_TYPE),
            i = null != n && "value" in n ? n.value : true,
            u = _.Z.getChannel(P);
          if (null == u) return null;
          let o = T.Z.getGuild(u.getGuildId());
          if (null == o) return null;
          switch (i) {
            case l.p.ACTIVITY_ALERTS_ENABLED:
              return (0, a.Rp)(p.intl.formatToParts(p.t.wt3ZUF, {
                guildName: o.name
              }));
            case l.p.INTERACTION_BLOCKED:
              return (0, a.Rp)(p.intl.formatToParts(p.t.AkqI0t, {
                guildName: o.name
              }));
            default:
              return (0, a.Rp)(p.intl.formatToParts(p.t["a+lJKi"], {
                guildName: o.name
              }))
          }
        }
        return t.content;
      case R.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var D = t.content;
        let Z = _.Z.getChannel(P);
        if (null == Z) return null;
        let V = T.Z.getGuild(Z.getGuildId());
        return null == V ? null : (0, a.Rp)(p.intl.formatToParts(p.t.iOuWPj, {
          username: L,
          guildName: V.name,
          time: "" !== D ? new Date(D).toLocaleString(p.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case R.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let v = _.Z.getChannel(P);
        if (null == v) return null;
        let B = T.Z.getGuild(v.getGuildId());
        return null == B ? null : (0, a.Rp)(p.intl.formatToParts(p.t.axmbpq, {
          username: L,
          guildName: B.name
        }));
      default:
        return t.content
    }
  },
  getSystemMessageUserJoin: function(t) {
    let e = [p.t["0cuj7u"], p.t["MuW+CA"], p.t.osqpHR, p.t["5ToSh4"], p.t.JEB8pq, p.t.pkOV5e, p.t.kRb1Jy, p.t.EmKLY2, p.t.rPtBnZ, p.t["5B/ekZ"], p.t.ESNC3d, p.t["Iw6d8/"], p.t.WecSZ2],
      n = E.default.extractTimestamp(t) % e.length;
    return e[n]
  },
  getSystemMessageUserJoinMobile: C,
  getSystemMessageBotJoin: function(t) {
    return null == A[t] ? null : p.intl.format(p.t.xw1Ij4, {
      learnOnClick: {
        onClick: () => window.open(A[t])
      }
    })
  }
}