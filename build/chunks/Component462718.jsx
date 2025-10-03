/** Chunk was on 9452 **/
/** chunk id: 462718, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
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
let d = (0, Chunk509613.m7)(Chunk313789.n.LOGOUT_SIDEBAR_ITEM, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["2jxGen"]),
  icon: Chunk657707.PBZ,
  onClick: () => {
    (0, Chunk481060.h7j)(t => {
      var e, n;
      return (0, i.jsx)(r.ConfirmModal, (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({
        header: E.intl.string(E.t["2jxGen"]),
        confirmText: E.intl.string(E.t["2jxGen"]),
        cancelText: E.intl.string(E.t["ETE/oK"]),
        onCancel: t.onClose,
        onConfirm: () => {
          l.flushSync(() => {
            (0, r.Mr3)(c.USER_SETTINGS_MODAL_KEY)
          }), s.Z.logout("settings")
        }
      }, t), n = n = {
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          children: E.intl.string(E.t.SUnWBA)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), e))
    })
  },
  buildLayout: () => []
})