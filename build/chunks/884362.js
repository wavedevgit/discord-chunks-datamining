/** Chunk was on web.js **/
/** chunk id: 884362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk52724 = require("./52724.js"),
  Chunk461771 = require("./461771.js"),
  Chunk963400 = require("./963400.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");

function c(e, t) {
  var n;
  return Array.from((null != (n = t.current) ? n : document).querySelectorAll("[".concat(l.eM, '^="').concat(e, '"]')))
}

function u(e) {
  let {
    id: t,
    defaultFocused: n,
    isEnabled: u,
    scrollToStart: d,
    scrollToEnd: f,
    onNavigatePreviousAtStart: p,
    onNavigateNextAtEnd: _,
    setFocus: h,
    setFocusOnList: m,
    preserveFocusPosition: g = true,
    useVirtualFocus: E = false,
    wrap: y = false,
    orientation: b = s.Gl.VERTICAL,
    disableClickOnSpace: O = false
  } = e, v = r.useRef(n ? (0, l.t$)(t, n) : null), A = r.useRef(false), I = r.useRef(null), S = r.useRef(u);

  function T(e) {
    var t;
    return (null != (t = I.current) ? t : document).querySelector(e)
  }

  function C(e) {
    var t;
    null == (t = T(e)) || t.focus()
  }
  r.useLayoutEffect(() => {
    S.current = u
  }, [u]);
  let N = r.useCallback((e, t) => {
      S.current && (null != h ? h : C)(e, t)
    }, [h]),
    w = r.useCallback(e => {
      S.current && (null != m ? m : C)(e)
    }, [m]),
    R = r.useCallback(e => {
      if (v.current = e, null == e) return void(0, a.T)(t, null, g);
      let n = (0, l.Mz)(e),
        r = (0, l.HP)(e);
      N(n, r), (0, a.T)(t, r, g)
    }, [t, g, N]),
    P = r.useMemo(() => (0, i.C)({
      getFocusableElements: () => c(t, I),
      getActiveElement() {
        var e;
        return null == (e = I.current) ? true : e.ownerDocument.activeElement
      },
      scrollToStart: d,
      scrollToEnd: f
    }), [t, d, f]),
    [D, L] = r.useState(false),
    x = r.useRef(D);
  r.useLayoutEffect(() => {
    x.current = D
  }, [D]), r.useLayoutEffect(() => {
    let e = I.current;
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
        null !== e && null == T((0, l.Mz)(e)) && w((0, l.Mz)(t, l.KE))
      }))
    }
    async function i() {
      let e = I.current;
      if (x.current || null == e) return;
      let n = v.current;
      if (g && null !== n) {
        let t = (0, l.Mz)(n),
          r = T(t);
        if (null != r) {
          if (true !== A.current) return N(t, (0, l.HP)(n));
          else if (await (0, o.UN)(e, r)) return N(t, (0, l.HP)(n))
        }
      }
      let r = await (0, o.$b)(e, c(t, I));
      null !== r && R(r)
    }

    function a() {
      A.current = true
    }
  }, [u, t, g, N, m, w, R]);
  let M = r.useMemo(() => ({
      wrap: y,
      get from() {
        if (!E) return;
        let t = v.current;
        if (null != t) {
          var e;
          return null != (e = T((0, l.Mz)(t))) ? e : true
        }
        return
      }
    }), [E, y]),
    j = r.useCallback(async () => {
      let e = await P.getNextFocusableElement(M),
        t = null == e ? true : e.getAttribute(l.eM);
      null != t ? R(t) : null == e && null != _ && _()
    }, [P, M, _, R]),
    k = r.useCallback(async () => {
      let e = await P.getPreviousFocusableElement(M),
        t = null == e ? true : e.getAttribute(l.eM);
      null != t ? R(t) : null == e && null != p && p()
    }, [P, M, p, R]),
    U = r.useCallback(e => {
      if (!S.current || !E && !x.current) return;
      let n = b === s.Gl.HORIZONTAL ? s.D$.RIGHT : s.D$.DOWN,
        r = b === s.Gl.HORIZONTAL ? s.D$.LEFT : s.D$.UP;
      switch (e.key) {
        case n:
          e.stopPropagation(), e.preventDefault(), j();
          return;
        case r:
          e.stopPropagation(), e.preventDefault(), k();
          return;
        case s.D$.HOME:
          e.stopPropagation(), e.preventDefault(), d().then(() => {
            var e;
            let n = null == (e = c(t, I)[0]) ? true : e.getAttribute(l.eM);
            null != n && R(n)
          });
          return;
        case s.D$.END:
          e.stopPropagation(), e.preventDefault(), f().then(() => {
            var e;
            let n = c(t, I),
              r = null == (e = n[n.length - 1]) ? true : e.getAttribute(l.eM);
            null != r && R(r)
          });
          return;
        case s.D$.SPACE:
        case s.D$.ENTER: {
          if (e.key === s.D$.SPACE && O || e.repeat) return;
          let t = v.current;
          if (null != t) {
            var i;
            let n = T((0, l.Mz)(t)),
              r = null != (i = null == n ? true : n.ownerDocument) ? i : document,
              a = E || n === r.activeElement;
            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
          }
        }
      }
    }, [j, k, t, b, f, d, R, E]),
    G = r.useCallback(e => {
      v.current = null != e ? (0, l.t$)(t, e) : null, (0, a.T)(t, e, g)
    }, [t, g]);
  return r.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: U,
      ref: I,
      tabIndex: D && g ? false : 0
    },
    orientation: b,
    setFocus: G,
    async focusLastVisibleItem() {
      var e;
      let n = await (0, o.FT)(null != (e = I.current) ? e : document.body, c(t, I));
      null !== n && R(n)
    },
    async focusFirstVisibleItem() {
      var e;
      let n = await (0, o.$b)(null != (e = I.current) ? e : document.body, c(t, I));
      null !== n && R(n)
    },
    focusPreviousItem: k,
    focusNextItem: j,
    focusedItemId() {
      let e = v.current;
      return e ? (0, l.HP)(e) : null
    }
  }), [t, U, b, D, g, G, k, j, R])
}