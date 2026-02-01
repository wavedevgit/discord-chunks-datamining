/** Chunk was on 49438 **/
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
    onSelect: _,
    setFocus: d,
    getNewFocusIndex: g,
    maintainFocusPosition: A = true,
    includeSetSizes: T = true,
    focusOnMount: I = true,
    enabled: O = true,
    onDispatch: h
  } = e, N = l.useCallback((e, t) => {
    let n = (0, r.A)(e, t);
    return null != h && h(e, n, t), n
  }, [h]), [m, f] = l.useReducer(N, {
    focusedIndex: E,
    itemCount: n
  }), {
    itemCount: S,
    focusedIndex: p
  } = m, [G] = l.useState(() => (0, i.nF)(f, 16));
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
        onSelect: _,
        setFocus: d = c,
        getNewFocusIndex: g,
        dispatch: A,
        maintainFocusPosition: T,
        includeSetSizes: I,
        focusOnMount: O,
        enabled: h,
        makeId: N = i.M4,
        getIndexFromId: m
      } = e, f = l.useRef(n), S = l.useRef(m);
      S.current = m, f.current = n;
      let p = l.useRef(h);
      l.useEffect(() => {
        p.current = h
      }, [h]);
      let [G, R] = l.useState(false), [D] = l.useState(() => new i.Lp(e => () => {
        let t = null != S.current && "string" == typeof e ? S.current(e) : e;
        "number" != typeof t || t < 0 || A({
          type: r.D.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      l.useEffect(() => () => D.clean(), [D]);
      let C = l.useCallback((e, t) => {
          p.current && d(e, t)
        }, [d]),
        [L, x] = l.useState(true);
      l.useEffect(() => {
        L && !O ? x(false) : C(N(t, E), E)
      }, [E]);
      let b = l.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != g ? g(E) : E;
          n !== E && A({
            type: r.D.SET_FOCUSED_INDEX,
            index: n
          }), e && C(N(t, n), n)
        }, [N, E, g, A, t, C]),
        M = l.useCallback(e => {
          if (!p.current) return;
          if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), b();
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
              let l = u(o(N, t, E));
              if ((null == l ? true : l.ownerDocument.activeElement) !== l || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), A({
                  type: n
                }), null != _) return void _(E);
              null == l || l.click()
          }
        }, [N, t, A, E, b, _]),
        v = l.useCallback(() => {
          G || R(true)
        }, [G]),
        U = l.useCallback(() => {
          G || (T ? C(N(t, E), E) : b(true))
        }, [N, t, C, T, G, E, b]),
        j = l.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            null == u(o(N, t, E)) ? C(t) : R(false)
          })
        }, [N, t, E, C]),
        y = l.useRef(null);
      l.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", v), e.addEventListener("focus", U), e.addEventListener("focusout", j), () => {
          e.removeEventListener("focusin", v), e.removeEventListener("focus", U), e.removeEventListener("focusout", j)
        }
      }, [U, v, j]);
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
            "aria-setsize": I ? f.current : true,
            "aria-posinset": I ? n + 1 : true,
            id: N(t, n),
            tabIndex: T && n === E ? 0 : false,
            onFocus: D.get(null != S.current ? N(t, n) : n)
          }
        }, [N, t, E, T, D, I]);
      return l.useMemo(() => ({
        dispatch: A,
        getContainerProps: k,
        getItemProps: P
      }), [A, k, P])
    }({
      navId: t,
      itemCount: S,
      focusedIndex: p,
      dispatch: G,
      onSelect: _,
      setFocus: d,
      getNewFocusIndex: g,
      maintainFocusPosition: A,
      includeSetSizes: T,
      focusOnMount: I,
      enabled: O
    })
}