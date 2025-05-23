/** Chunk was on 48707 **/
s.d(e, {
  default: () => m
}), s(388685);
var l = s(255367),
  n = s(73800),
  i = s(442837),
  o = s(481060),
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
  } = t, [v, k] = n.useState(""), [C, E] = n.useState(""), [z, N] = n.useState(""), [S, b] = n.useState(null), [R, T] = n.useState(null), Z = (0, i.e7)([c.Z], () => c.Z.getErrors()), I = (0, i.e7)([c.Z], () => c.Z.getFormState()), P = n.useRef(null);
  async function y(t) {
    t.preventDefault(), (0, r.b9)();
    let e = !1;
    if ("" === C ? (b(x.intl.string(x.t["/7/oPT"])), e = !0) : b(null), C !== z ? (T(x.intl.string(x.t.IEKYZ2)), e = !0) : T(null), e) return;
    let s = await (0, r.Mn)({
      password: v,
      newPassword: C
    });
    if (null == s ? void 0 : s.ok) w();
    else {
      var l;
      (null == s || null == (l = s.body) ? void 0 : l.username) != null && (0, u.P)()
    }
  }
  return n.useEffect(() => {
    if (g === o.Dvm.ENTERED) {
      var t;
      null == (t = P.current) || t.focus()
    }
  }, [g]), (0, l.jsxs)(o.Y0X, {
    transitionState: g,
    children: [(0, l.jsxs)(o.xBx, {
      separator: !1,
      className: h.header,
      children: [(0, l.jsx)(a.Z, {
        color: a.Z.Colors.HEADER_PRIMARY,
        size: a.Z.Sizes.SIZE_24,
        className: h.title,
        children: x.intl.string(x.t["geta7+"])
      }), (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: h.subtitle,
        children: f ? x.intl.string(x.t["37iHbW"]) : x.intl.string(x.t.iOurYm)
      }), !0 !== j && (0, l.jsx)(o.olH, {
        onClick: _,
        className: h.modalCloseButton
      })]
    }), (0, l.jsxs)("form", {
      onSubmit: y,
      children: [(0, l.jsxs)(o.hzk, {
        className: h.content,
        children: [(0, l.jsx)(o.xJW, {
          title: x.intl.string(x.t.WBqMRU),
          error: null == Z || null == (e = Z.password) ? void 0 : e[0],
          children: (0, l.jsx)(o.oil, {
            type: "password",
            value: v,
            onChange: k,
            inputRef: P
          })
        }), (0, l.jsx)(o.xJW, {
          className: h.newPassword,
          title: x.intl.string(x.t["8dM4FB"]),
          error: null != (p = null != (m = null == Z || null == (s = Z.new_password) ? void 0 : s[0]) ? m : S) ? p : void 0,
          children: (0, l.jsx)(o.oil, {
            type: "password",
            value: C,
            onChange: E
          })
        }), (0, l.jsx)(o.xJW, {
          className: h.newPassword,
          title: x.intl.string(x.t.iQG2KC),
          error: null != R ? R : void 0,
          children: (0, l.jsx)(o.oil, {
            type: "password",
            value: z,
            onChange: N
          })
        })]
      }), (0, l.jsxs)(o.mzw, {
        children: [(0, l.jsx)(o.zxk, {
          type: "submit",
          color: o.zxk.Colors.BRAND,
          size: o.zxk.Sizes.MEDIUM,
          submitting: I === d.QZA.SUBMITTING,
          children: x.intl.string(x.t.i4jeWV)
        }), !0 !== j && (0, l.jsx)(o.zxk, {
          className: h.cancel,
          look: o.zxk.Looks.LINK,
          color: o.zxk.Colors.PRIMARY,
          onClick: _,
          children: x.intl.string(x.t["ETE/oK"])
        })]
      })]
    })]
  })
}