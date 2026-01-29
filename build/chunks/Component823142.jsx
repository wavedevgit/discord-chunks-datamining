/** Chunk was on 1113 **/
/** chunk id: 823142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AV: () => w,
  Ay: () => T,
  P4: () => P,
  kD: () => R,
  sM: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk914430 = require("./914430.js"),
  Chunk442433 = require("./442433.js"),
  Chunk676002 = require("./676002.jsx"),
  Chunk485947 = require("./485947.jsx"),
  Chunk924985 = require("./924985.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk543465 = require("./543465.js"),
  Chunk551851 = require("./551851.js"),
  Chunk879124 = require("./879124.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk33925 = require("./33925.js");

function C(e) {
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
let N = Chunk64700.memo(function(e) {
    let t, {
        channel: i,
        connectChannelDragSource: d,
        connectChannelDropTarget: f,
        disableManageChannels: _,
        position: x,
        sortingPosition: N,
        hideIcon: T,
        children: P
      } = e,
      w = (0, o.bG)([O.Ay], () => O.Ay.isChannelMuted(i.getGuildId(), i.id)),
      R = (0, o.bG)([b.A], () => b.A.isCollapsed(i.id)),
      D = (0, o.bG)([y.A], () => y.A.can(j.xBc.MANAGE_CHANNELS, i));
    t = null != N ? x > N ? E.mU : E.TR : E.fx;
    let L = l.useCallback(() => {
        R ? (0, p.fh)(i.id) : (0, p.Gv)(i.id)
      }, [i.id, R]),
      M = l.useCallback(e => {
        if ("null" !== i.id) {
          let t = A.A.getGuild(i.getGuildId());
          null != t && (0, g.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("75149"), n.e("30997")]).then(n.bind(n, 725756));
            return n => (0, r.jsx)(e, S(C({}, n), {
              channel: i,
              guild: t
            }))
          })
        }
      }, [i]),
      k = l.useCallback(() => {
        let e = i.type === j.rbe.GUILD_CATEGORY ? null : i.type,
          t = i.getGuildId();
        null != t && (0, h.mMO)(async () => {
          let {
            default: l
          } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
          return n => (0, r.jsx)(l, S(C({}, n), {
            channelType: e,
            guildId: t,
            categoryId: "null" !== i.id ? i.id : null
          }))
        })
      }, [i]),
      G = (0, a.rm)(i.id),
      {
        role: U,
        tabIndex: V
      } = G,
      B = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }
        if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
          }(e, t), Object.getOwnPropertySymbols)
          for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(G, ["role", "tabIndex"]),
      H = l.useRef(null),
      F = l.useRef(null),
      K = (0, r.jsxs)("li", {
        className: t,
        "data-dnd-name": i.name,
        children: [(0, r.jsx)(h.vN3, {
          focusTarget: H,
          ringTarget: F,
          offset: {
            left: 4,
            right: 4
          },
          children: (0, r.jsxs)("div", {
            ref: F,
            className: s()(E.Ki, E.iE, {
              [E.yZ]: R,
              [E.SU]: w,
              [E.vk]: true
            }),
            onContextMenu: M,
            children: [(0, r.jsxs)(h.DUT, S(C({
              innerRef: H,
              className: E.rb,
              tabIndex: V
            }, B), {
              onClick: L,
              "aria-label": v.intl.formatToPlainString(v.t.y5l3J2, {
                categoryName: i.name
              }),
              "aria-expanded": !R,
              focusProps: {
                enabled: false
              },
              children: [(0, r.jsx)(m.A, {
                className: E.UU,
                children: (0, r.jsx)(c.A, {
                  children: i.name
                })
              }), T ? null : (0, r.jsx)(h.abt, {
                size: "md",
                color: "currentColor",
                className: E.Kk
              })]
            })), (0, r.jsx)("div", {
              onClick: I,
              className: E.Y_,
              children: D && !_ ? (0, r.jsx)(u.m, {
                text: v.intl.string(v.t["fUYU+j"]),
                children: (0, r.jsx)(h.DUT, {
                  className: s()(E.c9, E.ih),
                  onClick: k,
                  tabIndex: V,
                  role: "button",
                  "aria-label": v.intl.string(v.t["fUYU+j"]),
                  children: (0, r.jsx)(h.TIR, {
                    size: "xs",
                    color: "currentColor",
                    className: E.hs
                  })
                })
              }) : null
            })]
          })
        }), P]
      });
    return null != f && null != d ? f(d(K)) : K
  }),
  T = (0, Chunk676002.a)(N),
  P = Chunk64700.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: l
    } = e;
    return (0, r.jsx)("li", {
      className: s()(l, E.fx),
      children: (0, r.jsxs)("div", {
        className: s()(E.Ki, E._V),
        children: [(0, r.jsx)("div", {
          className: E.rb,
          children: (0, r.jsx)(m.A, {
            className: E.UU,
            children: (0, r.jsx)(c.A, {
              children: t
            })
          })
        }), null != n ? (0, r.jsx)(u.m, {
          asContainer: true,
          text: v.intl.string(v.t["5qNmsU"]),
          children: (0, r.jsx)(h.DUT, {
            className: E.r,
            onClick: n,
            children: (0, r.jsx)(h.aXh, {
              size: "md",
              color: "currentColor",
              className: E.X8
            })
          })
        }) : null]
      })
    })
  }),
  w = Chunk64700.memo(function(e) {
    let {
      category: t
    } = e, n = (0, o.bG)([_.A], () => _.A.isVoiceCategoryCollapsed(t.guild.id)), i = l.useCallback(() => {
      n ? (0, x.T)(t.guild.id) : (0, x.E)(t.guild.id)
    }, [t.guild.id, n]);
    return (0, r.jsx)("div", {
      className: E.oA,
      children: (0, r.jsx)(d.$nd, {
        variant: "secondary",
        fullWidth: true,
        onClick: i,
        icon: h.HKD,
        text: n ? v.intl.string(v.t["/eB9Bg"]) : v.intl.string(v.t.Q2gPWl)
      })
    })
  }),
  R = Chunk64700.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, l = (0, o.bG)([_.A], () => _.A.isVoiceCategoryCollapsed(t.guild.id));
    return l || null == n || n.record.type === j.rbe.GUILD_CATEGORY ? l ? (0, r.jsx)("li", {
      className: E.fx,
      children: (0, r.jsx)("div", {
        className: s()(E.Ki, E._V),
        children: (0, r.jsx)(m.A, {
          className: E.UU,
          children: (0, r.jsx)(c.A, {
            children: v.intl.string(v.t["V/u9Dy"])
          })
        })
      })
    }) : null : (0, r.jsx)("div", {
      style: {
        height: 16
      }
    })
  }),
  D = Chunk64700.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, r.jsx)("li", {
      className: E.fx,
      children: (0, r.jsx)("div", {
        className: s()(E.Ki, E._V),
        children: (0, r.jsx)(m.A, {
          className: E.UU,
          children: (0, r.jsx)(c.A, {
            children: t.name
          })
        })
      })
    })
  })