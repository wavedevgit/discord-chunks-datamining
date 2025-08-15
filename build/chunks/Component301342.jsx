/** Chunk was on 85362 **/
/** chunk id: 301342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => w,
  Qo: () => Z,
  ZP: () => N,
  kw: () => A,
  rj: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211739 = require("./211739.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk82295 = require("./82295.jsx"),
  Chunk111028 = require("./111028.jsx"),
  Chunk680089 = require("./680089.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk9156 = require("./9156.js"),
  Chunk203818 = require("./203818.js"),
  Chunk438144 = require("./438144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84688 = require("./84688.js");

function x(e) {
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
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  e.stopPropagation()
}
let P = Chunk73800.memo(function(e) {
    let t, {
        channel: l,
        connectChannelDragSource: f,
        connectChannelDropTarget: y,
        disableManageChannels: v,
        position: P,
        sortingPosition: N,
        hideIcon: w,
        children: Z
      } = e,
      T = (0, s.e7)([O.ZP], () => O.ZP.isChannelMuted(l.getGuildId(), l.id)),
      A = (0, s.e7)([m.Z], () => m.Z.isCollapsed(l.id)),
      R = (0, s.e7)([_.Z], () => _.Z.can(j.Plq.MANAGE_CHANNELS, l));
    t = null != N ? P > N ? E.containerDragAfter : E.containerDragBefore : E.containerDefault;
    let D = i.useCallback(() => {
        A ? (0, d.mJ)(l.id) : (0, d.c4)(l.id)
      }, [l.id, A]),
      L = i.useCallback(e => {
        if ("null" !== l.id) {
          let t = b.Z.getGuild(l.getGuildId());
          null != t && (0, p.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
            return n => (0, r.jsx)(e, S(x({}, n), {
              channel: l,
              guild: t
            }))
          })
        }
      }, [l]),
      M = i.useCallback(() => {
        let e = l.type === j.d4z.GUILD_CATEGORY ? null : l.type,
          t = l.getGuildId();
        null != t && (0, u.ZDy)(async () => {
          let {
            default: i
          } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
          return n => (0, r.jsx)(i, S(x({}, n), {
            channelType: e,
            guildId: t,
            categoryId: "null" !== l.id ? l.id : null
          }))
        })
      }, [l]),
      k = (0, a.JA)(l.id),
      {
        role: U,
        tabIndex: G
      } = k,
      B = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(k, ["role", "tabIndex"]),
      V = i.useRef(null),
      H = i.useRef(null),
      F = (0, r.jsxs)("li", {
        className: t,
        "data-dnd-name": l.name,
        children: [(0, r.jsx)(u.tEY, {
          focusTarget: V,
          ringTarget: H,
          offset: {
            left: 4,
            right: 4
          },
          children: (0, r.jsxs)("div", {
            ref: H,
            className: o()(E.iconVisibility, E.wrapper, {
              [E.collapsed]: A,
              [E.muted]: T,
              [E.clickable]: true
            }),
            onContextMenu: L,
            children: [(0, r.jsxs)(u.P3F, S(x({
              innerRef: V,
              className: E.mainContent,
              tabIndex: G
            }, B), {
              onClick: D,
              "aria-label": C.intl.formatToPlainString(C.t.y5l3Jy, {
                categoryName: l.name
              }),
              "aria-expanded": !A,
              focusProps: {
                enabled: false
              },
              children: [(0, r.jsx)(h.Z, {
                className: E.name,
                children: (0, r.jsx)(g.Z, {
                  children: l.name
                })
              }), w ? null : (0, r.jsx)(u.CJ0, {
                size: "md",
                color: "currentColor",
                className: E.icon
              })]
            })), (0, r.jsx)("div", {
              onClick: I,
              className: E.children,
              children: R && !v ? (0, r.jsx)(u.ua7, {
                text: C.intl.string(C.t["fUYU+v"]),
                children: e => {
                  let {
                    onMouseEnter: t,
                    onMouseLeave: n
                  } = e;
                  return (0, r.jsx)(c.zx, {
                    "aria-label": C.intl.string(C.t["fUYU+v"]),
                    look: c.zx.Looks.BLANK,
                    size: c.zx.Sizes.NONE,
                    className: o()(E.addButton, E.forceVisible),
                    onClick: M,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    tabIndex: G,
                    focusProps: {
                      offset: {
                        top: false,
                        right: false,
                        bottom: false,
                        left: false
                      }
                    },
                    children: (0, r.jsx)(u.BRu, {
                      size: "xs",
                      color: "currentColor",
                      className: E.addButtonIcon
                    })
                  })
                }
              }) : null
            })]
          })
        }), Z]
      });
    return null != y && null != f ? y(f(F)) : F
  }),
  N = (0, Chunk146773.B)(P),
  w = Chunk73800.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: i
    } = e;
    return (0, r.jsx)("li", {
      className: o()(i, E.containerDefault),
      children: (0, r.jsxs)("div", {
        className: o()(E.iconVisibility, E.wrapperStatic),
        children: [(0, r.jsx)("div", {
          className: E.mainContent,
          children: (0, r.jsx)(h.Z, {
            className: E.name,
            children: (0, r.jsx)(g.Z, {
              children: t
            })
          })
        }), null != n ? (0, r.jsx)(u.DY3, {
          text: C.intl.string(C.t["5qNmsb"]),
          className: E.dismissWrapper,
          children: (0, r.jsx)(u.P3F, {
            className: E.dismissButton,
            onClick: n,
            children: (0, r.jsx)(u.k$p, {
              size: "md",
              color: "currentColor",
              className: E.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  Z = Chunk73800.memo(function(e) {
    let {
      category: t
    } = e, n = (0, s.e7)([y.Z], () => y.Z.isVoiceCategoryCollapsed(t.guild.id)), l = i.useCallback(() => {
      n ? (0, v.s)(t.guild.id) : (0, v.M)(t.guild.id)
    }, [t.guild.id, n]);
    return (0, r.jsxs)(c.zx, {
      look: c.zx.Looks.FILLED,
      color: c.zx.Colors.PRIMARY,
      className: E.refreshVoiceChannelsButton,
      innerClassName: E.refreshVoiceChannelsButtonInner,
      onClick: l,
      children: [(0, r.jsx)(u.gj8, {
        size: "xs",
        color: "currentColor",
        className: E.voiceChannelsToggleIcon
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: n ? C.intl.string(C.t["/eB9Bg"]) : C.intl.string(C.t.Q2gPWl)
      })]
    })
  }),
  T = Chunk73800.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, i = (0, s.e7)([y.Z], () => y.Z.isVoiceCategoryCollapsed(t.guild.id));
    return i || null == n || n.record.type === j.d4z.GUILD_CATEGORY ? i ? (0, r.jsx)("li", {
      className: E.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(E.iconVisibility, E.wrapperStatic),
        children: (0, r.jsx)(h.Z, {
          className: E.name,
          children: (0, r.jsx)(g.Z, {
            children: C.intl.string(C.t["V/u9Dw"])
          })
        })
      })
    }) : null : (0, r.jsx)("div", {
      style: {
        height: 16
      }
    })
  }),
  A = Chunk73800.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, r.jsx)("li", {
      className: E.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(E.iconVisibility, E.wrapperStatic),
        children: (0, r.jsx)(h.Z, {
          className: E.name,
          children: (0, r.jsx)(g.Z, {
            children: t.name
          })
        })
      })
    })
  })