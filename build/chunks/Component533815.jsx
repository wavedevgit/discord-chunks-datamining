/** Chunk was on 18877 **/
/** chunk id: 533815, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk51708 = require("./51708.js");

function d(e) {
  let {
    game: t,
    widgetType: r,
    iconSize: i = "refresh_sm",
    className: d
  } = e, {
    trackUserProfileEditAction: f
  } = (0, o.KZ)(), g = () => {
    (0, c.$b)(r, t.applicationId), f({
      action: "GAME_REMOVED",
      gameId: t.applicationId,
      widgetEdited: r
    })
  };
  return (0, n.jsx)(a.ua7, {
    text: s.intl.string(s.t.HUvyDQ),
    children: e => {
      var t, r;
      return (0, n.jsx)(a.P3F, (t = function(e) {
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
      }({}, e), r = r = {
        onClick: g,
        "aria-label": s.intl.string(s.t.HUvyDQ),
        className: l()(d, u.clickable),
        children: (0, n.jsx)(a.XHJ, {
          size: i,
          className: u.icon,
          color: a.TVs.colors.STATUS_DANGER
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}