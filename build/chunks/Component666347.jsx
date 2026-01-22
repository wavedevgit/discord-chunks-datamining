/** Chunk was on web.js **/
/** chunk id: 666347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk432022 = require("./432022.js"),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = s().throttle(() => {
    m.A.increment({
      name: u.K.APP_CRASHED,
      tags: ["reason:".concat(l.J.UNHANDLED_JS_ERROR), "level:".concat(c.k.FATAL)]
    }, true)
  }, 100, {
    trailing: false
  }),
  D = 10 * Chunk927813.A.Millis.SECOND;

function x(e) {
  var t, n;
  let {
    error: a,
    onLock: s,
    onReload: l,
    onDisable: c,
    onCrashDisabled: u
  } = e, p = i.useMemo(() => new o.SpringValue(1), []), m = i.useRef(null), [g, y] = i.useState(false), [O, A] = i.useState(false), v = (0, d.bG)([E.default], () => E.default.getCurrentUser());
  (0, h.Ay)(() => (m.current = setTimeout(w, D), _.A.track(C.HAw.NOTIFICATION_VIEWED, {
    notif_type: T.KS.OverlayCrashed
  }), () => {
    null != m.current && clearTimeout(m.current)
  }));
  let w = i.useCallback(() => {
      p.set(0), null != m.current && clearTimeout(m.current), m.current = null, null == s || s(), null == u || u()
    }, [p, s, u]),
    P = i.useCallback(e => {
      O || (A(true), null == s || s(), _.A.track(C.HAw.NOTIFICATION_CLICKED, {
        notif_type: T.KS.OverlayCrashed,
        action_type: "reload"
      }, true), e.stopPropagation(), setTimeout(() => null == l ? true : l(), 200))
    }, [s, l, O]),
    x = i.useCallback(e => {
      e.stopPropagation(), e.shiftKey ? (y(true), null != m.current && clearTimeout(m.current)) : y(false)
    }, [y]),
    L = i.useCallback(e => {
      e.stopPropagation(), null == s || s(), null == c || c()
    }, [c, s]),
    j = (0, d.bG)([S.A], () => S.A.getFocusedRunningGame()),
    M = g ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: N.intl.string(N.t.mn4eXC)
      }), (0, r.jsxs)("div", {
        className: R.Xh,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: a.message
        }), (0, r.jsx)(f.Text, {
          variant: "text-xxs/normal",
          color: "text-subtle",
          children: (0, r.jsx)("code", {
            className: R.aY,
            children: (0, r.jsx)("pre", {
              children: a.stack
            })
          })
        })]
      })]
    }) : null,
    k = g ? null : N.intl.string(N.t.oEJEFq),
    U = null != (t = null == v ? true : v.isStaff()) && t || null != (n = null == v ? true : v.isStaffPersonal()) && n;
  return (0, r.jsx)(I.$, {
    title: N.intl.string(N.t.U38qZj),
    body: M,
    hint: U ? k : true,
    confirmText: N.intl.string(N.t.a3HlgJ),
    cancelText: null != j ? N.intl.string(N.t.qIYnPo) : true,
    icon: (0, r.jsx)(b.A, {
      width: 40,
      height: 40,
      className: R.Lo
    }),
    onNotificationClick: x,
    onConfirmClick: P,
    onCancelClick: null != j ? L : true,
    onDismissClick: s,
    expand: true,
    locked: true,
    notificationId: "overlay-crashed",
    index: 0,
    status: C.yFH.ACTIVE,
    containerRef: null,
    contentOpacity: p,
    className: R.Pl,
    wrapperClassName: R.fl
  })
}
class L extends Chunk64700.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, g.JK)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = S.A.getTargetPID();
    _.A.setOverlayCrashed(r, e), _.A.setInputLocked(true, r);
    let i = (0, O.St)(e, A.Ue.OutOfProcess, {
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
    return null != n ? i ? (0, r.jsx)(v.A, {
      className: R.wz,
      children: (0, r.jsx)(x, {
        error: n,
        onLock: () => {
          var e;
          let t = null != (e = this.pid) ? e : S.A.getTargetPID();
          _.A.setInputLocked(true, t), this.setState({
            showError: false
          })
        },
        onDisable: () => {
          let e = S.A.getFocusedRunningGame();
          null != e && p.A.toggleOverlay(e, false, false)
        },
        onCrashDisabled: () => {
          var e;
          let t = null != (e = this.pid) ? e : S.A.getTargetPID();
          _.A.updateOverlayState(t, A.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"), this.setState({
            showError: false
          })
        },
        onReload: () => {
          _.A.setReloadOverlay(S.A.getTargetPID()), this.setState({
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
    super(...e), w(this, "state", {
      error: null,
      showError: true,
      info: null
    }), w(this, "pid", null)
  }
}
let j = L