/** Chunk was on 97492 **/
/** chunk id: 39324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk353640 = require("./353640.js"),
  Chunk849077 = require("./849077.js");
let i = {
    [Chunk849077.Ur.UNREAD]: true,
    [Chunk849077.Ur.TODAY]: true,
    [Chunk849077.Ur.YESTERDAY]: true,
    [Chunk849077.Ur.OLDER]: true
  },
  s = {
    [Chunk849077.Ur.UNREAD]: true,
    [Chunk849077.Ur.TODAY]: false,
    [Chunk849077.Ur.YESTERDAY]: false,
    [Chunk849077.Ur.OLDER]: false
  },
  a = (0, Chunk353640.v)((e, t) => ({
    messageCategoryOpenStates: i,
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
        messageCategoryOpenStates: t ? s : i
      })
    }
  }))