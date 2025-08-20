/** Chunk was on 91488 **/
/** chunk id: 301342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => w,
  Qo: () => Z,
  ZP: () => N,
  kw: () => A,
  rj: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function E(e) {
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
let P = Chunk647438.memo(function(e) {
    let t, {
        channel: l,
        connectChannelDragSource: f,
        connectChannelDropTarget: y,
        disableManageChannels: j,
        position: P,
        sortingPosition: N,
        hideIcon: w,
        children: Z
      } = e,
      T = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(l.getGuildId(), l.id)),
      A = (0, s.e7)([m.Z], () => m.Z.isCollapsed(l.id)),
      R = (0, s.e7)([O.Z], () => O.Z.can(v.Plq.MANAGE_CHANNELS, l));
    t = null != N ? P > N ? x.containerDragAfter : x.containerDragBefore : x.containerDefault;
    let D = i.useCallback(() => {
        A ? (0, d.mJ)(l.id) : (0, d.c4)(l.id)
      }, [l.id, A]),
      M = i.useCallback(e => {
        if ("null" !== l.id) {
          let t = b.Z.getGuild(l.getGuildId());
          null != t && (0, p.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
            return n => (0, r.jsx)(e, S(E({}, n), {
              channel: l,
              guild: t
            }))
          })
        }
      }, [l]),
      L = i.useCallback(() => {
        let e = l.type === v.d4z.GUILD_CATEGORY ? null : l.type,
          t = l.getGuildId();
        null != t && (0, u.ZDy)(async () => {
          let {
            default: i
          } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
          return n => (0, r.jsx)(i, S(E({}, n), {
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
      F = i.useRef(null),
      H = (0, r.jsxs)("li", {
        className: t,
        "data-dnd-name": l.name,
        children: [(0, r.jsx)(u.tEY, {
          focusTarget: V,
          ringTarget: F,
          offset: {
            left: 4,
            right: 4
          },
          children: (0, r.jsxs)("div", {
            ref: F,
            className: o()(x.iconVisibility, x.wrapper, {
              [x.collapsed]: A,
              [x.muted]: T,
              [x.clickable]: true
            }),
            onContextMenu: M,
            children: [(0, r.jsxs)(u.P3F, S(E({
              innerRef: V,
              className: x.mainContent,
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
                className: x.name,
                children: (0, r.jsx)(g.Z, {
                  children: l.name
                })
              }), w ? null : (0, r.jsx)(u.CJ0, {
                size: "md",
                color: "currentColor",
                className: x.icon
              })]
            })), (0, r.jsx)("div", {
              onClick: I,
              className: x.children,
              children: R && !j ? (0, r.jsx)(u.ua7, {
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
                    className: o()(x.addButton, x.forceVisible),
                    onClick: L,
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
                      className: x.addButtonIcon
                    })
                  })
                }
              }) : null
            })]
          })
        }), Z]
      });
    return null != y && null != f ? y(f(H)) : H
  }),
  N = (0, Chunk146773.B)(P),
  w = Chunk647438.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: i
    } = e;
    return (0, r.jsx)("li", {
      className: o()(i, x.containerDefault),
      children: (0, r.jsxs)("div", {
        className: o()(x.iconVisibility, x.wrapperStatic),
        children: [(0, r.jsx)("div", {
          className: x.mainContent,
          children: (0, r.jsx)(h.Z, {
            className: x.name,
            children: (0, r.jsx)(g.Z, {
              children: t
            })
          })
        }), null != n ? (0, r.jsx)(u.DY3, {
          text: C.intl.string(C.t["5qNmsb"]),
          className: x.dismissWrapper,
          children: (0, r.jsx)(u.P3F, {
            className: x.dismissButton,
            onClick: n,
            children: (0, r.jsx)(u.k$p, {
              size: "md",
              color: "currentColor",
              className: x.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  Z = Chunk647438.memo(function(e) {
    let {
      category: t
    } = e, n = (0, s.e7)([y.Z], () => y.Z.isVoiceCategoryCollapsed(t.guild.id)), l = i.useCallback(() => {
      n ? (0, j.s)(t.guild.id) : (0, j.M)(t.guild.id)
    }, [t.guild.id, n]);
    return (0, r.jsxs)(c.zx, {
      look: c.zx.Looks.FILLED,
      color: c.zx.Colors.PRIMARY,
      className: x.refreshVoiceChannelsButton,
      innerClassName: x.refreshVoiceChannelsButtonInner,
      onClick: l,
      children: [(0, r.jsx)(u.gj8, {
        size: "xs",
        color: "currentColor",
        className: x.voiceChannelsToggleIcon
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: n ? C.intl.string(C.t["/eB9Bg"]) : C.intl.string(C.t.Q2gPWl)
      })]
    })
  }),
  T = Chunk647438.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, i = (0, s.e7)([y.Z], () => y.Z.isVoiceCategoryCollapsed(t.guild.id));
    return i || null == n || n.record.type === v.d4z.GUILD_CATEGORY ? i ? (0, r.jsx)("li", {
      className: x.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(x.iconVisibility, x.wrapperStatic),
        children: (0, r.jsx)(h.Z, {
          className: x.name,
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
  A = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, r.jsx)("li", {
      className: x.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(x.iconVisibility, x.wrapperStatic),
        children: (0, r.jsx)(h.Z, {
          className: x.name,
          children: (0, r.jsx)(g.Z, {
            children: t.name
          })
        })
      })
    })
  })