/** Chunk was on 22979 **/
/** chunk id: 213713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
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
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk404577 = require("./404577.js"),
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
let I = [{
  key: "type",
  cellClassName: l()(Chunk738299.cell, Chunk738299.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(p.Text, {
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
      children: (0, a.jsx)(p.Text, {
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
    return (0, a.jsx)(k, {
      type: t
    })
  }
}];

function k(e) {
  var t, n;
  let {
    type: r
  } = e, i = (0, u.e7)([S.Z], () => S.Z.getFilters()), l = null != (n = null == i || null == (t = i.types) ? true : t.has(r)) && n;
  return (0, a.jsx)(p.rsf, {
    checked: l,
    onChange: function() {
      l ? h.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: true
      }) : h.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([r])
        }
      })
    }
  })
}

function R() {
  var e, t;
  let n = (0, u.e7)([S.Z], () => S.Z.getFeed(N.YN.GLOBAL_FEED)),
    i = (0, u.e7)([S.Z], () => S.Z.getDebugImpressionCappingDisabled()),
    l = (0, u.e7)([_.Z], () => _.Z.getDebugFastImpressionCappingEnabled()),
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
    c = (0, u.e7)([S.Z], () => {
      var e;
      return (null == (e = S.Z.getFeedState(N.YN.GLOBAL_FEED)) ? true : e.loading) === true
    }),
    [k, R] = r.useState(""),
    Z = (0, u.e7)([j.Z, f.Z], () => {
      var e, t, n;
      return parseInt(k) > 0 ? k : null != (n = null == (e = j.Z.getGameByName(k)) ? true : e.id) ? n : null == (t = f.Z.getApplicationByName(k)) ? true : t.id
    }, [k]),
    D = (0, v.Z)({
      applicationId: Z,
      location: "DevToolsContentInventory",
      source: g.m1.DevTools
    }),
    M = Object.entries(null != (t = m.K.get("GameProfileModal")) ? t : {}).filter(e => {
      let [t, n] = e;
      return n
    }).map(e => {
      let [t] = e;
      return t
    }),
    L = (0, b.Z)(M).filter(y.lm),
    U = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
  return (0, a.jsx)("div", {
    className: w.panel,
    children: (0, a.jsxs)(p.zJl, {
      className: P.content,
      children: [(0, a.jsxs)(p.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Inventory"
        }), s.length > 0 && (0, a.jsx)(x.Z, {
          columns: I,
          data: s
        }), (0, a.jsx)(O.Z, {}), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Refresh Now",
          fullWidth: true,
          onClick: function() {
            h.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: N.YN.GLOBAL_FEED,
              feature: d.L.INBOX
            })
          },
          loading: c
        })]
      }), (0, a.jsxs)(p.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Impression Capping"
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Clear Impressions",
          fullWidth: true,
          onClick: function() {
            h.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          }
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Log Impressions",
          fullWidth: true,
          onClick: function() {
            h.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          }
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: i ? "Enable Impression Capping" : "Disable Impression Capping",
          fullWidth: true,
          onClick: function() {
            h.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          }
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
          fullWidth: true,
          onClick: function() {
            h.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          }
        })]
      }), false, (0, a.jsx)(T.Z, {}), (0, a.jsxs)(p.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Game Profile"
        }), (0, a.jsx)(p.oil, {
          placeholder: "App ID or full name",
          onChange: e => (0 === e.length || e.length >= 18) && R(e),
          onKeyDown: e => {
            "Enter" === e.key && (k === e.currentTarget.value ? null == D || D(e) : R(e.currentTarget.value))
          },
          error: k.length > 0 && null == D ? "No game profile for ".concat(null != Z ? Z : k + " - try by id", ".") : true,
          helperText: null != D ? "Game profile found" : true
        }), (0, a.jsx)("ul", {
          children: L.map(e => (0, a.jsx)("li", {
            children: (0, a.jsx)(A, {
              application: e
            })
          }, "follow-game-".concat(e.id)))
        })]
      }), (0, a.jsxs)(p.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Activity Sharing"
        }), (0, a.jsx)(p.PhF, {
          label: "Force show game",
          options: E.h.map(e => ({
            label: e,
            value: e,
            id: e
          })),
          value: U,
          onSelectionChange: function(e) {
            h.Z.dispatch({
              type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
              gameToShow: e
            })
          },
          selectionMode: "single",
          fullWidth: true
        })]
      })]
    })
  })
}
let A = e => {
  let {
    application: t
  } = e, n = (0, v.Z)({
    applicationId: t.id,
    location: "DevToolsContentInventory",
    source: g.m1.DevTools
  });
  return (0, a.jsx)(p.P3F, {
    onClick: n,
    children: (0, a.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t.name
    })
  })
}