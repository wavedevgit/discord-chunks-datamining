/** Chunk was on 10576 **/
/** chunk id: 837969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => E
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

function E(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: E = 0,
    onSelect: d,
    setFocus: _,
    getNewFocusIndex: A,
    maintainFocusPosition: T = true,
    includeSetSizes: m = true,
    focusOnMount: I = true,
    enabled: g = true,
    onDispatch: h
  } = e, N = r.useCallback((e, t) => {
    let n = (0, l.Z)(e, t);
    return null != h && h(e, n, t), n
  }, [h]), [O, f] = r.useReducer(N, {
    focusedIndex: E,
    itemCount: n
  }), {
    itemCount: p,
    focusedIndex: R
  } = O, [S] = r.useState(() => (0, a.P2)(f, 16));
  return r.useEffect(() => {
      f({
        type: l.G.UPDATE_ITEM_COUNT,
        itemCount: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        itemCount: n,
        focusedIndex: E,
        onSelect: d,
        setFocus: _ = c,
        getNewFocusIndex: A,
        dispatch: T,
        maintainFocusPosition: m,
        includeSetSizes: I,
        focusOnMount: g,
        enabled: h,
        makeId: N = a.qR,
        getIndexFromId: O
      } = e, f = r.useRef(n), p = r.useRef(O);
      p.current = O, f.current = n;
      let R = r.useRef(h);
      r.useEffect(() => {
        R.current = h
      }, [h]);
      let [S, C] = r.useState(false), [L] = r.useState(() => new a.$o(e => () => {
        let t = null != p.current && "string" == typeof e ? p.current(e) : e;
        "number" != typeof t || t < 0 || T({
          type: l.G.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      r.useEffect(() => () => L.clean(), [L]);
      let D = r.useCallback((e, t) => {
          R.current && _(e, t)
        }, [_]),
        [U, M] = r.useState(true);
      r.useEffect(() => {
        if (U && !g) return void M(false);
        D(N(t, E), E)
      }, [E]);
      let b = r.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != A ? A(E) : E;
          n !== E && T({
            type: l.G.SET_FOCUSED_INDEX,
            index: n
          }), e && D(N(t, n), n)
        }, [N, E, A, T, t, D]),
        v = r.useCallback(e => {
          if (!R.current) return;
          if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), b();
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
              e.preventDefault(), e.stopPropagation(), T({
                type: n
              });
              return;
            case i.Us.SELECT_FOCUSED_ITEM:
              let r = u(o(N, t, E));
              if ((null == r ? true : r.ownerDocument.activeElement) !== r || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), T({
                  type: n
                }), null != d) return void d(E);
              null == r || r.click()
          }
        }, [N, t, T, E, b, d]),
        x = r.useCallback(() => {
          S || C(true)
        }, [S]),
        P = r.useCallback(() => {
          S || (m ? D(N(t, E), E) : b(true))
        }, [N, t, D, m, S, E, b]),
        j = r.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            if (null == u(o(N, t, E))) return void D(t);
            C(false)
          })
        }, [N, t, E, D]),
        y = r.useRef(null);
      r.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", x), e.addEventListener("focus", P), e.addEventListener("focusout", j), () => {
          e.removeEventListener("focusin", x), e.removeEventListener("focus", P), e.removeEventListener("focusout", j)
        }
      }, [P, x, j]);
      let G = r.useCallback(() => ({
          role: "list",
          tabIndex: S && m ? false : 0,
          id: t,
          onKeyDown: v,
          ref: y
        }), [t, S, v, m]),
        w = r.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": I ? f.current : true,
            "aria-posinset": I ? n + 1 : true,
            id: N(t, n),
            tabIndex: m && n === E ? 0 : false,
            onFocus: L.get(null != p.current ? N(t, n) : n)
          }
        }, [N, t, E, m, L, I]);
      return r.useMemo(() => ({
        dispatch: T,
        getContainerProps: G,
        getItemProps: w
      }), [T, G, w])
    }({
      navId: t,
      itemCount: p,
      focusedIndex: R,
      dispatch: S,
      onSelect: d,
      setFocus: _,
      getNewFocusIndex: A,
      maintainFocusPosition: T,
      includeSetSizes: m,
      focusOnMount: I,
      enabled: g
    })
}