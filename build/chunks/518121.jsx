/** Chunk was on 34779 **/
/** chunk id: 518121, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G6: () => p,
  O5: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk664915 = require("./664915.js"),
  Chunk543936 = require("./543936.js"),
  Chunk432792 = require("./432792.jsx");
let c = "bottom",
  u = e => {
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
  },
  d = () => Chunk73800.useCallback(e => {
    let t = window.innerHeight - ((0, a.t4)() + 10);
    return e.top <= t
  }, []),
  h = e => {
    let {
      targetElementRef: t,
      isGuildBarScrolling: n,
      children: i,
      innerCoachmarkProps: l
    } = e, {
      positionControlRef: o
    } = u({
      isGuildBarScrolling: n
    }), s = d();
    return <a.WS positionControlRef={o} calculateVisibility={s} defaultCoachmarkAlign={c} spacing={8} position={"right"} align={c} targetElementRef={t} popoutElement={(0, r.jsx)(a.M4, function(e) {
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
      }({}, l))}>{i}</a.WS>
  },
  p = e => {
    let {
      renderDiscoveryButton: t,
      showingCoachmark: n,
      errorBoundarySource: l,
      onDiscoveryButtonClick: o,
      targetQuestId: a,
      isGuildBarScrolling: c,
      targetElementRef: u,
      innerCoachmarkProps: d
    } = e, p = i.useMemo(() => t({
      onClick: n ? o : true,
      questId: n ? a : true
    }), [t, o, n, a]);
    return n ? <s.x errorSource={l} renderCustomErrorComponent={() => p}><h targetElementRef={u} isGuildBarScrolling={c} innerCoachmarkProps={d}>{p}</h></s.x> : p
  },
  f = e => {
    let {
      targetElementRef: t,
      scrollToBottom: n
    } = e;
    return i.useCallback(() => {
      if (null !== t.current) {
        let e = (0, a.t4)();
        t.current.getBoundingClientRect().bottom > window.innerHeight - e && n()
      }
    }, [t, n])
  }