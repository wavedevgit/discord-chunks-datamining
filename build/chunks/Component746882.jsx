/** Chunk was on 26328 **/
/** chunk id: 746882, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function k(e) {
  let {
    transitionState: t,
    source: a
  } = e, s = (0, u.e7)([b.default], () => b.default.getCurrentUser()), k = (0, u.e7)([N.Z, g.Z], () => g.Z.getChannel(N.Z.getChannelId())), [v, I] = i.useState(null), [G, M] = i.useState(null), [F, w] = i.useState(false), [U, V] = i.useState(0), Y = i.useRef(null), Z = i.useRef(null), D = (0, x.Dt)(), P = (0, C.Kt)() && a !== S.L0.FAMILY_CENTER, {
    verifyAgreementButtonText: B,
    verifyGateDescription: W,
    verifyTitle: q
  } = (0, C.a1)(a), K = null != v ? o()().diff(v, "years") : null;

  function O() {
    if (a === S.L0.NSFW_SERVER_INVITE_EMBED) return void(0, p.qV)(a);
    let e = null == k ? true : k.getGuildId();
    m.Z.nsfwReturnToSafety(e), (0, p.qV)(a)
  }
  async function X() {
    l()(null != v, "Cannot submit null birthday.");
    try {
      return M(null), w(true), await (0, y.Av)(v, a)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, p.C8)(a, t.body.date_of_birth);
      else {
        var e;
        (null == t || null == (e = t.body) ? true : e.username) != null ? M(z.intl.string(z.t["TGg/2t"])) : M(null == t ? true : t.body.message), w(false)
      }
    }
  }
  async function J() {
    if (l()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18) return void V(1);
    await X()
  }
  async function Q(e) {
    e.preventDefault(), F || null == v || await J()
  }
  async function H() {
    null == await X() && V(0)
  }
  i.useEffect(() => {
    null == s || null == s.nsfwAllowed || P || (0, p.qq)(a)
  }), i.useEffect(() => {
    R.default.track(j.rMx.AGE_GATE_ACTION, {
      source: a,
      action: S.Al.AGE_GATE_OPEN
    })
  }, [a]);
  let $ = i.useCallback(e => {
      I(e)
    }, [I]),
    ee = i.useCallback(() => {
      var e;
      null == (e = Z.current) || e.focus()
    }, [Z]),
    et = i.useCallback(() => {
      E.Z.showAgeVerificationGetStartedModal({
        entryPoint: _.cU.NSFW_AGE_GATE
      })
    }, []);
  return P ? (0, r.jsxs)(f.Y0X, {
    impression: {
      impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
    },
    transitionState: t,
    size: f.CgR.SMALL,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, r.jsx)(f.hzk, {
      children: (0, r.jsxs)("div", {
        className: T.container,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: n(462991),
          className: T.img
        }), (0, r.jsx)(f.X6q, {
          variant: "heading-xl/semibold",
          className: T.title,
          children: q
        }), (0, r.jsx)(f.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: W
        })]
      })
    }), (0, r.jsxs)(f.mzw, {
      justify: h.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(f.zxk, {
        variant: "primary",
        size: "sm",
        text: B,
        onClick: et
      }), (0, r.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        size: d.zx.Sizes.NONE,
        color: d.zx.Colors.PRIMARY,
        onClick: O,
        children: z.intl.string(z.t.f3Pet7)
      })]
    })]
  }) : 0 === U ? function() {
    let e = (() => {
        switch (a) {
          case S.L0.NSFW_SERVER:
          case S.L0.NSFW_SERVER_INVITE:
          case S.L0.NSFW_SERVER_INVITE_EMBED:
            return z.intl.string(z.t.vAymlJ);
          case S.L0.FAMILY_CENTER:
            return z.intl.string(z.t.M7mt7u);
          default:
            return z.intl.string(z.t.F8otRk)
        }
      })(),
      i = (() => {
        switch (a) {
          case S.L0.NSFW_SERVER:
          case S.L0.NSFW_SERVER_INVITE:
          case S.L0.NSFW_SERVER_INVITE_EMBED:
            return z.intl.format(z.t["6ejLER"], {
              helpURL: A.Z.getArticleURL(j.BhN.AGE_GATE)
            });
          case S.L0.FAMILY_CENTER:
            return z.intl.string(z.t.mhUrKS);
          case S.L0.DEEP_LINK_PROMPT:
            return z.intl.format(z.t.iyhg2t, {
              helpURL: A.Z.getArticleURL(j.BhN.AGE_GATE)
            });
          default:
            return z.intl.format(z.t.n3QjDA, {
              helpURL: A.Z.getArticleURL(j.BhN.AGE_GATE)
            })
        }
      })();
    return (0, r.jsxs)(f.Y0X, {
      transitionState: t,
      size: f.CgR.SMALL,
      "aria-labelledby": D,
      parentComponent: "ExistingUserAgeGatePrompt",
      children: [(0, r.jsxs)(f.hzk, {
        children: [(0, r.jsxs)("div", {
          className: T.container,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: n(462991),
            className: T.img
          }), (0, r.jsx)(f.X6q, {
            variant: "heading-xl/semibold",
            className: T.title,
            id: D,
            children: e
          }), (0, r.jsx)(f.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, r.jsx)("form", {
          onSubmit: Q,
          children: (0, r.jsx)(L.Z, {
            label: z.intl.string(z.t.rhBeKS),
            wrapperClassName: T.birthday,
            name: "date_of_birth",
            onChange: $,
            onPopulated: ee,
            error: G,
            value: v,
            ref: Y,
            autoFocus: true
          })
        })]
      }), (0, r.jsxs)(f.mzw, {
        justify: h.Z.Justify.BETWEEN,
        children: [(0, r.jsx)(f.zxk, {
          variant: "primary",
          size: "sm",
          text: z.intl.string(z.t.uBFuoq),
          buttonRef: Z,
          loading: F,
          disabled: null == v,
          onClick: J
        }), (0, r.jsx)(d.zx, {
          look: d.zx.Looks.LINK,
          size: d.zx.Sizes.NONE,
          color: d.zx.Colors.PRIMARY,
          onClick: O,
          children: z.intl.string(z.t["1MrpWF"])
        })]
      })]
    })
  }() : (0, r.jsxs)(f.Y0X, {
    transitionState: f.Dvm.ENTERED,
    size: f.CgR.SMALL,
    "aria-labelledby": D,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, r.jsx)(f.hzk, {
      children: (0, r.jsxs)("div", {
        className: T.confirmContainer,
        children: [(0, r.jsx)(f.X6q, {
          variant: "heading-xl/semibold",
          className: T.confirmTitle,
          id: D,
          children: z.intl.format(z.t.wumolZ, {
            age: K
          })
        }), (0, r.jsx)(f.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: z.intl.format(z.t.n3QjDA, {
            helpURL: A.Z.getArticleURL(j.BhN.AGE_GATE)
          })
        })]
      })
    }), (0, r.jsxs)(f.mzw, {
      className: T.confirmFooter,
      children: [(0, r.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        size: d.zx.Sizes.NONE,
        color: d.zx.Colors.PRIMARY,
        onClick: () => V(0),
        children: z.intl.string(z.t.cfYCra)
      }), (0, r.jsx)(f.zxk, {
        variant: "primary",
        text: z.intl.string(z.t["6tahio"]),
        onClick: H
      })]
    })]
  })
}