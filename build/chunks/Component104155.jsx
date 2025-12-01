/** Chunk was on 58121 **/
/** chunk id: 104155, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  I: () => j,
  Z: () => v
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
  Chunk855733 = require("./855733.js");

function j(e) {
  let {
    channelId: n
  } = e;
  return (0, r.jsx)(o.Z, {
    sidebarType: o.y.ThreadSidebar,
    maxWidth: 600,
    children: (0, r.jsx)(s.Z, {
      channelId: n,
      baseChannelId: x.oC.CHANNEL_BROWSER
    })
  })
}

function v(e) {
  let {
    guildId: n
  } = e, [o, s] = l.useState(""), j = (0, i.e7)([p.Z], () => p.Z.getGuild(n)), v = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)), O = (0, i.e7)([d.Z], () => d.Z.getCategories(n)), y = (0, f.Fo)(n, O, v, o), N = (0, i.e7)([h.Z], () => h.Z.canWithPartialContext(_.Plq.MANAGE_CHANNELS, {
    guildId: n
  })), w = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER)), Z = l.useCallback(() => s(""), [s]), I = l.useCallback(() => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("29497"), t.e("53781")]).then(t.bind(t, 241865));
      return t => {
        var l, i;
        return (0, r.jsx)(e, (l = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = r
            })
          }
          return e
        }({}, t), i = i = {
          channelType: null,
          guildId: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    })
  }, [n]);
  return null == j ? null : (0, r.jsxs)("div", {
    className: b.pageBody,
    children: [(0, r.jsxs)("div", {
      className: b.header,
      children: [(0, r.jsx)(a.E1j, {
        query: o,
        onChange: e => {
          "" === o && "" !== e && m.default.track(_.rMx.SEARCH_STARTED, {
            search_type: "channel browser"
          }), s(e.toLowerCase())
        },
        onClear: Z,
        placeholder: C.intl.string(C.t.s5MnmC)
      }), N ? (0, r.jsx)(a.Button, {
        icon: a.qJs,
        onClick: I,
        text: C.intl.string(C.t.CumH4u)
      }) : null]
    }), (0, r.jsx)(g.Z, {
      className: b.browser,
      channels: v,
      categories: y,
      guild: j,
      hasSidebar: w
    })]
  })
}