/** Chunk was on 71832 **/
/** chunk id: 932711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk821020 = require("./821020.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk395530 = require("./395530.js");

function s(e) {
  let {
    children: t
  } = e, {
    notificationCenterVariant: n
  } = (0, l.pN)({
    location: "NotificationsInboxTooltip"
  }), s = n === l.jP.LEGACY ? o.intl.string(o.t.GSmTKC) : o.intl.string(o.t.HcoRu7);
  return (0, r.jsx)(i.ua7, {
    hideOnClick: true,
    spacing: 12,
    position: "right",
    text: s,
    tooltipClassName: a.listItemTooltip,
    children: e => {
      var n, i;
      return (0, r.jsx)("div", (n = function(e) {
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
      }({}, e), i = i = {
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}