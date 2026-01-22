/** Chunk was on web.js **/
/** chunk id: 426760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684136 = require("./684136.jsx"),
  Chunk444927 = require("./444927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk665171 = require("./665171.js"),
  Chunk488803 = require("./488803.js"),
  Chunk522055 = require("./522055.js"),
  Chunk645619 = require("./645619.js"),
  Chunk427854 = require("./427854.jsx"),
  Chunk796780 = require("./796780.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk247425 = require("./247425.jsx"),
  Chunk965826 = require("./965826.jsx"),
  Chunk141614 = require("./141614.jsx"),
  Chunk217639 = require("./217639.jsx"),
  Chunk917064 = require("./917064.jsx"),
  Chunk232122 = require("./232122.jsx"),
  Chunk527113 = require("./527113.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk200430 = require("./200430.js");

function N(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: N,
    scrollToPowerupCards: R
  } = e, [w, P] = i.useState(true), D = i.useRef(false), x = (0, c.A)(() => Date.now()), {
    analyticsLocations: L
  } = (0, u.Ay)(), j = i.useRef(null), M = i.useRef(null), k = i.useRef(null), U = i.useCallback(() => {
    null != k.current && null != M.current && M.current.scrollTo({
      to: k.current.offsetTop,
      animate: true
    })
  }, []), G = i.useCallback(() => {
    U()
  }, [U]), V = i.useCallback(() => {
    null == N || N(), g.default.track(I.HAw.MODAL_DISMISSED, {
      type: I.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - x
    })
  }, [N, t, L, x, n.id]), F = i.useCallback(e => {
    e && !D.current && (g.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: I.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), D.current = true)
  }, [t, L, n.id]);
  i.useEffect(() => {
    g.default.track(I.HAw.OPEN_MODAL, {
      type: I.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, L]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && V()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [V]);
  let B = (0, f.C$)(n.id, "GuildBoostingMarketingRefresh"),
    H = (0, a.bG)([p.A], () => p.A.hasFetchedCatalog(n.id)),
    Y = (0, a.bG)([_.A], () => _.A.hasFetchedPowerupCatalog(n.id));
  return i.useEffect(() => {
    B && !H && (0, d.z9)(n.id)
  }, [n.id, B, H]), i.useEffect(() => {
    if (R && Y) {
      let e = setTimeout(() => {
        U()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [R, U, Y]), (0, r.jsxs)(r.Fragment, {
    children: [null != N && (0, r.jsx)("div", {
      className: C.bn,
      children: (0, r.jsx)(l.A, {
        className: C.ut,
        closeAction: V,
        keybind: "ESC",
        variant: l.A.Variants.BOLD
      })
    }), (0, r.jsxs)(o.GtU, {
      ref: M,
      className: C.XG,
      children: [(0, r.jsx)("div", {
        className: C.wx,
        children: (0, r.jsxs)("div", {
          className: C.AZ,
          children: [(0, r.jsx)(h.A, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: G
          }), (0, r.jsx)(o.Heading, {
            className: C.R_,
            color: "always-white",
            variant: "display-lg",
            children: T.intl.string(T.t.N4sqzL)
          }), (0, r.jsx)(E.A, {
            guild: n,
            closeLayer: V,
            onCtaVisibilityChange: P
          }), (0, r.jsx)(y.A, {
            guild: n
          }), (0, r.jsx)(O.A, {
            guild: n
          })]
        })
      }), (0, r.jsx)("div", {
        className: C.uE,
        children: (0, r.jsx)(m.A, {
          ref: k,
          guild: e.guild,
          onClose: V
        })
      }), (0, r.jsx)("div", {
        className: C.o6,
        children: (0, r.jsxs)("div", {
          className: C.y$,
          children: [(0, r.jsx)(S.A, {
            className: C.Q,
            guild: n
          }), (0, r.jsx)(A.A, {}), (0, r.jsx)(v.A, {})]
        })
      }), (0, r.jsx)(s.L, {
        innerRef: j,
        onChange: F,
        children: (0, r.jsx)("div", {
          ref: j,
          className: C.mR
        })
      })]
    }), (0, r.jsx)(b.A, {
      guild: n,
      isVisible: !w,
      closeLayer: V
    })]
  })
}