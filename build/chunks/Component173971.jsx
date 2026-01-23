/** Chunk was on 94544 **/
/** chunk id: 173971, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk75255 = require("./75255.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk587895 = require("./587895.js"),
  Chunk518926 = require("./518926.jsx"),
  Chunk946261 = require("./946261.js"),
  Chunk209932 = require("./209932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk690521 = require("./690521.js"),
  Chunk25171 = require("./25171.js"),
  Chunk45938 = require("./45938.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk690493 = require("./690493.js"),
  Chunk844815 = require("./844815.js"),
  Chunk383089 = require("./383089.jsx"),
  Chunk41032 = require("./41032.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk836263 = require("./836263.js");

function w(t) {
  let {
    transitionState: e,
    sku: i,
    onClose: s,
    giftCode: o,
    channelContext: d,
    customGiftMessage: f,
    emojiName: g,
    soundId: j,
    analyticsLocations: A
  } = t, [S, h] = a.useState({
    state: "LINK"
  }), [T, N] = a.useState(false), E = (0, l.bG)([p.A], () => p.A.getApplication(i.applicationId)), I = (0, m.RD)(E), {
    analyticsLocations: v
  } = (0, x.Ay)(null != A ? A : [], _.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
  a.useEffect(() => {
    o.redeemed && "LINK" === S.state && h({
      state: "ERROR",
      error: new r.Wl(b.intl.string(b.t.Iw2TUW), R.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED)
    })
  }, [o, S.state]);
  let L = a.useRef({
    analyticsLocations: v,
    giftCode: o,
    hasCustomMessage: null != f && "" !== f,
    customGiftMessage: f,
    skuProductLine: i.productLine,
    emojiName: g,
    soundId: j,
    skuId: i.id
  });
  (0, u.Ay)(() => {
    let {
      analyticsLocations: t,
      skuId: e
    } = L.current;
    C.default.track(R.HAw.OPEN_MODAL, {
      location_stack: t,
      type: y.Nu,
      sku_id: e,
      application_id: null == E ? true : E.id
    })
  }), a.useEffect(() => {
    let {
      analyticsLocations: t,
      hasCustomMessage: e,
      customGiftMessage: i,
      giftCode: n,
      emojiName: a,
      soundId: s,
      skuProductLine: l
    } = L.current;
    C.default.track(R.HAw.GIFT_ACCEPT_STEP, {
      to_step: S.state,
      location_stack: t,
      has_custom_message: e,
      is_custom_message_edited: e && i !== b.intl.string(b.t.ZkOo1U),
      gift_style: n.giftStyle,
      gift_code: n.code,
      emoji_name: a,
      sound_id: s,
      product_line: l
    })
  }, [S.state]);
  let O = a.useCallback(async () => {
    var t, e;
    let {
      analyticsLocations: i,
      skuId: n,
      hasCustomMessage: a,
      customGiftMessage: s,
      emojiName: l,
      soundId: r
    } = L.current;
    C.default.track(R.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
      location_stack: i,
      sku_id: n,
      application_id: null == E ? true : E.id,
      gift_code: o.code,
      gift_style: null != (t = null == (e = o.giftStyle) ? true : e.toString()) ? t : null,
      has_custom_message: a,
      is_custom_message_edited: a && s !== b.intl.string(b.t.ZkOo1U),
      emoji_name: l,
      sound_id: r
    });
    try {
      N(true), await c.A.redeemGiftCode({
        code: o.code,
        options: {
          channelId: d
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
      N(false)
    }
  }, [o, h, d, null == E ? true : E.id]);
  if (null == E) return null;
  switch (S.state) {
    case "LINK":
      return (0, n.jsx)(M, {
        sku: i,
        application: E,
        transitionState: e,
        onClose: s,
        successStateButtonText: b.intl.string(b.t.go1e4x),
        onSuccessButtonClick: O,
        isSuccessButtonLoading: T,
        analyticsLocations: v,
        startAuthorizeResult: I
      });
    case "SUCCESS":
      return (0, n.jsx)(P, {
        transitionState: e,
        application: E,
        sku: i,
        giftCode: o,
        customGiftMessage: f,
        onClose: s,
        analyticsLocations: v,
        emojiName: g,
        soundId: j
      });
    case "ERROR":
      return (0, n.jsx)(D, {
        transitionState: e,
        onClose: s,
        error: S.error,
        application: E,
        hasAlreadyLinked: I.hasAlreadyLinked
      });
    default:
      (0, k.xb)(S)
  }
}
let D = t => {
  let e, i, {
      transitionState: a,
      onClose: l,
      error: r,
      application: o,
      hasAlreadyLinked: c
    } = t,
    u = A.default.getCurrentUser();
  return r.code === R.t02.INVALID_GIFT_REDEMPTION_OWNED ? (e = b.intl.string(b.t.uXnSGo), i = c ? b.intl.formatToPlainString(b.t["TNRN/e"], {
    applicationName: o.name
  }) : b.intl.formatToPlainString(b.t.VkR30M, {
    applicationName: o.name
  })) : (e = b.intl.string(b.t.dMYg1c), i = (0, T.eN)(r, u)), (0, n.jsxs)(s.dWK, {
    transitionState: a,
    onClose: l,
    children: [(0, n.jsx)(s.rQ0, {
      title: e,
      alignCenter: true
    }), (0, n.jsx)(s.cwr, {
      children: (0, n.jsx)(s.EYj, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: i
      })
    }), (0, n.jsx)(s.H7u, {
      actions: [{
        variant: "primary",
        text: b.intl.string(b.t.WAI6xu),
        onClick: l
      }],
      actionsFullWidth: true
    })]
  })
};

function M(t) {
  let {
    sku: e,
    application: i,
    transitionState: l,
    onClose: r,
    successStateButtonText: c,
    onSuccessButtonClick: u,
    isSuccessButtonLoading: d,
    analyticsLocations: _,
    startAuthorizeResult: x
  } = t, {
    hasAlreadyLinked: m,
    canStartAuthorization: p,
    startAuthorization: f,
    fetched: g
  } = x, j = a.useRef({
    analyticsLocations: _,
    skuId: e.id,
    applicationId: i.id,
    canStartAuthorization: p
  });
  a.useEffect(() => {
    j.current.canStartAuthorization = p
  }, [p]), a.useEffect(() => {
    if (!g) return;
    let {
      analyticsLocations: t,
      skuId: e,
      applicationId: i,
      canStartAuthorization: n
    } = j.current;
    C.default.track(R.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: t,
      sku_id: e,
      application_id: i,
      is_gift: true,
      is_account_linked: m,
      can_start_authorization: n
    })
  }, [g, m]);
  let A = a.useCallback(() => {
    let {
      analyticsLocations: t,
      skuId: e,
      applicationId: i
    } = j.current;
    C.default.track(R.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
      location_stack: t,
      sku_id: e,
      application_id: i,
      is_gift: true
    }), f({
      analyticsLocations: t
    })
  }, [f]);
  if (!g) return (0, n.jsx)(s.dWK, {
    transitionState: l,
    onClose: r,
    children: (0, n.jsx)(s.cwr, {
      children: (0, n.jsx)("div", {
        className: O.g4,
        children: (0, n.jsx)(o.y$y, {})
      })
    })
  });
  let S = m ? {
    variant: "primary",
    text: c,
    onClick: u,
    loading: d
  } : {
    variant: "primary",
    text: b.intl.string(b.t["VDAhr+"]),
    onClick: A,
    icon: s.A5T,
    disabled: !p
  };
  return (0, n.jsx)(v.m, {
    sku: e,
    application: i,
    transitionState: l,
    onClose: r,
    hasAlreadyLinked: m,
    canStartAuthorization: p,
    primaryCTAButtonProps: S,
    bodyText: m ? b.intl.formatToPlainString(b.t.sL5yz7, {
      applicationName: i.name
    }) : b.intl.formatToPlainString(b.t.PaYE38, {
      applicationName: i.name
    }),
    title: b.intl.string(b.t["Bn1J+a"])
  })
}

function P(t) {
  let {
    transitionState: e,
    onClose: i,
    sku: r,
    application: c,
    giftCode: u,
    customGiftMessage: d,
    analyticsLocations: _,
    emojiName: x,
    soundId: m
  } = t, p = (0, I.j)(c), f = (0, E.J)(c), [g, j] = a.useState(null), S = (0, l.bG)([A.default], () => A.default.getUser(u.userId)), T = N.Ay.getName(S), k = a.useRef({
    analyticsLocations: _,
    skuId: r.id,
    applicationId: c.id,
    isLaunchable: p,
    isApplicationConnected: f
  });
  if (a.useEffect(() => {
      k.current.isLaunchable = p, k.current.isApplicationConnected = f
    }, [p, f]), null == p) return (0, n.jsx)(s.dWK, {
    transitionState: e,
    onClose: i,
    children: (0, n.jsx)(s.cwr, {
      children: (0, n.jsx)(o.y$y, {})
    })
  });
  let v = p && !f ? {
    variant: "primary",
    text: b.intl.string(b.t["s+J8Dl"]),
    onClick: () => {
      C.default.track(R.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: _,
        sku_id: r.id,
        application_id: c.id,
        is_gift: true
      }), h.A.launchGame(c.id)
    },
    icon: s.tfB
  } : {
    variant: "primary",
    text: b.intl.string(b.t.cpT0Cq),
    onClick: () => {
      C.default.track(R.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: _,
        sku_id: r.id,
        application_id: c.id,
        is_gift: true,
        is_launchable: null != p && p,
        is_application_connected: f
      }), i()
    }
  };
  return (0, n.jsxs)(s.dWK, {
    transitionState: e,
    onClose: i,
    children: [(0, n.jsx)("div", {
      style: {
        position: "absolute",
        top: "-".concat(100, "px")
      },
      ref: t => j(t)
    }), (0, n.jsx)(L.z, {
      sku: r
    }), (0, n.jsxs)(s.cwr, {
      children: [(0, n.jsx)(s.EYj, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: O.j7,
        children: b.intl.formatToPlainString(b.t["6yrIzU"], {
          sender: T
        })
      }), null != d && "" !== d && (0, n.jsx)(s.EYj, {
        variant: "text-lg/semibold",
        color: "text-subtle",
        className: O.pt,
        children: d
      }), (0, n.jsx)("div", {
        className: O.S3,
        children: (0, n.jsx)(s.wx6, {
          type: "success",
          children: b.intl.formatToPlainString(b.t.W2znvX, {
            skuName: r.name,
            applicationName: c.name
          })
        })
      }), null != g && (0, n.jsx)(U, {
        confettiTarget: g,
        emojiName: x
      }), null != m && (0, n.jsx)(G, {
        soundId: m
      })]
    }), (0, n.jsx)(s.H7u, {
      actions: [v],
      actionsFullWidth: true
    })]
  })
}
let G = t => {
    let {
      soundId: e
    } = t;
    return a.useEffect(() => {
      var t;
      let i = j.A.getSoundById(e);
      (0, g.playGiftSound)(e, null != (t = null == i ? true : i.volume) ? t : 1)
    }, [e]), null
  },
  W = {
    xMin: false,
    xMax: 120,
    yMin: false,
    yMax: false
  },
  U = t => {
    let {
      confettiTarget: e,
      emojiName: i
    } = t, s = (0, l.bG)([d.A], () => d.A.useReducedMotion), r = a.useRef(e), [o, c] = a.useState(true), u = a.useCallback(() => {
      c(false)
    }, []);
    if (s || !o) return null;
    let _ = null != i ? S.Ay.getURL(i) : true;
    return (0, n.jsx)(f.A, {
      confettiTarget: r.current,
      emojiURL: _,
      numBursts: 5,
      particlesPerBurst: 50,
      speedValues: W,
      dragCoefficientValue: 1,
      onAnimationEnd: u
    })
  }