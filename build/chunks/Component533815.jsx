/** Chunk was on 12756 **/
/** chunk id: 533815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk51708 = require("./51708.js");

function d(e) {
  let {
    game: t,
    widgetType: n,
    iconSize: i = "refresh_sm",
    className: d
  } = e, u = () => {
    (0, a.$b)(n, t.applicationId)
  };
  return (0, r.jsx)(o.ua7, {
    text: c.intl.string(c.t.HUvyDQ),
    children: e => {
      var t, n;
      return (0, r.jsx)(o.P3F, (t = function(e) {
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
        onClick: u,
        "aria-label": c.intl.string(c.t.HUvyDQ),
        className: l()(d, s.clickable),
        children: (0, r.jsx)(o.XHJ, {
          size: i,
          className: s.icon,
          color: o.TVs.colors.STATUS_DANGER
        })
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
}