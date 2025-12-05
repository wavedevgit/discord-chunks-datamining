/** Chunk was on 75393 **/
/** chunk id: 621060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j,
  Zj: () => g,
  v0: () => f
}), require("./388685.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk424625 = require("./424625.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk246992 = require("./246992.js"),
  Chunk252899 = require("./252899.jsx"),
  Chunk451429 = require("./451429.js"),
  f = ((a = {}).NONE = "", a.DISMISSIBLE_CONTENT = "Dismissible Content", a.EXPERIMENTS = "Experiments", a.EVENTS = "Events", a.PREMIUM = "Premium", a.QUESTS = "Quests", a.BILLING = "Billing", a.USERS = "Users", a.GUILDS = "Guilds", a.UI = "UI", a.GAMES = "Games", a.AUDIO_VIDEO = "Audio / Video", a.DEVELOPMENT = "Development", a.BOOSTING = "Boosting", a);
let g = ["Experiments", "Dismissible Content", "Events", "Premium", "Quests", "Billing", "Users", "Guilds", "UI", "Games", "Boosting", "Audio / Video", "Development"],
  b = Chunk473749.forwardRef(function(e, t) {
    let {
      id: n,
      selected: a,
      onClick: r,
      children: i
    } = e;
    return (0, l.jsx)(c.P3F, {
      className: s()(x.tabItem, {
        [x.selected]: a
      }),
      "data-tab-id": n,
      innerRef: t,
      onClick: r,
      children: i
    })
  });

function v(e) {
  let {
    tabs: t,
    selectedTabId: n,
    onSelectTab: a
  } = e, i = r.useRef(new Map), [s, f] = r.useState(() => new Set), {
    ref: g,
    width: v
  } = (0, d.ZP)(), j = r.useRef(null), _ = (0, h.F)(t, a);
  r.useEffect(() => {
    var e, a, l, r;
    if (null == v) return;
    let s = new Set,
      o = null != v ? v : 0;
    for (let c of (o -= null != (a = null == (e = i.current.get(n)) ? true : e.getBoundingClientRect().width) ? a : 0, t)) c.id !== n && (o -= null != (r = null == (l = i.current.get(c.id)) ? true : l.getBoundingClientRect().width) ? r : 0) < 0 && s.add(c.id);
    f(s)
  }, [t, v, g, n]);
  let y = r.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, l.jsx)(c.v2r, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: t,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: t,
      children: _
    })
  }, [_]);
  return (0, l.jsxs)("div", {
    className: x.tabBarContainer,
    children: [(0, l.jsxs)("div", {
      className: x.tabBar,
      ref: g,
      children: [t.map(e => {
        let {
          id: t,
          name: r
        } = e;
        if (!s.has(t)) return (0, l.jsx)(b, {
          id: t,
          selected: n === t,
          onClick: n !== t ? () => a(t) : true,
          children: r
        }, t)
      }).filter(m.lm), (0, l.jsx)("div", {
        className: x.tabMeasurer,
        children: t.map(e => {
          let {
            id: t,
            name: r
          } = e;
          return (0, l.jsx)(b, {
            id: t,
            selected: n === t,
            ref: e => {
              i.current.set(t, e)
            },
            onClick: n !== t ? () => a(t) : true,
            children: r
          }, t)
        })
      })]
    }), (0, l.jsx)("div", {
      className: x.menu,
      children: s.size > 0 && (0, l.jsx)(c.yRy, {
        targetElementRef: j,
        layerContext: p.O$,
        renderPopout: y,
        position: "bottom",
        align: "right",
        autoInvert: false,
        spacing: 0,
        children: e => {
          var t, n;
          return (0, l.jsx)(o.zx, (t = function(e) {
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
          }({}, e), n = n = {
            buttonRef: j,
            className: x.overflowChevron,
            size: o.zx.Sizes.ICON,
            look: o.zx.Looks.BLANK,
            children: (0, l.jsx)(u.Z, {
              className: x.__invalid_overflowIcon,
              width: 16,
              height: 16
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              n.push.apply(n, a)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    })]
  })
}

function j(e, t) {
  var n, a, i;
  let {
    tabs: s,
    initialSelectedTabId: o,
    onChangeTab: c
  } = e, [d, u] = r.useState(null != o ? o : null == (n = s[0]) ? true : n.id);
  return {
    TabBar: r.useCallback(() => (0, l.jsx)(v, {
      tabs: s,
      selectedTabId: d,
      onSelectTab: e => {
        u(e), null == c || c(e)
      }
    }), [d, u, c, ...t]),
    renderSelectedTab: null != (i = null == (a = s.find(e => e.id === d)) ? true : a.render) ? i : () => null,
    selectedTabId: d
  }
}