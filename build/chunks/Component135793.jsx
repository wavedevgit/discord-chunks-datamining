/** Chunk was on web.js **/
/** chunk id: 135793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => Z,
  s: () => B
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk311570 = require("./311570.js"),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk63063 = require("./63063.js"),
  Chunk937615 = require("./937615.js"),
  Chunk980463 = require("./980463.js"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk317951 = require("./317951.js"),
  Chunk287941 = require("./287941.js"),
  Chunk235894 = require("./235894.js"),
  Chunk883998 = require("./883998.jsx"),
  Chunk576645 = require("./576645.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393919 = require("./393919.js"),
  Chunk99713 = require("./99713.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = 190,
  U = 178,
  G = "MESSAGE_CONFETTI_POTION_MODAL_KEY",
  B = e => {
    let {
      channelId: t,
      message: i,
      onRedeem: a,
      onClose: o,
      buttonUseState: s = "activate",
      source: c
    } = e, d = g.Z.getChannel(t);
    null != d && ((0, p.Q3)(l.z.CONFETTI_POTION_UPSELL, {
      dismissAction: R.L.INDIRECT_ACTION
    }), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 135793));
      return t => (0, r.jsx)(e, k(L({}, t), {
        channel: d,
        message: i,
        onRedeem: a,
        onUnmount: o,
        source: c,
        buttonUseState: s
      }))
    }, {
      modalKey: G
    }))
  };

function Z(e) {
  let {
    transitionState: t,
    channel: n,
    message: o,
    onRedeem: l,
    onUnmount: c,
    buttonUseState: d,
    source: f
  } = e;
  (0, i.useEffect)(() => c, [c]);
  let _ = (0, i.useCallback)(() => ((0, u.Mr3)(G), Promise.resolve()), []);
  return (0, r.jsx)(s.IX, {
    transitionState: t,
    onClose: _,
    trackingProps: {
      impression: {
        impressionName: a.ImpressionNames.CONFETTI_POTION_MODAL,
        impressionProperties: {
          source: f
        }
      }
    },
    children: (0, r.jsx)(F, {
      channel: n,
      message: o,
      onRedeem: l,
      buttonUseState: d
    })
  })
}

function F(e) {
  let {
    channel: t,
    message: n,
    onRedeem: a,
    buttonUseState: s
  } = e, l = null != n, c = l && (0, S.Uw)(n), d = (0, O.Qj)(t.id, l), {
    price: p,
    fetchingPrice: h,
    error: g
  } = (0, C.R2)(I.D1), {
    entitlement: E,
    fetchedEntitlement: b,
    error: v
  } = (0, C.t6)(I.D1), T = g || v, {
    analyticsLocations: A
  } = (0, _.ZP)([f.Z.CONFETTI_POTION_MODAL]), R = null != E && !E.consumed, P = h || !b;
  (0, i.useEffect)(() => () => {
    T && (0, y.SN)(I.D1)
  }, [T, l]);
  let D = (0, i.useCallback)(() => {
      null != d && ((0, u.pTH)(), a(d))
    }, [d, a]),
    w = (0, i.useCallback)(() => {
      (0, m.Z)({
        skuId: I.D1,
        analyticsLocations: A,
        onComplete: () => {
          D(), (0, y.gA)(I.D1)
        },
        variantsReturnStyle: o.v.INDIVIDUAL_PRODUCTS
      })
    }, [D, A]),
    x = (0, i.useCallback)(() => R ? D() : w(), [D, w, R]),
    L = (0, i.useMemo)(() => {
      if (null != E) {
        if ("apply" === s) return 3;
        if (E.type === N.qc2.DEVELOPER_GIFT) return 1;
        if (R) return 2
      }
      return 0
    }, [E, R, s]),
    M = (0, i.useMemo)(() => 0 === L ? 1 : c ? 2 : 3 * (null == d), [c, d, L]);
  return (0, r.jsx)(V, {
    channel: t,
    buttonPurchaseState: L,
    buttonDisabledState: M,
    price: p,
    onActionClick: x,
    loading: P,
    selectedEmoji: null != d ? d : true,
    isReaction: l
  })
}
let V = e => {
    let {
      channel: t,
      buttonPurchaseState: n,
      buttonDisabledState: a,
      price: o,
      onActionClick: s,
      loading: l,
      selectedEmoji: c,
      isReaction: u
    } = e, d = (0, i.useRef)(null);
    return ((0, i.useEffect)(() => {
      var e;
      if (null == c) return;
      let t = null == (e = d.current) ? true : e.getBoundingClientRect();
      if (null == t) return;
      let n = (0, S.NV)(c),
        {
          x: r,
          y: i,
          width: a,
          height: o
        } = t;
      (0, T.I)(n, {
        x: r,
        y: i,
        w: a,
        h: o
      }, true, v.LL.ConfettiPreview)
    }, [c]), l) ? (0, r.jsx)(X, {}) : null == o ? (0, r.jsx)(q, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: D.modal,
        ref: d,
        children: (0, r.jsx)(H, {
          channel: t,
          selectedEmoji: c,
          isReaction: u
        })
      }), (0, r.jsx)(W, {
        buttonPurchaseState: n,
        buttonDisabledState: a,
        price: o,
        onActionClick: s
      })]
    })
  },
  H = e => {
    let {
      channel: t,
      selectedEmoji: n,
      isReaction: i
    } = e;
    return (0, r.jsxs)("div", {
      className: D.body,
      children: [(0, r.jsxs)("div", {
        className: D.header,
        children: [(0, r.jsxs)("div", {
          className: D.heading,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-lg/bold",
            children: P.intl.string(P.t["5/knv4"])
          }), (0, r.jsx)(h.Z, {})]
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: P.intl.string(P.t.NFTQoc)
        }), (0, r.jsx)(u.Text, {
          color: "text-link",
          variant: "text-sm/normal",
          children: P.intl.format(P.t.jerM90, {
            helpCenterLink: E.Z.getArticleURL(N.BhN.CONFETTI_POTION)
          })
        })]
      }), (0, r.jsx)("div", {
        className: D.divider
      }), (0, r.jsxs)("div", {
        className: D.selectContainer,
        children: [(0, r.jsx)(u.Text, {
          variant: "eyebrow",
          children: P.intl.string(P.t.o8XwoI)
        }), (0, r.jsx)(Y, {
          channel: t,
          selectedEmoji: n,
          isReaction: i
        })]
      })]
    })
  },
  Y = e => {
    let {
      channel: t,
      selectedEmoji: n,
      isReaction: a
    } = e, [o, s] = (0, i.useState)(false), l = (0, i.useCallback)(() => {
      s(false)
    }, []), c = (0, i.useCallback)(e => (0, O.t0)(e, t.id, a), [a, t.id]), {
      emojiName: f,
      selectionText: _
    } = (0, i.useMemo)(() => null == n ? {
      emojiName: null,
      selectionText: P.intl.string(P.t.KgK5qg)
    } : {
      emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
      selectionText: n.name.replace(/_/g, " ")
    }, [n]), p = (0, i.useRef)(null);
    return (0, r.jsx)(A.Z, {
      channel: t,
      shouldShow: o,
      onRequestClose: l,
      setEmojiConfetti: c,
      positionRef: p,
      position: "left",
      align: "top",
      children: () => (0, r.jsx)(u.P3F, {
        onClick: () => s(!o),
        className: D.emojiSelect,
        children: (0, r.jsxs)("div", {
          className: D.emojiContent,
          children: [(0, r.jsxs)("div", {
            className: D.selectedEmoji,
            children: [(0, r.jsx)("div", {
              ref: p,
              children: null == n ? (0, r.jsx)(u.EO4, {
                color: "currentColor",
                size: "custom",
                className: D.emojiIcon
              }) : (0, r.jsx)(d.Z, {
                animated: false,
                emojiId: n.id,
                emojiName: f,
                className: D.emojiIcon
              })
            }), (0, r.jsx)(u.Text, {
              color: "interactive-active",
              variant: "text-sm/normal",
              children: _
            })]
          }), o ? (0, r.jsx)(u.u04, {
            color: "currentColor",
            size: "custom",
            className: D.chevron
          }) : (0, r.jsx)(u.CJ0, {
            color: "currentColor",
            size: "custom",
            className: D.chevron
          })]
        })
      })
    })
  },
  W = e => {
    let {
      buttonPurchaseState: t,
      buttonDisabledState: n,
      price: i,
      onActionClick: a
    } = e;
    return (0, r.jsxs)("div", {
      className: D.footer,
      children: [(0, r.jsx)(u.Button, {
        variant: "secondary",
        text: P.intl.string(P.t.w2Qbd6),
        onClick: () => {
          (0, u.Mr3)(G)
        }
      }), (0, r.jsxs)("div", {
        className: D.footerRight,
        children: [(0, r.jsx)(K, {}), (0, r.jsx)(z, {
          buttonPurchaseState: t,
          buttonDisabledState: n,
          price: i,
          onActionClick: a
        })]
      })]
    })
  },
  K = () => {
    let {
      entitlement: e,
      numPotions: t
    } = (0, Chunk576645.t6)(Chunk317951.D1);
    if (null == exports || 0 === exports) return null;
    let n = (null == module ? true : module.type) === Chunk981631.qc2.DEVELOPER_GIFT ? Chunk388032.t["b+P6ra"] : Chunk388032.t.RiQ4ci;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk393919.remaining,
      children: [(0, Chunk54381.jsx)(Chunk481060.l22, {
        color: "currentColor",
        className: Chunk393919.shootingStar
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        color: "none",
        variant: "text-sm/semibold",
        children: Chunk388032.intl.formatToPlainString(require, {
          numPotions: exports
        })
      })]
    })
  },
  z = e => {
    let {
      buttonPurchaseState: t,
      buttonDisabledState: n,
      price: a,
      onActionClick: o
    } = e, {
      isDisabled: s,
      copy: l,
      tooltipCopy: d
    } = (0, i.useMemo)(() => {
      let e = {
          0: P.intl.formatToPlainString(P.t.POGRmi, {
            amount: I.pe,
            price: (0, b.T4)(a.amount, a.currency)
          }),
          1: P.intl.string(P.t.RrKeD5),
          2: P.intl.string(P.t.WOXaWH),
          3: P.intl.string(P.t["1Qm822"])
        },
        r = {
          1: P.intl.string(P.t["Cb8/70"]),
          2: P.intl.string(P.t.fMkB9K),
          3: P.intl.string(P.t["59ElNn"])
        },
        i = 0 !== n;
      return {
        isDisabled: i,
        copy: e[t],
        tooltipCopy: i ? r[n] : ""
      }
    }, [n, t, a.amount, a.currency]);
    return (0, r.jsx)(c.u, {
      text: d,
      shouldShow: !!s,
      children: (0, r.jsx)(u.Button, {
        onClick: o,
        disabled: s,
        text: l
      })
    })
  },
  q = () => (0, Chunk54381.jsx)("div", {
    className: Chunk393919.anomaly,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk393919.error,
      children: [(0, Chunk54381.jsx)(Chunk481060.Eep, {
        src: Chunk99713,
        width: U,
        height: j
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.oKJdSs)
      })]
    })
  }),
  X = () => (0, Chunk54381.jsx)("div", {
    className: Chunk393919.anomaly,
    children: (0, Chunk54381.jsx)("div", {
      className: Chunk393919.spinner,
      children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
    })
  })