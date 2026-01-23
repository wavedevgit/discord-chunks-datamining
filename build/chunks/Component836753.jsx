/** Chunk was on 97492 **/
/** chunk id: 836753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk960736 = require("./960736.js"),
  Chunk954571 = require("./954571.js"),
  Chunk972387 = require("./972387.js"),
  Chunk539895 = require("./539895.js"),
  Chunk652215 = require("./652215.js");
let p = "INVITE_MODAL_KEY";
class h extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), i.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, l.OoC)(p), i.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal), i.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal(e) {
    let {
      context: t
    } = e;
    u.A.isOpen() && !(0, l.kBI)(p) && (0, l.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("83155"), n.e("57506")]).then(n.bind(n, 563038));
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
      modalKey: p,
      contextKey: (0, l.TId)(t),
      onCloseRequest: () => {
        let e = (0, a.p9)(),
          t = (0, a.xD)();
        o.default.track(d.HAw.INVITE_ACCEPT_DISMISSED, {
          invite_code: e,
          guild_id: t
        }), c.A.close()
      }
    })
  }
  handleCloseModal() {
    (0, l.OoC)(p)
  }
}
let f = new h