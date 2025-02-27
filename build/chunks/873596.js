/** Chunk was on 29611 **/
n.d(t, {
  Z: () => C
}), n(47120);
var i = n(200651),
  o = n(192379),
  r = n(442837),
  a = n(481060),
  l = n(313201),
  c = n(19780),
  s = n(979651),
  u = n(362446),
  d = n(571826),
  _ = n(277642),
  h = n(441894),
  f = n(160038),
  p = n(586646),
  g = n(760373),
  v = n(388032),
  b = n(887933);

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: o
  } = e, a = (0, r.cj)([u.Z], () => ({
    connectionState: u.Z.getConnectionState(t),
    hostname: u.Z.getHostname(t),
    averagePing: u.Z.getAveragePing(t),
    lastPing: u.Z.getLastPing(t),
    pings: u.Z.getPings(),
    outboundLossRate: u.Z.getOutboundLossRate(t)
  }));
  return (0, i.jsx)(f.Z, m(y({}, a), {
    closePopout: o,
    connectionTypeText: n
  }))
}

function O(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, o = (0, r.cj)([c.Z], () => ({
    connectionState: c.Z.getState(),
    hostname: c.Z.getHostname(),
    averagePing: c.Z.getAveragePing(),
    lastPing: c.Z.getLastPing(),
    outboundLossRate: c.Z.getOutboundLossRate(),
    pings: c.Z.getPings()
  }));
  return (0, i.jsx)(f.Z, m(y({}, o), {
    closePopout: t,
    connectionTypeText: n
  }))
}

function N(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: o,
    closePopout: r
  } = e, a = (0, h.J)({
    channelId: t,
    location: "RTCConnectionDebugPanelContainer"
  }) ? v.NW.string(v.t["3BogKS"]) : v.NW.string(v.t.ETIVvr);
  return n ? (0, i.jsx)(I, {
    lobbyId: o,
    closePopout: r,
    connectionTypeText: a
  }) : (0, i.jsx)(O, {
    closePopout: r,
    connectionTypeText: a
  })
}

function S(e) {
  let t = (0, r.e7)([s.Z], () => s.Z.hasVideo(e.channelId)),
    [n, c] = o.useState(g.tu.RTC_DEBUG_PANEL),
    u = (0, l.Dt)(),
    h = o.useMemo(() => {
      switch (n) {
        case g.tu.RTC_DEBUG_PANEL:
          return (0, i.jsx)(N, y({}, e));
        case g.tu.RTC_SECURE_FRAMES:
          return (0, i.jsx)(p.Z, {
            channelId: e.channelId
          })
      }
    }, [e, n]);
  o.useEffect(() => {
    (0, d.sN)({
      channelId: e.channelId,
      selectedTab: n
    })
  }, [e.channelId, n]);
  let f = (0, _.r)();
  return o.useEffect(() => {
    f && c(g.tu.RTC_DEBUG_PANEL)
  }, [f]), (0, i.jsxs)("div", {
    className: b.container,
    children: [(0, i.jsx)(a.X6q, {
      className: b.title,
      variant: "heading-lg/bold",
      color: "header-primary",
      children: t ? v.NW.string(v.t.IlHdW1) : v.NW.string(v.t.WsOisr)
    }), (0, i.jsxs)(a.njP, {
      className: b.tabs,
      selectedItem: n,
      type: "top",
      look: "brand",
      onItemSelect: c,
      children: [(0, i.jsx)(a.njP.Item, {
        id: g.tu.RTC_DEBUG_PANEL,
        className: b.tabBarItem,
        children: v.NW.string(v.t.MBY1Pj)
      }), f ? null : (0, i.jsx)(a.njP.Item, {
        id: g.tu.RTC_SECURE_FRAMES,
        className: b.tabBarItem,
        children: v.NW.string(v.t.zC6o3t)
      })]
    }), (0, i.jsx)(a.njP.Panel, {
      id: n,
      "aria-labelledby": u,
      children: h
    })]
  })
}

function C(e) {
  return (0, h.J)({
    channelId: e.channelId,
    location: "RTCConnectionPopout"
  }) ? (0, i.jsx)(S, y({}, e)) : (0, i.jsx)("div", {
    className: b.debugPanelStandalone,
    children: (0, i.jsx)("section", {
      className: b.debugPanelSection,
      children: (0, i.jsx)(N, y({}, e))
    })
  })
}