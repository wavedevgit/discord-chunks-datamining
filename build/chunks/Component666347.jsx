/** Chunk was on web.js **/
/** chunk id: 666347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk970984 = require("./970984.js"),
  Chunk258873 = require("./258873.js"),
  Chunk622242 = require("./622242.js"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk684013 = require("./684013.js"),
  Chunk964486 = require("./964486.js"),
  Chunk831062 = require("./831062.js"),
  Chunk976860 = require("./976860.js"),
  Chunk287809 = require("./287809.js"),
  Chunk144400 = require("./144400.jsx"),
  Chunk927813 = require("./927813.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk302614 = require("./302614.jsx"),
  Chunk395011 = require("./395011.js"),
  Chunk672910 = require("./672910.jsx"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk209943 = require("./209943.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = o().throttle(() => {
    m.A.increment({
      name: u.K.APP_CRASHED,
      tags: ["reason:".concat(l.J.UNHANDLED_JS_ERROR), "level:".concat(c.k.FATAL)]
    }, true)
  }, 100, {
    trailing: false
  }),
  D = 10 * Chunk927813.A.Millis.SECOND;

function L(e) {
  var t, n;
  let {
    error: a,
    onLock: o,
    onReload: l,
    onDisable: c,
    onCrashDisabled: u
  } = e, p = i.useMemo(() => new s.SpringValue(1), []), m = i.useRef(null), [g, b] = i.useState(false), [O, v] = i.useState(false), A = (0, d.bG)([E.default], () => E.default.getCurrentUser());
  (0, h.Ay)(() => (m.current = setTimeout(R, D), _.A.track(C.HAw.NOTIFICATION_VIEWED, {
    notif_type: T.KS.OverlayCrashed
  }), () => {
    null != m.current && clearTimeout(m.current)
  }));
  let R = i.useCallback(() => {
      p.set(0), null != m.current && clearTimeout(m.current), m.current = null, null == o || o(), null == u || u()
    }, [p, o, u]),
    P = i.useCallback(e => {
      O || (v(true), null == o || o(), _.A.track(C.HAw.NOTIFICATION_CLICKED, {
        notif_type: T.KS.OverlayCrashed,
        action_type: "reload"
      }, true), e.stopPropagation(), setTimeout(() => null == l ? true : l(), 200))
    }, [o, l, O]),
    L = i.useCallback(e => {
      e.stopPropagation(), e.shiftKey ? (b(true), null != m.current && clearTimeout(m.current)) : b(false)
    }, [b]),
    x = i.useCallback(e => {
      e.stopPropagation(), null == o || o(), null == c || c()
    }, [c, o]),
    M = (0, d.bG)([I.A], () => I.A.getFocusedRunningGame()),
    j = g ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: N.intl.string(N.t.mn4eXC)
      }), (0, r.jsxs)("div", {
        className: w.Xh,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: a.message
        }), (0, r.jsx)(f.Text, {
          variant: "text-xxs/normal",
          color: "text-subtle",
          children: (0, r.jsx)("code", {
            className: w.aY,
            children: (0, r.jsx)("pre", {
              children: a.stack
            })
          })
        })]
      })]
    }) : null,
    k = g ? null : N.intl.string(N.t.oEJEFq),
    U = null != (t = null == A ? true : A.isStaff()) && t || null != (n = null == A ? true : A.isStaffPersonal()) && n;
  return (0, r.jsx)(S.$, {
    title: N.intl.string(N.t.U38qZj),
    body: j,
    hint: U ? k : true,
    confirmText: N.intl.string(N.t.a3HlgJ),
    cancelText: null != M ? N.intl.string(N.t.qIYnPo) : true,
    icon: (0, r.jsx)(y.A, {
      width: 40,
      height: 40,
      className: w.Lo
    }),
    onNotificationClick: L,
    onConfirmClick: P,
    onCancelClick: null != M ? x : true,
    onDismissClick: o,
    expand: true,
    locked: true,
    notificationId: "overlay-crashed",
    index: 0,
    status: C.yFH.ACTIVE,
    containerRef: null,
    contentOpacity: p,
    className: w.Pl,
    wrapperClassName: w.fl
  })
}
class x extends Chunk64700.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, g.JK)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = I.A.getTargetPID();
    _.A.setOverlayCrashed(r, e), _.A.setInputLocked(true, r);
    let i = (0, O.St)(e, v.Ue.OutOfProcess, {
      extra: {
        info: t,
        location: n
      }
    });
    _.A.track(C.HAw.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: i,
      error_level: "fatal"
    }), P(), this.pid = r
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      showError: i
    } = this.state;
    return null != n ? i ? (0, r.jsx)(A.A, {
      className: w.wz,
      children: (0, r.jsx)(L, {
        error: n,
        onLock: () => {
          var e;
          let t = null != (e = this.pid) ? e : I.A.getTargetPID();
          _.A.setInputLocked(true, t), this.setState({
            showError: false
          })
        },
        onDisable: () => {
          let e = I.A.getFocusedRunningGame();
          null != e && p.A.toggleOverlay(e, false, false)
        },
        onCrashDisabled: () => {
          var e;
          let t = null != (e = this.pid) ? e : I.A.getTargetPID();
          _.A.updateOverlayState(t, v.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"), this.setState({
            showError: false
          })
        },
        onReload: () => {
          _.A.setReloadOverlay(I.A.getTargetPID()), this.setState({
            showError: false
          })
        }
      })
    }) : null : (0, r.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      error: null,
      showError: true,
      info: null
    }), R(this, "pid", null)
  }
}
let M = x