/** Chunk was on 67299 **/
/** chunk id: 975726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk645627 = require("./645627.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
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
    questId: s,
    sourceQuestContent: i,
    className: l,
    inputClassName: u
  } = e, d = (0, a.bG)([f.A], () => f.A.hidePersonalInformation), m = (0, _.Ut)();
  return null == t ? null : (0, r.jsx)(c.A, {
    className: l,
    inputClassName: u,
    value: d ? R.intl.string(R.t["0n2u0k"]) : t.code,
    buttonColor: o.XD.PRIMARY,
    onCopy: () => {
      d && (0, C.C)(t.code), m({
        questId: s,
        questContent: n,
        questContentCTA: v.Cy.COPY_REWARD_CODE,
        sourceQuestContent: i
      })
    }
  })
}

function L(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: o,
    rewardCode: c,
    onClose: u,
    transitionState: d,
    impressionRef: m
  } = e, f = null != (t = (0, x.XR)({
    quest: n,
    rewardCode: c
  })) ? t : "", C = s.useMemo(() => {
    var e;
    let t = null == (e = (0, b.cg)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, h.uJ)(t)) return null;
    let r = null == c ? true : c.code;
    return (0, h.uJ)(r) ? t : t.replace(P.mg, encodeURIComponent(r))
  }, [n, null == c ? true : c.code]), y = (0, O.HJ)({
    quest: n,
    questContent: a,
    redemptionLink: C,
    sourceQuestContent: o
  });
  return (0, r.jsx)("div", {
    ref: m,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: R.intl.string(R.t.NkZ7OU),
      actions: [null != C ? {
        variant: "primary",
        text: R.intl.string(R.t["+zx47d"]),
        onClick: y
      } : {
        variant: "primary",
        text: R.intl.string(R.t["/g10LC"]),
        onClick: u
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          className: S.V6,
          children: R.intl.string(R.t.srzsU2)
        }), (0, r.jsx)(D, {
          rewardCode: c,
          questContent: a,
          questId: n.id,
          sourceQuestContent: o
        })]
      }),
      onClose: u,
      transitionState: d,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: S.tG,
        children: p.A.parse(f, false, {
          allowLinks: true
        })
      })
    })
  })
}

function k(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: s,
    sourceQuestContent: i,
    onClaimInstructions: a
  } = e;
  return (0, r.jsxs)("div", {
    className: S.hQ,
    children: [(0, r.jsx)("div", {
      className: S.tE,
      children: (0, r.jsx)(w.A, {
        className: S.Ag,
        quest: t,
        questContent: n,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: S.dD,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: S.R_,
        children: R.intl.string(R.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: R.intl.format(R.t["ESmp2+"], {
          onClaimInstructions: a
        })
      })]
    }), (0, r.jsx)(D, {
      className: S.DA,
      rewardCode: s,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: S.Uy
    })]
  })
}

function M(e) {
  var t;
  let n, i, o, c, {
      initialQuest: p,
      onClose: f,
      transitionState: C,
      sourceQuestContent: h
    } = e,
    x = null != (t = (0, g.C5)(p.id)) ? t : p,
    _ = j.uF.REWARD_MODAL,
    {
      rewardCode: v,
      isFetchingRewardCode: w,
      isClaimingReward: R
    } = (0, a.cf)([y.A], () => ({
      rewardCode: y.A.getRewardCode(x.id),
      isFetchingRewardCode: y.A.isFetchingRewardCode(x.id),
      isClaimingReward: y.A.isClaimingReward(x.id)
    })),
    {
      hasError: S,
      setHasError: D
    } = (0, O.Ln)({
      isClaimingReward: R,
      isFetchingRewardCode: w,
      quest: x,
      questContent: _,
      rewardCode: v
    });
  n = (0, d.A)(() => {
    D(true)
  }), i = m.default.useIsCaptchaModalOpen(), o = (0, u.A)(i), c = !!(!i && o), s.useEffect(() => {
    c && n()
  }, [c, n]);
  let M = null == v && (w || R),
    I = S && !R && !w;
  return (0, r.jsx)(N.A, {
    onClose: f,
    transitionState: C,
    quest: x,
    sourceQuestContent: h,
    location: P.rE.REWARD_CODE_MODAL,
    isRewardContentLoading: M,
    rewardContentHasError: I,
    rewardContent: I ? null : (0, r.jsx)(E.A, {
      rewardName: (0, b.mq)(x.config),
      children: (0, r.jsx)(k, {
        quest: x,
        questContent: _,
        rewardCode: v,
        sourceQuestContent: h,
        onClaimInstructions: () => {
          (0, l.mMO)(() => Promise.resolve(e => (0, r.jsx)(A.R, {
            questOrQuests: x,
            questContent: _,
            sourceQuestContent: h,
            children: t => {
              var n, s;
              return (0, r.jsx)(L, (n = function(e) {
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
              }({}, e), s = s = {
                impressionRef: t,
                quest: x,
                questContent: _,
                sourceQuestContent: h,
                rewardCode: v
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
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