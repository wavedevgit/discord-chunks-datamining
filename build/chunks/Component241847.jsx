/** Chunk was on 61344 **/
/** chunk id: 241847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk383501 = require("./383501.js"),
  Chunk977997 = require("./977997.js"),
  Chunk572487 = require("./572487.js"),
  Chunk798286 = require("./798286.js"),
  Chunk83942 = require("./83942.js"),
  Chunk259374 = require("./259374.js"),
  Chunk763845 = require("./763845.jsx"),
  Chunk857341 = require("./857341.jsx"),
  Chunk603266 = require("./603266.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78875 = require("./78875.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: r
  } = e, a = (0, i.cf)([u.A], () => ({
    connectionState: u.A.getConnectionState(t),
    hostname: u.A.getHostname(t),
    averagePing: u.A.getAveragePing(t),
    lastPing: u.A.getLastPing(t),
    pings: u.A.getPings(),
    outboundLossRate: u.A.getOutboundLossRate(t)
  }));
  return (0, l.jsx)(f.A, y(_({}, a), {
    closePopout: r,
    connectionTypeText: n
  }))
}

function E(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, r = (0, i.cf)([o.A], () => ({
    connectionState: o.A.getState(),
    hostname: o.A.getHostname(),
    averagePing: o.A.getAveragePing(),
    lastPing: o.A.getLastPing(),
    outboundLossRate: o.A.getOutboundLossRate(),
    pings: o.A.getPings()
  }));
  return (0, l.jsx)(f.A, y(_({}, r), {
    closePopout: t,
    connectionTypeText: n
  }))
}

function O(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: r,
    closePopout: i
  } = e, a = (0, p.k)({
    channelId: t
  }) ? A.intl.string(A.t["3BogKe"]) : A.intl.string(A.t.ETIVvg);
  return n ? (0, l.jsx)(v, {
    lobbyId: r,
    closePopout: i,
    connectionTypeText: a
  }) : (0, l.jsx)(E, {
    closePopout: i,
    connectionTypeText: a
  })
}

function C(e) {
  let t = (0, i.bG)([c.A], () => c.A.hasVideo(e.channelId)),
    [n, o] = r.useState(g.Rj.RTC_DEBUG_PANEL),
    u = (0, s.GV)(),
    p = r.useMemo(() => {
      switch (n) {
        case g.Rj.RTC_DEBUG_PANEL:
          return (0, l.jsx)(O, _({}, e));
        case g.Rj.RTC_SECURE_FRAMES:
          return (0, l.jsx)(m.A, {
            channelId: e.channelId
          })
      }
    }, [e, n]);
  r.useEffect(() => {
    (0, d.Hg)({
      channelId: e.channelId,
      selectedTab: n
    })
  }, [e.channelId, n]);
  let f = (0, h.c)();
  return r.useEffect(() => {
    f && o(g.Rj.RTC_DEBUG_PANEL)
  }, [f]), (0, l.jsxs)("div", {
    className: b.kL,
    children: [(0, l.jsx)(a.Heading, {
      className: b.DD,
      variant: "heading-lg/bold",
      color: "text-strong",
      children: t ? A.intl.string(A.t.IlHdW8) : A.intl.string(A.t.WsOisp)
    }), (0, l.jsxs)(a.VQ0, {
      className: b.vR,
      selectedItem: n,
      type: "top",
      look: "brand",
      onItemSelect: o,
      children: [(0, l.jsx)(a.VQ0.Item, {
        id: g.Rj.RTC_DEBUG_PANEL,
        className: b.YU,
        children: A.intl.string(A.t.MBY1Pm)
      }), f ? null : (0, l.jsx)(a.VQ0.Item, {
        id: g.Rj.RTC_SECURE_FRAMES,
        className: b.YU,
        children: A.intl.string(A.t.zC6o3s)
      })]
    }), (0, l.jsx)(a.VQ0.Panel, {
      id: n,
      "aria-labelledby": u,
      children: p
    })]
  })
}

function S(e) {
  return (0, p.k)({
    channelId: e.channelId
  }) ? (0, l.jsx)(C, _({}, e)) : (0, l.jsx)("div", {
    className: b.L3,
    children: (0, l.jsx)("section", {
      className: b.J8,
      children: (0, l.jsx)(O, _({}, e))
    })
  })
}