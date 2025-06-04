/** Chunk was on 48707 **/
s.d(e, {
  default: () => m
}), s(388685);
var n = s(255367),
  l = s(73800),
  o = s(442837),
  i = s(481060),
  r = s(809206),
  a = s(118012),
  c = s(25990),
  u = s(155433),
  d = s(981631),
  x = s(388032),
  h = s(132709);

function m(t) {
  var e, s, m, p;
  let {
    transitionState: g,
    onSuccess: w,
    onClose: _,
    requirementsUpdated: f,
    noSkip: j = !1
  } = t, [v, k] = l.useState(""), [C, E] = l.useState(""), [z, N] = l.useState(""), [S, b] = l.useState(null), [R, T] = l.useState(null), P = (0, o.e7)([c.Z], () => c.Z.getErrors()), Z = (0, o.e7)([c.Z], () => c.Z.getFormState()), I = l.useRef(null);
  async function M(t) {
    t.preventDefault(), (0, r.b9)();
    let e = !1;
    if ("" === C ? (b(x.intl.string(x.t["/7/oPT"])), e = !0) : b(null), C !== z ? (T(x.intl.string(x.t.IEKYZ2)), e = !0) : T(null), e) return;
    let s = await (0, r.Mn)({
      password: v,
      newPassword: C
    });
    if (null == s ? void 0 : s.ok) w();
    else {
      var n;
      (null == s || null == (n = s.body) ? void 0 : n.username) != null && (0, u.P)()
    }
  }
  return l.useEffect(() => {
    if (g === i.Dvm.ENTERED) {
      var t;
      null == (t = I.current) || t.focus()
    }
  }, [g]), (0, n.jsxs)(i.Y0X, {
    transitionState: g,
    parentComponent: "ChangePasswordModal",
    children: [(0, n.jsxs)(i.xBx, {
      separator: !1,
      className: h.header,
      children: [(0, n.jsx)(a.Z, {
        color: a.Z.Colors.HEADER_PRIMARY,
        size: a.Z.Sizes.SIZE_24,
        className: h.title,
        children: x.intl.string(x.t["geta7+"])
      }), (0, n.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: h.subtitle,
        children: f ? x.intl.string(x.t["37iHbW"]) : x.intl.string(x.t.iOurYm)
      }), !0 !== j && (0, n.jsx)(i.olH, {
        onClick: _,
        className: h.modalCloseButton
      })]
    }), (0, n.jsxs)("form", {
      onSubmit: M,
      children: [(0, n.jsxs)(i.hzk, {
        className: h.content,
        children: [(0, n.jsx)(i.xJW, {
          title: x.intl.string(x.t.WBqMRU),
          error: null == P || null == (e = P.password) ? void 0 : e[0],
          children: (0, n.jsx)(i.oil, {
            type: "password",
            value: v,
            onChange: k,
            inputRef: I
          })
        }), (0, n.jsx)(i.xJW, {
          className: h.newPassword,
          title: x.intl.string(x.t["8dM4FB"]),
          error: null != (p = null != (m = null == P || null == (s = P.new_password) ? void 0 : s[0]) ? m : S) ? p : void 0,
          children: (0, n.jsx)(i.oil, {
            type: "password",
            value: C,
            onChange: E
          })
        }), (0, n.jsx)(i.xJW, {
          className: h.newPassword,
          title: x.intl.string(x.t.iQG2KC),
          error: null != R ? R : void 0,
          children: (0, n.jsx)(i.oil, {
            type: "password",
            value: z,
            onChange: N
          })
        })]
      }), (0, n.jsxs)(i.mzw, {
        children: [(0, n.jsx)(i.zxk, {
          type: "submit",
          color: i.zxk.Colors.BRAND,
          size: i.zxk.Sizes.MEDIUM,
          submitting: Z === d.QZA.SUBMITTING,
          children: x.intl.string(x.t.i4jeWV)
        }), !0 !== j && (0, n.jsx)(i.zxk, {
          className: h.cancel,
          look: i.zxk.Looks.LINK,
          color: i.zxk.Colors.PRIMARY,
          onClick: _,
          children: x.intl.string(x.t["ETE/oK"])
        })]
      })]
    })]
  })
}