/** Chunk was on 7869 **/
/** chunk id: 174966, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk698441 = require("./698441.js"),
  Chunk508654 = require("./508654.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(t, e, d) {
  var g;
  let {
    canManageGuildEvent: E
  } = (0, u.nr)(null != d ? d : e), f = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]), A = E(f), y = null != (0, a.Qs)(null != (g = null == d ? true : d.id) ? g : c.dJq), p = null != f && (0, o.Fd)(f);
  return !A || p || y ? null : (0, l.jsx)(i.Drp, {
    id: s.intl.string(s.t.cK1GGY),
    label: s.intl.string(s.t.cK1GGY),
    action: function() {
      null != f && (0, i.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("77223"), n.e("5784")]).then(n.bind(n, 199226));
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
            event: f
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
  })
}