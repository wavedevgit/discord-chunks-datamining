/** Chunk was on web.js **/
/** chunk id: 443002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk755458 = require("./755458.js"),
  Chunk60482 = require("./60482.js"),
  Chunk174604 = require("./174604.jsx"),
  Chunk302175 = require("./302175.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk724884 = require("./724884.jsx"),
  Chunk355045 = require("./355045.jsx"),
  Chunk290799 = require("./290799.jsx"),
  Chunk394769 = require("./394769.jsx"),
  Chunk555932 = require("./555932.jsx"),
  Chunk808189 = require("./808189.jsx"),
  Chunk362948 = require("./362948.jsx"),
  Chunk383881 = require("./383881.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517872 = require("./517872.js");
let N = function(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: N
  } = e, [P, R] = i.useState(true), w = i.useRef(false), D = (0, c.Z)(() => Date.now()), {
    analyticsLocations: x
  } = (0, u.ZP)(), L = i.useRef(null), j = i.useRef(null), M = i.useRef(null), k = i.useCallback(() => {
    null != M.current && null != j.current && j.current.scrollTo({
      to: M.current.offsetTop,
      animate: true
    })
  }, []), U = i.useCallback(() => {
    null == N || N(), h.default.track(T.rMx.MODAL_DISMISSED, {
      type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: x,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - D
    })
  }, [N, t, x, D, n.id]), G = i.useCallback(e => {
    e && !w.current && (h.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: x,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), w.current = true)
  }, [t, x, n.id]);
  i.useEffect(() => {
    h.default.track(T.rMx.OPEN_MODAL, {
      type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: x,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, x]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && U()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [U]);
  let Z = (0, f.BU)(n.id, "GuildBoostingMarketing"),
    B = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id));
  return i.useEffect(() => {
    Z && !B && (0, d.ce)(n.id)
  }, [n.id, Z, B]), (0, r.jsxs)(r.Fragment, {
    children: [null != N && (0, r.jsx)("div", {
      className: C.closeIconWrapper,
      children: (0, r.jsx)(l.Z, {
        className: C.closeIcon,
        closeAction: U,
        keybind: "ESC",
        variant: l.Z.Variants.BOLD
      })
    }), (0, r.jsxs)(s.yWw, {
      ref: j,
      className: C.scroller,
      children: [(0, r.jsxs)("div", {
        className: C.header,
        children: [(0, r.jsxs)("div", {
          className: C.headerContentWrapper,
          children: [(0, r.jsx)(_.Z, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: k
          }), (0, r.jsx)(s.Heading, {
            className: C.heading,
            color: "always-white",
            variant: "display-lg",
            children: A.intl.string(A.t.N4sqzL)
          }), (0, r.jsx)(E.Z, {
            guild: n,
            closeLayer: U,
            onCtaVisibilityChange: R
          }), (0, r.jsx)(O.Z, {
            guild: n
          }), (0, r.jsx)(v.Z, {
            guild: n
          })]
        }), (0, r.jsx)(I.O, {})]
      }), (0, r.jsx)("div", {
        className: C.middleBodyContentWrapper,
        children: (0, r.jsx)(m.Z, {
          ref: M,
          guild: e.guild,
          onClose: U
        })
      }), (0, r.jsxs)("div", {
        className: C.lowerBody,
        children: [(0, r.jsxs)("div", {
          className: C.lowerBodyContentWrapper,
          children: [(0, r.jsx)(S.Z, {
            className: C.tierComparisonTable,
            guild: n
          }), (0, r.jsx)(g.Z, {}), (0, r.jsx)(b.Z, {})]
        }), (0, r.jsx)(I.A, {}), (0, r.jsx)("div", {
          className: C.lowerBodyBackgroundImage
        })]
      }), (0, r.jsx)(o.$, {
        innerRef: L,
        onChange: G,
        children: (0, r.jsx)("div", {
          ref: L,
          className: C.persistentCtaSpacer
        })
      })]
    }), (0, r.jsx)(y.Z, {
      guild: n,
      isVisible: !P,
      closeLayer: U
    })]
  })
}