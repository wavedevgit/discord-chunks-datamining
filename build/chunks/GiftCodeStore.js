/** Chunk was on 37372 **/
/** chunk id: 30793, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var n, l, Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk869038 = require("./869038.js"),
  Chunk7133 = require("./7133.js"),
  Chunk45938 = require("./45938.js"),
  Chunk652215 = require("./652215.js");
let p = {},
  _ = new Map,
  O = [],
  h = [],
  S = [],
  g = new Set,
  y = {},
  C = {},
  b = new Set;

function m(e) {
  let t = d.A.createFromServer(e),
    r = t.code;
  if (_.has(r)) _.set(r, _.get(r).merge(t));
  else if (_.set(r, t), null != t.expiresAt) {
    let e = new a.Ep;
    p[r] = e,
      function e(t) {
        let r = _.get(t);
        if (null == r || null == r.expiresAt) return;
        let n = r.expiresAt.valueOf() - o()().valueOf();
        if (n <= 0) _.delete(t), delete p[t], T.emitChange();
        else {
          let r = p[t];
          if (null == r) return;
          r.start(Math.min(0x7fffffff, n), () => e(t))
        }
      }(r)
  }
}

function A(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (t && !b.has(e.channel_id)) returnfalse;
  let r = (0, E.pF)(e) ? (0, E.e7)((null == e ? true : e.embeds) != null ? null == e ? true : e.embeds[0].url : true) : (0, E.e7)(e.content);
  return 0 !== r.length && (r.forEach(e => {
    O.includes(e) || S.includes(e) || (R({
      code: e
    }), c.h.wait(() => u.A.resolveGiftCode(e, false, true).catch(f.FXj)))
  }), false)
}

function R(e) {
  let {
    code: t
  } = e;
  O.includes(t) || (O = [...O, t])
}

function I(e) {
  let {
    message: t
  } = e;
  return A(t, true)
}

function j(e) {
  let {
    channelId: t,
    messages: r
  } = e;
  b.add(t), r.forEach(e => A(e, true))
}

function D(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) returnfalse;
  null == t || t.forEach(e => A(e))
}
class v extends(n = Chunk311907.Ay.Store) {
  get(e) {
    let t = _.get(e);
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? C[e] : null
  }
  getForGifterSKUAndPlan(e, t, r) {
    return Array.from(_.values()).filter(n => n.userId === e && n.skuId === t && (null == r || n.subscriptionPlanId === r) && !n.isExpired())
  }
  getIsResolving(e) {
    return O.includes(e)
  }
  getIsResolved(e) {
    return S.includes(e)
  }
  getIsAccepting(e) {
    return h.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return g.has((0, E.Kx)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return y[(0, E.Kx)(e, t)]
  }
  getResolvingCodes() {
    return O
  }
  getResolvedCodes() {
    return S
  }
  getAcceptingCodes() {
    return h
  }
}(l = "displayName") in v ? Object.defineProperty(v, l, {
  value: "GiftCodeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : v[l] = "GiftCodeStore";
let T = new v(Chunk73153.h, {
    CONNECTION_OPEN: function() {
      return b.clear(), false
    },
    CHANNEL_SELECT: function(e) {
      let {
        channelId: t
      } = e;
      return null != t && b.add(t), false
    },
    GIFT_CODE_RESOLVE: R,
    GIFT_CODE_RESOLVE_SUCCESS: function(e) {
      let {
        giftCode: t
      } = e;
      return O = O.filter(e => e !== t.code), S.includes(t.code) || (S = [...S, t.code]), m(t)
    },
    GIFT_CODE_RESOLVE_FAILURE: function(e) {
      let {
        code: t
      } = e;
      O = O.filter(e => e !== t), S.includes(t) || (S = [...S, t])
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
      let r = _.get(t);
      null != r && _.set(t, r.merge({
        redeemed: true,
        uses: r.uses + 1
      }))
    },
    GIFT_CODE_REDEEM_FAILURE: function(e) {
      let {
        code: t,
        error: r
      } = e;
      h = h.filter(e => e !== t);
      let n = _.get(t);
      if (C[t] = r, null != n) switch (r.code) {
        case f.t02.UNKNOWN_GIFT_CODE:
          _.set(t, n.set("revoked", true));
          break;
        case f.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
          _.set(t, n.set("uses", n.maxUses))
      }
    },
    GIFT_CODE_REVOKE_SUCCESS: function(e) {
      let {
        code: t
      } = e;
      _.delete(t);
      let r = p[t];
      null != r && (r.stop(), delete p[t]), S.includes(t) || (S = [...S, t])
    },
    GIFT_CODE_CREATE_SUCCESS: function(e) {
      let {
        giftCode: t
      } = e;
      m(t)
    },
    GIFT_CODES_FETCH: function(e) {
      let {
        skuId: t,
        subscriptionPlanId: r
      } = e;
      g.add((0, E.Kx)(t, r))
    },
    GIFT_CODES_FETCH_SUCCESS: function(e) {
      let {
        giftCodes: t,
        skuId: r,
        subscriptionPlanId: n
      } = e;
      t.forEach(m);
      let l = (0, E.Kx)(r, n);
      y[l] = Date.now(), g.delete(l)
    },
    GIFT_CODES_FETCH_FAILURE: function(e) {
      let {
        skuId: t,
        subscriptionPlanId: r
      } = e;
      g.delete((0, E.Kx)(t, r))
    },
    MESSAGE_CREATE: I,
    MESSAGE_UPDATE: I,
    LOCAL_MESSAGES_LOADED: j,
    LOAD_MESSAGES_SUCCESS: j,
    LOAD_MESSAGES_AROUND_SUCCESS: j,
    LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
      let {
        messages: t
      } = e;
      t.forEach(e => A(e))
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
      let {
        pins: t
      } = e;
      t.forEach(e => {
        let {
          message: t
        } = e;
        return A(t)
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
          e.forEach(e => A(e))
        })
      })
    },
    GIFT_CODE_UPDATE: function(e) {
      let {
        uses: t,
        code: r
      } = e, n = _.get(r);
      null != n && _.set(r, n.set("uses", Math.max(n.uses, t)))
    },
    LOAD_THREADS_SUCCESS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: D,
    LOAD_FORUM_POSTS: function(e) {
      let {
        threads: t
      } = e;
      Object.values(t).map(e => {
        let {
          first_message: t
        } = e;
        return null != t && A(t)
      })
    }
  }),
  x = T