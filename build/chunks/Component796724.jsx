/** Chunk was on 26473 **/
/** chunk id: 796724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk63063 = require("./63063.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk470658 = require("./470658.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817121 = require("./817121.js");

function I(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(y.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: y.labelContainer,
        children: [(0, r.jsx)(d.Ucv, {
          size: "xs",
          color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          children: O.intl.format(S.default.kOMlHs, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: y.optionSpacer
    })]
  })
}

function T(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: l
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, j.u)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(y.optionContainer, {
        [y.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: y.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: O.intl.string(S.default.aCyHe2)
        }) : "" !== n.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(y.pingCircle, s)
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        }) : null
      })]
    }), !t && (0, r.jsx)("div", {
      className: y.optionSpacer
    })]
  })
}

function P() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    gameServerInstance: l,
    setRegionId: a,
    name: j,
    setName: P,
    planId: w,
    setPlanId: R,
    planCost: G,
    stepLoading: Z,
    error: k,
    gameProvider: M
  } = (0, Chunk343312.JL)();
  Chunk647438.useEffect(() => {
    (0, Chunk905551._k)(module)
  }, [module]);
  let B = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegions()),
    L = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegionState()),
    H = Chunk647438.useMemo(() => {
      var e;
      return null != (e = B.sort((e, n) => (0, _.Z)(e, n, L)).map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [L, B]),
    z = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    D = (0, Chunk281014.Z)(),
    F = null != Chunk120356,
    U = (0, Chunk531508.Z)(Chunk120356),
    A = (0, Chunk669460.Z)(M),
    V = null != M && null != Chunk619733.nd[M] ? Chunk619733.nd[M] : "";
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
              children: Chunk388032.intl.string(Chunk470658.default.rOMEZd)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk470658.default.THJY1n),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: Chunk837329,
            onChange: P,
            placeholder: Chunk388032.intl.string(Chunk470658.default.ElVYr3),
            maxLength: Chunk619733.Sg,
            disabled: Z || !U
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk470658.default.nB5OZ4)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(null != Chunk120356 ? Chunk470658.default["7mX0gE"] : Chunk470658.default["61N+P6"]),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            }), !F && (0, Chunk951288.jsx)("div", {
              className: Chunk817121.refresh,
              children: (0, Chunk951288.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk470658.default.kGkE7a),
                children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
                  className: Chunk817121.sectionHeaderIcon,
                  onClick: () => (0, Chunk905551.UM)(),
                  children: (0, Chunk951288.jsx)(Chunk481060.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), F ? (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: null == Chunk120356 ? true : Chunk120356.regionName,
            disabled: true,
            placeholder: Chunk388032.intl.string(Chunk470658.default["k+RTIm"])
          }) : (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: Z || F || !U,
            options: H,
            optionClassName: Chunk817121.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk470658.default["k+RTIm"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(T, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(T, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: y.value
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
              children: Chunk388032.intl.string(Chunk470658.default["K+zMYp"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk470658.default["/wD5IM"]),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === w,
            isDisabled: Z || !U,
            options: z,
            optionClassName: Chunk817121.option,
            select: e => R(e.id),
            placeholder: Chunk388032.intl.string(Chunk470658.default.JdMW0i),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(I, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === w,
                className: y.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(I, {
              plan: e.value,
              selected: e.value.id === w
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk817121.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk241306.Z, {})
      })]
    }), null != Chunk120356 && 0 !== G && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: G < 0 ? Chunk388032.intl.format(Chunk470658.default.SorKas, {
          boostCount: Math.abs(G)
        }) : Chunk388032.intl.format(Chunk470658.default.n2wpym, {
          boostCount: G
        })
      })
    }), !U && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      look: Chunk494620.z.WARNING,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Chunk388032.intl.string(Chunk470658.default["/JNPWb"])
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: null != M && Chunk388032.intl.format(F ? Chunk470658.default.num0a6 : Chunk470658.default.p5KZDr, {
        provider: A,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: V
        }),
        helpCenterUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.GAME_SERVER_HOSTING)
      })
    }), null != k && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: k
    }), (0, Chunk951288.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SERVER_SETTINGS,
      className: Chunk817121.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk30910.c_, {}), (0, Chunk951288.jsx)(Chunk30910.$b, {
        disabled: !D
      })]
    })]
  })
}