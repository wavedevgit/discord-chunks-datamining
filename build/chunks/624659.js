/** Chunk was on 74920 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  a = n(192379),
  o = n(120356),
  l = n.n(o),
  i = n(392711),
  s = n.n(i),
  c = n(481060),
  u = n(493773),
  d = n(110924),
  m = n(600164),
  x = n(313201),
  N = n(237617),
  h = n(572539),
  f = n(648159),
  b = n(63063),
  _ = n(957115),
  E = n(531578),
  C = n(388032),
  p = n(637913),
  v = n(912961);

function T() {
  return (0, r.jsx)(c.Text, {
    className: p.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: C.NW.format(C.t.ybi2tL, {
      helpdeskURL: b.Z.getSubmitRequestURL()
    })
  })
}

function g(e) {
  var t, n;
  let {
    header: o,
    body: i,
    problems: b,
    transitionState: g,
    feedbackProblems: k = {},
    otherKey: I,
    hasCloseButton: j,
    onSubmit: O,
    onClose: S,
    canDismissForever: R = !0,
    showHelpdeskLink: y = !0
  } = e, Z = (0, d.Z)(b), [A, L] = a.useState(!1), [W, B] = a.useState(null), [D, U] = a.useState(s().shuffle(b)), [P, F] = a.useState(""), [V, z] = a.useState(!1), M = (0, x.Dt)(), G = (0, N.Z)(A), w = (0, N.Z)(W), X = (0, N.Z)(O), K = (0, N.Z)(P), H = (0, N.Z)(V), q = null != W ? k[W] : null, J = null != q;
  return a.useEffect(() => {
    s().isEqual(Z, b) || U((0, _.B)(b, I))
  }, [b, Z, I]), (0, u.ZP)(() => () => {
    X.current({
      problem: w.current,
      dontShowAgain: G.current,
      feedback: K.current,
      closeClicked: H.current
    })
  }), (0, r.jsxs)(c.Y0X, {
    transitionState: g,
    "aria-labelledby": M,
    children: [(0, r.jsx)(f.Z, {}), (0, r.jsxs)(c.xBx, {
      separator: !1,
      className: l()(p.headerContainer, v.headerContainer),
      children: [(0, r.jsx)(c.X6q, {
        id: M,
        variant: "heading-xl/bold",
        color: "header-primary",
        className: p.header,
        children: o
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: l()(p.ratingBody, v.headerBody),
        children: null !== (t = null == q ? void 0 : q.subheader) && void 0 !== t ? t : i
      }), j ? (0, r.jsx)(c.olH, {
        className: p.modalCloseButton,
        onClick: function() {
          z(!0), S()
        }
      }) : null]
    }), (0, r.jsxs)(c.hzk, {
      className: v.modalContent,
      children: [J ? null : (0, r.jsx)(c.xJW, {
        className: p.problemInfo,
        children: (0, r.jsx)(h.Z, {
          options: D,
          onClick: function(e) {
            let {
              value: t
            } = e;
            B(t), Object.keys(k).includes(t) || S()
          }
        })
      }), J ? (0, r.jsxs)(c.xJW, {
        className: p.problemInfo,
        children: [(0, r.jsx)(c.Kx8, {
          value: P,
          maxLength: E.iF,
          onChange: F,
          className: v.textArea,
          placeholder: null !== (n = q.hint) && void 0 !== n ? n : C.NW.string(C.t.h95hcn)
        }), y ? (0, r.jsx)(T, {}) : null]
      }) : null]
    }), R || J ? (0, r.jsx)(c.mzw, {
      className: l()(p.footer, J ? v.submitFooter : v.modalFooter),
      direction: m.Z.Direction.HORIZONTAL,
      children: J ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.zxk, {
          className: v.backButton,
          size: c.zxk.Sizes.NONE,
          look: c.zxk.Looks.LINK,
          color: c.zxk.Colors.PRIMARY,
          onClick: () => {
            B(null), F("")
          },
          children: C.NW.string(C.t["13/7kZ"])
        }), (0, r.jsx)(c.zxk, {
          size: c.zxk.Sizes.SMALL,
          onClick: S,
          children: C.NW.string(C.t.geKm7u)
        })]
      }) : R ? (0, r.jsx)(c.XZJ, {
        size: 24,
        type: c.XZJ.Types.INVERTED,
        value: A,
        onChange: () => L(!A),
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          children: C.NW.string(C.t.lkWab2)
        })
      }) : null
    }) : null]
  })
}