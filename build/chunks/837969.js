/** Chunk was on 69937 **/
/** chunk id: 837969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk714319 = require("./714319.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");
let s = [Chunk536895.R8.TAB, Chunk536895.R8.UP, Chunk536895.R8.DOWN];

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

function d(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: d = 0,
    onSelect: E,
    setFocus: _,
    getNewFocusIndex: A,
    maintainFocusPosition: f = true,
    includeSetSizes: T = true,
    focusOnMount: g = true,
    enabled: I = true,
    onDispatch: m
  } = e, h = r.useCallback((e, t) => {
    let n = (0, l.Z)(e, t);
    return null != m && m(e, n, t), n
  }, [m]), [N, O] = r.useReducer(h, {
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
        setFocus: _ = u,
        getNewFocusIndex: A,
        dispatch: f,
        maintainFocusPosition: T,
        includeSetSizes: g,
        focusOnMount: I,
        enabled: m,
        makeId: h = a.qR,
        getIndexFromId: N
      } = e, O = r.useRef(n), p = r.useRef(N);
      p.current = N, O.current = n;
      let R = r.useRef(m);
      r.useEffect(() => {
        R.current = m
      }, [m]);
      let [S, C] = r.useState(false), [b] = r.useState(() => new a.$o(e => () => {
        let t = null != p.current && "string" == typeof e ? p.current(e) : e;
        "number" != typeof t || t < 0 || f({
          type: l.G.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      r.useEffect(() => () => b.clean(), [b]);
      let D = r.useCallback((e, t) => {
          R.current && _(e, t)
        }, [_]),
        [L, U] = r.useState(true);
      r.useEffect(() => {
        if (L && !I) return void U(false);
        D(h(t, d), d)
      }, [d]);
      let M = r.useCallback(function() {
          let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
            n = null != A ? A(d) : d;
          n !== d && f({
            type: l.G.SET_FOCUSED_INDEX,
            index: n
          }), e && D(h(t, n), n)
        }, [h, d, A, f, t, D]),
        v = r.useCallback(e => {
          if (!R.current) return;
          if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), M();
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
              e.preventDefault(), e.stopPropagation(), f({
                type: n
              });
              return;
            case i.Us.SELECT_FOCUSED_ITEM:
              let r = c(o(h, t, d));
              if ((null == r ? true : r.ownerDocument.activeElement) !== r || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), f({
                  type: n
                }), null != E) return void E(d);
              null == r || r.click()
          }
        }, [h, t, f, d, M, E]),
        x = r.useCallback(() => {
          S || C(true)
        }, [S]),
        P = r.useCallback(() => {
          S || (T ? D(h(t, d), d) : M(true))
        }, [h, t, D, T, S, d, M]),
        j = r.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            if (null == c(o(h, t, d))) return void D(t);
            C(false)
          })
        }, [h, t, d, D]),
        y = r.useRef(null);
      r.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", x), e.addEventListener("focus", P), e.addEventListener("focusout", j), () => {
          e.removeEventListener("focusin", x), e.removeEventListener("focus", P), e.removeEventListener("focusout", j)
        }
      }, [P, x, j]);
      let G = r.useCallback(() => ({
          role: "list",
          tabIndex: S && T ? false : 0,
          id: t,
          onKeyDown: v,
          ref: y
        }), [t, S, v, T]),
        k = r.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": g ? O.current : true,
            "aria-posinset": g ? n + 1 : true,
            id: h(t, n),
            tabIndex: T && n === d ? 0 : false,
            onFocus: b.get(null != p.current ? h(t, n) : n)
          }
        }, [h, t, d, T, b, g]);
      return r.useMemo(() => ({
        dispatch: f,
        getContainerProps: G,
        getItemProps: k
      }), [f, G, k])
    }({
      navId: t,
      itemCount: p,
      focusedIndex: R,
      dispatch: S,
      onSelect: E,
      setFocus: _,
      getNewFocusIndex: A,
      maintainFocusPosition: f,
      includeSetSizes: T,
      focusOnMount: g,
      enabled: I
    })
}