/** Chunk was on 84249 **/
/** chunk id: 213713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk876215 = require("./876215.js"),
  Chunk126313 = require("./126313.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk246992 = require("./246992.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk550532 = require("./550532.js"),
  Chunk71585 = require("./71585.js"),
  Chunk146282 = require("./146282.js"),
  Chunk780106 = require("./780106.js"),
  Chunk650613 = require("./650613.jsx"),
  Chunk789086 = require("./789086.jsx"),
  Chunk206583 = require("./206583.js"),
  Chunk738299 = require("./738299.js"),
  Chunk663618 = require("./663618.js");
let R = [{
  key: "type",
  cellClassName: l()(Chunk738299.cell, Chunk738299.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(h.Text, {
      variant: "text-md/semibold",
      children: c.s[t]
    })
  }
}, {
  key: "count",
  cellClassName: l()(Chunk738299.cell, Chunk738299.cellCount),
  render(e) {
    let {
      entries: t
    } = e;
    return (0, a.jsx)("div", {
      children: (0, a.jsx)(h.Text, {
        variant: "text-md/normal",
        children: t.length
      })
    })
  }
}, {
  key: "only?",
  cellClassName: Chunk738299.cell,
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(A, {
      type: t
    })
  }
}];

function A(e) {
  var t, n;
  let {
    type: r
  } = e, i = (0, u.e7)([T.Z], () => T.Z.getFilters()), l = null != (n = null == i || null == (t = i.types) ? true : t.has(r)) && n;
  return (0, a.jsx)(h.rsf, {
    checked: l,
    onChange: function() {
      l ? f.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: true
      }) : f.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([r])
        }
      })
    }
  })
}

function Z() {
  var e, t;
  let n = (0, u.e7)([T.Z], () => T.Z.getFeed(w.YN.GLOBAL_FEED)),
    i = (0, u.e7)([T.Z], () => T.Z.getDebugImpressionCappingDisabled()),
    l = (0, u.e7)([E.Z], () => E.Z.getDebugFastImpressionCappingEnabled()),
    s = function(e) {
      let t = o().groupBy(e, e => e.content_type);
      return Object.keys(t).map(e => {
        let n = t[e];
        return {
          key: "".concat(e),
          type: n[0].content_type,
          entries: n
        }
      })
    }(null == n || null == (e = n.entries) ? true : e.map(e => e.content)),
    c = (0, u.e7)([T.Z], () => {
      var e;
      return (null == (e = T.Z.getFeedState(w.YN.GLOBAL_FEED)) ? true : e.loading) === true
    }),
    [A, Z] = r.useState(""),
    L = (0, u.e7)([C.Z, x.Z], () => {
      var e, t, n;
      return parseInt(A) > 0 ? A : null != (n = null == (e = C.Z.getGameByName(A)) ? true : e.id) ? n : null == (t = x.Z.getApplicationByName(A)) ? true : t.id
    }, [A]),
    M = (0, y.Z)({
      applicationId: L,
      location: "DevToolsContentInventory",
      source: j.m1.DevTools
    }),
    U = Object.entries(null != (t = m.K.get("GameProfileModal")) ? t : {}).filter(e => {
      let [t, n] = e;
      return n
    }).map(e => {
      let [t] = e;
      return t
    }),
    B = (0, b.Z)(U).filter(_.lm),
    F = (0, u.e7)([S.Z], () => S.Z.getFakeGameToShow());
  return (0, a.jsx)("div", {
    className: k.panel,
    children: (0, a.jsxs)(h.zJl, {
      className: I.content,
      children: [(0, a.jsxs)(h.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(h.Text, {
          variant: "text-md/semibold",
          children: "Inventory"
        }), s.length > 0 && (0, a.jsx)(v.Z, {
          columns: R,
          data: s
        }), (0, a.jsx)(P.Z, {}), (0, a.jsx)(h.Button, {
          variant: "primary",
          text: "Refresh Now",
          fullWidth: true,
          onClick: function() {
            f.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: w.YN.GLOBAL_FEED,
              feature: d.L.INBOX
            })
          },
          loading: c
        })]
      }), (0, a.jsxs)(h.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(h.Text, {
          variant: "text-md/semibold",
          children: "Impression Capping"
        }), (0, a.jsx)(h.Button, {
          variant: "primary",
          text: "Clear Impressions",
          fullWidth: true,
          onClick: function() {
            f.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          }
        }), (0, a.jsx)(h.Button, {
          variant: "primary",
          text: "Log Impressions",
          fullWidth: true,
          onClick: function() {
            f.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          }
        }), (0, a.jsx)(h.Button, {
          variant: "primary",
          text: i ? "Enable Impression Capping" : "Disable Impression Capping",
          fullWidth: true,
          onClick: function() {
            f.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          }
        }), (0, a.jsx)(h.Button, {
          variant: "primary",
          text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
          fullWidth: true,
          onClick: function() {
            f.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          }
        })]
      }), false, (0, a.jsx)(N.Z, {}), (0, a.jsxs)(h.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(h.Text, {
          variant: "text-md/semibold",
          children: "Game Profile"
        }), (0, a.jsx)(h.oil, {
          placeholder: "App ID or full name",
          onChange: e => (0 === e.length || e.length >= 18) && Z(e),
          onKeyDown: e => {
            "Enter" === e.key && (A === e.currentTarget.value ? null == M || M(e) : Z(e.currentTarget.value))
          },
          error: A.length > 0 && null == M ? "No game profile for ".concat(null != L ? L : A + " - try by id", ".") : true,
          helperText: null != M ? "Game profile found" : true
        }), (0, a.jsx)("ul", {
          children: B.map(e => (0, a.jsx)("li", {
            children: (0, a.jsx)(D, {
              application: e
            })
          }, "follow-game-".concat(e.id)))
        })]
      }), (0, a.jsxs)(h.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(h.Text, {
          variant: "text-md/semibold",
          children: "Activity Sharing"
        }), (0, a.jsx)(h.Text, {
          variant: "text-md/normal",
          children: "Force show game:"
        }), (0, a.jsx)(p.B6, {
          options: O.h.map(e => ({
            label: e,
            value: e
          })),
          isSelected: e => e === F,
          select: function(e) {
            f.Z.dispatch({
              type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
              gameToShow: e
            })
          },
          serialize: e => e,
          popoutLayerContext: g.O$
        })]
      })]
    })
  })
}
let D = e => {
  let {
    application: t
  } = e, n = (0, y.Z)({
    applicationId: t.id,
    location: "DevToolsContentInventory",
    source: j.m1.DevTools
  });
  return (0, a.jsx)(h.P3F, {
    onClick: n,
    children: (0, a.jsx)(h.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t.name
    })
  })
}