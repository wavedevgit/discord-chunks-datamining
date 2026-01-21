/** Chunk was on 82124 **/
/** chunk id: 301342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => T,
  Qo: () => A,
  ZP: () => N,
  kw: () => R,
  rj: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
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
  Chunk577022 = require("./577022.js");

function _(e) {
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
let Z = Chunk473749.memo(function(e) {
    let t, {
        channel: l,
        connectChannelDragSource: d,
        connectChannelDropTarget: g,
        disableManageChannels: j,
        position: x,
        sortingPosition: Z,
        hideIcon: N,
        children: T
      } = e,
      A = (0, s.e7)([O.ZP], () => O.ZP.isChannelMuted(l.getGuildId(), l.id)),
      w = (0, s.e7)([b.Z], () => b.Z.isCollapsed(l.id)),
      R = (0, s.e7)([v.Z], () => v.Z.can(C.Plq.MANAGE_CHANNELS, l));
    t = null != Z ? x > Z ? S.containerDragAfter : S.containerDragBefore : S.containerDefault;
    let D = i.useCallback(() => {
        w ? (0, f.mJ)(l.id) : (0, f.c4)(l.id)
      }, [l.id, w]),
      M = i.useCallback(e => {
        if ("null" !== l.id) {
          let t = y.Z.getGuild(l.getGuildId());
          null != t && (0, h.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
            return n => (0, r.jsx)(e, I(_({}, n), {
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
          } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
          return n => (0, r.jsx)(i, I(_({}, n), {
            channelType: e,
            guildId: t,
            categoryId: "null" !== l.id ? l.id : null
          }))
        })
      }, [l]),
      L = (0, o.JA)(l.id),
      {
        role: U,
        tabIndex: G
      } = L,
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
      }(L, ["role", "tabIndex"]),
      F = i.useRef(null),
      H = i.useRef(null),
      V = (0, r.jsxs)("li", {
        className: t,
        "data-dnd-name": l.name,
        children: [(0, r.jsx)(p.tEY, {
          focusTarget: F,
          ringTarget: H,
          offset: {
            left: 4,
            right: 4
          },
          children: (0, r.jsxs)("div", {
            ref: H,
            className: a()(S.iconVisibility, S.wrapper, {
              [S.collapsed]: w,
              [S.muted]: A,
              [S.clickable]: true
            }),
            onContextMenu: M,
            children: [(0, r.jsxs)(p.P3F, I(_({
              innerRef: F,
              className: S.mainContent,
              tabIndex: G
            }, B), {
              onClick: D,
              "aria-label": E.intl.formatToPlainString(E.t.y5l3J2, {
                categoryName: l.name
              }),
              "aria-expanded": !w,
              focusProps: {
                enabled: false
              },
              children: [(0, r.jsx)(m.Z, {
                className: S.name,
                children: (0, r.jsx)(c.Z, {
                  children: l.name
                })
              }), N ? null : (0, r.jsx)(p.CJ0, {
                size: "md",
                color: "currentColor",
                className: S.icon
              })]
            })), (0, r.jsx)("div", {
              onClick: P,
              className: S.children,
              children: R && !j ? (0, r.jsx)(u.u, {
                text: E.intl.string(E.t["fUYU+j"]),
                children: (0, r.jsx)(p.P3F, {
                  className: a()(S.addButton, S.forceVisible),
                  onClick: k,
                  tabIndex: G,
                  role: "button",
                  "aria-label": E.intl.string(E.t["fUYU+j"]),
                  children: (0, r.jsx)(p.BRu, {
                    size: "xs",
                    color: "currentColor",
                    className: S.addButtonIcon
                  })
                })
              }) : null
            })]
          })
        }), T]
      });
    return null != g && null != d ? g(d(V)) : V
  }),
  N = (0, Chunk146773.B)(Z),
  T = Chunk473749.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: i
    } = e;
    return (0, r.jsx)("li", {
      className: a()(i, S.containerDefault),
      children: (0, r.jsxs)("div", {
        className: a()(S.iconVisibility, S.wrapperStatic),
        children: [(0, r.jsx)("div", {
          className: S.mainContent,
          children: (0, r.jsx)(m.Z, {
            className: S.name,
            children: (0, r.jsx)(c.Z, {
              children: t
            })
          })
        }), null != n ? (0, r.jsx)(u.u, {
          asContainer: true,
          text: E.intl.string(E.t["5qNmsU"]),
          children: (0, r.jsx)(p.P3F, {
            className: S.dismissButton,
            onClick: n,
            children: (0, r.jsx)(p.k$p, {
              size: "md",
              color: "currentColor",
              className: S.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  A = Chunk473749.memo(function(e) {
    let {
      category: t
    } = e, n = (0, s.e7)([j.Z], () => j.Z.isVoiceCategoryCollapsed(t.guild.id)), l = i.useCallback(() => {
      n ? (0, x.s)(t.guild.id) : (0, x.M)(t.guild.id)
    }, [t.guild.id, n]);
    return (0, r.jsx)("div", {
      className: S.refreshVoiceChannelsButton,
      children: (0, r.jsx)(d.zxk, {
        variant: "secondary",
        fullWidth: true,
        onClick: l,
        icon: p.gj8,
        text: n ? E.intl.string(E.t["/eB9Bg"]) : E.intl.string(E.t.Q2gPWl)
      })
    })
  }),
  w = Chunk473749.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, i = (0, s.e7)([j.Z], () => j.Z.isVoiceCategoryCollapsed(t.guild.id));
    return i || null == n || n.record.type === C.d4z.GUILD_CATEGORY ? i ? (0, r.jsx)("li", {
      className: S.containerDefault,
      children: (0, r.jsx)("div", {
        className: a()(S.iconVisibility, S.wrapperStatic),
        children: (0, r.jsx)(m.Z, {
          className: S.name,
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
  R = Chunk473749.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, r.jsx)("li", {
      className: S.containerDefault,
      children: (0, r.jsx)("div", {
        className: a()(S.iconVisibility, S.wrapperStatic),
        children: (0, r.jsx)(m.Z, {
          className: S.name,
          children: (0, r.jsx)(c.Z, {
            children: t.name
          })
        })
      })
    })
  })