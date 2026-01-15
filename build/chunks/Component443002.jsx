/** Chunk was on web.js **/
/** chunk id: 443002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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
  Chunk905128 = require("./905128.js"),
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
  Chunk990533 = require("./990533.js");
let P = function(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: P,
    scrollToPowerupCards: w
  } = e, [R, D] = i.useState(true), x = i.useRef(false), L = (0, c.Z)(() => Date.now()), {
    analyticsLocations: j
  } = (0, u.ZP)(), M = i.useRef(null), k = i.useRef(null), U = i.useRef(null), G = i.useCallback(() => {
    null != U.current && null != k.current && k.current.scrollTo({
      to: U.current.offsetTop,
      animate: true
    })
  }, []), Z = i.useCallback(() => {
    G()
  }, [G]), F = i.useCallback(() => {
    null == P || P(), g.default.track(C.rMx.MODAL_DISMISSED, {
      type: C.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: j,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - L
    })
  }, [P, t, j, L, n.id]), B = i.useCallback(e => {
    e && !x.current && (g.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: C.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: j,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), x.current = true)
  }, [t, j, n.id]);
  i.useEffect(() => {
    g.default.track(C.rMx.OPEN_MODAL, {
      type: C.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: j,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, j]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && F()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [F]);
  let V = (0, f.BU)(n.id, "GuildBoostingMarketing"),
    H = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id)),
    Y = (0, a.e7)([_.Z], () => _.Z.hasFetchedPowerupCatalog(n.id));
  return i.useEffect(() => {
    V && !H && (0, d.ce)(n.id)
  }, [n.id, V, H]), i.useEffect(() => {
    if (w && Y) {
      let e = setTimeout(() => {
        G()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [w, G, Y]), (0, r.jsxs)(r.Fragment, {
    children: [null != P && (0, r.jsx)("div", {
      className: N.closeIconWrapper,
      children: (0, r.jsx)(l.Z, {
        className: N.closeIcon,
        closeAction: F,
        keybind: "ESC",
        variant: l.Z.Variants.BOLD
      })
    }), (0, r.jsxs)(s.yWw, {
      ref: k,
      className: N.scroller,
      children: [(0, r.jsxs)("div", {
        className: N.header,
        children: [(0, r.jsxs)("div", {
          className: N.headerContentWrapper,
          children: [(0, r.jsx)(h.Z, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: Z
          }), (0, r.jsx)(s.Heading, {
            className: N.heading,
            color: "always-white",
            variant: "display-lg",
            children: A.intl.string(A.t.N4sqzL)
          }), (0, r.jsx)(b.Z, {
            guild: n,
            closeLayer: F,
            onCtaVisibilityChange: D
          }), (0, r.jsx)(v.Z, {
            guild: n
          }), (0, r.jsx)(S.Z, {
            guild: n
          })]
        }), (0, r.jsx)(T.O, {})]
      }), (0, r.jsx)("div", {
        className: N.middleBodyContentWrapper,
        children: (0, r.jsx)(m.Z, {
          ref: U,
          guild: e.guild,
          onClose: F
        })
      }), (0, r.jsxs)("div", {
        className: N.lowerBody,
        children: [(0, r.jsxs)("div", {
          className: N.lowerBodyContentWrapper,
          children: [(0, r.jsx)(I.Z, {
            className: N.tierComparisonTable,
            guild: n
          }), (0, r.jsx)(E.Z, {}), (0, r.jsx)(y.Z, {})]
        }), (0, r.jsx)(T.A, {}), (0, r.jsx)("div", {
          className: N.lowerBodyBackgroundImage
        })]
      }), (0, r.jsx)(o.$, {
        innerRef: M,
        onChange: B,
        children: (0, r.jsx)("div", {
          ref: M,
          className: N.persistentCtaSpacer
        })
      })]
    }), (0, r.jsx)(O.Z, {
      guild: n,
      isVisible: !R,
      closeLayer: F
    })]
  })
}