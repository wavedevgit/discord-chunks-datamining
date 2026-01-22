/** Chunk was on 83898 **/
/** chunk id: 485873, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t = (0, o.bG)([l.A], () => (0, a.M)(l.A.getInputVolume()));
  return (0, n.jsx)(u.aK1, {
    id: "input",
    label: c.intl.string(c.t.OX2Bnr),
    control: (r, o) => {
      var l, s;
      return (0, n.jsx)(u.i42, (l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, r), s = s = {
        ref: o,
        value: t,
        onChange: t => i.A.setInputVolume((0, a.w)(t), {
          analyticsLocations: e
        }),
        "aria-label": c.intl.string(c.t.OX2Bnr)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
      }), l))
    }
  })
}