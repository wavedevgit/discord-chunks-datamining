/** Chunk was on 5606 **/
/** chunk id: 148131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk53719 = require("./53719.jsx"),
  Chunk390370 = require("./390370.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk487693 = require("./487693.js");

function f(e) {
  let {
    user: t
  } = e, l = (0, a.bG)([c.default], () => c.default.getCurrentUser()), f = i.useCallback(() => {
    s()(true !== l, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("43139").then(n.bind(n, 179950));
      return n => {
        var i, s;
        return (0, r.jsx)(e, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), s = s = {
          currentUser: l,
          otherUser: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  }, [l, t]);
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)("div", {
      className: g.zH,
      children: (0, r.jsx)(u.A, {
        otherUser: t,
        status: p.Ef.ACTIVE
      })
    }), (0, r.jsx)("div", {
      className: g.o1,
      children: (0, r.jsx)(d.A, {
        icon: o.PGe,
        tooltip: m.intl.string(_.default.l20ZZp),
        onClick: f
      })
    })]
  })
}