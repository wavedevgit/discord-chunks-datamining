/** Chunk was on 29725 **/
/** chunk id: 213713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  cellClassName: i()(Chunk738299.cell, Chunk738299.cellType),
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
  cellClassName: i()(Chunk738299.cell, Chunk738299.cellCount),
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
  } = e, l = (0, u.e7)([T.Z], () => T.Z.getFilters()), i = null != (n = null == l || null == (t = l.types) ? true : t.has(r)) && n;
  return (0, a.jsx)(h.rsf, {
    checked: i,
    onChange: function() {
      i ? f.Z.dispatch({
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
  let n = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getFeed(Chunk206583.YN.GLOBAL_FEED)),
    l = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getDebugImpressionCappingDisabled()),
    i = (0, Chunk442837.e7)([Chunk71585.Z], () => Chunk71585.Z.getDebugFastImpressionCappingEnabled()),
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
    }(null == require || null == (e = require.entries) ? true : module.map(e => e.content)),
    c = (0, Chunk442837.e7)([Chunk146282.Z], () => {
      var e;
      return (null == (e = Chunk146282.Z.getFeedState(Chunk206583.YN.GLOBAL_FEED)) ? true : module.loading) === true
    }),
    [A, Z] = Chunk473749.useState(""),
    L = (0, Chunk442837.e7)([Chunk77498.Z, Chunk812206.Z], () => {
      var e, t, n;
      return parseInt(A) > 0 ? A : null != (n = null == (e = Chunk77498.Z.getGameByName(A)) ? true : module.id) ? require : null == (t = Chunk812206.Z.getApplicationByName(A)) ? true : exports.id
    }, [A]),
    M = (0, Chunk168524.Z)({
      applicationId: L,
      location: "DevToolsContentInventory",
      source: Chunk810568.m1.DevTools
    }),
    U = Object.entries(null != (t = Chunk433517.K.get("GameProfileModal")) ? exports : {}).filter(e => {
      let [t, n] = e;
      return n
    }).map(e => {
      let [t] = e;
      return t
    }),
    B = (0, Chunk835473.Z)(U).filter(Chunk823379.lm),
    F = (0, Chunk442837.e7)([Chunk550532.Z], () => Chunk550532.Z.getFakeGameToShow());
  return (0, Chunk54381.jsx)("div", {
    className: Chunk663618.panel,
    children: (0, Chunk54381.jsxs)(Chunk481060.zJl, {
      className: Chunk738299.content,
      children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Inventory"
        }), Chunk392711.length > 0 && (0, Chunk54381.jsx)(Chunk681619.Z, {
          columns: R,
          data: Chunk392711
        }), (0, Chunk54381.jsx)(Chunk789086.Z, {}), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Refresh Now",
          fullWidth: true,
          onClick: function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: Chunk206583.YN.GLOBAL_FEED,
              feature: Chunk126313.L.INBOX
            })
          },
          loading: Chunk876215
        })]
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Impression Capping"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Clear Impressions",
          fullWidth: true,
          onClick: function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          }
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Log Impressions",
          fullWidth: true,
          onClick: function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          }
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: Chunk120356 ? "Enable Impression Capping" : "Disable Impression Capping",
          fullWidth: true,
          onClick: function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          }
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
          fullWidth: true,
          onClick: function() {
            Chunk570140.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          }
        })]
      }), false, (0, Chunk54381.jsx)(Chunk650613.Z, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Game Profile"
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          placeholder: "App ID or full name",
          onChange: e => (0 === e.length || e.length >= 18) && Z(e),
          onKeyDown: e => {
            "Enter" === e.key && (A === e.currentTarget.value ? null == M || M(e) : Z(e.currentTarget.value))
          },
          error: A.length > 0 && null == M ? "No game profile for ".concat(null != L ? L : A + " - try by id", ".") : true,
          helperText: null != M ? "Game profile found" : true
        }), (0, Chunk54381.jsx)("ul", {
          children: B.map(e => (0, a.jsx)("li", {
            children: (0, a.jsx)(D, {
              application: e
            })
          }, "follow-game-".concat(e.id)))
        })]
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Activity Sharing"
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Force show game:"
        }), (0, Chunk54381.jsx)(Chunk199849.B6, {
          options: Chunk780106.h.map(e => ({
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
          popoutLayerContext: Chunk246992.O$
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