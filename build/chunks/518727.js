/** Chunk was on 54433 **/
n.d(t, {
  Z: () => p
}), n(388685);
var i = n(255367),
  l = n(73800),
  r = n(120356),
  s = n.n(r),
  a = n(570140),
  o = n(70097),
  C = n(585483),
  d = n(402426),
  c = n(981631),
  u = n(794503);
let p = e => {
  let {
    children: t,
    isConfirmationStep: n,
    isWowMomentConfirmationEligible: r
  } = e, [p, x] = (0, l.useState)("entry"), f = (0, l.useRef)(null), h = (0, l.useRef)(null), j = () => {
    if (x("exit"), null != h.current) {
      var e;
      null == (e = h.current) || e.play()
    }
  }, {
    mediaUrls: m,
    isSuccess: _
  } = (0, d.Z)(r);
  (0, l.useEffect)(() => {
    function e() {
      j()
    }
    return C.S.subscribe(c.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
      C.S.unsubscribe(c.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
    }
  }, []);
  let L = r && n && _;
  return ((0, l.useEffect)(() => {
    L && a.Z.dispatch({
      type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
      value: L
    })
  }, [L]), (0, l.useEffect)(() => () => {
    a.Z.dispatch({
      type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
      value: !1
    })
  }, []), L) ? (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: u.videoContainer,
      children: [(0, i.jsx)("div", {
        className: u.entryAnimationContainer,
        children: (0, i.jsx)(o.Z, {
          playsInline: !0,
          muted: !0,
          autoPlay: !0,
          onEnded: () => {
            if (x("idle"), null != f.current) {
              var e;
              null == (e = f.current) || e.play()
            }
          },
          className: s()(u.video, "entry" === p ? u.visible : u.hidden),
          children: (0, i.jsx)("source", {
            src: m.modalGlowEntry
          })
        })
      }), (0, i.jsx)(o.Z, {
        ref: f,
        playsInline: !0,
        muted: !0,
        loop: !0,
        className: s()(u.video, "idle" === p ? u.visible : u.hidden),
        children: (0, i.jsx)("source", {
          src: m.modalGlowIdle
        })
      }), (0, i.jsx)(o.Z, {
        ref: h,
        playsInline: !0,
        muted: !0,
        className: s()(u.video, "exit" === p ? u.visible : u.hidden),
        children: (0, i.jsx)("source", {
          src: m.modalGlowExit
        })
      })]
    }), (0, i.jsx)("div", {
      className: u.entryAnimationContainer,
      children: t
    })]
  }) : t
}