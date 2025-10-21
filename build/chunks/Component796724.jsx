/** Chunk was on 18764 **/
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
  Chunk45765 = require("./45765.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk636401 = require("./636401.js");

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
          children: O.intl.format(S.default.kOMlHh, {
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
          children: O.intl.string(S.default.aCyHe3)
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
    planCost: Z,
    stepLoading: G,
    error: k,
    gameProvider: M
  } = (0, Chunk343312.JL)();
  Chunk647438.useEffect(() => {
    (0, Chunk905551._k)(module)
  }, [module]);
  let B = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegions()),
    L = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegionState()),
    D = Chunk647438.useMemo(() => {
      var e;
      return null != (e = B.sort((e, n) => (0, _.Z)(e, n, L)).map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [L, B]),
    H = Chunk647438.useMemo(() => B.some(e => "" !== e.pingUrl), [B]),
    z = Chunk647438.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    U = (0, Chunk281014.Z)(),
    {
      isValid: F,
      errors: V
    } = (0, Chunk281014.a)(Chunk837329),
    A = null != Chunk120356,
    K = (0, Chunk531508.Z)(Chunk120356),
    W = (0, Chunk669460.Z)(M),
    J = null != M && null != Chunk619733.nd[M] ? Chunk619733.nd[M] : "";
  return null == exports ? (0, Chunk951288.jsx)("div", {
    className: Chunk636401.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk951288.jsxs)("div", {
    className: Chunk636401.container,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk636401.contentContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk636401.settingsContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk636401.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk636401.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              className: Chunk636401.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk45765.default.rOMEZW)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk45765.default.THJY1t),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk636401.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: Chunk837329,
            onChange: P,
            placeholder: Chunk388032.intl.string(Chunk45765.default.ElVYr6),
            maxLength: Chunk619733.Sg,
            disabled: G || !K,
            error: V.name
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk636401.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk636401.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              className: Chunk636401.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk45765.default.nB5OZ2)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(null != Chunk120356 ? Chunk45765.default["7mX0gI"] : Chunk45765.default["61N+Pz"]),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk636401.sectionHeaderIcon,
                size: "xs"
              })
            }), !A && H && (0, Chunk951288.jsx)("div", {
              className: Chunk636401.refresh,
              children: (0, Chunk951288.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk45765.default.kGkE7e),
                children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
                  className: Chunk636401.sectionHeaderIcon,
                  onClick: () => (0, Chunk905551.UM)(),
                  children: (0, Chunk951288.jsx)(Chunk481060.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), A ? (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: null == Chunk120356 ? true : Chunk120356.regionName,
            disabled: true,
            placeholder: Chunk388032.intl.string(Chunk45765.default["k+RTIi"])
          }) : (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: G || A || !K,
            options: D,
            optionClassName: Chunk636401.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk45765.default["k+RTIi"]),
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
          className: Chunk636401.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk636401.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              className: Chunk636401.headerText,
              variant: "heading-sm/semibold",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk45765.default["K+zMYm"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk45765.default["/wD5IC"]),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk636401.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === w,
            isDisabled: G || !K,
            options: z,
            optionClassName: Chunk636401.option,
            select: e => R(e.id),
            placeholder: Chunk388032.intl.string(Chunk45765.default.JdMW0t),
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
        className: Chunk636401.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk241306.Z, {})
      })]
    }), null != Chunk120356 && 0 !== Z && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk636401.infoBox,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Z < 0 ? Chunk388032.intl.format(Chunk45765.default.SorKam, {
          boostCount: Math.abs(Z)
        }) : Chunk388032.intl.format(Chunk45765.default.n2wpys, {
          boostCount: Z
        })
      })
    }), !K && (0, Chunk951288.jsx)(Chunk494620.Z, {
      className: Chunk636401.infoBox,
      look: Chunk494620.z.WARNING,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Chunk388032.intl.string(Chunk45765.default["/JNPWV"])
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: null != M && Chunk388032.intl.format(A ? Chunk45765.default.num0a2 : Chunk45765.default.p5KZDg, {
        provider: W,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: J
        }),
        helpCenterUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.GAME_SERVER_HOSTING)
      })
    }), null != k && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: k
    }), (0, Chunk951288.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SERVER_SETTINGS,
      className: Chunk636401.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk30910.c_, {}), (0, Chunk951288.jsx)(Chunk30910.$b, {
        disabled: !U || !F
      })]
    })]
  })
}