/** Chunk was on web.js **/
/** chunk id: 915043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $s: () => b,
  CZ: () => y,
  E: () => O,
  GD: () => I,
  Ko: () => T,
  W_: () => A,
  mJ: () => E,
  sD: () => v,
  wm: () => N
}), require("./321073.js"), require("./896048.js"), require("./492834.js"), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk339048 = require("./339048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk67480 = require("./67480.js"),
  Chunk324050 = require("./324050.js"),
  Chunk143582 = require("./143582.js"),
  Chunk337095 = require("./337095.js"),
  Chunk607940 = require("./607940.js"),
  Chunk163437 = require("./163437.js"),
  Chunk652215 = require("./652215.js");
let g = 2592e6;
var E = function(e) {
  return e[e.NOT_LOADED = 0] = "NOT_LOADED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR", e
}({});
let y = e => {
  let {
    guildId: t,
    canFetch: n = true,
    forceRefetch: a = false
  } = e, s = (0, i.bG)([_.A], () => null != t ? _.A.getEntitlementsForGuildFetchState(t) : null, [t]);
  return r.useEffect(() => {
    if (null == t || t === m.ME) return;
    let e = _.A.getEntitlementsForGuildFetchState(t);
    n && (e === _.e.NOT_FETCHED || a) && (0, f.f5)(t)
  }, [t, n, a]), {
    entitlementsLoaded: s === _.e.FETCHED
  }
};

function b(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : m.dJq,
    {
      entitlementsLoaded: a
    } = y({
      guildId: n,
      canFetch: (0, i.bG)([o.A], () => o.A.can(m.xBc.ADMINISTRATOR, e))
    }),
    s = (0, i.bG)([d.A], () => d.A.getLastGuildDismissedTime(n)),
    l = (0, i.yK)([_.A], () => {
      let e = _.A.getEntitlementsForGuild(n),
        t = _.A.getEntitlementsForGuild(n, false),
        r = e.map(e => e.applicationId);
      return t.filter(e => !r.includes(e.applicationId))
    }),
    c = (0, i.cf)([u.A], () => u.A.getSKUs()),
    f = r.useMemo(() => l.filter(e => {
      let t = c[e.skuId];
      return null != t && t.available
    }), [l, c]);
  return a ? f.filter(e => null != e.endsAt && e.endsAt.getTime() > Math.max(null != s ? s : 0, Date.now() - g)) : []
}
let O = () => {
  let [e, t] = r.useState(0);
  return r.useEffect(() => {
    t(1), Promise.all([(0, a.qw)({
      withSku: true,
      withApplication: true,
      entitlementType: m.zF_.APPLICATION_SUBSCRIPTION
    }), (0, a.qw)({
      withSku: true,
      withApplication: true,
      entitlementType: m.zF_.PURCHASE
    })]).catch(() => {
      t(3)
    }).then(() => {
      t(2)
    })
  }, []), {
    loadState: e
  }
};

function v(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, o] = r.useState([]),
    [l, c] = r.useState(false);
  return r.useLayoutEffect(() => {
    null != e && n && (c(true), (0, p.L5)(e, t).then(o).finally(() => {
      c(false)
    }))
  }, [e, t, n]), {
    guilds: (0, i.yK)([s.A], () => a.map(e => s.A.getGuild(e)).filter(e => null != e), [a]),
    isFetching: l
  }
}
let A = e => e.items;

function I(e, t) {
  return C(e, t, A)
}
let S = e => {
  var t, n;
  return null != (t = null == (n = e.renewalMutations) ? true : n.items) ? t : []
};

function T(e, t) {
  return C(e, t, S)
}

function C(e, t, n) {
  let [a, s] = (0, i.yK)([c.A, l.A], () => null == e ? [] : N({
    groupSku: e,
    SubscriptionStore: c.A,
    SubscriptionPlanStore: l.A,
    mapSubscriptionItems: n,
    guildId: t
  }), [e, n, t]);
  return r.useMemo(() => {
    if (null != a && null != s) return {
      subscription: a,
      subscriptionPlan: s
    }
  }, [a, s])
}

function N(e) {
  var t, n;
  let {
    groupSku: r,
    SubscriptionStore: i,
    SubscriptionPlanStore: a,
    mapSubscriptionItems: s,
    guildId: o
  } = e, {
    bundledSkuIds: l,
    flags: c
  } = r;
  for (let e of null != (t = i.getActiveApplicationSubscriptions()) ? t : []) {
    if ((0, h.PJ)(c) && null != o && (null == (n = e.metadata) ? true : n.application_subscription_guild_id) !== o) continue;
    let t = s(e).map(e => a.get(e.planId)).find(e => null != e && l.includes(e.skuId));
    if (null != t) return [e, t]
  }
  return []
}