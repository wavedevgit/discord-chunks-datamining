/** Chunk was on 51724 **/
n.d(t, {
  default: () => g
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(809206),
  o = n(118012),
  c = n(25990),
  d = n(155433),
  u = n(981631),
  m = n(388032),
  p = n(275824);

function g(e) {
  var t, n, g, h;
  let {
    transitionState: f,
    onSuccess: x,
    onClose: b,
    requirementsUpdated: N,
    noSkip: _ = !1
  } = e, [E, C] = i.useState(""), [j, O] = i.useState(""), [v, S] = i.useState(""), [T, I] = i.useState(null), [y, A] = i.useState(null), P = (0, s.e7)([c.Z], () => c.Z.getErrors()), R = (0, s.e7)([c.Z], () => c.Z.getFormState()), D = i.useRef(null);
  async function Z(e) {
    e.preventDefault(), (0, l.b9)();
    let t = !1;
    if ("" === j ? (I(m.NW.string(m.t["/7/oPT"])), t = !0) : I(null), j !== v ? (A(m.NW.string(m.t.IEKYZ2)), t = !0) : A(null), t) return;
    let n = await (0, l.Mn)({
      password: E,
      newPassword: j
    });
    if (null == n ? void 0 : n.ok) x();
    else {
      var r;
      (null == n ? void 0 : null === (r = n.body) || void 0 === r ? void 0 : r.username) != null && (0, d.P)()
    }
  }
  return i.useEffect(() => {
    if (f === a.Dvm.ENTERED) {
      var e;
      null === (e = D.current) || void 0 === e || e.focus()
    }
  }, [f]), (0, r.jsxs)(a.Y0X, {
    transitionState: f,
    children: [(0, r.jsxs)(a.xBx, {
      separator: !1,
      className: p.header,
      children: [(0, r.jsx)(o.Z, {
        color: o.Z.Colors.HEADER_PRIMARY,
        size: o.Z.Sizes.SIZE_24,
        className: p.title,
        children: m.NW.string(m.t["geta7+"])
      }), (0, r.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: p.subtitle,
        children: N ? m.NW.string(m.t["37iHbW"]) : m.NW.string(m.t.iOurYm)
      }), !0 !== _ && (0, r.jsx)(a.olH, {
        onClick: b,
        className: p.modalCloseButton
      })]
    }), (0, r.jsxs)("form", {
      onSubmit: Z,
      children: [(0, r.jsxs)(a.hzk, {
        className: p.content,
        children: [(0, r.jsx)(a.xJW, {
          title: m.NW.string(m.t.WBqMRU),
          error: null == P ? void 0 : null === (t = P.password) || void 0 === t ? void 0 : t[0],
          children: (0, r.jsx)(a.oil, {
            type: "password",
            value: E,
            onChange: C,
            inputRef: D
          })
        }), (0, r.jsx)(a.xJW, {
          className: p.newPassword,
          title: m.NW.string(m.t["8dM4FB"]),
          error: null !== (h = null !== (g = null == P ? void 0 : null === (n = P.new_password) || void 0 === n ? void 0 : n[0]) && void 0 !== g ? g : T) && void 0 !== h ? h : void 0,
          children: (0, r.jsx)(a.oil, {
            type: "password",
            value: j,
            onChange: O
          })
        }), (0, r.jsx)(a.xJW, {
          className: p.newPassword,
          title: m.NW.string(m.t.iQG2KC),
          error: null != y ? y : void 0,
          children: (0, r.jsx)(a.oil, {
            type: "password",
            value: v,
            onChange: S
          })
        })]
      }), (0, r.jsxs)(a.mzw, {
        children: [(0, r.jsx)(a.zxk, {
          type: "submit",
          color: a.zxk.Colors.BRAND,
          size: a.zxk.Sizes.MEDIUM,
          submitting: R === u.QZA.SUBMITTING,
          children: m.NW.string(m.t.i4jeWV)
        }), !0 !== _ && (0, r.jsx)(a.zxk, {
          className: p.cancel,
          look: a.zxk.Looks.LINK,
          color: a.zxk.Colors.PRIMARY,
          onClick: b,
          children: m.NW.string(m.t["ETE/oK"])
        })]
      })]
    })]
  })
}