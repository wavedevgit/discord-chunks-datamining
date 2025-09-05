/** Chunk was on 39159 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk642633 = require("./642633.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149671 = require("./149671.js");

function v(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l()(g.planOptionContainer, i),
      children: [(0, a.jsx)("span", {
        children: n.name
      }), (0, a.jsxs)("div", {
        className: g.planCostContainer,
        children: [(0, a.jsx)(o.$Eu, {
          size: "xs",
          color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: x.intl.format(p.default.FrRqub, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, a.jsx)("div", {
      className: g.planOptionSpacer
    })]
  })
}

function j() {
  let {
    currentGame: e,
    location: n,
    setLocation: t,
    name: r,
    setName: l,
    planId: j,
    setPlanId: b
  } = (0, Chunk183369.aj)(), f = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.locations.map(e => ({
      value: e,
      label: e
    }))) ? exports : []
  }, [module]), h = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.plans.map(e => ({
      value: e.id,
      label: e.name
    }))) ? exports : []
  }, [module]), _ = true === Chunk120356 || "" === Chunk120356 || true === exports || "" === exports || true === j;
  return null == module ? null : (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      className: Chunk149671.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk401561.default.Eonh9P)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk149671.contentContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk149671.settingsContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk401561.default["78avu7"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk401561.default.hmt2ra),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk149671.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: Chunk120356,
            onChange: l,
            placeholder: Chunk388032.intl.string(Chunk401561.default.Kg0Zio)
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk401561.default.iccpNT)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk401561.default.wKyl39),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk149671.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.toString(),
            isSelected: e => e === n,
            options: f,
            select: e => t(e),
            placeholder: Chunk388032.intl.string(Chunk401561.default["op6/kZ"])
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk149671.sectionHeader,
            children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk401561.default["3QONen"])
            })
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.toString(),
            isSelected: e => e === j,
            options: h,
            optionClassName: Chunk149671.planOption,
            select: e => b(e),
            placeholder: Chunk388032.intl.string(Chunk401561.default["4QOSPj"]),
            renderOptionValue: n => {
              let t = null == e ? true : e.plans.find(e => {
                var t;
                return e.id === (null == (t = n[0]) ? true : t.value)
              });
              return null == t ? null : (0, a.jsx)(v, {
                plan: t,
                selected: true,
                className: g.planValue
              })
            },
            renderOptionLabel: n => {
              let t = null == e ? true : e.plans.find(e => e.id === (null == n ? true : n.value));
              return null == t ? null : (0, a.jsx)(v, {
                plan: t,
                selected: t.id === j
              })
            }
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk149671.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk149671.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: _
      })]
    })]
  })
}