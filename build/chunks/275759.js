/** Chunk was on web.js **/
/** chunk id: 275759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FI: () => y,
  O1: () => h,
  SJ: () => p,
  Ur: () => b,
  kQ: () => E,
  n_: () => g,
  xp: () => m
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./467055.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711);
require("./442837.js"), require("./704215.js");
var Chunk277800 = require("./277800.js");
require("./266454.js");
var Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js");
require("./496675.js");
var Chunk591759 = require("./591759.js"),
  Chunk856651 = require("./856651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
let p = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
var h = function(e) {
  return e[e.AND = 0] = "AND", e[e.OR = 1] = "OR", e
}({});

function m(e) {
  var t;
  let {
    searchParams: n
  } = null != (t = u.Z.toURLSafe(e)) ? t : {
    searchParams: new URLSearchParams
  }, {
    code: r,
    state: o,
    error: a,
    error_description: s
  } = Object.fromEntries(n);
  return i()(!Array.isArray(r), "Received multiple query param values for code"), i()(!Array.isArray(o), "Received multiple query param values for state"), i()(!Array.isArray(a), "Received multiple query param values for error"), i()(!Array.isArray(s), "Received multiple query param values for error_description"), {
    code: r,
    state: o,
    error: a,
    errorDescription: s
  }
}

function g(e) {
  let {
    connectionType: t,
    connectionMetadataField: n,
    operator: r,
    operatorText: i,
    value: o
  } = e, a = null, s = Math.round(Number(o));
  switch (r) {
    case d.iO.EQUAL:
      a = _.t.H97H4e, t === f.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (a = _.t["N95b+f"]);
      break;
    case d.iO.NOT_EQUAL:
      a = _.t["D9B/q6"];
      break;
    case d.iO.LESS_THAN:
      a = _.t["3ru8/P"], s = Math.max(0, s - 1);
      break;
    case d.iO.GREATER_THAN:
      a = _.t.wCVDHh, s = Math.max(0, s + 1);
      break;
    case true:
    case null:
      return null
  }
  if (null != i && (a = i), null != a && null != r) switch (t) {
    case f.ABu.REDDIT:
      switch (n) {
        case d.PC.CREATED_AT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, {
              days: s
            })
          });
          break;
        case d.PC.REDDIT_TOTAL_KARMA:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.P2JAER, {
              karma: s
            })
          });
          break;
        case d.PC.REDDIT_GOLD:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.string(_.t["+/5TCw"])
          });
          break;
        case d.PC.REDDIT_MOD:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.string(_.t["9rPbEh"])
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.STEAM:
      switch (n) {
        case d.PC.CREATED_AT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, {
              days: s
            })
          });
          break;
        case d.PC.STEAM_GAME_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.H9eLoa, {
              count: s
            })
          });
          break;
        case d.PC.STEAM_ITEM_COUNT_TF2:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.MceZJy, {
              count: s
            })
          });
          break;
        case d.PC.STEAM_ITEM_COUNT_DOTA2:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.dMnRam, {
              count: s
            })
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.TWITTER:
      switch (n) {
        case d.PC.CREATED_AT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, {
              days: s
            })
          });
          break;
        case d.PC.TWITTER_VERIFIED:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.string(_.t.xRygZG)
          });
          break;
        case d.PC.TWITTER_FOLLOWERS_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.bkajam, {
              count: s
            })
          });
          break;
        case d.PC.TWITTER_STATUSES_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.MI7NKi, {
              count: s
            })
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.PAYPAL:
      switch (n) {
        case d.PC.CREATED_AT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, {
              days: s
            })
          });
          break;
        case d.PC.PAYPAL_VERIFIED:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.string(_.t.slSQuL)
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.EBAY:
      switch (n) {
        case d.PC.CREATED_AT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, {
              days: s
            })
          });
          break;
        case d.PC.EBAY_TOP_RATED_SELLER:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.string(_.t.TEEYwc)
          });
          break;
        case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.rl9Vg4, {
              value: s
            })
          });
          break;
        case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.QP5W1d, {
              count: s
            })
          });
          break;
        case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t["6ZFYdH"], {
              count: s
            })
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.TIKTOK:
      switch (n) {
        case d.PC.TIKTOK_VERIFIED:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.string(_.t.uv7et7)
          });
          break;
        case d.PC.TIKTOK_FOLLOWER_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.qIPDR0, {
              count: s
            })
          });
          break;
        case d.PC.TIKTOK_FOLLOWING_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.zRta4e, {
              count: s
            })
          });
          break;
        case d.PC.TIKTOK_LIKES_COUNT:
          a = _.intl.format(a, {
            platformQuantityHook: () => _.intl.formatToPlainString(_.t.ar0WW1, {
              count: s
            })
          });
          break;
        default:
          return null
      }
      break;
    default:
      return null
  }
  return a
}

function E(e) {
  return e.some(e => null === e.tags.guild_connections)
}

function b(e) {
  var t, n;
  let {
    guildMember: r,
    guild: i,
    sortedGuildRoles: o,
    channel: u,
    onlyChannelConnectionRoles: d = false
  } = e;
  if (null == r || (null == i && null != u && (i = c.Z.getGuild(u.getGuildId())), null == i)) return null;
  let {
    id: f
  } = i;
  null == o && (o = l.Z.getSortedRoles(f));
  let _ = o.filter(e => null === e.tags.guild_connections && r.roles.includes(e.id)),
    p = a().intersection(_, (0, s.Z)(u));
  return p.length > 0 ? null != (t = p[0]) ? t : null : d ? null : null != (n = _[0]) ? n : null
}

function y(e, t) {
  if (null == e || "" === e) return null;
  let n = new Date(e);
  return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}