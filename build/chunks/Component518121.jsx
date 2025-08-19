/** Chunk was on 49882 **/
/** chunk id: 518121, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G6: () => d,
  O5: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk664915 = require("./664915.js"),
  Chunk543936 = require("./543936.js"),
  Chunk432792 = require("./432792.jsx");
let c = "bottom",
  u = e => {
    let {
      targetElementRef: t,
      isGuildBarScrolling: n,
      children: a,
      innerCoachmarkProps: u
    } = e, {
      positionControlRef: d
    } = (e => {
      let {
        isGuildBarScrolling: t
      } = e, n = i.useRef(null), r = (0, l.e7)([o.Z], () => o.Z.getExpandedFolders().size);
      return i.useEffect(() => {
        null !== n.current && n.current.updateElementPositionWithPolling()
      }, [r]), i.useEffect(() => {
        null !== n.current && n.current.updateElementPosition()
      }, [t]), {
        positionControlRef: n
      }
    })({
      isGuildBarScrolling: n
    }), p = i.useCallback(e => {
      let t = window.innerHeight - ((0, s.t4)() + 10);
      return e.top <= t
    }, []);
    return (0, r.jsx)(s.WS, {
      positionControlRef: d,
      calculateVisibility: p,
      defaultCoachmarkAlign: c,
      spacing: 8,
      position: "right",
      align: c,
      targetElementRef: t,
      popoutElement: (0, r.jsx)(s.M4, function(e) {
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
      }({}, u)),
      children: a
    })
  },
  d = e => {
    let {
      renderDiscoveryButton: t,
      showingCoachmark: n,
      errorBoundarySource: l,
      onDiscoveryButtonClick: o,
      targetQuestId: s,
      isGuildBarScrolling: c,
      targetElementRef: d,
      innerCoachmarkProps: p
    } = e, f = i.useMemo(() => t({
      onClick: n ? o : true,
      questId: n ? s : true
    }), [t, o, n, s]);
    return n ? (0, r.jsx)(a.x, {
      errorSource: l,
      renderCustomErrorComponent: () => f,
      children: (0, r.jsx)(u, {
        targetElementRef: d,
        isGuildBarScrolling: c,
        innerCoachmarkProps: p,
        children: f
      })
    }) : f
  },
  p = e => {
    let {
      targetElementRef: t,
      scrollToBottom: n
    } = e;
    return i.useCallback(() => {
      if (null !== t.current) {
        let e = (0, s.t4)();
        t.current.getBoundingClientRect().bottom > window.innerHeight - e && n()
      }
    }, [t, n])
  }