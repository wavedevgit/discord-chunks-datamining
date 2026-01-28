/** Chunk was on 96811 **/
/** chunk id: 354062, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./747238.js"), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk299855 = require("./299855.js"),
  o = require.n(Chunk299855),
  Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk15285 = require("./15285.js"),
  Chunk843402 = require("./843402.js"),
  Chunk674966 = require("./674966.js"),
  Chunk859703 = require("./859703.js"),
  Chunk157257 = require("./157257.js"),
  Chunk975571 = require("./975571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk290805 = require("./290805.js"),
  Chunk429432 = require("./429432.js"),
  Chunk830012 = require("./830012.js"),
  Chunk905552 = require("./905552.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk207975 = require("./207975.js"),
  Chunk502075 = require("./502075.js"),
  Chunk765682 = require("./765682.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk146896 = require("./146896.js");

function T(e, t, r, n) {
  let i = (0, _.isWindows)() ? (0, S.A)(h.Ay, j.A) : null,
    l = h.Ay.getRunningGames(),
    s = null == r ? true : r.split(":")[1],
    a = e.id.split(":")[1];
  if (null != s && s === a) return 0;
  if (null != t && t === e.id) return 5;
  if (null != i && (0, y.A)(e.id, i.windowHandle)) return 4;
  if (null != l.find(t => (0, y.A)(e.id, t.windowHandle))) return 3;
  let o = null == n ? true : n[a];
  return null != o && w.F2.has(o) ? 2 : 1
}

function R(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(c.fS.SCREEN) ? (0, n.jsx)(u.kN9, {
    size: "xs"
  }) : t.id.startsWith(c.fS.WINDOW) ? null != t.icon && "" !== t.icon ? (0, n.jsx)("img", {
    src: t.icon,
    className: N.pI,
    alt: ""
  }) : (0, n.jsx)(u.WxK, {
    size: "xs"
  }) : (0, n.jsx)(u.npA, {
    size: "xs"
  })
}

function P(e) {
  let {
    source: t,
    selected: r,
    onClick: i
  } = e, {
    url: l,
    name: a
  } = t;
  return (0, n.jsxs)(u.DUT, {
    onClick: () => i(t),
    className: s()(N.sP, {
      [N.Lv]: r
    }),
    children: [(0, n.jsx)("div", {
      className: N.ji,
      children: (0, n.jsxs)("div", {
        className: N.KG,
        children: [(0, n.jsx)("img", {
          src: l,
          className: N.f5,
          alt: ""
        }), (0, n.jsx)("div", {
          className: N.qe,
          children: (0, n.jsx)("div", {
            className: N.K3,
            children: (0, n.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: I.intl.string(I.t.z7WGhv)
            })
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: N.Uw,
      children: [(0, n.jsx)(R, {
        source: t
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: N.VZ,
        children: a
      })]
    })]
  })
}

function M(e) {
  let {
    onClick: t
  } = e, [{
    windowSources: r,
    deviceSources: l,
    screenSources: s,
    sourceType: a,
    fetchingSources: j,
    selectedSource: g,
    discordSourceId: S,
    hasPermission: w
  }] = (0, A.tS)(), {
    smarterSourceOrdering: E
  } = (0, b.s)({
    location: "GoLiveSourceGrid"
  }), R = (0, d.bG)([h.Ay], () => h.Ay.getRunningGames()), M = (0, d.cf)([h.Ay], () => {
    let e = h.Ay.getCandidateGames(),
      t = {};
    for (let r of e) null != r.windowHandle && (t[r.windowHandle] = r.exeName);
    return t
  }), U = (0, d.bG)([m.A], () => m.A.quests), G = (0, O.A)(U, R, r);
  i.useEffect(() => ((0, p.a2)(), p.e0), []);
  let L = i.useMemo(() => E ? [...r].sort((e, t) => T(t, null == G ? true : G.source.id, S, M) - T(e, null == G ? true : G.source.id, S, M)) : r, [G, E, r, S, M]);
  if (j) {
    if (false === w) {
      let e = false;
      if ((0, _.isMac)()) {
        var k, F;
        let t = null === f.A || true === f.A || null == (F = f.A.remoteApp) || null == (k = F.getVersion) ? true : k.call(F);
        e = !v.M || "0.0.0" === t || o().satisfies(t, "0.0.363")
      }
      return (0, n.jsxs)("div", {
        className: N.Ye,
        children: [(0, n.jsxs)(u.Text, {
          className: N.kc,
          variant: "text-md/normal",
          color: "text-feedback-critical",
          children: [I.intl.string(I.t["kW5h/W"]), (0, n.jsx)("br", {}), I.intl.string(I.t["5Jvu1R"])]
        }), e && (0, n.jsx)(u.Button, {
          text: I.intl.string(I.t["XgZk+u"]),
          onClick: () => {
            x.A.openSettings(C.iL.SCREEN_RECORDING)
          }
        })]
      })
    }
    return (0, n.jsx)("div", {
      className: N.Lq,
      children: (0, n.jsx)(u.y$y, {})
    })
  }
  let H = [];
  return (H = a === c.fS.WINDOW ? L : a === c.fS.SCREEN ? s : l, a === c.fS.CAMERA && 0 === H.length) ? (0, n.jsx)(D, {}) : (0, n.jsx)("div", {
    className: N.zr,
    children: H.map(e => (0, n.jsx)(P, {
      onClick: t,
      source: e,
      selected: null != g && "windowHandle" in g ? (0, y.A)(e.id, g.windowHandle) : (null == g ? true : g.id) === e.id
    }, e.id))
  })
}

function D() {
  return (0, n.jsxs)("div", {
    className: N.p$,
    children: [(0, n.jsx)(u.npA, {
      size: "md",
      color: u.LU0.colors.ICON_MUTED,
      className: N.Dw
    }), (0, n.jsx)(u.Text, {
      variant: "text-lg/medium",
      color: "text-strong",
      className: N.jU,
      children: I.intl.string(E.default["/z3YaZ"])
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: N.C3,
      children: I.intl.string(E.default.agwSGA)
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/semibold",
      children: I.intl.format(E.default.xpVzr3, {
        helpdeskURL: g.A.getArticleURL(0x53d41ade17)
      })
    })]
  })
}