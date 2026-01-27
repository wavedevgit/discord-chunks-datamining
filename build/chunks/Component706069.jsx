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
let S = e => {
    let {
      classificationTypeText: t,
      guildMetadata: n
    } = e, a = l.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => (0, i.jsx)("strong", {
          children: e
        }, t)
      };
      return null == n ? x.intl.format(x.t.HpvELh, e) : (null == n ? true : n.member_type) === f.Z9.OWNER ? x.intl.format(x.t.X1ngSd, P(w({}, e), {
        guildName: null == n ? true : n.name
      })) : x.intl.format(x.t.rmpEPD, P(w({}, e), {
        guildName: null == n ? true : n.name
      }))
    }, [t, n]);
    return (0, i.jsx)(c.Heading, {
      variant: "heading-xl/normal",
      children: a
    })
  },
  N = e => {
    let {
      actions: t,
      classificationExpiration: n
    } = e, l = (0, d.bG)([p.default], () => p.default.locale);
    return 0 === t.filter(e => e.descriptions.length > 0).length && null == n ? null : (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: x.intl.string(x.t["O2nYk+"])
      }), (0, i.jsxs)("ul", {
        className: T.nq,
        children: [t.map(e => (0, i.jsx)(C, {
          action: e
        }, e.id)), null != n ? (0, i.jsx)("li", {
          className: T.DJ,
          children: (0, i.jsx)(c.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-default",
            children: x.intl.format(x.t.TByIjT, {
              expirationDate: n.toLocaleDateString(l, {
                dateStyle: "medium"
              })
            })
          })
        }, "expiration") : null]
      })]
    })
  },
  C = e => {
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
  L = e => {
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
          children: x.intl.format(x.t.zxUdpj, {
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
    children: x.intl.string(x.t["I2H0/E"])
  }),
  I = e => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: x.intl.format(x.t.IFxUaT, {
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
      appealLink: b.d$.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  k = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: l,
      policyExplainerLink: a,
      appealComponent: r
    } = e;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: x.intl.string(x.t["977iei"])
      }), (0, i.jsx)(c.Text, {
        className: T.t8,
        variant: "text-sm/normal",
        children: x.intl.format(x.t["1Z/+aA"], {
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(L, {
        classificationTypeText: l,
        policyExplainerLink: a
      }), r]
    })
  },
  M = e => {
    var t;
    let {
      classificationId: n,
      source: a,
      onError: s,
      onClose: c
    } = e, {
      classification: p,
      classificationRequestState: x,
      isAppealEligible: w,
      isDsaEligible: P,
      violationType: C
    } = (0, E.LJ)(n), L = (0, d.bG)([g.A], () => g.A.getAppealEligibility()), U = (0, y.K)(), I = null != p && null != p.flagged_content && p.flagged_content.length > 0, M = (0, j.v)(), H = !!(null == p ? true : p.is_coppa) && L.includes(f.RH.AGE_VERIFY_ELIGIBLE), F = !!(null == p ? true : p.is_coppa) && L.includes(f.RH.AGE_VERIFY_GLOBAL_ELIGIBLE), G = {
      accountStanding: U,
      classificationId: n,
      hasFlaggedContent: I,
      isDsaEligible: P,
      source: a,
      violationType: C
    }, R = l.useRef(G);
    return (l.useEffect(() => {
      R.current = G
    }), l.useEffect(() => {
      let {
        accountStanding: e,
        classificationId: t,
        hasFlaggedContent: n,
        isDsaEligible: i,
        source: l,
        violationType: a
      } = R.current;
      M && m.default.track(v.HAw.SAFETY_HUB_ACTION, {
        action: b.ZU.ViewViolationDetail,
        account_standing: e.state,
        classification_ids: [Number(t)],
        source: l,
        is_violative_content_shown: n,
        is_dsa_eligible: i,
        violation_type: a
      })
    }, [M]), null == p && x === f.nU.FAILED) ? (s(), null) : null == p ? null : (0, i.jsxs)("div", {
      className: T.ch,
      children: [(0, i.jsx)("div", {
        className: T.uW,
        children: (0, i.jsx)(S, {
          classificationTypeText: p.description,
          guildMetadata: null == p ? true : p.guild_metadata
        })
      }), (0, i.jsxs)("div", {
        className: r()(T.rf, T.uW),
        children: [(0, i.jsx)(O.U, {
          flaggedContent: null != (t = p.flagged_content) ? t : []
        }), (0, i.jsx)(N, {
          actions: p.actions,
          classificationExpiration: (0, A.UI)(p)
        }), (0, i.jsx)(k, {
          classificationTypeText: p.description,
          tosLink: b.d$.TOS_LINK,
          communityGuidelinesLink: b.d$.COMMUNITY_GUIDELINES,
          policyExplainerLink: p.explainer_link,
          appealComponent: (0, i.jsx)(D, {
            hasBeenAppealed: null != p.appeal_status,
            onLetUsKnowClick: () => {
              m.default.track(v.HAw.SAFETY_HUB_ACTION, {
                action: b.ZU.ClickLetUsKnow,
                account_standing: U.state,
                classification_ids: [Number(n)],
                source: a,
                is_violative_content_shown: I,
                is_dsa_eligible: P,
                violation_type: C
              }), F ? h.A.openV2(n, c) : H ? h.A.open(n, c) : w && (u.A.increment({
                name: o.K.APPEAL_INGESTION_VIEW
              }), _.A.open(n))
            },
            isAppealEligible: w || H
          })
        })]
      })]
    })
  }