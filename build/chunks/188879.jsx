/** Chunk was on 18831 **/
/** chunk id: 188879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk286379 = require("./286379.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk797614 = require("./797614.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk331692 = require("./331692.js"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk451284 = require("./451284.js"),
  Chunk613734 = require("./613734.js"),
  Chunk846488 = require("./846488.js"),
  Chunk384725 = require("./384725.js"),
  Chunk97568 = require("./97568.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk549607 = require("./549607.js");

function A(e) {
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
let P = e => {
    let {
      classificationTypeText: t,
      guildMetadata: n
    } = e, l = a.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => <strong>{e}</strong>
      };
      return null == n ? E.intl.format(E.t.HpvELi, e) : (null == n ? true : n.member_type) === m.wO.OWNER ? E.intl.format(E.t.X1ngSU, w(A({}, e), {
        guildName: null == n ? true : n.name
      })) : E.intl.format(E.t.rmpEPD, w(A({}, e), {
        guildName: null == n ? true : n.name
      }))
    }, [t, n]);
    return <div className={_.classificationHeader}><o.X6q variant={"heading-xl/normal"}>{l}</o.X6q></div>
  },
  T = e => {
    let {
      actions: t,
      classificationExpiration: n
    } = e, a = (0, s.e7)([d.default], () => d.default.locale);
    return 0 === t.filter(e => e.descriptions.length > 0).length && null == n ? null : <div className={_.classificationActionsTakenContainer}>{<o.Text variant={"eyebrow"} color={"text-muted"}>{E.intl.string(E.t.O2nYk5)}</o.Text>}{<ul className={_.classificationActionsTakenList}>{t.map(e => <S action={e} />)}{null != n ? <li className={_.classificationActionsTakenRow}><o.Text tag={"span"} variant={"heading-md/normal"} color={"text-default"}>{E.intl.format(E.t.TByIjY, {
              expirationDate: n.toLocaleDateString(a, {
                dateStyle: "medium"
              })
            })}</o.Text></li> : null}</ul>}</div>
  },
  S = e => {
    let {
      action: t
    } = e;
    return <i.Fragment>{t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: _.classificationActionsTakenRow,
        children: (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-default",
          children: e
        })
      }, t))}</i.Fragment>
  },
  C = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return <o.eee href={n} className={_.classificationPolicyCard} useDefaultUnderlineStyles={false}>{<div className={_.classificationPolicyCardIcon}><o.b7C size={"md"} color={r.Z.colors.FOCUS_PRIMARY} /></div>}{<div className={_.classificationPolicyDescriptionContainer}><o.Text variant={"text-md/normal"}>{E.intl.format(E.t.zxUdpq, {
            classificationDescription: t
          })}</o.Text></div>}{<div className={_.classificationPolicyLinkIcon}><o.Fbu size={"md"} color={r.Z.colors.INTERACTIVE_NORMAL} /></div>}</o.eee>
  },
  N = () => <Chunk481060.Text variant={"text-md/normal"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t["I2H0/P"])}</Chunk481060.Text>,
  k = e => <o.Text variant={"text-md/normal"} color={"text-muted"}>{E.intl.format(E.t.IFxUaW, {
      letUsKnowHook: (t, n) => (0, i.jsx)(o.eee, {
        href: e.isAppealEligible ? true : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })}</o.Text>,
  I = e => <div className={_.classificationLetUsKnowContainer}>{e.hasBeenAppealed ? (0, i.jsx)(N, {}) : (0, i.jsx)(k, {
      appealLink: b.sQ.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })}</div>,
  L = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: l,
      appealComponent: r
    } = e;
    return <div className={_.classificationActionExplanationContainer}>{<o.Text variant={"eyebrow"} color={"text-muted"}>{E.intl.string(E.t["977ien"])}</o.Text>}{<o.Text className={_.guidelinesExplanation} variant={"text-sm/normal"}>{E.intl.format(E.t["1Z/+aG"], {
          tosLink: t,
          communityGuidelinesLink: n
        })}</o.Text>}{<C classificationTypeText={a} policyExplainerLink={l} />}{r}</div>
  },
  U = e => {
    var t;
    let {
      classificationId: n,
      source: r,
      onError: o,
      onClose: d
    } = e, {
      classification: E,
      classificationRequestState: A,
      isAppealEligible: w,
      isDsaEligible: S,
      violationType: C
    } = (0, y.YG)(n), N = (0, s.e7)([f.Z], () => f.Z.getAppealEligibility()), k = (0, g.P)(), U = null != E && null != E.flagged_content && E.flagged_content.length > 0, D = (0, x.e)(), Z = !!(null == E ? true : E.is_coppa) && N.includes(m.tG.AGE_VERIFY_ELIGIBLE), M = {
      accountStanding: k,
      classificationId: n,
      hasFlaggedContent: U,
      isDsaEligible: S,
      source: r,
      violationType: C
    }, Y = a.useRef(M);
    return (a.useEffect(() => {
      Y.current = M
    }), a.useEffect(() => {
      let {
        accountStanding: e,
        classificationId: t,
        hasFlaggedContent: n,
        isDsaEligible: i,
        source: a,
        violationType: l
      } = Y.current;
      D && u.default.track(O.rMx.SAFETY_HUB_ACTION, {
        action: b.n0.ViewViolationDetail,
        account_standing: e.state,
        classification_ids: [Number(t)],
        source: a,
        is_violative_content_shown: n,
        is_dsa_eligible: i,
        violation_type: l
      })
    }, [D]), null == E && A === m.OY.FAILED) ? (o(), null) : null == E ? null : <div className={_.classificationContainer}>{<P classificationTypeText={E.description} guildMetadata={null == E ? true : E.guild_metadata} />}{<v.s flaggedContent={null != (t = E.flagged_content) ? t : []} />}{<T actions={E.actions} classificationExpiration={(0, h.Pu)(E)} />}{<L classificationTypeText={E.description} tosLink={b.sQ.TOS_LINK} communityGuidelinesLink={b.sQ.COMMUNITY_GUIDELINES} policyExplainerLink={E.explainer_link} appealComponent={(0, i.jsx)(I, {
          hasBeenAppealed: null != E.appeal_status,
          onLetUsKnowClick: () => {
            u.default.track(O.rMx.SAFETY_HUB_ACTION, {
              action: b.n0.ClickLetUsKnow,
              account_standing: k.state,
              classification_ids: [Number(n)],
              source: r,
              is_violative_content_shown: U,
              is_dsa_eligible: S,
              violation_type: C
            }), Z ? p.Z.open(n, d) : w && (c.Z.increment({
              name: l.V.APPEAL_INGESTION_VIEW
            }), j.Z.open(n))
          },
          isAppealEligible: w || Z
        })} />}</div>
  }