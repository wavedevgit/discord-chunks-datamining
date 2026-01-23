/** Chunk was on 67299 **/
/** chunk id: 975726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => q
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk862482 = require("./862482.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk475743 = require("./475743.js"),
  Chunk765548 = require("./765548.js"),
  Chunk165508 = require("./165508.jsx"),
  Chunk46054 = require("./46054.js"),
  Chunk351906 = require("./351906.js"),
  Chunk957565 = require("./957565.js"),
  Chunk240248 = require("./240248.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk645627 = require("./645627.js"),
  Chunk92246 = require("./92246.js"),
  Chunk73473 = require("./73473.js"),
  Chunk646764 = require("./646764.jsx"),
  Chunk109174 = require("./109174.jsx"),
  Chunk524728 = require("./524728.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk491284 = require("./491284.js");

function D(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: i,
    className: l,
    inputClassName: d
  } = e, u = (0, s.bG)([p.A], () => p.A.hidePersonalInformation), m = (0, x.Ut)();
  return null == t ? null : (0, r.jsx)(c.A, {
    className: l,
    inputClassName: d,
    value: u ? P.intl.string(P.t["0n2u0k"]) : t.code,
    buttonColor: o.XD.PRIMARY,
    onCopy: () => {
      u && (0, C.C)(t.code), m({
        questId: a,
        questContent: n,
        questContentCTA: x.Cy.COPY_REWARD_CODE,
        sourceQuestContent: i
      })
    }
  })
}

function k(e) {
  var t;
  let {
    quest: n,
    questContent: s,
    sourceQuestContent: o,
    rewardCode: c,
    onClose: d,
    transitionState: u,
    impressionRef: m
  } = e, p = null != (t = (0, j.XR)({
    quest: n,
    rewardCode: c
  })) ? t : "", C = a.useMemo(() => {
    var e;
    let t = null == (e = (0, b.cg)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, h.uJ)(t)) return null;
    let r = null == c ? true : c.code;
    return (0, h.uJ)(r) ? t : t.replace(E.mg, encodeURIComponent(r))
  }, [n, null == c ? true : c.code]), x = (0, v.HJ)({
    quest: n,
    questContent: s,
    redemptionLink: C,
    sourceQuestContent: o
  });
  return (0, r.jsx)("div", {
    ref: m,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: P.intl.string(P.t.NkZ7OU),
      actions: [null != C ? {
        variant: "primary",
        text: P.intl.string(P.t["+zx47d"]),
        onClick: x
      } : {
        variant: "primary",
        text: P.intl.string(P.t["/g10LC"]),
        onClick: d
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          className: R.V6,
          children: P.intl.string(P.t.srzsU2)
        }), (0, r.jsx)(D, {
          rewardCode: c,
          questContent: s,
          questId: n.id,
          sourceQuestContent: o
        })]
      }),
      onClose: d,
      transitionState: u,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: R.tG,
        children: f.A.parse(p, false, {
          allowLinks: true
        })
      })
    })
  })
}

function L(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: a,
    sourceQuestContent: i,
    onClaimInstructions: s
  } = e;
  return (0, r.jsxs)("div", {
    className: R.hQ,
    children: [(0, r.jsx)("div", {
      className: R.tE,
      children: (0, r.jsx)(A.A, {
        className: R.Ag,
        quest: t,
        questContent: n,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: R.dD,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: R.R_,
        children: P.intl.string(P.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: P.intl.format(P.t["ESmp2+"], {
          onClaimInstructions: s
        })
      })]
    }), (0, r.jsx)(D, {
      className: R.DA,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: R.Uy
    })]
  })
}

function q(e) {
  var t;
  let n, i, o, c, {
      initialQuest: f,
      onClose: p,
      transitionState: C,
      sourceQuestContent: h
    } = e,
    x = null != (t = (0, g.C5)(f.id)) ? t : f,
    j = _.uF.REWARD_MODAL,
    {
      rewardCode: A,
      isFetchingRewardCode: P,
      isClaimingReward: R
    } = (0, s.cf)([y.A], () => ({
      rewardCode: y.A.getRewardCode(x.id),
      isFetchingRewardCode: y.A.isFetchingRewardCode(x.id),
      isClaimingReward: y.A.isClaimingReward(x.id)
    })),
    {
      hasError: D,
      setHasError: q
    } = (0, v.Ln)({
      isClaimingReward: R,
      isFetchingRewardCode: P,
      quest: x,
      questContent: j,
      rewardCode: A
    });
  n = (0, u.A)(() => {
    q(true)
  }), i = m.default.useIsCaptchaModalOpen(), o = (0, d.A)(i), c = !!(!i && o), a.useEffect(() => {
    c && n()
  }, [c, n]);
  let I = null == A && (P || R),
    S = D && !R && !P;
  return (0, r.jsx)(N.A, {
    onClose: p,
    transitionState: C,
    quest: x,
    sourceQuestContent: h,
    location: E.rE.REWARD_CODE_MODAL,
    isRewardContentLoading: I,
    rewardContentHasError: S,
    rewardContent: S ? null : (0, r.jsx)(w.A, {
      rewardName: (0, b.mq)(x.config),
      children: (0, r.jsx)(L, {
        quest: x,
        questContent: j,
        rewardCode: A,
        sourceQuestContent: h,
        onClaimInstructions: () => {
          (0, l.mMO)(() => Promise.resolve(e => (0, r.jsx)(O.R, {
            questOrQuests: x,
            questContent: j,
            sourceQuestContent: h,
            children: t => {
              var n, a;
              return (0, r.jsx)(k, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = r
                  })
                }
                return e
              }({}, e), a = a = {
                impressionRef: t,
                quest: x,
                questContent: j,
                sourceQuestContent: h,
                rewardCode: A
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(a)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
              }), n))
            }
          })), {
            stackingBehavior: "replace"
          })
        }
      })
    })
  })
}