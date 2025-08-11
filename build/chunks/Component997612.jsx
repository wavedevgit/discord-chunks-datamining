/** Chunk was on web.js **/
/** chunk id: 997612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => O,
  X: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk606669 = require("./606669.jsx"),
  Chunk53432 = require("./53432.jsx"),
  Chunk74869 = require("./74869.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk561134 = require("./561134.jsx"),
  Chunk988587 = require("./988587.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk142489 = require("./142489.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = (0, Chunk972959.H)(() => ({
  selected: null
}));

function v() {
  let e = (0, Chunk53432.Z)(),
    t = (0, Chunk606669.Z)(),
    n = (0, Chunk74869.Z)();
  return (0, Chunk255367.jsxs)(Chunk481060.v2r, {
    onSelect: Chunk231338.dG,
    navId: "playground-settings-menu",
    onClose: Chunk231338.dG,
    "aria-label": "Playground Settings",
    children: [(0, Chunk255367.jsx)(Chunk481060.sNh, {
      id: "appearance",
      label: Chunk388032.intl.string(Chunk388032.t["iHH+k5"]),
      children: module.filter(e => null != e)
    }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
      id: "accessibility",
      label: Chunk388032.intl.string(Chunk388032.t.G0neg4),
      children: exports.filter(e => null != e)
    }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
      id: "experiments",
      label: "Experiments",
      children: require.filter(e => null != e)
    })]
  })
}

function I() {
  let e = Chunk73800.useRef(null);
  return (0, Chunk255367.jsx)(Chunk481060.yRy, {
    targetElementRef: module,
    renderPopout: () => (0, Chunk255367.jsx)(v, {}),
    position: "bottom",
    align: "center",
    animation: Chunk481060.yRy.Animation.SCALE,
    onRequestClose: () => {},
    children: t => (0, r.jsx)(o.hU, y(E({
      size: "sm",
      icon: o.ewm,
      "aria-label": "Settings",
      variant: "icon-only"
    }, t), {
      buttonRef: e
    }))
  })
}

function T(e) {
  var t;
  let {
    config: n
  } = e, a = O.useField("selected"), {
    group: l,
    story: c
  } = i.useMemo(() => {
    var e;
    let t = n.groups.find(e => e.stories.some(e => e.id === a)),
      r = null != (e = null == t ? true : t.stories.find(e => e.id === a)) ? e : null;
    return {
      group: t,
      story: r
    }
  }, [a, n.groups]), u = e => {
    O.setState({
      selected: e
    })
  }, p = null != (t = null == l ? true : l.title) ? t : "Mana", h = null == c ? true : c.name, g = () => {
    let e = "dev://mana/".concat(null == c ? true : c.id);
    (0, d.JG)(e, () => (0, o.showToast)({
      id: "playground-link-copied",
      message: "Copied playground link",
      type: o.ToastType.SUCCESS
    }))
  };
  return (0, r.jsxs)("div", {
    className: m.root,
    children: [(0, r.jsx)("div", {
      className: m.group,
      children: (0, r.jsx)(o.aRk, {
        children: (0, r.jsx)(o.ua7, {
          position: "right",
          text: "Mana Design System",
          children: e => (0, r.jsx)(o.LYs, y(E({}, e), {
            name: "Mana",
            selected: true
          }))
        })
      })
    }), (0, r.jsxs)("div", {
      className: m.content,
      children: [(0, r.jsxs)(s.ZP, {
        className: m.header,
        children: [null != p ? (0, r.jsx)(s.ZP.Title, {
          children: p
        }) : null, null != h ? (0, r.jsxs)(r.Fragment, {
          children: [null != p ? (0, r.jsx)(s.ZP.Caret, {
            className: m.headerDivider
          }) : null, (0, r.jsx)(s.ZP.Title, {
            children: h
          })]
        }) : null, (null == c ? true : c.docs) != null ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.ZP.Divider, {
            className: m.headerDivider
          }), (0, r.jsx)(s.ZP.Title, {
            children: (0, r.jsx)(o.eee, {
              href: c.docs,
              children: "Docs"
            })
          })]
        }) : null, null != c ? (0, r.jsx)(o.hU, {
          size: "sm",
          "aria-label": "Copy Link",
          variant: "icon-only",
          icon: o.TIy,
          onClick: g
        }) : null, (0, r.jsx)("div", {
          className: m.headerRight,
          children: (0, r.jsx)(I, {})
        })]
      }), (0, r.jsxs)("div", {
        className: m.page,
        children: [(0, r.jsx)("div", {
          className: m.sidebar,
          children: (0, r.jsx)(f.N, {
            groups: n.groups,
            selectedStory: a,
            onStorySelect: u
          })
        }), (0, r.jsx)("div", {
          className: m.content,
          children: null != c && null != l ? (0, r.jsx)(_.b, {
            story: c,
            groupTitle: l.title
          }) : null
        })]
      })]
    })]
  })
}