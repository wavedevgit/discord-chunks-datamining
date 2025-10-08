/** Chunk was on 13153 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk49012 = require("./49012.js"),
  Chunk744993 = require("./744993.js"),
  Chunk590383 = require("./590383.js"),
  Chunk642633 = require("./642633.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk210682 = require("./210682.js"),
  Chunk39793 = require("./39793.js"),
  Chunk875817 = require("./875817.js"),
  Chunk761266 = require("./761266.js"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149671 = require("./149671.js");

function y(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(O.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: O.labelContainer,
        children: [(0, r.jsx)(d.Ucv, {
          size: "xs",
          color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          children: N.intl.format(C.default.FrRqub, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: O.optionSpacer
    })]
  })
}

function S(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: l
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, j.t)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(O.optionContainer, {
        [O.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: O.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: N.intl.string(C.default["1eK9GR"])
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(O.pingCircle, s)
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        })
      })]
    }), !t && (0, r.jsx)("div", {
      className: O.optionSpacer
    })]
  })
}

function E() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    portkeyInstance: l,
    setRegionId: a,
    name: j,
    setName: E,
    planId: P,
    setPlanId: T,
    planCost: w,
    stepLoading: I,
    error: Z,
    gameProvider: R
  } = (0, Chunk183369.aj)();
  Chunk647438.useEffect(() => {
    (0, Chunk744993._k)(module)
  }, [module]);
  let k = (0, Chunk442837.e7)([Chunk590383.Z], () => Chunk590383.Z.getRegions()),
    G = (0, Chunk442837.e7)([Chunk590383.Z], () => Chunk590383.Z.getRegionState()),
    B = Chunk647438.useMemo(() => {
      var e;
      return null != (e = k.sort((e, n) => (0, v.Z)(e, n, G)).map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [G, k]),
    D = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    F = (0, Chunk210682.Z)(),
    H = null != Chunk120356,
    M = (0, Chunk761266.Z)(R),
    U = null != R && null != Chunk473682.Q_[R] ? Chunk473682.Q_[R] : "";
  return null == exports ? (0, Chunk951288.jsx)("div", {
    className: Chunk149671.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)("div", {
    className: Chunk149671.container,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk149671.contentContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk149671.settingsContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              className: Chunk149671.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
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
            value: Chunk39793,
            onChange: E,
            placeholder: Chunk388032.intl.string(Chunk401561.default.Kg0Zio),
            maxLength: Chunk473682.gM,
            disabled: I
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              className: Chunk149671.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk401561.default.iccpNT)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(null != Chunk120356 ? Chunk401561.default.sjwMnJ : Chunk401561.default.wKyl39),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk149671.sectionHeaderIcon,
                size: "xs"
              })
            }), (0, Chunk951288.jsx)("div", {
              className: Chunk149671.refresh,
              children: (0, Chunk951288.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk401561.default["G+UZgY"]),
                children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
                  className: Chunk149671.sectionHeaderIcon,
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
            isDisabled: I || H,
            options: B,
            optionClassName: Chunk149671.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk401561.default["op6/kZ"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(S, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(S, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: O.value
              })
            }
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              className: Chunk149671.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk401561.default["3QONen"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk401561.default.HbR6W1),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk149671.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === P,
            isDisabled: I,
            options: D,
            optionClassName: Chunk149671.option,
            select: e => T(e.id),
            placeholder: Chunk388032.intl.string(Chunk401561.default["4QOSPj"]),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(y, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === P,
                className: O.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(y, {
              plan: e.value,
              selected: e.value.id === P
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk149671.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), null != Chunk120356 && 0 !== w && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk149671.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: w < 0 ? Chunk388032.intl.format(Chunk401561.default.H8rHQU, {
          boostCount: Math.abs(w)
        }) : Chunk388032.intl.format(Chunk401561.default.h4ZvmJ, {
          boostCount: w
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: null != R && Chunk388032.intl.format(H ? Chunk401561.default["fJCJ5+"] : Chunk401561.default.qW1xR0, {
        provider: M,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: U
        }),
        helpCenterUrl: "https://google.com/help-center"
      })
    }), null != Z && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: Z
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk149671.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: !F
      })]
    })]
  })
}