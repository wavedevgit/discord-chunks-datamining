/** Chunk was on 12416 **/
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(392711),
  o = n.n(l),
  a = n(642128),
  s = n(818405),
  c = n(587158),
  u = n(286379),
  d = n(442837),
  f = n(481060),
  m = n(224706),
  p = n(13245),
  h = n(615287),
  b = n(493773),
  v = n(797614),
  g = n(703656),
  y = n(594174),
  E = n(254761),
  O = n(70956),
  S = n(960048),
  j = n(145597),
  x = n(333031),
  Z = n(610394),
  C = n(380736),
  w = n(987650),
  P = n(981631),
  N = n(388032),
  I = n(226643);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = o().throttle(() => {
    v.Z.increment({
      name: u.V.APP_CRASHED,
      tags: ["reason:".concat(s.v.UNHANDLED_JS_ERROR), "level:".concat(c.c.FATAL)]
    }, !0)
  }, 100, {
    trailing: !1
  }),
  T = 10 * O.Z.Millis.SECOND;

function A(e) {
  var t, n;
  let {
    error: l,
    onLock: o,
    onReload: s,
    onDisable: c,
    onCrashDisabled: u
  } = e, m = i.useMemo(() => new a.SpringValue(1), []), h = i.useRef(null), [v, g] = i.useState(!1), [O, S] = i.useState(!1), j = (0, d.e7)([y.default], () => y.default.getCurrentUser());
  (0, b.ZP)(() => (h.current = setTimeout(x, T), p.Z.track(P.rMx.NOTIFICATION_VIEWED, {
    notif_type: w.n0.OverlayCrashed
  }), () => {
    null != h.current && clearTimeout(h.current)
  }));
  let x = i.useCallback(() => {
      m.set(0), null != h.current && clearTimeout(h.current), h.current = null, null == o || o(), null == u || u()
    }, [m, o, u]),
    _ = i.useCallback(e => {
      !O && (S(!0), null == o || o(), p.Z.track(P.rMx.NOTIFICATION_CLICKED, {
        notif_type: w.n0.OverlayCrashed,
        action_type: "reload"
      }, !0), e.stopPropagation(), setTimeout(() => null == s ? void 0 : s(), 200))
    }, [o, s, O]),
    R = i.useCallback(e => {
      e.stopPropagation(), e.shiftKey ? (g(!0), null != h.current && clearTimeout(h.current)) : g(!1)
    }, [g]),
    A = i.useCallback(e => {
      e.stopPropagation(), null == o || o(), null == c || c()
    }, [c, o]),
    D = (0, d.e7)([Z.ZP], () => Z.ZP.getFocusedRunningGame()),
    k = v ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-primary",
        children: N.NW.string(N.t.mn4eXF)
      }), (0, r.jsxs)("div", {
        className: I.stackTraceCode,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: l.message
        }), (0, r.jsx)(f.Text, {
          variant: "text-xxs/normal",
          color: "text-secondary",
          children: (0, r.jsx)("code", {
            className: I.code,
            children: (0, r.jsx)("pre", {
              children: l.stack
            })
          })
        })]
      })]
    }) : null,
    M = v ? null : N.NW.string(N.t.oEJEFh),
    L = null !== (t = null == j ? void 0 : j.isStaff()) && void 0 !== t && t || null !== (n = null == j ? void 0 : j.isStaffPersonal()) && void 0 !== n && n;
  return (0, r.jsx)(C.Yj, {
    title: N.NW.string(N.t.U38qZm),
    body: k,
    hint: L ? M : void 0,
    confirmText: N.NW.string(N.t.a3HlgI),
    cancelText: null != D ? N.NW.string(N.t.qIYnPj) : void 0,
    icon: (0, r.jsx)(E.Z, {
      width: 40,
      height: 40,
      className: I.notificationIcon
    }),
    onNotificationClick: R,
    onConfirmClick: _,
    onCancelClick: null != D ? A : void 0,
    onDismissClick: o,
    expand: !0,
    locked: !0,
    notificationId: "overlay-crashed",
    index: 0,
    status: P._1z.ACTIVE,
    containerRef: null,
    contentOpacity: m,
    className: I.errorNotificationContainer,
    wrapperClassName: I.errorNotificationWrapper
  })
}
class D extends i.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, g.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = (0, j.getPID)();
    p.Z.setOverlayCrashed(r, e), p.Z.setInputLocked(!0, r);
    let i = S.Z.captureCrash(e, {
      extra: t
    });
    p.Z.track(P.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: i,
      error_level: "fatal"
    }), R(), this.pid = r
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      showError: i
    } = this.state;
    return null != n ? i ? (0, r.jsx)(x.Z, {
      className: I.errorClickNotification,
      children: (0, r.jsx)(A, {
        error: n,
        onLock: () => {
          var e;
          let t = null !== (e = this.pid) && void 0 !== e ? e : (0, j.getPID)();
          p.Z.setInputLocked(!0, t), this.setState({
            showError: !1
          })
        },
        onDisable: () => {
          let e = Z.ZP.getFocusedRunningGame();
          null != e && m.Z.toggleOverlay(e, !1, !1)
        },
        onCrashDisabled: () => {
          var e;
          let t = null !== (e = this.pid) && void 0 !== e ? e : (0, j.getPID)();
          p.Z.updateOverlayState(t, h.mM.OVERLAY_CRASHED_DISABLED), this.setState({
            showError: !1
          })
        },
        onReload: () => {
          p.Z.setReloadOverlay((0, j.getPID)()), this.setState({
            showError: !1
          })
        }
      })
    }) : null : (0, r.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      error: null,
      showError: !0,
      info: null
    }), _(this, "pid", null)
  }
}
let k = D