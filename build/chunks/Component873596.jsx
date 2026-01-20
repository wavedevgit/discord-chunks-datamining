/** Chunk was on 11010 **/
/** chunk id: 873596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk362446 = require("./362446.js"),
  Chunk571826 = require("./571826.js"),
  Chunk277642 = require("./277642.js"),
  Chunk441894 = require("./441894.js"),
  Chunk160038 = require("./160038.jsx"),
  Chunk586646 = require("./586646.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544525 = require("./544525.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: i
  } = e, a = (0, l.cj)([u.Z], () => ({
    connectionState: u.Z.getConnectionState(t),
    hostname: u.Z.getHostname(t),
    averagePing: u.Z.getAveragePing(t),
    lastPing: u.Z.getLastPing(t),
    pings: u.Z.getPings(),
    outboundLossRate: u.Z.getOutboundLossRate(t)
  }));
  return (0, r.jsx)(g.Z, y(E({}, a), {
    closePopout: i,
    connectionTypeText: n
  }))
}

function O(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, i = (0, l.cj)([c.Z], () => ({
    connectionState: c.Z.getState(),
    hostname: c.Z.getHostname(),
    averagePing: c.Z.getAveragePing(),
    lastPing: c.Z.getLastPing(),
    outboundLossRate: c.Z.getOutboundLossRate(),
    pings: c.Z.getPings()
  }));
  return (0, r.jsx)(g.Z, y(E({}, i), {
    closePopout: t,
    connectionTypeText: n
  }))
}

function C(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: i,
    closePopout: l
  } = e, a = (0, p.J)({
    channelId: t
  }) ? h.intl.string(h.t["3BogKe"]) : h.intl.string(h.t.ETIVvg);
  return n ? (0, r.jsx)(_, {
    lobbyId: i,
    closePopout: l,
    connectionTypeText: a
  }) : (0, r.jsx)(O, {
    closePopout: l,
    connectionTypeText: a
  })
}

function S(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.hasVideo(e.channelId)),
    [n, c] = i.useState(b.tu.RTC_DEBUG_PANEL),
    u = (0, o.Dt)(),
    p = i.useMemo(() => {
      switch (n) {
        case b.tu.RTC_DEBUG_PANEL:
          return (0, r.jsx)(C, E({}, e));
        case b.tu.RTC_SECURE_FRAMES:
          return (0, r.jsx)(m.Z, {
            channelId: e.channelId
          })
      }
    }, [e, n]);
  i.useEffect(() => {
    (0, d.sN)({
      channelId: e.channelId,
      selectedTab: n
    })
  }, [e.channelId, n]);
  let g = (0, f.r)();
  return i.useEffect(() => {
    g && c(b.tu.RTC_DEBUG_PANEL)
  }, [g]), (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)(a.Heading, {
      className: v.title,
      variant: "heading-lg/bold",
      color: "text-strong",
      children: t ? h.intl.string(h.t.IlHdW8) : h.intl.string(h.t.WsOisp)
    }), (0, r.jsxs)(a.njP, {
      className: v.tabs,
      selectedItem: n,
      type: "top",
      look: "brand",
      onItemSelect: c,
      children: [(0, r.jsx)(a.njP.Item, {
        id: b.tu.RTC_DEBUG_PANEL,
        className: v.tabBarItem,
        children: h.intl.string(h.t.MBY1Pm)
      }), g ? null : (0, r.jsx)(a.njP.Item, {
        id: b.tu.RTC_SECURE_FRAMES,
        className: v.tabBarItem,
        children: h.intl.string(h.t.zC6o3s)
      })]
    }), (0, r.jsx)(a.njP.Panel, {
      id: n,
      "aria-labelledby": u,
      children: p
    })]
  })
}

function x(e) {
  return (0, p.J)({
    channelId: e.channelId
  }) ? (0, r.jsx)(S, E({}, e)) : (0, r.jsx)("div", {
    className: v.debugPanelStandalone,
    children: (0, r.jsx)("section", {
      className: v.debugPanelSection,
      children: (0, r.jsx)(C, E({}, e))
    })
  })
}