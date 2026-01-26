/** Chunk was on 65298 **/
/** chunk id: 231643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => j,
  BW: () => f,
  fu: () => g
}), require("./896048.js");
var a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk61780 = require("./61780.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk867041 = require("./867041.js"),
  Chunk786574 = require("./786574.jsx"),
  Chunk661251 = require("./661251.js"),
  g = ((a = {}).NONE = "", a.DCF = "DCF", a.EXPERIMENTS = "Experiments", a.EVENTS = "Events", a.PREMIUM = "Premium", a.QUESTS = "Quests", a.BILLING = "Billing", a.USERS = "Users", a.GUILDS = "Guilds", a.UI = "UI", a.GAMES = "Games", a.AUDIO_VIDEO = "Audio / Video", a.DEVELOPMENT = "Development", a.BOOSTING = "Boosting", a);
let f = ["Experiments", "DCF", "Events", "Premium", "Quests", "Billing", "Users", "Guilds", "UI", "Games", "Boosting", "Audio / Video", "Development"],
  b = Chunk64700.forwardRef(function(e, t) {
    let {
      id: n,
      selected: a,
      onClick: r,
      children: i
    } = e;
    return (0, l.jsx)(c.DUT, {
      className: s()(x.V3, {
        [x.wH]: a
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
  } = e, i = r.useRef(new Map), [s, g] = r.useState(() => new Set), {
    ref: f,
    width: v
  } = (0, d.Ay)(), j = r.useRef(null), _ = (0, h.N)(t, a);
  r.useEffect(() => {
    var e, a, l, r;
    if (null == v) return;
    let s = new Set,
      o = null != v ? v : 0;
    for (let c of (o -= null != (e = null == (a = i.current.get(n)) ? true : a.getBoundingClientRect().width) ? e : 0, t)) c.id !== n && (o -= null != (l = null == (r = i.current.get(c.id)) ? true : r.getBoundingClientRect().width) ? l : 0) < 0 && s.add(c.id);
    g(s)
  }, [t, v, f, n]);
  let y = r.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, l.jsx)(c.W1t, {
      "data-menu-mixed": true,
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: t,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: t,
      children: _
    })
  }, [_]);
  return (0, l.jsxs)("div", {
    className: x.Mv,
    children: [(0, l.jsxs)("div", {
      className: x.$H,
      ref: f,
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
      }).filter(m.Vq), (0, l.jsx)("div", {
        className: x.g,
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
      className: x.MK,
      children: s.size > 0 && (0, l.jsx)(c.YNO, {
        targetElementRef: j,
        layerContext: p.He,
        renderPopout: y,
        position: "bottom",
        align: "right",
        autoInvert: false,
        spacing: 0,
        children: e => {
          var t, n;
          return (0, l.jsx)(o.$n, (t = function(e) {
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
            className: x.Iq,
            size: o.$n.Sizes.ICON,
            look: o.$n.Looks.BLANK,
            children: (0, l.jsx)(u.A, {
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
  } = e, [d, u] = r.useState(null != o ? o : null == (a = s[0]) ? true : a.id);
  return {
    TabBar: r.useCallback(() => (0, l.jsx)(v, {
      tabs: s,
      selectedTabId: d,
      onSelectTab: e => {
        u(e), null == c || c(e)
      }
    }), [d, u, c, ...t]),
    renderSelectedTab: null != (n = null == (i = s.find(e => e.id === d)) ? true : i.render) ? n : () => null,
    selectedTabId: d
  }
}