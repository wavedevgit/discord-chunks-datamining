/** Chunk was on 1272 **/
/** chunk id: 238679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KW: () => f,
  dO: () => p,
  gQ: () => h
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk863141 = require("./863141.js"),
  Chunk186901 = require("./186901.js");

function p() {
  let e = Chunk317381.ZP.getCurrentEmbeddedActivity();
  if (null == module) return {
    participants: []
  };
  let t = (0, Chunk16609.j)(module.location),
    n = (0, Chunk16609.p)(module.location);
  return {
    participants: Array.from(module.userIds, e => {
      var r, i;
      let l = o.default.getUser(e);
      if (null == l) return;
      let a = (0, c.y)(t, n, l);
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
      }({}, (0, u.Z)(l)), i = i = {
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
    }).filter(Chunk823379.lm)
  }
}
let f = {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE]
  },
  h = {
    scope: f,
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = p();
      return i().isEqual(r, t) || n(r), r
    }
  }