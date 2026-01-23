/** Chunk was on web.js **/
/** chunk id: 3258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Playground: () => j,
  PlaygroundStore: () => D
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk349288 = require("./349288.jsx"),
  Chunk862328 = require("./862328.jsx"),
  Chunk861672 = require("./861672.jsx"),
  Chunk477782 = require("./477782.js"),
  Chunk67811 = require("./67811.jsx"),
  Chunk265872 = require("./265872.jsx"),
  Chunk691540 = require("./691540.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk839214 = require("./839214.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk380450 = require("./380450.jsx"),
  Chunk227542 = require("./227542.jsx"),
  Chunk84654 = require("./84654.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk470586 = require("./470586.jsx"),
  Chunk648339 = require("./648339.jsx"),
  Chunk97483 = require("./97483.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk94576 = require("./94576.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = (0, Chunk839214.D)(() => ({
  selectedCollection: null,
  selectedStory: null,
  controlsLayout: "right"
}));

function x() {
  let e = (0, y.A)(),
    t = (0, E.A)(),
    n = (0, b.A)(),
    a = D.useField("controlsLayout"),
    s = i.useMemo(() => (0, r.jsxs)(u.rX, {
      label: "Controls",
      children: [(0, r.jsx)(u.iD, {
        id: "controls-right",
        group: "controls-layout",
        label: "Right Side",
        action: () => D.setState({
          controlsLayout: "right"
        }),
        checked: "right" === a
      }), (0, r.jsx)(u.iD, {
        id: "controls-bottom",
        group: "controls-layout",
        label: "Bottom",
        action: () => D.setState({
          controlsLayout: "bottom"
        }),
        checked: "bottom" === a
      }), (0, r.jsx)(u.iD, {
        id: "controls-hidden",
        group: "controls-layout",
        label: "Hidden",
        action: () => D.setState({
          controlsLayout: "hidden"
        }),
        checked: "hidden" === a
      })]
    }, "controls-layout"), [a]);
  return (0, r.jsxs)(c.W, {
    onSelect: S.tE,
    navId: "playground-settings-menu",
    onClose: S.tE,
    "aria-label": "Playground Settings",
    children: [(0, r.jsx)(u.Dr, {
      id: "appearance",
      label: T.intl.string(T.t["iHH+ky"]),
      children: [...e.filter(e => null != e), s]
    }), (0, r.jsx)(u.Dr, {
      id: "accessibility",
      label: T.intl.string(T.t.G0neg7),
      children: t.filter(e => null != e)
    }), (0, r.jsx)(u.Dr, {
      id: "experiments",
      label: "Experiments",
      children: n.filter(e => null != e)
    })]
  })
}

function L() {
  let e = i.useRef(null);
  return (0, r.jsx)(f.Y, {
    targetElementRef: e,
    renderPopout: () => (0, r.jsx)(x, {}),
    position: "bottom",
    align: "center",
    animation: f.Y.Animation.SCALE,
    onRequestClose: () => {},
    children: t => (0, r.jsx)(h.K0, P(w({
      size: "sm",
      icon: a.SettingsIcon,
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
  } = e, c = D.useField("selectedCollection"), u = D.useField("selectedStory"), f = D.useField("controlsLayout"), m = i.useMemo(() => n.flatMap(e => e.collections), [n]), {
    collection: E,
    group: y,
    story: b
  } = i.useMemo(() => {
    var e;
    let t = null != c ? m.find(e => e.id === c) : m[0];
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
  }, [c, u, m]), S = e => {
    D.setState({
      selectedCollection: e,
      selectedStory: null
    })
  }, T = e => {
    D.setState({
      selectedStory: e
    })
  }, N = null != (t = null == E ? true : E.name) ? t : "Design System", w = null == b ? true : b.name, R = () => {
    if (null == E) return;
    let e = null != b ? "dev://playground/".concat(E.id, "/").concat(b.id) : "dev://playground/".concat(E.id);
    (0, O.C)(e, () => (0, p.P0)({
      id: "playground-link-copied",
      message: "Copied playground link",
      type: I.Ck.SUCCESS
    }))
  };
  return (0, r.jsxs)("div", {
    className: C.zr,
    children: [(0, r.jsx)("div", {
      className: C.Os,
      children: m.map(e => {
        var t;
        return (0, r.jsx)(l.Q, {
          children: (0, r.jsx)(_.m, {
            position: "right",
            text: "".concat(e.name, " Design System"),
            children: (0, r.jsx)(d.j, {
              name: e.name,
              selected: (null != c ? c : null == (t = m[0]) ? true : t.id) === e.id,
              onClick: () => S(e.id)
            })
          })
        }, e.id)
      })
    }), (0, r.jsxs)("div", {
      className: C.Qs,
      children: [(0, r.jsxs)(g.Ay, {
        className: C.wx,
        children: [null != N ? (0, r.jsx)(g.Ay.Title, {
          children: N
        }) : null, null != w ? (0, r.jsxs)(r.Fragment, {
          children: [null != N ? (0, r.jsx)(g.Ay.Caret, {
            className: C.zN
          }) : null, (0, r.jsx)(g.Ay.Title, {
            children: w
          })]
        }) : null, (null == b ? true : b.docs) != null ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(g.Ay.Divider, {
            className: C.zN
          }), (0, r.jsx)(g.Ay.Title, {
            children: (0, r.jsx)(o.Anchor, {
              href: b.docs,
              children: "Docs"
            })
          })]
        }) : null, null != E ? (0, r.jsx)(h.K0, {
          size: "sm",
          "aria-label": "Copy Link",
          variant: "icon-only",
          icon: a.CopyIcon,
          onClick: R
        }) : null, (0, r.jsx)("div", {
          className: C.IE,
          children: (0, r.jsx)(L, {})
        })]
      }), (0, r.jsxs)("div", {
        className: C.MY,
        children: [(0, r.jsx)(s.IpV, {
          fade: true,
          className: C.pz,
          children: null != E ? (0, r.jsx)(v._, {
            groups: E.groups,
            selectedStory: u,
            onStorySelect: T
          }) : null
        }), (0, r.jsx)("div", {
          className: C.Qs,
          children: null != b && null != y ? (0, r.jsx)(A.z, {
            story: b,
            groupTitle: y.title,
            controlsLayout: f
          }) : null
        })]
      })]
    })]
  })
}