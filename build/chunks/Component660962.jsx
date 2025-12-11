/** Chunk was on 9536 **/
/** chunk id: 660962, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => ee
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk663993 = require("./663993.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk441536 = require("./441536.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk345162 = require("./345162.js"),
  Chunk496675 = require("./496675.js"),
  Chunk84058 = require("./84058.js"),
  Chunk103576 = require("./103576.js"),
  Chunk206950 = require("./206950.js"),
  Chunk95242 = require("./95242.js"),
  Chunk541575 = require("./541575.jsx"),
  Chunk420966 = require("./420966.jsx"),
  Chunk337344 = require("./337344.jsx"),
  Chunk275296 = require("./275296.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk494831 = require("./494831.js"),
  Chunk981631 = require("./981631.js"),
  Chunk141006 = require("./141006.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44542 = require("./44542.js"),
  Chunk99395 = require("./99395.js"),
  Chunk536673 = require("./536673.js"),
  Chunk179517 = require("./179517.js"),
  Chunk79829 = require("./79829.js");
let V = (0, Chunk663993.Un)({
    createPromise: () => require.e("4848").then(require.bind(require, 797967)),
    webpackId: 797967
  }),
  K = o().debounce((e, t) => (0, _.Uv)(e, t), 200);

function Y(e) {
  let {
    role: t,
    disabled: n
  } = e, [l, a] = i.useState(t.name);
  return i.useEffect(() => {
    a(t.name)
  }, [t.name]), (0, r.jsx)(f.oil, {
    label: U.intl.string(U.t.dLbkBk),
    required: true,
    type: "text",
    value: l,
    maxLength: G.VKK,
    onChange: function(e) {
      a(e), K(t.id, e)
    },
    disabled: n
  })
}

function q(e) {
  let {
    role: t,
    guildId: n,
    selectedStyle: i,
    disabled: l,
    shouldShowUpsell: s
  } = e, o = (0, P.F)(U.intl.string(U.t.Mi9Kbe)), d = (0, b.ZP)(), p = (0, v.oC)(n, t), x = {
    dark: {
      src: W,
      name: t.name
    },
    light: {
      src: z,
      name: t.name
    }
  };

  function y() {
    (0, N.Z)(n, h.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, m.xf)()
  }
  return (0, r.jsx)(j.ZP, {
    contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
    children: e => {
      let {
        visibleContent: m
      } = e;
      return (0, r.jsxs)(f.gNt, {
        label: U.intl.string(U.t["9wVJRB"]),
        badge: m === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : true,
        children: [(0, r.jsx)("div", {
          className: F.roleStyleContainer,
          children: k.pM.map(e => {
            let {
              id: u,
              colors: m,
              labelString: b
            } = e;
            return (0, r.jsxs)("button", {
              className: a()(F.roleStylePreviewContainer, {
                [F.selected]: i === u,
                [F.disabled]: l || s && [T.g.HOLOGRAPHIC, T.g.GRADIENT].includes(u)
              }),
              onClick: () => {
                (0, _.Jf)(t.id, u)
              },
              children: [(0, r.jsx)(f.Rny, {
                children: (0, r.jsx)("div", {
                  className: F.roleStyleMessageContainer,
                  children: (0, r.jsx)(O.Z, {
                    author: {
                      nick: o.author.username,
                      guildId: n,
                      authorId: o.author.id,
                      colorRoleId: t.id,
                      colorStrings: (0, C.DX)(m),
                      colorString: (0, c.Rf)(m.primary_color)
                    },
                    message: o,
                    preview: true,
                    roleIcon: null != p ? p : (0, g.ap)(d) ? x.light : x.dark,
                    isGroupStart: true,
                    disableInteraction: true,
                    previewGuildId: n
                  })
                })
              }), (0, r.jsx)("div", {
                className: F.roleStyleLabel,
                children: U.intl.string(b)
              })]
            }, u)
          })
        }), s && (0, r.jsxs)("div", {
          className: F.roleStyleUpsell,
          children: [(0, r.jsxs)("div", {
            className: F.roleStyleUpsellMesssages,
            children: [(0, r.jsx)(f.Text, {
              variant: "text-sm/semibold",
              color: "button-outline-primary-text",
              children: U.intl.format(B.default.VpEDJc, {
                magical: (0, r.jsx)(X, {})
              })
            }), (0, r.jsx)(f.Text, {
              variant: "text-xs/medium",
              color: "button-outline-primary-text",
              children: U.intl.string(B.default.FJZeZF)
            })]
          }), (0, r.jsx)(f.Button, {
            onClick: y,
            variant: "expressive",
            icon: f.Ucv,
            text: U.intl.string(U.t["+7XY31"])
          })]
        })]
      })
    }
  })
}

function X() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      gradientStyle: t,
      gradientClassname: n
    } = (0, Chunk481060.JUn)({
      colorStrings: (0, Chunk606318.DX)(Chunk141006.SK),
      useReducedMotion: module,
      roleStyle: "username",
      includeConvenienceGlow: true,
      animateGradient: true
    });
  return (0, Chunk54381.jsx)("span", {
    style: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, exports),
    className: require,
    "data-text": Chunk388032.intl.string(Chunk44542.default["+/IHLl"]),
    children: Chunk388032.intl.string(Chunk44542.default["+/IHLl"])
  })
}

function J(e) {
  var t, n;
  let {
    role: i,
    disabled: l,
    currentStyle: a,
    hasEnhancedRoleColors: s
  } = e;
  return (0, r.jsx)("div", {
    className: F.colorPicker,
    children: (0, r.jsx)(f.gNt, {
      label: U.intl.string(U.t["1F6FzL"]),
      description: U.intl.string(U.t["9UCxlf"]),
      required: true,
      children: (0, r.jsx)(V, {
        defaultColor: G.p6O,
        colors: a === T.g.GRADIENT && s ? M.tl : G.pmI,
        value: i.color,
        disabled: l,
        onChange: e => {
          var t;
          return t = e, void(i.color !== t && (t !== G.p6O || 0 !== i.color) && (t === G.p6O && (t = 0), (0, _.OW)(i.id, t)))
        },
        secondaryValue: a === T.g.GRADIENT && s && (null == (t = i.colors) ? true : t.secondary_color) != null ? null == (n = i.colors) ? true : n.secondary_color : true,
        onChangeGradientColors: e => {
          (0, _.TW)(i.id, {
            primary_color: e[0],
            secondary_color: e[1],
            tertiary_color: null
          }, T.g.GRADIENT)
        },
        isGradient: a === T.g.GRADIENT,
        customPickerPosition: "right"
      })
    })
  })
}

function Q(e) {
  let {
    role: t,
    guildId: n,
    selectedStyle: i,
    disableInteraction: l
  } = e, s = (0, P.F)(U.intl.string(U.t.Mi9Kbe)), o = {
    nick: s.author.username,
    guildId: n,
    authorId: s.author.id,
    colorRoleId: t.id,
    colorStrings: t.colorStrings,
    colorString: t.colorString
  }, c = {
    src: W,
    name: t.name
  }, d = {
    src: z,
    name: t.name
  }, u = (0, v.oC)(n, t), m = [G.BRd.DARK, G.BRd.DARKER, G.BRd.MIDNIGHT, G.BRd.LIGHT];
  return (0, r.jsx)(f.Rny, {
    children: (0, r.jsx)("div", {
      className: a()(F.previewContainer, {
        [F.disableInteraction]: l
      }),
      "aria-hidden": true,
      children: m.map(e => (0, r.jsx)(f.f6W, {
        theme: e,
        disableAdaptiveTheme: true,
        children: t => (0, r.jsxs)("div", {
          className: a()(t, F.messageWrapper),
          children: [(0, r.jsx)("div", {
            className: F.messageContainer,
            children: (0, r.jsx)(O.Z, {
              author: o,
              message: s,
              roleIcon: null != u ? u : (0, g.ap)(e) ? d : c,
              previewGuildId: n,
              isGroupStart: true
            })
          }), e === G.BRd.LIGHT && i !== T.g.SOLID && (0, r.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: "text-subtle",
            className: F.lightThemeNotice,
            children: U.intl.string(U.t.nxwm3I)
          })]
        })
      }, e))
    })
  })
}

function $(e) {
  let {
    role: t,
    disabled: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.rsf, {
      label: U.intl.string(U.t.vceJPk),
      checked: t.hoist,
      onChange: e => (0, _.we)(t.id, e, t.mentionable),
      disabled: n
    }), (0, r.jsx)(f.izJ, {
      className: F.divider
    }), (0, r.jsx)(f.rsf, {
      label: U.intl.formatToPlainString(U.t.DTXoJQ, {}),
      description: U.intl.string(U.t.kRg5W5),
      checked: t.mentionable,
      onChange: e => (0, _.we)(t.id, t.hoist, e),
      disabled: n
    })]
  })
}

function ee(e) {
  let {
    guild: t,
    role: n,
    locked: i,
    setSelectedSection: l
  } = e, s = (0, y.yH)(t.id, n), o = (0, d.e7)([T.Z], () => T.Z.getRoleStyleData(n.id)), c = !s, u = null != o && s ? o.currentStyle : T.g.SOLID, g = (0, I.fI)(n), m = i || g, b = (0, d.e7)([S.Z], () => S.Z.canImpersonateRole(t, n)), {
    headerHeight: p,
    headerRef: h
  } = (0, w.Z)(0), {
    scrolledToTop: x,
    handleScroll: j
  } = (0, R.V)();
  return (0, r.jsx)(f.yWw, {
    className: F.scroller,
    style: {
      scrollPaddingTop: p
    },
    onScroll: j,
    children: (0, r.jsxs)("div", {
      className: H.contentWidth,
      children: [(0, r.jsx)("div", {
        className: a()(H.header, H.stickyHeader, {
          [H.stickyHeaderElevated]: !x
        }),
        ref: h,
        children: (0, r.jsx)(R.Z, {
          guild: t,
          role: n,
          selectedSection: L.ZI.DISPLAY,
          setSelectedSection: l
        })
      }), (0, r.jsx)(Y, {
        role: n,
        disabled: m
      }), (0, r.jsx)("div", {
        className: F.noticeContainer,
        children: (0, r.jsx)(A.Z, {
          role: n
        })
      }), (0, r.jsx)(f.izJ, {
        className: F.divider
      }), (s || c) && null != u && (0, r.jsx)(q, {
        role: n,
        guildId: t.id,
        selectedStyle: u,
        disabled: m,
        shouldShowUpsell: c
      }), u !== T.g.HOLOGRAPHIC && null != u && (0, r.jsx)(J, {
        role: n,
        disabled: m,
        currentStyle: u,
        hasEnhancedRoleColors: s
      }), u === T.g.HOLOGRAPHIC && (0, r.jsx)(E.Z, {
        className: F.holographicInfoBox,
        children: (0, r.jsx)(f.Text, {
          variant: "text-xs/medium",
          children: U.intl.string(B.default.tBhCyr)
        })
      }), (0, r.jsx)(Z.Z, {
        guild: t,
        disabled: m,
        role: n
      }), (0, r.jsx)(Q, {
        role: n,
        guildId: t.id,
        selectedStyle: u,
        disableInteraction: !s
      }), (0, r.jsx)(f.izJ, {
        className: F.divider
      }), (0, r.jsx)($, {
        role: n,
        disabled: m
      }), b ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.izJ, {
          className: F.divider
        }), (0, r.jsx)(D.L, {
          guildId: t.id,
          role: n
        })]
      }) : null]
    })
  })
}