/** Chunk was on 46989 **/
n.d(t, {
  ZP: () => d
}), n(388685);
var r = n(73800),
  l = n(714319),
  i = n(536895),
  s = n(260866);
let a = [i.R8.TAB, i.R8.UP, i.R8.DOWN];

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
    getNewFocusIndex: m,
    maintainFocusPosition: A = !0,
    includeSetSizes: g = !0,
    focusOnMount: f = !0,
    enabled: T = !0,
    onDispatch: I
  } = e, h = r.useCallback((e, t) => {
    let n = (0, l.Z)(e, t);
    return null != I && I(e, n, t), n
  }, [I]), [O, p] = r.useReducer(h, {
    focusedIndex: d,
    itemCount: n
  }), {
    itemCount: N,
    focusedIndex: R
  } = O, [S] = r.useState(() => (0, s.P2)(p, 16));
  return r.useEffect(() => {
      p({
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
        getNewFocusIndex: m,
        dispatch: A,
        maintainFocusPosition: g,
        includeSetSizes: f,
        focusOnMount: T,
        enabled: I,
        makeId: h = s.qR,
        getIndexFromId: O
      } = e, p = r.useRef(n), N = r.useRef(O);
      N.current = O, p.current = n;
      let R = r.useRef(I);
      r.useEffect(() => {
        R.current = I
      }, [I]);
      let [S, C] = r.useState(!1), [b] = r.useState(() => new s.$o(e => () => {
        let t = null != N.current && "string" == typeof e ? N.current(e) : e;
        "number" != typeof t || t < 0 || A({
          type: l.G.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      r.useEffect(() => () => b.clean(), [b]);
      let v = r.useCallback((e, t) => {
          R.current && _(e, t)
        }, [_]),
        [D, x] = r.useState(!0);
      r.useEffect(() => {
        if (D && !T) return void x(!1);
        v(h(t, d), d)
      }, [d]);
      let L = r.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = null != m ? m(d) : d;
          n !== d && A({
            type: l.G.SET_FOCUSED_INDEX,
            index: n
          }), e && v(h(t, n), n)
        }, [h, d, m, A, t, v]),
        U = r.useCallback(e => {
          if (!R.current) return;
          if (a.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), L();
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
              e.preventDefault(), e.stopPropagation(), A({
                type: n
              });
              return;
            case i.Us.SELECT_FOCUSED_ITEM:
              let r = u(o(h, t, d));
              if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), A({
                  type: n
                }), null != E) return void E(d);
              null == r || r.click()
          }
        }, [h, t, A, d, L, E]),
        M = r.useCallback(() => {
          S || C(!0)
        }, [S]),
        j = r.useCallback(() => {
          S || (g ? v(h(t, d), d) : L(!0))
        }, [h, t, v, g, S, d, L]),
        P = r.useCallback(e => {
          e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
            if (null == u(o(h, t, d))) return void v(t);
            C(!1)
          })
        }, [h, t, d, v]),
        y = r.useRef(null);
      r.useLayoutEffect(() => {
        let e = y.current;
        if (null != e) return e.addEventListener("focusin", M), e.addEventListener("focus", j), e.addEventListener("focusout", P), () => {
          e.removeEventListener("focusin", M), e.removeEventListener("focus", j), e.removeEventListener("focusout", P)
        }
      }, [j, M, P]);
      let w = r.useCallback(() => ({
          role: "list",
          tabIndex: S && g ? -1 : 0,
          id: t,
          onKeyDown: U,
          ref: y
        }), [t, S, U, g]),
        G = r.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": f ? p.current : void 0,
            "aria-posinset": f ? n + 1 : void 0,
            id: h(t, n),
            tabIndex: g && n === d ? 0 : -1,
            onFocus: b.get(null != N.current ? h(t, n) : n)
          }
        }, [h, t, d, g, b, f]);
      return r.useMemo(() => ({
        dispatch: A,
        getContainerProps: w,
        getItemProps: G
      }), [A, w, G])
    }({
      navId: t,
      itemCount: N,
      focusedIndex: R,
      dispatch: S,
      onSelect: E,
      setFocus: _,
      getNewFocusIndex: m,
      maintainFocusPosition: A,
      includeSetSizes: g,
      focusOnMount: f,
      enabled: T
    })
}