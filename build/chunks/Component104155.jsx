/** Chunk was on 58121 **/
/** chunk id: 104155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => j,
  Z: () => v
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk335204 = require("./335204.js");

function j(e) {
  let {
    channelId: t
  } = e;
  return (0, l.jsx)(o.Z, {
    sidebarType: o.y.ThreadSidebar,
    maxWidth: 600,
    children: (0, l.jsx)(s.Z, {
      channelId: t,
      baseChannelId: _.oC.CHANNEL_BROWSER
    })
  })
}

function v(e) {
  let {
    guildId: t
  } = e, [o, s] = r.useState(""), j = (0, i.e7)([m.Z], () => m.Z.getGuild(t)), v = (0, i.e7)([u.ZP], () => u.ZP.getChannels(t)), y = (0, i.e7)([d.Z], () => d.Z.getCategories(t)), O = (0, f.Fo)(t, y, v, o), Z = (0, i.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, {
    guildId: t
  })), N = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)), I = r.useCallback(() => s(""), [s]), w = r.useCallback(() => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("45094"), n.e("45822")]).then(n.bind(n, 218613));
      return n => {
        var r, i;
        return (0, l.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, n), i = i = {
          channelType: null,
          guildId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }
    })
  }, [t]);
  return null == j ? null : (0, l.jsxs)("div", {
    className: b.pageBody,
    children: [(0, l.jsxs)("div", {
      className: b.header,
      children: [(0, l.jsx)(a.E1j, {
        className: b.search,
        query: o,
        onChange: e => {
          "" === o && "" !== e && p.default.track(x.rMx.SEARCH_STARTED, {
            search_type: "channel browser"
          }), s(e.toLowerCase())
        },
        onClear: I,
        placeholder: C.intl.string(C.t.s5MnmJ)
      }), Z ? (0, l.jsx)(a.zxk, {
        icon: a.qJs,
        onClick: w,
        text: C.intl.string(C.t.CumH4u)
      }) : null]
    }), (0, l.jsx)(g.Z, {
      className: b.browser,
      channels: v,
      categories: O,
      guild: j,
      hasSidebar: N
    })]
  })
}