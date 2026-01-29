/** Chunk was on 9407 **/
/** chunk id: 706069, original params: E,_,I (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  O = require.n(Chunk503698),
  Chunk731738 = require("./731738.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk831062 = require("./831062.js"),
  Chunk773669 = require("./773669.js"),
  Chunk954571 = require("./954571.js"),
  Chunk67521 = require("./67521.jsx"),
  Chunk739010 = require("./739010.js"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk335891 = require("./335891.js"),
  Chunk985481 = require("./985481.js"),
  Chunk259960 = require("./259960.js"),
  Chunk26095 = require("./26095.jsx"),
  Chunk246505 = require("./246505.jsx"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976213 = require("./976213.js");

function G(E) {
  for (var _ = 1; _ < arguments.length; _++) {
    var I = null != arguments[_] ? arguments[_] : {},
      A = Object.keys(I);
    "function" == typeof Object.getOwnPropertySymbols && (A = A.concat(Object.getOwnPropertySymbols(I).filter(function(E) {
      return Object.getOwnPropertyDescriptor(I, E).enumerable
    }))), A.forEach(function(_) {
      var A;
      A = I[_], _ in E ? Object.defineProperty(E, _, {
        value: A,
        enumerable: true,
        configurable: true,
        writable: true
      }) : E[_] = A
    })
  }
  return E
}

function M(E, _) {
  return _ = null != _ ? _ : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(_)) : (function(E, _) {
    var I = Object.keys(E);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(E);
      I.push.apply(I, A)
    }
    return I
  })(Object(_)).forEach(function(I) {
    Object.defineProperty(E, I, Object.getOwnPropertyDescriptor(_, I))
  }), E
}
let u = E => {
    let {
      classificationTypeText: _,
      guildMetadata: I
    } = E, T = S.useMemo(() => {
      let E = {
        classification_type: _,
        classificationHook: (E, _) => (0, A.jsx)("strong", {
          children: E
        }, _)
      };
      return null == I ? U.intl.format(U.t.HpvELh, E) : (null == I ? true : I.member_type) === L.Z9.OWNER ? U.intl.format(U.t.X1ngSd, M(G({}, E), {
        guildName: null == I ? true : I.name
      })) : U.intl.format(U.t.rmpEPD, M(G({}, E), {
        guildName: null == I ? true : I.name
      }))
    }, [_, I]);
    return (0, A.jsx)(t.Heading, {
      variant: "heading-xl/normal",
      children: T
    })
  },
  p = E => {
    let {
      actions: _,
      classificationExpiration: I
    } = E, S = (0, N.bG)([n.default], () => n.default.locale);
    return 0 === _.filter(E => E.descriptions.length > 0).length && null == I ? null : (0, A.jsxs)("div", {
      children: [(0, A.jsx)(t.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: U.intl.string(U.t["O2nYk+"])
      }), (0, A.jsxs)("ul", {
        className: d.nq,
        children: [_.map(E => (0, A.jsx)(m, {
          action: E
        }, E.id)), null != I ? (0, A.jsx)("li", {
          className: d.DJ,
          children: (0, A.jsx)(t.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-default",
            children: U.intl.format(U.t.TByIjT, {
              expirationDate: I.toLocaleDateString(S, {
                dateStyle: "medium"
              })
            })
          })
        }, "expiration") : null]
      })]
    })
  },
  m = E => {
    let {
      action: _
    } = E;
    return (0, A.jsx)(A.Fragment, {
      children: _.descriptions.map((E, _) => (0, A.jsx)("li", {
        className: d.DJ,
        children: (0, A.jsx)(t.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-default",
          children: E
        })
      }, _))
    })
  },
  B = E => {
    let {
      classificationTypeText: _,
      policyExplainerLink: I
    } = E;
    return (0, A.jsxs)(t.MzZ, {
      href: I,
      className: d.F8,
      useDefaultUnderlineStyles: false,
      children: [(0, A.jsx)("div", {
        className: d.yi,
        children: (0, A.jsx)(t.lmn, {
          size: "md",
          color: e.A.colors.BORDER_FOCUS
        })
      }), (0, A.jsx)("div", {
        className: d.wC,
        children: (0, A.jsx)(t.Text, {
          variant: "text-md/normal",
          children: U.intl.format(U.t.zxUdpj, {
            classificationDescription: _
          })
        })
      }), (0, A.jsx)("div", {
        className: d.g_,
        children: (0, A.jsx)(t._BQ, {
          size: "md",
          color: e.A.colors.INTERACTIVE_TEXT_DEFAULT
        })
      })]
    })
  },
  h = () => (0, A.jsx)(t.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: U.intl.string(U.t["I2H0/E"])
  }),
  H = E => (0, A.jsx)(t.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: U.intl.format(U.t.IFxUaT, {
      letUsKnowHook: (_, I) => (0, A.jsx)(t.MzZ, {
        href: E.isAppealEligible ? true : E.appealLink,
        onClick: E.letUsKnowClick,
        children: _
      }, I)
    })
  }),
  f = E => (0, A.jsx)("div", {
    className: d.CC,
    children: E.hasBeenAppealed ? (0, A.jsx)(h, {}) : (0, A.jsx)(H, {
      appealLink: c.d$.APPEALS_LINK,
      letUsKnowClick: E.onLetUsKnowClick,
      isAppealEligible: E.isAppealEligible
    })
  }),
  F = E => {
    let {
      tosLink: _,
      communityGuidelinesLink: I,
      classificationTypeText: S,
      policyExplainerLink: T,
      appealComponent: O
    } = E;
    return (0, A.jsxs)("div", {
      children: [(0, A.jsx)(t.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: U.intl.string(U.t["977iei"])
      }), (0, A.jsx)(t.Text, {
        className: d.t8,
        variant: "text-sm/normal",
        children: U.intl.format(U.t["1Z/+aA"], {
          tosLink: _,
          communityGuidelinesLink: I
        })
      }), (0, A.jsx)(B, {
        classificationTypeText: S,
        policyExplainerLink: T
      }), O]
    })
  },
  g = E => {
    var _;
    let {
      classificationId: I,
      source: T,
      onError: e,
      onClose: t
    } = E, {
      classification: n,
      classificationRequestState: U,
      isAppealEligible: G,
      isDsaEligible: M,
      violationType: m
    } = (0, r.LJ)(I), B = (0, N.bG)([l.A], () => l.A.getAppealEligibility()), h = (0, a.K)(), H = null != n && null != n.flagged_content && n.flagged_content.length > 0, g = (0, o.v)(), y = !!(null == n ? true : n.is_coppa) && B.includes(L.RH.AGE_VERIFY_ELIGIBLE), j = !!(null == n ? true : n.is_coppa) && B.includes(L.RH.AGE_VERIFY_GLOBAL_ELIGIBLE), b = {
      accountStanding: h,
      classificationId: I,
      hasFlaggedContent: H,
      isDsaEligible: M,
      source: T,
      violationType: m
    }, v = S.useRef(b);
    return (S.useEffect(() => {
      v.current = b
    }), S.useEffect(() => {
      let {
        accountStanding: E,
        classificationId: _,
        hasFlaggedContent: I,
        isDsaEligible: A,
        source: S,
        violationType: T
      } = v.current;
      g && P.default.track(Y.HAw.SAFETY_HUB_ACTION, {
        action: c.ZU.ViewViolationDetail,
        account_standing: E.state,
        classification_ids: [Number(_)],
        source: S,
        is_violative_content_shown: I,
        is_dsa_eligible: A,
        violation_type: T
      })
    }, [g]), null == n && U === L.nU.FAILED) ? (e(), null) : null == n ? null : (0, A.jsxs)("div", {
      className: d.ch,
      children: [(0, A.jsx)("div", {
        className: d.uW,
        children: (0, A.jsx)(u, {
          classificationTypeText: n.description,
          guildMetadata: null == n ? true : n.guild_metadata
        })
      }), (0, A.jsxs)("div", {
        className: O()(d.rf, d.uW),
        children: [(0, A.jsx)(V.U, {
          flaggedContent: null != (_ = n.flagged_content) ? _ : []
        }), (0, A.jsx)(p, {
          actions: n.actions,
          classificationExpiration: (0, D.UI)(n)
        }), (0, A.jsx)(F, {
          classificationTypeText: n.description,
          tosLink: c.d$.TOS_LINK,
          communityGuidelinesLink: c.d$.COMMUNITY_GUIDELINES,
          policyExplainerLink: n.explainer_link,
          appealComponent: (0, A.jsx)(f, {
            hasBeenAppealed: null != n.appeal_status,
            onLetUsKnowClick: () => {
              P.default.track(Y.HAw.SAFETY_HUB_ACTION, {
                action: c.ZU.ClickLetUsKnow,
                account_standing: h.state,
                classification_ids: [Number(I)],
                source: T,
                is_violative_content_shown: H,
                is_dsa_eligible: M,
                violation_type: m
              }), j ? i.A.openV2(I, t) : y ? i.A.open(I, t) : G && (R.A.increment({
                name: C.K.APPEAL_INGESTION_VIEW
              }), s.A.open(I))
            },
            isAppealEligible: G || y
          })
        })]
      })]
    })
  }