/** Chunk was on web.js **/
/** chunk id: 997612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => D,
  X: () => M
});
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
  Chunk561134 = require("./561134.jsx"),
  Chunk988587 = require("./988587.jsx"),
  Chunk561466 = require("./561466.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624315 = require("./624315.js");

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

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = (0, Chunk972959.H)(() => ({
  selectedCollection: null,
  selectedStory: null
}));

function L() {
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

function x() {
  let e = Chunk647438.useRef(null);
  return (0, Chunk951288.jsx)(Chunk235874.y, {
    targetElementRef: module,
    renderPopout: () => (0, Chunk951288.jsx)(L, {}),
    position: "bottom",
    align: "center",
    animation: Chunk235874.y.Animation.SCALE,
    onRequestClose: () => {},
    children: t => (0, r.jsx)(h.hU, w(R({
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
    config: n
  } = e, c = D.useField("selectedCollection"), u = D.useField("selectedStory"), {
    collection: f,
    group: m,
    story: E
  } = i.useMemo(() => {
    var e;
    let t = null != c ? n.collections.find(e => e.id === c) : n.collections[0];
    if (null == t) return {
      collection: null,
      group: null,
      story: null
    };
    let r = t.groups.find(e => e.stories.some(e => e.id === u)),
      i = null != (e = null == r ? true : r.stories.find(e => e.id === u)) ? e : null;
    return {
      collection: t,
      group: r,
      story: i
    }
  }, [c, u, n.collections]), b = e => {
    D.setState({
      selectedCollection: e,
      selectedStory: null
    })
  }, y = e => {
    D.setState({
      selectedStory: e
    })
  }, S = null != (t = null == f ? true : f.name) ? t : "Design System", A = null == E ? true : E.name, N = () => {
    let e = "dev://mana/".concat(null == E ? true : E.id);
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
      children: n.collections.map(e => {
        var t;
        return (0, r.jsx)(l.a, {
          children: (0, r.jsx)(p.u, {
            position: "right",
            text: "".concat(e.name, " Design System"),
            children: (0, r.jsx)(d.L, {
              name: e.name,
              selected: (null != c ? c : null == (t = n.collections[0]) ? true : t.id) === e.id,
              onClick: () => b(e.id)
            })
          })
        }, e.id)
      })
    }), (0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsxs)(g.ZP, {
        className: C.header,
        children: [null != S ? (0, r.jsx)(g.ZP.Title, {
          children: S
        }) : null, null != A ? (0, r.jsxs)(r.Fragment, {
          children: [null != S ? (0, r.jsx)(g.ZP.Caret, {
            className: C.headerDivider
          }) : null, (0, r.jsx)(g.ZP.Title, {
            children: A
          })]
        }) : null, (null == E ? true : E.docs) != null ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(g.ZP.Divider, {
            className: C.headerDivider
          }), (0, r.jsx)(g.ZP.Title, {
            children: (0, r.jsx)(s.Anchor, {
              href: E.docs,
              children: "Docs"
            })
          })]
        }) : null, null != E ? (0, r.jsx)(h.hU, {
          size: "sm",
          "aria-label": "Copy Link",
          variant: "icon-only",
          icon: a.TIy,
          onClick: N
        }) : null, (0, r.jsx)("div", {
          className: C.headerRight,
          children: (0, r.jsx)(x, {})
        })]
      }), (0, r.jsxs)("div", {
        className: C.page,
        children: [(0, r.jsx)(o.zJl, {
          fade: true,
          className: C.sidebar,
          children: null != f ? (0, r.jsx)(v.N, {
            groups: f.groups,
            selectedStory: u,
            onStorySelect: y
          }) : null
        }), (0, r.jsx)("div", {
          className: C.content,
          children: null != E && null != m ? (0, r.jsx)(I.b, {
            story: E,
            groupTitle: m.title
          }) : null
        })]
      })]
    })]
  })
}