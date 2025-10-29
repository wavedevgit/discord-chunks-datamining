/** Chunk was on web.js **/
/** chunk id: 924826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk372817 = require("./372817.js"),
  Chunk25441 = require("./25441.js"),
  Chunk585627 = require("./585627.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");

function c(e, t) {
  var n;
  return Array.from((null != (n = t.current) ? n : document).querySelectorAll("[".concat(l.ie, '^="').concat(e, '"]')))
}

function u(e) {
  let {
    id: t,
    defaultFocused: n,
    isEnabled: u,
    scrollToStart: d,
    scrollToEnd: f,
    onNavigatePreviousAtStart: _,
    onNavigateNextAtEnd: p,
    setFocus: h,
    setFocusOnList: m,
    preserveFocusPosition: g = true,
    useVirtualFocus: E = false,
    wrap: b = false,
    orientation: y = s.hy.VERTICAL,
    disableClickOnSpace: O = false
  } = e, v = r.useRef(n ? (0, l.jb)(t, n) : null), I = r.useRef(false), T = r.useRef(null), S = r.useRef(u);

  function A(e) {
    var t;
    return (null != (t = T.current) ? t : document).querySelector(e)
  }

  function C(e) {
    var t;
    null == (t = A(e)) || t.focus()
  }
  r.useLayoutEffect(() => {
    S.current = u
  }, [u]);
  let N = r.useCallback((e, t) => {
      S.current && (null != h ? h : C)(e, t)
    }, [h]),
    R = r.useCallback(e => {
      S.current && (null != m ? m : C)(e)
    }, [m]),
    P = r.useCallback(e => {
      if (v.current = e, null == e) return void(0, a.h)(t, null, g);
      let n = (0, l.P1)(e),
        r = (0, l.x3)(e);
      N(n, r), (0, a.h)(t, r, g)
    }, [t, g, N]),
    w = r.useMemo(() => (0, i.E)({
      getFocusableElements: () => c(t, T),
      getActiveElement() {
        var e;
        return null == (e = T.current) ? true : e.ownerDocument.activeElement
      },
      scrollToStart: d,
      scrollToEnd: f
    }), [t, d, f]),
    [D, L] = r.useState(false),
    x = r.useRef(D);
  r.useLayoutEffect(() => {
    x.current = D
  }, [D]), r.useLayoutEffect(() => {
    let e = T.current;
    if (null != e && u) return e.addEventListener("focusin", n), e.addEventListener("focusout", r), e.addEventListener("focus", i), e.addEventListener("scroll", a, {
      passive: true
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", r), e.removeEventListener("focus", i), e.removeEventListener("scroll", a)
    };

    function n() {
      L(true)
    }

    function r(e) {
      e.currentTarget.contains(e.relatedTarget) || (L(false), requestAnimationFrame(() => {
        let e = v.current;
        null !== e && null == A((0, l.P1)(e)) && R((0, l.P1)(t, l.kn))
      }))
    }
    async function i() {
      let e = T.current;
      if (x.current || null == e) return;
      let n = v.current;
      if (g && null !== n) {
        let t = (0, l.P1)(n),
          r = A(t);
        if (null != r) {
          if (true !== I.current) return N(t, (0, l.x3)(n));
          else if (await (0, o.JJ)(e, r)) return N(t, (0, l.x3)(n))
        }
      }
      let r = await (0, o.KG)(e, c(t, T));
      null !== r && P(r)
    }

    function a() {
      I.current = true
    }
  }, [u, t, g, N, m, R, P]);
  let M = r.useMemo(() => ({
      wrap: b,
      get from() {
        if (!E) return;
        let t = v.current;
        if (null != t) {
          var e;
          return null != (e = A((0, l.P1)(t))) ? e : true
        }
        return
      }
    }), [E, b]),
    k = r.useCallback(async () => {
      let e = await w.getNextFocusableElement(M),
        t = null == e ? true : e.getAttribute(l.ie);
      null != t ? P(t) : null == e && null != p && p()
    }, [w, M, p, P]),
    j = r.useCallback(async () => {
      let e = await w.getPreviousFocusableElement(M),
        t = null == e ? true : e.getAttribute(l.ie);
      null != t ? P(t) : null == e && null != _ && _()
    }, [w, M, _, P]),
    U = r.useCallback(e => {
      if (!S.current || !E && !x.current) return;
      let n = y === s.hy.HORIZONTAL ? s.R8.RIGHT : s.R8.DOWN,
        r = y === s.hy.HORIZONTAL ? s.R8.LEFT : s.R8.UP;
      switch (e.key) {
        case n:
          e.stopPropagation(), e.preventDefault(), k();
          return;
        case r:
          e.stopPropagation(), e.preventDefault(), j();
          return;
        case s.R8.HOME:
          e.stopPropagation(), e.preventDefault(), d().then(() => {
            var e;
            let n = null == (e = c(t, T)[0]) ? true : e.getAttribute(l.ie);
            null != n && P(n)
          });
          return;
        case s.R8.END:
          e.stopPropagation(), e.preventDefault(), f().then(() => {
            var e;
            let n = c(t, T),
              r = null == (e = n[n.length - 1]) ? true : e.getAttribute(l.ie);
            null != r && P(r)
          });
          return;
        case s.R8.SPACE:
        case s.R8.ENTER: {
          if (e.key === s.R8.SPACE && O || e.repeat) return;
          let t = v.current;
          if (null != t) {
            var i;
            let n = A((0, l.P1)(t)),
              r = null != (i = null == n ? true : n.ownerDocument) ? i : document,
              a = E || n === r.activeElement;
            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
          }
        }
      }
    }, [k, j, t, y, f, d, P, E]),
    G = r.useCallback(e => {
      v.current = null != e ? (0, l.jb)(t, e) : null, (0, a.h)(t, e, g)
    }, [t, g]);
  return r.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: U,
      ref: T,
      tabIndex: D && g ? false : 0
    },
    orientation: y,
    setFocus: G,
    async focusLastVisibleItem() {
      var e;
      let n = await (0, o.jo)(null != (e = T.current) ? e : document.body, c(t, T));
      null !== n && P(n)
    },
    async focusFirstVisibleItem() {
      var e;
      let n = await (0, o.KG)(null != (e = T.current) ? e : document.body, c(t, T));
      null !== n && P(n)
    },
    focusPreviousItem: j,
    focusNextItem: k,
    focusedItemId() {
      let e = v.current;
      return e ? (0, l.x3)(e) : null
    }
  }), [t, U, y, D, g, G, j, k, P])
}