/** Chunk was on 49910 **/
/** chunk id: 239191, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  DesktopRefreshOnboardingModal: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk28664 = require("./28664.jsx"),
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

function N(e) {
  let {
    options: t,
    selected: i,
    onSelect: n,
    showLabels: a,
    renderOptionContainer: r
  } = e;
  return (0, s.jsx)(c.Kqy, {
    direction: "horizontal",
    gap: 8,
    children: t.map((e, t) => {
      var d;
      let m = (0, s.jsx)(c.Kqy, {
        gap: 16,
        children: (0, s.jsx)(o.u, {
          text: e.label,
          shouldShow: !a && true,
          asContainer: true,
          children: (0, s.jsxs)(c.P3F, {
            "data-selected": e.id === i,
            onClick: () => n(e.id),
            className: l()(e.className, O.option),
            style: e.style,
            children: [a && (0, s.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-primary",
              children: e.label
            }), e.new && (0, s.jsx)(c.IGR, {
              color: c.TVs.colors.BG_BRAND.css,
              text: b.intl.string(b.t.y2b7CA),
              className: O.new
            })]
          })
        })
      }, t);
      return null != (d = null == r ? true : r(e, m)) ? d : m
    })
  })
}
let v = [{
    id: Chunk231338.BR.LIGHT,
    label: Chunk388032.intl.string(Chunk388032.t.K2sFfo),
    className: l()("theme-light", Chunk3498.themeOption)
  }, {
    id: Chunk231338.BR.DARK,
    label: Chunk388032.intl.string(Chunk388032.t.SMPT1k),
    className: l()("theme-dark", Chunk3498.themeOption)
  }, {
    id: Chunk231338.BR.DARKER,
    label: Chunk388032.intl.string(Chunk388032.t.b8Cei3),
    className: l()("theme-darker", Chunk3498.themeOption),
    new: true
  }, {
    id: Chunk231338.BR.MIDNIGHT,
    label: Chunk388032.intl.string(Chunk388032.t.Do4ZJx),
    className: l()("theme-midnight", Chunk3498.themeOption),
    new: true
  }],
  k = [{
    id: "compact",
    label: Chunk388032.intl.string(Chunk388032.t["7iegX4"])
  }, {
    id: "default",
    label: Chunk388032.intl.string(Chunk388032.t.bBvAEH)
  }, {
    id: "cozy",
    label: Chunk388032.intl.string(Chunk388032.t["4cuYHx"])
  }];

function C(e) {
  let {
    transitionState: t,
    onClose: i
  } = e, [a] = n.useState(() => g.Z.gradientPreset), o = (0, r.e7)([x.Z], () => x.Z.theme), [_] = n.useState(() => u.ZP.useSystemTheme === j.KW.ON), [C, K] = n.useState(() => _ ? "system" : null != a ? "gradient" : o), {
    density: f
  } = (0, c.TCT)(), w = n.useMemo(() => {
    if (null == a && !_) return v;
    let e = [...v];
    if (null != a) {
      let {
        colors: t,
        angle: i,
        theme: s,
        getName: n
      } = a, r = (0, p.VK)({
        colors: t,
        angle: i
      }), d = n();
      e.push({
        id: "gradient",
        label: d,
        className: l()((0, c.wjy)(s) ? O.darkOverlay : O.lightOverlay, O.themeOption),
        style: {
          background: "var(--background-gradient), ".concat(r)
        }
      })
    }
    return _ && e.push({
      id: "system",
      label: b.intl.string(b.t["7rOU6j"]),
      className: O.themeOption
    }), e
  }, [a, _]), I = (0, h.Z)("(max-height: 800px)");
  return (0, s.jsxs)(c.Y0X, {
    transitionState: t,
    size: c.CgR.DYNAMIC,
    className: O.root,
    "data-modal-align": "top",
    parentComponent: "DesktopRefreshOnboardingModal",
    children: [(0, s.jsx)("div", {
      className: O.gradient
    }), (0, s.jsx)(c.xBx, {
      className: O.header,
      children: (0, s.jsxs)(c.Kqy, {
        gap: I ? 4 : 8,
        children: [(0, s.jsxs)(c.Kqy, {
          gap: I ? 8 : 16,
          children: [(0, s.jsx)("div", {
            className: O.headerImage
          }), (0, s.jsx)(c.Heading, {
            variant: I ? "heading-lg/semibold" : "heading-xl/semibold",
            color: "header-primary",
            children: b.intl.string(b.t["7+iCG4"])
          })]
        }), (0, s.jsx)(c.Heading, {
          variant: I ? "heading-sm/medium" : "heading-md/medium",
          color: "text-secondary",
          children: b.intl.string(b.t.fZMMqN)
        })]
      })
    }), (0, s.jsx)(c.hzk, {
      className: O.content,
      children: (0, s.jsxs)(c.Kqy, {
        gap: I ? 20 : 24,
        children: [(0, s.jsxs)(c.Kqy, {
          gap: I ? 8 : 12,
          children: [(0, s.jsx)(c.Heading, {
            variant: "heading-md/medium",
            children: b.intl.string(b.t.Ksh3ik)
          }), (0, s.jsx)(N, {
            showLabels: false,
            options: w,
            selected: C,
            onSelect: e => {
              K(e), "gradient" === e ? null != a && (0, m.ZI)({
                backgroundGradientPresetId: a.id,
                theme: a.theme
              }) : (0, m.ZI)({
                theme: e
              })
            },
            renderOptionContainer: (e, t) => "gradient" === e.id ? t : "system" === e.id ? (0, s.jsxs)(c.Kqy, {
              className: O.systemOption,
              children: [t, (0, s.jsx)(c.DuK, {
                size: "sm",
                className: O.systemIcon
              })]
            }) : (0, s.jsx)(c.f6W, {
              theme: e.id,
              disableAdaptiveTheme: true,
              children: e => (0, s.jsx)(c.Kqy, {
                className: e,
                children: t
              })
            })
          })]
        }), (0, s.jsxs)(c.Kqy, {
          gap: I ? 8 : 12,
          children: [(0, s.jsxs)(c.Kqy, {
            gap: 0,
            children: [(0, s.jsxs)(c.Kqy, {
              direction: "horizontal",
              gap: 4,
              align: "center",
              children: [(0, s.jsx)(c.Heading, {
                variant: "heading-md/medium",
                children: b.intl.string(b.t["C/5V0A"])
              }), (0, s.jsx)(c.IGR, {
                color: c.TVs.colors.BG_BRAND.css,
                text: b.intl.string(b.t.y2b7CA)
              })]
            }), (0, s.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: b.intl.string(b.t["2w1sEO"])
            })]
          }), (0, s.jsx)(N, {
            showLabels: true,
            options: k,
            selected: f,
            onSelect: e => {
              switch (e) {
                case "default":
                  y.YC.updateSetting(d.Pi.DEFAULT);
                  break;
                case "compact":
                  y.YC.updateSetting(d.Pi.COMPACT);
                  break;
                case "cozy":
                  y.YC.updateSetting(d.Pi.COZY)
              }
            }
          })]
        })]
      })
    }), (0, s.jsx)(c.mzw, {
      className: O.footer,
      children: (0, s.jsx)(c.Button, {
        variant: "primary",
        text: b.intl.string(b.t["1Qm822"]),
        onClick: i
      })
    })]
  })
}