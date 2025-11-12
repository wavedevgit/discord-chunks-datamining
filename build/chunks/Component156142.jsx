/** Chunk was on web.js **/
/** chunk id: 156142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Playground: () => M,
  PlaygroundStore: () => w
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function R(e) {
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

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = (0, Chunk972959.H)(() => ({
  selectedCollection: null,
  selectedStory: null
}));

function x() {
  let e = (0, Chunk53432.Z)(),
    t = (0, Chunk606669.Z)(),
    n = (0, Chunk74869.Z)();
  return (0, Chunk951288.jsxs)(Chunk830447.v, {
    onSelect: Chunk231338.dG,
    navId: "playground-settings-menu",
    onClose: Chunk231338.dG,
    "aria-label": "Playground Settings",
    children: [(0, Chunk951288.jsx)(Chunk828214.sN, {
      id: "appearance",
      label: Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
      children: module.filter(e => null != e)
    }), (0, Chunk951288.jsx)(Chunk828214.sN, {
      id: "accessibility",
      label: Chunk388032.intl.string(Chunk388032.t.G0neg7),
      children: exports.filter(e => null != e)
    }), (0, Chunk951288.jsx)(Chunk828214.sN, {
      id: "experiments",
      label: "Experiments",
      children: require.filter(e => null != e)
    })]
  })
}

function L() {
  let e = Chunk647438.useRef(null);
  return (0, Chunk951288.jsx)(Chunk235874.y, {
    targetElementRef: module,
    renderPopout: () => (0, Chunk951288.jsx)(x, {}),
    position: "bottom",
    align: "center",
    animation: Chunk235874.y.Animation.SCALE,
    onRequestClose: () => {},
    children: t => (0, r.jsx)(h.hU, D(R({
      size: "sm",
      icon: a.ewm,
      "aria-label": "Settings",
      variant: "icon-only"
    }, t), {
      buttonRef: e
    }))
  })
}

function M(e) {
  var t;
  let {
    configs: n
  } = e, c = w.useField("selectedCollection"), u = w.useField("selectedStory"), f = i.useMemo(() => n.flatMap(e => e.collections), [n]), {
    collection: m,
    group: E,
    story: b
  } = i.useMemo(() => {
    var e;
    let t = null != c ? f.find(e => e.id === c) : f[0];
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
  }, [c, u, f]), y = e => {
    w.setState({
      selectedCollection: e,
      selectedStory: null
    })
  }, S = e => {
    w.setState({
      selectedStory: e
    })
  }, A = null != (t = null == m ? true : m.name) ? t : "Design System", N = null == b ? true : b.name, R = () => {
    if (null == m) return;
    let e = null != b ? "dev://playground/".concat(m.id, "/").concat(b.id) : "dev://playground/".concat(m.id);
    (0, O.JG)(e, () => (0, _.CF)({
      id: "playground-link-copied",
      message: "Copied playground link",
      type: T.pC.SUCCESS
    }))
  };
  return (0, r.jsxs)("div", {
    className: C.root,
    children: [(0, r.jsx)("div", {
      className: C.group,
      children: f.map(e => {
        var t;
        return (0, r.jsx)(l.a, {
          children: (0, r.jsx)(p.u, {
            position: "right",
            text: "".concat(e.name, " Design System"),
            children: (0, r.jsx)(d.L, {
              name: e.name,
              selected: (null != c ? c : null == (t = f[0]) ? true : t.id) === e.id,
              onClick: () => y(e.id)
            })
          })
        }, e.id)
      })
    }), (0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsxs)(g.ZP, {
        className: C.header,
        children: [null != A ? (0, r.jsx)(g.ZP.Title, {
          children: A
        }) : null, null != N ? (0, r.jsxs)(r.Fragment, {
          children: [null != A ? (0, r.jsx)(g.ZP.Caret, {
            className: C.headerDivider
          }) : null, (0, r.jsx)(g.ZP.Title, {
            children: N
          })]
        }) : null, (null == b ? true : b.docs) != null ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(g.ZP.Divider, {
            className: C.headerDivider
          }), (0, r.jsx)(g.ZP.Title, {
            children: (0, r.jsx)(s.Anchor, {
              href: b.docs,
              children: "Docs"
            })
          })]
        }) : null, null != m ? (0, r.jsx)(h.hU, {
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
          children: null != m ? (0, r.jsx)(v.N, {
            groups: m.groups,
            selectedStory: u,
            onStorySelect: S
          }) : null
        }), (0, r.jsx)("div", {
          className: C.content,
          children: null != b && null != E ? (0, r.jsx)(I.b, {
            story: b,
            groupTitle: E.title
          }) : null
        })]
      })]
    })]
  })
}