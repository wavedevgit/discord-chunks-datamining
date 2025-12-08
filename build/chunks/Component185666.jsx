/** Chunk was on 46467 **/
/** chunk id: 185666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk978986 = require("./978986.js"),
  Chunk626135 = require("./626135.js"),
  Chunk379164 = require("./379164.js"),
  Chunk590965 = require("./590965.js"),
  Chunk981631 = require("./981631.js");
let f = "INVITE_MODAL_KEY";
class h extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), Chunk570140.Z.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, Chunk481060.Mr3)(f), Chunk570140.Z.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal), Chunk570140.Z.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal(e) {
    let {
      context: t
    } = e;
    u.Z.isOpen() && !(0, i.nfh)(f) && (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("34061"), n.e("23792")]).then(n.bind(n, 472365));
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
      modalKey: f,
      contextKey: (0, i.VnL)(t),
      onCloseRequest: () => {
        let e = (0, a.e7)(),
          t = (0, a._J)();
        s.default.track(d.rMx.INVITE_ACCEPT_DISMISSED, {
          invite_code: e,
          guild_id: t
        }), c.Z.close()
      }
    })
  }
  handleCloseModal() {
    (0, Chunk481060.Mr3)(f)
  }
}
let p = new h