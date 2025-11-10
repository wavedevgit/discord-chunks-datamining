/** Chunk was on 47863 **/
/** chunk id: 565574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812652 = require("./812652.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk439003 = require("./439003.js");

function d(e) {
  let {
    align: t = "left"
  } = e, n = i.useRef(null);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: n,
    position: "top",
    align: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(s.ZP, {
        onClose: t,
        onSelect: true
      })
    },
    children: e => {
      var t, i;
      return (0, r.jsx)(l.zx, (t = function(e) {
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
      }({
        size: l.zx.Sizes.ICON,
        "aria-label": a.intl.string(a.t["+1H47t"]),
        color: l.zx.Colors.PRIMARY,
        className: c.streamOptionsButton,
        buttonRef: n
      }, e), i = i = {
        children: (0, r.jsx)(o.ewm, {
          className: c.settingsIcon,
          size: "refresh_sm",
          color: "currentColor"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}