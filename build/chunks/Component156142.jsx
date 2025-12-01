/** Chunk was on web.js **/
/** chunk id: 156142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Playground: () => j,
  PlaygroundStore: () => D
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk104140 = require("./104140.jsx"),
  Chunk830447 = require("./830447.jsx"),
  Chunk828214 = require("./828214.js"),
  Chunk327496 = require("./327496.jsx"),
  Chunk235874 = require("./235874.jsx"),
  Chunk417153 = require("./417153.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk972959 = require("./972959.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk606669 = require("./606669.jsx"),
  Chunk53432 = require("./53432.jsx"),
  Chunk74869 = require("./74869.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk736134 = require("./736134.jsx"),
  Chunk98763 = require("./98763.jsx"),
  Chunk561466 = require("./561466.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk409738 = require("./409738.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = (0, Chunk972959.H)(() => ({
  selectedCollection: null,
  selectedStory: null,
  controlsLayout: "right"
}));

function x() {
  let e = (0, Chunk53432.Z)(),
    t = (0, Chunk606669.Z)(),
    n = (0, Chunk74869.Z)(),
    a = D.useField("controlsLayout"),
    o = Chunk473749.useMemo(() => (0, Chunk54381.jsxs)(Chunk828214.kS, {
      label: "Controls",
      children: [(0, Chunk54381.jsx)(Chunk828214.k5, {
        id: "controls-right",
        group: "controls-layout",
        label: "Right Side",
        action: () => D.setState({
          controlsLayout: "right"
        }),
        checked: "right" === Chunk657707
      }), (0, Chunk54381.jsx)(Chunk828214.k5, {
        id: "controls-bottom",
        group: "controls-layout",
        label: "Bottom",
        action: () => D.setState({
          controlsLayout: "bottom"
        }),
        checked: "bottom" === Chunk657707
      }), (0, Chunk54381.jsx)(Chunk828214.k5, {
        id: "controls-hidden",
        group: "controls-layout",
        label: "Hidden",
        action: () => D.setState({
          controlsLayout: "hidden"
        }),
        checked: "hidden" === Chunk657707
      })]
    }, "controls-layout"), [Chunk657707]);
  return (0, Chunk54381.jsxs)(Chunk830447.v, {
    onSelect: Chunk231338.dG,
    navId: "playground-settings-menu",
    onClose: Chunk231338.dG,
    "aria-label": "Playground Settings",
    children: [(0, Chunk54381.jsx)(Chunk828214.sN, {
      id: "appearance",
      label: Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
      children: [...module.filter(e => null != e), Chunk793030]
    }), (0, Chunk54381.jsx)(Chunk828214.sN, {
      id: "accessibility",
      label: Chunk388032.intl.string(Chunk388032.t.G0neg7),
      children: exports.filter(e => null != e)
    }), (0, Chunk54381.jsx)(Chunk828214.sN, {
      id: "experiments",
      label: "Experiments",
      children: require.filter(e => null != e)
    })]
  })
}

function L() {
  let e = Chunk473749.useRef(null);
  return (0, Chunk54381.jsx)(Chunk235874.y, {
    targetElementRef: module,
    renderPopout: () => (0, Chunk54381.jsx)(x, {}),
    position: "bottom",
    align: "center",
    animation: Chunk235874.y.Animation.SCALE,
    onRequestClose: () => {},
    children: t => (0, r.jsx)(m.hU, w(P({
      size: "sm",
      icon: a.ewm,
      "aria-label": "Settings",
      variant: "icon-only"
    }, t), {
      buttonRef: e
    }))
  })
}

function j(e) {
  var t;
  let {
    configs: n
  } = e, c = D.useField("selectedCollection"), u = D.useField("selectedStory"), f = D.useField("controlsLayout"), h = i.useMemo(() => n.flatMap(e => e.collections), [n]), {
    collection: E,
    group: b,
    story: y
  } = i.useMemo(() => {
    var e;
    let t = null != c ? h.find(e => e.id === c) : h[0];
    if (null == t) return {
      collection: null,
      group: null,
      story: null
    };
    let n = t.groups.find(e => e.stories.some(e => e.id === u)),
      r = null != (e = null == n ? true : n.stories.find(e => e.id === u)) ? e : null;
    return {
      collection: t,
      group: n,
      story: r
    }
  }, [c, u, h]), T = e => {
    D.setState({
      selectedCollection: e,
      selectedStory: null
    })
  }, A = e => {
    D.setState({
      selectedStory: e
    })
  }, N = null != (t = null == E ? true : E.name) ? t : "Design System", P = null == y ? true : y.name, R = () => {
    if (null == E) return;
    let e = null != y ? "dev://playground/".concat(E.id, "/").concat(y.id) : "dev://playground/".concat(E.id);
    (0, O.JG)(e, () => (0, p.CF)({
      id: "playground-link-copied",
      message: "Copied playground link",
      type: I.pC.SUCCESS
    }))
  };
  return (0, r.jsxs)("div", {
    className: C.root,
    children: [(0, r.jsx)("div", {
      className: C.group,
      children: h.map(e => {
        var t;
        return (0, r.jsx)(l.a, {
          children: (0, r.jsx)(_.u, {
            position: "right",
            text: "".concat(e.name, " Design System"),
            children: (0, r.jsx)(d.L, {
              name: e.name,
              selected: (null != c ? c : null == (t = h[0]) ? true : t.id) === e.id,
              onClick: () => T(e.id)
            })
          })
        }, e.id)
      })
    }), (0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsxs)(g.ZP, {
        className: C.header,
        children: [null != N ? (0, r.jsx)(g.ZP.Title, {
          children: N
        }) : null, null != P ? (0, r.jsxs)(r.Fragment, {
          children: [null != N ? (0, r.jsx)(g.ZP.Caret, {
            className: C.headerDivider
          }) : null, (0, r.jsx)(g.ZP.Title, {
            children: P
          })]
        }) : null, (null == y ? true : y.docs) != null ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(g.ZP.Divider, {
            className: C.headerDivider
          }), (0, r.jsx)(g.ZP.Title, {
            children: (0, r.jsx)(s.Anchor, {
              href: y.docs,
              children: "Docs"
            })
          })]
        }) : null, null != E ? (0, r.jsx)(m.hU, {
          size: "sm",
          "aria-label": "Copy Link",
          variant: "icon-only",
          icon: a.TIy,
          onClick: R
        }) : null, (0, r.jsx)("div", {
          className: C.headerRight,
          children: (0, r.jsx)(L, {})
        })]
      }), (0, r.jsxs)("div", {
        className: C.page,
        children: [(0, r.jsx)(o.zJl, {
          fade: true,
          className: C.sidebar,
          children: null != E ? (0, r.jsx)(v.N, {
            groups: E.groups,
            selectedStory: u,
            onStorySelect: A
          }) : null
        }), (0, r.jsx)("div", {
          className: C.content,
          children: null != y && null != b ? (0, r.jsx)(S.b, {
            story: y,
            groupTitle: b.title,
            controlsLayout: f
          }) : null
        })]
      })]
    })]
  })
}