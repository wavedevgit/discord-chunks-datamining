/** Chunk was on 34795 **/
/** chunk id: 638075, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk385244 = require("./385244.js"),
  Chunk718564 = require("./718564.js"),
  Chunk436857 = require("./436857.js"),
  Chunk494576 = require("./494576.js"),
  Chunk942075 = require("./942075.js"),
  Chunk141468 = require("./141468.js"),
  Chunk763754 = require("./763754.js"),
  Chunk808829 = require("./808829.js"),
  Chunk552691 = require("./552691.js"),
  Chunk383233 = require("./383233.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let I = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot"
};

function p(t) {
  let e = [O.t.Jm6e0x, O.t.MGRnRT, O.t.EXOEGh, O.t["5uCTFN"], O.t.rl45Qo, O.t.Bh9zpQ, O.t.RdEy1J, O.t.qcdp00, O.t.F7w2Ru, O.t.gSyOgK, O.t.uYgqv7, O.t["b/1SBX"], O.t.LhebZF],
    n = g.default.extractTimestamp(t) % e.length;
  return e[n]
}

function C(t) {
  return (0, a.$)(O.intl.formatToParts(O.t.ihxM9x, {
    username: t,
    usernameOnClick: N.tEg
  }))
}
let P = {
  stringify: function(t, e) {
    let n = function(t) {
        var e, n, r;
        let [l] = null != (e = t.mentions) ? e : [];
        return null == l ? null : "object" == typeof l ? null != (n = _.default.getUser(l.id)) ? n : null : "string" == typeof l && null != (r = _.default.getUser(l)) ? r : null
      }(t),
      g = t.channel_id,
      I = T.Ay.getName(null, g, t.author);
    switch (t.type) {
      case N.lAJ.RECIPIENT_ADD:
        if (null == n) return;
        return (0, a.$)(O.intl.formatToParts(O.t["7/Xl0S"], {
          username: I,
          usernameOnClick: N.tEg,
          otherUsername: T.Ay.getName(null, g, n),
          otherUsernameOnClick: N.tEg
        }));
      case N.lAJ.RECIPIENT_REMOVE:
        if (null == n) return;
        let P = t.author;
        if (null == P || P.id === n.id) return (0, a.$)(O.intl.formatToParts(O.t["Qn5+Lf"], {
          username: I,
          usernameOnClick: N.tEg
        }));
        return (0, a.$)(O.intl.formatToParts(O.t.QtZ0RD, {
          username: I,
          usernameOnClick: N.tEg,
          otherUsername: T.Ay.getName(null, g, n),
          otherUsernameOnClick: N.tEg
        }));
      case N.lAJ.CALL:
        let {
          call: h
        } = t;
        if (null != h && false === h.participants.indexOf(d.default.getId())) return (0, a.$)(O.intl.formatToParts(O.t.DbgSA0, {
          username: I,
          usernameOnClick: N.tEg
        }));
        return;
      case N.lAJ.CHANNEL_NAME_CHANGE:
        return (0, a.$)(O.intl.formatToParts(e.isForumPost() ? O.t["qa0e/n"] : O.t.XCPMEG, {
          username: I,
          usernameOnClick: N.tEg,
          channelName: t.content
        }));
      case N.lAJ.CHANNEL_ICON_CHANGE:
        return (0, a.$)(O.intl.formatToParts(O.t.wypJZ0, {
          username: I,
          usernameOnClick: N.tEg
        }));
      case N.lAJ.CHANNEL_PINNED_MESSAGE:
        return (0, a.$)(O.intl.formatToParts(O.t["/M60j0"], {
          username: I,
          usernameOnClick: N.tEg
        }));
      case N.lAJ.USER_JOIN:
        return (0, a.$)(O.intl.formatToParts(p(t.id), {
          username: I,
          usernameOnClick: N.tEg
        }));
      case N.lAJ.EMOJI_ADDED:
        let R, b;
        return b = null == (R = f.A.getChannel(t.channel_id)) ? null : E.A.getGuild(R.getGuildId()), (0, a.$)(O.intl.formatToParts(O.t.PJsjbP, {
          emoji: t.content,
          guildName: null != (U = null == b ? true : b.name) ? U : O.intl.string(O.t.dtwqPR)
        }));
      case N.lAJ.GUILD_BOOST:
        return C(I);
      case N.lAJ.GUILD_BOOST_TIER_1:
      case N.lAJ.GUILD_BOOST_TIER_2:
      case N.lAJ.GUILD_BOOST_TIER_3:
        let y;
        return null == (y = f.A.getChannel(g)) || null == E.A.getGuild(y.getGuildId()) ? C(I) : (0, a.$)(O.intl.formatToParts(O.t.ihxM9x, {
          username: I,
          usernameOnClick: N.tEg
        }));
      case N.lAJ.GUILD_INVITE_REMINDER:
        return O.intl.string(O.t.gxyKvr);
      case N.lAJ.THREAD_STARTER_MESSAGE:
        return O.intl.formatToPlainString(O.t["B8H+Cl"], {
          username: I,
          threadName: e.name
        });
      case N.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
        if (t instanceof A.Ay) return null;
        return (0, a.$)((0, u.eb)({
          username: I,
          guildId: e.guild_id,
          roleSubscriptionData: t.role_subscription_data
        }));
      case N.lAJ.PURCHASE_NOTIFICATION:
        if (t instanceof A.Ay || (null == (S = t.purchase_notification) || null == (L = S.guild_product_purchase) ? true : L.product_name) == null) return null;
        return (0, a.$)((0, i.z)({
          username: I,
          productName: t.purchase_notification.guild_product_purchase.product_name
        }));
      case N.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (t instanceof A.Ay) return null;
        let k = (0, s.p_)((0, o.rh)(t));
        return (0, a.$)((0, c.P)({
          application: t.application,
          username: k.nick
        }));
      case N.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (t instanceof A.Ay) return null;
        return (0, a.$)((0, m.g6)({
          application: t.application,
          username: (0, s.p_)((0, o.rh)(t)).nick
        }));
      case N.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (t instanceof A.Ay) return null;
        return (0, a.$)((0, m.uk)({
          application: t.application,
          username: (0, s.p_)((0, o.rh)(t)).nick
        }));
      case N.lAJ.AUTO_MODERATION_ACTION:
        if (null == (D = t.embeds) ? true : D.some(t => {
            let {
              type: e
            } = t;
            return e === N.Auw.AUTO_MODERATION_NOTIFICATION
          })) {
          var L, S, D, v, U;
          let e = t.embeds.find(t => {
              let {
                type: e
              } = t;
              return e === N.Auw.AUTO_MODERATION_NOTIFICATION
            }),
            n = null == e || null == (v = e.fields) ? true : v.find(t => "name" in t && t.name === r.E.NOTIFICATION_TYPE),
            i = null != n && "value" in n ? n.value : true,
            u = f.A.getChannel(g);
          if (null == u) return null;
          let o = E.A.getGuild(u.getGuildId());
          if (null == o) return null;
          switch (i) {
            case l.W.ACTIVITY_ALERTS_ENABLED:
              return (0, a.$)(O.intl.formatToParts(O.t.wt3ZUM, {
                guildName: o.name
              }));
            case l.W.INTERACTION_BLOCKED:
              return (0, a.$)(O.intl.formatToParts(O.t.AkqI0g, {
                guildName: o.name
              }));
            default:
              return (0, a.$)(O.intl.formatToParts(O.t["a+lJKl"], {
                guildName: o.name
              }))
          }
        }
        return t.content;
      case N.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        var w = t.content;
        let G = f.A.getChannel(g);
        if (null == G) return null;
        let M = E.A.getGuild(G.getGuildId());
        return null == M ? null : (0, a.$)(O.intl.formatToParts(O.t.iOuWPk, {
          username: I,
          guildName: M.name,
          time: "" !== w ? new Date(w).toLocaleString(O.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit"
          }) : ""
        }));
      case N.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        let J = f.A.getChannel(g);
        if (null == J) return null;
        let j = E.A.getGuild(J.getGuildId());
        return null == j ? null : (0, a.$)(O.intl.formatToParts(O.t.axmbpm, {
          username: I,
          guildName: j.name
        }));
      default:
        return t.content
    }
  },
  getSystemMessageUserJoin: function(t) {
    let e = [O.t["0cuj7l"], O.t["MuW+CN"], O.t.osqpHX, O.t["5ToSh2"], O.t.JEB8ps, O.t.pkOV5T, O.t["kRb1J+"], O.t["EmKLY+"], O.t.rPtBnb, O.t["5B/ekS"], O.t.ESNC3Y, O.t.Iw6d8w, O.t["WecSZ/"]],
      n = g.default.extractTimestamp(t) % e.length;
    return e[n]
  },
  getSystemMessageUserJoinMobile: p,
  getSystemMessageBotJoin: function(t) {
    return null == I[t] ? null : O.intl.format(O.t.xw1Ij0, {
      learnOnClick: {
        onClick: () => window.open(I[t])
      }
    })
  }
}