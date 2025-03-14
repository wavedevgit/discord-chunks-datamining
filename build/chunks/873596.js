/** Chunk was on 7755 **/
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(442837),
  o = n(481060),
  a = n(313201),
  s = n(19780),
  c = n(979651),
  u = n(362446),
  d = n(571826),
  h = n(277642),
  f = n(441894),
  p = n(160038),
  g = n(586646),
  v = n(760373),
  N = n(388032),
  O = n(887933);

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
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

function m(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: l
  } = e, o = (0, i.cj)([u.Z], () => ({
    connectionState: u.Z.getConnectionState(t),
    hostname: u.Z.getHostname(t),
    averagePing: u.Z.getAveragePing(t),
    lastPing: u.Z.getLastPing(t),
    pings: u.Z.getPings(),
    outboundLossRate: u.Z.getOutboundLossRate(t)
  }));
  return (0, r.jsx)(p.Z, b(y({}, o), {
    closePopout: l,
    connectionTypeText: n
  }))
}

function x(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, l = (0, i.cj)([s.Z], () => ({
    connectionState: s.Z.getState(),
    hostname: s.Z.getHostname(),
    averagePing: s.Z.getAveragePing(),
    lastPing: s.Z.getLastPing(),
    outboundLossRate: s.Z.getOutboundLossRate(),
    pings: s.Z.getPings()
  }));
  return (0, r.jsx)(p.Z, b(y({}, l), {
    closePopout: t,
    connectionTypeText: n
  }))
}

function I(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: l,
    closePopout: i
  } = e, o = (0, f.J)({
    channelId: t,
    location: "RTCConnectionDebugPanelContainer"
  }) ? N.NW.string(N.t["3BogKS"]) : N.NW.string(N.t.ETIVvr);
  return n ? (0, r.jsx)(m, {
    lobbyId: l,
    closePopout: i,
    connectionTypeText: o
  }) : (0, r.jsx)(x, {
    closePopout: i,
    connectionTypeText: o
  })
}

function C(e) {
  let t = (0, i.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
    [n, s] = l.useState(v.tu.RTC_DEBUG_PANEL),
    u = (0, a.Dt)(),
    f = l.useMemo(() => {
      switch (n) {
        case v.tu.RTC_DEBUG_PANEL:
          return (0, r.jsx)(I, y({}, e));
        case v.tu.RTC_SECURE_FRAMES:
          return (0, r.jsx)(g.Z, {
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
  let p = (0, h.r)();
  return l.useEffect(() => {
    p && s(v.tu.RTC_DEBUG_PANEL)
  }, [p]), (0, r.jsxs)("div", {
    className: O.container,
    children: [(0, r.jsx)(o.X6q, {
      className: O.title,
      variant: "heading-lg/bold",
      color: "header-primary",
      children: t ? N.NW.string(N.t.IlHdW1) : N.NW.string(N.t.WsOisr)
    }), (0, r.jsxs)(o.njP, {
      className: O.tabs,
      selectedItem: n,
      type: "top",
      look: "brand",
      onItemSelect: s,
      children: [(0, r.jsx)(o.njP.Item, {
        id: v.tu.RTC_DEBUG_PANEL,
        className: O.tabBarItem,
        children: N.NW.string(N.t.MBY1Pj)
      }), p ? null : (0, r.jsx)(o.njP.Item, {
        id: v.tu.RTC_SECURE_FRAMES,
        className: O.tabBarItem,
        children: N.NW.string(N.t.zC6o3t)
      })]
    }), (0, r.jsx)(o.njP.Panel, {
      id: n,
      "aria-labelledby": u,
      children: f
    })]
  })
}

function E(e) {
  return (0, f.J)({
    channelId: e.channelId,
    location: "RTCConnectionPopout"
  }) ? (0, r.jsx)(C, y({}, e)) : (0, r.jsx)("div", {
    className: O.debugPanelStandalone,
    children: (0, r.jsx)("section", {
      className: O.debugPanelSection,
      children: (0, r.jsx)(I, y({}, e))
    })
  })
}