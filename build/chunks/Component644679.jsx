/** Chunk was on 1272 **/
/** chunk id: 644679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "CollectiblesExpiryModal";
class g extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("POST_CONNECTION_OPEN", this.handleMaybeOpenModal), Chunk570140.Z.subscribe("CURRENT_USER_UPDATE", this.handleMaybeOpenModal)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("POST_CONNECTION_OPEN", this.handleMaybeOpenModal), Chunk570140.Z.unsubscribe("CURRENT_USER_UPDATE", this.handleMaybeOpenModal), null != this.timeout && (clearTimeout(this.timeout), this.timeout = null)
  }
  constructor(...e) {
    super(...e), p(this, "timeout", null), p(this, "handleMaybeOpenModal", () => {
      var e;
      let t = s.default.getCurrentUser(),
        n = null == t || null == (e = t.avatarDecoration) ? true : e.expiresAt;
      null != n && (this.maybeOpenModal() || (null != this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(this.maybeOpenModal, 1e3 * n - Date.now() + 1e3)))
    }), p(this, "maybeOpenModal", () => {
      var e, t;
      let l = s.default.getCurrentUser(),
        a = o.Z.getState(),
        g = null == l || null == (e = l.avatarDecoration) ? true : e.skuId,
        m = null == l || null == (t = l.avatarDecoration) ? true : t.expiresAt,
        h = null != g && u.Hl.includes(g);
      return null != l && !h && !!(null != m && 1e3 * m < Date.now()) && a !== d.hes.RTC_CONNECTED && ((0, i.Mr3)(f), (0, i.ZDy)(async () => {
        let {
          default: e
        } = await n.e("77370").then(n.bind(n, 83950));
        return t => (0, r.jsx)(e, function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        }(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              p(e, t, n[t])
            })
          }
          return e
        }({}, t), {
          skuId: g
        }))
      }, {
        modalKey: f
      }), c.Z.captureMessage("Collectible expiry modal shown"), true)
    })
  }
}
let m = new g