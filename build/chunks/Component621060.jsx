/** Chunk was on 6043 **/
/** chunk id: 621060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j,
  Zj: () => b,
  v0: () => x
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
  Chunk663618 = require("./663618.js"),
  x = ((a = {}).NONE = "", a.DISMISSIBLE_CONTENT = "Dismissible Content", a.EXPERIMENTS = "Experiments", a.EVENTS = "Events", a.PREMIUM = "Premium", a.QUESTS = "Quests", a.BILLING = "Billing", a.USERS = "Users", a.GUILDS = "Guilds", a.UI = "UI", a.GAMES = "Games", a.AUDIO_VIDEO = "Audio / Video", a.DEVELOPMENT = "Development", a.BOOSTING = "Boosting", a);
let b = ["Experiments", "Dismissible Content", "Events", "Premium", "Quests", "Billing", "Users", "Guilds", "UI", "Games", "Boosting", "Audio / Video", "Development"],
  g = Chunk473749.forwardRef(function(e, t) {
    let {
      id: n,
      selected: a,
      onClick: l,
      children: i
    } = e;
    return (0, r.jsx)(c.P3F, {
      className: s()(f.tabItem, {
        [f.selected]: a
      }),
      "data-tab-id": n,
      innerRef: t,
      onClick: l,
      children: i
    })
  });

function v(e) {
  let {
    tabs: t,
    selectedTabId: n,
    onSelectTab: a
  } = e, i = l.useRef(new Map), [s, x] = l.useState(() => new Set), {
    ref: b,
    width: v
  } = (0, d.ZP)(), j = l.useRef(null), y = (0, h.F)(t, a);
  l.useEffect(() => {
    var e, a, r, l;
    if (null == v) return;
    let s = new Set,
      o = null != v ? v : 0;
    for (let c of (o -= null != (a = null == (e = i.current.get(n)) ? true : e.getBoundingClientRect().width) ? a : 0, t)) c.id !== n && (o -= null != (l = null == (r = i.current.get(c.id)) ? true : r.getBoundingClientRect().width) ? l : 0) < 0 && s.add(c.id);
    x(s)
  }, [t, v, b, n]);
  let C = l.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(c.v2r, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: t,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: t,
      children: y
    })
  }, [y]);
  return (0, r.jsxs)("div", {
    className: f.tabBarContainer,
    children: [(0, r.jsxs)("div", {
      className: f.tabBar,
      ref: b,
      children: [t.map(e => {
        let {
          id: t,
          name: l
        } = e;
        if (!s.has(t)) return (0, r.jsx)(g, {
          id: t,
          selected: n === t,
          onClick: n !== t ? () => a(t) : true,
          children: l
        }, t)
      }).filter(m.lm), (0, r.jsx)("div", {
        className: f.tabMeasurer,
        children: t.map(e => {
          let {
            id: t,
            name: l
          } = e;
          return (0, r.jsx)(g, {
            id: t,
            selected: n === t,
            ref: e => {
              i.current.set(t, e)
            },
            onClick: n !== t ? () => a(t) : true,
            children: l
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: f.menu,
      children: s.size > 0 && (0, r.jsx)(c.yRy, {
        targetElementRef: j,
        layerContext: p.O$,
        renderPopout: C,
        position: "bottom",
        align: "right",
        autoInvert: false,
        spacing: 0,
        children: e => {
          var t, n;
          return (0, r.jsx)(o.zx, (t = function(e) {
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
            className: f.overflowChevron,
            size: o.zx.Sizes.ICON,
            look: o.zx.Looks.BLANK,
            children: (0, r.jsx)(u.Z, {
              className: f.__invalid_overflowIcon,
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
  } = e, [d, u] = l.useState(null != o ? o : null == (n = s[0]) ? true : n.id);
  return {
    TabBar: l.useCallback(() => (0, r.jsx)(v, {
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