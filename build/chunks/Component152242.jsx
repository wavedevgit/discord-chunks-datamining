/** Chunk was on web.js **/
/** chunk id: 152242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  jM: () => F,
  n3: () => Y
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
  Chunk823379 = require("./823379.js"),
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

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}
let F = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(W, Z({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"])
  }
};

function B(e) {
  let t = (0, s.e7)([v.Z], () => v.Z.isConnected() ? v.Z.getChannelId() : null),
    [n, r] = i.useState([]);
  return i.useEffect(() => {
    let n = null != t ? c.Z.getParticipants(t) : [],
      i = [],
      a = new Set;
    for (let t of n) !(0, L.Io)(t) && !(0, L._5)(t) || t.user.id === e || a.has(t.user.id) || (a.add(t.user.id), i.push(t));
    i.sort((e, t) => (0, L._5)(e) && !(0, L._5)(t) ? false : (0, L._5)(t) && !(0, L._5)(e) ? 1 : 0), r(i.map(e => e.user))
  }, [t, e]), n
}

function V(e, t, n) {
  let r = (0, d.Z)({
      location: "Slayer Storefront Gift Customization Step"
    }),
    a = B(e),
    l = (0, s.Wu)([S.default], () => {
      var e;
      return null != (e = null == n ? true : n.map(S.default.getUser).filter(T.lm)) ? e : []
    }, [n]);
  return i.useMemo(() => o().uniqWith([...null != t ? [t] : [], ...l, ...a, ...r], (e, t) => e.id === t.id), [t, l, a, r])
}

function H(e) {
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
      text: k.intl.string(k.t.XiOHRX)
    }), i ? (0, r.jsx)(b.Z, {
      onClick: n
    }) : null]
  })
}
let Y = e => {
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
    giftingOrigin: h,
    additionalUserIds: b
  } = (0, p.wD)(), {
    selectedSkuId: v,
    application: T
  } = (0, _.JL)(), N = (0, s.e7)([S.default], () => S.default.getCurrentUser()), P = V(null == N ? true : N.id, o, b), x = (0, s.e7)([I.Z], () => null != v ? I.Z.get(v) : null, [v]), L = (0, A.Do)(x), G = (0, A.a7)(x), Z = (0, w.K)(x, {
    shouldFetchIfMissing: true
  }), F = async (e, t) => {}, B = () => (0, r.jsx)(g.Z, {
    onTextChange: e => null == a ? true : a(e),
    pendingText: i,
    currentText: i,
    disableThemedBackground: true,
    className: U.customGiftMessageWrapper,
    innerClassName: U.customGiftMessage
  }), H = () => null != o && (h === j.Wt.USER_PROFILE_WISHLIST || h === j.Wt.DM_CHANNEL_WISHLIST) ? (0, r.jsx)(y.s, {
    giftRecipient: o
  }) : (0, r.jsx)(u.Z, {
    selectedSkuId: v,
    validateSelectedGift: F,
    searchableSelectWrapperClassName: U.recipientPickerSelectWrapper,
    recipients: P
  }), Y = e => {
    null != m && m(null == e ? true : e)
  }, W = () => {
    var e;
    return (0, r.jsxs)("div", {
      className: U.bodyColumnLeft,
      children: [null != L && (0, r.jsx)(D.p, {
        containerClassName: U.skuCardImage,
        cardImage: L,
        cardBackgroundImage: G,
        altText: null != (e = null == x ? true : x.name) ? e : "",
        shape: "square"
      }), (0, r.jsxs)("div", {
        className: U.giftEffectsContainer,
        children: [(0, r.jsx)(O.Z, {
          sound: d,
          onSelect: Y
        }), (0, r.jsx)(E.Z, {
          setEmojiConfetti: f,
          emojiConfetti: null == c ? true : c
        })]
      })]
    })
  }, z = () => {
    var e, t, n, i;
    if (null == x) return null;
    let a = (0, C.T4)(null != (n = null == (e = x.price) ? true : e.amount) ? n : 0, null != (i = null == (t = x.price) ? true : t.currency) ? i : M.pK.USD);
    return (0, r.jsxs)("div", {
      className: U.giftPreviewContainer,
      children: [(0, r.jsx)(l.vwX, {
        className: U.giftPreviewTitle,
        children: k.intl.string(k.t.PpoJzt)
      }), (0, r.jsxs)("div", {
        className: U.giftPreviewContent,
        children: [(0, r.jsx)("div", {
          className: U.giftPreviewImageContainer,
          children: null != x && null != L && (0, r.jsx)(D.p, {
            containerClassName: U.giftPreviewCardContainer,
            cardImage: L,
            cardBackgroundImage: G,
            altText: x.name,
            shape: "square"
          })
        }), (0, r.jsxs)("div", {
          className: U.giftPreviewTextContainer,
          children: [null != T && (0, r.jsx)(R.e, {
            application: T
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            children: x.name
          })]
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      })]
    })
  }, q = () => (0, r.jsxs)("div", {
    className: U.bodyColumnRight,
    children: [H(), B(), z(), null != Z && null != x && (0, r.jsx)(K, {
      handleClose: n,
      sku: x,
      guild: Z
    })]
  });
  return {
    renderStepBody: () => (0, r.jsxs)("div", {
      className: U.stepBody,
      children: [W(), q()]
    }),
    getLeftColumnComponent: W,
    getRightColumnComponent: q,
    onStepChange: t,
    onBackClick: n,
    disabled: null == o || o.id === (null == N ? true : N.id) || i.length > j.$n
  }
};

function W(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    renderStepBody: i,
    onStepChange: a,
    onBackClick: o,
    disabled: s
  } = Y({
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
        className: U.footer,
        children: (0, r.jsx)(H, {
          onStepChange: a,
          onBackClick: o,
          disabled: s
        })
      })
    })]
  })
}

function K(e) {
  let {
    handleClose: t,
    guild: n,
    sku: a
  } = e, o = i.useCallback(() => {
    (0, P.eagerNavigateToSocialLayerStorefront)({
      guildId: n.id
    })
  }, [n.id]), s = i.useCallback(() => {
    var e;
    t();
    let r = null == (e = N.Z.getStorefrontState(n.id)) ? true : e.activePage;
    window.location.pathname.includes(x.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) || ((0, l.pTH)(), (0, P.default)({
      guildId: n.id,
      pageIndex: null != r ? r : 0,
      skuId: a.id,
      slug: a.slug
    }))
  }, [n.id, a.id, a.slug, t]);
  return (0, r.jsx)("div", {
    className: U.viewItemButton,
    children: (0, r.jsx)(l.Avr, {
      text: n.id === (0, A.ac)() ? k.intl.string(k.t.nyIcya) : k.intl.string(k.t.ImioFL),
      onMouseDown: o,
      onClick: s,
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}