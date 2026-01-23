/** Chunk was on web.js **/
/** chunk id: 30793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Z
}), require("./896048.js");
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk869038 = require("./869038.js"),
  Chunk7133 = require("./7133.js"),
  Chunk45938 = require("./45938.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 0x7fffffff,
  h = {},
  m = new Map,
  g = [],
  E = [],
  y = [],
  b = new Set,
  O = {},
  v = {},
  A = new Set;

function I(e) {
  let t = u.A.createFromServer(e),
    n = t.code;
  if (m.has(n)) m.set(n, m.get(n).merge(t));
  else if (m.set(n, t), null != t.expiresAt) {
    let e = new o.Ep;
    h[n] = e, S(n)
  }
}

function S(e) {
  let t = m.get(e);
  if (null == t || null == t.expiresAt) return;
  let n = t.expiresAt.valueOf() - a()().valueOf();
  if (n <= 0) m.delete(e), delete h[e], X.emitChange();
  else {
    let t = h[e];
    if (null == t) return;
    t.start(Math.min(_, n), () => S(e))
  }
}

function T(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (t && !A.has(e.channel_id)) returnfalse;
  let n = (0, d.pF)(e) ? (0, d.e7)((null == e ? true : e.embeds) != null ? null == e ? true : e.embeds[0].url : true) : (0, d.e7)(e.content);
  return 0 !== n.length && (n.forEach(e => {
    g.includes(e) || y.includes(e) || (R({
      code: e
    }), l.h.wait(() => c.A.resolveGiftCode(e, false, true).catch(f.FXj)))
  }), false)
}

function C() {
  return A.clear(), false
}

function N(e) {
  let {
    channelId: t
  } = e;
  return null != t && A.add(t), false
}

function R(e) {
  let {
    code: t
  } = e;
  g.includes(t) || (g = [...g, t])
}

function w(e) {
  let {
    giftCode: t
  } = e;
  return g = g.filter(e => e !== t.code), y.includes(t.code) || (y = [...y, t.code]), I(t)
}

function P(e) {
  let {
    code: t
  } = e;
  g = g.filter(e => e !== t), y.includes(t) || (y = [...y, t])
}

function D(e) {
  let {
    code: t
  } = e;
  m.delete(t);
  let n = h[t];
  null != n && (n.stop(), delete h[t]), y.includes(t) || (y = [...y, t])
}

function x(e) {
  let {
    code: t
  } = e;
  E.includes(t) || (E = [...E, t])
}

function L(e) {
  let {
    giftCode: t
  } = e;
  I(t)
}

function j(e) {
  let {
    uses: t,
    code: n
  } = e, r = m.get(n);
  null != r && m.set(n, r.set("uses", Math.max(r.uses, t)))
}

function M(e) {
  let {
    skuId: t,
    subscriptionPlanId: n
  } = e;
  b.add((0, d.Kx)(t, n))
}

function k(e) {
  let {
    skuId: t,
    subscriptionPlanId: n
  } = e;
  b.delete((0, d.Kx)(t, n))
}

function U(e) {
  let {
    giftCodes: t,
    skuId: n,
    subscriptionPlanId: r
  } = e;
  t.forEach(I);
  let i = (0, d.Kx)(n, r);
  O[i] = Date.now(), b.delete(i)
}

function G(e) {
  let {
    code: t
  } = e;
  E = E.filter(e => e !== t);
  let n = m.get(t);
  null != n && m.set(t, n.merge({
    redeemed: true,
    uses: n.uses + 1
  }))
}

function V(e) {
  let {
    code: t,
    error: n
  } = e;
  E = E.filter(e => e !== t);
  let r = m.get(t);
  if (v[t] = n, null != r) switch (n.code) {
    case f.t02.UNKNOWN_GIFT_CODE:
      m.set(t, r.set("revoked", true));
      break;
    case f.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
      m.set(t, r.set("uses", r.maxUses))
  }
}

function F(e) {
  let {
    message: t
  } = e;
  return T(t, true)
}

function B(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  A.add(t), n.forEach(e => T(e, true))
}

function H(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => T(e))
}

function Y(e) {
  let {
    pins: t
  } = e;
  t.forEach(e => {
    let {
      message: t
    } = e;
    return T(t)
  })
}

function W(e) {
  let {
    data: t
  } = e;
  t.forEach(e => {
    let {
      messages: t
    } = e;
    t.forEach(e => {
      e.forEach(e => T(e))
    })
  })
}

function K(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) returnfalse;
  null == t || t.forEach(e => T(e))
}

function z(e) {
  let {
    threads: t
  } = e;
  Object.values(t).map(e => {
    let {
      first_message: t
    } = e;
    return null != t && T(t)
  })
}
class q extends(r = Chunk311907.Ay.Store) {
  get(e) {
    let t = m.get(e);
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? v[e] : null
  }
  getForGifterSKUAndPlan(e, t, n) {
    return Array.from(m.values()).filter(r => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired())
  }
  getIsResolving(e) {
    return g.includes(e)
  }
  getIsResolved(e) {
    return y.includes(e)
  }
  getIsAccepting(e) {
    return E.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return b.has((0, d.Kx)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return O[(0, d.Kx)(e, t)]
  }
  getResolvingCodes() {
    return g
  }
  getResolvedCodes() {
    return y
  }
  getAcceptingCodes() {
    return E
  }
}
p(q, "displayName", "GiftCodeStore");
let X = new q(Chunk73153.h, {
    CONNECTION_OPEN: C,
    CHANNEL_SELECT: N,
    GIFT_CODE_RESOLVE: R,
    GIFT_CODE_RESOLVE_SUCCESS: w,
    GIFT_CODE_RESOLVE_FAILURE: P,
    GIFT_CODE_REDEEM: x,
    GIFT_CODE_REDEEM_SUCCESS: G,
    GIFT_CODE_REDEEM_FAILURE: V,
    GIFT_CODE_REVOKE_SUCCESS: D,
    GIFT_CODE_CREATE_SUCCESS: L,
    GIFT_CODES_FETCH: M,
    GIFT_CODES_FETCH_SUCCESS: U,
    GIFT_CODES_FETCH_FAILURE: k,
    MESSAGE_CREATE: F,
    MESSAGE_UPDATE: F,
    LOCAL_MESSAGES_LOADED: B,
    LOAD_MESSAGES_SUCCESS: B,
    LOAD_MESSAGES_AROUND_SUCCESS: B,
    LOAD_RECENT_MENTIONS_SUCCESS: H,
    LOAD_PINNED_MESSAGES_SUCCESS: Y,
    SEARCH_MESSAGES_SUCCESS: W,
    GIFT_CODE_UPDATE: j,
    LOAD_THREADS_SUCCESS: K,
    LOAD_ARCHIVED_THREADS_SUCCESS: K,
    LOAD_FORUM_POSTS: z
  }),
  Z = X