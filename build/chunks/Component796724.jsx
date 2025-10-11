/** Chunk was on 26473 **/
/** chunk id: 796724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk531508 = require("./531508.js"),
  Chunk133091 = require("./133091.js"),
  Chunk669460 = require("./669460.js"),
  Chunk619733 = require("./619733.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817121 = require("./817121.js");

function O(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(S.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: S.labelContainer,
        children: [(0, r.jsx)(c.Ucv, {
          size: "xs",
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: N.intl.format(E.default.kOMlHh, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: S.optionSpacer
    })]
  })
}

function y(e) {
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
      className: a()(S.optionContainer, {
        [S.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: S.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: N.intl.string(E.default.aCyHe3)
        }) : "" !== n.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(S.pingCircle, s)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        }) : null
      })]
    }), !t && (0, r.jsx)("div", {
      className: S.optionSpacer
    })]
  })
}

function I() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    gameServerInstance: l,
    setRegionId: a,
    name: h,
    setName: I,
    planId: P,
    setPlanId: T,
    planCost: w,
    stepLoading: Z,
    error: G,
    gameProvider: R
  } = (0, Chunk343312.JL)();
  Chunk647438.useEffect(() => {
    (0, Chunk905551._k)(module)
  }, [module]);
  let k = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegions()),
    M = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegionState()),
    B = Chunk647438.useMemo(() => {
      var e;
      return null != (e = k.sort((e, n) => (0, b.Z)(e, n, M)).map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [M, k]),
    L = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    z = (0, Chunk281014.Z)(),
    D = null != Chunk120356,
    H = (0, Chunk531508.Z)(Chunk120356),
    F = (0, Chunk669460.Z)(R),
    U = null != R && null != Chunk619733.nd[R] ? Chunk619733.nd[R] : "";
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
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
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
            onChange: I,
            placeholder: Chunk388032.intl.string(Chunk948208.default.ElVYr6),
            maxLength: Chunk619733.Sg,
            disabled: Z || !H
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
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
            isDisabled: Z || D || !H,
            options: B,
            optionClassName: Chunk817121.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk948208.default["k+RTIi"]),
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
                className: S.value
              })
            }
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
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
            isSelected: e => e.id === P,
            isDisabled: Z || !H,
            options: L,
            optionClassName: Chunk817121.option,
            select: e => T(e.id),
            placeholder: Chunk388032.intl.string(Chunk948208.default.JdMW0t),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(O, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === P,
                className: S.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(O, {
              plan: e.value,
              selected: e.value.id === P
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk817121.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk241306.Z, {})
      })]
    }), null != Chunk120356 && 0 !== w && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: w < 0 ? Chunk388032.intl.format(Chunk948208.default.SorKam, {
          boostCount: Math.abs(w)
        }) : Chunk388032.intl.format(Chunk948208.default.n2wpys, {
          boostCount: w
        })
      })
    }), !H && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      look: Chunk494620.z.WARNING,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Chunk388032.intl.string(Chunk948208.default["/JNPWV"])
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: null != R && Chunk388032.intl.format(D ? Chunk948208.default.num0a2 : Chunk948208.default.p5KZDg, {
        provider: F,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: U
        }),
        helpCenterUrl: "https://google.com/help-center"
      })
    }), null != G && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: G
    }), (0, Chunk951288.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SERVER_SETTINGS,
      className: Chunk817121.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk30910.c_, {}), (0, Chunk951288.jsx)(Chunk30910.$b, {
        disabled: !z
      })]
    })]
  })
}