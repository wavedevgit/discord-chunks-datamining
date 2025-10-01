/** Chunk was on 46746 **/
/** chunk id: 328242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk320724 = require("./320724.js"),
  Chunk569984 = require("./569984.js"),
  Chunk63063 = require("./63063.js"),
  Chunk215915 = require("./215915.js"),
  Chunk855403 = require("./855403.js"),
  Chunk567126 = require("./567126.jsx"),
  Chunk615161 = require("./615161.jsx"),
  Chunk137349 = require("./137349.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk615770 = require("./615770.js");

function b(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(o.vA.SCREEN) ? (0, r.jsx)(c.pzj, {
    size: "xs"
  }) : t.id.startsWith(o.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, r.jsx)("img", {
    src: t.icon,
    className: j.sourceIcon,
    alt: ""
  }) : (0, r.jsx)(c.GON, {
    size: "xs"
  }) : (0, r.jsx)(c.Odl, {
    size: "xs"
  })
}

function S(e) {
  let {
    source: t,
    selected: n,
    onClick: i
  } = e, {
    url: l,
    name: o
  } = t;
  return (0, r.jsxs)(c.P3F, {
    onClick: () => i(t),
    className: s()(j.source, {
      [j.selectedSource]: n
    }),
    children: [(0, r.jsx)("div", {
      className: j.sourcePreviewContainer,
      children: (0, r.jsxs)("div", {
        className: j.sourcePreview,
        children: [(0, r.jsx)("img", {
          src: l,
          className: j.sourcePreviewImage,
          alt: ""
        }), (0, r.jsx)("div", {
          className: j.sourceOverlay,
          children: (0, r.jsx)("div", {
            className: j.sourceOverlayCTA,
            children: (0, r.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "button-filled-white-text",
              children: v.intl.string(v.t.z7WGho)
            })
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: j.sourceNameContainer,
      children: [(0, r.jsx)(b, {
        source: t
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: j.sourceName,
        children: o
      })]
    })]
  })
}

function C(e) {
  let {
    onClick: t
  } = e, [{
    windowSources: n,
    deviceSources: l,
    screenSources: s,
    sourceType: m,
    fetchingSources: _,
    selectedSource: v,
    discordSourceId: b
  }] = (0, x.E_)(), {
    smarterSourceOrdering: C
  } = (0, h.E)({
    location: "GoLiveSourceGrid"
  }), O = (0, a.e7)([d.ZP], () => d.ZP.getRunningGames()), w = (0, a.cj)([d.ZP], () => {
    let e = d.ZP.getCandidateGames(),
      t = {};
    for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
    return t
  }), Z = (0, a.e7)([f.Z], () => f.Z.quests), I = (0, g.jx)(Z, O, n);
  i.useEffect(() => ((0, u.Ky)(), u.P7), []);
  let N = i.useMemo(() => C ? [...n].sort((e, t) => (0, g.ov)(t, null == I ? true : I.source.id, b, w) - (0, g.ov)(e, null == I ? true : I.source.id, b, w)) : n, [I, C, n, b, w]);
  if (_) return (0, r.jsx)("div", {
    className: j.loading,
    children: (0, r.jsx)(c.$jN, {})
  });
  let P = [];
  return (P = m === o.vA.WINDOW ? N : m === o.vA.SCREEN ? s : l, m === o.vA.CAMERA && 0 === P.length) ? (0, r.jsx)(y, {}) : (0, r.jsx)("div", {
    className: j.root,
    children: P.map(e => (0, r.jsx)(S, {
      onClick: t,
      source: e,
      selected: null != v && "windowHandle" in v ? (0, p.Z)(e.id, v.windowHandle) : (null == v ? true : v.id) === e.id
    }, e.id))
  })
}

function y() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk615770.emptyState,
    children: [(0, Chunk951288.jsx)(Chunk481060.Odl, {
      size: "md",
      color: Chunk481060.TVs.colors.ICON_MUTED,
      className: Chunk615770.emptyIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      className: Chunk615770.emptyHeader,
      children: Chunk388032.intl.string(Chunk137349.default["/z3YaW"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: Chunk615770.emptyBody,
      children: Chunk388032.intl.string(Chunk137349.default.agwSGB)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      children: Chunk388032.intl.format(Chunk137349.default.xpVzr6, {
        helpdeskURL: Chunk63063.Z.getArticleURL(0x53d41ade17)
      })
    })]
  })
}