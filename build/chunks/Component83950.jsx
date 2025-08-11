/** Chunk was on 77370 **/
/** chunk id: 83950, original params: a,t,e (module,exports,require) **/
require.d(exports, {
  default: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk300284 = require("./300284.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk777134 = require("./777134.js"),
  Chunk749423 = require("./749423.js");

function k() {
  let a = (0, Chunk768581.NZ)({
      avatarDecoration: {
        asset: "a_49c479e15533fb4c02eb320c9c137433"
      },
      canAnimate: false,
      size: (0, Chunk1585.y9)(Chunk481060.EFr.SIZE_120)
    }),
    t = (0, Chunk768581.NZ)({
      avatarDecoration: {
        asset: "a_c3cffc19e9784f7d0b005eecdf1b566e"
      },
      canAnimate: false,
      size: (0, Chunk1585.y9)(Chunk481060.EFr.SIZE_120)
    }),
    e = (0, Chunk768581.NZ)({
      avatarDecoration: {
        asset: "a_d72066b8cecbadd9fc951913ebcc384f"
      },
      canAnimate: false,
      size: (0, Chunk1585.y9)(Chunk481060.EFr.SIZE_120)
    });
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk777134.avatarBackground,
    children: [(0, Chunk255367.jsx)(Chunk481060.qEK, {
      size: Chunk481060.EFr.SIZE_120,
      src: Chunk749423,
      avatarDecoration: module,
      className: Chunk777134.leftAvatar,
      "aria-hidden": true
    }), (0, Chunk255367.jsx)(Chunk481060.qEK, {
      size: Chunk481060.EFr.SIZE_120,
      src: Chunk749423,
      avatarDecoration: exports,
      className: Chunk777134.centerAvatar,
      "aria-hidden": true
    }), (0, Chunk255367.jsx)(Chunk481060.qEK, {
      size: Chunk481060.EFr.SIZE_120,
      src: Chunk749423,
      avatarDecoration: require,
      className: Chunk777134.rightAvatar,
      "aria-hidden": true
    })]
  })
}

function A(a) {
  let {
    transitionState: t,
    onClose: e,
    skuId: f
  } = a, L = (0, E.Dt)(), {
    analyticsLocations: A
  } = (0, _.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL), I = (0, x.Z)({
    analyticsLocations: A
  }), C = n.useRef(null);
  return n.useEffect(() => ((0, o.Mn)({
    avatarDecoration: null
  }), () => {
    v.default.track(p.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
      reason: C.current,
      sku_id: f
    })
  }), [f]), (0, d.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
    properties: {
      location_stack: A,
      sku_id: f
    }
  }), (0, r.jsxs)(c.Y0X, {
    transitionState: t,
    "aria-labelledby": L,
    className: b.container,
    parentComponent: "CollectiblesExpiryModal",
    children: [(0, r.jsx)(k, {}), (0, r.jsx)(c.olH, {
      onClick: () => {
        C.current = "tap_close_button", e()
      },
      className: b.closeButton
    }), (0, r.jsxs)(c.hzk, {
      className: b.content,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        className: b.title,
        children: h.intl.string(h.t.xz81o6)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: b.body,
        children: h.intl.string(h.t.Vrbnnp)
      })]
    }), (0, r.jsxs)(c.mzw, {
      className: b.footer,
      children: [(0, r.jsx)(c.zxk, {
        variant: "secondary",
        text: h.intl.string(h.t["x8T+k5"]),
        onClick: () => {
          C.current = "change_avatar_decoration", e(), (0, i.xf)(), I(), (0, u.ps)({
            analyticsLocations: A
          })
        }
      }), (0, r.jsx)(c.zxk, {
        variant: "primary",
        text: h.intl.string(h.t.fmqMER),
        onClick: () => {
          C.current = "go_to_shop", e(), (0, m.mK)({
            analyticsLocations: A,
            analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
            openInLayer: false
          })
        }
      })]
    })]
  })
}