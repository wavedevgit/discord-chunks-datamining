/** Chunk was on 66548 **/
/** chunk id: 997612, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  $: () => k,
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
let k = (0, Chunk972959.H)(() => ({
  selectedCollection: null,
  selectedStory: null
}));

function T() {
  let e = (0, Chunk53432.Z)(),
    l = (0, Chunk606669.Z)(),
    t = (0, Chunk74869.Z)();
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

function D() {
  let e = Chunk647438.useRef(null);
  return (0, Chunk951288.jsx)(Chunk235874.y, {
    targetElementRef: module,
    renderPopout: () => (0, Chunk951288.jsx)(T, {}),
    position: "bottom",
    align: "center",
    animation: Chunk235874.y.Animation.SCALE,
    onRequestClose: () => {},
    children: l => {
      var t, n;
      return (0, a.jsx)(m.hU, (t = function(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            a = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), a.forEach(function(l) {
            var a;
            a = t[l], l in e ? Object.defineProperty(e, l, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[l] = a
          })
        }
        return e
      }({
        size: "sm",
        icon: o.ewm,
        "aria-label": "Settings",
        variant: "icon-only"
      }, l), n = n = {
        buttonRef: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, l) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t.push.apply(t, a)
        }
        return t
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}

function M(e) {
  var l;
  let {
    config: t
  } = e, u = k.useField("selectedCollection"), d = k.useField("selectedStory"), {
    collection: b,
    group: f,
    story: h
  } = n.useMemo(() => {
    var e;
    let l = null != u ? t.collections.find(e => e.id === u) : t.collections[0];
    if (null == l) return {
      collection: null,
      group: null,
      story: null
    };
    let a = l.groups.find(e => e.stories.some(e => e.id === d)),
      n = null != (e = null == a ? true : a.stories.find(e => e.id === d)) ? e : null;
    return {
      collection: l,
      group: a,
      story: n
    }
  }, [u, d, t.collections]), x = null != (l = null == b ? true : b.name) ? l : "Design System", g = null == h ? true : h.name;
  return (0, a.jsxs)("div", {
    className: P.root,
    children: [(0, a.jsx)("div", {
      className: P.group,
      children: t.collections.map(e => {
        var l;
        return (0, a.jsx)(s.a, {
          children: (0, a.jsx)(y.u, {
            position: "right",
            text: "".concat(e.name, " Design System"),
            children: (0, a.jsx)(c.L, {
              name: e.name,
              selected: (null != u ? u : null == (l = t.collections[0]) ? true : l.id) === e.id,
              onClick: () => {
                var l;
                return l = e.id, void k.setState({
                  selectedCollection: l,
                  selectedStory: null
                })
              }
            })
          })
        }, e.id)
      })
    }), (0, a.jsxs)("div", {
      className: P.content,
      children: [(0, a.jsxs)(v.ZP, {
        className: P.header,
        children: [null != x ? (0, a.jsx)(v.ZP.Title, {
          children: x
        }) : null, null != g ? (0, a.jsxs)(a.Fragment, {
          children: [null != x ? (0, a.jsx)(v.ZP.Caret, {
            className: P.headerDivider
          }) : null, (0, a.jsx)(v.ZP.Title, {
            children: g
          })]
        }) : null, (null == h ? true : h.docs) != null ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(v.ZP.Divider, {
            className: P.headerDivider
          }), (0, a.jsx)(v.ZP.Title, {
            children: (0, a.jsx)(r.Anchor, {
              href: h.docs,
              children: "Docs"
            })
          })]
        }) : null, null != h ? (0, a.jsx)(m.hU, {
          size: "sm",
          "aria-label": "Copy Link",
          variant: "icon-only",
          icon: o.TIy,
          onClick: () => {
            var e;
            let l = "dev://".concat(null != (e = t.playgroundBaseUrl) ? e : "mana", "/").concat(null == h ? true : h.id);
            (0, O.JG)(l, () => (0, p.CF)({
              id: "playground-link-copied",
              message: "Copied playground link",
              type: w.pC.SUCCESS
            }))
          }
        }) : null, (0, a.jsx)("div", {
          className: P.headerRight,
          children: (0, a.jsx)(D, {})
        })]
      }), (0, a.jsxs)("div", {
        className: P.page,
        children: [(0, a.jsx)(i.zJl, {
          fade: true,
          className: P.sidebar,
          children: null != b ? (0, a.jsx)(j.N, {
            groups: b.groups,
            selectedStory: d,
            onStorySelect: e => {
              k.setState({
                selectedStory: e
              })
            }
          }) : null
        }), (0, a.jsx)("div", {
          className: P.content,
          children: null != h && null != f ? (0, a.jsx)(V.b, {
            story: h,
            groupTitle: f.title
          }) : null
        })]
      })]
    })]
  })
}