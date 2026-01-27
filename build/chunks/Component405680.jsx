/** Chunk was on web.js **/
/** chunk id: 405680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
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
  Chunk449280 = require("./449280.jsx"),
  Chunk247425 = require("./247425.jsx"),
  Chunk406245 = require("./406245.jsx"),
  Chunk965826 = require("./965826.jsx"),
  Chunk141614 = require("./141614.jsx"),
  Chunk217639 = require("./217639.jsx"),
  Chunk836275 = require("./836275.jsx"),
  Chunk694128 = require("./694128.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk445698 = require("./445698.js");
let w = function(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: w,
    scrollToPowerupCards: R
  } = e, [P, D] = i.useState(true), L = i.useRef(false), x = (0, c.A)(() => Date.now()), {
    analyticsLocations: M
  } = (0, u.Ay)(), j = i.useRef(null), k = i.useRef(null), U = i.useRef(null), G = i.useCallback(() => {
    null != U.current && null != k.current && k.current.scrollTo({
      to: U.current.offsetTop,
      animate: true
    })
  }, []), F = i.useCallback(() => {
    G()
  }, [G]), V = i.useCallback(() => {
    null == w || w(), g.default.track(T.HAw.MODAL_DISMISSED, {
      type: T.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: M,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - x
    })
  }, [w, t, M, x, n.id]), B = i.useCallback(e => {
    e && !L.current && (g.default.track(T.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: T.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: M,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), L.current = true)
  }, [t, M, n.id]);
  i.useEffect(() => {
    g.default.track(T.HAw.OPEN_MODAL, {
      type: T.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: M,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, M]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && V()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [V]);
  let H = (0, f.C$)(n.id, "GuildBoostingMarketing"),
    Y = (0, a.bG)([p.A], () => p.A.hasFetchedCatalog(n.id)),
    W = (0, a.bG)([_.A], () => _.A.hasFetchedPowerupCatalog(n.id));
  return i.useEffect(() => {
    H && !Y && (0, d.z9)(n.id)
  }, [n.id, H, Y]), i.useEffect(() => {
    if (R && W) {
      let e = setTimeout(() => {
        G()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [R, G, W]), (0, r.jsxs)(r.Fragment, {
    children: [null != w && (0, r.jsx)("div", {
      className: N.bn,
      children: (0, r.jsx)(l.A, {
        className: N.ut,
        closeAction: V,
        keybind: "ESC",
        variant: l.A.Variants.BOLD
      })
    }), (0, r.jsxs)(s.GtU, {
      ref: k,
      className: N.XG,
      children: [(0, r.jsxs)("div", {
        className: N.wx,
        children: [(0, r.jsxs)("div", {
          className: N.AZ,
          children: [(0, r.jsx)(h.A, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: F
          }), (0, r.jsx)(s.Heading, {
            className: N.R_,
            color: "always-white",
            variant: "display-lg",
            children: C.intl.string(C.t.N4sqzL)
          }), (0, r.jsx)(y.A, {
            guild: n,
            closeLayer: V,
            onCtaVisibilityChange: D
          }), (0, r.jsx)(v.A, {
            guild: n
          }), (0, r.jsx)(A.A, {
            guild: n
          })]
        }), (0, r.jsx)(S.$, {})]
      }), (0, r.jsx)("div", {
        className: N.uE,
        children: (0, r.jsx)(m.A, {
          ref: U,
          guild: e.guild,
          onClose: V
        })
      }), (0, r.jsxs)("div", {
        className: N.o6,
        children: [(0, r.jsxs)("div", {
          className: N.y$,
          children: [(0, r.jsx)(I.A, {
            className: N.e4,
            guild: n
          }), (0, r.jsx)(E.A, {}), (0, r.jsx)(b.A, {})]
        }), (0, r.jsx)(S.S, {}), (0, r.jsx)("div", {
          className: N.LY
        })]
      }), (0, r.jsx)(o.L, {
        innerRef: j,
        onChange: B,
        children: (0, r.jsx)("div", {
          ref: j,
          className: N.mR
        })
      })]
    }), (0, r.jsx)(O.A, {
      guild: n,
      isVisible: !P,
      closeLayer: V
    })]
  })
}