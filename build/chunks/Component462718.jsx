/** Chunk was on 9452 **/
/** chunk id: 462718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk603113 = require("./603113.js"),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.m7)(Chunk313789.n.LOGOUT_SIDEBAR_ITEM, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["2jxGen"]),
  icon: Chunk657707.PBZ,
  onClick: () => {
    (0, Chunk481060.h7j)(e => {
      var t, n;
      return (0, i.jsx)(u.ConfirmModal, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        header: d.intl.string(d.t["2jxGen"]),
        confirmText: d.intl.string(d.t["2jxGen"]),
        cancelText: d.intl.string(d.t["ETE/oK"]),
        onCancel: e.onClose,
        onConfirm: () => {
          l.flushSync(() => {
            (0, u.Mr3)(c.USER_SETTINGS_MODAL_KEY)
          }), s.Z.logout("settings")
        }
      }, e), n = n = {
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: d.intl.string(d.t.SUnWBA)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  }
})