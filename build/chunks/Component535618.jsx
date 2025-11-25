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
  Chunk524995 = require("./524995.js"),
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
    giftCode: r,
    channelContext: c,
    customGiftMessage: x,
    emojiName: f,
    soundId: g,
    analyticsLocations: C
  } = t, [h, S] = a.useState({
    state: "LINK"
  }), [j, k] = a.useState(false), y = (0, o.e7)([p.Z], () => p.Z.getApplication(n.applicationId)), {
    analyticsLocations: E
  } = (0, m.ZP)(null != C ? C : [], _.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
  a.useEffect(() => {
    r.redeemed && "LINK" === h.state && S({
      state: "ERROR",
      error: new l.yZ(O.intl.string(O.t.Iw2TUW), b.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED)
    })
  }, [r, h.state]);
  let L = a.useRef({
    analyticsLocations: E,
    giftCode: r,
    hasCustomMessage: null != x && "" !== x,
    customGiftMessage: x,
    skuProductLine: n.productLine,
    emojiName: f,
    soundId: g,
    skuId: n.id
  });
  (0, d.ZP)(() => {
    let {
      analyticsLocations: t,
      skuId: e
    } = L.current;
    T.default.track(b.rMx.OPEN_MODAL, {
      location_stack: t,
      type: M.tb,
      sku_id: e,
      application_id: null == y ? true : y.id
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
    } = L.current;
    T.default.track(b.rMx.GIFT_ACCEPT_STEP, {
      to_step: h.state,
      location_stack: t,
      has_custom_message: e,
      is_custom_message_edited: e && n !== O.intl.string(O.t.ZkOo1U),
      gift_style: i.giftStyle,
      gift_code: i.code,
      emoji_name: a,
      sound_id: s,
      product_line: o
    })
  }, [h.state]);
  let v = a.useCallback(async () => {
    var t, e;
    let {
      analyticsLocations: n,
      skuId: i,
      hasCustomMessage: a,
      customGiftMessage: s,
      emojiName: o,
      soundId: l
    } = L.current;
    T.default.track(b.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
      location_stack: n,
      sku_id: i,
      application_id: null == y ? true : y.id,
      gift_code: r.code,
      gift_style: null != (e = null == (t = r.giftStyle) ? true : t.toString()) ? e : null,
      has_custom_message: a,
      is_custom_message_edited: a && s !== O.intl.string(O.t.ZkOo1U),
      emoji_name: o,
      sound_id: l
    });
    try {
      k(true), await u.Z.redeemGiftCode({
        code: r.code,
        options: {
          channelId: c
        }
      }), S({
        state: "SUCCESS"
      })
    } catch (t) {
      S({
        state: "ERROR",
        error: t
      })
    } finally {
      k(false)
    }
  }, [r, S, c, null == y ? true : y.id]);
  if (null == y) return null;
  switch (h.state) {
    case "LINK":
      return (0, i.jsx)(U, {
        sku: n,
        application: y,
        transitionState: e,
        onClose: s,
        successStateButtonText: O.intl.string(O.t.go1e4x),
        onSuccessButtonClick: v,
        isSuccessButtonLoading: j,
        analyticsLocations: E
      });
    case "SUCCESS":
      return (0, i.jsx)(w, {
        transitionState: e,
        application: y,
        sku: n,
        giftCode: r,
        customGiftMessage: x,
        onClose: s,
        analyticsLocations: E,
        emojiName: f,
        soundId: g
      });
    case "ERROR":
      return (0, i.jsx)(D, {
        transitionState: e,
        onClose: s,
        error: h.error
      });
    default:
      (0, I.vE)(h)
  }
}
let D = t => {
  let {
    transitionState: e,
    onClose: n,
    error: a
  } = t, o = j.default.getCurrentUser(), l = (0, E.QW)(a, o), c = (0, x.ZP)(), u = (0, r.wj)(c);
  return (0, i.jsxs)(s.IX, {
    transitionState: e,
    onClose: n,
    children: [(0, i.jsx)(s.xBx, {
      graphic: {
        type: "image",
        src: u ? Z : B
      }
    }), (0, i.jsx)(s.fef, {
      children: l
    })]
  })
};

