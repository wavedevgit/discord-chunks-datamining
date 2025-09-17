/** Chunk was on 39159 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk210682 = require("./210682.js"),
  Chunk555546 = require("./555546.js"),
  Chunk473682 = require("./473682.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557787 = require("./557787.js");

function j(e) {
  let {
    currentGame: n,
    planId: t,
    selected: a,
    className: o
  } = e, c = i.useMemo(() => null == n ? true : n.plans.find(e => e.id === t), [null == n ? true : n.plans, t]);
  return null == c ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(b.optionContainer, o),
      children: [(0, r.jsx)("span", {
        children: c.name
      }), (0, r.jsxs)("div", {
        className: b.labelContainer,
        children: [(0, r.jsx)(s.$Eu, {
          size: "xs",
          color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: x.intl.format(v.default.FrRqub, {
            boostCount: c.cost
          })
        })]
      })]
    }), !a && (0, r.jsx)("div", {
      className: b.optionSpacer
    })]
  })
}

function h(e) {
  let {
    currentGame: n,
    locationString: t,
    selected: a,
    className: o
  } = e, c = i.useMemo(() => null == n ? true : n.locations.find(e => e.region === t), [null == n ? true : n.locations, t]), {
    pingText: d,
    pingCircleStyle: u
  } = (0, p.i)(null == c ? true : c.pingUrl);
  return null == c ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(b.optionContainer, o),
      children: [(0, r.jsx)("span", {
        children: c.region
      }), (0, r.jsxs)("div", {
        className: b.labelContainer,
        children: [(0, r.jsx)("div", {
          className: l()(b.pingCircle, u)
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: d
        })]
      })]
    }), !a && (0, r.jsx)("div", {
      className: b.optionSpacer
    })]
  })
}

function _() {
  let {
    currentGame: e,
    location: n,
    portkeyInstance: t,
    setLocation: a,
    name: l,
    setName: p,
    planId: _,
    setPlanId: C,
    planCost: y
  } = (0, Chunk183369.aj)(), O = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.locations.map(e => ({
      value: e.region,
      label: e.region
    }))) ? exports : []
  }, [module]), N = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.plans.map(e => ({
      value: e.id,
      label: e.name
    }))) ? exports : []
  }, [module]), S = (0, Chunk210682.Z)();
  return null == module ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk557787.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk440589.default.Eonh9P)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk557787.contentContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk557787.settingsContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk557787.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk557787.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk440589.default["78avu7"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk440589.default.hmt2ra),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk557787.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: l,
            onChange: Chunk555546,
            placeholder: Chunk388032.intl.string(Chunk440589.default.Kg0Zio)
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk557787.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk557787.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk440589.default.iccpNT)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk440589.default.wKyl39),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk557787.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.toString(),
            isSelected: e => e === n,
            options: O,
            optionClassName: Chunk557787.option,
            select: e => a(e),
            placeholder: Chunk388032.intl.string(Chunk440589.default["op6/kZ"]),
            renderOptionLabel: t => (0, r.jsx)(h, {
              currentGame: e,
              locationString: t.value,
              selected: (null == t ? true : t.value) === n
            }),
            renderOptionValue: t => {
              var i, a;
              return (0, r.jsx)(h, {
                currentGame: e,
                locationString: null == (i = t[0]) ? true : i.value,
                selected: (null == (a = t[0]) ? true : a.value) === n,
                className: b.value
              })
            }
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk557787.sectionContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk557787.sectionHeader,
            children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk440589.default["3QONen"])
            })
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.toString(),
            isSelected: e => e === _,
            options: N,
            optionClassName: Chunk557787.option,
            select: e => C(e),
            placeholder: Chunk388032.intl.string(Chunk440589.default["4QOSPj"]),
            renderOptionValue: n => {
              var t, i;
              return (0, r.jsx)(j, {
                currentGame: e,
                planId: null == (t = n[0]) ? true : t.value,
                selected: (null == (i = n[0]) ? true : i.value) === _,
                className: b.value
              })
            },
            renderOptionLabel: n => (0, r.jsx)(j, {
              currentGame: e,
              planId: null == n ? true : n.value,
              selected: (null == n ? true : n.value) === _
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk557787.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), null != require && 0 !== y && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk557787.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: y < 0 ? Chunk388032.intl.format(Chunk440589.default.H8rHQU, {
          boostCount: Math.abs(y)
        }) : Chunk388032.intl.format(Chunk440589.default.h4ZvmJ, {
          boostCount: y
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.format(Chunk440589.default.qW1xR0, {
        provider: "Portkey",
        termsOfServiceUrl: "https://google.com/terms-of-service",
        helpCenterUrl: "https://google.com/help-center"
      })
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk557787.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: !S
      })]
    })]
  })
}