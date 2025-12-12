/** Chunk was on web.js **/
/** chunk id: 576645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nt: () => g,
  R2: () => f,
  ZC: () => h,
  t6: () => p,
  tv: () => _,
  vY: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
require("./525654.js");
var Chunk442837 = require("./442837.js");
require("./607070.js");
var Chunk594174 = require("./594174.js");
require("./451478.js");
var Chunk980463 = require("./980463.js"),
  Chunk823961 = require("./823961.js"),
  Chunk317951 = require("./317951.js"),
  Chunk111810 = require("./111810.js"),
  Chunk477931 = require("./477931.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let [t, n, o] = (0, i.Wu)([s.Z], () => [s.Z.isFetchingPrice(e), s.Z.getPrice(e), s.Z.getErrored(e)]);
  return (0, r.useEffect)(() => {
    t || null != n || o || (0, a.Gq)(e)
  }, [t, n, o, e]), {
    price: n,
    fetchingPrice: t,
    error: o
  }
}

function p(e) {
  let t = (0, c.V1)("Utils.tsx"),
    [n, o, l, u, d] = (0, i.Wu)([s.Z], () => [s.Z.isEntitlementFetched(e), s.Z.fetchPotionCount(e), s.Z.isEntitlementFetching(e), s.Z.getEntitlement(e), s.Z.getErrored(e)]);
  return (0, r.useEffect)(() => {
    null != d || n || l || !t || (0, a.gA)(e)
  }, [n, l, e, t, d]), {
    entitlement: u,
    numPotions: o,
    fetchedEntitlement: n,
    error: d
  }
}

function _(e, t, n, r) {
  return !t && null == n && ("" !== e || null != r && r.length > 0)
}

function m(e) {
  if (null != e) return {
    message_emoji: {
      id: e.emoji.id,
      name: (0, a.zI)(e.emoji)
    }
  }
}

function h(e) {
  if (null == e || null == e.potions || 0 === e.potions.length) return null;
  for (let r of e.potions) {
    var t, n;
    if (r.type === u.B.CONFETTI && r.used_by === (null == (t = o.default.getCurrentUser()) ? true : t.id) && (null == (n = r.emoji) ? true : n.length) > 0) return r.emoji[0]
  }
  return null
}
let g = () => {
  let {
    entitlement: e,
    numPotions: t
  } = p(Chunk317951.D1);
  return null != module && module.type === Chunk981631.qc2.PURCHASE && null != exports && exports > 0
}