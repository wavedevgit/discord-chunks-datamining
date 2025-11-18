/** Chunk was on 21021 **/
/** chunk id: 519193, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk535139 = require("./535139.js"),
  Chunk626135 = require("./626135.js"),
  Chunk877481 = require("./877481.js"),
  Chunk579201 = require("./579201.js"),
  Chunk683668 = require("./683668.js"),
  Chunk55121 = require("./55121.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk786081 = require("./786081.js");

function g(t) {
  let {
    transitionState: n,
    onClose: a,
    sku: g,
    application: j,
    analyticsLocations: L
  } = t, A = (0, m.a)(j), {
    fetched: v,
    hasAlreadyLinked: y,
    canStartAuthorization: I,
    startAuthorization: N
  } = (0, d.F)(j), b = (0, _.I)(j), {
    analyticsLocations: S
  } = (0, r.ZP)(null != L ? L : [], l.Z.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL), E = !v || null == A;
  (0, c.ZP)(() => {
    u.default.track(h.rMx.OPEN_MODAL, {
      location_stack: S,
      type: f.ng,
      sku_id: g.id,
      application_id: j.id
    })
  }), s.useEffect(() => {
    E || u.default.track(h.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
      location_stack: S,
      sku_id: g.id,
      application_id: j.id,
      is_gift: false,
      is_account_linked: y,
      can_start_authorization: I
    })
  }, [E, y, g.id, j.id, S, I]);
  let R = s.useCallback(() => {
      u.default.track(h.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
        location_stack: S,
        sku_id: g.id,
        application_id: j.id,
        is_gift: false
      }), N()
    }, [S, g.id, j.id, N]),
    O = s.useCallback(() => {
      u.default.track(h.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
        location_stack: S,
        sku_id: g.id,
        application_id: j.id,
        is_gift: false
      }), x.Z.launchGame(j.id)
    }, [S, g.id, j.id]),
    D = s.useCallback(() => {
      u.default.track(h.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
        location_stack: S,
        sku_id: g.id,
        application_id: j.id,
        is_gift: false,
        is_launchable: null != A && A,
        is_application_connected: b
      }), a()
    }, [S, g.id, j.id, A, b, a]);
  if (E) return (0, i.jsx)(e.IX, {
    transitionState: n,
    onClose: a,
    children: (0, i.jsx)(e.fef, {
      children: (0, i.jsx)(o.$jN, {})
    })
  });
  if (y) {
    let t = A && !b ? {
      variant: "primary",
      text: k.intl.string(k.t["s+J8Dl"]),
      onClick: O,
      icon: e.rgF
    } : {
      variant: "primary",
      text: k.intl.string(k.t.cpT0Cq),
      onClick: D
    };
    return (0, i.jsxs)(e.IX, {
      transitionState: n,
      onClose: a,
      children: [(0, i.jsx)(C.y, {
        sku: g,
        title: k.intl.string(k.t["5glWta"])
      }), (0, i.jsx)(e.fef, {
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: T.modalBodyText,
          children: k.intl.formatToPlainString(k.t.W2znvX, {
            skuName: g.name,
            applicationName: j.name
          })
        })
      }), (0, i.jsx)(e.Go$, {
        actions: [t],
        actionsFullWidth: true
      })]
    })
  } {
    let t = {
      variant: "primary",
      text: k.intl.string(k.t["VDAhr+"]),
      onClick: R,
      icon: e.uIJ,
      disabled: !I
    };
    return (0, i.jsx)(p.M, {
      sku: g,
      application: j,
      transitionState: n,
      onClose: a,
      hasAlreadyLinked: y,
      canStartAuthorization: I,
      primaryCTAButtonProps: t,
      bodyText: k.intl.formatToPlainString(k.t.Qmkje8, {
        applicationName: j.name
      }),
      title: k.intl.string(k.t.GPAtvf)
    })
  }
}