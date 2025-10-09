/** Chunk was on 26473 **/
/** chunk id: 796724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk905551 = require("./905551.js"),
  Chunk802659 = require("./802659.js"),
  Chunk241306 = require("./241306.jsx"),
  Chunk343312 = require("./343312.jsx"),
  Chunk30910 = require("./30910.jsx"),
  Chunk281014 = require("./281014.js"),
  Chunk837329 = require("./837329.js"),
  Chunk133091 = require("./133091.js"),
  Chunk669460 = require("./669460.js"),
  Chunk619733 = require("./619733.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817121 = require("./817121.js");

function S(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(N.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: N.labelContainer,
        children: [(0, r.jsx)(c.Ucv, {
          size: "xs",
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: E.intl.format(C.default.kOMlHh, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: N.optionSpacer
    })]
  })
}

function O(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: l
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, h.u)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(N.optionContainer, {
        [N.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: N.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: E.intl.string(C.default.aCyHe3)
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(N.pingCircle, s)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        })
      })]
    }), !t && (0, r.jsx)("div", {
      className: N.optionSpacer
    })]
  })
}

function y() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    gameServerInstance: l,
    setRegionId: a,
    name: h,
    setName: y,
    planId: T,
    setPlanId: P,
    planCost: I,
    stepLoading: w,
    error: R,
    gameProvider: G
  } = (0, Chunk343312.JL)();
  Chunk647438.useEffect(() => {
    (0, Chunk905551._k)(module)
  }, [module]);
  let Z = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegions()),
    k = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegionState()),
    M = Chunk647438.useMemo(() => {
      var e;
      return null != (e = Z.sort((e, n) => (0, j.Z)(e, n, k)).map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [k, Z]),
    B = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    D = (0, Chunk281014.Z)(),
    z = null != Chunk120356,
    L = (0, Chunk669460.Z)(G),
    H = null != G && null != Chunk619733.nd[G] ? Chunk619733.nd[G] : "";
  return null == exports ? (0, Chunk951288.jsx)("div", {
    className: Chunk817121.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)("div", {
    className: Chunk817121.container,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk817121.contentContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk817121.settingsContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk948208.default.rOMEZW)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk948208.default.THJY1t),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: Chunk837329,
            onChange: y,
            placeholder: Chunk388032.intl.string(Chunk948208.default.ElVYr6),
            maxLength: Chunk619733.Sg,
            disabled: w
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk948208.default.nB5OZ2)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(null != Chunk120356 ? Chunk948208.default["7mX0gI"] : Chunk948208.default["61N+Pz"]),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            }), (0, Chunk951288.jsx)("div", {
              className: Chunk817121.refresh,
              children: (0, Chunk951288.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk948208.default.kGkE7e),
                children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
                  className: Chunk817121.sectionHeaderIcon,
                  onClick: () => (0, Chunk905551.UM)(),
                  children: (0, Chunk951288.jsx)(Chunk481060.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: w || z,
            options: M,
            optionClassName: Chunk817121.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk948208.default["k+RTIi"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(O, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(O, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: N.value
              })
            }
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk948208.default["K+zMYm"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk948208.default["/wD5IC"]),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === T,
            isDisabled: w,
            options: B,
            optionClassName: Chunk817121.option,
            select: e => P(e.id),
            placeholder: Chunk388032.intl.string(Chunk948208.default.JdMW0t),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(S, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === T,
                className: N.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(S, {
              plan: e.value,
              selected: e.value.id === T
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk817121.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk241306.Z, {})
      })]
    }), null != Chunk120356 && 0 !== I && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: I < 0 ? Chunk388032.intl.format(Chunk948208.default.SorKam, {
          boostCount: Math.abs(I)
        }) : Chunk388032.intl.format(Chunk948208.default.n2wpys, {
          boostCount: I
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: null != G && Chunk388032.intl.format(z ? Chunk948208.default.num0a2 : Chunk948208.default.p5KZDg, {
        provider: L,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: H
        }),
        helpCenterUrl: "https://google.com/help-center"
      })
    }), null != R && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: R
    }), (0, Chunk951288.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SERVER_SETTINGS,
      className: Chunk817121.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk30910.c_, {}), (0, Chunk951288.jsx)(Chunk30910.$b, {
        disabled: !D
      })]
    })]
  })
}