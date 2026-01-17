/** Chunk was on 3298 **/
/** chunk id: 796724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430511 = require("./430511.js");

function _(e) {
  let {
    plan: n,
    selected: t,
    className: i
  } = e;
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(P.optionContainer, i),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsxs)("div", {
        className: P.labelContainer,
        children: [(0, r.jsx)(c.Ucv, {
          size: "xs",
          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: T.intl.format(I.default.kOMlHs, {
            boostCount: n.cost
          })
        })]
      })]
    }), !t && (0, r.jsx)("div", {
      className: P.optionSpacer
    })]
  })
}

function w(e) {
  let {
    region: n,
    selected: t,
    disabled: i,
    className: a
  } = e, {
    pingText: o,
    pingCircleStyle: s
  } = (0, C.u)(n.pingUrl);
  return null == n ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(P.optionContainer, {
        [P.disabled]: i
      }, a),
      children: [(0, r.jsx)("span", {
        children: n.name
      }), (0, r.jsx)("div", {
        className: P.labelContainer,
        children: i ? (0, r.jsx)("span", {
          children: T.intl.string(I.default.aCyHe2)
        }) : "" !== n.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: l()(P.pingCircle, s)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: o
          })]
        }) : null
      })]
    }), !t && (0, r.jsx)("div", {
      className: P.optionSpacer
    })]
  })
}

function G() {
  let {
    guildId: e,
    currentGame: n,
    regionId: t,
    gameServerInstance: a,
    setRegionId: l,
    name: C,
    setName: G,
    planId: R,
    setPlanId: Z,
    planCost: k,
    stepLoading: M,
    error: B,
    gameProvider: z
  } = (0, v.JL)();
  (0, b.Dk)(e, null == a ? true : a.id, null == a ? "create" : "edit"), i.useEffect(() => {
    (0, m._k)(e)
  }, [e]);
  let L = (0, o.e7)([x.Z], () => x.Z.getRegions()),
    D = (0, o.e7)([x.Z], () => x.Z.getRegionState()),
    H = i.useMemo(() => {
      var e;
      return null != (e = L.sort((e, n) => (0, E.Z)(e, n, D)).map(e => ({
        value: e,
        label: e.name,
        disabled: true !== e.enabled
      }))) ? e : []
    }, [D, L]),
    U = i.useMemo(() => L.some(e => "" !== e.pingUrl), [L]),
    V = i.useMemo(() => {
      var e;
      return null != (e = null == n ? true : n.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? e : []
    }, [n]),
    W = (0, h.Z)(),
    {
      isValid: A,
      errors: F
    } = (0, h.a)(C),
    K = null != a,
    J = (0, N.Z)(a),
    X = (0, S.Z)(z),
    Y = null != z && null != O.nd[z] ? O.nd[z] : "";
  return null == n ? (0, r.jsx)("div", {
    className: P.spinnerContainer,
    children: (0, r.jsx)(c.$jN, {
      type: c.RAz.SPINNING_CIRCLE
    })
  }) : (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsxs)("div", {
      className: P.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: P.settingsContainer,
        children: [(0, r.jsxs)("div", {
          className: P.sectionContainer,
          children: [(0, r.jsxs)("div", {
            className: P.sectionHeader,
            children: [(0, r.jsx)(c.Heading, {
              className: P.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: T.intl.string(I.default.rOMEZd)
            }), (0, r.jsx)(d.u, {
              position: "top",
              text: T.intl.string(I.default.THJY1n),
              children: (0, r.jsx)(c.idN, {
                className: P.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, r.jsx)(c.oil, {
            value: C,
            onChange: G,
            placeholder: T.intl.string(I.default.ElVYr3),
            maxLength: O.Sg,
            disabled: M || !J,
            error: F.name
          })]
        }), (0, r.jsxs)("div", {
          className: P.sectionContainer,
          children: [(0, r.jsxs)("div", {
            className: P.sectionHeader,
            children: [(0, r.jsx)(c.Heading, {
              className: P.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: T.intl.string(I.default.nB5OZ4)
            }), (0, r.jsx)(d.u, {
              position: "top",
              text: T.intl.string(null != a ? I.default["7mX0gE"] : I.default["61N+P6"]),
              children: (0, r.jsx)(c.idN, {
                className: P.sectionHeaderIcon,
                size: "xs"
              })
            }), !K && U && (0, r.jsx)("div", {
              className: P.refresh,
              children: (0, r.jsx)(d.u, {
                asContainer: true,
                position: "top",
                text: T.intl.string(I.default.kGkE7a),
                children: (0, r.jsx)(c.P3F, {
                  className: P.sectionHeaderIcon,
                  onClick: () => (0, m.UM)(),
                  children: (0, r.jsx)(c.DuK, {
                    size: "xs"
                  })
                })
              })
            })]
          }), K ? (0, r.jsx)(c.oil, {
            value: null == a ? true : a.regionName,
            disabled: true,
            placeholder: T.intl.string(I.default["k+RTIm"])
          }) : (0, r.jsx)(s.B6, {
            serialize: e => e.id,
            isSelected: e => e.id === t,
            isDisabled: M || K || !J,
            options: H,
            optionClassName: P.option,
            select: e => l(e.id),
            placeholder: T.intl.string(I.default["k+RTIm"]),
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
                className: P.value
              })
            }
          })]
        }), (0, r.jsxs)("div", {
          className: P.sectionContainer,
          children: [(0, r.jsxs)("div", {
            className: P.sectionHeader,
            children: [(0, r.jsx)(c.Heading, {
              className: P.headerText,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: T.intl.string(I.default["K+zMYp"])
            }), (0, r.jsx)(d.u, {
              position: "top",
              text: T.intl.string(I.default["/wD5IM"]),
              children: (0, r.jsx)(c.idN, {
                className: P.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, r.jsx)(s.B6, {
            serialize: e => e.id,
            isSelected: e => e.id === R,
            isDisabled: M || !J,
            options: V,
            optionClassName: P.option,
            select: e => Z(e.id),
            placeholder: T.intl.string(I.default.JdMW0i),
            renderOptionValue: e => {
              var n, t, i;
              return (0, r.jsx)(_, {
                plan: null == (n = e[0]) ? true : n.value,
                selected: (null == (i = e[0]) || null == (t = i.value) ? true : t.id) === R,
                className: P.value
              })
            },
            renderOptionLabel: e => (0, r.jsx)(_, {
              plan: e.value,
              selected: e.value.id === R
            })
          })]
        })]
      }), (0, r.jsx)("div", {
        className: P.gameDetailsContainer,
        children: (0, r.jsx)(p.Z, {})
      })]
    }), null != a && 0 !== k && (0, r.jsx)(u.Z, {
      className: P.infoBox,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: k < 0 ? T.intl.format(I.default.SorKas, {
          boostCount: Math.abs(k)
        }) : T.intl.format(I.default.n2wpym, {
          boostCount: k
        })
      })
    }), !J && (0, r.jsx)(u.Z, {
      className: P.infoBox,
      look: u.z.WARNING,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: T.intl.string(I.default["/JNPWb"])
      })
    }), (null == n ? true : n.early_access) === true && !K && (0, r.jsx)(u.Z, {
      className: P.infoBox,
      look: u.z.INFO,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: T.intl.format(I.default.TnoBGX, {
          gameName: n.name
        })
      })
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: null != z && T.intl.format(K ? I.default.num0a6 : I.default.p5KZDr, {
        provider: X,
        termsOfServiceUrl: () => (0, g.q)({
          href: Y
        }),
        helpCenterUrl: f.Z.getArticleURL(y.BhN.GAME_SERVER_HOSTING)
      })
    }), null != B && (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: B
    }), (0, r.jsxs)(j.o2, {
      step: O.EK.SERVER_SETTINGS,
      className: P.footerContainer,
      children: [(0, r.jsx)(j.c_, {}), (0, r.jsx)(j.$b, {
        disabled: !W || !A
      })]
    })]
  })
}