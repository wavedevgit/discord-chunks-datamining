/** Chunk was on 93886 **/
/** chunk id: 621060, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  ZP: () => g,
  v0: () => b
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk93582 = require("./93582.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk424625 = require("./424625.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk246992 = require("./246992.js"),
  Chunk616257 = require("./616257.js"),
  b = ((n = {}).NONE = "", n.EXPERIMENTS = "Experiments", n.EVENTS = "Events", n.PREMIUM = "Premium", n.BILLING = "Billing", n.USERS = "Users", n.GUILDS = "Guilds", n.UI = "UI", n.GAMES = "Games", n.AUDIO_VIDEO = "Audio / Video", n.DEVELOPMENT = "Development", n);
let f = ["Experiments", "Events", "Premium", "Billing", "Users", "Guilds", "UI", "Games", "Audio / Video", "Development"],
  v = Chunk73800.forwardRef(function(e, t) {
    let {
      id: a,
      selected: n,
      onClick: l,
      children: i
    } = e;
    return <d.P3F className={s()(p.tabItem, {
        [p.selected]: n
      })} data-tab-id={a} innerRef={t} onClick={l}>{i}</d.P3F>
  });

function j(e) {
  let {
    tabs: t,
    selectedTabId: a,
    onSelectTab: n
  } = e, i = l.useRef(new Map), [s, b] = l.useState(() => new Set), {
    ref: j,
    width: g
  } = (0, u.ZP)(), _ = l.useRef(null);
  l.useEffect(() => {
    var e, n, r, l;
    if (null == g) return;
    let s = new Set,
      o = null != g ? g : 0;
    for (let c of (o -= null != (n = null == (e = i.current.get(a)) ? true : e.getBoundingClientRect().width) ? n : 0, t)) c.id !== a && (o -= null != (l = null == (r = i.current.get(c.id)) ? true : r.getBoundingClientRect().width) ? l : 0) < 0 && s.add(c.id);
    b(s)
  }, [t, g, j, a]);
  let y = l.useCallback(e => {
    var a, l, i;
    let {
      closePopout: s
    } = e, c = t.filter(e => null == e.group), u = {};
    for (let e of t) null != e.group && (null != u[a = e.group] || (u[a] = []), u[e.group].push(e));
    for (let e of f) null == (i = u[e]) || i.sort((e, t) => {
      var a, n;
      return (null != (a = (0, o.q)(e.name)) ? a : "").localeCompare(null != (n = (0, o.q)(t.name)) ? n : "")
    });
    return <d.v2r navId={"devtools-overflow"} variant={"fixed"} onClose={s} aria-label={"Overflowed DevTools Tabs"} onSelect={s}>{c.map(e => {
        let {
          id: t,
          name: a
        } = e;
        return <d.sNh id={t} label={a} action={() => n(t)} />
      })}{f.map(e => <d.kSQ label={e}>{u[e].map(e => {
          let {
            id: t,
            name: a
          } = e;
          return (0, r.jsx)(d.sNh, {
            id: t,
            label: a,
            action: () => n(t)
          }, t)
        })}</d.kSQ>)}</d.v2r>
  }, [t, n]);
  return <div className={p.tabBarContainer}>{<div className={p.tabBar} ref={j}>{t.map(e => {
        let {
          id: t,
          name: l
        } = e;
        if (!s.has(t)) return <v id={t} selected={a === t} onClick={a !== t ? () => n(t) : true}>{l}</v>
      }).filter(x.lm)}{<div className={p.tabMeasurer}>{t.map(e => {
          let {
            id: t,
            name: l
          } = e;
          return (0, r.jsx)(v, {
            id: t,
            selected: a === t,
            ref: e => {
              i.current.set(t, e)
            },
            onClick: a !== t ? () => n(t) : true,
            children: l
          }, t)
        })}</div>}</div>}{<div className={p.menu}>{s.size > 0 && (0, r.jsx)(d.yRy, {
        targetElementRef: _,
        layerContext: h.O$,
        renderPopout: y,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => {
          var t, a;
          return (0, r.jsx)(c.zx, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(a);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = a[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, e), a = a = {
            buttonRef: _,
            className: p.overflowChevron,
            size: c.zx.Sizes.ICON,
            look: c.zx.Looks.BLANK,
            children: (0, r.jsx)(m.Z, {
              className: p.__invalid_overflowIcon,
              width: 16,
              height: 16
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              a.push.apply(a, n)
            }
            return a
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
          }), t))
        }
      })}</div>}</div>
}

function g(e, t) {
  var a, n, i;
  let {
    tabs: s,
    initialSelectedTabId: o,
    onChangeTab: c
  } = e, [d, u] = l.useState(null != o ? o : null == (a = s[0]) ? true : a.id);
  return {
    TabBar: l.useCallback(() => <j tabs={s} selectedTabId={d} onSelectTab={e => {
        u(e), null == c || c(e)
      }} />, [d, u, c, ...t]),
    renderSelectedTab: null != (i = null == (n = s.find(e => e.id === d)) ? true : n.render) ? i : () => null,
    selectedTabId: d
  }
}