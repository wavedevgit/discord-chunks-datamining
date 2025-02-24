/** Chunk was on 98536 **/
n.d(t, {
  default: () => L
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(512722),
  l = n.n(a),
  s = n(913527),
  o = n.n(s),
  c = n(442837),
  d = n(481060),
  u = n(749210),
  f = n(600164),
  h = n(313201),
  x = n(592125),
  m = n(944486),
  _ = n(594174),
  N = n(626135),
  b = n(63063),
  g = n(771308),
  k = n(758119),
  E = n(622822),
  y = n(13430),
  z = n(723359),
  j = n(981631),
  A = n(388032),
  C = n(726286);

function L(e) {
  let {
    transitionState: t,
    source: a
  } = e, s = (0, c.e7)([_.default], () => _.default.getCurrentUser()), L = (0, c.e7)([m.Z, x.Z], () => x.Z.getChannel(m.Z.getChannelId())), [R, v] = i.useState(null), [T, p] = i.useState(null), [S, M] = i.useState(!1), [W, w] = i.useState(0), G = i.createRef(), I = i.createRef(), Y = (0, h.Dt)(), Z = (0, E.Kt)(), D = null != R ? o()().diff(R, "years") : null;

  function B() {
    if (a === z.L0.NSFW_SERVER_INVITE_EMBED) {
      (0, k.qV)(a);
      return
    }
    let e = null == L ? void 0 : L.getGuildId();
    u.Z.nsfwReturnToSafety(e), (0, k.qV)(a)
  }
  async function P() {
    l()(null != R, "Cannot submit null birthday.");
    try {
      return p(null), M(!0), await (0, g.Av)(R, a)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, k.C8)(a, t.body.date_of_birth);
      else {
        var e;
        (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? p(A.NW.string(A.t["TGg/2t"])) : p(null == t ? void 0 : t.body.message), M(!1)
      }
    }
  }
  async function F() {
    if (l()(null != D, "Cannot submit if we haven't been able to calculate age."), D < 18) {
      w(1);
      return
    }
    await P()
  }
  async function q(e) {
    e.preventDefault(), S || null == R || await F()
  }
  async function U() {
    null == await P() && w(0)
  }
  i.useEffect(() => {
    null != s && null != s.nsfwAllowed && (0, k.qq)(a)
  }), i.useEffect(() => {
    N.default.track(j.rMx.AGE_GATE_ACTION, {
      source: a,
      action: z.Al.AGE_GATE_OPEN
    })
  }, [a]);
  let K = i.useCallback(e => {
      v(e)
    }, [v]),
    O = i.useCallback(() => {
      var e;
      null === (e = I.current) || void 0 === e || e.focus()
    }, [I]);
  return Z ? (0, r.jsxs)(d.Y0X, {
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
          children: A.NW.string(A.t["u/xqhY"])
        })]
      })
    }), (0, r.jsxs)(d.mzw, {
      justify: f.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(d.zxk, {
        size: d.PhG.SMALL,
        onClick: B,
        children: A.NW.string(A.t["5B+npK"])
      }), (0, r.jsx)(d.zxk, {
        look: d.zxk.Looks.LINK,
        size: d.zxk.Sizes.NONE,
        color: d.zxk.Colors.PRIMARY,
        onClick: B,
        children: A.NW.string(A.t.f3Pet7)
      })]
    })]
  }) : 0 === W ? function() {
    let e = a === z.L0.FAMILY_CENTER ? A.NW.string(A.t.M7mt7u) : A.NW.string(A.t.F8otRk),
      i = (() => {
        switch (a) {
          case z.L0.FAMILY_CENTER:
            return A.NW.string(A.t.mhUrKS);
          case z.L0.DEEP_LINK_PROMPT:
            return A.NW.format(A.t.iyhg2t, {
              helpURL: b.Z.getArticleURL(j.BhN.AGE_GATE)
            });
          default:
            return A.NW.format(A.t.n3QjDA, {
              helpURL: b.Z.getArticleURL(j.BhN.AGE_GATE)
            })
        }
      })();
    return (0, r.jsxs)(d.Y0X, {
      transitionState: t,
      size: d.CgR.SMALL,
      "aria-labelledby": Y,
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
            id: Y,
            children: e
          }), (0, r.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, r.jsx)("form", {
          onSubmit: q,
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
          submitting: S,
          disabled: null == R,
          size: d.PhG.SMALL,
          onClick: F,
          children: A.NW.string(A.t.uBFuoq)
        }), (0, r.jsx)(d.zxk, {
          look: d.zxk.Looks.LINK,
          size: d.zxk.Sizes.NONE,
          color: d.zxk.Colors.PRIMARY,
          onClick: B,
          children: A.NW.string(A.t["1MrpWF"])
        })]
      })]
    })
  }() : (0, r.jsxs)(d.Y0X, {
    transitionState: d.Dvm.ENTERED,
    size: d.CgR.SMALL,
    "aria-labelledby": Y,
    children: [(0, r.jsx)(d.hzk, {
      children: (0, r.jsxs)("div", {
        className: C.confirmContainer,
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-xl/semibold",
          className: C.confirmTitle,
          id: Y,
          children: A.NW.format(A.t.wumolZ, {
            age: D
          })
        }), (0, r.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: A.NW.format(A.t.n3QjDA, {
            helpURL: b.Z.getArticleURL(j.BhN.AGE_GATE)
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
        onClick: U,
        children: A.NW.string(A.t["6tahio"])
      })]
    })]
  })
}