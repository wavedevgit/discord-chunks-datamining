/** Chunk was on 89488 **/
/** chunk id: 953756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Hq: () => _,
  O7: () => a,
  zn: () => c
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let o = Chunk64700.createContext(null),
  a = {
    Root(e) {
      let {
        containerInnerWidth: t,
        children: n
      } = e, a = i.useMemo(() => ({
        isParentWidthLimited: true,
        parentContainerInnerWidth: t
      }), [t]);
      return (0, r.jsx)(o.Provider, {
        value: a,
        children: n
      })
    },
    NestedContainer(e) {
      let {
        containerOuterWidth: t,
        containerInnerWidth: n,
        children: a
      } = e, {
        isParentWidthLimited: _,
        parentContainerInnerWidth: c
      } = l(), s = _ && c === t, d = i.useMemo(() => ({
        isParentWidthLimited: s,
        parentContainerInnerWidth: n
      }), [s, n]);
      return (0, r.jsx)(o.Provider, {
        value: d,
        children: a
      })
    },
    AutoMeasuredNestedContainer(e) {
      let {
        children: t
      } = e, [n, i, o] = c(true);
      return (0, r.jsx)(a.NestedContainer, {
        containerOuterWidth: i,
        containerInnerWidth: o,
        children: t(n)
      })
    }
  };

function l() {
  let e = i.useContext(o);
  if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
  return e
}

function _(e) {
  let {
    isParentWidthLimited: t,
    parentContainerInnerWidth: n
  } = l();
  return t && n === e
}

function c() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = i.useRef(null),
    [n, r] = i.useState(0),
    [o, a] = i.useState(0);
  return i.useLayoutEffect(() => {
    if (null == t.current) return;
    let n = new ResizeObserver(() => {
      let n = t.current.getBoundingClientRect().width,
        i = getComputedStyle(t.current);
      r(n + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))), e && a(n - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth)))
    });
    return n.observe(t.current), () => n.disconnect()
  }, [e]), [t, n, o]
}