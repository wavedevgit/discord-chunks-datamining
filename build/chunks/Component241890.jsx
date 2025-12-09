/** Chunk was on 64271 **/
/** chunk id: 241890, original params: e,t,n (module,exports,require) **/
let r, i;
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk341382 = require("./341382.js"),
  Chunk981631 = require("./981631.js");
let u = null;

function d(e) {
  null != r && e ? r() : null != i && i(), r = null, i = null
}
let f = {
  init() {
    Chunk570140.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
      let t;
      d(false), u = e.context, r = e.resolve, i = e.reject, c.e3s === e.context && (t = false, (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("88470"), n.e("77927"), n.e("29393")]).then(n.bind(n, 134817));
        return n => {
          var r, i, {
              onClose: o
            } = n,
            a = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
            }(n, ["onClose"]);
          return (0, l.jsx)(e, (r = function(e) {
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
          }({}, a), i = i = {
            onClose: e => {
              t = e, o()
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      }, {
        onCloseCallback: () => {
          (0, s.M)(t)
        }
      }))
    }), Chunk570140.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
      let {
        shouldContinue: t
      } = e;
      u = null, d(t)
    }), Chunk570140.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
      let {
        locked: t
      } = e;
      t && null != u && (u = null, d(false))
    })
  }
}