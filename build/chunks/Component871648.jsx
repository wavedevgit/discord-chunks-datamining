/** Chunk was on 78238 **/
/** chunk id: 871648, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391973 = require("./391973.js"),
  Chunk810412 = require("./810412.js"),
  Chunk985018 = require("./985018.jsx");
let s = (0, Chunk735438.throttle)((e, t) => {
  (0, c.xp)(e.type, {
    opacity: t
  })
}, 1e3);

function b(e) {
  let t = o.useCallback(t => s(e, t), [e]);
  return (0, n.jsx)(l.aK1, {
    id: "opacity",
    "aria-haspopup": true,
    label: u.intl.string(u.t.OVovCb),
    control: (r, o) => {
      var i, c;
      return (0, n.jsx)(l.i42, (i = function(e) {
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
      }({}, r), c = c = {
        ref: o,
        value: 100 * e.opacity,
        maxValue: 100,
        onChange: r => {
          (0, a.Ju)({
            widgetId: e.id,
            opacity: r / 100
          }), t(Math.floor(r))
        },
        "aria-label": u.intl.string(u.t.kbFsAD)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
      }), i))
    }
  })
}