/** Chunk was on 51111 **/
/** chunk id: 585171, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk824744 = require("./824744.js"),
  Chunk796774 = require("./796774.js"),
  Chunk536432 = require("./536432.js"),
  Chunk985018 = require("./985018.jsx");

function s() {
  let e = (0, a.wH)(),
    {
      analyticsLocations: t
    } = (0, i.Ay)();
  return (0, n.jsx)(o.aK1, {
    id: "user-volume",
    "aria-haspopup": true,
    label: u.intl.string(u.t.kbFsAD),
    control: (r, i) => {
      var a, s;
      return (0, n.jsx)(o.i42, (a = function(e) {
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
        ref: i,
        value: (0, l.M)(e),
        maxValue: 100,
        onChange: e => (0, c.iy)((0, l.w)(e), t),
        "aria-label": u.intl.string(u.t.kbFsAD)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
      }), a))
    }
  })
}