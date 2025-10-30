/** Chunk was on web.js **/
/** chunk id: 22205, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk13941 = require("./13941.js"),
  Chunk818405 = require("./818405.js"),
  Chunk587158 = require("./587158.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk797614 = require("./797614.js"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk254761 = require("./254761.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk145597 = require("./145597.js"),
  Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk610394 = require("./610394.js"),
  Chunk380736 = require("./380736.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk460063 = require("./460063.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let D = o().throttle(() => {
    Chunk797614.Z.increment({
      name: Chunk286379.V.APP_CRASHED,
      tags: ["reason:".concat(Chunk818405.v.UNHANDLED_JS_ERROR), "level:".concat(Chunk587158.c.FATAL)]
    }, true)
  }, 100, {
    trailing: false
  }),
  x = 10 * Chunk70956.Z.Millis.SECOND;

function L(e) {
  var t, n;
  let {
    error: a,
    onLock: o,
    onReload: l,
    onDisable: c,
    onCrashDisabled: u
  } = e, _ = i.useMemo(() => new s.SpringValue(1), []), m = i.useRef(null), [g, y] = i.useState(false), [O, v] = i.useState(false), I = (0, d.e7)([E.default], () => E.default.getCurrentUser());
  (0, h.ZP)(() => (m.current = setTimeout(T, x), p.Z.track(N.rMx.NOTIFICATION_VIEWED, {
    notif_type: C.n0.OverlayCrashed
  }), () => {
    null != m.current && clearTimeout(m.current)
  }));
  let T = i.useCallback(() => {
      _.set(0), null != m.current && clearTimeout(m.current), m.current = null, null == o || o(), null == u || u()
    }, [_, o, u]),
    w = i.useCallback(e => {
      O || (v(true), null == o || o(), p.Z.track(N.rMx.NOTIFICATION_CLICKED, {
        notif_type: C.n0.OverlayCrashed,
        action_type: "reload"
      }, true), e.stopPropagation(), setTimeout(() => null == l ? true : l(), 200))
    }, [o, l, O]),
    D = i.useCallback(e => {
      e.stopPropagation(), e.shiftKey ? (y(true), null != m.current && clearTimeout(m.current)) : y(false)
    }, [y]),
    L = i.useCallback(e => {
      e.stopPropagation(), null == o || o(), null == c || c()
    }, [c, o]),
    M = (0, d.e7)([S.Z], () => S.Z.getFocusedRunningGame()),
    k = g ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-primary",
        children: R.intl.string(R.t.mn4eXC)
      }), (0, r.jsxs)("div", {
        className: P.stackTraceCode,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: a.message
        }), (0, r.jsx)(f.Text, {
          variant: "text-xxs/normal",
          color: "text-secondary",
          children: (0, r.jsx)("code", {
            className: P.code,
            children: (0, r.jsx)("pre", {
              children: a.stack
            })
          })
        })]
      })]
    }) : null,
    j = g ? null : R.intl.string(R.t.oEJEFq),
    U = null != (t = null == I ? true : I.isStaff()) && t || null != (n = null == I ? true : I.isStaffPersonal()) && n;
  return (0, r.jsx)(A.Y, {
    title: R.intl.string(R.t.U38qZj),
    body: k,
    hint: U ? j : true,
    confirmText: R.intl.string(R.t.a3HlgJ),
    cancelText: null != M ? R.intl.string(R.t.qIYnPo) : true,
    icon: (0, r.jsx)(b.Z, {
      width: 40,
      height: 40,
      className: P.notificationIcon
    }),
    onNotificationClick: D,
    onConfirmClick: w,
    onCancelClick: null != M ? L : true,
    onDismissClick: o,
    expand: true,
    locked: true,
    notificationId: "overlay-crashed",
    index: 0,
    status: N._1z.ACTIVE,
    containerRef: null,
    contentOpacity: _,
    className: P.errorNotificationContainer,
    wrapperClassName: P.errorNotificationWrapper
  })
}
class M extends Chunk647438.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, g.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = (0, O.getPID)();
    p.Z.setOverlayCrashed(r, e), p.Z.setInputLocked(true, r);
    let i = (0, v.V6)(e, I.gl.OutOfProcess, {
      extra: {
        info: t,
        location: n
      }
    });
    p.Z.track(N.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: i,
      error_level: "fatal"
    }), D(), this.pid = r
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      showError: i
    } = this.state;
    return null != require ? Chunk647438 ? (0, Chunk951288.jsx)(Chunk333031.Z, {
      className: Chunk460063.errorClickNotification,
      children: (0, Chunk951288.jsx)(L, {
        error: require,
        onLock: () => {
          var e;
          let t = null != (e = this.pid) ? module : (0, Chunk145597.getPID)();
          Chunk13245.Z.setInputLocked(true, exports), this.setState({
            showError: false
          })
        },
        onDisable: () => {
          let e = Chunk610394.Z.getFocusedRunningGame();
          null != module && Chunk224706.Z.toggleOverlay(module, false, false)
        },
        onCrashDisabled: () => {
          var e;
          let t = null != (e = this.pid) ? module : (0, Chunk145597.getPID)();
          Chunk13245.Z.updateOverlayState(exports, Chunk837268.mM.OVERLAY_CRASHED_DISABLED), this.setState({
            showError: false
          })
        },
        onReload: () => {
          Chunk13245.Z.setReloadOverlay((0, Chunk145597.getPID)()), this.setState({
            showError: false
          })
        }
      })
    }) : null : (0, Chunk951288.jsx)("div", {
      className: exports,
      children: module
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
let k = M