/** Chunk was on 96888 **/
n.d(t, {
  Z: () => j
}), n(47120);
var o = n(200651),
  a = n(192379),
  i = n(392711),
  l = n.n(i),
  s = n(481060),
  r = n(493773),
  c = n(110924),
  u = n(600164),
  d = n(313201),
  b = n(237617),
  _ = n(572539),
  m = n(626135),
  h = n(63063),
  f = n(957115),
  p = n(764920),
  v = n(531578),
  x = n(981631),
  g = n(388032),
  O = n(455438);

function N() {
  return (0, o.jsx)(s.Text, {
    className: O.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: g.NW.format(g.t.ybi2tL, {
      helpdeskURL: h.Z.getSubmitRequestURL()
    })
  })
}

function j(e) {
  let {
    modalType: t,
    header: n,
    body: i,
    problemTitle: h,
    problems: j,
    transitionState: Z,
    ratingOptions: y,
    ratingEmojiKind: E,
    ratingTextLabels: k,
    freeformNeededProblems: D = [],
    otherKey: R,
    hideDontShowCheckbox: C,
    startRating: L = null,
    hideHelpDeskLink: w = !1,
    onSubmit: A,
    onClose: S
  } = e, I = (0, c.Z)(j), [B, W] = a.useState(!1), [T, F] = a.useState(L), [P, M] = a.useState(null), [U, z] = a.useState(l().shuffle(j)), [G, H] = a.useState(""), K = (0, d.Dt)(), V = (0, b.Z)(T), J = (0, b.Z)(B), X = (0, b.Z)(P), q = (0, b.Z)(A), Y = (0, b.Z)(G), Q = null;
  return null == T ? Q = "RATING" : T !== v.aZ.GOOD && null == P ? Q = "PROBLEM" : null != P && D.includes(P) && (Q = "FREEFORM"), a.useEffect(() => {
    l().isEqual(I, j) || z((0, f.B)(j, R))
  }, [j, I, R]), (0, r.ZP)(() => (m.default.track(x.rMx.OPEN_MODAL, {
    type: t,
    source: "Feedback Modal"
  }), () => {
    q.current({
      rating: V.current,
      problem: X.current,
      dontShowAgain: J.current,
      feedback: Y.current
    })
  })), (0, o.jsxs)(s.Y0X, {
    transitionState: Z,
    className: O.__invalid_modalRoot,
    "aria-labelledby": K,
    children: [(0, o.jsxs)(s.xBx, {
      separator: !1,
      className: O.headerContainer,
      children: [(0, o.jsx)(s.X6q, {
        id: K,
        variant: "heading-xl/extrabold",
        color: "none",
        children: n
      }), (0, o.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "none",
        className: O.ratingBody,
        children: i
      })]
    }), ("RATING" === Q || "PROBLEM" === Q && null == k) && (0, o.jsx)(s.hzk, {
      className: O.__invalid_content,
      children: (0, o.jsx)(s.xJW, {
        className: O.problemInfo,
        children: (0, o.jsx)(p.Z, {
          ratingOptions: y,
          emojiKind: E,
          textLabels: k,
          selectedRating: T,
          onChangeRating: function(e) {
            F(e), e === v.aZ.GOOD && S()
          }
        })
      })
    }), "PROBLEM" === Q && (0, o.jsx)(s.hzk, {
      className: O.__invalid_content,
      children: (0, o.jsx)(s.xJW, {
        title: h,
        className: O.problemInfo,
        children: (0, o.jsx)(_.Z, {
          options: U,
          onClick: function(e) {
            let {
              value: t
            } = e;
            M(t), D.includes(t) || S()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !D.includes(t)
          }
        })
      })
    }), "FREEFORM" === Q && (0, o.jsx)(s.hzk, {
      className: O.__invalid_content,
      children: (0, o.jsxs)(s.xJW, {
        title: g.NW.string(g.t.h95hcn),
        className: O.problemInfo,
        children: [(0, o.jsx)(s.Kx8, {
          value: G,
          maxLength: v.iF,
          onChange: H
        }), !w && (0, o.jsx)(N, {})]
      })
    }), "RATING" === Q && !C && (0, o.jsx)(s.mzw, {
      className: O.footer,
      direction: u.Z.Direction.HORIZONTAL,
      children: (0, o.jsx)(s.XZJ, {
        type: s.XZJ.Types.INVERTED,
        size: 18,
        value: B,
        onChange: () => W(!B),
        children: (0, o.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: g.NW.string(g.t["5E9SBw"])
        })
      })
    }), ("FREEFORM" === Q || "PROBLEM" === Q && null != k) && (0, o.jsxs)(s.mzw, {
      className: O.footer,
      direction: u.Z.Direction.HORIZONTAL,
      children: [(0, o.jsx)(s.zxk, {
        size: s.zxk.Sizes.SMALL,
        look: s.zxk.Looks.LINK,
        color: s.zxk.Colors.PRIMARY,
        onClick: () => {
          "FREEFORM" === Q ? (M(null), H("")) : F(null)
        },
        children: g.NW.string(g.t["13/7kZ"])
      }), (0, o.jsx)(s.zxk, {
        size: s.zxk.Sizes.SMALL,
        onClick: S,
        children: g.NW.string(g.t.geKm7u)
      })]
    })]
  })
}