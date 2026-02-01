/** Chunk was on web.js **/
/** chunk id: 941673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZR: () => W,
  gj: () => F
}), require("./896048.js"), require("./321073.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk313961 = require("./313961.js"),
  Chunk734925 = require("./734925.jsx"),
  Chunk765441 = require("./765441.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk871181 = require("./871181.jsx"),
  Chunk238017 = require("./238017.jsx"),
  Chunk683433 = require("./683433.jsx"),
  Chunk285719 = require("./285719.jsx"),
  Chunk650588 = require("./650588.jsx"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk67480 = require("./67480.js"),
  Chunk403362 = require("./403362.js"),
  Chunk580630 = require("./580630.js"),
  Chunk871123 = require("./871123.js"),
  Chunk832163 = require("./832163.js"),
  Chunk44724 = require("./44724.js"),
  Chunk980094 = require("./980094.jsx"),
  Chunk421161 = require("./421161.js"),
  Chunk366523 = require("./366523.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk490669 = require("./490669.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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
  key: Chunk166532.pn.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(K, V({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"])
  }
};

function B(e) {
  let t = (0, s.bG)([v.A], () => v.A.isConnected() ? v.A.getChannelId() : null),
    [n, r] = i.useState([]);
  return i.useEffect(() => {
    let n = null != t ? c.A.getParticipants(t) : [],
      i = [],
      a = new Set;
    for (let t of n) !(0, x.Xw)(t) && !(0, x.Ay)(t) || t.user.id === e || a.has(t.user.id) || (a.add(t.user.id), i.push(t));
    i.sort((e, t) => (0, x.Ay)(e) && !(0, x.Ay)(t) ? false : (0, x.Ay)(t) && !(0, x.Ay)(e) ? 1 : 0), r(i.map(e => e.user))
  }, [t, e]), n
}

function H(e, t, n) {
  let r = (0, d.A)(),
    a = B(e),
    l = (0, s.yK)([A.default], () => {
      var e;
      return null != (e = null == n ? true : n.map(A.default.getUser).filter(S.Vq)) ? e : []
    }, [n]);
  return i.useMemo(() => o().uniqWith([...null != t ? [t] : [], ...l, ...a, ...r], (e, t) => e.id === t.id), [t, l, a, r])
}

function Y(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: a = false,
    loading: o = false
  } = e, {
    hasPaymentSources: s
  } = (0, _.P5)(), c = s ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Button, {
      onClick: () => t(c),
      disabled: a,
      loading: o,
      text: k.intl.string(k.t.XiOHRX)
    }), i ? (0, r.jsx)(y.A, {
      onClick: n
    }) : null]
  })
}
let W = e => {
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
    setSoundEffect: h,
    giftingOrigin: m,
    additionalUserIds: y
  } = (0, p.Pv)(), {
    selectedSkuId: v,
    application: S
  } = (0, _.P5)(), N = (0, s.bG)([A.default], () => A.default.getCurrentUser()), w = H(null == N ? true : N.id, o, y), L = (0, s.bG)([I.A], () => null != v ? I.A.get(v) : null, [v]), x = (0, C.fq)(L), G = (0, C.xf)(L), V = (0, P.j)(L, {
    shouldFetchIfMissing: true
  }), F = async (e, t) => {}, B = () => (0, r.jsx)(g.A, {
    onTextChange: e => null == a ? true : a(e),
    pendingText: i,
    currentText: i,
    disableThemedBackground: true,
    className: U.iX,
    innerClassName: U.pt
  }), Y = () => null != o && (m === M.vQ.USER_PROFILE_WISHLIST || m === M.vQ.DM_CHANNEL_WISHLIST) ? (0, r.jsx)(b.Z, {
    giftRecipient: o
  }) : (0, r.jsx)(u.A, {
    selectedSkuId: v,
    validateSelectedGift: F,
    recipients: w
  }), W = e => {
    null != h && h(null == e ? true : e)
  }, K = () => {
    var e;
    return (0, r.jsxs)("div", {
      className: U.mT,
      children: [null != x && (0, r.jsx)(D.A, {
        containerClassName: U.T3,
        cardImage: x,
        cardBackgroundImage: G,
        altText: null != (e = null == L ? true : L.name) ? e : "",
        shape: "square"
      }), (0, r.jsxs)("div", {
        className: U._T,
        children: [(0, r.jsx)(O.A, {
          sound: d,
          onSelect: W
        }), (0, r.jsx)(E.A, {
          setEmojiConfetti: f,
          emojiConfetti: null == c ? true : c
        })]
      })]
    })
  }, q = () => {
    var e, t, n, i;
    if (null == L) return null;
    let a = (0, T.$g)(null != (e = null == (n = L.price) ? true : n.amount) ? e : 0, null != (t = null == (i = L.price) ? true : i.currency) ? t : j.Yr.USD);
    return (0, r.jsxs)("div", {
      className: U.AN,
      children: [(0, r.jsx)(l.zEo, {
        className: U.jr,
        children: k.intl.string(k.t.PpoJzt)
      }), (0, r.jsxs)("div", {
        className: U.Wx,
        children: [(0, r.jsx)("div", {
          className: U.Xb,
          children: null != L && null != x && (0, r.jsx)(D.A, {
            containerClassName: U.Iy,
            cardImage: x,
            cardBackgroundImage: G,
            altText: L.name,
            shape: "square"
          })
        }), (0, r.jsxs)("div", {
          className: U.vz,
          children: [null != S && (0, r.jsx)(R.Q, {
            application: S
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            children: L.name
          })]
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      })]
    })
  }, Z = () => (0, r.jsxs)("div", {
    className: U.Tc,
    children: [Y(), B(), q(), null != V && null != L && (0, r.jsx)(z, {
      handleClose: n,
      sku: L,
      guild: V
    })]
  });
  return {
    renderStepBody: () => (0, r.jsxs)("div", {
      className: U.Du,
      children: [K(), Z()]
    }),
    getLeftColumnComponent: K,
    getRightColumnComponent: Z,
    onStepChange: t,
    onBackClick: n,
    disabled: null == o || o.id === (null == N ? true : N.id) || i.length > M.Jo
  }
};

function K(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    renderStepBody: i,
    onStepChange: a,
    onBackClick: o,
    disabled: s
  } = W({
    handleStepChange: t,
    handleClose: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.dZ, {
      children: i()
    }), (0, r.jsx)(m.UX, {
      children: (0, r.jsx)(l.jlY, {
        "data-migration-pending": true,
        justify: f.A.Justify.BETWEEN,
        align: f.A.Align.CENTER,
        className: U.qr,
        children: (0, r.jsx)(Y, {
          onStepChange: a,
          onBackClick: o,
          disabled: s
        })
      })
    })]
  })
}

function z(e) {
  let {
    handleClose: t,
    guild: n,
    sku: a
  } = e, o = i.useCallback(() => {
    (0, w.X)({
      guildId: n.id
    })
  }, [n.id]), s = i.useCallback(() => {
    var e;
    t();
    let r = null == (e = N.A.getStorefrontState(n.id)) ? true : e.activePage;
    window.location.pathname.includes(L.BVt.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) || ((0, l.s7G)(), (0, w.default)({
      guildId: n.id,
      pageIndex: null != r ? r : 0,
      skuId: a.id,
      slug: a.slug
    }))
  }, [n.id, a.id, a.slug, t]);
  return (0, r.jsx)("div", {
    className: U.$O,
    children: (0, r.jsx)(l.QWc, {
      text: n.id === (0, C.zf)() ? k.intl.string(k.t.nyIcya) : k.intl.string(k.t.ImioFL),
      onMouseDown: o,
      onClick: s,
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}