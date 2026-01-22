/** Chunk was on 80307 **/
/** chunk id: 472734, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => C
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

function C(t) {
  let {
    transitionState: i,
    onClose: a,
    sku: C,
    application: k,
    analyticsLocations: T
  } = t, S = (0, p.j)(k), {
    fetched: v,
    hasAlreadyLinked: N,
    canStartAuthorization: L,
    startAuthorization: E
  } = (0, d.RD)(k), g = (0, x.J)(k), {
    analyticsLocations: I
  } = (0, o.Ay)(null != T ? T : [], c.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL), y = !v || null == S, O = e.useRef({
    analyticsLocations: I,
    skuId: C.id,
    applicationId: k.id,
    isLaunchable: S,
    isApplicationConnected: g,
    canStartAuthorization: L
  });
  e.useEffect(() => {
    O.current.isLaunchable = S, O.current.isApplicationConnected = g, O.current.canStartAuthorization = L
  }, [S, g, L]), (0, s.Ay)(() => {
    u.default.track(j.HAw.OPEN_MODAL, {
      location_stack: I,
      type: f.e2,
      sku_id: C.id,
      application_id: k.id
    })
  }), e.useEffect(() => {
    if (y) return;
    let {
      analyticsLocations: t,
      skuId: i,
      applicationId: a,
      canStartAuthorization: n
    } = O.current;
    u.default.track(j.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: t,
      sku_id: i,
      application_id: a,
      is_gift: false,
      is_account_linked: N,
      can_start_authorization: n
    })
  }, [y, N]);
  let R = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: i,
        applicationId: a
      } = O.current;
      u.default.track(j.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
        location_stack: t,
        sku_id: i,
        application_id: a,
        is_gift: false
      }), E({
        analyticsLocations: t
      })
    }, [E]),
    w = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: i
      } = O.current;
      u.default.track(j.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: t,
        sku_id: i,
        application_id: k.id,
        is_gift: false
      }), _.A.launchGame(k.id)
    }, [k.id]),
    D = e.useCallback(() => {
      let {
        analyticsLocations: t,
        skuId: i,
        applicationId: n,
        isLaunchable: e,
        isApplicationConnected: l
      } = O.current;
      u.default.track(j.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: t,
        sku_id: i,
        application_id: n,
        is_gift: false,
        is_launchable: null != e && e,
        is_application_connected: l
      }), a()
    }, [a]);
  if (y) return (0, n.jsx)(l.dWK, {
    transitionState: i,
    onClose: a,
    children: (0, n.jsx)(l.cwr, {
      children: (0, n.jsx)(r.y$y, {})
    })
  });
  if (N) {
    let t = S && !g ? {
      variant: "primary",
      text: b.intl.string(b.t["s+J8Dl"]),
      onClick: w,
      icon: l.tfB
    } : {
      variant: "primary",
      text: b.intl.string(b.t.cpT0Cq),
      onClick: D
    };
    return (0, n.jsxs)(l.dWK, {
      transitionState: i,
      onClose: a,
      children: [(0, n.jsx)(A.z, {
        sku: C,
        title: b.intl.string(b.t["5glWta"])
      }), (0, n.jsx)(l.cwr, {
        children: (0, n.jsx)(r.Text, {
          variant: "text-md/normal",
          className: h.j,
          children: b.intl.formatToPlainString(b.t.W2znvX, {
            skuName: C.name,
            applicationName: k.name
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
      text: b.intl.string(b.t["VDAhr+"]),
      onClick: R,
      icon: l.A5T,
      disabled: !L
    };
    return (0, n.jsx)(m.m, {
      sku: C,
      application: k,
      transitionState: i,
      onClose: a,
      hasAlreadyLinked: N,
      canStartAuthorization: L,
      primaryCTAButtonProps: t,
      bodyText: b.intl.formatToPlainString(b.t.Qmkje8, {
        applicationName: k.name
      }),
      title: b.intl.string(b.t.GPAtvf)
    })
  }
}