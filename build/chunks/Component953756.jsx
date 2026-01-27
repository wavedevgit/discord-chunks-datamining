/** Chunk was on 89455 **/
/** chunk id: 953756, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Hq: () => s,
  O7: () => a,
  zn: () => c
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let o = Chunk64700.createContext(null),
  a = {
    Root(e) {
      let {
        containerInnerWidth: n,
        children: t
      } = e, a = i.useMemo(() => ({
        isParentWidthLimited: true,
        parentContainerInnerWidth: n
      }), [n]);
      return (0, r.jsx)(o.Provider, {
        value: a,
        children: t
      })
    },
    NestedContainer(e) {
      let {
        containerOuterWidth: n,
        containerInnerWidth: t,
        children: a
      } = e, {
        isParentWidthLimited: s,
        parentContainerInnerWidth: c
      } = l(), u = s && c === n, _ = i.useMemo(() => ({
        isParentWidthLimited: u,
        parentContainerInnerWidth: t
      }), [u, t]);
      return (0, r.jsx)(o.Provider, {
        value: _,
        children: a
      })
    },
    AutoMeasuredNestedContainer(e) {
      let {
        children: n
      } = e, [t, i, o] = c(true);
      return (0, r.jsx)(a.NestedContainer, {
        containerOuterWidth: i,
        containerInnerWidth: o,
        children: n(t)
      })
    }
  };

function l() {
  let e = i.useContext(o);
  if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
  return e
}

function s(e) {
  let {
    isParentWidthLimited: n,
    parentContainerInnerWidth: t
  } = l();
  return n && t === e
}

function c() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    n = i.useRef(null),
    [t, r] = i.useState(0),
    [o, a] = i.useState(0);
  return i.useLayoutEffect(() => {
    if (null == n.current) return;
    let t = new ResizeObserver(() => {
      let t = n.current.getBoundingClientRect().width,
        i = getComputedStyle(n.current);
      r(t + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))), e && a(t - (parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth)))
    });
    return t.observe(n.current), () => t.disconnect()
  }, [e]), [n, t, o]
}