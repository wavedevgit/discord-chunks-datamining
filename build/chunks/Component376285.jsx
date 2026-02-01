/** Chunk was on 90228 **/
/** chunk id: 376285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk206845 = require("./206845.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk427262 = require("./427262.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609141 = require("./609141.js");

function p(e) {
  let {
    user: t,
    isVisible: n
  } = e, {
    trackUserProfileAction: l
  } = (0, d.NJ)();
  return o.p5 ? (0, a.jsx)(s.A, {
    text: u.intl.string(u.t.y5MwJy),
    delay: 0,
    "aria-label": false,
    copyValue: c.Ay.getUserTag(t, {
      decoration: "never",
      identifiable: "always"
    }),
    onCopy: () => l({
      action: "COPY_USERNAME"
    }),
    children: e => {
      var t, l;
      return (0, a.jsx)(i.DUT, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, e), l = l = {
        className: r()(m.c, {
          [m.R]: n
        }),
        "aria-label": u.intl.string(u.t.y5MwJy),
        children: (0, a.jsx)(i.TdU, {
          size: "xs",
          color: "currentColor"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t))
    }
  }) : null
}