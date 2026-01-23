/** Chunk was on 80307 **/
/** chunk id: 472734, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk954571 = require("./954571.js"),
  Chunk25171 = require("./25171.js"),
  Chunk690493 = require("./690493.js"),
  Chunk844815 = require("./844815.js"),
  Chunk383089 = require("./383089.jsx"),
  Chunk41032 = require("./41032.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk778560 = require("./778560.js");

function k(t) {
  let {
    transitionState: i,
    onClose: a,
    sku: k,
    application: T,
    analyticsLocations: S
  } = t, v = (0, p.j)(T), {
    fetched: b,
    hasAlreadyLinked: N,
    canStartAuthorization: L,
    startAuthorization: g
  } = (0, d.RD)(T), E = (0, x.J)(T), {
    analyticsLocations: y
  } = (0, o.Ay)(null != S ? S : [], c.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL), I = !b || null == v, R = e.useRef({
    analyticsLocations: y,
    skuId: k.id,
    applicationId: T.id,
    isLaunchable: v,
    isApplicationConnected: E,
    canStartAuthorization: L
  });
  e.useEffect(() => {
    R.current.isLaunchable = v, R.current.isApplicationConnected = E, R.current.canStartAuthorization = L
  }, [v, E, L]), (0, r.Ay)(() => {
    u.default.track(h.HAw.OPEN_MODAL, {
      location_stack: y,
      type: j.e2,
      sku_id: k.id,
      application_id: T.id
    })
  }), e.useEffect(() => {
    if (I) return;
    let {
      analyticsLocations: t,
      skuId: i,
      applicationId: a,
      canStartAuthorization: n
    } = R.current;
    u.default.track(h.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: t,
      sku_id: i,
      application_id: a,
      is_gift: false,
      is_account_linked: N,
      can_start_authorization: n
    })
  }, [I, N]);
  let O = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: i,
        applicationId: a
      } = R.current;
      u.default.track(h.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
        location_stack: t,
        sku_id: i,
        application_id: a,
        is_gift: false
      }), g({
        analyticsLocations: t
      })
    }, [g]),
    w = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: i
      } = R.current;
      u.default.track(h.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: t,
        sku_id: i,
        application_id: T.id,
        is_gift: false
      }), _.A.launchGame(T.id)
    }, [T.id]),
    D = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: i,
        applicationId: n,
        isLaunchable: e,
        isApplicationConnected: l
      } = R.current;
      u.default.track(h.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: t,
        sku_id: i,
        application_id: n,
        is_gift: false,
        is_launchable: null != e && e,
        is_application_connected: l
      }), a()
    }, [a]);
  if (I) return (0, n.jsx)(l.dWK, {
    transitionState: i,
    onClose: a,
    children: (0, n.jsx)(l.cwr, {
      children: (0, n.jsx)(s.y$y, {})
    })
  });
  if (N) {
    let t = v && !E ? {
      variant: "primary",
      text: C.intl.string(C.t["s+J8Dl"]),
      onClick: w,
      icon: l.tfB
    } : {
      variant: "primary",
      text: C.intl.string(C.t.cpT0Cq),
      onClick: D
    };
    return (0, n.jsxs)(l.dWK, {
      transitionState: i,
      onClose: a,
      children: [(0, n.jsx)(A.z, {
        sku: k,
        title: C.intl.string(C.t["5glWta"])
      }), (0, n.jsx)(l.cwr, {
        children: (0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          className: f.j,
          children: C.intl.formatToPlainString(C.t.W2znvX, {
            skuName: k.name,
            applicationName: T.name
          })
        })
      }), (0, n.jsx)(l.H7u, {
        actions: [t],
        actionsFullWidth: true
      })]
    })
  } {
    let t = {
      variant: "primary",
      text: C.intl.string(C.t["VDAhr+"]),
      onClick: O,
      icon: l.A5T,
      disabled: !L
    };
    return (0, n.jsx)(m.m, {
      sku: k,
      application: T,
      transitionState: i,
      onClose: a,
      hasAlreadyLinked: N,
      canStartAuthorization: L,
      primaryCTAButtonProps: t,
      bodyText: C.intl.formatToPlainString(C.t.Qmkje8, {
        applicationName: T.name
      }),
      title: C.intl.string(C.t.GPAtvf)
    })
  }
}