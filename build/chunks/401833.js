/** Chunk was on 23357 **/
/** chunk id: 401833, original params: e,t,n (module,exports,require) **/
"use strict";
var r, o, a, i, Chunk220159 = require("./220159.js"),
  Chunk253462 = require("./253462.js"),
  Chunk270301 = require("./270301.js"),
  Chunk424353 = require("./424353.js"),
  Chunk517522 = require("./517522.js"),
  Chunk342930 = require("./342930.js"),
  Chunk578079 = require("./578079.js"),
  Chunk770050 = require("./770050.js"),
  Chunk999405 = require("./999405.js"),
  Chunk691593 = require("./691593.js"),
  Chunk971428 = require("./971428.js"),
  Chunk829575 = require("./829575.js"),
  Chunk588383 = require("./588383.js"),
  Chunk444529 = require("./444529.js"),
  k = require("./430805.js").set,
  Chunk672606 = require("./672606.js"),
  Chunk951598 = require("./951598.js"),
  Chunk134546 = require("./134546.js"),
  Chunk61189 = require("./61189.js"),
  Chunk89416 = require("./89416.js"),
  Chunk57100 = require("./57100.js"),
  Chunk296004 = require("./296004.js"),
  Chunk602168 = require("./602168.js"),
  R = "Promise",
  F = Chunk296004.CONSTRUCTOR,
  E = Chunk296004.REJECTION_EVENT,
  O = Chunk296004.SUBCLASSING,
  I = Chunk89416.getterFor(R),
  M = Chunk89416.set,
  T = Chunk57100 && Chunk57100.prototype,
  B = Chunk57100,
  D = T,
  L = Chunk424353.TypeError,
  V = Chunk424353.document,
  j = Chunk424353.process,
  U = Chunk602168.f,
  q = U,
  H = !!(V && V.createEvent && Chunk424353.dispatchEvent),
  K = "unhandledrejection",
  z = function(e) {
    var t;
    return !!(g(e) && v(t = e.then)) && t
  },
  W = function(e, t) {
    var n, r, o, a = t.value,
      i = 1 === t.state,
      s = i ? e.ok : e.fail,
      c = e.resolve,
      l = e.reject,
      u = e.domain;
    try {
      s ? (i || (2 === t.rejection && J(t), t.rejection = 1), true === s ? n = a : (u && u.enter(), n = s(a), u && (u.exit(), o = true)), n === e.promise ? l(new L("Promise-chain cycle")) : (r = z(n)) ? d(r, n, c, l) : c(n)) : l(a)
    } catch (e) {
      u && !o && u.exit(), l(e)
    }
  },
  Y = function(e, t) {
    e.notified || (e.notified = true, C(function() {
      for (var n, r = e.reactions; n = r.get();) W(n, e);
      e.notified = false, t && !e.rejection && $(e)
    }))
  },
  G = function(e, t, n) {
    var r, o;
    H ? ((r = V.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, false, true), u.dispatchEvent(r)) : r = {
      promise: t,
      reason: n
    }, !E && (o = u["on" + e]) ? o(r) : e === K && Z("Unhandled promise rejection", n)
  },
  $ = function(e) {
    d(k, u, function() {
      var t, n = e.facade,
        r = e.value;
      if (Q(e) && (t = w(function() {
          l ? j.emit("unhandledRejection", r, n) : G(K, n, r)
        }), e.rejection = l || Q(e) ? 2 : 1, t.error)) throw t.value
    })
  },
  Q = function(e) {
    return 1 !== e.rejection && !e.parent
  },
  J = function(e) {
    d(k, u, function() {
      var t = e.facade;
      l ? j.emit("rejectionHandled", t) : G("rejectionhandled", t, e.value)
    })
  },
  X = function(e, t, n) {
    return function(r) {
      e(t, r, n)
    }
  },
  ee = function(e, t, n) {
    e.done || (e.done = true, n && (e = n), e.value = t, e.state = 2, Y(e, true))
  },
  et = function(e, t, n) {
    if (!e.done) {
      e.done = true, n && (e = n);
      try {
        if (e.facade === t) throw new L("Promise can't be resolved itself");
        var r = z(t);
        r ? C(function() {
          var n = {
            done: false
          };
          try {
            d(r, t, X(et, n, e), X(ee, n, e))
          } catch (t) {
            ee(n, t, e)
          }
        }) : (e.value = t, e.state = 1, Y(e, false))
      } catch (t) {
        ee({
          done: false
        }, t, e)
      }
    }
  };
if (F && (D = (B = function(e) {
    b(this, D), y(e), d(r, this);
    var t = I(this);
    try {
      e(X(et, t), X(ee, t))
    } catch (e) {
      ee(t, e)
    }
  }).prototype, (r = function(e) {
    M(this, {
      type: R,
      done: false,
      notified: false,
      parent: false,
      reactions: new S,
      rejection: false,
      state: 0,
      value: null
    })
  }).prototype = Chunk342930(D, "then", function(e, t) {
    var n = I(this),
      r = U(_(this, B));
    return n.parent = true, r.ok = !v(e) || e, r.fail = v(t) && t, r.domain = l ? j.domain : true, 0 === n.state ? n.reactions.add(r) : C(function() {
      W(r, n)
    }), r.promise
  }), o = function() {
    var e = new r,
      t = I(module);
    this.promise = module, this.resolve = X(et, exports), this.reject = X(ee, exports)
  }, Chunk602168.f = U = function(e) {
    return e === B || e === a ? new o(e) : q(e)
  }, !Chunk253462 && Chunk971428(Chunk57100) && T !== Object.prototype)) {
  i = T.then, O || Chunk342930(T, "then", function(e, t) {
    var n = this;
    return new B(function(e, t) {
      d(i, n, e, t)
    }).then(e, t)
  }, {
    unsafe: true
  });
  try {
    delete T.constructor
  } catch (e) {}
  Chunk578079 && Chunk578079(T, D)
}
Chunk220159({
  global: true,
  constructor: true,
  wrap: true,
  forced: F
}, {
  Promise: B
}), Chunk770050(B, R, false, true), Chunk999405(R)