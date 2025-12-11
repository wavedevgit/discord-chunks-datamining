/** Chunk was on 49910 **/
/** chunk id: 239191, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  DesktopRefreshOnboardingModal: () => k
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
  Chunk524423 = require("./524423.js");

function N(e) {
  let {
    options: t,
    selected: i,
    onSelect: n,
    showLabels: a,
    renderOptionContainer: d
  } = e;
  return (0, s.jsx)(o.Kqy, {
    direction: "horizontal",
    gap: 8,
    children: t.map((e, t) => {
      var r;
      let m = (0, s.jsx)(o.Kqy, {
        gap: 16,
        children: (0, s.jsx)(c.u, {
          text: e.label,
          shouldShow: !a && true,
          asContainer: true,
          children: (0, s.jsxs)(o.P3F, {
            "data-selected": e.id === i,
            onClick: () => n(e.id),
            className: l()(e.className, O.option),
            style: e.style,
            children: [a && (0, s.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-strong",
              children: e.label
            }), e.new && (0, s.jsx)(o.IGR, {
              color: o.TVs.colors.BACKGROUND_BRAND.css,
              text: f.intl.string(f.t.y2b7CA),
              className: O.new
            })]
          })
        })
      }, t);
      return null != (r = null == d ? true : d(e, m)) ? r : m
    })
  })
}
let C = [{
    id: Chunk231338.BR.LIGHT,
    label: Chunk388032.intl.string(Chunk388032.t.K2sFfo),
    className: l()("theme-light", Chunk524423.themeOption)
  }, {
    id: Chunk231338.BR.DARK,
    label: Chunk388032.intl.string(Chunk388032.t.SMPT1k),
    className: l()("theme-dark", Chunk524423.themeOption)
  }, {
    id: Chunk231338.BR.DARKER,
    label: Chunk388032.intl.string(Chunk388032.t.b8Cei3),
    className: l()("theme-darker", Chunk524423.themeOption),
    new: true
  }, {
    id: Chunk231338.BR.MIDNIGHT,
    label: Chunk388032.intl.string(Chunk388032.t.Do4ZJx),
    className: l()("theme-midnight", Chunk524423.themeOption),
    new: true
  }],
  v = [{
    id: "compact",
    label: Chunk388032.intl.string(Chunk388032.t["7iegX4"])
  }, {
    id: "default",
    label: Chunk388032.intl.string(Chunk388032.t.bBvAEH)
  }, {
    id: "cozy",
    label: Chunk388032.intl.string(Chunk388032.t["4cuYHx"])
  }];

function k(e) {
  let {
    transitionState: t,
    onClose: i
  } = e, [a] = n.useState(() => g.Z.gradientPreset), c = (0, d.e7)([x.Z], () => x.Z.theme), [b] = n.useState(() => u.ZP.useSystemTheme === j.KW.ON), [k, K] = n.useState(() => b ? "system" : null != a ? "gradient" : c), {
    density: _
  } = (0, o.TCT)(), R = n.useMemo(() => {
    if (null == a && !b) return C;
    let e = [...C];
    if (null != a) {
      let {
        colors: t,
        angle: i,
        theme: s,
        getName: n
      } = a, d = (0, p.VK)({
        colors: t,
        angle: i
      }), r = n();
      e.push({
        id: "gradient",
        label: r,
        className: l()((0, o.wjy)(s) ? O.darkOverlay : O.lightOverlay, O.themeOption),
        style: {
          background: "var(--background-gradient), ".concat(d)
        }
      })
    }
    return b && e.push({
      id: "system",
      label: f.intl.string(f.t["7rOU6j"]),
      className: O.themeOption
    }), e
  }, [a, b]), w = (0, h.Z)("(max-height: 800px)");
  return (0, s.jsxs)(o.Y0X, {
    transitionState: t,
    size: o.CgR.DYNAMIC,
    className: O.root,
    "data-modal-align": "top",
    parentComponent: "DesktopRefreshOnboardingModal",
    children: [(0, s.jsx)("div", {
      className: O.gradient
    }), (0, s.jsx)(o.xBx, {
      className: O.header,
      children: (0, s.jsxs)(o.Kqy, {
        gap: w ? 4 : 8,
        children: [(0, s.jsxs)(o.Kqy, {
          gap: w ? 8 : 16,
          children: [(0, s.jsx)("div", {
            className: O.headerImage
          }), (0, s.jsx)(o.Heading, {
            variant: w ? "heading-lg/semibold" : "heading-xl/semibold",
            color: "header-primary",
            children: f.intl.string(f.t["7+iCG4"])
          })]
        }), (0, s.jsx)(o.Heading, {
          variant: w ? "heading-sm/medium" : "heading-md/medium",
          color: "text-subtle",
          children: f.intl.string(f.t.fZMMqN)
        })]
      })
    }), (0, s.jsx)(o.hzk, {
      className: O.content,
      children: (0, s.jsxs)(o.Kqy, {
        gap: w ? 20 : 24,
        children: [(0, s.jsxs)(o.Kqy, {
          gap: w ? 8 : 12,
          children: [(0, s.jsx)(o.Heading, {
            variant: "heading-md/medium",
            children: f.intl.string(f.t.Ksh3ik)
          }), (0, s.jsx)(N, {
            showLabels: false,
            options: R,
            selected: k,
            onSelect: e => {
              K(e), "gradient" === e ? null != a && (0, m.ZI)({
                backgroundGradientPresetId: a.id,
                theme: a.theme
              }) : (0, m.ZI)({
                theme: e
              })
            },
            renderOptionContainer: (e, t) => "gradient" === e.id ? t : "system" === e.id ? (0, s.jsxs)(o.Kqy, {
              className: O.systemOption,
              children: [t, (0, s.jsx)(o.DuK, {
                size: "sm",
                className: O.systemIcon
              })]
            }) : (0, s.jsx)(o.f6W, {
              theme: e.id,
              disableAdaptiveTheme: true,
              children: e => (0, s.jsx)(o.Kqy, {
                className: e,
                children: t
              })
            })
          })]
        }), (0, s.jsxs)(o.Kqy, {
          gap: w ? 8 : 12,
          children: [(0, s.jsxs)(o.Kqy, {
            gap: 0,
            children: [(0, s.jsxs)(o.Kqy, {
              direction: "horizontal",
              gap: 4,
              align: "center",
              children: [(0, s.jsx)(o.Heading, {
                variant: "heading-md/medium",
                children: f.intl.string(f.t["C/5V0A"])
              }), (0, s.jsx)(o.IGR, {
                color: o.TVs.colors.BACKGROUND_BRAND.css,
                text: f.intl.string(f.t.y2b7CA)
              })]
            }), (0, s.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: f.intl.string(f.t["2w1sEO"])
            })]
          }), (0, s.jsx)(N, {
            showLabels: true,
            options: v,
            selected: _,
            onSelect: e => {
              switch (e) {
                case "default":
                  y.YC.updateSetting(r.Pi.DEFAULT);
                  break;
                case "compact":
                  y.YC.updateSetting(r.Pi.COMPACT);
                  break;
                case "cozy":
                  y.YC.updateSetting(r.Pi.COZY)
              }
            }
          })]
        })]
      })
    }), (0, s.jsx)(o.mzw, {
      className: O.footer,
      children: (0, s.jsx)(o.Button, {
        variant: "primary",
        text: f.intl.string(f.t["1Qm822"]),
        onClick: i
      })
    })]
  })
}