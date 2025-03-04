/** Chunk was on 93886 **/
n.d(t, {
  Z: () => x
}), n(47120), n(653041);
var r = n(200651),
  a = n(192379),
  l = n(120356),
  i = n.n(l),
  o = n(481060),
  s = n(424625),
  c = n(823379),
  d = n(246992),
  u = n(710662);
let m = a.forwardRef(function(e, t) {
  let {
    id: n,
    selected: a,
    onClick: l,
    children: s
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: i()(u.tabItem, {
      [u.selected]: a
    }),
    "data-tab-id": n,
    innerRef: t,
    onClick: l,
    children: s
  })
});

function h(e) {
  let {
    tabs: t,
    selectedTabId: n,
    onSelectTab: l
  } = e, i = a.useRef(null), h = a.useRef(0), x = a.useRef(new Map), [p, f] = a.useState([]), b = a.useCallback(() => {
    var e, r, a, l;
    if (null == i.current) return;
    let o = [],
      s = i.current.getBoundingClientRect().width;
    if (s !== h.current) {
      for (let i of (h.current = s, s -= null !== (r = null === (e = x.current.get(n)) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0, t)) i.id !== n && (s -= null !== (l = null === (a = x.current.get(i.id)) || void 0 === a ? void 0 : a.width) && void 0 !== l ? l : 0) < 0 && o.push(i.id);
      f(o)
    }
  }, [t, n]), _ = a.useRef(null);
  a.useEffect(() => (_.current = new ResizeObserver(() => b()), null != i.current && _.current.observe(i.current), () => {
    var e;
    null === (e = _.current) || void 0 === e || e.disconnect()
  }), [b]);
  let g = a.useCallback(e => {
    let {
      closePopout: a
    } = e;
    return (0, r.jsx)(o.v2r, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: a,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: a,
      children: t.map(e => {
        let {
          id: t,
          name: a
        } = e;
        return p.includes(t) && n !== t ? (0, r.jsx)(o.sNh, {
          id: t,
          label: a,
          action: () => l(t)
        }, t) : null
      }).filter(c.lm)
    })
  }, [t, p, l, n]);
  return (0, r.jsxs)("div", {
    className: u.tabBar,
    ref: i,
    children: [t.map(e => {
      let {
        id: t,
        name: a
      } = e;
      if (!p.includes(t)) return (0, r.jsx)(m, {
        id: t,
        selected: n === t,
        ref: e => {
          var n, r, a;
          let l = null !== (r = null === (n = x.current.get(t)) || void 0 === n ? void 0 : n.width) && void 0 !== r ? r : 0;
          x.current.set(t, {
            node: e,
            width: null !== (a = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== a ? a : l
          })
        },
        onClick: n !== t ? () => l(t) : void 0,
        children: a
      }, t)
    }).filter(c.lm), p.length > 0 && (0, r.jsx)(o.yRy, {
      layerContext: d.O$,
      renderPopout: g,
      position: "bottom",
      align: "right",
      spacing: 0,
      children: e => {
        var t, n;
        return (0, r.jsx)(o.zxk, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, e), n = n = {
          className: u.overflowChevron,
          size: o.zxk.Sizes.ICON,
          look: o.zxk.Looks.BLANK,
          children: (0, r.jsx)(s.Z, {
            className: u.__invalid_overflowIcon,
            width: 16,
            height: 16
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}

function x(e, t) {
  var n, l, i;
  let {
    tabs: o,
    initialSelectedTabId: s,
    onChangeTab: c
  } = e, [d, u] = a.useState(null != s ? s : null === (n = o[0]) || void 0 === n ? void 0 : n.id);
  return {
    TabBar: a.useCallback(() => (0, r.jsx)(h, {
      tabs: o,
      selectedTabId: d,
      onSelectTab: e => {
        u(e), null == c || c(e)
      }
    }), [d, u, c, ...t]),
    renderSelectedTab: null !== (i = null === (l = o.find(e => e.id === d)) || void 0 === l ? void 0 : l.render) && void 0 !== i ? i : () => null,
    selectedTabId: d
  }
}