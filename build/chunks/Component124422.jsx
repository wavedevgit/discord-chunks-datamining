/** Chunk was on 470 **/
/** chunk id: 124422, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk516191 = require("./516191.jsx"),
  Chunk430104 = require("./430104.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk554747 = require("./554747.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(t, e, b) {
  var p;
  let {
    canManageGuildEvent: v
  } = (0, o.XJ)(null != b ? b : e), E = (0, r.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]), y = v(E), O = null != (0, d.qY)(null != (p = null == b ? true : b.id) ? p : g.lds), P = null != E && (0, a.xt)(E), Z = (0, c.to)() && (0, s.s)(E);
  if (!y || !(!P && !O)) return null;

  function h() {
    null != E && (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("84722"), n.e("65413")]).then(n.bind(n, 296864));
      return e => {
        var n, r;
        return (0, l.jsx)(t, (n = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), l.forEach(function(e) {
              var l;
              l = n[e], e in t ? Object.defineProperty(t, e, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = l
            })
          }
          return t
        }({}, e), r = r = {
          event: E
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(t);
            n.push.apply(n, l)
          }
          return n
        })(Object(r)).forEach(function(t) {
          Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t))
        }), n))
      }
    })
  }
  return (0, l.jsx)(i.sNh, {
    id: f.intl.string(f.t.cK1GGY),
    label: f.intl.string(f.t.cK1GGY),
    action: Z ? function() {
      null != E && (0, u.Z)(h)
    } : h
  })
}