/** Chunk was on 90406 **/
/** chunk id: 452357, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  S: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function m(t) {
  return d.A.verifyResend().then(() => {
    (0, u.A)({
      title: b.intl.string(b.t.LykQYk),
      subtitle: b.intl.format(b.t.azKEPy, {
        email: t.email
      })
    })
  }).catch(t => {
    let {
      body: e
    } = t, n = b.intl.string(b.t.XcrQN5);
    null != e && e.email && (n = e.email), (0, c.qfG)(t => (0, r.jsx)(o.Modal, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
          var r;
          r = n[e], e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = r
        })
      }
      return t
    }({
      actions: [{
        variant: "primary",
        text: b.intl.string(b.t.BddRzS),
        onClick: t.onClose
      }],
      title: b.intl.string(b.t.VbTh0E),
      subtitle: n
    }, t)))
  })
}

function g(t) {
  let {
    size: e,
    variant: n
  } = t, l = (0, s.bG)([f.default], () => f.default.getCurrentUser());
  a()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
  let [o, u] = i.useState(false), d = i.useCallback(() => {
    u(true), m(l).then(() => u(false))
  }, [l]);
  return (0, r.jsx)(c.Button, {
    size: e,
    variant: n,
    onClick: d,
    text: b.intl.string(b.t.lm1UKt),
    disabled: o
  })
}