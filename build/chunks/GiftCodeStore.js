/** Chunk was on 91173 **/
/** chunk id: 82142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var r, i, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk533307 = require("./533307.js"),
  Chunk590783 = require("./590783.js"),
  Chunk669079 = require("./669079.js"),
  Chunk981631 = require("./981631.js");
let f = {},
  g = new Map,
  _ = [],
  h = [],
  b = [],
  E = new Set,
  C = {},
  v = {},
  O = new Set;

function y(e) {
  let t = d.Z.createFromServer(e),
    n = t.code;
  if (g.has(n)) g.set(n, g.get(n).merge(t));
  else if (g.set(n, t), null != t.expiresAt) {
    let e = new s.V7;
    f[n] = e,
      function e(t) {
        let n = g.get(t);
        if (null == n || null == n.expiresAt) return;
        let r = n.expiresAt.valueOf() - a()().valueOf();
        if (r <= 0) g.delete(t), delete f[t], N.emitChange();
        else {
          let n = f[t];
          if (null == n) return;
          n.start(Math.min(0x7fffffff, r), () => e(t))
        }
      }(n)
  }
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (t && !O.has(e.channel_id)) returnfalse;
  let n = (0, p.Fp)(e) ? (0, p.Q_)((null == e ? true : e.embeds) != null ? null == e ? true : e.embeds[0].url : true) : (0, p.Q_)(e.content);
  return 0 !== n.length && (n.forEach(e => {
    _.includes(e) || b.includes(e) || (j({
      code: e
    }), c.Z.wait(() => u.Z.resolveGiftCode(e, false, true).catch(m.VqG)))
  }), false)
}

function j(e) {
  let {
    code: t
  } = e;
  _.includes(t) || (_ = [..._, t])
}

function I(e) {
  let {
    message: t
  } = e;
  return x(t, true)
}

function S(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  O.add(t), n.forEach(e => x(e, true))
}

function T(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) returnfalse;
  null == t || t.forEach(e => x(e))
}
class P extends(r = Chunk442837.ZP.Store) {
  get(e) {
    let t = g.get(e);
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? v[e] : null
  }
  getForGifterSKUAndPlan(e, t, n) {
    return Array.from(g.values()).filter(r => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired())
  }
  getIsResolving(e) {
    return _.includes(e)
  }
  getIsResolved(e) {
    return b.includes(e)
  }
  getIsAccepting(e) {
    return h.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return E.has((0, p.Bg)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return C[(0, p.Bg)(e, t)]
  }
  getResolvingCodes() {
    return _
  }
  getResolvedCodes() {
    return b
  }
  getAcceptingCodes() {
    return h
  }
}(i = "displayName") in P ? Object.defineProperty(P, i, {
  value: "GiftCodeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : P[i] = "GiftCodeStore";
let N = new P(Chunk570140.Z, {
    CONNECTION_OPEN: function() {
      return O.clear(), false
    },
    CHANNEL_SELECT: function(e) {
      let {
        channelId: t
      } = e;
      return null != t && O.add(t), false
    },
    GIFT_CODE_RESOLVE: j,
    GIFT_CODE_RESOLVE_SUCCESS: function(e) {
      let {
        giftCode: t
      } = e;
      return _ = _.filter(e => e !== t.code), b.includes(t.code) || (b = [...b, t.code]), y(t)
    },
    GIFT_CODE_RESOLVE_FAILURE: function(e) {
      let {
        code: t
      } = e;
      _ = _.filter(e => e !== t), b.includes(t) || (b = [...b, t])
    },
    GIFT_CODE_REDEEM: function(e) {
      let {
        code: t
      } = e;
      h.includes(t) || (h = [...h, t])
    },
    GIFT_CODE_REDEEM_SUCCESS: function(e) {
      let {
        code: t
      } = e;
      h = h.filter(e => e !== t);
      let n = g.get(t);
      null != n && g.set(t, n.merge({
        redeemed: true,
        uses: n.uses + 1
      }))
    },
    GIFT_CODE_REDEEM_FAILURE: function(e) {
      let {
        code: t,
        error: n
      } = e;
      h = h.filter(e => e !== t);
      let r = g.get(t);
      if (v[t] = n, null != r) switch (n.code) {
        case m.evJ.UNKNOWN_GIFT_CODE:
          g.set(t, r.set("revoked", true));
          break;
        case m.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
          g.set(t, r.set("uses", r.maxUses))
      }
    },
    GIFT_CODE_REVOKE_SUCCESS: function(e) {
      let {
        code: t
      } = e;
      g.delete(t);
      let n = f[t];
      null != n && (n.stop(), delete f[t]), b.includes(t) || (b = [...b, t])
    },
    GIFT_CODE_CREATE_SUCCESS: function(e) {
      let {
        giftCode: t
      } = e;
      y(t)
    },
    GIFT_CODES_FETCH: function(e) {
      let {
        skuId: t,
        subscriptionPlanId: n
      } = e;
      E.add((0, p.Bg)(t, n))
    },
    GIFT_CODES_FETCH_SUCCESS: function(e) {
      let {
        giftCodes: t,
        skuId: n,
        subscriptionPlanId: r
      } = e;
      t.forEach(y);
      let i = (0, p.Bg)(n, r);
      C[i] = Date.now(), E.delete(i)
    },
    GIFT_CODES_FETCH_FAILURE: function(e) {
      let {
        skuId: t,
        subscriptionPlanId: n
      } = e;
      E.delete((0, p.Bg)(t, n))
    },
    MESSAGE_CREATE: I,
    MESSAGE_UPDATE: I,
    LOCAL_MESSAGES_LOADED: S,
    LOAD_MESSAGES_SUCCESS: S,
    LOAD_MESSAGES_AROUND_SUCCESS: S,
    LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
      let {
        messages: t
      } = e;
      t.forEach(e => x(e))
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
      let {
        pins: t
      } = e;
      t.forEach(e => {
        let {
          message: t
        } = e;
        return x(t)
      })
    },
    SEARCH_MESSAGES_SUCCESS: function(e) {
      let {
        data: t
      } = e;
      t.forEach(e => {
        let {
          messages: t
        } = e;
        t.forEach(e => {
          e.forEach(e => x(e))
        })
      })
    },
    GIFT_CODE_UPDATE: function(e) {
      let {
        uses: t,
        code: n
      } = e, r = g.get(n);
      null != r && g.set(n, r.set("uses", Math.max(r.uses, t)))
    },
    LOAD_THREADS_SUCCESS: T,
    LOAD_ARCHIVED_THREADS_SUCCESS: T,
    LOAD_FORUM_POSTS: function(e) {
      let {
        threads: t
      } = e;
      Object.values(t).map(e => {
        let {
          first_message: t
        } = e;
        return null != t && x(t)
      })
    }
  }),
  A = N