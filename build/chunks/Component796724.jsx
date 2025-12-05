/** Chunk was on 26473 **/
/** chunk id: 796724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk816632 = require("./816632.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817121 = require("./817121.js");

function P(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(T.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: T.labelContainer,
        children: [(0, r.jsx)(c.Ucv, {
          size: "xs",
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: I.intl.format(y.default.kOMlHs, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: T.optionSpacer
    })]
  })
}

function w(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: l
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, _.u)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(T.optionContainer, {
        [T.disabled]: i
      }, l),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: T.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: I.intl.string(y.default.aCyHe2)
        }) : "" !== n.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(T.pingCircle, s)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        }) : null
      })]
    }), !t && (0, r.jsx)("div", {
      className: T.optionSpacer
    })]
  })
}

function R() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    gameServerInstance: l,
    setRegionId: a,
    name: _,
    setName: R,
    planId: G,
    setPlanId: Z,
    planCost: k,
    stepLoading: M,
    error: B,
    gameProvider: L
  } = (0, Chunk343312.JL)();
  (0, Chunk578756.Dk)(module, null == Chunk120356 ? true : Chunk120356.id, null == Chunk120356 ? "create" : "edit"), Chunk473749.useEffect(() => {
    (0, Chunk905551._k)(module)
  }, [module]);
  let z = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegions()),
    D = (0, Chunk442837.e7)([Chunk802659.Z], () => Chunk802659.Z.getRegionState()),
    H = Chunk473749.useMemo(() => {
      var e;
      return null != (e = z.sort((e, n) => (0, N.Z)(e, n, D)).map(e => ({
        value: e,
        label: e.name,
        disabled: true !== e.enabled
      }))) ? module : []
    }, [D, z]),
    U = Chunk473749.useMemo(() => z.some(e => "" !== e.pingUrl), [z]),
    V = Chunk473749.useMemo(() => {
      var e;
      return null != (e = null == exports ? true : exports.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? module : []
    }, [exports]),
    W = (0, Chunk281014.Z)(),
    {
      isValid: A,
      errors: F
    } = (0, Chunk281014.a)(Chunk837329),
    K = null != Chunk120356,
    J = (0, Chunk531508.Z)(Chunk120356),
    Y = (0, Chunk669460.Z)(L),
    X = null != L && null != Chunk619733.nd[L] ? Chunk619733.nd[L] : "";
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
              children: Chunk388032.intl.string(Chunk816632.default.rOMEZd)
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk816632.default.THJY1n),
              children: (0, Chunk54381.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk481060.oil, {
            value: Chunk837329,
            onChange: R,
            placeholder: Chunk388032.intl.string(Chunk816632.default.ElVYr3),
            maxLength: Chunk619733.Sg,
            disabled: M || !J,
            error: F.name
          })]
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk817121.sectionContainer,
          children: [(0, Chunk54381.jsxs)("div", {
            className: Chunk817121.sectionHeader,
            children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
              className: Chunk817121.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: Chunk388032.intl.string(Chunk816632.default.nB5OZ4)
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(null != Chunk120356 ? Chunk816632.default["7mX0gE"] : Chunk816632.default["61N+P6"]),
              children: (0, Chunk54381.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            }), !K && U && (0, Chunk54381.jsx)("div", {
              className: Chunk817121.refresh,
              children: (0, Chunk54381.jsx)(Chunk681715.u, {
                asContainer: true,
                position: "top",
                text: Chunk388032.intl.string(Chunk816632.default.kGkE7a),
                children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
                  className: Chunk817121.sectionHeaderIcon,
                  onClick: () => (0, Chunk905551.UM)(),
                  children: (0, Chunk54381.jsx)(Chunk481060.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), K ? (0, Chunk54381.jsx)(Chunk481060.oil, {
            value: null == Chunk120356 ? true : Chunk120356.regionName,
            disabled: true,
            placeholder: Chunk388032.intl.string(Chunk816632.default["k+RTIm"])
          }) : (0, Chunk54381.jsx)(Chunk199849.B6, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: M || K || !J,
            options: H,
            optionClassName: Chunk817121.option,
            select: e => a(e.id),
            placeholder: Chunk388032.intl.string(Chunk816632.default["k+RTIm"]),
            renderOptionLabel: e => {
              var n;
              return (0, r.jsx)(w, {
                region: e.value,
                selected: e.value.id === t,
                disabled: null != (n = e.disabled) && n
              })
            },
            renderOptionValue: e => {
              var n;
              return null == e[0] ? null : (0, r.jsx)(w, {
                region: e[0].value,
                selected: e[0].value.id === t,
                disabled: null != (n = e[0].disabled) && n,
                className: T.value
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
              children: Chunk388032.intl.string(Chunk816632.default["K+zMYp"])
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk816632.default["/wD5IM"]),
              children: (0, Chunk54381.jsx)(Chunk481060.idN, {
                className: Chunk817121.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk199849.B6, {
            serialize: e => e.id,
            isSelected: e => e.id === G,
            isDisabled: M || !J,
            options: V,
            optionClassName: Chunk817121.option,
            select: e => Z(e.id),
            placeholder: Chunk388032.intl.string(Chunk816632.default.JdMW0i),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(P, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === G,
                className: T.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(P, {
              plan: e.value,
              selected: e.value.id === G
            })
          })]
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk817121.gameDetailsContainer,
        children: (0, Chunk54381.jsx)(Chunk241306.Z, {})
      })]
    }), null != Chunk120356 && 0 !== k && (0, Chunk54381.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: k < 0 ? Chunk388032.intl.format(Chunk816632.default.SorKas, {
          boostCount: Math.abs(k)
        }) : Chunk388032.intl.format(Chunk816632.default.n2wpym, {
          boostCount: k
        })
      })
    }), !J && (0, Chunk54381.jsx)(Chunk494620.Z, {
      className: Chunk817121.infoBox,
      look: Chunk494620.z.WARNING,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        children: Chunk388032.intl.string(Chunk816632.default["/JNPWb"])
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: null != L && Chunk388032.intl.format(K ? Chunk816632.default.num0a6 : Chunk816632.default.p5KZDr, {
        provider: Y,
        termsOfServiceUrl: () => (0, Chunk49012.q)({
          href: X
        }),
        helpCenterUrl: Chunk63063.Z.getEnglishArticleURL(Chunk981631.BhN.GAME_SERVER_HOSTING)
      })
    }), null != B && (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: B
    }), (0, Chunk54381.jsxs)(Chunk30910.o2, {
      step: Chunk619733.EK.SERVER_SETTINGS,
      className: Chunk817121.footerContainer,
      children: [(0, Chunk54381.jsx)(Chunk30910.c_, {}), (0, Chunk54381.jsx)(Chunk30910.$b, {
        disabled: !W || !A
      })]
    })]
  })
}