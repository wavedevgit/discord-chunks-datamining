/** Chunk was on 94503 **/
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

function c(e) {
  return document.querySelector(e)
}

function u(e) {
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
    focusOnMount: f = true,
    enabled: h = true,
    onDispatch: I
  } = e, O = l.useCallback((e, t) => {
    let n = (0, r.A)(e, t);
    return null != I && I(e, n, t), n
  }, [I]), [N, m] = l.useReducer(O, {
    focusedIndex: E,
    itemCount: n
  }), {
    itemCount: S,
    focusedIndex: p
  } = N, [b] = l.useState(() => (0, i.nF)(m, 16));
  return l.useEffect(() => {
      m({
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
        setFocus: _ = u,
        getNewFocusIndex: g,
        dispatch: A,
        maintainFocusPosition: T,
        includeSetSizes: f,
        focusOnMount: h,
        enabled: I,
        makeId: O = i.M4,
        getIndexFromId: N
      } = e, m = l.useRef(n), S = l.useRef(N);
      S.current = N, m.current = n;
      let p = l.useRef(I);
      l.useEffect(() => {
        p.current = I
      }, [I]);
      let [b, G] = l.useState(false), [R] = l.useState(() => new i.Lp(e => () => {
        let t = null != S.current && "string" == typeof e ? S.current(e) : e;
        "number" != typeof t || t < 0 || A({
          type: r.D.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      l.useEffect(() => () => R.clean(), [R]);
      let D = l.useCallback((e, t) => {
          p.current && _(e, t)
        }, [_]),
        [L, x] = l.useState(true);
      l.useEffect(() => {
        L && !h ? x(false) : D(O(t, E), E)
      }, [E]);
      let C = l.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != g ? g(E) : E;
          n !== E && A({
            type: r.D.SET_FOCUSED_INDEX,
            index: n
          }), e && D(O(t, n), n)
        }, [O, E, g, A, t, D]),
        M = l.useCallback(e => {
          if (!p.current) return;
          if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), C();
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
              let l = c(o(O, t, E));
              if ((null == l ? true : l.ownerDocument.activeElement) !== l || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), A({
                  type: n
                }), null != d) return void d(E);
              null == l || l.click()
          }
        }, [O, t, A, E, C, d]),
        v = l.useCallback(() => {
          b || G(true)
        }, [b]),
        j = l.useCallback(() => {
          b || (T ? D(O(t, E), E) : C(true))
        }, [O, t, D, T, b, E, C]),
        U = l.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            null == c(o(O, t, E)) ? D(t) : G(false)
          })
        }, [O, t, E, D]),
        y = l.useRef(null);
      l.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", v), e.addEventListener("focus", j), e.addEventListener("focusout", U), () => {
          e.removeEventListener("focusin", v), e.removeEventListener("focus", j), e.removeEventListener("focusout", U)
        }
      }, [j, v, U]);
      let P = l.useCallback(() => ({
          role: "list",
          tabIndex: b && T ? false : 0,
          id: t,
          onKeyDown: M,
          ref: y
        }), [t, b, M, T]),
        k = l.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": f ? m.current : true,
            "aria-posinset": f ? n + 1 : true,
            id: O(t, n),
            tabIndex: T && n === E ? 0 : false,
            onFocus: R.get(null != S.current ? O(t, n) : n)
          }
        }, [O, t, E, T, R, f]);
      return l.useMemo(() => ({
        dispatch: A,
        getContainerProps: P,
        getItemProps: k
      }), [A, P, k])
    }({
      navId: t,
      itemCount: S,
      focusedIndex: p,
      dispatch: b,
      onSelect: d,
      setFocus: _,
      getNewFocusIndex: g,
      maintainFocusPosition: A,
      includeSetSizes: T,
      focusOnMount: f,
      enabled: h
    })
}