/** Chunk was on 72165 **/
/** chunk id: 760207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  W: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk812771 = require("./812771.jsx"),
  Chunk274541 = require("./274541.jsx"),
  Chunk761640 = require("./761640.js"),
  Chunk769765 = require("./769765.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk637248 = require("./637248.js"),
  Chunk743015 = require("./743015.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk896743 = require("./896743.js");

function C(e) {
  let {
    channelId: t
  } = e;
  return (0, l.jsx)(s.A, {
    sidebarType: s.X.ThreadSidebar,
    maxWidth: 600,
    children: (0, l.jsx)(o.A, {
      channelId: t,
      baseChannelId: x.VV.CHANNEL_BROWSER
    })
  })
}

function j(e) {
  let {
    guildId: t
  } = e, [s, o] = r.useState(""), C = (0, i.bG)([h.A], () => h.A.getGuild(t)), j = (0, i.bG)([u.Ay], () => u.Ay.getChannels(t)), O = (0, i.bG)([d.A], () => d.A.getCategories(t)), v = (0, _.vh)(t, O, j, s), y = (0, i.bG)([p.A], () => p.A.canWithPartialContext(g.xBc.MANAGE_CHANNELS, {
    guildId: t
  })), N = (0, i.bG)([c.Ay], () => null != c.Ay.getCurrentSidebarChannelId(x.VV.CHANNEL_BROWSER)), w = r.useCallback(() => o(""), [o]), I = r.useCallback(() => {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
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
  return null == C ? null : (0, l.jsxs)("div", {
    className: A.kw,
    children: [(0, l.jsxs)("div", {
      className: A.wx,
      children: [(0, l.jsx)(a.IWV, {
        query: s,
        onChange: e => {
          "" === s && "" !== e && f.default.track(g.HAw.SEARCH_STARTED, {
            search_type: "channel browser"
          }), o(e.toLowerCase())
        },
        onClear: w,
        placeholder: b.intl.string(b.t.s5MnmC)
      }), y ? (0, l.jsx)(a.Button, {
        icon: a.j96,
        onClick: I,
        text: b.intl.string(b.t.CumH4u)
      }) : null]
    }), (0, l.jsx)(m.A, {
      className: A.T,
      channels: j,
      categories: v,
      guild: C,
      hasSidebar: N
    })]
  })
}