/** Chunk was on 21738 **/
/** chunk id: 409389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./747238.js"), require("./896048.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk397927 = require("./397927.js"),
  Chunk403362 = require("./403362.js"),
  Chunk240248 = require("./240248.js"),
  Chunk890687 = require("./890687.js"),
  Chunk936356 = require("./936356.jsx"),
  Chunk505478 = require("./505478.jsx"),
  Chunk349555 = require("./349555.jsx"),
  Chunk352670 = require("./352670.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk153153 = require("./153153.js");
let m = [],
  b = Chunk890687.L1.SORT,
  _ = Chunk890687.L1.FILTER,
  E = Chunk64700.forwardRef(function(e, t) {
    let [n, E] = (0, f.Y)(), O = i.useMemo(() => {
      var e, t;
      return null !== (t = n.get(b), e = (0, o.uJ)(t) ? null : Object.values(h.kL).find(e => e === t) || null) && true !== e ? e : h.kL.SUGGESTED
    }, [n]), y = i.useMemo(() => {
      var e;
      return null != (e = function(e) {
        if ((0, o.uJ)(e)) return null;
        let t = e.split(",").map(e => (0, h.WQ)(e)).filter(s.Vq);
        return t.length > 0 ? t : null
      }(n.get(_))) ? e : m
    }, [n]), I = i.useCallback(e => {
      E({
        [b]: e
      })
    }, [E]), v = i.useCallback(e => {
      E({
        [_]: 0 === e.length ? null : e.map(e => {
          let {
            filter: t
          } = e;
          return t
        }).join(",")
      })
    }, [E]), {
      quests: S,
      excludedQuests: C,
      isFetchingCurrentQuests: N,
      hasFetched: T
    } = (0, c.Qh)(c.NC.ALL, i.useMemo(() => ({
      sortMethod: O,
      filters: y
    }), [O, y])), j = i.useCallback(() => {
      v(m)
    }, [v]), x = i.useRef(null), P = i.useRef(null), w = (0, l.zy)(), L = (0, l.W6)();
    return i.useEffect(() => {
      if ("" !== w.hash && null != x.current && null != P.current) {
        var e, t;
        (O !== x.current || y !== P.current) && L.replace((e = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, w), t = t = {
          hash: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))
      }
    }, [O, y, w, L]), i.useEffect(() => {
      x.current = O
    }, [O]), i.useEffect(() => {
      P.current = y
    }, [y]), (0, c.$P)({
      selectedSortMethod: O,
      selectedFilters: y,
      numQuestsVisible: S.length
    }), i.useImperativeHandle(t, () => ({
      resetSortingFiltering: () => {
        j(), I(h.kL.SUGGESTED)
      }
    }), [j, I]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: g.Mj,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/medium",
          children: A.intl.string(A.t.giYD00)
        }), (0, r.jsxs)("div", {
          className: g.Nf,
          children: [(0, r.jsx)(d.A, {
            onChange: I,
            optionClassName: g.Uq,
            selectedSortMethod: O
          }), (0, r.jsx)(u.A, {
            onChange: v,
            selectedFilters: y
          })]
        })]
      }), (0, r.jsx)(p.A, {
        quests: S,
        excludedQuests: C,
        isFetching: N,
        hasFetched: T,
        hasFiltersApplied: y.length > 0,
        onClearFilters: j
      })]
    })
  })