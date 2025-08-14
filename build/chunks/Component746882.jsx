/** Chunk was on 26328 **/
/** chunk id: 746882, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk771308 = require("./771308.js"),
  Chunk758119 = require("./758119.js"),
  Chunk622822 = require("./622822.js"),
  Chunk13430 = require("./13430.jsx"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk425816 = require("./425816.js");

function I(e) {
  let {
    transitionState: t,
    source: a
  } = e, s = (0, u.e7)([g.default], () => g.default.getCurrentUser()), I = (0, u.e7)([R.Z, N.Z], () => N.Z.getChannel(R.Z.getChannelId())), [v, k] = r.useState(null), [G, M] = r.useState(null), [F, V] = r.useState(false), [w, U] = r.useState(0), Z = r.useRef(null), D = r.useRef(null), Y = (0, x.Dt)(), W = (0, p.Kt)() && a !== C.L0.FAMILY_CENTER, {
    verifyAgreementButtonText: B,
    verifyGateDescription: P
  } = (0, p.a1)(a), q = a === C.L0.NSFW_SERVER || a === C.L0.NSFW_SERVER_INVITE || a === C.L0.NSFW_SERVER_INVITE_EMBED, K = null != v ? o()().diff(v, "years") : null;

  function O() {
    if (a === C.L0.NSFW_SERVER_INVITE_EMBED) return void(0, L.qV)(a);
    let e = null == I ? true : I.getGuildId();
    E.Z.nsfwReturnToSafety(e), (0, L.qV)(a)
  }
  async function X() {
    l()(null != v, "Cannot submit null birthday.");
    try {
      return M(null), V(true), await (0, S.Av)(v, a)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, L.C8)(a, t.body.date_of_birth);
      else {
        var e;
        (null == t || null == (e = t.body) ? true : e.username) != null ? M(j.intl.string(j.t["TGg/2t"])) : M(null == t ? true : t.body.message), V(false)
      }
    }
  }
  async function J() {
    if (l()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18) return void U(1);
    await X()
  }
  async function Q(e) {
    e.preventDefault(), F || null == v || await J()
  }
  async function H() {
    null == await X() && U(0)
  }
  r.useEffect(() => {
    null == s || null == s.nsfwAllowed || W || (0, L.qq)(a)
  }), r.useEffect(() => {
    b.default.track(T.rMx.AGE_GATE_ACTION, {
      source: a,
      action: C.Al.AGE_GATE_OPEN
    })
  }, [a]);
  let $ = r.useCallback(e => {
      k(e)
    }, [k]),
    ee = r.useCallback(() => {
      var e;
      null == (e = D.current) || e.focus()
    }, [D]),
    et = r.useCallback(() => {
      m.Z.showAgeVerificationGetStartedModal(_.cU.NSFW_AGE_GATE)
    }, []);
  return W ? (0, i.jsxs)(f.Y0X, {
    impression: {
      impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
    },
    transitionState: t,
    size: f.CgR.SMALL,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, i.jsx)(f.hzk, {
      children: (0, i.jsxs)("div", {
        className: z.container,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: n(462991),
          className: z.img
        }), (0, i.jsx)(f.X6q, {
          variant: "heading-xl/semibold",
          className: z.title,
          children: q ? j.intl.string(j.t.xi46lp) : j.intl.string(j.t.ZmwvDQ)
        }), (0, i.jsx)(f.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: P
        })]
      })
    }), (0, i.jsxs)(f.mzw, {
      justify: h.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(f.zxk, {
        variant: "primary",
        size: "sm",
        text: B,
        onClick: et
      }), (0, i.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        size: d.zx.Sizes.NONE,
        color: d.zx.Colors.PRIMARY,
        onClick: O,
        children: j.intl.string(j.t.f3Pet7)
      })]
    })]
  }) : 0 === w ? function() {
    let e = (() => {
        switch (a) {
          case C.L0.NSFW_SERVER:
          case C.L0.NSFW_SERVER_INVITE:
          case C.L0.NSFW_SERVER_INVITE_EMBED:
            return j.intl.string(j.t.vAymlJ);
          case C.L0.FAMILY_CENTER:
            return j.intl.string(j.t.M7mt7u);
          default:
            return j.intl.string(j.t.F8otRk)
        }
      })(),
      r = (() => {
        switch (a) {
          case C.L0.NSFW_SERVER:
          case C.L0.NSFW_SERVER_INVITE:
          case C.L0.NSFW_SERVER_INVITE_EMBED:
            return j.intl.format(j.t["6ejLER"], {
              helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE)
            });
          case C.L0.FAMILY_CENTER:
            return j.intl.string(j.t.mhUrKS);
          case C.L0.DEEP_LINK_PROMPT:
            return j.intl.format(j.t.iyhg2t, {
              helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE)
            });
          default:
            return j.intl.format(j.t.n3QjDA, {
              helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE)
            })
        }
      })();
    return (0, i.jsxs)(f.Y0X, {
      transitionState: t,
      size: f.CgR.SMALL,
      "aria-labelledby": Y,
      parentComponent: "ExistingUserAgeGatePrompt",
      children: [(0, i.jsxs)(f.hzk, {
        children: [(0, i.jsxs)("div", {
          className: z.container,
          children: [(0, i.jsx)("img", {
            alt: "",
            src: n(462991),
            className: z.img
          }), (0, i.jsx)(f.X6q, {
            variant: "heading-xl/semibold",
            className: z.title,
            id: Y,
            children: e
          }), (0, i.jsx)(f.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: r
          })]
        }), (0, i.jsx)("form", {
          onSubmit: Q,
          children: (0, i.jsx)(y.Z, {
            label: j.intl.string(j.t.rhBeKS),
            wrapperClassName: z.birthday,
            name: "date_of_birth",
            onChange: $,
            onPopulated: ee,
            error: G,
            value: v,
            ref: Z,
            autoFocus: true
          })
        })]
      }), (0, i.jsxs)(f.mzw, {
        justify: h.Z.Justify.BETWEEN,
        children: [(0, i.jsx)(f.zxk, {
          variant: "primary",
          size: "sm",
          text: j.intl.string(j.t.uBFuoq),
          buttonRef: D,
          loading: F,
          disabled: null == v,
          onClick: J
        }), (0, i.jsx)(d.zx, {
          look: d.zx.Looks.LINK,
          size: d.zx.Sizes.NONE,
          color: d.zx.Colors.PRIMARY,
          onClick: O,
          children: j.intl.string(j.t["1MrpWF"])
        })]
      })]
    })
  }() : (0, i.jsxs)(f.Y0X, {
    transitionState: f.Dvm.ENTERED,
    size: f.CgR.SMALL,
    "aria-labelledby": Y,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, i.jsx)(f.hzk, {
      children: (0, i.jsxs)("div", {
        className: z.confirmContainer,
        children: [(0, i.jsx)(f.X6q, {
          variant: "heading-xl/semibold",
          className: z.confirmTitle,
          id: Y,
          children: j.intl.format(j.t.wumolZ, {
            age: K
          })
        }), (0, i.jsx)(f.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: j.intl.format(j.t.n3QjDA, {
            helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE)
          })
        })]
      })
    }), (0, i.jsxs)(f.mzw, {
      className: z.confirmFooter,
      children: [(0, i.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        size: d.zx.Sizes.NONE,
        color: d.zx.Colors.PRIMARY,
        onClick: () => U(0),
        children: j.intl.string(j.t.cfYCra)
      }), (0, i.jsx)(f.zxk, {
        variant: "primary",
        text: j.intl.string(j.t["6tahio"]),
        onClick: H
      })]
    })]
  })
}