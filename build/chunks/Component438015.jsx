/** Chunk was on 63141 **/
/** chunk id: 438015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk473749.Component {
  getStyle() {
    let e, t, n, i, {
      props: {
        position: r,
        zIndex: o
      }
    } = this;
    switch (Chunk473749) {
      case Chunk981631._vf.TOP_LEFT:
      case Chunk981631._vf.BOTTOM_LEFT:
        e = 0;
        break;
      default:
        t = 0
    }
    switch (Chunk473749) {
      case Chunk981631._vf.BOTTOM_LEFT:
      case Chunk981631._vf.BOTTOM_RIGHT:
        n = 0;
        break;
      default:
        i = 0
    }
    return {
      left: module,
      right: exports,
      bottom: require,
      top: Chunk54381,
      zIndex: Chunk13245
    }
  }
  render() {
    var e, t;
    let {
      props: {
        locked: n,
        notification: {
          props: {
            renderFooter: r,
            onNotificationShow: o,
            onDismissClick: s,
            onNotificationClick: c,
            onConfirmClick: d,
            onCancelClick: u
          }
        }
      }
    } = this, h = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          o = Object.keys(e);
        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(this.props.notification.props, ["renderFooter", "onNotificationShow", "onDismissClick", "onNotificationClick", "onConfirmClick", "onCancelClick"]);
    return (0, Chunk54381.jsx)(Chunk593481.ZP, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          a(e, t, n[t])
        })
      }
      return e
    }({}, h), t = t = {
      locked: require,
      onNotificationShow: this.handleNotificationShow,
      onDismissClick: null != Chunk981631 ? this.handleDismissClick : true,
      onNotificationClick: null != c ? this.handleNotificationClick : null,
      onConfirmClick: null != d ? this.handleConfirmClick : null,
      onCancelClick: null != u ? this.handleCancelClick : null,
      renderFooter: this.renderFooter,
      expand: !require
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module))
  }
  constructor(...e) {
    super(...e), a(this, "handleNotificationShow", () => {
      let {
        id: e,
        props: {
          onNotificationShow: t
        }
      } = this.props.notification;
      t(e)
    }), a(this, "handleDismissClick", e => {
      let {
        id: t,
        props: {
          onDismissClick: n
        }
      } = this.props.notification;
      o.Z.updateNotificationStatus(t), null == n || n(e, t)
    }), a(this, "handleNotificationClick", e => {
      let {
        id: t,
        props: {
          onNotificationClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), a(this, "handleConfirmClick", e => {
      let {
        id: t,
        props: {
          onConfirmClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), a(this, "handleCancelClick", e => {
      let {
        id: t,
        props: {
          onCancelClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), a(this, "renderFooter", e => {
      let {
        id: t,
        props: {
          renderFooter: n
        }
      } = this.props.notification, i = this.props.locked;
      return null != n ? n(e, t, i) : null
    })
  }
}
let d = c