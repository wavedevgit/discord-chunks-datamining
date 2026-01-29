/** Chunk was on 84018 **/
/** chunk id: 714983, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk684013 = require("./684013.js"),
  Chunk471024 = require("./471024.jsx"),
  Chunk652215 = require("./652215.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk64700.Component {
  getStyle() {
    let e, t, n, i, {
      props: {
        position: r,
        zIndex: s
      }
    } = this;
    switch (r) {
      case o.G6Q.TOP_LEFT:
      case o.G6Q.BOTTOM_LEFT:
        e = 0;
        break;
      default:
        t = 0
    }
    switch (r) {
      case o.G6Q.BOTTOM_LEFT:
      case o.G6Q.BOTTOM_RIGHT:
        n = 0;
        break;
      default:
        i = 0
    }
    return {
      left: e,
      right: t,
      bottom: n,
      top: i,
      zIndex: s
    }
  }
  render() {
    var e, t;
    let {
      props: n
    } = this, {
      locked: r,
      notification: s
    } = n, {
      props: o
    } = s, {
      renderFooter: c,
      onNotificationShow: d,
      onDismissClick: u,
      onNotificationClick: p,
      onConfirmClick: h,
      onCancelClick: f
    } = o, g = function(e, t) {
      if (null == e) return {};
      var n, i, r, s = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
        return s
      }
      if (s = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.getOwnPropertyNames(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
          return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
      return s
    }(o, ["renderFooter", "onNotificationShow", "onDismissClick", "onNotificationClick", "onConfirmClick", "onCancelClick"]);
    return (0, i.jsx)(l.Ay, (e = function(e) {
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
    }({}, g), t = t = {
      locked: r,
      onNotificationShow: this.handleNotificationShow,
      onDismissClick: null != u ? this.handleDismissClick : true,
      onNotificationClick: null != p ? this.handleNotificationClick : null,
      onConfirmClick: null != h ? this.handleConfirmClick : null,
      onCancelClick: null != f ? this.handleCancelClick : null,
      renderFooter: this.renderFooter,
      expand: !r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
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
      s.A.updateNotificationStatus(t), null == n || n(e, t)
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