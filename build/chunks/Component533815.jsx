/** Chunk was on 73696 **/
/** chunk id: 533815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk51708 = require("./51708.js");

function d(e) {
  let {
    game: t,
    widgetType: n,
    iconSize: i = "refresh_sm",
    className: d
  } = e, {
    trackUserProfileEditAction: f
  } = (0, l.KZ)(), g = () => {
    (0, c.$b)(n, t.applicationId), o.uvj.announce(s.intl.string(s.t["08HmMj"])), f({
      action: "GAME_REMOVED",
      gameId: t.applicationId,
      widgetEdited: n
    })
  };
  return (0, r.jsx)(o.ua7, {
    text: s.intl.string(s.t.HUvyDQ),
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
        onClick: g,
        "aria-label": s.intl.string(s.t.HUvyDQ),
        className: a()(d, u.clickable),
        children: (0, r.jsx)(o.XHJ, {
          size: i,
          className: u.icon,
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