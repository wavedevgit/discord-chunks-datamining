/** Chunk was on web.js **/
/** chunk id: 152242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  jM: () => Z,
  n3: () => H
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk725243 = require("./725243.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk927699 = require("./927699.jsx"),
  Chunk96848 = require("./96848.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk321051 = require("./321051.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk703400 = require("./703400.jsx"),
  Chunk242723 = require("./242723.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk442538 = require("./442538.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}
let Z = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(Y, G({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function F(e) {
  let t = (0, s.e7)([v.Z], () => v.Z.isConnected() ? v.Z.getChannelId() : null),
    [n, r] = i.useState([]);
  return i.useEffect(() => {
    let n = null != t ? c.Z.getParticipants(t) : [],
      i = [],
      a = new Set;
    for (let t of n) !(0, x.Io)(t) && !(0, x._5)(t) || t.user.id === e || a.has(t.user.id) || (a.add(t.user.id), i.push(t));
    i.sort((e, t) => (0, x._5)(e) && !(0, x._5)(t) ? false : (0, x._5)(t) && !(0, x._5)(e) ? 1 : 0), r(i.map(e => e.user))
  }, [t, e]), n
}

function B(e) {
  let t = (0, d.Z)({
      location: "Slayer Storefront Gift Customization Step"
    }),
    n = F(e);
  return i.useMemo(() => o().uniqWith([...n, ...t], (e, t) => e.id === t.id), [t, n])
}

function V(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: a = false,
    loading: o = false
  } = e, {
    hasPaymentSources: s
  } = (0, _.JL)(), c = s ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Button, {
      onClick: () => t(c),
      disabled: a,
      loading: o,
      text: M.intl.string(M.t.XiOHRX)
    }), i ? (0, r.jsx)(b.Z, {
      onClick: n
    }) : null]
  })
}
let H = e => {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: i = "",
    setCustomGiftMessage: a,
    giftRecipient: o,
    emojiConfetti: c,
    soundEffect: d,
    setEmojiConfetti: f,
    setSoundEffect: m,
    giftingOrigin: h
  } = (0, p.wD)(), {
    selectedSkuId: b,
    application: v
  } = (0, _.JL)(), A = (0, s.e7)([S.default], () => S.default.getCurrentUser()), N = B(null == A ? true : A.id), D = (0, s.e7)([I.Z], () => null != b ? I.Z.get(b) : null, [b]), x = (0, C.Do)(D), U = (0, C.a7)(D), G = (0, R.K)(D, {
    shouldFetchIfMissing: true
  }), Z = async (e, t) => {}, F = () => (0, r.jsx)(g.Z, {
    sectionTitle: M.intl.string(M.t.B3miE8),
    onTextChange: e => null == a ? true : a(e),
    pendingText: i,
    currentText: i,
    disableThemedBackground: true,
    className: k.customGiftMessageWrapper,
    innerClassName: k.customGiftMessage
  }), V = () => null != o && (h === L.Wt.USER_PROFILE_WISHLIST || h === L.Wt.DM_CHANNEL_WISHLIST) ? (0, r.jsx)(y.s, {
    giftRecipient: o
  }) : (0, r.jsx)(u.Z, {
    selectedSkuId: b,
    validateSelectedGift: Z,
    searchableSelectWrapperClassName: k.recipientPickerSelectWrapper,
    recipients: N
  }), H = e => {
    null != m && m(null == e ? true : e)
  }, Y = () => {
    var e;
    return (0, r.jsxs)("div", {
      className: k.bodyColumnLeft,
      children: [null != x && (0, r.jsx)(w.p, {
        containerClassName: k.skuCardImage,
        cardImage: x,
        cardBackgroundImage: U,
        altText: null != (e = null == D ? true : D.name) ? e : "",
        shape: "square"
      }), (0, r.jsxs)("div", {
        className: k.giftEffectsContainer,
        children: [(0, r.jsx)(O.Z, {
          sound: d,
          onSelect: H
        }), (0, r.jsx)(E.Z, {
          setEmojiConfetti: f,
          emojiConfetti: null == c ? true : c
        })]
      })]
    })
  }, K = () => {
    var e, t, n, i;
    if (null == D) return null;
    let a = (0, T.T4)(null != (n = null == (e = D.price) ? true : e.amount) ? n : 0, null != (i = null == (t = D.price) ? true : t.currency) ? i : j.pK.USD);
    return (0, r.jsxs)("div", {
      className: k.giftPreviewContainer,
      children: [(0, r.jsx)(l.vwX, {
        className: k.giftPreviewTitle,
        children: M.intl.string(M.t.PpoJzt)
      }), (0, r.jsxs)("div", {
        className: k.giftPreviewContent,
        children: [(0, r.jsx)("div", {
          className: k.giftPreviewImageContainer,
          children: null != D && null != x && (0, r.jsx)(w.p, {
            containerClassName: k.giftPreviewCardContainer,
            cardImage: x,
            cardBackgroundImage: U,
            altText: D.name,
            shape: "square"
          })
        }), (0, r.jsxs)("div", {
          className: k.giftPreviewTextContainer,
          children: [null != v && (0, r.jsx)(P.e, {
            application: v
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            children: D.name
          })]
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      })]
    })
  }, z = () => (0, r.jsxs)("div", {
    className: k.bodyColumnRight,
    children: [V(), F(), K(), null != G && null != D && (0, r.jsx)(W, {
      handleClose: n,
      sku: D,
      guild: G
    })]
  });
  return {
    renderStepBody: () => (0, r.jsxs)("div", {
      className: k.stepBody,
      children: [Y(), z()]
    }),
    getLeftColumnComponent: Y,
    getRightColumnComponent: z,
    onStepChange: t,
    onBackClick: n,
    disabled: null == o || o.id === (null == A ? true : A.id) || i.length > L.$n
  }
};

function Y(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    renderStepBody: i,
    onStepChange: a,
    onBackClick: o,
    disabled: s
  } = H({
    handleStepChange: t,
    handleClose: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.C3, {
      children: i()
    }), (0, r.jsx)(h.O3, {
      children: (0, r.jsx)(l.mzw, {
        "data-migration-pending": true,
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        className: k.footer,
        children: (0, r.jsx)(V, {
          onStepChange: a,
          onBackClick: o,
          disabled: s
        })
      })
    })]
  })
}

function W(e) {
  let {
    handleClose: t,
    guild: n,
    sku: a
  } = e, o = i.useCallback(() => {
    (0, N.eagerNavigateToSocialLayerStorefront)({
      guildId: n.id
    })
  }, [n.id]), s = i.useCallback(() => {
    var e;
    t();
    let r = null == (e = A.Z.getStorefrontState(n.id)) ? true : e.activePage;
    window.location.pathname.includes(D.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) || ((0, l.pTH)(), (0, N.default)({
      guildId: n.id,
      pageIndex: null != r ? r : 0,
      skuId: a.id,
      slug: a.slug
    }))
  }, [n.id, a.id, a.slug, t]);
  return (0, r.jsx)("div", {
    className: k.viewItemButton,
    children: (0, r.jsx)(l.Avr, {
      text: n.id === (0, C.ac)() ? M.intl.string(M.t.nyIcya) : M.intl.string(M.t.ImioFL),
      onMouseDown: o,
      onClick: s,
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}