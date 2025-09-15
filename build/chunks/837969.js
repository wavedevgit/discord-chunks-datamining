/** Chunk was on 10576 **/
/** chunk id: 837969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk714319 = require("./714319.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");
let s = [Chunk536895.R8.TAB, Chunk536895.R8.UP, Chunk536895.R8.DOWN];

function o(e, t, n) {
  return null != n ? "#".concat(e(t, n)) : "#".concat(t)
}

function u(e) {
  return document.querySelector(e)
}

function c(e) {
  var t;
  null == (t = document.getElementById(e)) || t.focus()
}

function d(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: d = 0,
    onSelect: E,
    setFocus: _,
    getNewFocusIndex: A,
    maintainFocusPosition: m = true,
    includeSetSizes: T = true,
    focusOnMount: I = true,
    enabled: g = true,
    onDispatch: h
  } = e, f = r.useCallback((e, t) => {
    let n = (0, l.Z)(e, t);
    return null != h && h(e, n, t), n
  }, [h]), [N, O] = r.useReducer(f, {
    focusedIndex: d,
    itemCount: n
  }), {
    itemCount: p,
    focusedIndex: R
  } = N, [S] = r.useState(() => (0, a.P2)(O, 16));
  return r.useEffect(() => {
      O({
        type: l.G.UPDATE_ITEM_COUNT,
        itemCount: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        itemCount: n,
        focusedIndex: d,
        onSelect: E,
        setFocus: _ = c,
        getNewFocusIndex: A,
        dispatch: m,
        maintainFocusPosition: T,
        includeSetSizes: I,
        focusOnMount: g,
        enabled: h,
        makeId: f = a.qR,
        getIndexFromId: N
      } = e, O = r.useRef(n), p = r.useRef(N);
      p.current = N, O.current = n;
      let R = r.useRef(h);
      r.useEffect(() => {
        R.current = h
      }, [h]);
      let [S, C] = r.useState(false), [D] = r.useState(() => new a.$o(e => () => {
        let t = null != p.current && "string" == typeof e ? p.current(e) : e;
        "number" != typeof t || t < 0 || m({
          type: l.G.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      r.useEffect(() => () => D.clean(), [D]);
      let L = r.useCallback((e, t) => {
          R.current && _(e, t)
        }, [_]),
        [b, U] = r.useState(true);
      r.useEffect(() => {
        if (b && !g) return void U(false);
        L(f(t, d), d)
      }, [d]);
      let v = r.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != A ? A(d) : d;
          n !== d && m({
            type: l.G.SET_FOCUSED_INDEX,
            index: n
          }), e && L(f(t, n), n)
        }, [f, d, A, m, t, L]),
        M = r.useCallback(e => {
          if (!R.current) return;
          if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), v();
            return
          }
          let n = function(e) {
            switch (e.key) {
              case i.R8.ENTER:
              case i.R8.SPACE:
                return i.Us.SELECT_FOCUSED_ITEM;
              case i.R8.UP:
                return i.Us.NAVIGATE_UP;
              case i.R8.DOWN:
                return i.Us.NAVIGATE_DOWN;
              case i.R8.HOME:
                return i.Us.NAVIGATE_START;
              case i.R8.END:
                return i.Us.NAVIGATE_END
            }
          }(e);
          switch (n) {
            case i.Us.NAVIGATE_UP:
            case i.Us.NAVIGATE_DOWN:
            case i.Us.NAVIGATE_START:
            case i.Us.NAVIGATE_END:
              e.preventDefault(), e.stopPropagation(), m({
                type: n
              });
              return;
            case i.Us.SELECT_FOCUSED_ITEM:
              let r = u(o(f, t, d));
              if ((null == r ? true : r.ownerDocument.activeElement) !== r || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), m({
                  type: n
                }), null != E) return void E(d);
              null == r || r.click()
          }
        }, [f, t, m, d, v, E]),
        x = r.useCallback(() => {
          S || C(true)
        }, [S]),
        P = r.useCallback(() => {
          S || (T ? L(f(t, d), d) : v(true))
        }, [f, t, L, T, S, d, v]),
        j = r.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            if (null == u(o(f, t, d))) return void L(t);
            C(false)
          })
        }, [f, t, d, L]),
        y = r.useRef(null);
      r.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", x), e.addEventListener("focus", P), e.addEventListener("focusout", j), () => {
          e.removeEventListener("focusin", x), e.removeEventListener("focus", P), e.removeEventListener("focusout", j)
        }
      }, [P, x, j]);
      let w = r.useCallback(() => ({
          role: "list",
          tabIndex: S && T ? false : 0,
          id: t,
          onKeyDown: M,
          ref: y
        }), [t, S, M, T]),
        G = r.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": I ? O.current : true,
            "aria-posinset": I ? n + 1 : true,
            id: f(t, n),
            tabIndex: T && n === d ? 0 : false,
            onFocus: D.get(null != p.current ? f(t, n) : n)
          }
        }, [f, t, d, T, D, I]);
      return r.useMemo(() => ({
        dispatch: m,
        getContainerProps: w,
        getItemProps: G
      }), [m, w, G])
    }({
      navId: t,
      itemCount: p,
      focusedIndex: R,
      dispatch: S,
      onSelect: E,
      setFocus: _,
      getNewFocusIndex: A,
      maintainFocusPosition: m,
      includeSetSizes: T,
      focusOnMount: I,
      enabled: g
    })
}