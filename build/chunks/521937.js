/** Chunk was on 69773 (e164d1df729efd99.js) **/
n.d(t, {
  v: () => x
}), n(47120), n(301563);
var r = n(200651),
  a = n(192379),
  o = n(120356),
  l = n.n(o),
  i = n(593473),
  s = n(512969),
  c = n(481060),
  d = n(489863),
  u = n(511540),
  f = n(828878),
  p = n(388032),
  h = n(866534);

function x(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: n
  } = e, [o, x] = a.useState(() => {
    let {
      user_code: e
    } = i.parse(window.location.search);
    return n && null != e ? e : ""
  }), m = (0, s.TH)(), v = a.useCallback(() => {
    (0, d.c$)(m)
  }, [m]), {
    manualSubmit: b,
    error: C,
    submitting: _
  } = (0, u.c)(o, t, v);
  return (0, r.jsxs)("div", {
    className: h.content,
    children: [(0, r.jsxs)("div", {
      className: h.innerContent,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xl/extrabold",
        className: h.text,
        children: p.NW.string(p.t.KYPNUl)
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        className: h.text,
        children: p.NW.string(p.t.xRHk7e)
      }), (0, r.jsx)(c.oil, {
        placeholder: p.NW.formatToPlainString(p.t["0tbz6+"], {
          number: f.A.USER_CODE_LENGTH
        }),
        maxLength: f.A.USER_CODE_LENGTH,
        className: h.textInputContainer,
        inputClassName: l()(h.textInput, {
          [h.textInputError]: null != C
        }),
        autoComplete: "off",
        autoFocus: !0,
        value: o,
        onChange: x,
        error: C
      })]
    }), (0, r.jsx)(c.zxk, {
      fullWidth: !0,
      color: c.zxk.Colors.BRAND,
      onClick: b,
      submitting: _,
      disabled: o.length !== f.A.USER_CODE_LENGTH,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        children: p.NW.string(p.t["3PatS0"])
      })
    })]
  })
}