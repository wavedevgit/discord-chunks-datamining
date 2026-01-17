/** Chunk was on 69813 **/
/** chunk id: 873596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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

function v(e) {
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

function _(e, t) {
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

function y(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: l
  } = e, a = (0, i.cj)([u.Z], () => ({
    connectionState: u.Z.getConnectionState(t),
    hostname: u.Z.getHostname(t),
    averagePing: u.Z.getAveragePing(t),
    lastPing: u.Z.getLastPing(t),
    pings: u.Z.getPings(),
    outboundLossRate: u.Z.getOutboundLossRate(t)
  }));
  return (0, r.jsx)(g.Z, _(v({}, a), {
    closePopout: l,
    connectionTypeText: n
  }))
}

function O(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, l = (0, i.cj)([c.Z], () => ({
    connectionState: c.Z.getState(),
    hostname: c.Z.getHostname(),
    averagePing: c.Z.getAveragePing(),
    lastPing: c.Z.getLastPing(),
    outboundLossRate: c.Z.getOutboundLossRate(),
    pings: c.Z.getPings()
  }));
  return (0, r.jsx)(g.Z, _(v({}, l), {
    closePopout: t,
    connectionTypeText: n
  }))
}

function S(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: l,
    closePopout: i
  } = e, a = (0, p.J)({
    channelId: t
  }) ? h.intl.string(h.t["3BogKe"]) : h.intl.string(h.t.ETIVvg);
  return n ? (0, r.jsx)(y, {
    lobbyId: l,
    closePopout: i,
    connectionTypeText: a
  }) : (0, r.jsx)(O, {
    closePopout: i,
    connectionTypeText: a
  })
}

function C(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.hasVideo(e.channelId)),
    [n, c] = l.useState(m.tu.RTC_DEBUG_PANEL),
    u = (0, o.Dt)(),
    p = l.useMemo(() => {
      switch (n) {
        case m.tu.RTC_DEBUG_PANEL:
          return (0, r.jsx)(S, v({}, e));
        case m.tu.RTC_SECURE_FRAMES:
          return (0, r.jsx)(b.Z, {
            channelId: e.channelId
          })
      }
    }, [e, n]);
  l.useEffect(() => {
    (0, d.sN)({
      channelId: e.channelId,
      selectedTab: n
    })
  }, [e.channelId, n]);
  let g = (0, f.r)();
  return l.useEffect(() => {
    g && c(m.tu.RTC_DEBUG_PANEL)
  }, [g]), (0, r.jsxs)("div", {
    className: E.container,
    children: [(0, r.jsx)(a.Heading, {
      className: E.title,
      variant: "heading-lg/bold",
      color: "text-strong",
      children: t ? h.intl.string(h.t.IlHdW8) : h.intl.string(h.t.WsOisp)
    }), (0, r.jsxs)(a.njP, {
      className: E.tabs,
      selectedItem: n,
      type: "top",
      look: "brand",
      onItemSelect: c,
      children: [(0, r.jsx)(a.njP.Item, {
        id: m.tu.RTC_DEBUG_PANEL,
        className: E.tabBarItem,
        children: h.intl.string(h.t.MBY1Pm)
      }), g ? null : (0, r.jsx)(a.njP.Item, {
        id: m.tu.RTC_SECURE_FRAMES,
        className: E.tabBarItem,
        children: h.intl.string(h.t.zC6o3s)
      })]
    }), (0, r.jsx)(a.njP.Panel, {
      id: n,
      "aria-labelledby": u,
      children: p
    })]
  })
}

function I(e) {
  return (0, p.J)({
    channelId: e.channelId
  }) ? (0, r.jsx)(C, v({}, e)) : (0, r.jsx)("div", {
    className: E.debugPanelStandalone,
    children: (0, r.jsx)("section", {
      className: E.debugPanelSection,
      children: (0, r.jsx)(S, v({}, e))
    })
  })
}