/** Chunk was on 66201 **/
/** chunk id: 837969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => E
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk714319 = require("./714319.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");
let a = [Chunk536895.R8.TAB, Chunk536895.R8.UP, Chunk536895.R8.DOWN];

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
    includeSetSizes: I = true,
    focusOnMount: m = true,
    enabled: g = true,
    onDispatch: N
  } = e, O = r.useCallback((e, t) => {
    let n = (0, l.Z)(e, t);
    return null != N && N(e, n, t), n
  }, [N]), [h, f] = r.useReducer(O, {
    focusedIndex: E,
    itemCount: n
  }), {
    itemCount: R,
    focusedIndex: S
  } = h, [p] = r.useState(() => (0, s.P2)(f, 16));
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
        maintainFocusPosition: I,
        includeSetSizes: m,
        focusOnMount: g,
        enabled: N,
        makeId: O = s.qR,
        getIndexFromId: h
      } = e, f = r.useRef(n), R = r.useRef(h);
      R.current = h, f.current = n;
      let S = r.useRef(N);
      r.useEffect(() => {
        S.current = N
      }, [N]);
      let [p, C] = r.useState(false), [D] = r.useState(() => new s.$o(e => () => {
        let t = null != R.current && "string" == typeof e ? R.current(e) : e;
        "number" != typeof t || t < 0 || T({
          type: l.G.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      r.useEffect(() => () => D.clean(), [D]);
      let L = r.useCallback((e, t) => {
          S.current && _(e, t)
        }, [_]),
        [U, M] = r.useState(true);
      r.useEffect(() => {
        if (U && !g) return void M(false);
        L(O(t, E), E)
      }, [E]);
      let b = r.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != A ? A(E) : E;
          n !== E && T({
            type: l.G.SET_FOCUSED_INDEX,
            index: n
          }), e && L(O(t, n), n)
        }, [O, E, A, T, t, L]),
        v = r.useCallback(e => {
          if (!S.current) return;
          if (a.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
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
              let r = u(o(O, t, E));
              if ((null == r ? true : r.ownerDocument.activeElement) !== r || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), T({
                  type: n
                }), null != d) return void d(E);
              null == r || r.click()
          }
        }, [O, t, T, E, b, d]),
        x = r.useCallback(() => {
          p || C(true)
        }, [p]),
        P = r.useCallback(() => {
          p || (I ? L(O(t, E), E) : b(true))
        }, [O, t, L, I, p, E, b]),
        j = r.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            if (null == u(o(O, t, E))) return void L(t);
            C(false)
          })
        }, [O, t, E, L]),
        y = r.useRef(null);
      r.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", x), e.addEventListener("focus", P), e.addEventListener("focusout", j), () => {
          e.removeEventListener("focusin", x), e.removeEventListener("focus", P), e.removeEventListener("focusout", j)
        }
      }, [P, x, j]);
      let G = r.useCallback(() => ({
          role: "list",
          tabIndex: p && I ? false : 0,
          id: t,
          onKeyDown: v,
          ref: y
        }), [t, p, v, I]),
        k = r.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": m ? f.current : true,
            "aria-posinset": m ? n + 1 : true,
            id: O(t, n),
            tabIndex: I && n === E ? 0 : false,
            onFocus: D.get(null != R.current ? O(t, n) : n)
          }
        }, [O, t, E, I, D, m]);
      return r.useMemo(() => ({
        dispatch: T,
        getContainerProps: G,
        getItemProps: k
      }), [T, G, k])
    }({
      navId: t,
      itemCount: R,
      focusedIndex: S,
      dispatch: p,
      onSelect: d,
      setFocus: _,
      getNewFocusIndex: A,
      maintainFocusPosition: T,
      includeSetSizes: I,
      focusOnMount: m,
      enabled: g
    })
}