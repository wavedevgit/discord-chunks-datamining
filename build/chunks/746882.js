/** Chunk was on 59056 **/
n.d(t, {
  default: () => L
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(512722),
  s = n.n(a),
  l = n(913527),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(749210),
  f = n(600164),
  h = n(313201),
  m = n(592125),
  x = n(944486),
  N = n(594174),
  _ = n(626135),
  b = n(63063),
  g = n(771308),
  k = n(758119),
  E = n(622822),
  y = n(13430),
  j = n(723359),
  z = n(981631),
  A = n(388032),
  C = n(326610);

function L(e) {
  let {
    transitionState: t,
    source: a
  } = e, l = (0, c.e7)([N.default], () => N.default.getCurrentUser()), L = (0, c.e7)([x.Z, m.Z], () => m.Z.getChannel(x.Z.getChannelId())), [R, v] = i.useState(null), [T, S] = i.useState(null), [W, p] = i.useState(!1), [M, w] = i.useState(0), G = i.createRef(), I = i.createRef(), Z = (0, h.Dt)(), D = (0, E.Kt)(), Y = null != R ? o()().diff(R, "years") : null;

  function F() {
    if (a === j.L0.NSFW_SERVER_INVITE_EMBED) {
      (0, k.qV)(a);
      return
    }
    let e = null == L ? void 0 : L.getGuildId();
    u.Z.nsfwReturnToSafety(e), (0, k.qV)(a)
  }
  async function P() {
    s()(null != R, "Cannot submit null birthday.");
    try {
      return S(null), p(!0), await (0, g.Av)(R, a)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, k.C8)(a, t.body.date_of_birth);
      else {
        var e;
        (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? S(A.NW.string(A.t["TGg/2t"])) : S(null == t ? void 0 : t.body.message), p(!1)
      }
    }
  }
  async function B() {
    if (s()(null != Y, "Cannot submit if we haven't been able to calculate age."), Y < 18) {
      w(1);
      return
    }
    await P()
  }
  async function U(e) {
    e.preventDefault(), W || null == R || await B()
  }
  async function q() {
    null == await P() && w(0)
  }
  i.useEffect(() => {
    null != l && null != l.nsfwAllowed && (0, k.qq)(a)
  }), i.useEffect(() => {
    _.default.track(z.rMx.AGE_GATE_ACTION, {
      source: a,
      action: j.Al.AGE_GATE_OPEN
    })
  }, [a]);
  let K = i.useCallback(e => {
      v(e)
    }, [v]),
    O = i.useCallback(() => {
      var e;
      null === (e = I.current) || void 0 === e || e.focus()
    }, [I]);
  return D ? (0, r.jsxs)(d.Y0X, {
    transitionState: t,
    size: d.CgR.SMALL,
    children: [(0, r.jsx)(d.hzk, {
      children: (0, r.jsxs)("div", {
        className: C.container,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: n(462991),
          className: C.img
        }), (0, r.jsx)(d.X6q, {
          variant: "heading-xl/semibold",
          className: C.title,
          children: A.NW.string(A.t.ZmwvDQ)
        }), (0, r.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: A.NW.string(A.t["NjO/s7"])
        })]
      })
    }), (0, r.jsxs)(d.mzw, {
      justify: f.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(d.zxk, {
        size: d.PhG.SMALL,
        onClick: F,
        children: A.NW.string(A.t.SFWVER)
      }), (0, r.jsx)(d.zxk, {
        look: d.zxk.Looks.LINK,
        size: d.zxk.Sizes.NONE,
        color: d.zxk.Colors.PRIMARY,
        onClick: F,
        children: A.NW.string(A.t.f3Pet7)
      })]
    })]
  }) : 0 === M ? function() {
    let e = a === j.L0.FAMILY_CENTER ? A.NW.string(A.t.M7mt7u) : A.NW.string(A.t.F8otRk),
      i = (() => {
        switch (a) {
          case j.L0.FAMILY_CENTER:
            return A.NW.string(A.t.mhUrKS);
          case j.L0.DEEP_LINK_PROMPT:
            return A.NW.format(A.t.iyhg2t, {
              helpURL: b.Z.getArticleURL(z.BhN.AGE_GATE)
            });
          default:
            return A.NW.format(A.t.n3QjDA, {
              helpURL: b.Z.getArticleURL(z.BhN.AGE_GATE)
            })
        }
      })();
    return (0, r.jsxs)(d.Y0X, {
      transitionState: t,
      size: d.CgR.SMALL,
      "aria-labelledby": Z,
      children: [(0, r.jsxs)(d.hzk, {
        children: [(0, r.jsxs)("div", {
          className: C.container,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: n(462991),
            className: C.img
          }), (0, r.jsx)(d.X6q, {
            variant: "heading-xl/semibold",
            className: C.title,
            id: Z,
            children: e
          }), (0, r.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, r.jsx)("form", {
          onSubmit: U,
          children: (0, r.jsx)(y.Z, {
            label: A.NW.string(A.t.rhBeKS),
            wrapperClassName: C.birthday,
            name: "date_of_birth",
            onChange: K,
            onPopulated: O,
            error: T,
            value: R,
            ref: G,
            autoFocus: !0
          })
        })]
      }), (0, r.jsxs)(d.mzw, {
        justify: f.Z.Justify.BETWEEN,
        children: [(0, r.jsx)(d.zxk, {
          buttonRef: I,
          submitting: W,
          disabled: null == R,
          size: d.PhG.SMALL,
          onClick: B,
          children: A.NW.string(A.t.uBFuoq)
        }), (0, r.jsx)(d.zxk, {
          look: d.zxk.Looks.LINK,
          size: d.zxk.Sizes.NONE,
          color: d.zxk.Colors.PRIMARY,
          onClick: F,
          children: A.NW.string(A.t["1MrpWF"])
        })]
      })]
    })
  }() : (0, r.jsxs)(d.Y0X, {
    transitionState: d.Dvm.ENTERED,
    size: d.CgR.SMALL,
    "aria-labelledby": Z,
    children: [(0, r.jsx)(d.hzk, {
      children: (0, r.jsxs)("div", {
        className: C.confirmContainer,
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-xl/semibold",
          className: C.confirmTitle,
          id: Z,
          children: A.NW.format(A.t.wumolZ, {
            age: Y
          })
        }), (0, r.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: A.NW.format(A.t.n3QjDA, {
            helpURL: b.Z.getArticleURL(z.BhN.AGE_GATE)
          })
        })]
      })
    }), (0, r.jsxs)(d.mzw, {
      className: C.confirmFooter,
      children: [(0, r.jsx)(d.zxk, {
        look: d.zxk.Looks.LINK,
        size: d.zxk.Sizes.NONE,
        color: d.zxk.Colors.PRIMARY,
        onClick: () => w(0),
        children: A.NW.string(A.t.cfYCra)
      }), (0, r.jsx)(d.zxk, {
        color: d.zxk.Colors.BRAND,
        onClick: q,
        children: A.NW.string(A.t["6tahio"])
      })]
    })]
  })
}