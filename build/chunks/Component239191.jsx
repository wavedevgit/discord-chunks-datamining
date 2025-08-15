/** Chunk was on 49910 **/
/** chunk id: 239191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DesktopRefreshOnboardingModal: () => w
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk131388 = require("./131388.js"),
  Chunk514361 = require("./514361.js"),
  Chunk47760 = require("./47760.js"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk874893 = require("./874893.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3498 = require("./3498.js");

function f(e) {
  let {
    options: t,
    selected: n,
    onSelect: r,
    showLabels: s,
    renderOptionContainer: l
  } = e;
  return (0, i.jsx)(c.Kqy, {
    direction: "horizontal",
    gap: 8,
    children: t.map((e, t) => {
      var o;
      let d = (0, i.jsx)(c.Kqy, {
        gap: 16,
        children: (0, i.jsx)(c.ua7, {
          text: e.label,
          shouldShow: !s && true,
          children: t => {
            var l, o;
            return (0, i.jsxs)(c.P3F, (l = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
                })
              }
              return e
            }({}, t), o = o = {
              "data-selected": e.id === n,
              onClick: () => r(e.id),
              className: a()(e.className, O.option),
              style: e.style,
              children: [s && (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-primary",
                children: e.label
              }), e.new && (0, i.jsx)(c.IGR, {
                color: c.TVs.colors.BG_BRAND.css,
                text: j.intl.string(j.t.y2b7CA),
                className: O.new
              })]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(o)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
            }), l))
          }
        })
      }, t);
      return null != (o = null == l ? true : l(e, d)) ? o : d
    })
  })
}
let _ = [{
    id: Chunk231338.BR.LIGHT,
    label: Chunk388032.intl.string(Chunk388032.t.K2sFfn),
    className: a()("theme-light", Chunk3498.themeOption)
  }, {
    id: Chunk231338.BR.DARK,
    label: Chunk388032.intl.string(Chunk388032.t.SMPT1t),
    className: a()("theme-dark", Chunk3498.themeOption)
  }, {
    id: Chunk231338.BR.DARKER,
    label: Chunk388032.intl.string(Chunk388032.t.b8Cei4),
    className: a()("theme-darker", Chunk3498.themeOption),
    new: true
  }, {
    id: Chunk231338.BR.MIDNIGHT,
    label: Chunk388032.intl.string(Chunk388032.t.Do4ZJy),
    className: a()("theme-midnight", Chunk3498.themeOption),
    new: true
  }],
  v = [{
    id: "compact",
    label: Chunk388032.intl.string(Chunk388032.t["7iegX1"])
  }, {
    id: "default",
    label: Chunk388032.intl.string(Chunk388032.t.bBvAEB)
  }, {
    id: "cozy",
    label: Chunk388032.intl.string(Chunk388032.t["4cuYHx"])
  }];

function w(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [s] = r.useState(() => h.Z.gradientPreset), b = (0, l.e7)([p.Z], () => p.Z.theme), [w] = r.useState(() => u.ZP.useSystemTheme === x.KW.ON), [N, k] = r.useState(() => w ? "system" : null != s ? "gradient" : b), {
    density: C
  } = (0, c.TCT)(), P = r.useMemo(() => {
    if (null == s && !w) return _;
    let e = [..._];
    if (null != s) {
      let {
        colors: t,
        angle: n,
        theme: i,
        getName: r
      } = s, l = (0, g.VK)({
        colors: t,
        angle: n
      }), o = r();
      e.push({
        id: "gradient",
        label: o,
        className: a()((0, c.wjy)(i) ? O.darkOverlay : O.lightOverlay, O.themeOption),
        style: {
          background: "var(--background-gradient), ".concat(l)
        }
      })
    }
    return w && e.push({
      id: "system",
      label: j.intl.string(j.t["7rOU6u"]),
      className: O.themeOption
    }), e
  }, [s, w]), K = (0, m.Z)("(max-height: 800px)");
  return (0, i.jsxs)(c.Y0X, {
    transitionState: t,
    size: c.CgR.DYNAMIC,
    className: O.root,
    "data-modal-align": "top",
    parentComponent: "DesktopRefreshOnboardingModal",
    children: [(0, i.jsx)("div", {
      className: O.gradient
    }), (0, i.jsx)(c.xBx, {
      className: O.header,
      children: (0, i.jsxs)(c.Kqy, {
        gap: K ? 4 : 8,
        children: [(0, i.jsxs)(c.Kqy, {
          gap: K ? 8 : 16,
          children: [(0, i.jsx)("div", {
            className: O.headerImage
          }), (0, i.jsx)(c.X6q, {
            variant: K ? "heading-lg/semibold" : "heading-xl/semibold",
            color: "header-primary",
            children: j.intl.string(j.t["7+iCGx"])
          })]
        }), (0, i.jsx)(c.X6q, {
          variant: K ? "heading-sm/medium" : "heading-md/medium",
          color: "text-secondary",
          children: j.intl.string(j.t.fZMMqK)
        })]
      })
    }), (0, i.jsx)(c.hzk, {
      className: O.content,
      children: (0, i.jsxs)(c.Kqy, {
        gap: K ? 20 : 24,
        children: [(0, i.jsxs)(c.Kqy, {
          gap: K ? 8 : 12,
          children: [(0, i.jsx)(c.X6q, {
            variant: "heading-md/medium",
            children: j.intl.string(j.t.Ksh3io)
          }), (0, i.jsx)(f, {
            showLabels: false,
            options: P,
            selected: N,
            onSelect: e => {
              k(e), "gradient" === e ? null != s && (0, d.ZI)({
                backgroundGradientPresetId: s.id,
                theme: s.theme
              }) : (0, d.ZI)({
                theme: e
              })
            },
            renderOptionContainer: (e, t) => "gradient" === e.id ? t : "system" === e.id ? (0, i.jsxs)(c.Kqy, {
              className: O.systemOption,
              children: [t, (0, i.jsx)(c.DuK, {
                size: "sm",
                className: O.systemIcon
              })]
            }) : (0, i.jsx)(c.f6W, {
              theme: e.id,
              disableAdaptiveTheme: true,
              children: e => (0, i.jsx)(c.Kqy, {
                className: e,
                children: t
              })
            })
          })]
        }), (0, i.jsxs)(c.Kqy, {
          gap: K ? 8 : 12,
          children: [(0, i.jsxs)(c.Kqy, {
            gap: 0,
            children: [(0, i.jsxs)(c.Kqy, {
              direction: "horizontal",
              gap: 4,
              align: "center",
              children: [(0, i.jsx)(c.X6q, {
                variant: "heading-md/medium",
                children: j.intl.string(j.t["C/5V0N"])
              }), (0, i.jsx)(c.IGR, {
                color: c.TVs.colors.BG_BRAND.css,
                text: j.intl.string(j.t.y2b7CA)
              })]
            }), (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: j.intl.string(j.t["2w1sEB"])
            })]
          }), (0, i.jsx)(f, {
            showLabels: true,
            options: v,
            selected: C,
            onSelect: e => {
              switch (e) {
                case "default":
                  y.YC.updateSetting(o.Pi.DEFAULT);
                  break;
                case "compact":
                  y.YC.updateSetting(o.Pi.COMPACT);
                  break;
                case "cozy":
                  y.YC.updateSetting(o.Pi.COZY)
              }
            }
          })]
        })]
      })
    }), (0, i.jsx)(c.mzw, {
      className: O.footer,
      children: (0, i.jsx)(c.zxk, {
        variant: "primary",
        text: j.intl.string(j.t["1Qm829"]),
        onClick: n
      })
    })]
  })
}