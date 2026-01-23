/** Chunk was on web.js **/
/** chunk id: 7691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./775443.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk989837 = require("./989837.js"),
  Chunk485878 = require("./485878.js"),
  Chunk602814 = require("./602814.jsx"),
  Chunk779309 = require("./779309.jsx"),
  Chunk198016 = require("./198016.jsx"),
  Chunk60809 = require("./60809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk732679 = require("./732679.js");

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

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = {
    width: 500,
    height: Chunk60809.$V
  },
  v = {
    height: Chunk60809.$V
  };

function A(e, t) {
  let {
    context: n,
    entrypoint: a,
    initHistory: u
  } = e, {
    analyticsLocations: d
  } = (0, l.Ay)(s.A.APP_LAUNCHER);
  return i.useEffect(() => {
    (0, o.zV)(h.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
      source: a,
      location: "app_launcher"
    })
  }, [a]), i.useEffect(() => {
    let e = Date.now();
    return () => {
      (0, o.zV)(h.HAw.APP_LAUNCHER_CLOSED, {
        reason: c.A.closeReason(),
        time_spent: Date.now() - e,
        source: a
      })
    }
  }, [a]), (0, r.jsx)("div", {
    className: m.jP,
    ref: t,
    style: O,
    children: (0, r.jsx)("div", {
      className: m.FG,
      children: (0, r.jsx)(l.f5, {
        value: d,
        children: (0, r.jsx)(S, {
          initHistory: u,
          children: (0, r.jsx)(T, {
            context: n,
            entrypoint: a
          })
        })
      })
    })
  })
}
let I = Chunk64700.memo(Chunk64700.forwardRef(A));

function S(e) {
  let {
    initHistory: t,
    children: n
  } = e, [a, s] = i.useState(null != t ? t : [{
    type: u.Wy.HOME
  }]), [o, l] = i.useState({}), c = a[a.length - 1], [d, f] = i.useState(false), p = i.useCallback(e => {
    s(t => [...t, e])
  }, []), _ = i.useCallback(() => {
    let e = null;
    s(t => t.length <= 1 ? t : (e = t[t.length - 1], t.slice(0, false))), l(t => null == e ? t : b(E({}, t), {
      [e.type]: e
    }))
  }, []), h = i.useCallback(e => {
    var t;
    return null != (t = a.findLast(t => t.type === e)) ? t : o[e]
  }, [a, o]);
  return (0, r.jsx)(u.L8.Provider, {
    value: {
      history: a,
      discard: o,
      currentView: c,
      pushHistory: p,
      goBack: _,
      getMostRecentHistoryItemByType: h,
      isSlideReady: d,
      setSlideReady: f
    },
    children: n
  })
}

function T(e) {
  let {
    context: t,
    entrypoint: n
  } = e, [s, o] = i.useState(""), {
    setScroller: l,
    isCloseToBottom: c
  } = C(s), {
    currentView: _,
    getMostRecentHistoryItemByType: h,
    setSlideReady: g
  } = (0, u.uM)();
  i.useEffect(() => {
    g(false)
  }, [null == _ ? true : _.type, g]);
  let E = i.useCallback(() => {
    g(true)
  }, [g]);
  if (null == _) return null;
  let y = h(u.Wy.LIST),
    b = h(u.Wy.APPLICATION);
  return (0, r.jsxs)(a.tN_, {
    activeSlide: _.type,
    width: 500,
    onSlideReady: E,
    children: [(0, r.jsx)(a.q7S, {
      id: u.Wy.HOME,
      children: (0, r.jsx)("div", {
        className: m.xD,
        style: v,
        children: (0, r.jsx)(f.A, {
          isScrollCloseToBottom: c,
          setScroller: l,
          context: t,
          entrypoint: n,
          searchQuery: s,
          setSearchQuery: o
        })
      })
    }), (0, r.jsx)(a.q7S, {
      id: u.Wy.LIST,
      children: (0, r.jsx)("div", {
        className: m.xD,
        style: v,
        children: null != y && (0, r.jsx)(p.A, {
          context: t,
          entrypoint: n,
          title: y.title,
          look: y.look,
          items: y.items,
          sectionName: y.sectionName,
          sectionOverallPosition: y.sectionOverallPosition
        })
      })
    }), (0, r.jsx)(a.q7S, {
      id: u.Wy.APPLICATION,
      children: (0, r.jsx)("div", {
        className: m.xD,
        style: v,
        children: null != b && (0, r.jsx)(d.A, {
          context: t,
          application: b.application,
          sectionName: b.sectionName
        })
      })
    })]
  })
}

function C(e) {
  let [t, n] = i.useState(null), [r, a] = i.useState(false), s = i.useRef(0);
  return i.useEffect(() => {
    null == t || t.scrollTo(0, 0)
  }, [t, e]), i.useEffect(() => {
    if (null != t) return t.scrollTo(0, s.current), t.addEventListener("scroll", e), () => {
      t.removeEventListener("scroll", e, false)
    };

    function e() {
      null == t || (s.current = t.scrollTop, a(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340))
    }
  }, [t]), {
    setScroller: n,
    isCloseToBottom: r
  }
}