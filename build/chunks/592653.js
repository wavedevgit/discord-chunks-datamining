/** Chunk was on 21738 **/
/** chunk id: 592653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  WW: () => h,
  Y$: () => p,
  t$: () => f
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk639621 = require("./639621.js"),
  Chunk613057 = require("./613057.js");

function p() {
  let e = l.Ay.getCurrentEmbeddedActivity();
  if (null == e) return {
    participants: []
  };
  let t = (0, a.D)(e.location),
    n = (0, a.H)(e.location);
  return {
    participants: Array.from(e.userIds, e => {
      var r, i;
      let l = s.default.getUser(e);
      if (null == l) return;
      let a = (0, c.tJ)(t, n, l);
      return r = function(e) {
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
      }({}, (0, u.A)(l)), i = i = {
        nickname: null != a ? a : true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r
    }).filter(o.Vq)
  }
}
let h = {
    [Chunk613057.sm.ANY]: [Chunk613057.VH]
  },
  f = {
    scope: h,
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = p();
      return i().isEqual(r, t) || n(r), r
    }
  }