function U(t) {
  let {
    sku: e,
    application: n,
    transitionState: o,
    onClose: l,
    successStateButtonText: r,
    onSuccessButtonClick: u,
    isSuccessButtonLoading: d,
    analyticsLocations: x
  } = t, {
    hasAlreadyLinked: f,
    canStartAuthorization: _,
    startAuthorization: m,
    fetched: p
  } = (0, g.F)(n), C = a.useRef({
    analyticsLocations: x,
    skuId: e.id,
    applicationId: n.id,
    canStartAuthorization: _
  });
  a.useEffect(() => {
    C.current.canStartAuthorization = _
  }, [_]), a.useEffect(() => {
    if (!p) return;
    let {
      analyticsLocations: t,
      skuId: e,
      applicationId: n,
      canStartAuthorization: i
    } = C.current;
    T.default.track(b.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: t,
      sku_id: e,
      application_id: n,
      is_gift: true,
      is_account_linked: f,
      can_start_authorization: i
    })
  }, [p, f]);
  let h = a.useCallback(() => {
    let {
      analyticsLocations: t,
      skuId: e,
      applicationId: n
    } = C.current;
    T.default.track(b.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
      location_stack: t,
      sku_id: e,
      application_id: n,
      is_gift: true
    }), m()
  }, [m]);
  if (!p) return (0, i.jsx)(s.IX, {
    transitionState: o,
    onClose: l,
    children: (0, i.jsx)(s.fef, {
      children: (0, i.jsx)("div", {
        className: P.loadingContainer,
        children: (0, i.jsx)(c.$jN, {})
      })
    })
  });
  let S = f ? {
    variant: "primary",
    text: r,
    onClick: u,
    loading: d
  } : {
    variant: "primary",
    text: O.intl.string(O.t["VDAhr+"]),
    onClick: h,
    icon: s.uIJ,
    disabled: !_
  };
  return (0, i.jsx)(R.M, {
    sku: e,
    application: n,
    transitionState: o,
    onClose: l,
    hasAlreadyLinked: f,
    canStartAuthorization: _,
    primaryCTAButtonProps: S,
    bodyText: f ? O.intl.formatToPlainString(O.t.sL5yz7, {
      applicationName: n.name
    }) : O.intl.formatToPlainString(O.t.PaYE38, {
      applicationName: n.name
    }),
    title: O.intl.string(O.t["Bn1J+a"])
  })
}

function w(t) {
  let {
    transitionState: e,
    onClose: n,
    sku: l,
    application: r,
    giftCode: u,
    customGiftMessage: d,
    analyticsLocations: x,
    emojiName: f,
    soundId: _
  } = t, m = (0, N.a)(r), g = (0, v.I)(r), [p, C] = a.useState(null), h = (0, o.e7)([j.default], () => j.default.getUser(u.userId)), S = L.ZP.getName(h), k = a.useRef({
    analyticsLocations: x,
    skuId: l.id,
    applicationId: r.id,
    isLaunchable: m,
    isApplicationConnected: g
  });
  if (a.useEffect(() => {
      k.current.isLaunchable = m, k.current.isApplicationConnected = g
    }, [m, g]), null == m) return (0, i.jsx)(s.IX, {
    transitionState: e,
    onClose: n,
    children: (0, i.jsx)(s.fef, {
      children: (0, i.jsx)(c.$jN, {})
    })
  });
  let E = m && !g ? {
    variant: "primary",
    text: O.intl.string(O.t["s+J8Dl"]),
    onClick: () => {
      T.default.track(b.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: x,
        sku_id: l.id,
        application_id: r.id,
        is_gift: true
      }), y.Z.launchGame(r.id)
    },
    icon: s.rgF
  } : {
    variant: "primary",
    text: O.intl.string(O.t.cpT0Cq),
    onClick: () => {
      T.default.track(b.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: x,
        sku_id: l.id,
        application_id: r.id,
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
      sku: l
    }), (0, i.jsxs)(s.fef, {
      children: [(0, i.jsx)(s.xvT, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: P.giftSenderText,
        children: O.intl.formatToPlainString(O.t["6yrIzU"], {
          sender: S
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
            skuName: l.name,
            applicationName: r.name
          })
        })
      }), null != p && (0, i.jsx)(K, {
        confettiTarget: p,
        emojiName: f
      }), null != _ && (0, i.jsx)(F, {
        soundId: _
      })]
    }), (0, i.jsx)(s.Go$, {
      actions: [E],
      actionsFullWidth: true
    })]
  })
}
let F = t => {
    let {
      soundId: e
    } = t;
    return a.useEffect(() => {
      var t;
      let n = S.Z.getSoundById(e);
      (0, h.playGiftSound)(e, null != (t = null == n ? true : n.volume) ? t : 1)
    }, [e]), null
  },
  W = {
    xMin: false,
    xMax: 120,
    yMin: false,
    yMax: false
  },
  K = t => {
    let {
      confettiTarget: e,
      emojiName: n
    } = t, s = (0, o.e7)([f.Z], () => f.Z.useReducedMotion), l = a.useRef(e), [r, c] = a.useState(true), u = a.useCallback(() => {
      c(false)
    }, []);
    if (s || !r) return null;
    let d = null != n ? k.ZP.getURL(n) : true;
    return (0, i.jsx)(C.Z, {
      confettiTarget: l.current,
      emojiURL: d,
      numBursts: 5,
      particlesPerBurst: 50,
      speedValues: W,
      dragCoefficientValue: 1,
      onAnimationEnd: u
    })
  }