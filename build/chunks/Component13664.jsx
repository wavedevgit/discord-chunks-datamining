/** Chunk was on 9109 **/
/** chunk id: 13664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk257808 = require("./257808.js");

function o(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: n
  } = e, o = t ? l.intl.string(l.t.xAT8lJ) : l.intl.string(l.t["Y+18hY"]);
  return (0, r.jsx)("div", {
    className: a.notificationToggle,
    children: (0, r.jsx)(i.XZJ, {
      type: i.XZJ.Types.INVERTED,
      size: 14,
      className: a.__invalid_checkbox,
      value: t,
      onChange: function() {
        n(!t)
      },
      children: (0, r.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, r.jsx)(i.ua7, {
          position: "bottom",
          tooltipClassName: a.tooltip,
          text: l.intl.string(l.t["4A/xnZ"]),
          "aria-label": l.intl.string(l.t["4A/xnZ"]),
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