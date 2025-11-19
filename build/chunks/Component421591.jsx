/** Chunk was on web.js **/
/** chunk id: 421591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./482853.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk541099 = require("./541099.js"),
  Chunk695676 = require("./695676.js"),
  Chunk173790 = require("./173790.jsx"),
  Chunk692656 = require("./692656.jsx"),
  Chunk684256 = require("./684256.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk487303 = require("./487303.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = {
    width: Chunk314734.Gy,
    height: Chunk314734.lv
  },
  v = {
    height: Chunk314734.lv
  };

function I(e, t) {
  let {
    context: n,
    entrypoint: a,
    initHistory: u
  } = e, {
    analyticsLocations: d
  } = (0, l.ZP)(o.Z.APP_LAUNCHER);
  return i.useEffect(() => {
    (0, s.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
      source: a,
      location: "app_launcher"
    })
  }, [a]), i.useEffect(() => {
    let e = Date.now();
    return () => {
      (0, s.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
        reason: c.Z.closeReason(),
        time_spent: Date.now() - e,
        source: a
      })
    }
  }, [a]), (0, r.jsx)("div", {
    className: m.drawerSizingWrapper,
    ref: t,
    style: O,
    children: (0, r.jsx)("div", {
      className: m.contentWrapper,
      children: (0, r.jsx)(l.Gt, {
        value: d,
        children: (0, r.jsx)(S, {
          initHistory: u,
          children: (0, r.jsx)(A, {
            context: n,
            entrypoint: a
          })
        })
      })
    })
  })
}
let T = Chunk473749.memo(Chunk473749.forwardRef(I));

function S(e) {
  let {
    initHistory: t,
    children: n
  } = e, [a, o] = i.useState(null != t ? t : [{
    type: u.gc.HOME
  }]), [s, l] = i.useState({}), c = a[a.length - 1], [d, f] = i.useState(false), _ = i.useCallback(e => {
    o(t => [...t, e])
  }, []), p = i.useCallback(() => {
    let e = null;
    o(t => t.length <= 1 ? t : (e = t[t.length - 1], t.slice(0, false))), l(t => null == e ? t : y(E({}, t), {
      [e.type]: e
    }))
  }, []), h = i.useCallback(e => {
    var t;
    return null != (t = a.findLast(t => t.type === e)) ? t : s[e]
  }, [a, s]);
  return (0, r.jsx)(u.uX.Provider, {
    value: {
      history: a,
      discard: s,
      currentView: c,
      pushHistory: _,
      goBack: p,
      getMostRecentHistoryItemByType: h,
      isSlideReady: d,
      setSlideReady: f
    },
    children: n
  })
}

function A(e) {
  let {
    context: t,
    entrypoint: n
  } = e, [o, s] = i.useState(""), {
    setScroller: l,
    isCloseToBottom: c
  } = C(o), {
    currentView: h,
    getMostRecentHistoryItemByType: g,
    setSlideReady: E
  } = (0, u.hH)();
  i.useEffect(() => {
    E(false)
  }, [null == h ? true : h.type, E]);
  let b = i.useCallback(() => {
    E(true)
  }, [E]);
  if (null == h) return null;
  let y = g(u.gc.LIST),
    O = g(u.gc.APPLICATION);
  return (0, r.jsxs)(a.MyZ, {
    activeSlide: h.type,
    width: p.Gy,
    onSlideReady: b,
    children: [(0, r.jsx)(a.Mi4, {
      id: u.gc.HOME,
      children: (0, r.jsx)("div", {
        className: m.slideContent,
        style: v,
        children: (0, r.jsx)(f.Z, {
          isScrollCloseToBottom: c,
          setScroller: l,
          context: t,
          entrypoint: n,
          searchQuery: o,
          setSearchQuery: s
        })
      })
    }), (0, r.jsx)(a.Mi4, {
      id: u.gc.LIST,
      children: (0, r.jsx)("div", {
        className: m.slideContent,
        style: v,
        children: null != y && (0, r.jsx)(_.Z, {
          context: t,
          entrypoint: n,
          title: y.title,
          look: y.look,
          items: y.items,
          sectionName: y.sectionName,
          sectionOverallPosition: y.sectionOverallPosition
        })
      })
    }), (0, r.jsx)(a.Mi4, {
      id: u.gc.APPLICATION,
      children: (0, r.jsx)("div", {
        className: m.slideContent,
        style: v,
        children: null != O && (0, r.jsx)(d.Z, {
          context: t,
          application: O.application,
          sectionName: O.sectionName
        })
      })
    })]
  })
}

function C(e) {
  let [t, n] = i.useState(null), [r, a] = i.useState(false), o = i.useRef(0);
  return i.useEffect(() => {
    null == t || t.scrollTo(0, 0)
  }, [t, e]), i.useEffect(() => {
    if (null != t) return t.scrollTo(0, o.current), t.addEventListener("scroll", e), () => {
      t.removeEventListener("scroll", e, false)
    };

    function e() {
      null != t && (o.current = t.scrollTop, a(t.scrollHeight - (t.scrollTop + t.clientHeight) < .5 * p.K7))
    }
  }, [t]), {
    setScroller: n,
    isCloseToBottom: r
  }
}