/** Chunk was on 26473 **/
/** chunk id: 796724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk49012 = require("./49012.js"),
  Chunk905551 = require("./905551.js"),
  Chunk578756 = require("./578756.js"),
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
  Chunk613275 = require("./613275.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817121 = require("./817121.js");

function T(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(I.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: I.labelContainer,
        children: [(0, r.jsx)(d.Ucv, {
          size: "xs",
          color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          children: y.intl.format(O.default.kOMlHs, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: I.optionSpacer
    })]
  })
}

function P(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: l
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, b.u)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(I.optionContainer, {
        [I.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: I.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: y.intl.string(O.default.aCyHe2)
        }) : "" !== n.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(I.pingCircle, s)
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        }) : null
      })]
    }), !t && (0, r.jsx)("div", {
      className: I.optionSpacer
    })]
  })
}

function w() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    gameServerInstance: l,
    setRegionId: a,
    name: b,
    setName: w,
    planId: R,
    setPlanId: G,
    planCost: Z,
    stepLoading: k,
    error: M,
    gameProvider: B
  } = (0, Chunk343312.JL)();
  (0, Chunk578756.Dk)(module, null == Chunk120356 ? true : Chunk120356.id, null == Chunk120356 ? "create" : "edit"), Chunk473749.useEffect(() => {
    (0, Chunk905551._k)(module)
  }, [module]);
  let L = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegions()),
    z = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegionState()),
    D = Chunk473749.useMemo(() => {
      var e;
      return null != (e = L.sort((e, n) => (0, C.Z)(e, n, z)).map(e => ({
        value: e,
        label: e.name,
        disabled: true !== e.enabled
      }))) ? module : []
    }, [z, L]),
    H = Chunk473749.useMemo(() => L.some(e => "" !== e.pingUrl), [L]),
    U = Chunk473749.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    F = (0, Chunk281014.Z)(),
    {
      isValid: V,
      errors: W
    } = (0, Chunk281014.a)(Chunk837329),
    A = null != Chunk120356,
    K = (0, Chunk531508.Z)(Chunk120356),
    J = (0, Chunk669460.Z)(B),
    Y = null != B && null != Chunk619733.nd[B] ? Chunk619733.nd[B] : "";
  return null == exports ? (0, Chunk54381.jsx)("div", {
    className: Chunk817121.spinnerContainer,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE
    })
  }) : (0, Chunk54381.jsxs)("div", {
    className: Chunk817121.container,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk817121.contentContainer,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk817121.settingsContainer,
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk54381.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: Chunk388032.intl.string(Chunk613275.default.rOMEZd)
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk613275.default.THJY1n),
              children: (0, Chunk54381.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk481060.oil, {
            value: Chunk837329,
            onChange: w,
            placeholder: Chunk388032.intl.string(Chunk613275.default.ElVYr3),
            maxLength: Chunk619733.Sg,
            disabled: k || !K,
            error: W.name
          })]
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk54381.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: Chunk388032.intl.string(Chunk613275.default.nB5OZ4)
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(null != Chunk120356 ? Chunk613275.default["7mX0gE"] : Chunk613275.default["61N+P6"]),
              children: (0, Chunk54381.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            }), !A && H && (0, Chunk54381.jsx)("div", {
              className: Chunk817121.refresh,
              children: (0, Chunk54381.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk613275.default.kGkE7a),
                children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
                  className: Chunk817121.sectionHeaderIcon,
                  onClick: () => (0, Chunk905551.UM)(),
                  children: (0, Chunk54381.jsx)(Chunk481060.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), A ? (0, Chunk54381.jsx)(Chunk481060.oil, {
            value: null == Chunk120356 ? true : Chunk120356.regionName,
            disabled: true,
            placeholder: Chunk388032.intl.string(Chunk613275.default["k+RTIm"])
          }) : (0, Chunk54381.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: k || A || !K,
            options: D,
            optionClassName: Chunk817121.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk613275.default["k+RTIm"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(P, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(P, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: I.value
              })
            }
          })]
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk54381.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: Chunk388032.intl.string(Chunk613275.default["K+zMYp"])
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk613275.default["/wD5IM"]),
              children: (0, Chunk54381.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
            serialize: e => e.id,
            isSelected: e => e.id === R,
            isDisabled: k || !K,
            options: U,
            optionClassName: Chunk817121.option,
            select: e => G(e.id),
            placeholder: Chunk388032.intl.string(Chunk613275.default.JdMW0i),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(T, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === R,
                className: I.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(T, {
              plan: e.value,
              selected: e.value.id === R
            })
          })]
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk817121.gameDetailsContainer,
        children: (0, Chunk54381.jsx)(Chunk241306.Z, {})
      })]
    }), null != Chunk120356 && 0 !== Z && (0, Chunk54381.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Z < 0 ? Chunk388032.intl.format(Chunk613275.default.SorKas, {
          boostCount: Math.abs(Z)
        }) : Chunk388032.intl.format(Chunk613275.default.n2wpym, {
          boostCount: Z
        })
      })
    }), !K && (0, Chunk54381.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      look: Chunk494620.z.WARNING,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Chunk388032.intl.string(Chunk613275.default["/JNPWb"])
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: null != B && Chunk388032.intl.format(A ? Chunk613275.default.num0a6 : Chunk613275.default.p5KZDr, {
        provider: J,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: Y
        }),
        helpCenterUrl: Chunk63063.Z.getEnglishArticleURL(Chunk981631.BhN.GAME_SERVER_HOSTING)
      })
    }), null != M && (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: M
    }), (0, Chunk54381.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SERVER_SETTINGS,
      className: Chunk817121.footerContainer,
      children: [(0, Chunk54381.jsx)(Chunk30910.c_, {}), (0, Chunk54381.jsx)(Chunk30910.$b, {
        disabled: !F || !V
      })]
    })]
  })
}