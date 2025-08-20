/** Chunk was on 7318 **/
/** chunk id: 837969, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  ZP: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk714319 = require("./714319.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");
let s = [Chunk536895.R8.TAB, Chunk536895.R8.UP, Chunk536895.R8.DOWN];

function a(A, e, t) {
  return null != t ? "#".concat(A(e, t)) : "#".concat(e)
}

function o(A) {
  return document.querySelector(A)
}

function g(A) {
  var e;
  null == (e = document.getElementById(A)) || e.focus()
}

function c(A) {
  let {
    navId: e,
    itemCount: t,
    focusedIndex: c = 0,
    onSelect: f,
    setFocus: v,
    getNewFocusIndex: h,
    maintainFocusPosition: u = true,
    includeSetSizes: d = true,
    focusOnMount: E = true,
    enabled: C = true,
    onDispatch: B
  } = A, w = n.useCallback((A, e) => {
    let t = (0, r.Z)(A, e);
    return null != B && B(A, t, e), t
  }, [B]), [D, M] = n.useReducer(w, {
    focusedIndex: c,
    itemCount: t
  }), {
    itemCount: p,
    focusedIndex: I
  } = D, [H] = n.useState(() => (0, i.P2)(M, 16));
  return n.useEffect(() => {
      M({
        type: r.G.UPDATE_ITEM_COUNT,
        itemCount: t
      })
    }, [t]),
    function(A) {
      let {
        navId: e,
        itemCount: t,
        focusedIndex: c,
        onSelect: f,
        setFocus: v = g,
        getNewFocusIndex: h,
        dispatch: u,
        maintainFocusPosition: d,
        includeSetSizes: E,
        focusOnMount: C,
        enabled: B,
        makeId: w = i.qR,
        getIndexFromId: D
      } = A, M = n.useRef(t), p = n.useRef(D);
      p.current = D, M.current = t;
      let I = n.useRef(B);
      n.useEffect(() => {
        I.current = B
      }, [B]);
      let [H, b] = n.useState(false), [Q] = n.useState(() => new i.$o(A => () => {
        let e = null != p.current && "string" == typeof A ? p.current(A) : A;
        "number" != typeof e || e < 0 || u({
          type: r.G.SET_FOCUSED_INDEX,
          index: e
        })
      }));
      n.useEffect(() => () => Q.clean(), [Q]);
      let O = n.useCallback((A, e) => {
          I.current && v(A, e)
        }, [v]),
        [P, V] = n.useState(true);
      n.useEffect(() => {
        if (P && !C) return void V(false);
        O(w(e, c), c)
      }, [c]);
      let j = n.useCallback(function() {
          let A = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            t = null != h ? h(c) : c;
          t !== c && u({
            type: r.G.SET_FOCUSED_INDEX,
            index: t
          }), A && O(w(e, t), t)
        }, [w, c, h, u, e, O]),
        m = n.useCallback(A => {
          if (!I.current) return;
          if (s.includes(A.key) && !(A.shiftKey || A.altKey || A.metaKey || A.ctrlKey) && A.currentTarget === A.target) {
            A.preventDefault(), A.stopPropagation(), j();
            return
          }
          let t = function(A) {
            switch (A.key) {
              case l.R8.ENTER:
              case l.R8.SPACE:
                return l.Us.SELECT_FOCUSED_ITEM;
              case l.R8.UP:
                return l.Us.NAVIGATE_UP;
              case l.R8.DOWN:
                return l.Us.NAVIGATE_DOWN;
              case l.R8.HOME:
                return l.Us.NAVIGATE_START;
              case l.R8.END:
                return l.Us.NAVIGATE_END
            }
          }(A);
          switch (t) {
            case l.Us.NAVIGATE_UP:
            case l.Us.NAVIGATE_DOWN:
            case l.Us.NAVIGATE_START:
            case l.Us.NAVIGATE_END:
              A.preventDefault(), A.stopPropagation(), u({
                type: t
              });
              return;
            case l.Us.SELECT_FOCUSED_ITEM:
              let n = o(a(w, e, c));
              if ((null == n ? true : n.ownerDocument.activeElement) !== n || A.repeat) return;
              if (A.preventDefault(), A.stopPropagation(), u({
                  type: t
                }), null != f) return void f(c);
              null == n || n.click()
          }
        }, [w, e, u, c, j, f]),
        T = n.useCallback(() => {
          H || b(true)
        }, [H]),
        y = n.useCallback(() => {
          H || (d ? O(w(e, c), c) : j(true))
        }, [w, e, O, d, H, c, j]),
        L = n.useCallback(A => {
          A.currentTarget.contains(A.relatedTarget) || requestAnimationFrame(() => {
            if (null == o(a(w, e, c))) return void O(e);
            b(false)
          })
        }, [w, e, c, O]),
        x = n.useRef(null);
      n.useLayoutEffect(() => {
        let A = x.current;
        if (null != A) return A.addEventListener("focusin", T), A.addEventListener("focus", y), A.addEventListener("focusout", L), () => {
          A.removeEventListener("focusin", T), A.removeEventListener("focus", y), A.removeEventListener("focusout", L)
        }
      }, [y, T, L]);
      let N = n.useCallback(() => ({
          role: "list",
          tabIndex: H && d ? false : 0,
          id: e,
          onKeyDown: m,
          ref: x
        }), [e, H, m, d]),
        Z = n.useCallback(A => {
          let {
            index: t
          } = A;
          return {
            role: "listitem",
            "aria-setsize": E ? M.current : true,
            "aria-posinset": E ? t + 1 : true,
            id: w(e, t),
            tabIndex: d && t === c ? 0 : false,
            onFocus: Q.get(null != p.current ? w(e, t) : t)
          }
        }, [w, e, c, d, Q, E]);
      return n.useMemo(() => ({
        dispatch: u,
        getContainerProps: N,
        getItemProps: Z
      }), [u, N, Z])
    }({
      navId: e,
      itemCount: p,
      focusedIndex: I,
      dispatch: H,
      onSelect: f,
      setFocus: v,
      getNewFocusIndex: h,
      maintainFocusPosition: u,
      includeSetSizes: d,
      focusOnMount: E,
      enabled: C
    })
}