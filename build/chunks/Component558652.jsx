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
  Chunk968843 = require("./968843.js"),
  Chunk264282 = require("./264282.jsx"),
  Chunk78606 = require("./78606.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk395995 = require("./395995.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk416914 = require("./416914.js");
let b = [],
  E = Chunk968843.tR.SORT,
  _ = Chunk968843.tR.FILTER,
  O = Chunk473749.forwardRef(function(e, t) {
    let [n, O] = (0, f.P)(), v = i.useMemo(() => {
      var e, t;
      return null !== (t = n.get(E), e = (0, s.Ew)(t) ? null : Object.values(g.yq).find(e => e === t) || null) && true !== e ? e : g.yq.SUGGESTED
    }, [n]), I = i.useMemo(() => {
      var e;
      return null != (e = function(e) {
        if ((0, s.Ew)(e)) return null;
        let t = e.split(",").map(e => (0, g.fI)(e)).filter(o.lm);
        return t.length > 0 ? t : null
      }(n.get(_))) ? e : b
    }, [n]), y = i.useCallback(e => {
      O({
        [E]: e
      })
    }, [O]), C = i.useCallback(e => {
      O({
        [_]: 0 === e.length ? null : e.map(e => {
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
      sortMethod: v,
      filters: I
    }), [v, I])), x = i.useCallback(() => {
      C(b)
    }, [C]), P = i.useRef(null), A = i.useRef(null), Z = (0, l.TH)(), w = (0, l.k6)();
    return i.useEffect(() => {
      if ("" !== Z.hash && null != P.current && null != A.current) {
        var e, t;
        (v !== P.current || I !== A.current) && w.replace((e = function(e) {
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
    }, [v, I, Z, w]), i.useEffect(() => {
      P.current = v
    }, [v]), i.useEffect(() => {
      A.current = I
    }, [I]), (0, c.SU)({
      selectedSortMethod: v,
      selectedFilters: I,
      numQuestsVisible: S.length
    }), i.useImperativeHandle(t, () => ({
      resetSortingFiltering: () => {
        x(), y(g.yq.SUGGESTED)
      }
    }), [x, y]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: m.headingWrapper,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/medium",
          children: h.intl.string(h.t.giYD00)
        }), (0, r.jsxs)("div", {
          className: m.headingControls,
          children: [(0, r.jsx)(d.Z, {
            onChange: y,
            optionClassName: m.filterSortOption,
            selectedSortMethod: v
          }), (0, r.jsx)(u.Z, {
            onChange: C,
            selectedFilters: I
          })]
        })]
      }), (0, r.jsx)(p.Z, {
        quests: S,
        excludedQuests: T,
        isFetching: N,
        hasFetched: j,
        hasFiltersApplied: I.length > 0,
        onClearFilters: x
      })]
    })
  })