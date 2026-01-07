/** Chunk was on 46746 **/
/** chunk id: 530626, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./35282.js"), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  c = require.n(Chunk209739),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk320724 = require("./320724.js"),
  Chunk751571 = require("./751571.js"),
  Chunk616022 = require("./616022.js"),
  Chunk449224 = require("./449224.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk747268 = require("./747268.js"),
  Chunk215915 = require("./215915.js"),
  Chunk855403 = require("./855403.js"),
  Chunk989941 = require("./989941.js"),
  Chunk443762 = require("./443762.jsx"),
  Chunk953313 = require("./953313.js"),
  Chunk70722 = require("./70722.js"),
  Chunk761274 = require("./761274.js"),
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605144 = require("./605144.js");

function N(e, t, r, n) {
  let i = (0, j.isWindows)() ? (0, w.Z)(h.ZP, g.Z) : null,
    s = h.ZP.getRunningGames(),
    l = null == r ? true : r.split(":")[1],
    o = e.id.split(":")[1];
  if (null != l && l === o) return 0;
  if (null != t && t === e.id) return 5;
  if (null != i && (0, y.Z)(e.id, i.windowHandle)) return 4;
  if (null != s.find(t => (0, y.Z)(e.id, t.windowHandle))) return 3;
  let c = null == n ? true : n[o];
  return null != c && S.Mm.has(c) ? 2 : 1
}

function T(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(a.vA.SCREEN) ? (0, n.jsx)(u.pzj, {
    size: "xs"
  }) : t.id.startsWith(a.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, n.jsx)("img", {
    src: t.icon,
    className: P.sourceIcon,
    alt: ""
  }) : (0, n.jsx)(u.GON, {
    size: "xs"
  }) : (0, n.jsx)(u.Odl, {
    size: "xs"
  })
}

function R(e) {
  let {
    source: t,
    selected: r,
    onClick: i
  } = e, {
    url: s,
    name: o
  } = t;
  return (0, n.jsxs)(u.P3F, {
    onClick: () => i(t),
    className: l()(P.source, {
      [P.selectedSource]: r
    }),
    children: [(0, n.jsx)("div", {
      className: P.sourcePreviewContainer,
      children: (0, n.jsxs)("div", {
        className: P.sourcePreview,
        children: [(0, n.jsx)("img", {
          src: s,
          className: P.sourcePreviewImage,
          alt: ""
        }), (0, n.jsx)("div", {
          className: P.sourceOverlay,
          children: (0, n.jsx)("div", {
            className: P.sourceOverlayCTA,
            children: (0, n.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: E.intl.string(E.t.z7WGhv)
            })
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: P.sourceNameContainer,
      children: [(0, n.jsx)(T, {
        source: t
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: P.sourceName,
        children: o
      })]
    })]
  })
}

function M(e) {
  let {
    onClick: t
  } = e, [{
    windowSources: r,
    deviceSources: s,
    screenSources: l,
    sourceType: o,
    fetchingSources: g,
    selectedSource: v,
    discordSourceId: w,
    hasPermission: S
  }] = (0, O.E_)(), {
    smarterSourceOrdering: Z
  } = (0, b.E)({
    location: "GoLiveSourceGrid"
  }), T = (0, d.e7)([h.ZP], () => h.ZP.getRunningGames()), M = (0, d.cj)([h.ZP], () => {
    let e = h.ZP.getCandidateGames(),
      t = {};
    for (let r of e) null != r.windowHandle && (t[r.windowHandle] = r.exeName);
    return t
  }), L = (0, d.e7)([m.Z], () => m.Z.quests), U = (0, C.Z)(L, T, r);
  i.useEffect(() => ((0, p.Ky)(), p.P7), []);
  let G = i.useMemo(() => Z ? [...r].sort((e, t) => N(t, null == U ? true : U.source.id, w, M) - N(e, null == U ? true : U.source.id, w, M)) : r, [U, Z, r, w, M]);
  if (g) {
    if (false === S) {
      let e = false;
      if ((0, j.isMac)()) {
        var D, H;
        let t = null === f.Z || true === f.Z || null == (H = f.Z.remoteApp) || null == (D = H.getVersion) ? true : D.call(H);
        e = !_.o || "0.0.0" === t || c().satisfies(t, "0.0.363")
      }
      return (0, n.jsxs)("div", {
        className: P.errorBox,
        children: [(0, n.jsxs)(u.Text, {
          className: P.errorText,
          variant: "text-md/normal",
          color: "text-feedback-critical",
          children: [E.intl.string(E.t["kW5h/W"]), (0, n.jsx)("br", {}), E.intl.string(E.t["5Jvu1R"])]
        }), e && (0, n.jsx)(u.Button, {
          text: E.intl.string(E.t["XgZk+u"]),
          onClick: () => {
            x.Z.openSettings(I.Eu.SCREEN_RECORDING)
          }
        })]
      })
    }
    return (0, n.jsx)("div", {
      className: P.loading,
      children: (0, n.jsx)(u.$jN, {})
    })
  }
  let B = [];
  return (B = o === a.vA.WINDOW ? G : o === a.vA.SCREEN ? l : s, o === a.vA.CAMERA && 0 === B.length) ? (0, n.jsx)(A, {}) : (0, n.jsx)("div", {
    className: P.root,
    children: B.map(e => (0, n.jsx)(R, {
      onClick: t,
      source: e,
      selected: null != v && "windowHandle" in v ? (0, y.Z)(e.id, v.windowHandle) : (null == v ? true : v.id) === e.id
    }, e.id))
  })
}

function A() {
  return (0, n.jsxs)("div", {
    className: P.emptyState,
    children: [(0, n.jsx)(u.Odl, {
      size: "md",
      color: u.TVs.colors.ICON_MUTED,
      className: P.emptyIcon
    }), (0, n.jsx)(u.Text, {
      variant: "text-lg/medium",
      color: "text-strong",
      className: P.emptyHeader,
      children: E.intl.string(Z.default["/z3YaZ"])
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: P.emptyBody,
      children: E.intl.string(Z.default.agwSGA)
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/semibold",
      children: E.intl.format(Z.default.xpVzr3, {
        helpdeskURL: v.Z.getArticleURL(0x53d41ade17)
      })
    })]
  })
}