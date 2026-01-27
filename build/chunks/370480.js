/** Chunk was on web.js **/
/** chunk id: 370480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  An: () => b,
  N8: () => E,
  RP: () => g,
  _g: () => y,
  iC: () => _,
  jO: () => h,
  vA: () => m
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./446912.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438);
require("./311907.js"), require("./554146.js");
var Chunk920268 = require("./920268.js");
require("./826673.js");
var Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js");
require("./576705.js");
var Chunk998218 = require("./998218.js"),
  Chunk783419 = require("./783419.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
var h = function(e) {
  return e[e.AND = 0] = "AND", e[e.OR = 1] = "OR", e
}({});

function m(e) {
  var t;
  let {
    searchParams: n
  } = null != (t = u.A.toURLSafe(e)) ? t : {
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
    case d.so.EQUAL:
      o = p.t.H97H4S, t === f.fg2.PAYPAL && n === d.pK.PAYPAL_VERIFIED && (o = p.t["N95b+f"]);
      break;
    case d.so.NOT_EQUAL:
      o = p.t["D9B/q2"];
      break;
    case d.so.LESS_THAN:
      o = p.t["3ru8/N"], s = Math.max(0, s - 1);
      break;
    case d.so.GREATER_THAN:
      o = p.t.wCVDHn, s = Math.max(0, s + 1);
      break;
    case true:
    case null:
      return null
  }
  if (null != i && (o = i), null != o && null != r) switch (t) {
    case f.fg2.REDDIT:
      switch (n) {
        case d.pK.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.pK.REDDIT_TOTAL_KARMA:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.P2JAEc, {
              karma: s
            })
          });
          break;
        case d.pK.REDDIT_GOLD:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t["+/5TCx"])
          });
          break;
        case d.pK.REDDIT_MOD:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t["9rPbEs"])
          });
          break;
        default:
          return null
      }
      break;
    case f.fg2.STEAM:
      switch (n) {
        case d.pK.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.pK.STEAM_GAME_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.H9eLoe, {
              count: s
            })
          });
          break;
        case d.pK.STEAM_ITEM_COUNT_TF2:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.MceZJ6, {
              count: s
            })
          });
          break;
        case d.pK.STEAM_ITEM_COUNT_DOTA2:
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
    case f.fg2.BLUESKY:
      switch (n) {
        case d.pK.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.pK.BLUESKY_FOLLOWERS_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.xIdKU8, {
              count: s
            })
          });
          break;
        case d.pK.BLUESKY_STATUSES_COUNT:
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
    case f.fg2.TWITTER:
      switch (n) {
        case d.pK.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.pK.TWITTER_VERIFIED:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.xRygZL)
          });
          break;
        case d.pK.TWITTER_FOLLOWERS_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.bkajar, {
              count: s
            })
          });
          break;
        case d.pK.TWITTER_STATUSES_COUNT:
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
    case f.fg2.PAYPAL:
      switch (n) {
        case d.pK.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.pK.PAYPAL_VERIFIED:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.slSQuB)
          });
          break;
        default:
          return null
      }
      break;
    case f.fg2.EBAY:
      switch (n) {
        case d.pK.CREATED_AT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEu, {
              days: s
            })
          });
          break;
        case d.pK.EBAY_TOP_RATED_SELLER:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.TEEYwa)
          });
          break;
        case d.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.rl9Vgy, {
              value: s
            })
          });
          break;
        case d.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.QP5W1R, {
              count: s
            })
          });
          break;
        case d.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
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
    case f.fg2.TIKTOK:
      switch (n) {
        case d.pK.TIKTOK_VERIFIED:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.string(p.t.uv7ety)
          });
          break;
        case d.pK.TIKTOK_FOLLOWER_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.qIPDRy, {
              count: s
            })
          });
          break;
        case d.pK.TIKTOK_FOLLOWING_COUNT:
          o = p.intl.format(o, {
            platformQuantityHook: () => p.intl.formatToPlainString(p.t.zRta4X, {
              count: s
            })
          });
          break;
        case d.pK.TIKTOK_LIKES_COUNT:
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

function y(e) {
  var t, n;
  let {
    guildMember: r,
    guild: i,
    sortedGuildRoles: a,
    channel: u,
    onlyChannelConnectionRoles: d = false
  } = e;
  if (null == r || (null == i && null != u && (i = c.A.getGuild(u.getGuildId())), null == i)) return null;
  let {
    id: f
  } = i;
  null == a && (a = l.A.getSortedRoles(f));
  let p = a.filter(e => null === e.tags.guild_connections && r.roles.includes(e.id)),
    _ = o().intersection(p, (0, s.A)(u));
  return _.length > 0 ? null != (n = _[0]) ? n : null : d ? null : null != (t = p[0]) ? t : null
}

function b(e, t) {
  if (null == e || "" === e) return null;
  let n = new Date(e);
  return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}