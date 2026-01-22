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
  } = e, u = (0, s.bG)([x.A], () => x.A.hidePersonalInformation), f = (0, C.Ut)();
  return null == t ? null : (0, r.jsx)(o.A, {
    className: l,
    inputClassName: d,
    value: u ? R.intl.string(R.t["0n2u0k"]) : t.code,
    buttonColor: c.XD.PRIMARY,
    onCopy: () => {
      u && (0, h.C)(t.code), f({
        questId: a,
        questContent: n,
        questContentCTA: C.Cy.COPY_REWARD_CODE,
        sourceQuestContent: i
      })
    }
  })
}

function P(e) {
  var t;
  let {
    quest: n,
    questContent: s,
    sourceQuestContent: c,
    rewardCode: o,
    onClose: d,
    transitionState: u,
    impressionRef: f
  } = e, x = null != (t = (0, y.XR)({
    quest: n,
    rewardCode: o
  })) ? t : "", h = a.useMemo(() => {
    var e;
    let t = null == (e = (0, O.cg)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, p.uJ)(t)) return null;
    let r = null == o ? true : o.code;
    return (0, p.uJ)(r) ? t : t.replace(E.mg, encodeURIComponent(r))
  }, [n, null == o ? true : o.code]), C = (0, v.HJ)({
    quest: n,
    questContent: s,
    redemptionLink: h,
    sourceQuestContent: c
  });
  return (0, r.jsx)("div", {
    ref: f,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: R.intl.string(R.t.NkZ7OU),
      actions: [null != h ? {
        variant: "primary",
        text: R.intl.string(R.t["+zx47d"]),
        onClick: C
      } : {
        variant: "primary",
        text: R.intl.string(R.t["/g10LC"]),
        onClick: d
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          className: k.V6,
          children: R.intl.string(R.t.srzsU2)
        }), (0, r.jsx)(D, {
          rewardCode: o,
          questContent: s,
          questId: n.id,
          sourceQuestContent: c
        })]
      }),
      onClose: d,
      transitionState: u,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: k.tG,
        children: m.A.parse(x, false, {
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
    className: k.hQ,
    children: [(0, r.jsx)("div", {
      className: k.tE,
      children: (0, r.jsx)(_.A, {
        className: k.Ag,
        quest: t,
        questContent: n,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: k.dD,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: k.R_,
        children: R.intl.string(R.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: R.intl.format(R.t["ESmp2+"], {
          onClaimInstructions: s
        })
      })]
    }), (0, r.jsx)(D, {
      className: k.DA,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: k.Uy
    })]
  })
}

function q(e) {
  var t;
  let n, i, c, o, {
      initialQuest: m,
      onClose: x,
      transitionState: h,
      sourceQuestContent: p
    } = e,
    C = null != (t = (0, g.C5)(m.id)) ? t : m,
    y = b.uF.REWARD_MODAL,
    {
      rewardCode: _,
      isFetchingRewardCode: R,
      isClaimingReward: k
    } = (0, s.cf)([j.A], () => ({
      rewardCode: j.A.getRewardCode(C.id),
      isFetchingRewardCode: j.A.isFetchingRewardCode(C.id),
      isClaimingReward: j.A.isClaimingReward(C.id)
    })),
    {
      hasError: D,
      setHasError: q
    } = (0, v.Ln)({
      isClaimingReward: k,
      isFetchingRewardCode: R,
      quest: C,
      questContent: y,
      rewardCode: _
    });
  n = (0, u.A)(() => {
    q(true)
  }), i = f.default.useIsCaptchaModalOpen(), c = (0, d.A)(i), o = !!(!i && c), a.useEffect(() => {
    o && n()
  }, [o, n]);
  let S = null == _ && (R || k),
    I = D && !k && !R;
  return (0, r.jsx)(N.A, {
    onClose: x,
    transitionState: h,
    quest: C,
    sourceQuestContent: p,
    location: E.rE.REWARD_CODE_MODAL,
    isRewardContentLoading: S,
    rewardContentHasError: I,
    rewardContent: I ? null : (0, r.jsx)(w.A, {
      rewardName: (0, O.mq)(C.config),
      children: (0, r.jsx)(L, {
        quest: C,
        questContent: y,
        rewardCode: _,
        sourceQuestContent: p,
        onClaimInstructions: () => {
          (0, l.mMO)(() => Promise.resolve(e => (0, r.jsx)(A.R, {
            questOrQuests: C,
            questContent: y,
            sourceQuestContent: p,
            children: t => {
              var n, a;
              return (0, r.jsx)(P, (n = function(e) {
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
                quest: C,
                questContent: y,
                sourceQuestContent: p,
                rewardCode: _
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