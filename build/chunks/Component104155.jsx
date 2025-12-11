/** Chunk was on 58121 **/
/** chunk id: 104155, original params: e,n,t (module,exports,require) **/
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
    channelId: n
  } = e;
  return (0, a.jsx)(c.Z, {
    sidebarType: c.y.ThreadSidebar,
    maxWidth: 600,
    children: (0, a.jsx)(o.Z, {
      channelId: n,
      baseChannelId: x.oC.CHANNEL_BROWSER
    })
  })
}

function O(e) {
  let {
    guildId: n
  } = e, [c, o] = r.useState(""), v = (0, l.e7)([b.Z], () => b.Z.getGuild(n)), O = (0, l.e7)([u.ZP], () => u.ZP.getChannels(n)), y = (0, l.e7)([s.Z], () => s.Z.getCategories(n)), N = (0, f.Fo)(n, y, O, c), _ = (0, l.e7)([p.Z], () => p.Z.canWithPartialContext(g.Plq.MANAGE_CHANNELS, {
    guildId: n
  })), w = (0, l.e7)([d.ZP], () => null != d.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER)), Z = r.useCallback(() => o(""), [o]), I = r.useCallback(() => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("29497"), t.e("59679")]).then(t.bind(t, 241865));
      return t => {
        var r, l;
        return (0, a.jsx)(e, (r = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              a = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.forEach(function(n) {
              var a;
              a = t[n], n in e ? Object.defineProperty(e, n, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = a
            })
          }
          return e
        }({}, t), l = l = {
          channelType: null,
          guildId: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t.push.apply(t, a)
          }
          return t
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    })
  }, [n]);
  return null == v ? null : (0, a.jsxs)("div", {
    className: j.pageBody,
    children: [(0, a.jsxs)("div", {
      className: j.header,
      children: [(0, a.jsx)(i.E1j, {
        query: c,
        onChange: e => {
          "" === c && "" !== e && h.default.track(g.rMx.SEARCH_STARTED, {
            search_type: "channel browser"
          }), o(e.toLowerCase())
        },
        onClear: Z,
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
      hasSidebar: w
    })]
  })
}