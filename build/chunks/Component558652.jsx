/** Chunk was on 1272 **/
/** chunk id: 558652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./35282.js"), require("./388685.js"), require("./704826.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823379 = require("./823379.js"),
  Chunk624138 = require("./624138.js"),
  Chunk313481 = require("./313481.js"),
  Chunk264282 = require("./264282.jsx"),
  Chunk78606 = require("./78606.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk395995 = require("./395995.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk872058 = require("./872058.js");
let _ = [],
  b = Chunk313481.tR.SORT,
  E = Chunk313481.tR.FILTER,
  O = Chunk473749.forwardRef(function(e, t) {
    let [n, O] = (0, f.P)(), y = i.useMemo(() => {
      var e, t;
      return null !== (t = n.get(b), e = (0, o.Ew)(t) ? null : Object.values(h.yq).find(e => e === t) || null) && true !== e ? e : h.yq.SUGGESTED
    }, [n]), v = i.useMemo(() => {
      var e;
      return null != (e = function(e) {
        if ((0, o.Ew)(e)) return null;
        let t = e.split(",").map(e => (0, h.fI)(e)).filter(s.lm);
        return t.length > 0 ? t : null
      }(n.get(E))) ? e : _
    }, [n]), I = i.useCallback(e => {
      O({
        [b]: e
      })
    }, [O]), C = i.useCallback(e => {
      O({
        [E]: 0 === e.length ? null : e.map(e => {
          let {
            filter: t
          } = e;
          return t
        }).join(",")
      })
    }, [O]), {
      quests: S,
      excludedQuests: T,
      isFetchingCurrentQuests: N,
      hasFetched: j
    } = (0, c.bA)(c.e5.ALL, i.useMemo(() => ({
      sortMethod: y,
      filters: v
    }), [y, v])), P = i.useCallback(() => {
      C(_)
    }, [C]), x = i.useRef(null), A = i.useRef(null), Z = (0, l.TH)(), w = (0, l.k6)();
    return i.useEffect(() => {
      if ("" !== Z.hash && null != x.current && null != A.current) {
        var e, t;
        (y !== x.current || v !== A.current) && w.replace((e = function(e) {
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
        }({}, Z), t = t = {
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
    }, [y, v, Z, w]), i.useEffect(() => {
      x.current = y
    }, [y]), i.useEffect(() => {
      A.current = v
    }, [v]), (0, c.SU)({
      selectedSortMethod: y,
      selectedFilters: v,
      numQuestsVisible: S.length
    }), i.useImperativeHandle(t, () => ({
      resetSortingFiltering: () => {
        P(), I(h.yq.SUGGESTED)
      }
    }), [P, I]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: m.headingWrapper,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/medium",
          children: g.intl.string(g.t.giYD00)
        }), (0, r.jsxs)("div", {
          className: m.headingControls,
          children: [(0, r.jsx)(d.Z, {
            onChange: I,
            optionClassName: m.filterSortOption,
            selectedSortMethod: y
          }), (0, r.jsx)(u.Z, {
            onChange: C,
            selectedFilters: v
          })]
        })]
      }), (0, r.jsx)(p.Z, {
        quests: S,
        excludedQuests: T,
        isFetching: N,
        hasFetched: j,
        hasFiltersApplied: v.length > 0,
        onClearFilters: P
      })]
    })
  })