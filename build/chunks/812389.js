/** Chunk was on 35511 **/
/** chunk id: 812389, original params: e,t,n (module,exports,require) **/
"use strict";
var r, a, o, i, Chunk834647 = require("./834647.js"),
  Chunk780940 = require("./780940.js"),
  Chunk184110 = require("./184110.js"),
  Chunk308227 = require("./308227.js"),
  Chunk664886 = require("./664886.js"),
  Chunk735811 = require("./735811.js"),
  Chunk740628 = require("./740628.js"),
  Chunk469516 = require("./469516.js"),
  Chunk337082 = require("./337082.js"),
  Chunk999843 = require("./999843.js"),
  Chunk309270 = require("./309270.js"),
  Chunk407057 = require("./407057.js"),
  Chunk443216 = require("./443216.js"),
  Chunk304334 = require("./304334.js"),
  _ = require("./282532.js").set,
  Chunk848320 = require("./848320.js"),
  Chunk518292 = require("./518292.js"),
  Chunk564904 = require("./564904.js"),
  Chunk74414 = require("./74414.js"),
  Chunk605944 = require("./605944.js"),
  Chunk145595 = require("./145595.js"),
  Chunk976467 = require("./976467.js"),
  Chunk794938 = require("./794938.js"),
  F = "Promise",
  O = Chunk976467.CONSTRUCTOR,
  E = Chunk976467.REJECTION_EVENT,
  I = Chunk976467.SUBCLASSING,
  M = Chunk605944.getterFor(F),
  T = Chunk605944.set,
  B = Chunk145595 && Chunk145595.prototype,
  D = Chunk145595,
  L = B,
  V = Chunk308227.TypeError,
  j = Chunk308227.document,
  U = Chunk308227.process,
  q = Chunk794938.f,
  K = q,
  H = !!(j && j.createEvent && Chunk308227.dispatchEvent),
  z = "unhandledrejection",
  W = function(e) {
    var t;
    return !!(g(e) && v(t = e.then)) && t
  },
  G = function(e, t) {
    var n, r, a, o = t.value,
      i = 1 === t.state,
      s = i ? e.ok : e.fail,
      l = e.resolve,
      c = e.reject,
      u = e.domain;
    try {
      s ? (i || (2 === t.rejection && J(t), t.rejection = 1), true === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = true)), n === e.promise ? c(new V("Promise-chain cycle")) : (r = W(n)) ? d(r, n, l, c) : l(n)) : c(o)
    } catch (e) {
      u && !a && u.exit(), c(e)
    }
  },
  $ = function(e, t) {
    e.notified || (e.notified = true, k(function() {
      for (var n, r = e.reactions; n = r.get();) G(n, e);
      e.notified = false, t && !e.rejection && Q(e)
    }))
  },
  Y = function(e, t, n) {
    var r, a;
    H ? ((r = j.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, false, true), u.dispatchEvent(r)) : r = {
      promise: t,
      reason: n
    }, !E && (a = u["on" + e]) ? a(r) : e === z && C("Unhandled promise rejection", n)
  },
  Q = function(e) {
    d(_, u, function() {
      var t, n = e.facade,
        r = e.value;
      if (Z(e) && (t = w(function() {
          c ? U.emit("unhandledRejection", r, n) : Y(z, n, r)
        }), e.rejection = c || Z(e) ? 2 : 1, t.error)) throw t.value
    })
  },
  Z = function(e) {
    return 1 !== e.rejection && !e.parent
  },
  J = function(e) {
    d(_, u, function() {
      var t = e.facade;
      c ? U.emit("rejectionHandled", t) : Y("rejectionhandled", t, e.value)
    })
  },
  X = function(e, t, n) {
    return function(r) {
      e(t, r, n)
    }
  },
  ee = function(e, t, n) {
    e.done || (e.done = true, n && (e = n), e.value = t, e.state = 2, $(e, true))
  },
  et = function(e, t, n) {
    if (!e.done) {
      e.done = true, n && (e = n);
      try {
        if (e.facade === t) throw new V("Promise can't be resolved itself");
        var r = W(t);
        r ? k(function() {
          var n = {
            done: false
          };
          try {
            d(r, t, X(et, n, e), X(ee, n, e))
          } catch (t) {
            ee(n, t, e)
          }
        }) : (e.value = t, e.state = 1, $(e, false))
      } catch (t) {
        ee({
          done: false
        }, t, e)
      }
    }
  };
if (O && (L = (D = function(e) {
    b(this, L), y(e), d(r, this);
    var t = M(this);
    try {
      e(X(et, t), X(ee, t))
    } catch (e) {
      ee(t, e)
    }
  }).prototype, (r = function(e) {
    T(this, {
      type: F,
      done: false,
      notified: false,
      parent: false,
      reactions: new S,
      rejection: false,
      state: 0,
      value: null
    })
  }).prototype = Chunk735811(L, "then", function(e, t) {
    var n = M(this),
      r = q(A(this, D));
    return n.parent = true, r.ok = !v(e) || e, r.fail = v(t) && t, r.domain = c ? U.domain : true, 0 === n.state ? n.reactions.add(r) : k(function() {
      G(r, n)
    }), r.promise
  }), a = function() {
    var e = new r,
      t = M(e);
    this.promise = e, this.resolve = X(et, t), this.reject = X(ee, t)
  }, Chunk794938.f = q = function(e) {
    return e === D || e === o ? new a(e) : K(e)
  }, !Chunk780940 && Chunk309270(Chunk145595) && B !== Object.prototype)) {
  i = B.then, I || Chunk735811(B, "then", function(e, t) {
    var n = this;
    return new D(function(e, t) {
      d(i, n, e, t)
    }).then(e, t)
  }, {
    unsafe: true
  });
  try {
    delete B.constructor
  } catch (e) {}
  Chunk740628 && Chunk740628(B, L)
}
Chunk834647({
  global: true,
  constructor: true,
  wrap: true,
  forced: O
}, {
  Promise: D
}), Chunk469516(D, F, false, true), Chunk337082(F)