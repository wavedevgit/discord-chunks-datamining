/** Chunk was on 93886 (1d5eb829541a42b4.js) **/
n.d(t, {
  Z: () => Z
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
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
  C = n(823379),
  y = n(550532),
  O = n(71585),
  N = n(146282),
  T = n(780106),
  E = n(650613),
  S = n(789086),
  k = n(206583),
  I = n(811372),
  w = n(841699);
let R = [{
  key: "type",
  cellClassName: l()(I.cell, I.cellType),
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
  cellClassName: l()(I.cell, I.cellCount),
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
  cellClassName: I.cell,
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
  } = e, i = (0, u.e7)([N.Z], () => N.Z.getFilters()), l = null !== (n = null == i ? void 0 : null === (t = i.types) || void 0 === t ? void 0 : t.has(a)) && void 0 !== n && n;
  return (0, r.jsx)(h.XZJ, {
    value: l,
    onClick: function() {
      l ? x.Z.dispatch({
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

function Z() {
  var e, t;
  let n = (0, u.e7)([N.Z], () => N.Z.getFeed(k.YN.GLOBAL_FEED)),
    i = (0, u.e7)([N.Z], () => N.Z.getDebugImpressionCappingDisabled()),
    o = (0, u.e7)([O.Z], () => O.Z.getDebugFastImpressionCappingEnabled()),
    c = function(e) {
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
    P = (0, u.e7)([N.Z], () => {
      var e;
      return (null === (e = N.Z.getFeedState(k.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0
    }),
    [Z, L] = a.useState(""),
    D = (0, u.e7)([j.Z, f.Z], () => {
      var e, t, n;
      return parseInt(Z) > 0 ? Z : null !== (n = null === (e = j.Z.getGameByName(Z)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = f.Z.getApplicationByName(Z)) || void 0 === t ? void 0 : t.id
    }, [Z]),
    B = (0, v.Z)({
      applicationId: D,
      location: "DevToolsContentInventory",
      source: g.m1.DevTools
    }),
    M = Object.entries(null !== (t = m.K.get("GameProfileModal")) && void 0 !== t ? t : {}).filter(e => {
      let [t, n] = e;
      return n
    }).map(e => {
      let [t] = e;
      return t
    }),
    F = (0, p.Z)(M).filter(C.lm),
    z = (0, u.e7)([y.Z], () => y.Z.getFakeGameToShow());
  return (0, r.jsx)("div", {
    className: l()(w.panel),
    children: (0, r.jsxs)(h.zJl, {
      className: I.content,
      children: [(0, r.jsxs)(h.hjN, {
        children: [(0, r.jsx)(h.vwX, {
          children: "Inventory"
        }), c.length > 0 && (0, r.jsx)(_.Z, {
          columns: R,
          data: c
        }), (0, r.jsx)(h.LZC, {
          size: 8
        }), (0, r.jsx)(S.Z, {}), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH",
              feedId: k.YN.GLOBAL_FEED,
              feature: d.L.INBOX
            })
          },
          submitting: P,
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
          children: i ? "Enable Impression Capping" : "Disable Impression Capping"
        }), (0, r.jsx)(h.LZC, {
          size: 8
        }), (0, r.jsx)(h.zxk, {
          fullWidth: !0,
          onClick: function() {
            x.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          },
          children: o ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"
        })]
      }), !1, (0, r.jsx)(E.Z, {}), (0, r.jsxs)(h.hjN, {
        children: [(0, r.jsx)(h.vwX, {
          children: "Game Profile"
        }), (0, r.jsx)(h.oil, {
          placeholder: "App ID or full name",
          onChange: e => (0 === e.length || e.length >= 18) && L(e),
          onKeyDown: e => {
            "Enter" === e.key && (Z === e.currentTarget.value ? null == B || B(e) : L(e.currentTarget.value))
          },
          error: Z.length > 0 && null == B ? "No game profile for ".concat(null != D ? D : Z + " - try by id", ".") : void 0,
          style: null != B ? {
            border: "1px solid green"
          } : {}
        }), (0, r.jsx)("ul", {
          children: F.map(e => (0, r.jsx)("li", {
            children: (0, r.jsx)(A, {
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
let A = e => {
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