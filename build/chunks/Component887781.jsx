/** Chunk was on 33638 **/
/** chunk id: 887781, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  DesktopRefreshOnboardingModal: () => C
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
    onSelect: a,
    showLabels: n,
    renderOptionContainer: r
  } = e;
  return (0, i.jsx)(o.BJc, {
    direction: "horizontal",
    gap: 8,
    children: t.map((e, t) => {
      var d;
      let m = (0, i.jsx)(o.BJc, {
        gap: 16,
        children: (0, i.jsx)(c.m, {
          text: e.label,
          shouldShow: !n && true,
          asContainer: true,
          children: (0, i.jsxs)(o.DUT, {
            "data-selected": e.id === s,
            onClick: () => a(e.id),
            className: l()(e.className, D.uK),
            style: e.style,
            children: [n && (0, i.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-strong",
              children: e.label
            }), e.new && (0, i.jsx)(o.LpS, {
              color: o.LU0.colors.BACKGROUND_BRAND.css,
              text: b.intl.string(b.t.y2b7CA),
              className: D.Hl
            })]
          })
        })
      }, t);
      return null != (d = null == r ? true : r(e, m)) ? d : m
    })
  })
}
let k = [{
    id: Chunk818348.NJ.LIGHT,
    label: Chunk985018.intl.string(Chunk985018.t.K2sFfo),
    className: l()("theme-light", Chunk96877.Du)
  }, {
    id: Chunk818348.NJ.DARK,
    label: Chunk985018.intl.string(Chunk985018.t.SMPT1k),
    className: l()("theme-dark", Chunk96877.Du)
  }, {
    id: Chunk818348.NJ.DARKER,
    label: Chunk985018.intl.string(Chunk985018.t.b8Cei3),
    className: l()("theme-darker", Chunk96877.Du),
    new: true
  }, {
    id: Chunk818348.NJ.MIDNIGHT,
    label: Chunk985018.intl.string(Chunk985018.t.Do4ZJx),
    className: l()("theme-midnight", Chunk96877.Du),
    new: true
  }],
  v = [{
    id: "compact",
    label: Chunk985018.intl.string(Chunk985018.t["7iegX4"])
  }, {
    id: "default",
    label: Chunk985018.intl.string(Chunk985018.t.bBvAEH)
  }, {
    id: "cozy",
    label: Chunk985018.intl.string(Chunk985018.t["4cuYHx"])
  }];

function C(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [n] = a.useState(() => g.A.gradientPreset), c = (0, r.bG)([x.A], () => x.A.theme), [_] = a.useState(() => p.Ay.useSystemTheme === j.Q_.ON), [C, J] = a.useState(() => _ ? "system" : null != n ? "gradient" : c), {
    density: y
  } = (0, o.wRf)(), B = a.useMemo(() => {
    if (null == n && !_) return k;
    let e = [...k];
    if (null != n) {
      let {
        colors: t,
        angle: s,
        theme: i,
        getName: a
      } = n, r = (0, u.FK)({
        colors: t,
        angle: s
      }), d = a();
      e.push({
        id: "gradient",
        label: d,
        className: l()((0, o.Mwr)(i) ? D.Xu : D.VO, D.Du),
        style: {
          background: "var(--background-gradient), ".concat(r)
        }
      })
    }
    return _ && e.push({
      id: "system",
      label: b.intl.string(b.t["7rOU6j"]),
      className: D.Du
    }), e
  }, [n, _]), O = (0, h.A)("(max-height: 800px)");
  return (0, i.jsxs)(o.EOs, {
    transitionState: t,
    size: o.rIJ.DYNAMIC,
    className: D.zr,
    "data-modal-align": "top",
    parentComponent: "DesktopRefreshOnboardingModal",
    children: [(0, i.jsx)("div", {
      className: D.D7
    }), (0, i.jsx)(o.rQ0, {
      className: D.wx,
      children: (0, i.jsxs)(o.BJc, {
        gap: O ? 4 : 8,
        children: [(0, i.jsxs)(o.BJc, {
          gap: O ? 8 : 16,
          children: [(0, i.jsx)("div", {
            className: D.F0
          }), (0, i.jsx)(o.Heading, {
            variant: O ? "heading-lg/semibold" : "heading-xl/semibold",
            color: "text-strong",
            children: b.intl.string(b.t["7+iCG4"])
          })]
        }), (0, i.jsx)(o.Heading, {
          variant: O ? "heading-sm/medium" : "heading-md/medium",
          color: "text-subtle",
          children: b.intl.string(b.t.fZMMqN)
        })]
      })
    }), (0, i.jsx)(o.$mQ, {
      className: D.Qs,
      children: (0, i.jsxs)(o.BJc, {
        gap: O ? 20 : 24,
        children: [(0, i.jsxs)(o.BJc, {
          gap: O ? 8 : 12,
          children: [(0, i.jsx)(o.Heading, {
            variant: "heading-md/medium",
            children: b.intl.string(b.t.Ksh3ik)
          }), (0, i.jsx)(A, {
            showLabels: false,
            options: B,
            selected: C,
            onSelect: e => {
              J(e), "gradient" === e ? null != n && (0, m.u_)({
                backgroundGradientPresetId: n.id,
                theme: n.theme
              }) : (0, m.u_)({
                theme: e
              })
            },
            renderOptionContainer: (e, t) => "gradient" === e.id ? t : "system" === e.id ? (0, i.jsxs)(o.BJc, {
              className: D.fp,
              children: [t, (0, i.jsx)(o.fNY, {
                size: "sm",
                className: D.$l
              })]
            }) : (0, i.jsx)(o.NPJ, {
              theme: e.id,
              disableAdaptiveTheme: true,
              children: e => (0, i.jsx)(o.BJc, {
                className: e,
                children: t
              })
            })
          })]
        }), (0, i.jsxs)(o.BJc, {
          gap: O ? 8 : 12,
          children: [(0, i.jsxs)(o.BJc, {
            gap: 0,
            children: [(0, i.jsxs)(o.BJc, {
              direction: "horizontal",
              gap: 4,
              align: "center",
              children: [(0, i.jsx)(o.Heading, {
                variant: "heading-md/medium",
                children: b.intl.string(b.t["C/5V0A"])
              }), (0, i.jsx)(o.LpS, {
                color: o.LU0.colors.BACKGROUND_BRAND.css,
                text: b.intl.string(b.t.y2b7CA)
              })]
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: b.intl.string(b.t["2w1sEO"])
            })]
          }), (0, i.jsx)(A, {
            showLabels: true,
            options: v,
            selected: y,
            onSelect: e => {
              switch (e) {
                case "default":
                  N.Xi.updateSetting(d.NS.DEFAULT);
                  break;
                case "compact":
                  N.Xi.updateSetting(d.NS.COMPACT);
                  break;
                case "cozy":
                  N.Xi.updateSetting(d.NS.COZY)
              }
            }
          })]
        })]
      })
    }), (0, i.jsx)(o.jlY, {
      className: D.qr,
      children: (0, i.jsx)(o.Button, {
        variant: "primary",
        text: b.intl.string(b.t["1Qm822"]),
        onClick: s
      })
    })]
  })
}