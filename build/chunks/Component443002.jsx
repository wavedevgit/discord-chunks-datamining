/** Chunk was on web.js **/
/** chunk id: 443002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk906732 = require("./906732.jsx"),
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
let T = function(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: T
  } = e, [S, A] = i.useState(true), C = i.useRef(false), N = (0, l.Z)(() => Date.now()), {
    analyticsLocations: R
  } = (0, c.ZP)(), P = i.useRef(null), w = i.useRef(null), D = i.useRef(null), x = i.useCallback(() => {
    null != D.current && null != w.current && w.current.scrollTo({
      to: D.current.offsetTop,
      animate: true
    })
  }, []), L = i.useCallback(() => {
    null == T || T(), f.default.track(O.rMx.MODAL_DISMISSED, {
      type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: R,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - N
    })
  }, [T, t, R, N, n.id]), M = i.useCallback(e => {
    e && !C.current && (f.default.track(O.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: R,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), C.current = true)
  }, [t, R, n.id]);
  return i.useEffect(() => {
    f.default.track(O.rMx.OPEN_MODAL, {
      type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: R,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, R]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && L()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [L]), (0, r.jsxs)(r.Fragment, {
    children: [null != T && (0, r.jsx)("div", {
      className: I.closeIconWrapper,
      children: (0, r.jsx)(s.Z, {
        className: I.closeIcon,
        closeAction: L,
        keybind: "ESC",
        variant: s.Z.Variants.BOLD
      })
    }), (0, r.jsxs)(o.yWw, {
      ref: w,
      className: I.scroller,
      children: [(0, r.jsxs)("div", {
        className: I.header,
        children: [(0, r.jsxs)("div", {
          className: I.headerContentWrapper,
          children: [(0, r.jsx)(u.Z, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: x
          }), (0, r.jsx)(o.Heading, {
            className: I.heading,
            color: "always-white",
            variant: "display-lg",
            children: v.intl.string(v.t.N4sqzL)
          }), (0, r.jsx)(p.Z, {
            guild: n,
            closeLayer: L,
            onCtaVisibilityChange: A
          }), (0, r.jsx)(g.Z, {
            guild: n
          }), (0, r.jsx)(E.Z, {
            guild: n
          })]
        }), (0, r.jsx)(y.O, {})]
      }), (0, r.jsx)("div", {
        className: I.middleBodyContentWrapper,
        children: (0, r.jsx)(d.Z, {
          ref: D,
          guild: e.guild,
          onClose: L
        })
      }), (0, r.jsxs)("div", {
        className: I.lowerBody,
        children: [(0, r.jsxs)("div", {
          className: I.lowerBodyContentWrapper,
          children: [(0, r.jsx)(b.Z, {
            className: I.tierComparisonTable,
            guild: n
          }), (0, r.jsx)(_.Z, {}), (0, r.jsx)(h.Z, {})]
        }), (0, r.jsx)(y.A, {}), (0, r.jsx)("div", {
          className: I.lowerBodyBackgroundImage
        })]
      }), (0, r.jsx)(a.$, {
        innerRef: P,
        onChange: M,
        children: (0, r.jsx)("div", {
          ref: P,
          className: I.persistentCtaSpacer
        })
      })]
    }), (0, r.jsx)(m.Z, {
      guild: n,
      isVisible: !S,
      closeLayer: L
    })]
  })
}