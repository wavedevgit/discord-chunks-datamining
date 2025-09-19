/** Chunk was on 39159 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149671 = require("./149671.js");

function C(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(_.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: _.labelContainer,
        children: [(0, r.jsx)(c.$Eu, {
          size: "xs",
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: h.intl.format(j.default.FrRqub, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: _.optionSpacer
    })]
  })
}

function y(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: a
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, v.t)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(_.optionContainer, {
        [_.disabled]: i
      }, a),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: _.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: h.intl.string(j.default["1eK9GR"])
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: l()(_.pingCircle, s)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        })
      })]
    }), !t && (0, r.jsx)("div", {
      className: _.optionSpacer
    })]
  })
}

function O() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    portkeyInstance: a,
    setRegionId: l,
    name: v,
    setName: O,
    planId: N,
    setPlanId: S,
    planCost: P
  } = (0, Chunk183369.aj)();
  Chunk647438.useEffect(() => {
    (0, Chunk744993._k)(module)
  }, [module]);
  let w = (0, Chunk442837.e7)([Chunk590383.Z], () => Chunk590383.Z.getRegions()),
    k = Chunk647438.useMemo(() => {
      var e;
      return null != (e = w.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [w]),
    T = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    E = (0, Chunk210682.Z)();
  return null == exports ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk149671.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
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
            value: Chunk39793,
            onChange: O,
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
            options: k,
            optionClassName: Chunk149671.option,
            select: e => l(e.id),
            placeholder: Chunk388032.intl.string(Chunk401561.default["op6/kZ"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(y, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(y, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: _.value
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
            serialize: e => e.id,
            isSelected: e => e.id === N,
            options: T,
            optionClassName: Chunk149671.option,
            select: e => S(e.id),
            placeholder: Chunk388032.intl.string(Chunk401561.default["4QOSPj"]),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(C, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === N,
                className: _.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(C, {
              plan: e.value,
              selected: e.value.id === N
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk149671.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), null != Chunk120356 && 0 !== P && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk149671.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: P < 0 ? Chunk388032.intl.format(Chunk401561.default.H8rHQU, {
          boostCount: Math.abs(P)
        }) : Chunk388032.intl.format(Chunk401561.default.h4ZvmJ, {
          boostCount: P
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.format(Chunk401561.default.qW1xR0, {
        provider: "Portkey",
        termsOfServiceUrl: "https://google.com/terms-of-service",
        helpCenterUrl: "https://google.com/help-center"
      })
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk149671.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: !E
      })]
    })]
  })
}