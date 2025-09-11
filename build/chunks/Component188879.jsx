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
  Chunk31992 = require("./31992.js"),
  Chunk384725 = require("./384725.jsx"),
  Chunk97568 = require("./97568.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586449 = require("./586449.js");

function w(e) {
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

function C(e, t) {
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
      return null == n ? P.intl.format(P.t.HpvELi, e) : (null == n ? true : n.member_type) === h.wO.OWNER ? P.intl.format(P.t.X1ngSU, C(w({}, e), {
        guildName: null == n ? true : n.name
      })) : P.intl.format(P.t.rmpEPD, C(w({}, e), {
        guildName: null == n ? true : n.name
      }))
    }, [t, n]);
    return (0, i.jsx)(c.X6q, {
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
        children: P.intl.string(P.t.O2nYk5)
      }), (0, i.jsxs)("ul", {
        className: A.classificationActionsTakenList,
        children: [t.map(e => (0, i.jsx)(N, {
          action: e
        }, e.id)), null != n ? (0, i.jsx)("li", {
          className: A.classificationActionsTakenRow,
          children: (0, i.jsx)(c.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-default",
            children: P.intl.format(P.t.TByIjY, {
              expirationDate: n.toLocaleDateString(a, {
                dateStyle: "medium"
              })
            })
          })
        }, "expiration") : null]
      })]
    })
  },
  N = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: A.classificationActionsTakenRow,
        children: (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-default",
          children: e
        })
      }, t))
    })
  },
  L = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(c.eee, {
      href: n,
      className: A.classificationPolicyCard,
      useDefaultUnderlineStyles: false,
      children: [(0, i.jsx)("div", {
        className: A.classificationPolicyCardIcon,
        children: (0, i.jsx)(c.b7C, {
          size: "md",
          color: s.Z.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: A.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: P.intl.format(P.t.zxUdpq, {
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: A.classificationPolicyLinkIcon,
        children: (0, i.jsx)(c.Fbu, {
          size: "md",
          color: s.Z.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  k = () => (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t["I2H0/P"])
  }),
  I = e => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: P.intl.format(P.t.IFxUaW, {
      letUsKnowHook: (t, n) => (0, i.jsx)(c.eee, {
        href: e.isAppealEligible ? true : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  U = e => (0, i.jsx)("div", {
    className: A.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(k, {}) : (0, i.jsx)(I, {
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
        children: P.intl.string(P.t["977ien"])
      }), (0, i.jsx)(c.Text, {
        className: A.guidelinesExplanation,
        variant: "text-sm/normal",
        children: P.intl.format(P.t["1Z/+aG"], {
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(L, {
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
      classificationRequestState: P,
      isAppealEligible: w,
      isDsaEligible: C,
      violationType: N
    } = (0, v.YG)(n), L = (0, d.e7)([g.Z], () => g.Z.getAppealEligibility()), k = (0, b.P)(), I = null != m && null != m.flagged_content && m.flagged_content.length > 0, Z = (0, x.e)(), M = !!(null == m ? true : m.is_coppa) && L.includes(h.tG.AGE_VERIFY_ELIGIBLE), R = {
      accountStanding: k,
      classificationId: n,
      hasFlaggedContent: I,
      isDsaEligible: C,
      source: l,
      violationType: N
    }, Y = a.useRef(R);
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
    }, [Z]), null == m && P === h.OY.FAILED) ? (s(), null) : null == m ? null : (0, i.jsxs)("div", {
      className: A.classificationContainer,
      children: [(0, i.jsx)("div", {
        className: A.section,
        children: (0, i.jsx)(T, {
          classificationTypeText: m.description,
          guildMetadata: null == m ? true : m.guild_metadata
        })
      }), (0, i.jsxs)("div", {
        className: o()(A.body, A.section),
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
                account_standing: k.state,
                classification_ids: [Number(n)],
                source: l,
                is_violative_content_shown: I,
                is_dsa_eligible: C,
                violation_type: N
              }), M ? f.Z.open(n, c) : w && (u.Z.increment({
                name: r.V.APPEAL_INGESTION_VIEW
              }), _.Z.open(n))
            },
            isAppealEligible: w || M
          })
        })]
      })]
    })
  }