/** Chunk was on web.js **/
/** chunk id: 218319, original params: e,t,n (module,exports,re quire) **/
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
  Chunk905128 = require("./905128.js"),
  Chunk174604 = require("./174604.jsx"),
  Chunk302175 = require("./302175.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk355045 = require("./355045.jsx"),
  Chunk394769 = require("./394769.jsx"),
  Chunk555932 = require("./555932.jsx"),
  Chunk808189 = require("./808189.jsx"),
  Chunk998857 = require("./998857.jsx"),
  Chunk917699 = require("./917699.jsx"),
  Chunk155819 = require("./155819.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924699 = require("./924699.js");

function N(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: N,
    scrollToPowerupCards: P
  } = e, [R, w] = i.useState(true), D = i.useRef(false), x = (0, c.Z)(() => Date.now()), {
    analyticsLocations: L
  } = (0, u.ZP)(), j = i.useRef(null), M = i.useRef(null), k = i.useRef(null), U = i.useCallback(() => {
    null != k.current && null != M.current && M.current.scrollTo({
      to: k.current.offsetTop,
      animate: true
    })
  }, []), G = i.useCallback(() => {
    U()
  }, [U]), Z = i.useCallback(() => {
    null == N || N(), g.default.track(T.rMx.MODAL_DISMISSED, {
      type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - x
    })
  }, [N, t, L, x, n.id]), F = i.useCallback(e => {
    e && !D.current && (g.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), D.current = true)
  }, [t, L, n.id]);
  i.useEffect(() => {
    g.default.track(T.rMx.OPEN_MODAL, {
      type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, L]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && Z()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [Z]);
  let B = (0, f.BU)(n.id, "GuildBoostingMarketingRefresh"),
    V = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id)),
    H = (0, a.e7)([_.Z], () => _.Z.hasFetchedPowerupCatalog(n.id));
  return i.useEffect(() => {
    B && !V && (0, d.ce)(n.id)
  }, [n.id, B, V]), i.useEffect(() => {
    if (P && H) {
      let e = setTimeout(() => {
        U()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [P, U, H]), (0, r.jsxs)(r.Fragment, {
    children: [null != N && (0, r.jsx)("div", {
      className: A.closeIconWrapper,
      children: (0, r.jsx)(l.Z, {
        className: A.closeIcon,
        closeAction: Z,
        keybind: "ESC",
        variant: l.Z.Variants.BOLD
      })
    }), (0, r.jsxs)(s.yWw, {
      ref: M,
      className: A.scroller,
      children: [(0, r.jsx)("div", {
        className: A.header,
        children: (0, r.jsxs)("div", {
          className: A.headerContentWrapper,
          children: [(0, r.jsx)(m.Z, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: G
          }), (0, r.jsx)(s.Heading, {
            className: A.heading,
            color: "always-white",
            variant: "display-lg",
            children: C.intl.string(C.t.N4sqzL)
          }), (0, r.jsx)(E.Z, {
            guild: n,
            closeLayer: Z,
            onCtaVisibilityChange: w
          }), (0, r.jsx)(y.Z, {
            guild: n
          }), (0, r.jsx)(O.Z, {
            guild: n
          })]
        })
      }), (0, r.jsx)("div", {
        className: A.middleBodyContentWrapper,
        children: (0, r.jsx)(h.Z, {
          ref: k,
          guild: e.guild,
          onClose: Z
        })
      }), (0, r.jsx)("div", {
        className: A.lowerBody,
        children: (0, r.jsxs)("div", {
          className: A.lowerBodyContentWrapper,
          children: [(0, r.jsx)(I.Z, {
            className: A.perksTable,
            guild: n
          }), (0, r.jsx)(v.Z, {}), (0, r.jsx)(S.Z, {})]
        })
      }), (0, r.jsx)(o.$, {
        innerRef: j,
        onChange: F,
        children: (0, r.jsx)("div", {
          ref: j,
          className: A.persistentCtaSpacer
        })
      })]
    }), (0, r.jsx)(b.Z, {
      guild: n,
      isVisible: !R,
      closeLayer: Z
    })]
  })
}