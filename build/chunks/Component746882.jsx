/** Chunk was on 57155 **/
/** chunk id: 746882, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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
  Chunk472343 = require("./472343.js");

function C(t) {
  let {
    transitionState: e,
    source: o
  } = t, l = (0, u.e7)([x.default], () => x.default.getCurrentUser()), C = (0, u.e7)([p.Z, _.Z], () => _.Z.getChannel(p.Z.getChannelId())), [I, z] = i.useState(null), [w, k] = i.useState(null), [M, G] = i.useState(false), [O, F] = i.useState(0), V = i.useRef(null), P = i.useRef(null), U = (0, h.Dt)(), D = (0, A.Kt)() && o !== j.L0.FAMILY_CENTER, {
    verifyAgreementButtonText: Y,
    verifyGateDescription: W
  } = (0, A.a1)(o), B = o === j.L0.NSFW_SERVER || o === j.L0.NSFW_SERVER_INVITE || o === j.L0.NSFW_SERVER_INVITE_EMBED, q = null != I ? s()().diff(I, "years") : null;

  function K() {
    if (o === j.L0.NSFW_SERVER_INVITE_EMBED) return void(0, S.qV)(o);
    let t = null == C ? true : C.getGuildId();
    m.Z.nsfwReturnToSafety(t), (0, S.qV)(o)
  }
  async function X() {
    a()(null != I, "Cannot submit null birthday.");
    try {
      return k(null), G(true), await (0, N.Av)(I, o)
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth)(0, S.C8)(o, e.body.date_of_birth);
      else {
        var t;
        (null == e || null == (t = e.body) ? true : t.username) != null ? k(L.intl.string(L.t["TGg/2t"])) : k(null == e ? true : e.body.message), G(false)
      }
    }
  }
  async function J() {
    if (a()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18) return void F(1);
    await X()
  }
  async function Q(t) {
    t.preventDefault(), M || null == I || await J()
  }
  async function $() {
    null == await X() && F(0)
  }
  i.useEffect(() => {
    null == l || null == l.nsfwAllowed || D || (0, S.qq)(o)
  }), i.useEffect(() => {
    g.default.track(Z.rMx.AGE_GATE_ACTION, {
      source: o,
      action: j.Al.AGE_GATE_OPEN
    })
  }, [o]);
  let H = i.useCallback(t => {
      z(t)
    }, [z]),
    tt = i.useCallback(() => {
      var t;
      null == (t = P.current) || t.focus()
    }, [P]),
    te = i.useCallback(() => {
      E.Z.showAgeVerificationGetStartedModal(y.cU.NSFW_AGE_GATE)
    }, []);
  return D ? (0, r.jsxs)(d.Y0X, {
    impression: {
      impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
    },
    transitionState: e,
    size: d.CgR.SMALL,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, r.jsx)(d.hzk, {
      children: (0, r.jsxs)("div", {
        className: T.container,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: n(462991),
          className: T.img
        }), (0, r.jsx)(d.X6q, {
          variant: "heading-xl/semibold",
          className: T.title,
          children: B ? L.intl.string(L.t.xi46lp) : L.intl.string(L.t.ZmwvDQ)
        }), (0, r.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: W
        })]
      })
    }), (0, r.jsxs)(d.mzw, {
      justify: b.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(d.zxk, {
        variant: "primary",
        size: "sm",
        text: Y,
        onClick: te
      }), (0, r.jsx)(f.zx, {
        look: f.zx.Looks.LINK,
        size: f.zx.Sizes.NONE,
        color: f.zx.Colors.PRIMARY,
        onClick: K,
        children: L.intl.string(L.t.f3Pet7)
      })]
    })]
  }) : 0 === O ? function() {
    let t = (() => {
        switch (o) {
          case j.L0.NSFW_SERVER:
          case j.L0.NSFW_SERVER_INVITE:
          case j.L0.NSFW_SERVER_INVITE_EMBED:
            return L.intl.string(L.t.vAymlJ);
          case j.L0.FAMILY_CENTER:
            return L.intl.string(L.t.M7mt7u);
          default:
            return L.intl.string(L.t.F8otRk)
        }
      })(),
      i = (() => {
        switch (o) {
          case j.L0.NSFW_SERVER:
          case j.L0.NSFW_SERVER_INVITE:
          case j.L0.NSFW_SERVER_INVITE_EMBED:
            return L.intl.format(L.t["6ejLER"], {
              helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE)
            });
          case j.L0.FAMILY_CENTER:
            return L.intl.string(L.t.mhUrKS);
          case j.L0.DEEP_LINK_PROMPT:
            return L.intl.format(L.t.iyhg2t, {
              helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE)
            });
          default:
            return L.intl.format(L.t.n3QjDA, {
              helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE)
            })
        }
      })();
    return (0, r.jsxs)(d.Y0X, {
      transitionState: e,
      size: d.CgR.SMALL,
      "aria-labelledby": U,
      parentComponent: "ExistingUserAgeGatePrompt",
      children: [(0, r.jsxs)(d.hzk, {
        children: [(0, r.jsxs)("div", {
          className: T.container,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: n(462991),
            className: T.img
          }), (0, r.jsx)(d.X6q, {
            variant: "heading-xl/semibold",
            className: T.title,
            id: U,
            children: t
          }), (0, r.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, r.jsx)("form", {
          onSubmit: Q,
          children: (0, r.jsx)(R.Z, {
            label: L.intl.string(L.t.rhBeKS),
            wrapperClassName: T.birthday,
            name: "date_of_birth",
            onChange: H,
            onPopulated: tt,
            error: w,
            value: I,
            ref: V,
            autoFocus: true
          })
        })]
      }), (0, r.jsxs)(d.mzw, {
        justify: b.Z.Justify.BETWEEN,
        children: [(0, r.jsx)(d.zxk, {
          variant: "primary",
          size: "sm",
          text: L.intl.string(L.t.uBFuoq),
          buttonRef: P,
          loading: M,
          disabled: null == I,
          onClick: J
        }), (0, r.jsx)(f.zx, {
          look: f.zx.Looks.LINK,
          size: f.zx.Sizes.NONE,
          color: f.zx.Colors.PRIMARY,
          onClick: K,
          children: L.intl.string(L.t["1MrpWF"])
        })]
      })]
    })
  }() : (0, r.jsxs)(d.Y0X, {
    transitionState: d.Dvm.ENTERED,
    size: d.CgR.SMALL,
    "aria-labelledby": U,
    parentComponent: "ExistingUserAgeGatePrompt",
    children: [(0, r.jsx)(d.hzk, {
      children: (0, r.jsxs)("div", {
        className: T.confirmContainer,
        children: [(0, r.jsx)(d.X6q, {
          variant: "heading-xl/semibold",
          className: T.confirmTitle,
          id: U,
          children: L.intl.format(L.t.wumolZ, {
            age: q
          })
        }), (0, r.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: L.intl.format(L.t.n3QjDA, {
            helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE)
          })
        })]
      })
    }), (0, r.jsxs)(d.mzw, {
      className: T.confirmFooter,
      children: [(0, r.jsx)(f.zx, {
        look: f.zx.Looks.LINK,
        size: f.zx.Sizes.NONE,
        color: f.zx.Colors.PRIMARY,
        onClick: () => F(0),
        children: L.intl.string(L.t.cfYCra)
      }), (0, r.jsx)(d.zxk, {
        variant: "primary",
        text: L.intl.string(L.t["6tahio"]),
        onClick: $
      })]
    })]
  })
}