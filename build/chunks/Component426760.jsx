/** Chunk was on web.js **/
/** chunk id: 426760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk665171 = require("./665171.js"),
  Chunk488803 = require("./488803.js"),
  Chunk522055 = require("./522055.js"),
  Chunk645619 = require("./645619.js"),
  Chunk954571 = require("./954571.js"),
  Chunk917064 = require("./917064.jsx"),
  Chunk787001 = require("./787001.jsx"),
  Chunk232122 = require("./232122.jsx"),
  Chunk340195 = require("./340195.jsx"),
  Chunk244027 = require("./244027.jsx"),
  Chunk286188 = require("./286188.jsx"),
  Chunk278115 = require("./278115.jsx"),
  Chunk527113 = require("./527113.jsx"),
  Chunk250493 = require("./250493.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk200430 = require("./200430.js");

function C(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: C,
    scrollToPowerupCards: N
  } = e, [w, R] = i.useState(true), P = i.useRef(false), D = (0, l.A)(() => Date.now()), {
    analyticsLocations: L
  } = (0, c.Ay)(), x = i.useRef(null), M = i.useRef(null), j = i.useRef(null), k = i.useCallback(() => {
    null != j.current && null != M.current && M.current.scrollIntoViewNode({
      node: j.current,
      animate: true,
      shouldScrollToStart: true
    })
  }, []), U = i.useCallback(() => {
    k()
  }, [k]), G = i.useCallback(() => {
    null == C || C(), _.default.track(I.HAw.MODAL_DISMISSED, {
      type: I.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - D
    })
  }, [C, t, L, D, n.id]), V = i.useCallback(e => {
    e && !P.current && (_.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: I.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), P.current = true)
  }, [t, L, n.id]);
  i.useEffect(() => {
    _.default.track(I.HAw.OPEN_MODAL, {
      type: I.liQ.PREMIUM_GUILD_USER_MODAL,
      location_stack: L,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, L]), i.useEffect(() => {
    function e(e) {
      "Escape" === e.key && G()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [G]);
  let F = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
    B = (0, a.bG)([f.A], () => f.A.hasFetchedCatalog(n.id));
  i.useEffect(() => {
    F && !B && (0, u.z9)(n.id)
  }, [n.id, F, B]);
  let H = (0, a.bG)([p.A], () => p.A.hasFetchedPowerupCatalog(n.id));
  return i.useEffect(() => {
    if (N && H) {
      let e = setTimeout(() => {
        k()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [N, k, H]), (0, r.jsxs)(r.Fragment, {
    children: [null != C && (0, r.jsx)("div", {
      className: T.Yk,
      children: (0, r.jsx)(s.DUT, {
        className: T.b,
        onClick: G,
        "aria-label": S.intl.string(S.t.cpT0Cq),
        children: (0, r.jsx)(s.PGe, {
          size: "md",
          color: "currentColor"
        })
      })
    }), (0, r.jsxs)(s.GtU, {
      ref: M,
      className: T.XG,
      children: [(0, r.jsxs)("div", {
        className: T.wx,
        children: [(0, r.jsx)(E.A, {
          className: T.y2
        }), (0, r.jsxs)("div", {
          className: T.AZ,
          children: [(0, r.jsx)(b.A, {
            guildId: e.guild.id,
            onButtonClick: U
          }), (0, r.jsx)(m.A, {
            guild: n,
            closeLayer: G,
            onCtaVisibilityChange: R
          }), (0, r.jsx)(y.A, {
            guild: n
          })]
        })]
      }), (0, r.jsx)("div", {
        className: T.uE,
        children: (0, r.jsx)(O.A, {
          ref: j,
          guild: e.guild,
          onClose: G
        })
      }), (0, r.jsx)("div", {
        className: T.o6,
        children: (0, r.jsxs)("div", {
          className: T.y$,
          children: [(0, r.jsx)(v.A, {
            className: T.Q,
            guild: n
          }), (0, r.jsx)(h.A, {}), (0, r.jsx)(g.A, {})]
        })
      }), (0, r.jsx)(o.L, {
        innerRef: x,
        onChange: V,
        children: (0, r.jsx)("div", {
          ref: x,
          className: T.mR
        })
      })]
    }), (0, r.jsx)(A.A, {
      guild: n,
      isVisible: !w,
      closeLayer: G
    })]
  })
}