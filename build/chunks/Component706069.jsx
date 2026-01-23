/** Chunk was on 9407 **/
/** chunk id: 706069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function P(e, t) {
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
let C = e => {
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
      return null == n ? O.intl.format(O.t.HpvELh, e) : (null == n ? true : n.member_type) === f.Z9.OWNER ? O.intl.format(O.t.X1ngSd, P(w({}, e), {
        guildName: null == n ? true : n.name
      })) : O.intl.format(O.t.rmpEPD, P(w({}, e), {
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
    } = e, a = (0, d.bG)([p.default], () => p.default.locale);
    return 0 === t.filter(e => e.descriptions.length > 0).length && null == n ? null : (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: O.intl.string(O.t["O2nYk+"])
      }), (0, i.jsxs)("ul", {
        className: T.nq,
        children: [t.map(e => (0, i.jsx)(L, {
          action: e
        }, e.id)), null != n ? (0, i.jsx)("li", {
          className: T.DJ,
          children: (0, i.jsx)(c.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-default",
            children: O.intl.format(O.t.TByIjT, {
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
        className: T.DJ,
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
    return (0, i.jsxs)(c.MzZ, {
      href: n,
      className: T.F8,
      useDefaultUnderlineStyles: false,
      children: [(0, i.jsx)("div", {
        className: T.yi,
        children: (0, i.jsx)(c.lmn, {
          size: "md",
          color: s.A.colors.BORDER_FOCUS
        })
      }), (0, i.jsx)("div", {
        className: T.wC,
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: O.intl.format(O.t.zxUdpj, {
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: T.g_,
        children: (0, i.jsx)(c._BQ, {
          size: "md",
          color: s.A.colors.INTERACTIVE_TEXT_DEFAULT
        })
      })]
    })
  },
  U = () => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: O.intl.string(O.t["I2H0/E"])
  }),
  I = e => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: O.intl.format(O.t.IFxUaT, {
      letUsKnowHook: (t, n) => (0, i.jsx)(c.MzZ, {
        href: e.isAppealEligible ? true : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  D = e => (0, i.jsx)("div", {
    className: T.CC,
    children: e.hasBeenAppealed ? (0, i.jsx)(U, {}) : (0, i.jsx)(I, {
      appealLink: j.d$.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  k = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: l,
      appealComponent: r
    } = e;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: O.intl.string(O.t["977iei"])
      }), (0, i.jsx)(c.Text, {
        className: T.t8,
        variant: "text-sm/normal",
        children: O.intl.format(O.t["1Z/+aA"], {
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(N, {
        classificationTypeText: a,
        policyExplainerLink: l
      }), r]
    })
  },
  M = e => {
    var t;
    let {
      classificationId: n,
      source: l,
      onError: s,
      onClose: c
    } = e, {
      classification: p,
      classificationRequestState: O,
      isAppealEligible: w,
      isDsaEligible: P,
      violationType: L
    } = (0, A.LJ)(n), N = (0, d.bG)([g.A], () => g.A.getAppealEligibility()), U = (0, y.K)(), I = null != p && null != p.flagged_content && p.flagged_content.length > 0, M = (0, b.v)(), H = !!(null == p ? true : p.is_coppa) && N.includes(f.RH.AGE_VERIFY_ELIGIBLE), R = !!(null == p ? true : p.is_coppa) && N.includes(f.RH.AGE_VERIFY_GLOBAL_ELIGIBLE), F = {
      accountStanding: U,
      classificationId: n,
      hasFlaggedContent: I,
      isDsaEligible: P,
      source: l,
      violationType: L
    }, G = a.useRef(F);
    return (a.useEffect(() => {
      G.current = F
    }), a.useEffect(() => {
      let {
        accountStanding: e,
        classificationId: t,
        hasFlaggedContent: n,
        isDsaEligible: i,
        source: a,
        violationType: l
      } = G.current;
      M && m.default.track(v.HAw.SAFETY_HUB_ACTION, {
        action: j.ZU.ViewViolationDetail,
        account_standing: e.state,
        classification_ids: [Number(t)],
        source: a,
        is_violative_content_shown: n,
        is_dsa_eligible: i,
        violation_type: l
      })
    }, [M]), null == p && O === f.nU.FAILED) ? (s(), null) : null == p ? null : (0, i.jsxs)("div", {
      className: T.ch,
      children: [(0, i.jsx)("div", {
        className: T.uW,
        children: (0, i.jsx)(C, {
          classificationTypeText: p.description,
          guildMetadata: null == p ? true : p.guild_metadata
        })
      }), (0, i.jsxs)("div", {
        className: r()(T.rf, T.uW),
        children: [(0, i.jsx)(x.U, {
          flaggedContent: null != (t = p.flagged_content) ? t : []
        }), (0, i.jsx)(S, {
          actions: p.actions,
          classificationExpiration: (0, _.UI)(p)
        }), (0, i.jsx)(k, {
          classificationTypeText: p.description,
          tosLink: j.d$.TOS_LINK,
          communityGuidelinesLink: j.d$.COMMUNITY_GUIDELINES,
          policyExplainerLink: p.explainer_link,
          appealComponent: (0, i.jsx)(D, {
            hasBeenAppealed: null != p.appeal_status,
            onLetUsKnowClick: () => {
              m.default.track(v.HAw.SAFETY_HUB_ACTION, {
                action: j.ZU.ClickLetUsKnow,
                account_standing: U.state,
                classification_ids: [Number(n)],
                source: l,
                is_violative_content_shown: I,
                is_dsa_eligible: P,
                violation_type: L
              }), R ? h.A.openV2(n, c) : H ? h.A.open(n, c) : w && (u.A.increment({
                name: o.K.APPEAL_INGESTION_VIEW
              }), E.A.open(n))
            },
            isAppealEligible: w || H
          })
        })]
      })]
    })
  }