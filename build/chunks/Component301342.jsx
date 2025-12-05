/** Chunk was on 64271 **/
/** chunk id: 301342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => w,
  Qo: () => T,
  ZP: () => Z,
  kw: () => R,
  rj: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
let N = Chunk473749.memo(function(e) {
    let t, {
        channel: l,
        connectChannelDragSource: d,
        connectChannelDropTarget: g,
        disableManageChannels: v,
        position: j,
        sortingPosition: N,
        hideIcon: Z,
        children: w
      } = e,
      T = (0, s.e7)([O.ZP], () => O.ZP.isChannelMuted(l.getGuildId(), l.id)),
      A = (0, s.e7)([b.Z], () => b.Z.isCollapsed(l.id)),
      R = (0, s.e7)([y.Z], () => y.Z.can(x.Plq.MANAGE_CHANNELS, l));
    t = null != N ? j > N ? E.containerDragAfter : E.containerDragBefore : E.containerDefault;
    let D = i.useCallback(() => {
        A ? (0, h.mJ)(l.id) : (0, h.c4)(l.id)
      }, [l.id, A]),
      L = i.useCallback(e => {
        if ("null" !== l.id) {
          let t = _.Z.getGuild(l.getGuildId());
          null != t && (0, p.jW)(e, async () => {
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
      M = i.useCallback(() => {
        let e = l.type === x.d4z.GUILD_CATEGORY ? null : l.type,
          t = l.getGuildId();
        null != t && (0, f.ZDy)(async () => {
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
      k = (0, a.JA)(l.id),
      {
        role: G,
        tabIndex: U
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
      F = i.useRef(null),
      V = i.useRef(null),
      H = (0, r.jsxs)("li", {
        className: t,
        "data-dnd-name": l.name,
        children: [(0, r.jsx)(f.tEY, {
          focusTarget: F,
          ringTarget: V,
          offset: {
            left: 4,
            right: 4
          },
          children: (0, r.jsxs)("div", {
            ref: V,
            className: o()(E.iconVisibility, E.wrapper, {
              [E.collapsed]: A,
              [E.muted]: T,
              [E.clickable]: true
            }),
            onContextMenu: L,
            children: [(0, r.jsxs)(f.P3F, I(S({
              innerRef: F,
              className: E.mainContent,
              tabIndex: U
            }, B), {
              onClick: D,
              "aria-label": C.intl.formatToPlainString(C.t.y5l3J2, {
                categoryName: l.name
              }),
              "aria-expanded": !A,
              focusProps: {
                enabled: false
              },
              children: [(0, r.jsx)(m.Z, {
                className: E.name,
                children: (0, r.jsx)(c.Z, {
                  children: l.name
                })
              }), Z ? null : (0, r.jsx)(f.CJ0, {
                size: "md",
                color: "currentColor",
                className: E.icon
              })]
            })), (0, r.jsx)("div", {
              onClick: P,
              className: E.children,
              children: R && !v ? (0, r.jsx)(u.u, {
                text: C.intl.string(C.t["fUYU+j"]),
                children: (0, r.jsx)(f.P3F, {
                  className: o()(E.addButton, E.forceVisible),
                  onClick: M,
                  tabIndex: U,
                  role: "button",
                  "aria-label": C.intl.string(C.t["fUYU+j"]),
                  children: (0, r.jsx)(f.BRu, {
                    size: "xs",
                    color: "currentColor",
                    className: E.addButtonIcon
                  })
                })
              }) : null
            })]
          })
        }), w]
      });
    return null != g && null != d ? g(d(H)) : H
  }),
  Z = (0, Chunk146773.B)(N),
  w = Chunk473749.memo(function(e) {
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
          children: (0, r.jsx)(m.Z, {
            className: E.name,
            children: (0, r.jsx)(c.Z, {
              children: t
            })
          })
        }), null != n ? (0, r.jsx)(u.u, {
          asContainer: true,
          text: C.intl.string(C.t["5qNmsU"]),
          children: (0, r.jsx)(f.P3F, {
            className: E.dismissButton,
            onClick: n,
            children: (0, r.jsx)(f.k$p, {
              size: "md",
              color: "currentColor",
              className: E.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  T = Chunk473749.memo(function(e) {
    let {
      category: t
    } = e, n = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id)), l = i.useCallback(() => {
      n ? (0, j.s)(t.guild.id) : (0, j.M)(t.guild.id)
    }, [t.guild.id, n]);
    return (0, r.jsx)("div", {
      className: E.refreshVoiceChannelsButton,
      children: (0, r.jsx)(d.zxk, {
        variant: "secondary",
        fullWidth: true,
        onClick: l,
        icon: f.gj8,
        text: n ? C.intl.string(C.t["/eB9Bg"]) : C.intl.string(C.t.Q2gPWl)
      })
    })
  }),
  A = Chunk473749.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, i = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
    return i || null == n || n.record.type === x.d4z.GUILD_CATEGORY ? i ? (0, r.jsx)("li", {
      className: E.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(E.iconVisibility, E.wrapperStatic),
        children: (0, r.jsx)(m.Z, {
          className: E.name,
          children: (0, r.jsx)(c.Z, {
            children: C.intl.string(C.t["V/u9Dy"])
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
      className: E.containerDefault,
      children: (0, r.jsx)("div", {
        className: o()(E.iconVisibility, E.wrapperStatic),
        children: (0, r.jsx)(m.Z, {
          className: E.name,
          children: (0, r.jsx)(c.Z, {
            children: t.name
          })
        })
      })
    })
  })