/** Chunk was on 46746 **/
/** chunk id: 565574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812652 = require("./812652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk79309 = require("./79309.js");

function d(e) {
  let {
    align: t = "left",
    useSimplifiedMenu: n = false
  } = e, d = i.useRef(null);
  return <s.yRy targetElementRef={d} position={"top"} align={t} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return n ? (0, r.jsx)(o.l9, {
        onClose: t,
        onSelect: true
      }) : (0, r.jsx)(o.ZP, {
        onClose: t,
        onSelect: true
      })
    }}>{e => {
      var t, n;
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
        "aria-label": a.intl.string(a.t["+1H47u"]),
        color: l.zx.Colors.PRIMARY,
        className: c.streamOptionsButton,
        buttonRef: d
      }, e), n = n = {
        children: (0, r.jsx)(s.ewm, {
          className: c.settingsIcon,
          size: "refresh_sm",
          color: "currentColor"
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
    }}</s.yRy>
}