/** Chunk was on 91042 **/
/** chunk id: 972432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.x.DEFAULT,
    b = arguments.length > 2 && true !== arguments[2] ? arguments[2] : true,
    g = (0, r.bG)([o.A], () => o.A.getLocalVolume(e, n), [e, n]),
    f = e === (null == (t = s.default.getCurrentUser()) ? true : t.id),
    m = n === c.x.STREAM;
  return f ? null : (0, l.jsx)(i.aK1, {
    id: "user-volume",
    label: m ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
    control: (t, r) => {
      var o, s;
      return (0, l.jsx)(i.i42, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, t), s = s = {
        ref: r,
        value: (0, d.M)(g),
        maxValue: u.isPlatformEmbedded ? 200 : 100,
        onChange: t => {
          a.A.setLocalVolume(e, (0, d.w)(t), n), null == b || b(t)
        },
        "aria-label": m ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
      }), o))
    }
  })
}