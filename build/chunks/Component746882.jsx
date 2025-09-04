/** Chunk was on 1716 **/
/** chunk id: 746882, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
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
    source: i
  } = e, s = (0, u.e7)([N.default], () => N.default.getCurrentUser()), k = (0, u.e7)([p.Z, _.Z], () => _.Z.getChannel(p.Z.getChannelId())), [L, I] = a.useState(null), [z, M] = a.useState(null), [U, D] = a.useState(false), [w, F] = a.useState(0), O = a.useRef(null), V = a.useRef(null), Z = (0, A.Dt)(), Y = (0, C.Kt)() && i !== b.L0.FAMILY_CENTER, {
    verifyAgreementButtonText: P,
    verifyGateDescription: W,
    verifyTitle: q
  } = (0, C.a1)(i), B = null != L ? o()().diff(L, "years") : null;

  function K() {
    if (i === b.L0.NSFW_SERVER_INVITE_EMBED) return void(0, T.qV)(i);
    let e = null == k ? true : k.getGuildId();
    f.Z.nsfwReturnToSafety(e), (0, T.qV)(i)
  }
  async function X() {
    r()(null != L, "Cannot submit null birthday.");
    try {
      return M(null), D(true), await (0, g.Av)(L, i)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, T.C8)(i, t.body.date_of_birth);
      else {
        var e;
        (null == t || null == (e = t.body) ? true : e.username) != null ? M(S.intl.string(S.t["TGg/2t"])) : M(null == t ? true : t.body.message), D(false)
      }
    }
  }
  async function J() {
    if (r()(null != B, "Cannot submit if we haven't been able to calculate age."), B < 18) return void F(1);
    await X()
  }
  async function Q(e) {
    e.preventDefault(), U || null == L || await J()
  }
  async function H() {
    null == await X() && F(0)
  }
  a.useEffect(() => {
    null == s || null == s.nsfwAllowed || Y || (0, T.qq)(i)
  }), a.useEffect(() => {
    y.default.track(v.rMx.AGE_GATE_ACTION, {
      source: i,
      action: b.Al.AGE_GATE_OPEN
    })
  }, [i]);
  let $ = a.useCallback(e => {
      I(e)
    }, [I]),
    ee = a.useCallback(() => {
      var e;
      null == (e = V.current) || e.focus()
    }, [V]),
    et = a.useCallback(() => {
      h.Z.showAgeVerificationGetStartedModal({
        entryPoint: m.cU.NSFW_AGE_GATE
      })
    }, []);
  return Y ? (0, l.jsxs)(E.Y0X, {
    impression: {
      impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
    },
    transitionState: t,
    size: E.CgR.SMALL,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, l.jsx)(E.hzk, {
      children: (0, l.jsxs)("div", {
        className: j.container,
        children: [(0, l.jsx)("img", {
          alt: "",
          src: n(462991),
          className: j.img
        }), (0, l.jsx)(E.X6q, {
          variant: "heading-xl/semibold",
          className: j.title,
          children: q
        }), (0, l.jsx)(E.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: W
        })]
      })
    }), (0, l.jsxs)(E.mzw, {
      justify: x.Z.Justify.BETWEEN,
      children: [(0, l.jsx)(E.zxk, {
        variant: "primary",
        size: "sm",
        text: P,
        onClick: et
      }), (0, l.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        size: d.zx.Sizes.NONE,
        color: d.zx.Colors.PRIMARY,
        onClick: K,
        children: S.intl.string(S.t.f3Pet7)
      })]
    })]
  }) : 0 === w ? function() {
    let e = (() => {
        switch (i) {
          case b.L0.NSFW_SERVER:
          case b.L0.NSFW_SERVER_INVITE:
          case b.L0.NSFW_SERVER_INVITE_EMBED:
            return S.intl.string(S.t.vAymlJ);
          case b.L0.FAMILY_CENTER:
            return S.intl.string(S.t.M7mt7u);
          default:
            return S.intl.string(S.t.F8otRk)
        }
      })(),
      a = (() => {
        switch (i) {
          case b.L0.NSFW_SERVER:
          case b.L0.NSFW_SERVER_INVITE:
          case b.L0.NSFW_SERVER_INVITE_EMBED:
            return S.intl.format(S.t["6ejLER"], {
              helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE)
            });
          case b.L0.FAMILY_CENTER:
            return S.intl.string(S.t.mhUrKS);
          case b.L0.DEEP_LINK_PROMPT:
            return S.intl.format(S.t.iyhg2t, {
              helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE)
            });
          default:
            return S.intl.format(S.t.n3QjDA, {
              helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE)
            })
        }
      })();
    return (0, l.jsxs)(E.Y0X, {
      transitionState: t,
      size: E.CgR.SMALL,
      "aria-labelledby": Z,
      parentComponent: "ExistingUserAgeGatePrompt",
      children: [(0, l.jsxs)(E.hzk, {
        children: [(0, l.jsxs)("div", {
          className: j.container,
          children: [(0, l.jsx)("img", {
            alt: "",
            src: n(462991),
            className: j.img
          }), (0, l.jsx)(E.X6q, {
            variant: "heading-xl/semibold",
            className: j.title,
            id: Z,
            children: e
          }), (0, l.jsx)(E.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, l.jsx)("form", {
          onSubmit: Q,
          children: (0, l.jsx)(G.Z, {
            label: S.intl.string(S.t.rhBeKS),
            wrapperClassName: j.birthday,
            name: "date_of_birth",
            onChange: $,
            onPopulated: ee,
            error: z,
            value: L,
            ref: O,
            autoFocus: true
          })
        })]
      }), (0, l.jsxs)(E.mzw, {
        justify: x.Z.Justify.BETWEEN,
        children: [(0, l.jsx)(E.zxk, {
          variant: "primary",
          size: "sm",
          text: S.intl.string(S.t.uBFuoq),
          buttonRef: V,
          loading: U,
          disabled: null == L,
          onClick: J
        }), (0, l.jsx)(d.zx, {
          look: d.zx.Looks.LINK,
          size: d.zx.Sizes.NONE,
          color: d.zx.Colors.PRIMARY,
          onClick: K,
          children: S.intl.string(S.t["1MrpWF"])
        })]
      })]
    })
  }() : (0, l.jsxs)(E.Y0X, {
    transitionState: E.Dvm.ENTERED,
    size: E.CgR.SMALL,
    "aria-labelledby": Z,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, l.jsx)(E.hzk, {
      children: (0, l.jsxs)("div", {
        className: j.confirmContainer,
        children: [(0, l.jsx)(E.X6q, {
          variant: "heading-xl/semibold",
          className: j.confirmTitle,
          id: Z,
          children: S.intl.format(S.t.wumolZ, {
            age: B
          })
        }), (0, l.jsx)(E.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: S.intl.format(S.t.n3QjDA, {
            helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE)
          })
        })]
      })
    }), (0, l.jsxs)(E.mzw, {
      className: j.confirmFooter,
      children: [(0, l.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        size: d.zx.Sizes.NONE,
        color: d.zx.Colors.PRIMARY,
        onClick: () => F(0),
        children: S.intl.string(S.t.cfYCra)
      }), (0, l.jsx)(E.zxk, {
        variant: "primary",
        text: S.intl.string(S.t["6tahio"]),
        onClick: H
      })]
    })]
  })
}