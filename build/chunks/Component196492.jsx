/** Chunk was on 77870 **/
/** chunk id: 196492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
  p = () => {
    s.h.dispatch({
      type: "ACTIVITY_INVITE_MODAL_CLOSE"
    })
  };
class h extends Chunk272355.A {
  _initialize() {
    s.h.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.h.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  _terminate() {
    s.h.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.h.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  handleModalOpen(e) {
    let {
      activity: t,
      isPrivate: s,
      context: a
    } = e, h = a === o.BRT.POPOUT ? i.KX8 : i.SYi;
    s ? (0, i.qfG)(e => {
      var n, s;
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
      }, e), s = s = {
        children: (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: c.intl.string(c.t.MAxtks)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
      }), n))
    }, {
      onCloseCallback: p,
      modalKey: d
    }, h) : (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("27759").then(n.bind(n, 555570));
      return t => (0, r.jsx)(e, u({}, t))
    }, {
      onCloseCallback: p,
      modalKey: d,
      contextKey: h
    })
  }
  handleModalClose(e) {
    (0, i.OoC)(d)
  }
}
let f = new h