/** Chunk was on 48707 **/
s.d(t, {
  default: () => N
}), s(388685);
var l = s(200651),
  n = s(192379),
  o = s(442837),
  r = s(481060),
  a = s(809206),
  i = s(118012),
  c = s(25990),
  u = s(155433),
  d = s(981631),
  x = s(388032),
  h = s(132709);

function N(e) {
  var t, s, N, m;
  let {
    transitionState: p,
    onSuccess: g,
    onClose: w,
    requirementsUpdated: _,
    noSkip: f = !1
  } = e, [j, v] = n.useState(""), [W, k] = n.useState(""), [C, E] = n.useState(""), [z, S] = n.useState(null), [b, R] = n.useState(null), T = (0, o.e7)([c.Z], () => c.Z.getErrors()), Z = (0, o.e7)([c.Z], () => c.Z.getFormState()), I = n.useRef(null);
  async function P(e) {
    e.preventDefault(), (0, a.b9)();
    let t = !1;
    if ("" === W ? (S(x.NW.string(x.t["/7/oPT"])), t = !0) : S(null), W !== C ? (R(x.NW.string(x.t.IEKYZ2)), t = !0) : R(null), t) return;
    let s = await (0, a.Mn)({
      password: j,
      newPassword: W
    });
    if (null == s ? void 0 : s.ok) g();
    else {
      var l;
      (null == s || null == (l = s.body) ? void 0 : l.username) != null && (0, u.P)()
    }
  }
  return n.useEffect(() => {
    if (p === r.Dvm.ENTERED) {
      var e;
      null == (e = I.current) || e.focus()
    }
  }, [p]), (0, l.jsxs)(r.Y0X, {
    transitionState: p,
    children: [(0, l.jsxs)(r.xBx, {
      separator: !1,
      className: h.header,
      children: [(0, l.jsx)(i.Z, {
        color: i.Z.Colors.HEADER_PRIMARY,
        size: i.Z.Sizes.SIZE_24,
        className: h.title,
        children: x.NW.string(x.t["geta7+"])
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: h.subtitle,
        children: _ ? x.NW.string(x.t["37iHbW"]) : x.NW.string(x.t.iOurYm)
      }), !0 !== f && (0, l.jsx)(r.olH, {
        onClick: w,
        className: h.modalCloseButton
      })]
    }), (0, l.jsxs)("form", {
      onSubmit: P,
      children: [(0, l.jsxs)(r.hzk, {
        className: h.content,
        children: [(0, l.jsx)(r.xJW, {
          title: x.NW.string(x.t.WBqMRU),
          error: null == T || null == (t = T.password) ? void 0 : t[0],
          children: (0, l.jsx)(r.oil, {
            type: "password",
            value: j,
            onChange: v,
            inputRef: I
          })
        }), (0, l.jsx)(r.xJW, {
          className: h.newPassword,
          title: x.NW.string(x.t["8dM4FB"]),
          error: null != (m = null != (N = null == T || null == (s = T.new_password) ? void 0 : s[0]) ? N : z) ? m : void 0,
          children: (0, l.jsx)(r.oil, {
            type: "password",
            value: W,
            onChange: k
          })
        }), (0, l.jsx)(r.xJW, {
          className: h.newPassword,
          title: x.NW.string(x.t.iQG2KC),
          error: null != b ? b : void 0,
          children: (0, l.jsx)(r.oil, {
            type: "password",
            value: C,
            onChange: E
          })
        })]
      }), (0, l.jsxs)(r.mzw, {
        children: [(0, l.jsx)(r.zxk, {
          type: "submit",
          color: r.zxk.Colors.BRAND,
          size: r.zxk.Sizes.MEDIUM,
          submitting: Z === d.QZA.SUBMITTING,
          children: x.NW.string(x.t.i4jeWV)
        }), !0 !== f && (0, l.jsx)(r.zxk, {
          className: h.cancel,
          look: r.zxk.Looks.LINK,
          color: r.zxk.Colors.PRIMARY,
          onClick: w,
          children: x.NW.string(x.t["ETE/oK"])
        })]
      })]
    })]
  })
}