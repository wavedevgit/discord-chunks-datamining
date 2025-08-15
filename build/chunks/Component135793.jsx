/** Chunk was on web.js **/
/** chunk id: 135793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => B,
  s: () => G
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk311570 = require("./311570.js"),
  Chunk704215 = require("./704215.js"),
  Chunk257465 = require("./257465.jsx"),
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

function D(e, t, n) {
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
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = 190,
  j = 178,
  U = "MESSAGE_CONFETTI_POTION_MODAL_KEY",
  G = e => {
    let {
      channelId: t,
      message: i,
      onRedeem: a,
      onClose: o,
      buttonUseState: l = "activate",
      source: u
    } = e, d = m.Z.getChannel(t);
    null != d && ((0, _.Q3)(s.z.CONFETTI_POTION_UPSELL, {
      dismissAction: C.L.INDIRECT_ACTION
    }), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 135793));
      return t => (0, r.jsx)(e, M(L({}, t), {
        channel: d,
        message: i,
        onRedeem: a,
        onUnmount: o,
        source: u,
        buttonUseState: l
      }))
    }, {
      modalKey: U
    }))
  };

function B(e) {
  let {
    transitionState: t,
    channel: n,
    message: o,
    onRedeem: s,
    onUnmount: u,
    buttonUseState: d,
    source: f
  } = e;
  (0, i.useEffect)(() => u, [u]);
  let _ = (0, i.useCallback)(() => ((0, c.Mr3)(U), Promise.resolve()), []);
  return (0, r.jsx)(l.I, {
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
    children: (0, r.jsx)(V, {
      channel: n,
      message: o,
      onRedeem: s,
      buttonUseState: d
    })
  })
}

function V(e) {
  let {
    channel: t,
    message: n,
    onRedeem: a,
    buttonUseState: s
  } = e, l = null != n, u = l && (0, T.Uw)(n), _ = (0, y.Qj)(t.id, l), {
    price: p,
    fetchingPrice: m,
    error: g
  } = (0, A.R2)(v.D1), {
    entitlement: E,
    fetchedEntitlement: O,
    error: I
  } = (0, A.t6)(v.D1), S = g || I, {
    analyticsLocations: C
  } = (0, f.ZP)([d.Z.CONFETTI_POTION_MODAL]), R = null != E && !E.consumed, P = m || !O;
  (0, i.useEffect)(() => () => {
    S && (0, b.SN)(v.D1)
  }, [S, l]);
  let w = (0, i.useCallback)(() => {
      null != _ && ((0, c.pTH)(), a(_))
    }, [_, a]),
    D = (0, i.useCallback)(() => {
      (0, h.Z)({
        skuId: v.D1,
        analyticsLocations: C,
        onComplete: () => {
          w(), (0, b.gA)(v.D1)
        },
        variantsReturnStyle: o.v.INDIVIDUAL_PRODUCTS
      })
    }, [w, C]),
    L = (0, i.useCallback)(() => R ? w() : D(), [w, D, R]),
    x = (0, i.useMemo)(() => {
      if (null != E) {
        if ("apply" === s) return 3;
        if (E.type === N.qc2.DEVELOPER_GIFT) return 1;
        if (R) return 2
      }
      return 0
    }, [E, R, s]),
    M = (0, i.useMemo)(() => 0 === x ? 1 : u ? 2 : 3 * (null == _), [u, _, x]);
  return (0, r.jsx)(F, {
    channel: t,
    buttonPurchaseState: x,
    buttonDisabledState: M,
    price: p,
    onActionClick: L,
    loading: P,
    selectedEmoji: null != _ ? _ : true,
    isReaction: l
  })
}
let F = e => {
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
      let n = (0, T.NV)(c),
        {
          x: r,
          y: i,
          width: a,
          height: o
        } = t;
      (0, I.I)(n, {
        x: r,
        y: i,
        w: a,
        h: o
      }, true, O.LL.ConfettiPreview)
    }, [c]), l) ? (0, r.jsx)(q, {}) : null == o ? (0, r.jsx)(z, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: P.modal,
        ref: d,
        children: (0, r.jsx)(Z, {
          channel: t,
          selectedEmoji: c,
          isReaction: u
        })
      }), (0, r.jsx)(Y, {
        buttonPurchaseState: n,
        buttonDisabledState: a,
        price: o,
        onActionClick: s
      })]
    })
  },
  Z = e => {
    let {
      channel: t,
      selectedEmoji: n,
      isReaction: i
    } = e;
    return (0, r.jsxs)("div", {
      className: P.body,
      children: [(0, r.jsxs)("div", {
        className: P.header,
        children: [(0, r.jsxs)("div", {
          className: P.heading,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-lg/bold",
            children: R.intl.string(R.t["5/knv7"])
          }), (0, r.jsx)(p.Z, {})]
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: R.intl.string(R.t.NFTQoa)
        }), (0, r.jsx)(c.Text, {
          color: "text-link",
          variant: "text-sm/normal",
          children: R.intl.format(R.t["jerM9/"], {
            helpCenterLink: g.Z.getArticleURL(N.BhN.CONFETTI_POTION)
          })
        })]
      }), (0, r.jsx)("div", {
        className: P.divider
      }), (0, r.jsxs)("div", {
        className: P.selectContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "eyebrow",
          children: R.intl.string(R.t.o8XwoK)
        }), (0, r.jsx)(H, {
          channel: t,
          selectedEmoji: n,
          isReaction: i
        })]
      })]
    })
  },
  H = e => {
    let {
      channel: t,
      selectedEmoji: n,
      isReaction: a
    } = e, [o, s] = (0, i.useState)(false), l = (0, i.useCallback)(() => {
      s(false)
    }, []), d = (0, i.useCallback)(e => (0, y.t0)(e, t.id, a), [a, t.id]), {
      emojiName: f,
      selectionText: _
    } = (0, i.useMemo)(() => null == n ? {
      emojiName: null,
      selectionText: R.intl.string(R.t.KgK5qq)
    } : {
      emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
      selectionText: n.name.replace(/_/g, " ")
    }, [n]), p = (0, i.useRef)(null);
    return (0, r.jsx)(S.Z, {
      channel: t,
      shouldShow: o,
      onRequestClose: l,
      setEmojiConfetti: d,
      positionRef: p,
      position: "left",
      align: "top",
      children: () => (0, r.jsx)(c.P3F, {
        onClick: () => s(!o),
        className: P.emojiSelect,
        children: (0, r.jsxs)("div", {
          className: P.emojiContent,
          children: [(0, r.jsxs)("div", {
            className: P.selectedEmoji,
            children: [(0, r.jsx)("div", {
              ref: p,
              children: null == n ? (0, r.jsx)(c.EO4, {
                color: "currentColor",
                size: "custom",
                className: P.emojiIcon
              }) : (0, r.jsx)(u.Z, {
                animated: false,
                emojiId: n.id,
                emojiName: f,
                className: P.emojiIcon
              })
            }), (0, r.jsx)(c.Text, {
              color: "interactive-active",
              variant: "text-sm/normal",
              children: _
            })]
          }), o ? (0, r.jsx)(c.u04, {
            color: "currentColor",
            size: "custom",
            className: P.chevron
          }) : (0, r.jsx)(c.CJ0, {
            color: "currentColor",
            size: "custom",
            className: P.chevron
          })]
        })
      })
    })
  },
  Y = e => {
    let {
      buttonPurchaseState: t,
      buttonDisabledState: n,
      price: i,
      onActionClick: a
    } = e;
    return (0, r.jsxs)("div", {
      className: P.footer,
      children: [(0, r.jsx)(c.zxk, {
        variant: "secondary",
        text: R.intl.string(R.t.w2Qbd3),
        onClick: () => {
          (0, c.Mr3)(U)
        }
      }), (0, r.jsxs)("div", {
        className: P.footerRight,
        children: [(0, r.jsx)(W, {}), (0, r.jsx)(K, {
          buttonPurchaseState: t,
          buttonDisabledState: n,
          price: i,
          onActionClick: a
        })]
      })]
    })
  },
  W = () => {
    let {
      entitlement: e,
      numPotions: t
    } = (0, Chunk576645.t6)(Chunk317951.D1);
    if (null == exports || 0 === exports) return null;
    let n = (null == module ? true : module.type) === Chunk981631.qc2.DEVELOPER_GIFT ? Chunk388032.t["b+P6ra"] : Chunk388032.t.RiQ4cn;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk393919.remaining,
      children: [(0, Chunk951288.jsx)(Chunk481060.l22, {
        color: "currentColor",
        className: Chunk393919.shootingStar
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        color: "none",
        variant: "text-sm/semibold",
        children: Chunk388032.intl.formatToPlainString(require, {
          numPotions: exports
        })
      })]
    })
  },
  K = e => {
    let {
      buttonPurchaseState: t,
      buttonDisabledState: n,
      price: a,
      onActionClick: o
    } = e, {
      isDisabled: s,
      copy: l,
      tooltipCopy: u
    } = (0, i.useMemo)(() => {
      let e = {
          0: R.intl.formatToPlainString(R.t.POGRmp, {
            amount: v.pe,
            price: (0, E.T4)(a.amount, a.currency)
          }),
          1: R.intl.string(R.t.RrKeDw),
          2: R.intl.string(R.t.WOXaWF),
          3: R.intl.string(R.t["1Qm829"])
        },
        r = {
          1: R.intl.string(R.t["Cb8/7+"]),
          2: R.intl.string(R.t.fMkB9P),
          3: R.intl.string(R.t["59ElNj"])
        },
        i = 0 !== n;
      return {
        isDisabled: i,
        copy: e[t],
        tooltipCopy: i ? r[n] : ""
      }
    }, [n, t, a.amount, a.currency]);
    return (0, r.jsx)(c.ua7, {
      tooltipContentClassName: P.tooltip,
      text: u,
      shouldShow: !!s,
      children: e => (0, r.jsx)(c.zxk, M(L({}, e), {
        onClick: o,
        disabled: s,
        text: l
      }))
    })
  },
  z = () => (0, Chunk951288.jsx)("div", {
    className: Chunk393919.anomaly,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk393919.error,
      children: [(0, Chunk951288.jsx)(Chunk481060.Eep, {
        src: Chunk99713,
        width: j,
        height: k
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.oKJdSk)
      })]
    })
  }),
  q = () => (0, Chunk951288.jsx)("div", {
    className: Chunk393919.anomaly,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk393919.spinner,
      children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
    })
  })