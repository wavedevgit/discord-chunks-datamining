/** Chunk was on 23303 **/
r.r(t), r.d(t, {
  default: () => g
});
var n = r(200651),
  a = r(192379),
  i = r(215569),
  o = r(481060),
  l = r(852860),
  s = r(313201),
  c = r(944163),
  d = r(266395),
  u = r(187565),
  m = r(530726),
  _ = r(592286),
  f = r(388032),
  b = r(853354);
let x = () => (0, n.jsx)(l.Z, {
    submitting: !1,
    message: f.NW.string(f.t["8g514e"]),
    onReset: () => {
      (0, d.PE)(!1)
    },
    onResetText: f.NW.string(f.t["ETE/oK"]),
    onSave: () => {
      (0, d.PE)(!1), (0, o.Mr3)(_.Pn)
    },
    onSaveText: f.NW.string(f.t["Xt+UaW"]),
    onSaveButtonColor: o.Ttl.RED
  }),
  g = e => {
    let {
      transitionState: t,
      guildId: r,
      onClose: l,
      onComplete: _,
      isPreview: f = !1
    } = e, g = (0, d.rb)(e => e.shouldShowWarning), p = (0, u.ng)(r, f), v = (0, s.Dt)();
    return (a.useEffect(() => {
      p === c.t && l()
    }, [l, p]), p === c.t) ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(o.Y0X, {
        transitionState: t,
        "aria-labelledby": v,
        size: o.CgR.DYNAMIC,
        className: b.container,
        hideShadow: !0,
        children: [(0, n.jsx)("div", {
          className: b.closeButton,
          children: (0, n.jsx)(o.olH, {
            onClick: () => l(!1)
          })
        }), (0, n.jsx)(m.Z, {
          verificationForm: p,
          headerId: v,
          guildId: r,
          onClose: l,
          onComplete: _,
          isPreview: f
        })]
      }), (0, n.jsx)(i.W, {
        children: !0 === g && (0, n.jsx)(o.oXn, {
          className: b.notice,
          children: (0, n.jsx)(x, {})
        })
      })]
    })
  }