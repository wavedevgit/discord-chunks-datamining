/** Chunk was on 88742 **/
/** chunk id: 535618, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk775644 = require("./775644.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk535139 = require("./535139.js"),
  Chunk812206 = require("./812206.js"),
  Chunk715627 = require("./715627.jsx"),
  Chunk146779 = require("./146779.js"),
  Chunk763296 = require("./763296.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
  Chunk877481 = require("./877481.js"),
  Chunk669079 = require("./669079.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk579201 = require("./579201.js"),
  Chunk683668 = require("./683668.js"),
  Chunk55121 = require("./55121.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308285 = require("./308285.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function G(t) {
  let {
    transitionState: e,
    sku: n,
    onClose: s,
    giftCode: l,
    channelContext: r,
    customGiftMessage: _,
    emojiName: f,
    soundId: g,
    analyticsLocations: C
  } = t, [S, h] = a.useState({
    state: "LINK"
  }), [j, k] = a.useState(false), I = (0, o.e7)([p.Z], () => p.Z.getApplication(n.applicationId)), {
    analyticsLocations: E
  } = (0, m.ZP)(null != C ? C : [], x.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
  a.useEffect(() => {
    l.redeemed && "LINK" === S.state && h({
      state: "ERROR",
      error: new c.yZ(O.intl.string(O.t.Iw2TUW), M.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED)
    })
  }, [l, S.state]);
  let v = a.useRef({
    analyticsLocations: E,
    giftCode: l,
    hasCustomMessage: null != _ && "" !== _,
    customGiftMessage: _,
    skuProductLine: n.productLine,
    emojiName: f,
    soundId: g,
    skuId: n.id
  });
  (0, d.ZP)(() => {
    let {
      analyticsLocations: t,
      skuId: e
    } = v.current;
    T.default.track(M.rMx.OPEN_MODAL, {
      location_stack: t,
      type: b.tb,
      sku_id: e,
      application_id: null == I ? true : I.id
    })
  }), a.useEffect(() => {
    let {
      analyticsLocations: t,
      hasCustomMessage: e,
      customGiftMessage: n,
      giftCode: i,
      emojiName: a,
      soundId: s,
      skuProductLine: o
    } = v.current;
    T.default.track(M.rMx.GIFT_ACCEPT_STEP, {
      to_step: S.state,
      location_stack: t,
      has_custom_message: e,
      is_custom_message_edited: e && n !== O.intl.string(O.t.ZkOo1U),
      gift_style: i.giftStyle,
      gift_code: i.code,
      emoji_name: a,
      sound_id: s,
      product_line: o
    })
  }, [S.state]);
  let y = a.useCallback(async () => {
    var t, e;
    let {
      analyticsLocations: n,
      skuId: i,
      hasCustomMessage: a,
      customGiftMessage: s,
      emojiName: o,
      soundId: c
    } = v.current;
    T.default.track(M.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
      location_stack: n,
      sku_id: i,
      application_id: null == I ? true : I.id,
      gift_code: l.code,
      gift_style: null != (e = null == (t = l.giftStyle) ? true : t.toString()) ? e : null,
      has_custom_message: a,
      is_custom_message_edited: a && s !== O.intl.string(O.t.ZkOo1U),
      emoji_name: o,
      sound_id: c
    });
    try {
      k(true), await u.Z.redeemGiftCode({
        code: l.code,
        options: {
          channelId: r
        }
      }), h({
        state: "SUCCESS"
      })
    } catch (t) {
      h({
        state: "ERROR",
        error: t
      })
    } finally {
      k(false)
    }
  }, [l, h, r, null == I ? true : I.id]);
  if (null == I) return null;
  switch (S.state) {
    case "LINK":
      return (0, i.jsx)(U, {
        sku: n,
        application: I,
        transitionState: e,
        onClose: s,
        successStateButtonText: O.intl.string(O.t.go1e4x),
        onSuccessButtonClick: y,
        isSuccessButtonLoading: j,
        analyticsLocations: E
      });
    case "SUCCESS":
      return (0, i.jsx)(F, {
        transitionState: e,
        application: I,
        sku: n,
        giftCode: l,
        customGiftMessage: _,
        onClose: s,
        analyticsLocations: E,
        emojiName: f,
        soundId: g
      });
    case "ERROR":
      return (0, i.jsx)(B, {
        transitionState: e,
        onClose: s,
        error: S.error
      });
    default:
      (0, L.vE)(S)
  }
}
let B = t => {
  let {
    transitionState: e,
    onClose: n,
    error: a
  } = t, o = j.default.getCurrentUser(), c = (0, E.QW)(a, o), r = (0, _.ZP)(), u = (0, l.wj)(r);
  return (0, i.jsxs)(s.IX, {
    transitionState: e,
    onClose: n,
    children: [(0, i.jsx)(s.xBx, {
      graphic: {
        type: "image",
        src: u ? Z : D
      }
    }), (0, i.jsx)(s.fef, {
      children: c
    })]
  })
};

function U(t) {
  let {
    sku: e,
    application: n,
    transitionState: o,
    onClose: c,
    successStateButtonText: l,
    onSuccessButtonClick: u,
    isSuccessButtonLoading: d,
    analyticsLocations: _
  } = t, {
    hasAlreadyLinked: f,
    canStartAuthorization: x,
    startAuthorization: m,
    fetched: p
  } = (0, g.F)(n), C = a.useRef({
    analyticsLocations: _,
    skuId: e.id,
    applicationId: n.id,
    canStartAuthorization: x
  });
  a.useEffect(() => {
    C.current.canStartAuthorization = x
  }, [x]), a.useEffect(() => {
    if (!p) return;
    let {
      analyticsLocations: t,
      skuId: e,
      applicationId: n,
      canStartAuthorization: i
    } = C.current;
    T.default.track(M.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: t,
      sku_id: e,
      application_id: n,
      is_gift: true,
      is_account_linked: f,
      can_start_authorization: i
    })
  }, [p, f]);
  let S = a.useCallback(() => {
    let {
      analyticsLocations: t,
      skuId: e,
      applicationId: n
    } = C.current;
    T.default.track(M.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
      location_stack: t,
      sku_id: e,
      application_id: n,
      is_gift: true
    }), m()
  }, [m]);
  if (!p) return (0, i.jsx)(s.IX, {
    transitionState: o,
    onClose: c,
    children: (0, i.jsx)(s.fef, {
      children: (0, i.jsx)("div", {
        className: P.loadingContainer,
        children: (0, i.jsx)(r.$jN, {})
      })
    })
  });
  let h = f ? {
    variant: "primary",
    text: l,
    onClick: u,
    loading: d
  } : {
    variant: "primary",
    text: O.intl.string(O.t["VDAhr+"]),
    onClick: S,
    icon: s.uIJ,
    disabled: !x
  };
  return (0, i.jsx)(R.M, {
    sku: e,
    application: n,
    transitionState: o,
    onClose: c,
    hasAlreadyLinked: f,
    canStartAuthorization: x,
    primaryCTAButtonProps: h,
    bodyText: O.intl.formatToPlainString(O.t.PaYE38, {
      applicationName: n.name
    }),
    title: O.intl.string(O.t["Bn1J+a"])
  })
}

function F(t) {
  let {
    transitionState: e,
    onClose: n,
    sku: c,
    application: l,
    giftCode: u,
    customGiftMessage: d,
    analyticsLocations: _,
    emojiName: f,
    soundId: x
  } = t, m = (0, N.a)(l), g = (0, y.I)(l), [p, C] = a.useState(null), S = (0, o.e7)([j.default], () => j.default.getUser(u.userId)), h = v.ZP.getName(S), k = a.useRef({
    analyticsLocations: _,
    skuId: c.id,
    applicationId: l.id,
    isLaunchable: m,
    isApplicationConnected: g
  });
  if (a.useEffect(() => {
      k.current.isLaunchable = m, k.current.isApplicationConnected = g
    }, [m, g]), null == m) return (0, i.jsx)(s.IX, {
    transitionState: e,
    onClose: n,
    children: (0, i.jsx)(s.fef, {
      children: (0, i.jsx)(r.$jN, {})
    })
  });
  let E = m && !g ? {
    variant: "primary",
    text: O.intl.string(O.t["s+J8Dl"]),
    onClick: () => {
      T.default.track(M.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: _,
        sku_id: c.id,
        application_id: l.id,
        is_gift: true
      }), I.Z.launchGame(l.id)
    },
    icon: s.rgF
  } : {
    variant: "primary",
    text: O.intl.string(O.t.cpT0Cq),
    onClick: () => {
      T.default.track(M.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: _,
        sku_id: c.id,
        application_id: l.id,
        is_gift: true,
        is_launchable: null != m && m,
        is_application_connected: g
      }), n()
    }
  };
  return (0, i.jsxs)(s.IX, {
    transitionState: e,
    onClose: n,
    children: [(0, i.jsx)("div", {
      style: {
        position: "absolute",
        top: "-".concat(100, "px")
      },
      ref: t => C(t)
    }), (0, i.jsx)(A.y, {
      sku: c
    }), (0, i.jsxs)(s.fef, {
      children: [(0, i.jsx)(s.xvT, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: P.giftSenderText,
        children: O.intl.formatToPlainString(O.t["6yrIzU"], {
          sender: h
        })
      }), null != d && "" !== d && (0, i.jsx)(s.xvT, {
        variant: "text-lg/semibold",
        color: "text-secondary",
        className: P.customGiftMessage,
        children: d
      }), (0, i.jsx)("div", {
        className: P.giftSentToGameNoticeContainerPadding,
        children: (0, i.jsx)(s.M14, {
          type: "success",
          children: O.intl.formatToPlainString(O.t.W2znvX, {
            skuName: c.name,
            applicationName: l.name
          })
        })
      }), null != p && (0, i.jsx)(z, {
        confettiTarget: p,
        emojiName: f
      }), null != x && (0, i.jsx)(w, {
        soundId: x
      })]
    }), (0, i.jsx)(s.Go$, {
      actions: [E],
      actionsFullWidth: true
    })]
  })
}
let w = t => {
    let {
      soundId: e
    } = t;
    return a.useEffect(() => {
      var t;
      let n = h.Z.getSoundById(e);
      (0, S.playGiftSound)(e, null != (t = null == n ? true : n.volume) ? t : 1)
    }, [e]), null
  },
  W = {
    xMin: false,
    xMax: 120,
    yMin: false,
    yMax: false
  },
  z = t => {
    let {
      confettiTarget: e,
      emojiName: n
    } = t, s = (0, o.e7)([f.Z], () => f.Z.useReducedMotion), c = a.useRef(e), [l, r] = a.useState(true), u = a.useCallback(() => {
      r(false)
    }, []);
    if (s || !l) return null;
    let d = null != n ? k.ZP.getURL(n) : true;
    return (0, i.jsx)(C.Z, {
      confettiTarget: c.current,
      emojiURL: d,
      numBursts: 5,
      particlesPerBurst: 50,
      speedValues: W,
      dragCoefficientValue: 1,
      onAnimationEnd: u
    })
  }