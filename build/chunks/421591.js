/** Chunk was on 35755 **/
n.d(t, {
  Z: () => N
}), n(47120), n(852437);
var i = n(200651),
  l = n(192379),
  r = n(481060),
  o = n(100527),
  a = n(367907),
  s = n(906732),
  c = n(541099),
  u = n(695676),
  d = n(173790),
  p = n(692656),
  m = n(684256),
  f = n(314734),
  h = n(981631),
  v = n(855158);
let y = {
    width: f.Gy,
    height: f.lv
  },
  b = {
    height: f.lv
  },
  N = l.memo(l.forwardRef(function(e, t) {
    let {
      context: n,
      entrypoint: r,
      initHistory: u
    } = e, {
      analyticsLocations: d
    } = (0, s.ZP)(o.Z.APP_LAUNCHER);
    return l.useEffect(() => {
      (0, a.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
        source: r,
        location: "app_launcher"
      })
    }, [r]), l.useEffect(() => {
      let e = Date.now();
      return () => {
        (0, a.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
          reason: c.Z.closeReason(),
          time_spent: Date.now() - e,
          source: r
        })
      }
    }, [r]), (0, i.jsx)("div", {
      className: v.drawerSizingWrapper,
      ref: t,
      style: y,
      children: (0, i.jsx)("div", {
        className: v.contentWrapper,
        children: (0, i.jsx)(s.Gt, {
          value: d,
          children: (0, i.jsx)(g, {
            initHistory: u,
            children: (0, i.jsx)(x, {
              context: n,
              entrypoint: r
            })
          })
        })
      })
    })
  }));

function g(e) {
  let {
    initHistory: t,
    children: n
  } = e, [r, o] = l.useState(null != t ? t : [{
    type: u.gc.HOME
  }]), [a, s] = l.useState({}), c = r[r.length - 1], [d, p] = l.useState(!1), m = l.useCallback(e => {
    o(t => [...t, e])
  }, []), f = l.useCallback(() => {
    let e = null;
    o(t => t.length <= 1 ? t : (e = t[t.length - 1], t.slice(0, -1))), s(t => {
      var n, i;
      return null == e ? t : (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, t), i = i = {
        [e.type]: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n)
    })
  }, []), h = l.useCallback(e => {
    var t;
    return null !== (t = r.findLast(t => t.type === e)) && void 0 !== t ? t : a[e]
  }, [r, a]);
  return (0, i.jsx)(u.uX.Provider, {
    value: {
      history: r,
      discard: a,
      currentView: c,
      pushHistory: m,
      goBack: f,
      getMostRecentHistoryItemByType: h,
      isSlideReady: d,
      setSlideReady: p
    },
    children: n
  })
}

function x(e) {
  let {
    context: t,
    entrypoint: n
  } = e, [o, a] = l.useState(""), {
    setScroller: s,
    isCloseToBottom: c
  } = function(e) {
    let [t, n] = l.useState(null), [i, r] = l.useState(!1), o = l.useRef(0);
    return l.useEffect(() => {
      null == t || t.scrollTo(0, 0)
    }, [t, e]), l.useEffect(() => {
      if (null != t) return t.scrollTo(0, o.current), t.addEventListener("scroll", e), () => {
        t.removeEventListener("scroll", e, !1)
      };

      function e() {
        null != t && (o.current = t.scrollTop, r(t.scrollHeight - (t.scrollTop + t.clientHeight) < .5 * f.K7))
      }
    }, [t]), {
      setScroller: n,
      isCloseToBottom: i
    }
  }(o), {
    currentView: h,
    getMostRecentHistoryItemByType: y,
    setSlideReady: N
  } = (0, u.hH)();
  l.useEffect(() => {
    N(!1)
  }, [null == h ? void 0 : h.type, N]);
  let g = l.useCallback(() => {
    N(!0)
  }, [N]);
  if (null == h) return null;
  let x = y(u.gc.LIST),
    j = y(u.gc.APPLICATION);
  return (0, i.jsxs)(r.MyZ, {
    activeSlide: h.type,
    width: f.Gy,
    onSlideReady: g,
    children: [(0, i.jsx)(r.Mi4, {
      id: u.gc.HOME,
      children: (0, i.jsx)("div", {
        className: v.slideContent,
        style: b,
        children: (0, i.jsx)(p.Z, {
          isScrollCloseToBottom: c,
          setScroller: s,
          context: t,
          entrypoint: n,
          searchQuery: o,
          setSearchQuery: a
        })
      })
    }), (0, i.jsx)(r.Mi4, {
      id: u.gc.LIST,
      children: (0, i.jsx)("div", {
        className: v.slideContent,
        style: b,
        children: null != x && (0, i.jsx)(m.Z, {
          context: t,
          entrypoint: n,
          title: x.title,
          look: x.look,
          items: x.items,
          sectionName: x.sectionName,
          sectionOverallPosition: x.sectionOverallPosition
        })
      })
    }), (0, i.jsx)(r.Mi4, {
      id: u.gc.APPLICATION,
      children: (0, i.jsx)("div", {
        className: v.slideContent,
        style: b,
        children: null != j && (0, i.jsx)(d.Z, {
          context: t,
          application: j.application,
          sectionName: j.sectionName
        })
      })
    })]
  })
}