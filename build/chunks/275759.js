/** Chunk was on web.js **/
/** chunk id: 275759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FI: () => y,
  O1: () => m,
  SJ: () => _,
  Ur: () => b,
  kQ: () => E,
  n_: () => g,
  xp: () => h
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./467055.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711);
require("./442837.js"), require("./704215.js");
var Chunk277800 = require("./277800.js");
require("./266454.js");
var Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js");
require("./496675.js");
var Chunk591759 = require("./591759.js"),
  Chunk856651 = require("./856651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
var m = function(e) {
  return e[e.AND = 0] = "AND", e[e.OR = 1] = "OR", e
}({});

function h(e) {
  var t;
  let {
    searchParams: n
  } = null != (t = u.Z.toURLSafe(e)) ? t : {
    searchParams: new URLSearchParams
  }, {
    code: r,
    state: a,
    error: o,
    error_description: s
  } = Object.fromEntries(n);
  return i()(!Array.isArray(r), "Received multiple query param values for code"), i()(!Array.isArray(a), "Received multiple query param values for state"), i()(!Array.isArray(o), "Received multiple query param values for error"), i()(!Array.isArray(s), "Received multiple query param values for error_description"), {
    code: r,
    state: a,
    error: o,
    errorDescription: s
  }
}

function g(e) {
  let {
    connectionType: t,
    connectionMetadataField: n,
    operator: r,
    operatorText: i,
    value: a
  } = e, o = null, s = Math.round(Number(a));
  switch (r) {
    case d.iO.EQUAL:
      o = p.t.H97H4S, t === f.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (o = p.t["N95b+f"]);
      break;
    case d.iO.NOT_EQUAL:
      o = p.t["D9B/q2"];
      break;
    case d.iO.LESS_THAN:
      o = p.t["3ru8/N"], s = Math.max(0, s - 1);
      break;
    case d.iO.GREATER_THAN:
      o = p.t.wCVDHn, s = Math.max(0, s + 1);
      break;
    case true:
    case null:
      return null
  }
  if (null != i && (o = i), null != o && null != r) switch (t) {
    case f.ABu.REDDIT:
      switch (n) {
        case d.PC.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.PC.REDDIT_TOTAL_KARMA:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.P2JAEc, {
              karma: s
            })
          });
          break;
        case d.PC.REDDIT_GOLD:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t["+/5TCx"])
          });
          break;
        case d.PC.REDDIT_MOD:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t["9rPbEs"])
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.STEAM:
      switch (n) {
        case d.PC.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.PC.STEAM_GAME_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.H9eLoe, {
              count: s
            })
          });
          break;
        case d.PC.STEAM_ITEM_COUNT_TF2:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.MceZJ6, {
              count: s
            })
          });
          break;
        case d.PC.STEAM_ITEM_COUNT_DOTA2:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.dMnRar, {
              count: s
            })
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.BLUESKY:
      switch (n) {
        case d.PC.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.PC.BLUESKY_FOLLOWERS_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.xIdKU8, {
              count: s
            })
          });
          break;
        case d.PC.BLUESKY_STATUSES_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t["dy3+NR"], {
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
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.PC.TWITTER_VERIFIED:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.xRygZL)
          });
          break;
        case d.PC.TWITTER_FOLLOWERS_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.bkajar, {
              count: s
            })
          });
          break;
        case d.PC.TWITTER_STATUSES_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.MI7NKi, {
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
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.PC.PAYPAL_VERIFIED:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.slSQuB)
          });
          break;
        default:
          return null
      }
      break;
    case f.ABu.EBAY:
      switch (n) {
        case d.PC.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.PC.EBAY_TOP_RATED_SELLER:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.TEEYwa)
          });
          break;
        case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.rl9Vgy, {
              value: s
            })
          });
          break;
        case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.QP5W1R, {
              count: s
            })
          });
          break;
        case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t["6ZFYdK"], {
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
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.uv7ety)
          });
          break;
        case d.PC.TIKTOK_FOLLOWER_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.qIPDRy, {
              count: s
            })
          });
          break;
        case d.PC.TIKTOK_FOLLOWING_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.zRta4X, {
              count: s
            })
          });
          break;
        case d.PC.TIKTOK_LIKES_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t["ar0WW+"], {
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
  return o
}

function E(e) {
  return e.some(e => null === e.tags.guild_connections)
}

function b(e) {
  var t, n;
  let {
    guildMember: r,
    guild: i,
    sortedGuildRoles: a,
    channel: u,
    onlyChannelConnectionRoles: d = false
  } = e;
  if (null == r || (null == i && null != u && (i = c.Z.getGuild(u.getGuildId())), null == i)) return null;
  let {
    id: f
  } = i;
  null == a && (a = l.Z.getSortedRoles(f));
  let p = a.filter(e => null === e.tags.guild_connections && r.roles.includes(e.id)),
    _ = o().intersection(p, (0, s.Z)(u));
  return _.length > 0 ? null != (t = _[0]) ? t : null : d ? null : null != (n = p[0]) ? n : null
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