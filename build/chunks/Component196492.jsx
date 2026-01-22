/** Chunk was on 97492 **/
/** chunk id: 196492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
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
}
let d = "ActivityInviteManager",
  f = () => {
    a.h.dispatch({
      type: "ACTIVITY_INVITE_MODAL_CLOSE"
    })
  };
class p extends Chunk272355.A {
  _initialize() {
    a.h.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), a.h.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  _terminate() {
    a.h.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), a.h.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  handleModalOpen(e) {
    let {
      activity: t,
      isPrivate: a,
      context: s
    } = e, p = s === o.BRT.POPOUT ? i.KX8 : i.SYi;
    a ? (0, i.qfG)(e => {
      var n, a;
      return (0, r.jsx)(l.Modal, (n = u({
        title: c.intl.formatToPlainString(c.t["2tN7ih"], {
          name: t.name
        }),
        actions: [{
          variant: "primary",
          text: c.intl.string(c.t.BddRzS),
          onClick: e.onClose,
          autoFocus: true
        }]
      }, e), a = a = {
        children: (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: c.intl.string(c.t.MAxtks)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
      }), n))
    }, {
      onCloseCallback: f,
      modalKey: d
    }, p) : (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("27759").then(n.bind(n, 555570));
      return t => (0, r.jsx)(e, u({}, t))
    }, {
      onCloseCallback: f,
      modalKey: d,
      contextKey: p
    })
  }
  handleModalClose(e) {
    (0, i.OoC)(d)
  }
}
let h = new p