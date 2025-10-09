/** Chunk was on 18831 **/
/** chunk id: 188879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk286379 = require("./286379.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk797614 = require("./797614.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk331692 = require("./331692.jsx"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk451284 = require("./451284.js"),
  Chunk613734 = require("./613734.js"),
  Chunk846488 = require("./846488.js"),
  Chunk384725 = require("./384725.jsx"),
  Chunk97568 = require("./97568.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586449 = require("./586449.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = e => {
    let {
      classificationTypeText: t,
      guildMetadata: n
    } = e, l = a.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => (0, i.jsx)("strong", {
          children: e
        }, t)
      };
      return null == n ? A.intl.format(A.t.HpvELi, e) : (null == n ? true : n.member_type) === h.wO.OWNER ? A.intl.format(A.t.X1ngSU, w(C({}, e), {
        guildName: null == n ? true : n.name
      })) : A.intl.format(A.t.rmpEPD, w(C({}, e), {
        guildName: null == n ? true : n.name
      }))
    }, [t, n]);
    return (0, i.jsx)(c.Heading, {
      variant: "heading-xl/normal",
      children: l
    })
  },
  S = e => {
    let {
      actions: t,
      classificationExpiration: n
    } = e, a = (0, d.e7)([m.default], () => m.default.locale);
    return 0 === t.filter(e => e.descriptions.length > 0).length && null == n ? null : (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: A.intl.string(A.t.O2nYk5)
      }), (0, i.jsxs)("ul", {
        className: P.classificationActionsTakenList,
        children: [t.map(e => (0, i.jsx)(L, {
          action: e
        }, e.id)), null != n ? (0, i.jsx)("li", {
          className: P.classificationActionsTakenRow,
          children: (0, i.jsx)(c.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-default",
            children: A.intl.format(A.t.TByIjY, {
              expirationDate: n.toLocaleDateString(a, {
                dateStyle: "medium"
              })
            })
          })
        }, "expiration") : null]
      })]
    })
  },
  L = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: P.classificationActionsTakenRow,
        children: (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-default",
          children: e
        })
      }, t))
    })
  },
  N = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(c.Anchor, {
      href: n,
      className: P.classificationPolicyCard,
      useDefaultUnderlineStyles: false,
      children: [(0, i.jsx)("div", {
        className: P.classificationPolicyCardIcon,
        children: (0, i.jsx)(c.b7C, {
          size: "md",
          color: s.Z.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: P.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: A.intl.format(A.t.zxUdpq, {
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: P.classificationPolicyLinkIcon,
        children: (0, i.jsx)(c.Fbu, {
          size: "md",
          color: s.Z.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  I = () => (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t["I2H0/P"])
  }),
  k = e => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: A.intl.format(A.t.IFxUaW, {
      letUsKnowHook: (t, n) => (0, i.jsx)(c.Anchor, {
        href: e.isAppealEligible ? true : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  U = e => (0, i.jsx)("div", {
    className: P.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(I, {}) : (0, i.jsx)(k, {
      appealLink: E.sQ.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  D = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: l,
      appealComponent: o
    } = e;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: A.intl.string(A.t["977ien"])
      }), (0, i.jsx)(c.Text, {
        className: P.guidelinesExplanation,
        variant: "text-sm/normal",
        children: A.intl.format(A.t["1Z/+aG"], {
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(N, {
        classificationTypeText: a,
        policyExplainerLink: l
      }), o]
    })
  },
  Z = e => {
    var t;
    let {
      classificationId: n,
      source: l,
      onError: s,
      onClose: c
    } = e, {
      classification: m,
      classificationRequestState: A,
      isAppealEligible: C,
      isDsaEligible: w,
      violationType: L
    } = (0, v.YG)(n), N = (0, d.e7)([g.Z], () => g.Z.getAppealEligibility()), I = (0, b.P)(), k = null != m && null != m.flagged_content && m.flagged_content.length > 0, Z = (0, _.e)(), M = !!(null == m ? true : m.is_coppa) && N.includes(h.tG.AGE_VERIFY_ELIGIBLE), R = (M && N.includes(h.tG.AGE_VERIFY_GLOBAL_ELIGIBLE), {
      accountStanding: I,
      classificationId: n,
      hasFlaggedContent: k,
      isDsaEligible: w,
      source: l,
      violationType: L
    }), Y = a.useRef(R);
    return (a.useEffect(() => {
      Y.current = R
    }), a.useEffect(() => {
      let {
        accountStanding: e,
        classificationId: t,
        hasFlaggedContent: n,
        isDsaEligible: i,
        source: a,
        violationType: l
      } = Y.current;
      Z && p.default.track(O.rMx.SAFETY_HUB_ACTION, {
        action: E.n0.ViewViolationDetail,
        account_standing: e.state,
        classification_ids: [Number(t)],
        source: a,
        is_violative_content_shown: n,
        is_dsa_eligible: i,
        violation_type: l
      })
    }, [Z]), null == m && A === h.OY.FAILED) ? (s(), null) : null == m ? null : (0, i.jsxs)("div", {
      className: P.classificationContainer,
      children: [(0, i.jsx)("div", {
        className: P.section,
        children: (0, i.jsx)(T, {
          classificationTypeText: m.description,
          guildMetadata: null == m ? true : m.guild_metadata
        })
      }), (0, i.jsxs)("div", {
        className: o()(P.body, P.section),
        children: [(0, i.jsx)(j.s, {
          flaggedContent: null != (t = m.flagged_content) ? t : []
        }), (0, i.jsx)(S, {
          actions: m.actions,
          classificationExpiration: (0, y.Pu)(m)
        }), (0, i.jsx)(D, {
          classificationTypeText: m.description,
          tosLink: E.sQ.TOS_LINK,
          communityGuidelinesLink: E.sQ.COMMUNITY_GUIDELINES,
          policyExplainerLink: m.explainer_link,
          appealComponent: (0, i.jsx)(U, {
            hasBeenAppealed: null != m.appeal_status,
            onLetUsKnowClick: () => {
              p.default.track(O.rMx.SAFETY_HUB_ACTION, {
                action: E.n0.ClickLetUsKnow,
                account_standing: I.state,
                classification_ids: [Number(n)],
                source: l,
                is_violative_content_shown: k,
                is_dsa_eligible: w,
                violation_type: L
              }), M ? f.Z.open(n, c) : C && (u.Z.increment({
                name: r.V.APPEAL_INGESTION_VIEW
              }), x.Z.open(n))
            },
            isAppealEligible: C || M
          })
        })]
      })]
    })
  }