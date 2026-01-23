/** Chunk was on 22477 **/
/** chunk id: 986294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk681154 = require("./681154.js"),
  Chunk306264 = require("./306264.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk303054 = require("./303054.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk760751 = require("./760751.js"),
  Chunk403362 = require("./403362.js"),
  Chunk603047 = require("./603047.js"),
  Chunk435738 = require("./435738.js"),
  Chunk99753 = require("./99753.js"),
  Chunk868068 = require("./868068.js"),
  Chunk476398 = require("./476398.jsx"),
  Chunk405311 = require("./405311.jsx"),
  Chunk424994 = require("./424994.js"),
  Chunk750100 = require("./750100.js"),
  Chunk661251 = require("./661251.js");
let I = [{
  key: "type",
  cellClassName: i()(Chunk750100.Hn, Chunk750100.T$),
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(p.Text, {
      variant: "text-md/semibold",
      children: c.I[t]
    })
  }
}, {
  key: "count",
  cellClassName: i()(Chunk750100.Hn, Chunk750100.MX),
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
  cellClassName: Chunk750100.Hn,
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
    type: l
  } = e, r = (0, u.bG)([C.A], () => C.A.getFilters()), i = null != (t = null == r || null == (n = r.types) ? true : n.has(l)) && t;
  return (0, a.jsx)(p.dOG, {
    checked: i,
    onChange: function() {
      i ? h.h.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: true
      }) : h.h.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([l])
        }
      })
    }
  })
}

function P() {
  var e, t, n;
  let r, i = (0, u.bG)([C.A], () => C.A.getFeed(T.X1.GLOBAL_FEED)),
    s = (0, u.bG)([C.A], () => C.A.getDebugImpressionCappingDisabled()),
    c = (0, u.bG)([A.A], () => A.A.getDebugFastImpressionCappingEnabled()),
    k = (n = null == i || null == (t = i.entries) ? true : t.map(e => e.content), Object.keys(r = o().groupBy(n, e => e.content_type)).map(e => {
      let t = r[e];
      return {
        key: "".concat(e),
        type: t[0].content_type,
        entries: t
      }
    })),
    P = (0, u.bG)([C.A], () => {
      var e;
      return (null == (e = C.A.getFeedState(T.X1.GLOBAL_FEED)) ? true : e.loading) === true
    }),
    [D, M] = l.useState(""),
    L = (0, u.bG)([j.A, x.A], () => {
      var e, t, n;
      return parseInt(D) > 0 ? D : null != (e = null == (t = j.A.getGameByName(D)) ? true : t.id) ? e : null == (n = x.A.getApplicationByName(D)) ? true : n.id
    }, [D]),
    U = (0, v.A)({
      applicationId: L,
      location: "DevToolsContentInventory",
      source: b.Ob.DevTools
    }),
    B = Object.entries(null != (e = m.w.get("GameProfileModal")) ? e : {}).filter(e => {
      let [t, n] = e;
      return n
    }).map(e => {
      let [t] = e;
      return t
    }),
    G = (0, g.A)(B).filter(_.Vq),
    F = (0, u.bG)([y.A], () => y.A.getFakeGameToShow());
  return (0, a.jsx)("div", {
    className: w.nd,
    children: (0, a.jsxs)(p.IpV, {
      className: N.Qs,
      children: [(0, a.jsxs)(p.BJc, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Inventory"
        }), k.length > 0 && (0, a.jsx)(f.A, {
          columns: I,
          data: k
        }), (0, a.jsx)(E.A, {}), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Refresh Now",
          fullWidth: true,
          onClick: function() {
            h.h.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: T.X1.GLOBAL_FEED,
              feature: d.M.INBOX
            })
          },
          loading: P
        })]
      }), (0, a.jsxs)(p.BJc, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Impression Capping"
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Clear Impressions",
          fullWidth: true,
          onClick: function() {
            h.h.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          }
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: "Log Impressions",
          fullWidth: true,
          onClick: function() {
            h.h.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          }
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: s ? "Enable Impression Capping" : "Disable Impression Capping",
          fullWidth: true,
          onClick: function() {
            h.h.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          }
        }), (0, a.jsx)(p.Button, {
          variant: "primary",
          text: c ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
          fullWidth: true,
          onClick: function() {
            h.h.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          }
        })]
      }), false, (0, a.jsx)(O.A, {}), (0, a.jsxs)(p.BJc, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Game Profile"
        }), (0, a.jsx)(p.ksK, {
          placeholder: "App ID or full name",
          onChange: e => (0 === e.length || e.length >= 18) && M(e),
          onKeyDown: e => {
            "Enter" === e.key && (D === e.currentTarget.value ? null == U || U(e) : M(e.currentTarget.value))
          },
          error: D.length > 0 && null == U ? "No game profile for ".concat(null != L ? L : D + " - try by id", ".") : true,
          helperText: null != U ? "Game profile found" : true
        }), (0, a.jsx)("ul", {
          children: G.map(e => (0, a.jsx)("li", {
            children: (0, a.jsx)(R, {
              application: e
            })
          }, "follow-game-".concat(e.id)))
        })]
      }), (0, a.jsxs)(p.BJc, {
        gap: 8,
        children: [(0, a.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: "Activity Sharing"
        }), (0, a.jsx)(p.l6P, {
          label: "Force show game",
          options: S.K.map(e => ({
            label: e,
            value: e,
            id: e
          })),
          value: F,
          onSelectionChange: function(e) {
            h.h.dispatch({
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
let R = e => {
  let {
    application: t
  } = e, n = (0, v.A)({
    applicationId: t.id,
    location: "DevToolsContentInventory",
    source: b.Ob.DevTools
  });
  return (0, a.jsx)(p.DUT, {
    onClick: n,
    children: (0, a.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t.name
    })
  })
}