/** Chunk was on 34779 **/
/** chunk id: 185666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk731971 = require("./731971.js"),
  Chunk626135 = require("./626135.js"),
  Chunk379164 = require("./379164.js"),
  Chunk590965 = require("./590965.js"),
  Chunk981631 = require("./981631.js");
let h = "INVITE_MODAL_KEY";
class p extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), Chunk570140.Z.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, Chunk481060.Mr3)(h), Chunk570140.Z.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal), Chunk570140.Z.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal(e) {
    let {
      context: t
    } = e;
    u.Z.isOpen() && !(0, i.nfh)(h) && (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("86872").then(n.bind(n, 472365));
      return t => (0, r.jsx)(e, function(e) {
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
      }({}, t))
    }, {
      modalKey: h,
      contextKey: (0, i.VnL)(t),
      onCloseRequest: () => {
        let e = (0, s.e7)(),
          t = (0, s._J)();
        a.default.track(d.rMx.INVITE_ACCEPT_DISMISSED, {
          invite_code: e,
          guild_id: t
        }), c.Z.close()
      }
    })
  }
  handleCloseModal() {
    (0, Chunk481060.Mr3)(h)
  }
}
let f = new p