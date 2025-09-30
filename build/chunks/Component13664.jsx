/** Chunk was on 24753 **/
/** chunk id: 13664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788931 = require("./788931.js");

function o(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: n
  } = e, o = t ? a.intl.string(a.t.xAT8lJ) : a.intl.string(a.t["Y+18hY"]);
  return (0, r.jsx)("div", {
    className: s.notificationToggle,
    children: (0, r.jsx)(l.$q, {
      type: l.M0.INVERTED,
      size: 14,
      className: s.__invalid_checkbox,
      value: t,
      onChange: function() {
        n(!t)
      },
      children: (0, r.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, r.jsx)(i.ua7, {
          position: "bottom",
          tooltipClassName: s.tooltip,
          text: a.intl.string(a.t["4A/xnZ"]),
          "aria-label": a.intl.string(a.t["4A/xnZ"]),
          children: e => {
            var t, n;
            return (0, r.jsx)("span", (t = function(e) {
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
            }({}, e), n = n = {
              children: o
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })
      })
    })
  })
}