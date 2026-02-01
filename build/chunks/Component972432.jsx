/** Chunk was on 93169 **/
/** chunk id: 972432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk824744 = require("./824744.js"),
  Chunk723702 = require("./723702.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.x.DEFAULT,
    f = arguments.length > 2 && true !== arguments[2] ? arguments[2] : true,
    g = (0, r.bG)([s.A], () => s.A.getLocalVolume(e, n), [e, n]),
    b = e === (null == (t = o.default.getCurrentUser()) ? true : t.id),
    p = n === c.x.STREAM;
  return b ? null : (0, i.jsx)(l.aK1, {
    id: "user-volume",
    label: p ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
    control: (t, r) => {
      var s, o;
      return (0, i.jsx)(l.i42, (s = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t), o = o = {
        ref: r,
        value: (0, d.M)(g),
        maxValue: u.isPlatformEmbedded ? 200 : 100,
        onChange: t => {
          a.A.setLocalVolume(e, (0, d.w)(t), n), null == f || f(t)
        },
        "aria-label": p ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
      }), s))
    }
  })
}