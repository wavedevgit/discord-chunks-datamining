/** Chunk was on 38985 **/
/** chunk id: 416681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => E
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk785825 = require("./785825.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");
let s = [Chunk741918.D$.TAB, Chunk741918.D$.UP, Chunk741918.D$.DOWN];

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
    getNewFocusIndex: g,
    maintainFocusPosition: A = true,
    includeSetSizes: T = true,
    focusOnMount: h = true,
    enabled: I = true,
    onDispatch: O
  } = e, m = l.useCallback((e, t) => {
    let n = (0, r.A)(e, t);
    return null != O && O(e, n, t), n
  }, [O]), [N, f] = l.useReducer(m, {
    focusedIndex: E,
    itemCount: n
  }), {
    itemCount: p,
    focusedIndex: S
  } = N, [G] = l.useState(() => (0, i.nF)(f, 16));
  return l.useEffect(() => {
      f({
        type: r.D.UPDATE_ITEM_COUNT,
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
        getNewFocusIndex: g,
        dispatch: A,
        maintainFocusPosition: T,
        includeSetSizes: h,
        focusOnMount: I,
        enabled: O,
        makeId: m = i.M4,
        getIndexFromId: N
      } = e, f = l.useRef(n), p = l.useRef(N);
      p.current = N, f.current = n;
      let S = l.useRef(O);
      l.useEffect(() => {
        S.current = O
      }, [O]);
      let [G, R] = l.useState(false), [D] = l.useState(() => new i.Lp(e => () => {
        let t = null != p.current && "string" == typeof e ? p.current(e) : e;
        "number" != typeof t || t < 0 || A({
          type: r.D.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      l.useEffect(() => () => D.clean(), [D]);
      let C = l.useCallback((e, t) => {
          S.current && _(e, t)
        }, [_]),
        [L, b] = l.useState(true);
      l.useEffect(() => {
        L && !I ? b(false) : C(m(t, E), E)
      }, [E]);
      let x = l.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != g ? g(E) : E;
          n !== E && A({
            type: r.D.SET_FOCUSED_INDEX,
            index: n
          }), e && C(m(t, n), n)
        }, [m, E, g, A, t, C]),
        M = l.useCallback(e => {
          if (!S.current) return;
          if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), x();
            return
          }
          let n = function(e) {
            switch (e.key) {
              case a.D$.ENTER:
              case a.D$.SPACE:
                return a.X2.SELECT_FOCUSED_ITEM;
              case a.D$.UP:
                return a.X2.NAVIGATE_UP;
              case a.D$.DOWN:
                return a.X2.NAVIGATE_DOWN;
              case a.D$.HOME:
                return a.X2.NAVIGATE_START;
              case a.D$.END:
                return a.X2.NAVIGATE_END
            }
          }(e);
          switch (n) {
            case a.X2.NAVIGATE_UP:
            case a.X2.NAVIGATE_DOWN:
            case a.X2.NAVIGATE_START:
            case a.X2.NAVIGATE_END:
              e.preventDefault(), e.stopPropagation(), A({
                type: n
              });
              return;
            case a.X2.SELECT_FOCUSED_ITEM:
              let l = u(o(m, t, E));
              if ((null == l ? true : l.ownerDocument.activeElement) !== l || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), A({
                  type: n
                }), null != d) return void d(E);
              null == l || l.click()
          }
        }, [m, t, A, E, x, d]),
        v = l.useCallback(() => {
          G || R(true)
        }, [G]),
        j = l.useCallback(() => {
          G || (T ? C(m(t, E), E) : x(true))
        }, [m, t, C, T, G, E, x]),
        U = l.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            null == u(o(m, t, E)) ? C(t) : R(false)
          })
        }, [m, t, E, C]),
        y = l.useRef(null);
      l.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", v), e.addEventListener("focus", j), e.addEventListener("focusout", U), () => {
          e.removeEventListener("focusin", v), e.removeEventListener("focus", j), e.removeEventListener("focusout", U)
        }
      }, [j, v, U]);
      let k = l.useCallback(() => ({
          role: "list",
          tabIndex: G && T ? false : 0,
          id: t,
          onKeyDown: M,
          ref: y
        }), [t, G, M, T]),
        P = l.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": h ? f.current : true,
            "aria-posinset": h ? n + 1 : true,
            id: m(t, n),
            tabIndex: T && n === E ? 0 : false,
            onFocus: D.get(null != p.current ? m(t, n) : n)
          }
        }, [m, t, E, T, D, h]);
      return l.useMemo(() => ({
        dispatch: A,
        getContainerProps: k,
        getItemProps: P
      }), [A, k, P])
    }({
      navId: t,
      itemCount: p,
      focusedIndex: S,
      dispatch: G,
      onSelect: d,
      setFocus: _,
      getNewFocusIndex: g,
      maintainFocusPosition: A,
      includeSetSizes: T,
      focusOnMount: h,
      enabled: I
    })
}