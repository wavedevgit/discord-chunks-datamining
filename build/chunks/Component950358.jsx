/** Chunk was on 39048 **/
/** chunk id: 950358, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk112389 = require("./112389.js"),
  Chunk166444 = require("./166444.jsx"),
  Chunk637248 = require("./637248.js"),
  Chunk418448 = require("./418448.js"),
  Chunk561321 = require("./561321.js"),
  Chunk82566 = require("./82566.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk959132 = require("./959132.js");

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

function O(e, t) {
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

function v(e) {
  let {
    guild: t,
    channel: i
  } = e, l = (0, f.Rg)(i.id);
  return "null" === i.id ? (0, r.jsx)("div", {
    className: s()(j.Fv, j.d0),
    children: (0, r.jsx)(c.Text, {
      className: j.O1,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    })
  }) : (0, r.jsxs)(c.DUT, {
    className: s()(j.Fv, {
      [j.d0]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, d.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99011"), n.e("21420"), n.e("75149"), n.e("21875")]).then(n.bind(n, 725756));
        return n => (0, r.jsx)(e, O(_({}, n), {
          channel: i,
          guild: t
        }))
      })
    },
    onClick: e => (e.stopPropagation(), (0, u.S)(t.id, i.id) ? (0, p.bN)(i.id) : (0, c.mMO)(async () => {
      let {
        default: e
      } = await n.e("54857").then(n.bind(n, 147696));
      return n => (0, r.jsx)(e, O(_({}, n), {
        guildId: t.id,
        startingChannelId: i.id
      }))
    }), true),
    children: [(0, r.jsx)(c.Text, {
      className: j.O1,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), (0, r.jsx)(c.P7L, {
      checked: l
    })]
  })
}
let y = Chunk64700.memo(function() {
    return (0, r.jsx)("div", {
      className: j.me
    })
  }),
  A = Chunk64700.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: j.Ks,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  E = Chunk64700.memo(function(e) {
    let {
      channel: t,
      category: i,
      guild: l,
      isFirstChannel: m,
      isLastChannel: v,
      tooltipDirection: E = "right"
    } = e, N = (0, f.Rg)(t.id, i.id), S = (0, f.eK)(t.id, i.id), I = (0, f.v)(t.id, i.id), C = (0, f.fS)(l.id, i.id), T = null != (0, h.A)(l).find(e => e.id === t.id);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.m, {
        asContainer: true,
        __unsupportedReactNodeAsText: null != I ? I : C,
        delay: 500,
        position: E,
        children: (0, r.jsxs)(c.DUT, {
          className: s()(j.WG, {
            [j.Qn]: m,
            [j.wp]: v,
            [j.r9]: S
          }),
          onClick: e => {
            if (!S) return e.stopPropagation(), (0, u.S)(l.id, t.id) ? (0, p.bN)(t.id) : (0, c.mMO)(async () => {
              let {
                default: e
              } = await n.e("54857").then(n.bind(n, 147696));
              return n => (0, r.jsx)(e, O(_({}, n), {
                guildId: l.id,
                startingChannelId: t.id
              }))
            }), true
          },
          onContextMenu: e => {
            t.isGuildVocal() ? (0, d.L3)(e, async () => {
              let {
                default: e
              } = await Promise.all([n.e("97262"), n.e("99011"), n.e("21420"), n.e("57287"), n.e("40394"), n.e("16096")]).then(n.bind(n, 698193));
              return n => (0, r.jsx)(e, O(_({}, n), {
                channel: t,
                guild: l
              }))
            }) : (0, d.L3)(e, async () => {
              let {
                default: e
              } = await Promise.all([n.e("97262"), n.e("99011"), n.e("21420"), n.e("57287"), n.e("24664")]).then(n.bind(n, 370372));
              return n => (0, r.jsx)(e, O(_({}, n), {
                channel: t,
                guild: l
              }))
            })
          },
          children: [(0, r.jsx)("div", {
            className: j.yW,
            children: (0, r.jsxs)("div", {
              className: j.HA,
              children: [(0, r.jsx)(g.gm, {
                channel: t,
                guild: l
              }), (0, r.jsx)(a.A, {
                className: j.__invalid_name,
                children: (0, r.jsx)(c.Text, {
                  className: j.be,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: S ? "text-muted" : "text-default",
                  children: t.name
                })
              }), T ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(A, {
                  index: 0
                }), (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: j.qy,
                  color: "text-brand",
                  children: x.intl.string(x.t.mPxmeE)
                })]
              }) : null]
            })
          }), (0, r.jsx)("div", {
            className: j.tN,
            children: (0, u.S)(t.guild_id, t.id) ? (0, r.jsx)(c.P7L, {
              checked: N,
              disabled: S
            }) : (0, r.jsx)(c.Button, {
              size: "sm",
              variant: "secondary",
              text: x.intl.string(x.t.zA9d1J),
              icon: c.XAi,
              onClick: b.tEg
            })
          })]
        })
      }), !v && (0, r.jsx)(y, {})]
    })
  });

function N(e) {
  let {
    categories: t,
    guild: n,
    className: l,
    hasSidebar: s
  } = e, a = i.useCallback(e => {
    let i = t._categories[e];
    return (0, r.jsx)(v, {
      channel: i.channel,
      guild: n
    }, i.channel.id)
  }, [t, n]), o = i.useCallback((e, i) => {
    let l = t._categories[e],
      a = t[l.channel.id][i];
    return null == a ? null : (0, r.jsx)(E, {
      category: l.channel,
      channel: a.channel,
      guild: n,
      isFirstChannel: 0 === i,
      isLastChannel: t[l.channel.id].length - 1 === i,
      tooltipDirection: s ? "right" : "top"
    }, a.channel.id)
  }, [t, n, s]), c = (0, m.zH)(n.id, t, 64);
  return (0, r.jsx)("div", {
    className: l,
    children: c.map((e, t) => {
      let n = a(t),
        i = [],
        l = e.rowCount;
      if (0 === l) return null;
      for (let e = 0; e < l; e++) i.push(o(t, e));
      return (0, r.jsxs)(r.Fragment, {
        children: [n, i]
      })
    })
  })
}