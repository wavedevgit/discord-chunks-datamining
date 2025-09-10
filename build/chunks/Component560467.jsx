/** Chunk was on 39159 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk642633 = require("./642633.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk985862 = require("./985862.js"),
  Chunk210682 = require("./210682.js"),
  Chunk555546 = require("./555546.js"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149671 = require("./149671.js");

function h(e) {
  let {
    currentGame: n,
    planId: t,
    selected: a,
    className: o
  } = e, c = r.useMemo(() => null == n ? true : n.plans.find(e => e.id === t), [null == n ? true : n.plans, t]);
  return null == c ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(b.optionContainer, o),
      children: [(0, i.jsx)("span", {
        children: c.name
      }), (0, i.jsxs)("div", {
        className: b.labelContainer,
        children: [(0, i.jsx)(s.$Eu, {
          size: "xs",
          color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: j.intl.format(x.default.FrRqub, {
            boostCount: c.cost
          })
        })]
      })]
    }), !a && (0, i.jsx)("div", {
      className: b.optionSpacer
    })]
  })
}

function _(e) {
  let {
    currentGame: n,
    locationString: t,
    selected: a,
    className: o
  } = e, c = r.useMemo(() => null == n ? true : n.locations.find(e => e.region === t), [null == n ? true : n.locations, t]), {
    pingText: d,
    pingCircleStyle: u
  } = (0, f.i)(null == c ? true : c.pingUrl);
  return null == c ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(b.optionContainer, o),
      children: [(0, i.jsx)("span", {
        children: c.region
      }), (0, i.jsxs)("div", {
        className: b.labelContainer,
        children: [(0, i.jsx)("div", {
          className: l()(b.pingCircle, u)
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: d
        })]
      })]
    }), !a && (0, i.jsx)("div", {
      className: b.optionSpacer
    })]
  })
}

function C() {
  let {
    currentGame: e,
    location: n,
    portkeyInstance: t,
    setLocation: a,
    name: l,
    setName: f,
    planId: C,
    setPlanId: y
  } = (0, Chunk183369.aj)(), O = (0, Chunk985862.Z)(), N = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.locations.map(e => ({
      value: e.region,
      label: e.region
    }))) ? exports : []
  }, [module]), S = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.plans.map(e => ({
      value: e.id,
      label: e.name
    }))) ? exports : []
  }, [module]), P = (0, Chunk210682.Z)();
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
            value: l,
            onChange: Chunk555546,
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
            options: N,
            optionClassName: Chunk149671.option,
            select: e => a(e),
            placeholder: Chunk388032.intl.string(Chunk401561.default["op6/kZ"]),
            renderOptionLabel: t => (0, i.jsx)(_, {
              currentGame: e,
              locationString: t.value,
              selected: (null == t ? true : t.value) === n
            }),
            renderOptionValue: t => {
              var r, a;
              return (0, i.jsx)(_, {
                currentGame: e,
                locationString: null == (r = t[0]) ? true : r.value,
                selected: (null == (a = t[0]) ? true : a.value) === n,
                className: b.value
              })
            }
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
            isSelected: e => e === C,
            options: S,
            optionClassName: Chunk149671.option,
            select: e => y(e),
            placeholder: Chunk388032.intl.string(Chunk401561.default["4QOSPj"]),
            renderOptionValue: n => {
              var t, r;
              return (0, i.jsx)(h, {
                currentGame: e,
                planId: null == (t = n[0]) ? true : t.value,
                selected: (null == (r = n[0]) ? true : r.value) === C,
                className: b.value
              })
            },
            renderOptionLabel: n => (0, i.jsx)(h, {
              currentGame: e,
              planId: null == n ? true : n.value,
              selected: (null == n ? true : n.value) === C
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk149671.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), null != require && 0 !== O && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk149671.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: O < 0 ? Chunk388032.intl.format(Chunk401561.default.H8rHQU, {
          boostCount: Math.abs(O)
        }) : Chunk388032.intl.format(Chunk401561.default.h4ZvmJ, {
          boostCount: O
        })
      })
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk149671.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: !P
      })]
    })]
  })
}