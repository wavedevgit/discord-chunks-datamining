/** Chunk was on 6043 **/
/** chunk id: 309494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk320161 = require("./320161.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk51144 = require("./51144.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426156 = require("./426156.js");

function p(e) {
  let {
    user: t,
    isVisible: n
  } = e, {
    trackUserProfileAction: r
  } = (0, d.KZ)();
  return o.wS ? (0, a.jsx)(s.Z, {
    text: u.intl.string(u.t.y5MwJy),
    delay: 0,
    "aria-label": false,
    copyValue: c.ZP.getUserTag(t, {
      decoration: "never",
      identifiable: "always"
    }),
    onCopy: () => r({
      action: "COPY_USERNAME"
    }),
    children: e => {
      var t, r;
      return (0, a.jsx)(i.P3F, (t = function(e) {
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
      }({}, e), r = r = {
        className: l()(m.copyButton, {
          [m.visible]: n
        }),
        "aria-label": u.intl.string(u.t.y5MwJy),
        children: (0, a.jsx)(i.TIy, {
          size: "xs",
          color: "currentColor"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  }) : null
}