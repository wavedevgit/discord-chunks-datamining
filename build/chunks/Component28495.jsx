/** Chunk was on 47841 **/
/** chunk id: 28495, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => ee
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk268218 = require("./268218.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk201275 = require("./201275.js"),
  Chunk20851 = require("./20851.jsx"),
  Chunk176201 = require("./176201.js"),
  Chunk676608 = require("./676608.js"),
  Chunk828162 = require("./828162.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk34457 = require("./34457.js"),
  Chunk576705 = require("./576705.js"),
  Chunk636042 = require("./636042.js"),
  Chunk396816 = require("./396816.js"),
  Chunk545567 = require("./545567.js"),
  Chunk785312 = require("./785312.js"),
  Chunk319805 = require("./319805.jsx"),
  Chunk316506 = require("./316506.jsx"),
  Chunk486619 = require("./486619.jsx"),
  Chunk631103 = require("./631103.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk512031 = require("./512031.js"),
  Chunk652215 = require("./652215.js"),
  Chunk178758 = require("./178758.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333354 = require("./333354.js"),
  Chunk617375 = require("./617375.js"),
  Chunk261223 = require("./261223.js"),
  Chunk598227 = require("./598227.js"),
  Chunk406853 = require("./406853.js");
let W = (0, Chunk268218.Fe)({
    createPromise: () => n.e("66147").then(n.bind(n, 48736)),
    webpackId: 48736
  }),
  Y = o().debounce((e, t) => (0, I.nK)(e, t), 200);

function X(e) {
  let {
    role: t,
    disabled: n
  } = e, [l, s] = i.useState(t.name);
  return i.useEffect(() => {
    s(t.name)
  }, [t.name]), (0, r.jsx)(m.ksK, {
    label: B.intl.string(B.t.dLbkBk),
    required: true,
    type: "text",
    value: l,
    maxLength: M.fHV,
    onChange: function(e) {
      s(e), Y(t.id, e)
    },
    disabled: n
  })
}

function J(e) {
  let {
    role: t,
    guildId: n,
    selectedStyle: i,
    disabled: l,
    shouldShowUpsell: a
  } = e, o = (0, C.$)(B.intl.string(B.t.Mi9Kbe)), d = (0, f.Ay)(), b = (0, _.qE)(n, t), x = {
    dark: {
      src: K,
      name: t.name
    },
    light: {
      src: z,
      name: t.name
    }
  };

  function y() {
    (0, A.A)(n, h.A.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.jH)()
  }
  return (0, r.jsx)(j.Ay, {
    contentTypes: [u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
    children: e => {
      let {
        visibleContent: p
      } = e;
      return (0, r.jsxs)(m.D0$, {
        label: B.intl.string(B.t["9wVJRB"]),
        badge: p === u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : true,
        children: [(0, r.jsx)("div", {
          className: H.p6,
          children: k.wE.map(e => {
            let {
              id: u,
              colors: p,
              labelString: f
            } = e;
            return (0, r.jsxs)("button", {
              className: s()(H.ZQ, {
                [H.wH]: i === u,
                [H.r9]: l || a && [T.y.HOLOGRAPHIC, T.y.GRADIENT].includes(u)
              }),
              onClick: () => {
                (0, I.C5)(t.id, u)
              },
              children: [(0, r.jsx)(m.M1G, {
                children: (0, r.jsx)("div", {
                  className: H.Al,
                  children: (0, r.jsx)(O.A, {
                    author: {
                      nick: o.author.username,
                      guildId: n,
                      authorId: o.author.id,
                      colorRoleId: t.id,
                      colorStrings: (0, v.K3)(p),
                      colorString: (0, c.Hl)(p.primary_color)
                    },
                    message: o,
                    preview: true,
                    roleIcon: null != b ? b : (0, g.qB)(d) ? x.light : x.dark,
                    isGroupStart: true,
                    disableInteraction: true,
                    previewGuildId: n
                  })
                })
              }), (0, r.jsx)("div", {
                className: H.C2,
                children: B.intl.string(f)
              })]
            }, u)
          })
        }), a && (0, r.jsxs)("div", {
          className: H.FB,
          children: [(0, r.jsxs)("div", {
            className: H.Md,
            children: [(0, r.jsx)(m.Text, {
              variant: "text-sm/semibold",
              color: "button-outline-primary-text",
              children: B.intl.format(F.default.VpEDJc, {
                magical: (0, r.jsx)(Z, {})
              })
            }), (0, r.jsx)(m.Text, {
              variant: "text-xs/medium",
              color: "button-outline-primary-text",
              children: B.intl.string(F.default.FJZeZF)
            })]
          }), (0, r.jsx)(m.Button, {
            onClick: y,
            variant: "expressive",
            icon: m._Jp,
            text: B.intl.string(B.t["+7XY31"])
          })]
        })]
      })
    }
  })
}

function Z() {
  let e = (0, d.bG)([b.A], () => b.A.useReducedMotion),
    {
      gradientStyle: t,
      gradientClassname: n
    } = (0, m.WqX)({
      colorStrings: (0, v.K3)(U.jl),
      useReducedMotion: e,
      roleStyle: "username",
      includeConvenienceGlow: true,
      animateGradient: true
    });
  return (0, r.jsx)("span", {
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
    }({}, t),
    className: n,
    "data-text": B.intl.string(F.default["+/IHLl"]),
    children: B.intl.string(F.default["+/IHLl"])
  })
}

function q(e) {
  var t, n;
  let {
    role: i,
    disabled: l,
    currentStyle: s,
    hasEnhancedRoleColors: a
  } = e;
  return (0, r.jsx)("div", {
    className: H.Ei,
    children: (0, r.jsx)(m.D0$, {
      label: B.intl.string(B.t["1F6FzL"]),
      description: B.intl.string(B.t["9UCxlf"]),
      required: true,
      children: (0, r.jsx)(W, {
        defaultColor: M.TGz,
        colors: s === T.y.GRADIENT && a ? U.Oz : M._tK,
        value: i.color,
        disabled: l,
        onChange: e => {
          var t;
          return t = e, void(i.color !== t && (t !== M.TGz || 0 !== i.color) && (t === M.TGz && (t = 0), (0, I.ZH)(i.id, t)))
        },
        secondaryValue: s === T.y.GRADIENT && a && (null == (t = i.colors) ? true : t.secondary_color) != null ? null == (n = i.colors) ? true : n.secondary_color : true,
        onChangeGradientColors: e => {
          (0, I.uc)(i.id, {
            primary_color: e[0],
            secondary_color: e[1],
            tertiary_color: null
          }, T.y.GRADIENT)
        },
        isGradient: s === T.y.GRADIENT,
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
  } = e, a = (0, C.$)(B.intl.string(B.t.Mi9Kbe)), o = {
    nick: a.author.username,
    guildId: n,
    authorId: a.author.id,
    colorRoleId: t.id,
    colorStrings: t.colorStrings,
    colorString: t.colorString
  }, c = {
    src: K,
    name: t.name
  }, d = {
    src: z,
    name: t.name
  }, u = (0, _.qE)(n, t), p = [M.NJ8.DARK, M.NJ8.DARKER, M.NJ8.MIDNIGHT, M.NJ8.LIGHT];
  return (0, r.jsx)(m.M1G, {
    children: (0, r.jsx)("div", {
      className: s()(H.i1, {
        [H.XN]: l
      }),
      "aria-hidden": true,
      children: p.map(e => (0, r.jsx)(m.NPJ, {
        theme: e,
        disableAdaptiveTheme: true,
        children: t => (0, r.jsxs)("div", {
          className: s()(t, H.$O),
          children: [(0, r.jsx)("div", {
            className: H.zC,
            children: (0, r.jsx)(O.A, {
              author: o,
              message: a,
              roleIcon: null != u ? u : (0, g.qB)(e) ? d : c,
              previewGuildId: n,
              isGroupStart: true
            })
          }), e === M.NJ8.LIGHT && i !== T.y.SOLID && (0, r.jsx)(m.Text, {
            variant: "text-xs/medium",
            color: "text-subtle",
            className: H.W_,
            children: B.intl.string(B.t.nxwm3I)
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
    children: [(0, r.jsx)(m.dOG, {
      label: B.intl.string(B.t.vceJPk),
      checked: t.hoist,
      onChange: e => (0, I.E9)(t.id, e, t.mentionable),
      disabled: n
    }), (0, r.jsx)(m.cGx, {
      className: H.yF
    }), (0, r.jsx)(m.dOG, {
      label: B.intl.formatToPlainString(B.t.DTXoJQ, {}),
      description: B.intl.string(B.t.kRg5W5),
      checked: t.mentionable,
      onChange: e => (0, I.E9)(t.id, t.hoist, e),
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
  } = e, a = (0, y.jV)(t.id, n), o = (0, d.bG)([T.A], () => T.A.getRoleStyleData(n.id)), c = !a, u = null != o && a ? o.currentStyle : T.y.SOLID, g = (0, N.Oy)(n), p = i || g, f = (0, d.bG)([S.A], () => S.A.canImpersonateRole(t, n)), {
    headerHeight: b,
    headerRef: h
  } = (0, P.A)(0), {
    scrolledToTop: x,
    handleScroll: j
  } = (0, R.u)();
  return (0, r.jsx)(m.GtU, {
    className: H.XG,
    style: {
      scrollPaddingTop: b
    },
    onScroll: j,
    children: (0, r.jsxs)("div", {
      className: V.Q,
      children: [(0, r.jsx)("div", {
        className: s()(V.wx, V.ln, {
          [V.l6]: !x
        }),
        ref: h,
        children: (0, r.jsx)(R.A, {
          guild: t,
          role: n,
          selectedSection: L.T$.DISPLAY,
          setSelectedSection: l
        })
      }), (0, r.jsx)(X, {
        role: n,
        disabled: p
      }), (0, r.jsx)("div", {
        className: H.U9,
        children: (0, r.jsx)(G.A, {
          role: n
        })
      }), (0, r.jsx)(m.cGx, {
        className: H.yF
      }), (a || c) && null != u && (0, r.jsx)(J, {
        role: n,
        guildId: t.id,
        selectedStyle: u,
        disabled: p,
        shouldShowUpsell: c
      }), u !== T.y.HOLOGRAPHIC && null != u && (0, r.jsx)(q, {
        role: n,
        disabled: p,
        currentStyle: u,
        hasEnhancedRoleColors: a
      }), u === T.y.HOLOGRAPHIC && (0, r.jsx)(E.A, {
        className: H.u,
        children: (0, r.jsx)(m.Text, {
          variant: "text-xs/medium",
          children: B.intl.string(F.default.tBhCyr)
        })
      }), (0, r.jsx)(w.A, {
        guild: t,
        disabled: p,
        role: n
      }), (0, r.jsx)(Q, {
        role: n,
        guildId: t.id,
        selectedStyle: u,
        disableInteraction: !a
      }), (0, r.jsx)(m.cGx, {
        className: H.yF
      }), (0, r.jsx)($, {
        role: n,
        disabled: p
      }), f ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.cGx, {
          className: H.yF
        }), (0, r.jsx)(D.G, {
          guildId: t.id,
          role: n
        })]
      }) : null]
    })
  })
}