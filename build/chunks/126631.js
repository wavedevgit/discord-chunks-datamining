/** Chunk was on 51724 **/
n.d(t, {
  Z: () => b
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(541716),
  l = n(752305),
  o = n(893718),
  c = n(313201),
  d = n(131704),
  u = n(993413),
  m = n(981631),
  p = n(388032),
  g = n(253182);
let h = (0, c.hQ)(),
  f = (0, d.kt)({
    id: "1",
    type: m.d4z.DM
  }),
  x = (0, c.hQ)();

function b(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: d,
    placeholder: b,
    currentBio: N,
    disabled: _ = !1
  } = e, [E, j] = i.useState(null != d ? d : N), [C, O] = i.useState((0, l.JM)(E)), v = i.useRef(!1);
  return i.useEffect(() => {
    if (void 0 === d) {
      let e = (0, l.JM)(N);
      j(N), O(e)
    }
  }, [d, N]), (0, r.jsxs)(u.Z, {
    title: t,
    titleId: h,
    description: p.NW.string(p.t.Bbw6AQ),
    errors: n,
    disabled: _,
    children: [(0, r.jsx)(o.Z, {
      "aria-describedby": x,
      "aria-labelledby": h,
      className: g.bioTextAreaContainer,
      innerClassName: g.bioTextArea,
      maxCharacterCount: m.tPV,
      onChange: function(e, t, n) {
        t !== E && (j(t), O(n), c(t))
      },
      placeholder: b,
      channel: f,
      textValue: E,
      richValue: C,
      type: a.Ie.PROFILE_BIO_INPUT,
      onBlur: () => {
        v.current = !1
      },
      onFocus: () => {
        v.current = !0
      },
      focused: v.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }
    }), (0, r.jsx)(s.nn4, {
      id: x,
      children: p.NW.format(p.t["+DFxLS"], {
        maxLength: m.tPV
      })
    })]
  })
}