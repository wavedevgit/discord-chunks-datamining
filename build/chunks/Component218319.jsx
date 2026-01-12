/** Chunk was on web.js **/
/** chunk id: 218319, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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

function A(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: A
  } = e, [N, P] = i.useState(true), R = i.useRef(false), w = (0, c.Z)(() => Date.now()), {
    analyticsLocations: D
  } = (0, u.ZP)(), x = i.useRef(null), L = i.useRef(null), j = i.useRef(null), M = i.useCallback(() => {
    null != j.current && null != L.current && L.current.scrollTo({
      to: j.current.offsetTop,
      animate: true
    })
  }, []), k = i.useCallback(() => {
    null == A || A(), h.default.track(I.rMx.MODAL_DISMISSED, {
      type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: D,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - w
    })
  }, [A, t, D, w, n.id]), U = i.useCallback(e => {
    e && !R.current && (h.default.track(I.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: D,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), R.current = true)
  }, [t, D, n.id]);
  i.useEffect(() => {
    h.default.track(I.rMx.OPEN_MODAL, {
      type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: D,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, D]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && k()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [k]);
  let G = (0, f.BU)(n.id, "GuildBoostingMarketingRefresh"),
    Z = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id));
  return i.useEffect(() => {
    G && !Z && (0, d.ce)(n.id)
  }, [n.id, G, Z]), (0, r.jsxs)(r.Fragment, {
    children: [null != A && (0, r.jsx)("div", {
      className: C.closeIconWrapper,
      children: (0, r.jsx)(l.Z, {
        className: C.closeIcon,
        closeAction: k,
        keybind: "ESC",
        variant: l.Z.Variants.BOLD
      })
    }), (0, r.jsxs)(s.yWw, {
      ref: L,
      className: C.scroller,
      children: [(0, r.jsx)("div", {
        className: C.header,
        children: (0, r.jsxs)("div", {
          className: C.headerContentWrapper,
          children: [(0, r.jsx)(_.Z, {
            guild: e.guild,
            themeResponsive: false,
            onButtonClick: M
          }), (0, r.jsx)(s.Heading, {
            className: C.heading,
            color: "always-white",
            variant: "display-lg",
            children: T.intl.string(T.t.N4sqzL)
          }), (0, r.jsx)(g.Z, {
            guild: n,
            closeLayer: k,
            onCtaVisibilityChange: P
          }), (0, r.jsx)(b.Z, {
            guild: n
          }), (0, r.jsx)(y.Z, {
            guild: n
          })]
        })
      }), (0, r.jsx)("div", {
        className: C.middleBodyContentWrapper,
        children: (0, r.jsx)(m.Z, {
          ref: j,
          guild: e.guild,
          onClose: k
        })
      }), (0, r.jsx)("div", {
        className: C.lowerBody,
        children: (0, r.jsxs)("div", {
          className: C.lowerBodyContentWrapper,
          children: [(0, r.jsx)(S.Z, {
            className: C.perksTable,
            guild: n
          }), (0, r.jsx)(O.Z, {}), (0, r.jsx)(v.Z, {})]
        })
      }), (0, r.jsx)(o.$, {
        innerRef: x,
        onChange: U,
        children: (0, r.jsx)("div", {
          ref: x,
          className: C.persistentCtaSpacer
        })
      })]
    }), (0, r.jsx)(E.Z, {
      guild: n,
      isVisible: !N,
      closeLayer: k
    })]
  })
}