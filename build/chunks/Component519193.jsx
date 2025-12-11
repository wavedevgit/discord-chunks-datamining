/** Chunk was on 21021 **/
/** chunk id: 519193, original params: t,a,n (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
  Chunk626135 = require("./626135.js"),
  Chunk877481 = require("./877481.js"),
  Chunk579201 = require("./579201.js"),
  Chunk683668 = require("./683668.js"),
  Chunk55121 = require("./55121.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370296 = require("./370296.js");

function T(t) {
  let {
    transitionState: a,
    onClose: n,
    sku: T,
    application: g,
    analyticsLocations: j
  } = t, L = (0, _.a)(g), {
    fetched: A,
    hasAlreadyLinked: v,
    canStartAuthorization: N,
    startAuthorization: S
  } = (0, u.F)(g), y = (0, f.I)(g), {
    analyticsLocations: E
  } = (0, o.ZP)(null != j ? j : [], r.Z.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL), I = !A || null == L, R = e.useRef({
    analyticsLocations: E,
    skuId: T.id,
    applicationId: g.id,
    isLaunchable: L,
    isApplicationConnected: y,
    canStartAuthorization: N
  });
  e.useEffect(() => {
    R.current.isLaunchable = L, R.current.isApplicationConnected = y, R.current.canStartAuthorization = N
  }, [L, y, N]), (0, l.ZP)(() => {
    d.default.track(h.rMx.OPEN_MODAL, {
      location_stack: E,
      type: C.ng,
      sku_id: T.id,
      application_id: g.id
    })
  }), e.useEffect(() => {
    if (I) return;
    let {
      analyticsLocations: t,
      skuId: a,
      applicationId: n,
      canStartAuthorization: i
    } = R.current;
    d.default.track(h.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: t,
      sku_id: a,
      application_id: n,
      is_gift: false,
      is_account_linked: v,
      can_start_authorization: i
    })
  }, [I, v]);
  let M = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: a,
        applicationId: n
      } = R.current;
      d.default.track(h.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
        location_stack: t,
        sku_id: a,
        application_id: n,
        is_gift: false
      }), S({
        analyticsLocations: t
      })
    }, [S]),
    O = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: a
      } = R.current;
      d.default.track(h.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: t,
        sku_id: a,
        application_id: g.id,
        is_gift: false
      }), x.Z.launchGame(g.id)
    }, [g.id]),
    B = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: a,
        applicationId: i,
        isLaunchable: e,
        isApplicationConnected: s
      } = R.current;
      d.default.track(h.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: t,
        sku_id: a,
        application_id: i,
        is_gift: false,
        is_launchable: null != e && e,
        is_application_connected: s
      }), n()
    }, [n]);
  if (I) return (0, i.jsx)(s.IX, {
    transitionState: a,
    onClose: n,
    children: (0, i.jsx)(s.fef, {
      children: (0, i.jsx)(c.$jN, {})
    })
  });
  if (v) {
    let t = L && !y ? {
      variant: "primary",
      text: k.intl.string(k.t["s+J8Dl"]),
      onClick: O,
      icon: s.rgF
    } : {
      variant: "primary",
      text: k.intl.string(k.t.cpT0Cq),
      onClick: B
    };
    return (0, i.jsxs)(s.IX, {
      transitionState: a,
      onClose: n,
      children: [(0, i.jsx)(m.y, {
        sku: T,
        title: k.intl.string(k.t["5glWta"])
      }), (0, i.jsx)(s.fef, {
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: b.modalBodyText,
          children: k.intl.formatToPlainString(k.t.W2znvX, {
            skuName: T.name,
            applicationName: g.name
          })
        })
      }), (0, i.jsx)(s.Go$, {
        actions: [t],
        actionsFullWidth: true
      })]
    })
  } {
    let t = {
      variant: "primary",
      text: k.intl.string(k.t["VDAhr+"]),
      onClick: M,
      icon: s.uIJ,
      disabled: !N
    };
    return (0, i.jsx)(p.M, {
      sku: T,
      application: g,
      transitionState: a,
      onClose: n,
      hasAlreadyLinked: v,
      canStartAuthorization: N,
      primaryCTAButtonProps: t,
      bodyText: k.intl.formatToPlainString(k.t.Qmkje8, {
        applicationName: g.name
      }),
      title: k.intl.string(k.t.GPAtvf)
    })
  }
}