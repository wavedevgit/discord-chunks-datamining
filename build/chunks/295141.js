/** Chunk was on web.js **/
/** chunk id: 295141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HT: () => N,
  K5: () => y,
  LB: () => A,
  MI: () => S,
  V_: () => I,
  X: () => b,
  X2: () => g,
  aG: () => p,
  bg: () => _,
  ci: () => E,
  eI: () => T,
  es: () => v,
  iW: () => O,
  j8: () => C,
  nU: () => h,
  rD: () => m
});
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = async (e, t) => {
  try {
    return (await r.tn.post({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
      body: t,
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, p = async (e, t, n) => {
  var {
    priceTier: o
  } = n, s = d(n, ["priceTier"]);
  try {
    return (await r.tn.post({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
      body: u(l({}, s), {
        price_tier: o
      }),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, h = async (e, t, n, o) => {
  var {
    priceTier: s
  } = o, c = d(o, ["priceTier"]);
  try {
    return (await r.tn.patch({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
      body: u(l({}, c), {
        price_tier: s
      }),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, m = async function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: false
    },
    n = {
      include_soft_deleted: t.includeSoftDeleted,
      country_code: t.countryCode
    };
  try {
    return (await r.tn.get({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
      query: n,
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, g = async e => (await r.tn.get({
  url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
  rejectWithError: false
})).body, E = async (e, t) => {
  try {
    return (await r.tn.patch({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
      body: t,
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, b = async e => {
  try {
    return (await r.tn.get({
      url: a.ANM.PRICE_TIERS,
      query: {
        price_tier_type: o.RG.GUILD_ROLE_SUBSCRIPTIONS,
        guild_id: e
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, y = async function(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  try {
    return (await r.tn.get({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
      query: {
        include_draft_listings: n.includeDraftListings,
        include_archived_listings: n.includeArchivedListings
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, O = async e => {
  try {
    return (await r.tn.get({
      url: a.ANM.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, v = async (e, t, n) => {
  try {
    await r.tn.del({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}, I = async (e, t, n) => {
  try {
    return (await r.tn.post({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, T = async e => {
  try {
    return (await r.tn.get({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIALS(e),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, S = async (e, t, n) => {
  try {
    return (await r.tn.patch({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
      body: n,
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, A = async (e, t, n) => {
  try {
    return (await r.tn.get({
      url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, C = async function(e) {
  let {
    signal: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  try {
    return (await r.tn.get({
      url: a.ANM.CREATOR_MONETIZATION_RESTRICTIONS(e),
      signal: t,
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, N = async e => {
  try {
    var t;
    let n = await r.tn.get({
      url: a.ANM.GUILD_DISCOVERY_SLUG(e),
      rejectWithError: false
    });
    return null != (t = n.body) ? t : JSON.parse(n.text)
  } catch (e) {
    throw new i.Hx(e)
  }
}