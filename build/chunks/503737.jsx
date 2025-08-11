/** Chunk was on 34779 **/
/** chunk id: 503737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
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
  h = () => {
    Chunk570140.Z.dispatch({
      type: "ACTIVITY_INVITE_MODAL_CLOSE"
    })
  };
class p extends Chunk317770.Z {
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
      context: s
    } = e, p = s === a.IlC.POPOUT ? l.u1M : l.z1l;
    o ? (0, l.h7j)(e => {
      var n, o;
      return <i.Modal{...n = u({
        title: c.intl.formatToPlainString(c.t["2tN7io"], {
          name: t.name
        }),
        actions: [{
          variant: "primary",
          text: c.intl.string(c.t.BddRzc),
          onClick: e.onClose,
          autoFocus: true
        }]
      }, e), o = o = {
        children: (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          children: c.intl.string(c.t.MAxtkp)
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
      }), n} />
    }, {
      onCloseCallback: h,
      modalKey: d
    }, p) : (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("95463").then(n.bind(n, 699099));
      return t => <e{...u({}, t)} />
    }, {
      onCloseCallback: h,
      modalKey: d,
      contextKey: p
    })
  }
  handleModalClose(e) {
    (0, l.Mr3)(d)
  }
}
let f = new p