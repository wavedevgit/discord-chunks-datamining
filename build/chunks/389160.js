/** Chunk was on 30437 **/
/** chunk id: 389160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk191336 = require("./191336.js"),
  Chunk982183 = require("./982183.js");
let l = {
    [Chunk982183.KZ.UNREAD]: true,
    [Chunk982183.KZ.TODAY]: true,
    [Chunk982183.KZ.YESTERDAY]: true,
    [Chunk982183.KZ.OLDER]: true
  },
  o = {
    [Chunk982183.KZ.UNREAD]: true,
    [Chunk982183.KZ.TODAY]: false,
    [Chunk982183.KZ.YESTERDAY]: false,
    [Chunk982183.KZ.OLDER]: false
  },
  a = (0, Chunk191336.U)((e, t) => ({
    messageCategoryOpenStates: l,
    getOpenState: e => t().messageCategoryOpenStates[e],
    toggleOpenState: t => {
      e(e => {
        var n, r;
        return {
          messageCategoryOpenStates: (n = function(e) {
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
          }({}, e.messageCategoryOpenStates), r = r = {
            [t]: !e.messageCategoryOpenStates[t]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n)
        }
      })
    },
    setOpenStateFromUnreads: t => {
      e({
        messageCategoryOpenStates: t ? o : l
      })
    }
  }))