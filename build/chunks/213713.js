/** Chunk was on 93886 **/
n.d(t, {
  Z: () => R
}), n(47120);
var r = n(200651),
  a = n(192379),
  l = n(120356),
  i = n.n(l),
  o = n(392711),
  s = n.n(o),
  c = n(876215),
  d = n(126313),
  u = n(442837),
  m = n(433517),
  h = n(481060),
  x = n(570140),
  f = n(812206),
  p = n(835473),
  b = n(246992),
  _ = n(681619),
  g = n(810568),
  v = n(168524),
  j = n(77498),
  y = n(823379),
  C = n(550532),
  N = n(71585),
  O = n(146282),
  T = n(780106),
  S = n(650613),
  E = n(789086),
  k = n(206583),
  w = n(866235),
  I = n(710662);
let Z = [{
  key: "type",
  cellClassName: i()(w.cell, w.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return (0, r.jsx)(h.Text, {
      variant: "text-md/semibold",
      children: c.s[t]
    })
  }
}, {
  key: "count",
  cellClassName: i()(w.cell, w.cellCount),
  render(e) {
    let {
      entries: t
    } = e;
    return (0, r.jsx)("div", {
      children: (0, r.jsx)(h.Text, {
        variant: "text-md/normal",
        children: t.length
      })
    })
  }
}, {
  key: "only?",
  cellClassName: w.cell,
  render(e) {
    let {
      type: t
    } = e;
    return (0, r.jsx)(P, {
      type: t
    })
  }
}];

function P(e) {
  var t, n;
  let {
    type: a
  } = e, l = (0, u.e7)([O.Z], () => O.Z.getFilters()), i = null !== (n = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(a)) && void 0 !== n && n;
  return (0, r.jsx)(h.XZJ, {
    value: i,
    onClick: function() {
      i ? x.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: void 0
      }) : x.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([a])
        }
      })
    }
  })
}

function R() {
  var e, t;
  let n = (0, u.e7)([O.Z], () => O.Z.getFeed(k.YN.GLOBAL_FEED)),
    l = (0, u.e7)([O.Z], () => O.Z.getDebugImpressionCappingDisabled()),
    i = (0, u.e7)([N.Z], () => N.Z.getDebugFastImpressionCappingEnabled()),
    o = function(e) {
      let t = s().groupBy(e, e => e.content_type);
      return Object.keys(t).map(e => {
        let n = t[e];
        return {
          key: "".concat(e),
          type: n[0].content_type,
          entries: n
        }
      })
    }(null == n ? void 0 : null === (e = n.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
    c = (0, u.e7)([O.Z], () => {
      var e;
      return (null === (e = O.Z.getFeedState(k.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0
    }),
    [P, R] = a.useState(""),
    A = (0, u.e7)([j.Z, f.Z], () => {
      var e, t, n;
      return parseInt(P) > 0 ? P : null !== (n = null === (e = j.Z.getGameByName(P)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = f.Z.getApplicationByName(P)) || void 0 === t ? void 0 : t.id
    }, [P]),
    D = (0, v.Z)({
      applicationId: A,
      location: "DevToolsContentInventory",
      source: g.m1.DevTools
    }),
    B = Object.entries(null !== (t = m.K.get("GameProfileModal")) && void 0 !== t ? t : {}).filter(e => {
      let [t, n] = e;
      return n
    }).map(e => {
      let [t] = e;
      return t
    }),
    M = (0, p.Z)(B).filter(y.lm),
    z = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
  return (0, r.jsx)("div", {
    className: I.panel,
    children: (0, r.jsxs)(h.zJl, {
      className: w.content,
      children: [(0, r.jsxs)(h.hjN, {
        children: [(0, r.jsx)(h.vwX, {
          children: "Inventory"
        }), o.length > 0 && (0, r.jsx)(_.Z, {
          columns: Z,
          data: o
        }), (0, r.jsx)(h.LZC, {
          size: 8
        }), (0, r.jsx)(E.Z, {}), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: k.YN.GLOBAL_FEED,
              feature: d.L.INBOX
            })
          },
          submitting: c,
          children: "Refresh Now"
        })]
      }), (0, r.jsxs)(h.hjN, {
        children: [(0, r.jsx)(h.vwX, {
          children: "Impression Capping"
        }), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          },
          children: "Clear Impressions"
        }), (0, r.jsx)(h.LZC, {
          size: 8
        }), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          },
          children: "Log Impressions"
        }), (0, r.jsx)(h.LZC, {
          size: 8
        }), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          },
          children: l ? "Enable Impression Capping" : "Disable Impression Capping"
        }), (0, r.jsx)(h.LZC, {
          size: 8
        }), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          },
          children: i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"
        })]
      }), !1, (0, r.jsx)(S.Z, {}), (0, r.jsxs)(h.hjN, {
        children: [(0, r.jsx)(h.vwX, {
          children: "Game Profile"
        }), (0, r.jsx)(h.oil, {
          placeholder: "App ID or full name",
          onChange: e => (0 === e.length || e.length >= 18) && R(e),
          onKeyDown: e => {
            "Enter" === e.key && (P === e.currentTarget.value ? null == D || D(e) : R(e.currentTarget.value))
          },
          error: P.length > 0 && null == D ? "No game profile for ".concat(null != A ? A : P + " - try by id", ".") : void 0,
          style: null != D ? {
            border: "1px solid green"
          } : {}
        }), (0, r.jsx)("ul", {
          children: M.map(e => (0, r.jsx)("li", {
            children: (0, r.jsx)(L, {
              application: e
            })
          }, "follow-game-".concat(e.id)))
        })]
      }), (0, r.jsxs)(h.hjN, {
        children: [(0, r.jsx)(h.vwX, {
          children: "Activity Sharing"
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: "Force show game:"
        }), (0, r.jsx)(h.PhF, {
          options: T.h.map(e => ({
            label: e,
            value: e
          })),
          isSelected: e => e === z,
          select: function(e) {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
              gameToShow: e
            })
          },
          serialize: e => e,
          popoutLayerContext: b.O$
        })]
      })]
    })
  })
}
let L = e => {
  let {
    application: t
  } = e, n = (0, v.Z)({
    applicationId: t.id,
    location: "DevToolsContentInventory",
    source: g.m1.DevTools
  });
  return (0, r.jsx)(h.P3F, {
    onClick: n,
    style: {
      margin: "2px",
      cursor: "pointer"
    },
    children: (0, r.jsx)(h.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t.name
    })
  })
}