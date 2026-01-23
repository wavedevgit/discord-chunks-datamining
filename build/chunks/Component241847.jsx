/** Chunk was on 31748 **/
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

function A(e) {
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

function E(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: l
  } = e, a = (0, i.cf)([u.A], () => ({
    connectionState: u.A.getConnectionState(t),
    hostname: u.A.getHostname(t),
    averagePing: u.A.getAveragePing(t),
    lastPing: u.A.getLastPing(t),
    pings: u.A.getPings(),
    outboundLossRate: u.A.getOutboundLossRate(t)
  }));
  return (0, r.jsx)(g.A, b(A({}, a), {
    closePopout: l,
    connectionTypeText: n
  }))
}

function v(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, l = (0, i.cf)([s.A], () => ({
    connectionState: s.A.getState(),
    hostname: s.A.getHostname(),
    averagePing: s.A.getAveragePing(),
    lastPing: s.A.getLastPing(),
    outboundLossRate: s.A.getOutboundLossRate(),
    pings: s.A.getPings()
  }));
  return (0, r.jsx)(g.A, b(A({}, l), {
    closePopout: t,
    connectionTypeText: n
  }))
}

function O(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: l,
    closePopout: i
  } = e, a = (0, p.k)({
    channelId: t
  }) ? h.intl.string(h.t["3BogKe"]) : h.intl.string(h.t.ETIVvg);
  return n ? (0, r.jsx)(E, {
    lobbyId: l,
    closePopout: i,
    connectionTypeText: a
  }) : (0, r.jsx)(v, {
    closePopout: i,
    connectionTypeText: a
  })
}

function x(e) {
  let t = (0, i.bG)([c.A], () => c.A.hasVideo(e.channelId)),
    [n, s] = l.useState(_.Rj.RTC_DEBUG_PANEL),
    u = (0, o.GV)(),
    p = l.useMemo(() => {
      switch (n) {
        case _.Rj.RTC_DEBUG_PANEL:
          return (0, r.jsx)(O, A({}, e));
        case _.Rj.RTC_SECURE_FRAMES:
          return (0, r.jsx)(m.A, {
            channelId: e.channelId
          })
      }
    }, [e, n]);
  l.useEffect(() => {
    (0, d.Hg)({
      channelId: e.channelId,
      selectedTab: n
    })
  }, [e.channelId, n]);
  let g = (0, f.c)();
  return l.useEffect(() => {
    g && s(_.Rj.RTC_DEBUG_PANEL)
  }, [g]), (0, r.jsxs)("div", {
    className: y.kL,
    children: [(0, r.jsx)(a.Heading, {
      className: y.DD,
      variant: "heading-lg/bold",
      color: "text-strong",
      children: t ? h.intl.string(h.t.IlHdW8) : h.intl.string(h.t.WsOisp)
    }), (0, r.jsxs)(a.VQ0, {
      className: y.vR,
      selectedItem: n,
      type: "top",
      look: "brand",
      onItemSelect: s,
      children: [(0, r.jsx)(a.VQ0.Item, {
        id: _.Rj.RTC_DEBUG_PANEL,
        className: y.YU,
        children: h.intl.string(h.t.MBY1Pm)
      }), g ? null : (0, r.jsx)(a.VQ0.Item, {
        id: _.Rj.RTC_SECURE_FRAMES,
        className: y.YU,
        children: h.intl.string(h.t.zC6o3s)
      })]
    }), (0, r.jsx)(a.VQ0.Panel, {
      id: n,
      "aria-labelledby": u,
      children: p
    })]
  })
}

function S(e) {
  return (0, p.k)({
    channelId: e.channelId
  }) ? (0, r.jsx)(x, A({}, e)) : (0, r.jsx)("div", {
    className: y.L3,
    children: (0, r.jsx)("section", {
      className: y.J8,
      children: (0, r.jsx)(O, A({}, e))
    })
  })
}