/** Chunk was on 62266 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk590383 = require("./590383.js"),
  Chunk642633 = require("./642633.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk210682 = require("./210682.js"),
  Chunk39793 = require("./39793.js"),
  Chunk473682 = require("./473682.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557787 = require("./557787.js");

function C(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(v.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: v.labelContainer,
        children: [(0, r.jsx)(c.$Eu, {
          size: "xs",
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: b.intl.format(j.default.FrRqub, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: v.optionSpacer
    })]
  })
}

function N(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: l
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, _.t)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(v.optionContainer, {
        [v.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: v.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: b.intl.string(j.default["1eK9GR"])
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(v.pingCircle, s)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        })
      })]
    }), !t && (0, r.jsx)("div", {
      className: v.optionSpacer
    })]
  })
}

function O() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    portkeyInstance: l,
    setRegionId: a,
    name: _,
    setName: O,
    planId: y,
    setPlanId: S,
    planCost: E,
    stepLoading: P,
    error: w
  } = (0, Chunk183369.aj)();
  Chunk647438.useEffect(() => {
    (0, Chunk744993._k)(module)
  }, [module]);
  let T = (0, Chunk442837.e7)([Chunk590383.Z], () => Chunk590383.Z.getRegions()),
    I = Chunk647438.useMemo(() => {
      var e;
      return null != (e = T.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [T]),
    R = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    G = (0, Chunk210682.Z)();
  return null == exports ? (0, Chunk951288.jsx)("div", {
    className: Chunk557787.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)("div", {
    className: Chunk557787.container,
    children: [(0, Chunk951288.jsxs)("div", {
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
            value: Chunk39793,
            onChange: O,
            placeholder: Chunk388032.intl.string(Chunk440589.default.Kg0Zio),
            showCharacterCount: true,
            maxLength: Chunk473682.gM,
            disabled: P
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
            }), (0, Chunk951288.jsx)("div", {
              className: Chunk557787.refresh,
              children: (0, Chunk951288.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk440589.default["G+UZgY"]),
                children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
                  className: Chunk557787.sectionHeaderIcon,
                  onClick: () => (0, Chunk744993.TN)(),
                  children: (0, Chunk951288.jsx)(Chunk481060.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: P,
            options: I,
            optionClassName: Chunk557787.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk440589.default["op6/kZ"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(N, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(N, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: v.value
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
            serialize: e => e.id,
            isSelected: e => e.id === y,
            isDisabled: P,
            options: R,
            optionClassName: Chunk557787.option,
            select: e => S(e.id),
            placeholder: Chunk388032.intl.string(Chunk440589.default["4QOSPj"]),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(C, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === y,
                className: v.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(C, {
              plan: e.value,
              selected: e.value.id === y
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk557787.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), null != Chunk120356 && 0 !== E && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk557787.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: E < 0 ? Chunk388032.intl.format(Chunk440589.default.H8rHQU, {
          boostCount: Math.abs(E)
        }) : Chunk388032.intl.format(Chunk440589.default.h4ZvmJ, {
          boostCount: E
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.format(Chunk440589.default.qW1xR0, {
        provider: "Portkey",
        termsOfServiceUrl: "https://google.com/terms-of-service",
        helpCenterUrl: "https://google.com/help-center"
      })
    }), null != w && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: w
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk557787.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: !G
      })]
    })]
  })
}