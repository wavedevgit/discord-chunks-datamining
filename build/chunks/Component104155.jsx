/** Chunk was on 58121 **/
/** chunk id: 104155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => v,
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk325708 = require("./325708.jsx"),
  Chunk213557 = require("./213557.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk324067 = require("./324067.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk216306 = require("./216306.js"),
  Chunk775028 = require("./775028.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516390 = require("./516390.js");

function v(e) {
  let {
    channelId: t
  } = e;
  return (0, a.jsx)(o.Z, {
    sidebarType: o.y.ThreadSidebar,
    maxWidth: 600,
    children: (0, a.jsx)(c.Z, {
      channelId: t,
      baseChannelId: x.oC.CHANNEL_BROWSER
    })
  })
}

function O(e) {
  let {
    guildId: t
  } = e, [o, c] = r.useState(""), v = (0, l.e7)([b.Z], () => b.Z.getGuild(t)), O = (0, l.e7)([u.ZP], () => u.ZP.getChannels(t)), y = (0, l.e7)([s.Z], () => s.Z.getCategories(t)), N = (0, h.Fo)(t, y, O, o), _ = (0, l.e7)([p.Z], () => p.Z.canWithPartialContext(g.Plq.MANAGE_CHANNELS, {
    guildId: t
  })), Z = (0, l.e7)([d.ZP], () => null != d.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER)), w = r.useCallback(() => c(""), [c]), I = r.useCallback(() => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
      return n => {
        var r, l;
        return (0, a.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, n), l = l = {
          channelType: null,
          guildId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    })
  }, [t]);
  return null == v ? null : (0, a.jsxs)("div", {
    className: j.pageBody,
    children: [(0, a.jsxs)("div", {
      className: j.header,
      children: [(0, a.jsx)(i.E1j, {
        query: o,
        onChange: e => {
          "" === o && "" !== e && f.default.track(g.rMx.SEARCH_STARTED, {
            search_type: "channel browser"
          }), c(e.toLowerCase())
        },
        onClear: w,
        placeholder: C.intl.string(C.t.s5MnmC)
      }), _ ? (0, a.jsx)(i.Button, {
        icon: i.qJs,
        onClick: I,
        text: C.intl.string(C.t.CumH4u)
      }) : null]
    }), (0, a.jsx)(m.Z, {
      className: j.browser,
      channels: O,
      categories: N,
      guild: v,
      hasSidebar: Z
    })]
  })
}