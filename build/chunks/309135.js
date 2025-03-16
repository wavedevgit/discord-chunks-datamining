/** Chunk was on 46408 **/
n.r(t), n.d(t, {
  default: () => h
});
var i = n(200651),
  r = n(192379),
  l = n(215569),
  a = n(481060),
  o = n(852860),
  s = n(313201),
  c = n(944163),
  d = n(266395),
  u = n(187565),
  f = n(577809),
  m = n(592286),
  _ = n(388032),
  v = n(389853);
let g = () => (0, i.jsx)(o.Z, {
    submitting: !1,
    message: _.NW.string(_.t["8g514e"]),
    onReset: () => {
      (0, d.PE)(!1)
    },
    onResetText: _.NW.string(_.t["ETE/oK"]),
    onSave: () => {
      (0, d.PE)(!1), (0, a.Mr3)(m.Pn)
    },
    onSaveText: _.NW.string(_.t["Xt+UaW"]),
    onSaveButtonColor: a.Ttl.RED
  }),
  h = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: o,
      onComplete: m,
      inviteKey: _,
      isPreview: h = !1
    } = e, p = (0, d.rb)(e => e.shouldShowWarning), {
      verificationForm: I,
      hasFetched: E
    } = (0, u.ng)(n, h, _), b = (0, s.Dt)();
    return (r.useEffect(() => {
      E && I === c.t && o()
    }, [E, o, I]), I === c.t) ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.Y0X, {
        transitionState: t,
        "aria-labelledby": b,
        size: a.CgR.DYNAMIC,
        className: v.container,
        hideShadow: !0,
        children: [(0, i.jsx)("div", {
          className: v.closeButton,
          children: (0, i.jsx)(a.olH, {
            className: v.closeButtonInner,
            innerClassName: v.closeButtonInner,
            onClick: () => o(!1)
          })
        }), (0, i.jsx)(f.Z, {
          verificationForm: I,
          headerId: b,
          guildId: n,
          onClose: o,
          onComplete: m,
          isPreview: h
        })]
      }), (0, i.jsx)(l.W, {
        children: !0 === p && (0, i.jsx)(a.oXn, {
          className: v.notice,
          children: (0, i.jsx)(g, {})
        })
      })]
    })
  }