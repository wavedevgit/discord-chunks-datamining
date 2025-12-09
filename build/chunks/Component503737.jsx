/** Chunk was on 83037 **/
/** chunk id: 503737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
    Chunk570140.Z.dispatch({
      type: "ACTIVITY_INVITE_MODAL_CLOSE"
    })
  };
class h extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), Chunk570140.Z.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), Chunk570140.Z.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  handleModalOpen(e) {
    let {
      activity: t,
      isPrivate: o,
      context: a
    } = e, h = a === s.IlC.POPOUT ? l.u1M : l.z1l;
    o ? (0, l.h7j)(e => {
      var n, o;
      return (0, r.jsx)(i.Modal, (n = u({
        title: c.intl.formatToPlainString(c.t["2tN7ih"], {
          name: t.name
        }),
        actions: [{
          variant: "primary",
          text: c.intl.string(c.t.BddRzS),
          onClick: e.onClose,
          autoFocus: true
        }]
      }, e), o = o = {
        children: (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          children: c.intl.string(c.t.MAxtks)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
      }), n))
    }, {
      onCloseCallback: f,
      modalKey: d
    }, h) : (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("5598").then(n.bind(n, 621566));
      return t => (0, r.jsx)(e, u({}, t))
    }, {
      onCloseCallback: f,
      modalKey: d,
      contextKey: h
    })
  }
  handleModalClose(e) {
    (0, l.Mr3)(d)
  }
}
let p = new h