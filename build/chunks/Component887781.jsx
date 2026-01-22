/** Chunk was on 33638 **/
/** chunk id: 887781, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  DesktopRefreshOnboardingModal: () => k
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk241524 = require("./241524.js"),
  Chunk47671 = require("./47671.js"),
  Chunk644235 = require("./644235.js"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk185928 = require("./185928.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk96877 = require("./96877.js");

function A(e) {
  let {
    options: t,
    selected: s,
    onSelect: i,
    showLabels: l,
    renderOptionContainer: r
  } = e;
  return (0, a.jsx)(o.BJc, {
    direction: "horizontal",
    gap: 8,
    children: t.map((e, t) => {
      var c;
      let m = (0, a.jsx)(o.BJc, {
        gap: 16,
        children: (0, a.jsx)(d.m, {
          text: e.label,
          shouldShow: !l && true,
          asContainer: true,
          children: (0, a.jsxs)(o.DUT, {
            "data-selected": e.id === s,
            onClick: () => i(e.id),
            className: n()(e.className, D.uK),
            style: e.style,
            children: [l && (0, a.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-strong",
              children: e.label
            }), e.new && (0, a.jsx)(o.LpS, {
              color: o.LU0.colors.BACKGROUND_BRAND.css,
              text: f.intl.string(f.t.y2b7CA),
              className: D.Hl
            })]
          })
        })
      }, t);
      return null != (c = null == r ? true : r(e, m)) ? c : m
    })
  })
}
let C = [{
    id: Chunk818348.NJ.LIGHT,
    label: Chunk985018.intl.string(Chunk985018.t.K2sFfo),
    className: n()("theme-light", Chunk96877.Du)
  }, {
    id: Chunk818348.NJ.DARK,
    label: Chunk985018.intl.string(Chunk985018.t.SMPT1k),
    className: n()("theme-dark", Chunk96877.Du)
  }, {
    id: Chunk818348.NJ.DARKER,
    label: Chunk985018.intl.string(Chunk985018.t.b8Cei3),
    className: n()("theme-darker", Chunk96877.Du),
    new: true
  }, {
    id: Chunk818348.NJ.MIDNIGHT,
    label: Chunk985018.intl.string(Chunk985018.t.Do4ZJx),
    className: n()("theme-midnight", Chunk96877.Du),
    new: true
  }],
  J = [{
    id: "compact",
    label: Chunk985018.intl.string(Chunk985018.t["7iegX4"])
  }, {
    id: "default",
    label: Chunk985018.intl.string(Chunk985018.t.bBvAEH)
  }, {
    id: "cozy",
    label: Chunk985018.intl.string(Chunk985018.t["4cuYHx"])
  }];

function k(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [l] = i.useState(() => g.A.gradientPreset), d = (0, r.bG)([x.A], () => x.A.theme), [j] = i.useState(() => b.Ay.useSystemTheme === N.Q_.ON), [k, B] = i.useState(() => j ? "system" : null != l ? "gradient" : d), {
    density: S
  } = (0, o.wRf)(), v = i.useMemo(() => {
    if (null == l && !j) return C;
    let e = [...C];
    if (null != l) {
      let {
        colors: t,
        angle: s,
        theme: a,
        getName: i
      } = l, r = (0, u.FK)({
        colors: t,
        angle: s
      }), c = i();
      e.push({
        id: "gradient",
        label: c,
        className: n()((0, o.Mwr)(a) ? D.Xu : D.VO, D.Du),
        style: {
          background: "var(--background-gradient), ".concat(r)
        }
      })
    }
    return j && e.push({
      id: "system",
      label: f.intl.string(f.t["7rOU6j"]),
      className: D.Du
    }), e
  }, [l, j]), _ = (0, h.A)("(max-height: 800px)");
  return (0, a.jsxs)(o.EOs, {
    transitionState: t,
    size: o.rIJ.DYNAMIC,
    className: D.zr,
    "data-modal-align": "top",
    parentComponent: "DesktopRefreshOnboardingModal",
    children: [(0, a.jsx)("div", {
      className: D.D7
    }), (0, a.jsx)(o.rQ0, {
      className: D.wx,
      children: (0, a.jsxs)(o.BJc, {
        gap: _ ? 4 : 8,
        children: [(0, a.jsxs)(o.BJc, {
          gap: _ ? 8 : 16,
          children: [(0, a.jsx)("div", {
            className: D.F0
          }), (0, a.jsx)(o.Heading, {
            variant: _ ? "heading-lg/semibold" : "heading-xl/semibold",
            color: "text-strong",
            children: f.intl.string(f.t["7+iCG4"])
          })]
        }), (0, a.jsx)(o.Heading, {
          variant: _ ? "heading-sm/medium" : "heading-md/medium",
          color: "text-subtle",
          children: f.intl.string(f.t.fZMMqN)
        })]
      })
    }), (0, a.jsx)(o.$mQ, {
      className: D.Qs,
      children: (0, a.jsxs)(o.BJc, {
        gap: _ ? 20 : 24,
        children: [(0, a.jsxs)(o.BJc, {
          gap: _ ? 8 : 12,
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-md/medium",
            children: f.intl.string(f.t.Ksh3ik)
          }), (0, a.jsx)(A, {
            showLabels: false,
            options: v,
            selected: k,
            onSelect: e => {
              B(e), "gradient" === e ? null != l && (0, m.u_)({
                backgroundGradientPresetId: l.id,
                theme: l.theme
              }) : (0, m.u_)({
                theme: e
              })
            },
            renderOptionContainer: (e, t) => "gradient" === e.id ? t : "system" === e.id ? (0, a.jsxs)(o.BJc, {
              className: D.fp,
              children: [t, (0, a.jsx)(o.fNY, {
                size: "sm",
                className: D.$l
              })]
            }) : (0, a.jsx)(o.NPJ, {
              theme: e.id,
              disableAdaptiveTheme: true,
              children: e => (0, a.jsx)(o.BJc, {
                className: e,
                children: t
              })
            })
          })]
        }), (0, a.jsxs)(o.BJc, {
          gap: _ ? 8 : 12,
          children: [(0, a.jsxs)(o.BJc, {
            gap: 0,
            children: [(0, a.jsxs)(o.BJc, {
              direction: "horizontal",
              gap: 4,
              align: "center",
              children: [(0, a.jsx)(o.Heading, {
                variant: "heading-md/medium",
                children: f.intl.string(f.t["C/5V0A"])
              }), (0, a.jsx)(o.LpS, {
                color: o.LU0.colors.BACKGROUND_BRAND.css,
                text: f.intl.string(f.t.y2b7CA)
              })]
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: f.intl.string(f.t["2w1sEO"])
            })]
          }), (0, a.jsx)(A, {
            showLabels: true,
            options: J,
            selected: S,
            onSelect: e => {
              switch (e) {
                case "default":
                  p.Xi.updateSetting(c.NS.DEFAULT);
                  break;
                case "compact":
                  p.Xi.updateSetting(c.NS.COMPACT);
                  break;
                case "cozy":
                  p.Xi.updateSetting(c.NS.COZY)
              }
            }
          })]
        })]
      })
    }), (0, a.jsx)(o.jlY, {
      className: D.qr,
      children: (0, a.jsx)(o.Button, {
        variant: "primary",
        text: f.intl.string(f.t["1Qm822"]),
        onClick: s
      })
    })]
  })
}