/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120), n(773603), n(230036), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(279881),
  A = n(510231),
  c = n(92373),
  d = n(308083),
  u = n(388032),
  g = n(416786),
  f = n(154662);

function m(e) {
  let {
    gameApplicationIds: t,
    preventGameRemoval: n,
    onUpdateGames: s,
    minGames: o = 1,
    error: m
  } = e, {
    options: p,
    matchSorterOptions: h
  } = (0, A.h)(), C = i.useMemo(() => Array.from(t), [t]), b = i.useCallback(e => {
    !(e.length < o) && s(new Set(e))
  }, [o, s]), v = i.useCallback(e => {
    if (n) return;
    let r = new Set(t);
    t.has(e) ? r.delete(e) : r.add(e), s(r)
  }, [n, t, s]), x = i.useCallback(() => null, []);
  return (0, r.jsx)("div", {
    className: g.inputContainer,
    children: (0, r.jsxs)(l.xJW, {
      error: m,
      children: [(0, r.jsx)(l.VcW, {
        multi: !0,
        hidePills: !0,
        autoFocus: !0,
        wrapperClassName: a()(f.input, g.input),
        options: p,
        value: C,
        placeholder: u.NW.string(u.t.acyezc),
        onChange: b,
        isDisabled: t.size === d.cm,
        matchSorterOptions: h,
        clearQueryOnSelect: !0,
        customPillContainerClassName: g.pills,
        renderCustomPill: x
      }), C.length > 0 && (0, r.jsxs)("div", {
        className: g.gamesContainer,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: u.NW.string(u.t.PgOVsL)
        }), (0, r.jsx)("div", {
          className: g.gamesList,
          children: C.map(e => (0, r.jsx)(l.ua7, {
            text: u.NW.string(u.t.C1K2XV),
            shouldShow: n,
            tooltipContentClassName: g.tooltip,
            children: i => {
              var s, a;
              return (0, r.jsx)("div", (s = function(e) {
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
              }({}, i), a = a = {
                children: (0, r.jsx)(c.Z, {
                  applicationId: e,
                  imageContainerClassName: t.size > o ? g.clickableGame : void 0,
                  selected: !0,
                  locked: n,
                  onClick: v
                }, e)
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(a)).forEach(function(e) {
                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e))
              }), s))
            }
          }, e))
        })]
      })]
    })
  })
}

function p(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: s
  } = e, {
    topGames: a,
    tryFetchTopGames: A
  } = (0, o.I)(), d = a.get(t), [f, m] = i.useState(!1);
  i.useEffect(() => {
    m(!0), A(t).finally(() => {
      m(!1)
    })
  }, [t, A]);
  let p = i.useMemo(() => null == d ? [] : Object.keys(d).sort((e, t) => d[t].score - d[e].score), [d]),
    h = i.useCallback(e => {
      let t = new Set(n);
      n.has(e) ? t.delete(e) : t.add(e), s(t)
    }, [s, n]);
  return f && null == d ? (0, r.jsx)(l.$jN, {
    className: g.loadingSpinner
  }) : null == p || 0 === p.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("hr", {
      className: g.separator
    }), (0, r.jsxs)("div", {
      className: g.gamesContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: u.NW.string(u.t["0wEQQ0"])
      }), (0, r.jsx)("div", {
        className: g.gamesList,
        children: p.map(e => (0, r.jsx)(c.Z, {
          applicationId: e,
          imageContainerClassName: g.clickableGame,
          selected: n.has(e),
          onClick: h
        }, e))
      })]
    })]
  })
}
let h = e => {
  let {
    title: t,
    description: n,
    onUpdateGames: i,
    gameApplicationIds: s,
    minGames: o = 1,
    error: A,
    guildId: c,
    includeSuggestedGames: d
  } = e, u = s.size <= o;
  return (0, r.jsxs)("div", {
    className: a()(f.slideContent, g.container),
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: t
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: n
    }), (0, r.jsx)(m, {
      minGames: o,
      gameApplicationIds: s,
      preventGameRemoval: u,
      onUpdateGames: i,
      error: A
    }), d && null != c && (0, r.jsx)(p, {
      guildId: c,
      selectedGameApplicationIds: s,
      onUpdateGames: i
    })]
  })
}