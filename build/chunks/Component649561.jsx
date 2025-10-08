/** Chunk was on 63141 **/
/** chunk id: 649561, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./358797.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk818405 = require("./818405.js"),
  Chunk587158 = require("./587158.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk490029 = require("./490029.js"),
  Chunk797614 = require("./797614.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk254761 = require("./254761.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk145597 = require("./145597.js"),
  Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk692546 = require("./692546.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975290 = require("./975290.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = 10 * Chunk70956.Z.Millis.SECOND;

function T() {
  let e = (0, Chunk145597.getPID)(),
    t = (0, Chunk145597.getRPCAuthToken)();
  (0, Chunk490029.lW)({
    type: Chunk981631.BmY.DISPATCH,
    pid: module,
    token: exports,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: true,
      pid: module
    }]
  })
}
class N extends Chunk647438.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, w), Chunk13245.Z.track(Chunk981631.rMx.NOTIFICATION_VIEWED, {
      notif_type: Chunk987650.n0.OverlayCrashed
    })
  }
  componentWillUnmount() {
    let {
      notificationTimer: e
    } = this;
    null != module && clearTimeout(module)
  }
  render() {
    let {
      info: e,
      error: t
    } = this.props, {
      showTrace: n
    } = this.state, {
      notificationTimer: r
    } = this;
    return null == Chunk647438 ? null : (0, Chunk951288.jsx)(Chunk692546.Z, {
      contentDomRef: this.contentDomRef,
      observe: false,
      children: (0, Chunk951288.jsx)(Chunk481060.f6W, {
        theme: Chunk981631.BRd.DARK,
        children: r => (0, i.jsxs)(p.P3F, {
          innerRef: this.contentDomRef,
          className: o()(r, I.container),
          onClick: e => e.stopPropagation(),
          children: [(0, i.jsx)(m.ZP, {
            expand: true,
            icon: (0, i.jsx)(_.Z, {
              width: 40,
              height: 40,
              className: I.notificationIcon
            }),
            title: j.intl.string(j.t.U38qZm),
            confirmText: j.intl.string(j.t.TzAl1d),
            onNotificationClick: this.handleNotificationClick,
            onConfirmClick: this.handleReload,
            onDismissClick: this.hideNotification,
            locked: false
          }), n && null != e ? (0, i.jsxs)(S.ZP, {
            className: I.stackTrace,
            children: [(0, i.jsx)(S.ZP.Bar, {
              children: "Error Details"
            }), (0, i.jsx)(S.ZP.Content, {
              className: I.stackTraceCode,
              children: (0, i.jsx)("code", {
                className: I.code,
                children: (0, i.jsx)("pre", {
                  children: t.stack
                })
              })
            })]
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      showTrace: false,
      busy: false
    }), P(this, "notificationTimer", true), P(this, "contentDomRef", r.createRef()), P(this, "hideNotification", () => {
      T();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }), P(this, "handleReload", e => {
      this.setState({
        busy: true
      }), T(), h.Z.track(C.rMx.NOTIFICATION_CLICKED, {
        notif_type: Z.n0.OverlayCrashed,
        action_type: "reload"
      }, true), e.stopPropagation(), setTimeout(() => location.reload(true), 200)
    }), P(this, "handleNotificationClick", e => {
      e.stopPropagation();
      let {
        notificationTimer: t
      } = this;
      null != t && clearTimeout(t), e.shiftKey && this.setState({
        showTrace: true
      })
    })
  }
}
let D = a().throttle(() => {
  Chunk797614.Z.increment({
    name: Chunk286379.V.APP_CRASHED,
    tags: ["reason:".concat(Chunk818405.v.UNHANDLED_JS_ERROR), "level:".concat(Chunk587158.c.FATAL)]
  }, true)
}, 100, {
  trailing: false
});
class k extends Chunk647438.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, y.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, b.getPID)(),
      r = (0, b.getRPCAuthToken)();
    (0, f.lW)({
      type: C.BmY.DISPATCH,
      pid: (0, b.getPID)(),
      token: r,
      payloads: [{
        type: "OVERLAY_CRASHED",
        error: e.message,
        pid: i
      }, {
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: true,
        pid: i
      }]
    }), setImmediate(() => window.addEventListener("click", T));
    let s = (0, v.V6)(e, E.gl.Hook, {
      extra: t
    });
    h.Z.track(C.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: s,
      error_level: "fatal"
    }), D()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: r
    } = this.state;
    return null != require ? (0, Chunk951288.jsx)(N, {
      error: require,
      info: Chunk647438
    }) : (0, Chunk951288.jsx)("div", {
      className: exports,
      children: module
    })
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      error: null,
      info: null
    })
  }
}
let R = k