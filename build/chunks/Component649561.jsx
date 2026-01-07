/** Chunk was on 63141 **/
/** chunk id: 649561, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk818405 = require("./818405.js"),
  Chunk587158 = require("./587158.js"),
  Chunk286379 = require("./286379.js"),
  Chunk579092 = require("./579092.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk490029 = require("./490029.js"),
  Chunk797614 = require("./797614.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk254761 = require("./254761.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk145597 = require("./145597.js"),
  Chunk338388 = require("./338388.js"),
  Chunk837268 = require("./837268.js"),
  Chunk692546 = require("./692546.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk995965 = require("./995965.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = 10 * Chunk70956.Z.Millis.SECOND,
  N = new Chunk579092.Yd("LegacyOverlayErrorBoundary");

function D() {
  let e = (0, E.getPID)(),
    t = (0, E.getRPCAuthToken)();
  (0, g.lW)({
    type: C.BmY.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: true,
      pid: e
    }]
  })
}
class k extends Chunk473749.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, T), p.Z.track(C.rMx.NOTIFICATION_VIEWED, {
      notif_type: j.n0.OverlayCrashed
    })
  }
  componentWillUnmount() {
    let {
      notificationTimer: e
    } = this;
    null != e && clearTimeout(e)
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
    return null == r ? null : (0, i.jsx)(_.Z, {
      contentDomRef: this.contentDomRef,
      observe: false,
      children: (0, i.jsx)(h.f6W, {
        theme: C.BRd.DARK,
        children: r => (0, i.jsxs)(h.P3F, {
          innerRef: this.contentDomRef,
          className: s()(r, P.container),
          onClick: e => e.stopPropagation(),
          children: [(0, i.jsx)(m.ZP, {
            expand: true,
            icon: (0, i.jsx)(v.Z, {
              width: 40,
              height: 40,
              className: P.notificationIcon
            }),
            title: I.intl.string(I.t.U38qZj),
            confirmText: I.intl.string(I.t.TzAl1a),
            onNotificationClick: this.handleNotificationClick,
            onConfirmClick: this.handleReload,
            onDismissClick: this.hideNotification,
            locked: false
          }), n && null != e ? (0, i.jsxs)(Z.ZP, {
            className: P.stackTrace,
            children: [(0, i.jsx)(Z.ZP.Bar, {
              children: "Error Details"
            }), (0, i.jsx)(Z.ZP.Content, {
              className: P.stackTraceCode,
              children: (0, i.jsx)("code", {
                className: P.code,
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
    super(...e), w(this, "state", {
      showTrace: false,
      busy: false
    }), w(this, "notificationTimer", true), w(this, "contentDomRef", r.createRef()), w(this, "hideNotification", () => {
      D();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }), w(this, "handleReload", e => {
      this.setState({
        busy: true
      }), D(), p.Z.track(C.rMx.NOTIFICATION_CLICKED, {
        notif_type: j.n0.OverlayCrashed,
        action_type: "reload"
      }, true), e.stopPropagation(), setTimeout(() => location.reload(true), 200)
    }), w(this, "handleNotificationClick", e => {
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
let R = l().throttle(() => {
  b.Z.increment({
    name: u.V.APP_CRASHED,
    tags: ["reason:".concat(c.v.UNHANDLED_JS_ERROR), "level:".concat(d.c.FATAL)]
  }, true)
}, 100, {
  trailing: false
});
class A extends Chunk473749.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, y.s1)().location;
    this.setState({
      error: e,
      info: t
    }), N.error("ErrorBoundary caught error: ".concat(e.message), {
      error: e,
      info: t
    });
    let i = (0, E.getPID)(),
      r = (0, E.getRPCAuthToken)();
    (0, g.lW)({
      type: C.BmY.DISPATCH,
      pid: (0, E.getPID)(),
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
    }), setImmediate(() => window.addEventListener("click", D));
    let a = (0, x.V6)(e, S.gl.Hook, {
      extra: t
    });
    p.Z.track(C.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: a,
      error_level: "fatal"
    }), R()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: r
    } = this.state;
    return null != n ? (0, i.jsx)(k, {
      error: n,
      info: r
    }) : (0, i.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), w(this, "state", {
      error: null,
      info: null
    })
  }
}
let L = A