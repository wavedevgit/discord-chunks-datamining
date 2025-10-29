/** Chunk was on 56710 **/
/** chunk id: 301342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => T,
  Qo: () => w,
  ZP: () => Z,
  kw: () => R,
  rj: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211739 = require("./211739.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk82295 = require("./82295.jsx"),
  Chunk680089 = require("./680089.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk9156 = require("./9156.js"),
  Chunk203818 = require("./203818.js"),
  Chunk438144 = require("./438144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84688 = require("./84688.js");

function S(e) {
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

function I(e, t) {
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

function P(e) {
  e.stopPropagation()
}
let N = Chunk647438.memo(function(e) {
    let t, {
        channel: l,
        connectChannelDragSource: g,
        connectChannelDropTarget: v,
        disableManageChannels: j,
        position: N,
        sortingPosition: Z,
        hideIcon: T,
        children: w
      } = e,
      A = (0, s.e7)([y.ZP], () => y.ZP.isChannelMuted(l.getGuildId(), l.id)),
      R = (0, s.e7)([b.Z], () => b.Z.isCollapsed(l.id)),
      D = (0, s.e7)([O.Z], () => O.Z.can(C.Plq.MANAGE_CHANNELS, l));
    t = null != Z ? N > Z ? x.containerDragAfter : x.containerDragBefore : x.containerDefault;
    let L = i.useCallback(() => {
        R ? (0, f.mJ)(l.id) : (0, f.c4)(l.id)
      }, [l.id, R]),
      M = i.useCallback(e => {
        if ("null" !== l.id) {
          let t = _.Z.getGuild(l.getGuildId());
          null != t && (0, h.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
            return n => (0, r.jsx)(e, I(S({}, n), {
              channel: l,
              guild: t
            }))
          })
        }
      }, [l]),
      k = i.useCallback(() => {
        let e = l.type === C.d4z.GUILD_CATEGORY ? null : l.type,
          t = l.getGuildId();
        null != t && (0, p.ZDy)(async () => {
          let {
            default: i
          } = await Promise.all([n.e("29497"), n.e("53781")]).then(n.bind(n, 241865));
          return n => (0, r.jsx)(i, I(S({}, n), {
            channelType: e,
            guildId: t,
            categoryId: "null" !== l.id ? l.id : null
          }))
        })
      }, [l]),
      G = (0, a.JA)(l.id),
      {
        role: U,
        tabIndex: B
      } = G,
      F = function(e, t) {
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
      }(G, ["role", "tabIndex"]),
      V = i.useRef(null),
      H = i.useRef(null),
      z = (0, r.jsxs)("li", {
        className: t,
        "data-dnd-name": l.name,
        children: [(0, r.jsx)(p.tEY, {
          focusTarget: V,
          ringTarget: H,
          offset: {
            left: 4,
            right: 4
          },
          children: (0, r.jsxs)("div", {
            ref: H,
            className: o()(x.iconVisibility, x.wrapper, {
              [x.collapsed]: R,
              [x.muted]: A,
              [x.clickable]: true
            }),
            onContextMenu: M,
            children: [(0, r.jsxs)(p.P3F, I(S({
              innerRef: V,
              className: x.mainContent,
              tabIndex: B
            }, F), {
              onClick: L,
              "aria-label": E.intl.formatToPlainString(E.t.y5l3J2, {
                categoryName: l.name
              }),
              "aria-expanded": !R,
              focusProps: {
                enabled: false
              },
              children: [(0, r.jsx)(m.Z, {
                className: x.name,
                children: (0, r.jsx)(c.Z, {
                  children: l.name
                })
              }), T ? null : (0, r.jsx)(p.CJ0, {
                size: "md",
                color: "currentColor",
                className: x.icon
              })]
            })), (0, r.jsx)("div", {
              onClick: P,
              className: x.children,
              children: D && !j ? (0, r.jsx)(u.u, {
                text: E.intl.string(E.t["fUYU+j"]),
                children: (0, r.jsx)(d.zx, {
                  "aria-label": E.intl.string(E.t["fUYU+j"]),
                  look: d.zx.Looks.BLANK,
                  size: d.zx.Sizes.NONE,
                  className: o()(x.addButton, x.forceVisible),
                  onClick: k,
                  tabIndex: B,
                  focusProps: {
                    offset: {
                      top: false,
                      right: false,
                      bottom: false,
                      left: false
                    }
                  },
                  children: (0, r.jsx)(p.BRu, {
                    size: "xs",
                    color: "currentColor",
                    className: x.addButtonIcon
                  })
                })
              }) : null
            })]
          })
        }), w]
      });
    return null != v && null != g ? v(g(z)) : z
  }),
  Z = (0, Chunk146773.B)(N),
  T = Chunk647438.memo(function(e) {
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
          children: (0, r.jsx)(m.Z, {
            className: x.name,
            children: (0, r.jsx)(c.Z, {
              children: t
            })
          })
        }), null != n ? (0, r.jsx)(u.u, {
          asContainer: true,
          text: E.intl.string(E.t["5qNmsU"]),
          children: (0, r.jsx)(p.P3F, {
            className: x.dismissButton,
            onClick: n,
            children: (0, r.jsx)(p.k$p, {
              size: "md",
              color: "currentColor",
              className: x.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  w = Chunk647438.memo(function(e) {
    let {
      category: t
    } = e, n = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id)), l = i.useCallback(() => {
      n ? (0, j.s)(t.guild.id) : (0, j.M)(t.guild.id)
    }, [t.guild.id, n]);
    return (0, r.jsxs)(d.zx, {
      look: d.zx.Looks.FILLED,
      color: d.zx.Colors.PRIMARY,
      className: x.refreshVoiceChannelsButton,
      innerClassName: x.refreshVoiceChannelsButtonInner,
      onClick: l,
      children: [(0, r.jsx)(p.gj8, {
        size: "xs",
        color: "currentColor",
        className: x.voiceChannelsToggleIcon
      }), (0, r.jsx)(p.Text, {
        variant: "text-sm/medium",
        children: n ? E.intl.string(E.t["/eB9Bg"]) : E.intl.string(E.t.Q2gPWl)
      })]
    })
  }),
  A = Chunk647438.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, i = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
    return i || null == n || n.record.type === C.d4z.GUILD_CATEGORY ? i ? (0, r.jsx)("li", {
      className: x.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(x.iconVisibility, x.wrapperStatic),
        children: (0, r.jsx)(m.Z, {
          className: x.name,
          children: (0, r.jsx)(c.Z, {
            children: E.intl.string(E.t["V/u9Dy"])
          })
        })
      })
    }) : null : (0, r.jsx)("div", {
      style: {
        height: 16
      }
    })
  }),
  R = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, r.jsx)("li", {
      className: x.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(x.iconVisibility, x.wrapperStatic),
        children: (0, r.jsx)(m.Z, {
          className: x.name,
          children: (0, r.jsx)(c.Z, {
            children: t.name
          })
        })
      })
    })
  })