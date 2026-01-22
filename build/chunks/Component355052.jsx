/** Chunk was on 84018 **/
/** chunk id: 355052, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk258873 = require("./258873.js"),
  Chunk622242 = require("./622242.js"),
  Chunk731738 = require("./731738.js"),
  Chunk118356 = require("./118356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk996308 = require("./996308.js"),
  Chunk831062 = require("./831062.js"),
  Chunk471024 = require("./471024.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk144400 = require("./144400.jsx"),
  Chunk927813 = require("./927813.js"),
  Chunk9302 = require("./9302.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk941023 = require("./941023.js"),
  Chunk855790 = require("./855790.jsx"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk748498 = require("./748498.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = 10 * Chunk927813.A.Millis.SECOND,
  D = new Chunk118356.Vy("LegacyOverlayErrorBoundary");

function T() {
  let e = (0, v.getPID)(),
    t = (0, v.getRPCAuthToken)();
  (0, b.tN)({
    type: I.kGV.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: true,
      pid: e
    }]
  })
}
class R extends Chunk64700.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, P), f.A.track(I.HAw.NOTIFICATION_VIEWED, {
      notif_type: _.KS.OverlayCrashed
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
    return null == r ? null : (0, i.jsx)(S.A, {
      contentDomRef: this.contentDomRef,
      observe: false,
      children: (0, i.jsx)(p.NPJ, {
        theme: I.NJ8.DARK,
        children: r => (0, i.jsxs)(p.DUT, {
          innerRef: this.contentDomRef,
          className: l()(r, w.kL),
          onClick: e => e.stopPropagation(),
          children: [(0, i.jsx)(y.Ay, {
            expand: true,
            icon: (0, i.jsx)(m.A, {
              width: 40,
              height: 40,
              className: w.Lo
            }),
            title: C.intl.string(C.t.U38qZj),
            confirmText: C.intl.string(C.t.TzAl1a),
            onNotificationClick: this.handleNotificationClick,
            onConfirmClick: this.handleReload,
            onDismissClick: this.hideNotification,
            locked: false
          }), n && null != e ? (0, i.jsxs)(j.Ay, {
            className: w.a2,
            children: [(0, i.jsx)(j.Ay.Bar, {
              children: "Error Details"
            }), (0, i.jsx)(j.Ay.Content, {
              className: w.Xh,
              children: (0, i.jsx)("code", {
                className: w.aY,
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
    super(...e), N(this, "state", {
      showTrace: false,
      busy: false
    }), N(this, "notificationTimer", true), N(this, "contentDomRef", r.createRef()), N(this, "hideNotification", () => {
      T();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }), N(this, "handleReload", e => {
      this.setState({
        busy: true
      }), T(), f.A.track(I.HAw.NOTIFICATION_CLICKED, {
        notif_type: _.KS.OverlayCrashed,
        action_type: "reload"
      }, true), e.stopPropagation(), setTimeout(() => location.reload(true), 200)
    }), N(this, "handleNotificationClick", e => {
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
let k = a().throttle(() => {
  g.A.increment({
    name: u.K.APP_CRASHED,
    tags: ["reason:".concat(c.J.UNHANDLED_JS_ERROR), "level:".concat(d.k.FATAL)]
  }, true)
}, 100, {
  trailing: false
});
class L extends Chunk64700.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, A.JK)().location;
    this.setState({
      error: e,
      info: t
    }), D.error("ErrorBoundary caught error: ".concat(e.message), {
      error: e,
      info: t
    });
    let i = (0, v.getPID)(),
      r = (0, v.getRPCAuthToken)();
    (0, b.tN)({
      type: I.kGV.DISPATCH,
      pid: (0, v.getPID)(),
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
    let s = (0, E.St)(e, x.Ue.Hook, {
      extra: t
    });
    f.A.track(I.HAw.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: s,
      error_level: "fatal"
    }), k()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: r
    } = this.state;
    return null != n ? (0, i.jsx)(R, {
      error: n,
      info: r
    }) : (0, i.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      error: null,
      info: null
    })
  }
}
let M = L