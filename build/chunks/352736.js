/** Chunk was on web.js **/
/** chunk id: 352736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
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
let O = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  v = () => [Chunk388032.t["0cuj7l"], Chunk388032.t["MuW+CN"], Chunk388032.t.osqpHX, Chunk388032.t["5ToSh2"], Chunk388032.t.JEB8ps, Chunk388032.t.pkOV5T, Chunk388032.t["kRb1J+"], Chunk388032.t["EmKLY+"], Chunk388032.t.rPtBnb, Chunk388032.t["5B/ekS"], Chunk388032.t.ESNC3Y, Chunk388032.t.Iw6d8w, Chunk388032.t["WecSZ/"]],
  S = () => [Chunk388032.t.Jm6e0x, Chunk388032.t.MGRnRT, Chunk388032.t.EXOEGh, Chunk388032.t["5uCTFN"], Chunk388032.t.rl45Qo, Chunk388032.t.Bh9zpQ, Chunk388032.t.RdEy1J, Chunk388032.t.qcdp00, Chunk388032.t.F7w2Ru, Chunk388032.t.gSyOgK, Chunk388032.t.uYgqv7, Chunk388032.t["b/1SBX"], Chunk388032.t.LhebZF];

function I(e) {
  let t = S(),
    n = E.default.extractTimestamp(e) % t.length;
  return t[n]
}

function T(e) {
  var t;
  let n = _.Z.getChannel(e.channel_id),
    r = null == n ? null : m.Z.getGuild(n.getGuildId());
  return (0, a.Rp)(y.intl.formatToParts(y.t.PJsjbP, {
    emoji: e.content,
    guildName: null != (t = null == r ? true : r.name) ? t : y.intl.string(y.t.dtwqPR)
  }))
}

function A(e) {
  return (0, a.Rp)(y.intl.formatToParts(y.t.ihxM9x, {
    username: e,
    usernameOnClick: b.dG4
  }))
}

function C(e, t) {
  let n = _.Z.getChannel(t);
  return null == n || null == m.Z.getGuild(n.getGuildId()) ? A(e) : (0, a.Rp)(y.intl.formatToParts(y.t.ihxM9x, {
    username: e,
    usernameOnClick: b.dG4
  }))
}

function N(e, t, n) {
  let r = _.Z.getChannel(t);
  if (null == r) return null;
  let i = m.Z.getGuild(r.getGuildId());
  return null == i ? null : (0, a.Rp)(y.intl.formatToParts(y.t.iOuWPk, {
    username: e,
    guildName: i.name,
    time: "" !== n ? new Date(n).toLocaleString(y.intl.currentLocale, {
      hour: "numeric",
      minute: "2-digit"
    }) : ""
  }))
}

function P(e, t) {
  let n = _.Z.getChannel(t);
  if (null == n) return null;
  let r = m.Z.getGuild(n.getGuildId());
  return null == r ? null : (0, a.Rp)(y.intl.formatToParts(y.t.axmbpm, {
    username: e,
    guildName: r.name
  }))
}

function R(e, t) {
  let n = _.Z.getChannel(e);
  if (null == n) return null;
  let r = m.Z.getGuild(n.getGuildId());
  if (null == r) return null;
  switch (t) {
    case i.p.ACTIVITY_ALERTS_ENABLED:
      return (0, a.Rp)(y.intl.formatToParts(y.t.wt3ZUM, {
        guildName: r.name
      }));
    case i.p.INTERACTION_BLOCKED:
      return (0, a.Rp)(y.intl.formatToParts(y.t.AkqI0g, {
        guildName: r.name
      }));
    default:
      return (0, a.Rp)(y.intl.formatToParts(y.t["a+lJKl"], {
        guildName: r.name
      }))
  }
}

function w(e) {
  var t, n, r;
  let [i] = null != (t = e.mentions) ? t : [];
  return null == i ? null : "object" == typeof i ? null != (n = h.default.getUser(i.id)) ? n : null : "string" == typeof i && null != (r = h.default.getUser(i)) ? r : null
}
let D = {
  stringify: function(e, t) {
    var n, i, _, m;
    let h = w(e),
      E = e.channel_id,
      O = g.ZP.getName(null, E, e.author);
    switch (e.type) {
      case b.uaV.RECIPIENT_ADD:
        if (null == h) return;
        return (0, a.Rp)(y.intl.formatToParts(y.t["7/Xl0S"], {
          username: O,
          usernameOnClick: b.dG4,
          otherUsername: g.ZP.getName(null, E, h),
          otherUsernameOnClick: b.dG4
        }));
      case b.uaV.RECIPIENT_REMOVE:
        if (null == h) return;
        let v = e.author;
        if (null == v || v.id === h.id) return (0, a.Rp)(y.intl.formatToParts(y.t["Qn5+Lf"], {
          username: O,
          usernameOnClick: b.dG4
        }));
        return (0, a.Rp)(y.intl.formatToParts(y.t.QtZ0RD, {
          username: O,
          usernameOnClick: b.dG4,
          otherUsername: g.ZP.getName(null, E, h),
          otherUsernameOnClick: b.dG4
        }));
      case b.uaV.CALL:
        let {
          call: S
        } = e;
        if (null != S && false === S.participants.indexOf(p.default.getId())) return (0, a.Rp)(y.intl.formatToParts(y.t.DbgSA0, {
          username: O,
          usernameOnClick: b.dG4
        }));
        return;
      case b.uaV.CHANNEL_NAME_CHANGE:
        return (0, a.Rp)(y.intl.formatToParts(t.isForumPost() ? y.t["qa0e/n"] : y.t.XCPMEG, {
          username: O,
          usernameOnClick: b.dG4,
          channelName: e.content
        }));
      case b.uaV.CHANNEL_ICON_CHANGE:
        return (0, a.Rp)(y.intl.formatToParts(y.t.wypJZ0, {
          username: O,
          usernameOnClick: b.dG4
        }));
      case b.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, a.Rp)(y.intl.formatToParts(y.t["/M60j0"], {
          username: O,
          usernameOnClick: b.dG4
        }));
      case b.uaV.USER_JOIN:
        return (0, a.Rp)(y.intl.formatToParts(I(e.id), {
          username: O,
          usernameOnClick: b.dG4
        }));
      case b.uaV.EMOJI_ADDED:
        return T(e);
      case b.uaV.GUILD_BOOST:
        return A(O);
      case b.uaV.GUILD_BOOST_TIER_1:
      case b.uaV.GUILD_BOOST_TIER_2:
      case b.uaV.GUILD_BOOST_TIER_3:
        return C(O, E);
      case b.uaV.GUILD_INVITE_REMINDER:
        return y.intl.string(y.t.gxyKvr);
      case b.uaV.THREAD_STARTER_MESSAGE:
        return y.intl.formatToPlainString(y.t["B8H+Cl"], {
          username: O,
          threadName: t.name
        });
      case b.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof f.ZP) return null;
        return (0, a.Rp)((0, s.vp)({
          username: O,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case b.uaV.PURCHASE_NOTIFICATION:
        if (e instanceof f.ZP || (null == (i = e.purchase_notification) || null == (n = i.guild_product_purchase) ? true : n.product_name) == null) return null;
        return (0, a.Rp)((0, o.i)({
          username: O,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case b.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof f.ZP) return null;
        let D = (0, c.ZH)((0, l.e5)(e));
        return (0, a.Rp)((0, u.Y)({
          application: e.application,
          username: D.nick
        }));
      case b.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof f.ZP) return null;
        return (0, a.Rp)((0, d.B2)({
          application: e.application,
          username: (0, c.ZH)((0, l.e5)(e)).nick
        }));
      case b.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof f.ZP) return null;
        return (0, a.Rp)((0, d.hj)({
          application: e.application,
          username: (0, c.ZH)((0, l.e5)(e)).nick
        }));
      case b.uaV.AUTO_MODERATION_ACTION:
        if (null == (_ = e.embeds) ? true : _.some(e => {
            let {
              type: t
            } = e;
            return t === b.hBH.AUTO_MODERATION_NOTIFICATION
          })) {
          let t = e.embeds.find(e => {
              let {
                type: t
              } = e;
              return t === b.hBH.AUTO_MODERATION_NOTIFICATION
            }),
            n = null == t || null == (m = t.fields) ? true : m.find(e => "name" in e && e.name === r.D.NOTIFICATION_TYPE);
          return R(E, null != n && "value" in n ? n.value : true)
        }
        return e.content;
      case b.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return N(O, E, e.content);
      case b.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return P(O, E);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = v(),
      n = E.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: I,
  getSystemMessageBotJoin: function(e) {
    return null == O[e] ? null : y.intl.format(y.t.xw1Ij0, {
      learnOnClick: {
        onClick: () => window.open(O[e])
      }
    })
  }
}