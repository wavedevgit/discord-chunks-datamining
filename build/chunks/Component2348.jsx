/** Chunk was on 384 **/
/** chunk id: 2348, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk977258 = require("./977258.js"),
  Chunk473403 = require("./473403.jsx"),
  Chunk216306 = require("./216306.js"),
  Chunk743475 = require("./743475.js"),
  Chunk827907 = require("./827907.js"),
  Chunk868814 = require("./868814.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk813878 = require("./813878.js");

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

function v(e, t) {
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

function O(e) {
  let {
    guild: t,
    channel: i
  } = e, l = (0, f.Mf)(i.id);
  return "null" === i.id ? (0, r.jsx)("div", {
    className: s()(j.categoryRow, j.uncategorized),
    children: (0, r.jsx)(c.Text, {
      className: j.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    })
  }) : (0, r.jsxs)(c.P3F, {
    className: s()(j.categoryRow, {
      [j.uncategorized]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("90508"), n.e("24358"), n.e("8965"), n.e("23899")]).then(n.bind(n, 139035));
        return n => (0, r.jsx)(e, v(_({}, n), {
          channel: i,
          guild: t
        }))
      })
    },
    onClick: e => (e.stopPropagation(), (0, d.s)(t.id, i.id) ? (0, p.pt)(i.id) : (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("35641").then(n.bind(n, 89216));
      return n => (0, r.jsx)(e, v(_({}, n), {
        guildId: t.id,
        startingChannelId: i.id
      }))
    }), true),
    children: [(0, r.jsx)(c.Text, {
      className: j.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), (0, r.jsx)(c.FZ5, {
      checked: l
    })]
  })
}
let C = Chunk473749.memo(function() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk813878.separator
    })
  }),
  y = Chunk473749.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: j.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  N = Chunk473749.memo(function(e) {
    let {
      channel: t,
      category: i,
      guild: l,
      isFirstChannel: m,
      isLastChannel: O,
      tooltipDirection: N = "right"
    } = e, E = (0, f.Mf)(t.id, i.id), I = (0, f.t4)(t.id, i.id), S = (0, f.EH)(t.id, i.id), T = (0, f.lL)(l.id, i.id), P = null != (0, h.Z)(l).find(e => e.id === t.id);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.u, {
        asContainer: true,
        __unsupportedReactNodeAsText: null != S ? S : T,
        delay: 500,
        position: N,
        children: (0, r.jsxs)(c.P3F, {
          className: s()(j.channelRow, {
            [j.firstChannel]: m,
            [j.lastChannel]: O,
            [j.disabled]: I
          }),
          onClick: e => {
            if (!I) return e.stopPropagation(), (0, d.s)(l.id, t.id) ? (0, p.pt)(t.id) : (0, c.ZDy)(async () => {
              let {
                default: e
              } = await n.e("35641").then(n.bind(n, 89216));
              return n => (0, r.jsx)(e, v(_({}, n), {
                guildId: l.id,
                startingChannelId: t.id
              }))
            }), true
          },
          onContextMenu: e => {
            t.isGuildVocal() ? (0, u.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([n.e("79695"), n.e("90508"), n.e("24358"), n.e("18320"), n.e("83331"), n.e("56648")]).then(n.bind(n, 213202));
              return n => (0, r.jsx)(e, v(_({}, n), {
                channel: t,
                guild: l
              }))
            }) : (0, u.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([n.e("42604"), n.e("79695"), n.e("90508"), n.e("6915"), n.e("33285"), n.e("89250"), n.e("43342"), n.e("91315"), n.e("24358"), n.e("38342"), n.e("91053"), n.e("46931"), n.e("37220"), n.e("43778"), n.e("18320"), n.e("95546"), n.e("7891"), n.e("26503"), n.e("84983"), n.e("82697")]).then(n.bind(n, 373651));
              return n => (0, r.jsx)(e, v(_({}, n), {
                channel: t,
                guild: l
              }))
            })
          },
          children: [(0, r.jsx)("div", {
            className: j.channelInfo,
            children: (0, r.jsxs)("div", {
              className: j.channelName,
              children: [(0, r.jsx)(g._W, {
                channel: t,
                guild: l
              }), (0, r.jsx)(a.Z, {
                className: j.__invalid_name,
                children: (0, r.jsx)(c.Text, {
                  className: j.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: I ? "text-muted" : "text-default",
                  children: t.name
                })
              }), P ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(y, {
                  index: 0
                }), (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: j.channelSubtitle,
                  color: "text-brand",
                  children: b.intl.string(b.t.mPxmeE)
                })]
              }) : null]
            })
          }), (0, r.jsx)("div", {
            className: j.channelActions,
            children: (0, d.s)(t.guild_id, t.id) ? (0, r.jsx)(c.FZ5, {
              checked: E,
              disabled: I
            }) : (0, r.jsx)(c.Button, {
              size: "sm",
              variant: "secondary",
              text: b.intl.string(b.t.zA9d1J),
              icon: c.mBM,
              onClick: x.dG4
            })
          })]
        })
      }), !O && (0, r.jsx)(C, {})]
    })
  });

function E(e) {
  let {
    categories: t,
    guild: n,
    className: l,
    hasSidebar: s
  } = e, a = i.useCallback(e => {
    let i = t._categories[e];
    return (0, r.jsx)(O, {
      channel: i.channel,
      guild: n
    }, i.channel.id)
  }, [t, n]), o = i.useCallback((e, i) => {
    let l = t._categories[e],
      a = t[l.channel.id][i];
    return null == a ? null : (0, r.jsx)(N, {
      category: l.channel,
      channel: a.channel,
      guild: n,
      isFirstChannel: 0 === i,
      isLastChannel: t[l.channel.id].length - 1 === i,
      tooltipDirection: s ? "right" : "top"
    }, a.channel.id)
  }, [t, n, s]), c = (0, m.tn)(n.id, t, 64);
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