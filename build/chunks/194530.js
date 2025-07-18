/** Chunk was on 48707 **/
n.d(e, {
  default: () => h
}), n(388685);
var s = n(255367),
  l = n(73800),
  a = n(442837),
  r = n(481060),
  i = n(809206),
  o = n(25990),
  d = n(155433),
  c = n(981631),
  u = n(388032),
  x = n(132709);

function h(t) {
  var e, n, h, p;
  let {
    transitionState: m,
    onSuccess: g,
    onClose: v,
    requirementsUpdated: w,
    noSkip: j = !1
  } = t, [f, _] = l.useState(""), [C, b] = l.useState(""), [y, T] = l.useState(""), [k, N] = l.useState(null), [E, S] = l.useState(null), P = (0, a.e7)([o.Z], () => o.Z.getErrors()), B = (0, a.e7)([o.Z], () => o.Z.getFormState()), W = l.useRef(null);
  async function Z(t) {
    t.preventDefault(), (0, i.b9)();
    let e = !1;
    if ("" === C ? (N(u.intl.string(u.t["/7/oPT"])), e = !0) : N(null), C !== y ? (S(u.intl.string(u.t.IEKYZ2)), e = !0) : S(null), e) return;
    let n = await (0, i.Mn)({
      password: f,
      newPassword: C
    });
    if (null == n ? void 0 : n.ok) g();
    else {
      var s;
      (null == n || null == (s = n.body) ? void 0 : s.username) != null && (0, d.P)()
    }
  }
  return l.useEffect(() => {
    if (m === r.Dvm.ENTERED) {
      var t;
      null == (t = W.current) || t.focus()
    }
  }, [m]), (0, s.jsxs)(r.Y0X, {
    transitionState: m,
    parentComponent: "ChangePasswordModal",
    children: [(0, s.jsxs)(r.xBx, {
      separator: !1,
      className: x.header,
      children: [(0, s.jsx)(r.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: x.title,
        children: u.intl.string(u.t["geta7+"])
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: x.subtitle,
        children: w ? u.intl.string(u.t["37iHbW"]) : u.intl.string(u.t.iOurYm)
      }), !0 !== j && (0, s.jsx)(r.olH, {
        onClick: v,
        className: x.modalCloseButton
      })]
    }), (0, s.jsxs)("form", {
      onSubmit: Z,
      children: [(0, s.jsxs)(r.hzk, {
        className: x.content,
        children: [(0, s.jsx)(r.xJW, {
          title: u.intl.string(u.t.WBqMRU),
          error: null == P || null == (e = P.password) ? void 0 : e[0],
          children: (0, s.jsx)(r.oil, {
            type: "password",
            value: f,
            onChange: _,
            inputRef: W
          })
        }), (0, s.jsx)(r.xJW, {
          className: x.newPassword,
          title: u.intl.string(u.t["8dM4FB"]),
          error: null != (p = null != (h = null == P || null == (n = P.new_password) ? void 0 : n[0]) ? h : k) ? p : void 0,
          children: (0, s.jsx)(r.oil, {
            type: "password",
            value: C,
            onChange: b
          })
        }), (0, s.jsx)(r.xJW, {
          className: x.newPassword,
          title: u.intl.string(u.t.iQG2KC),
          error: null != E ? E : void 0,
          children: (0, s.jsx)(r.oil, {
            type: "password",
            value: y,
            onChange: T
          })
        })]
      }), (0, s.jsxs)(r.mzw, {
        children: [(0, s.jsx)(r.zxk, {
          variant: "primary",
          text: u.intl.string(u.t.i4jeWV),
          type: "submit",
          loading: B === c.QZA.SUBMITTING
        }), !0 !== j && (0, s.jsx)("div", {
          "data-button-hoisted-classname-wrapper": !0,
          className: x.cancel,
          children: (0, s.jsx)(r.zxk, {
            variant: "secondary",
            text: u.intl.string(u.t["ETE/oK"]),
            onClick: v
          })
        })]
      })]
    })]
  })
}