/** Chunk was on web.js **/
/** chunk id: 197653, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Y: () => l,
  am: () => o,
  e4: () => c
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = Chunk473749.createContext(null),
  o = {
    Root(e) {
      let {
        containerInnerWidth: t,
        children: n
      } = e, o = i.useMemo(() => ({
        isParentWidthLimited: true,
        parentContainerInnerWidth: t
      }), [t]);
      return (0, r.jsx)(a.Provider, {
        value: o,
        children: n
      })
    },
    NestedContainer(e) {
      let {
        containerOuterWidth: t,
        containerInnerWidth: n,
        children: o
      } = e, {
        isParentWidthLimited: l,
        parentContainerInnerWidth: c
      } = s(), u = l && c === t, d = i.useMemo(() => ({
        isParentWidthLimited: u,
        parentContainerInnerWidth: n
      }), [u, n]);
      return (0, r.jsx)(a.Provider, {
        value: d,
        children: o
      })
    },
    AutoMeasuredNestedContainer(e) {
      let {
        children: t
      } = e, [n, i, a] = c(true);
      return (0, r.jsx)(o.NestedContainer, {
        containerOuterWidth: i,
        containerInnerWidth: a,
        children: t(n)
      })
    }
  };

function s() {
  let e = Chunk473749.useContext(a);
  if (null == module) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
  return module
}

function l(e) {
  let {
    isParentWidthLimited: t,
    parentContainerInnerWidth: n
  } = s();
  return t && n === e
}

function c() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = Chunk473749.useRef(null),
    [n, r] = Chunk473749.useState(0),
    [a, o] = Chunk473749.useState(0);
  return Chunk473749.useLayoutEffect(() => {
    if (null == exports.current) return;
    let n = new ResizeObserver(() => {
      let n = exports.current.getBoundingClientRect().width,
        i = getComputedStyle(exports.current);
      Chunk54381(require + (parseFloat(Chunk473749.marginLeft) + parseFloat(Chunk473749.marginRight))), module && o(require - (parseFloat(Chunk473749.paddingLeft) + parseFloat(Chunk473749.paddingRight) + parseFloat(Chunk473749.borderLeftWidth) + parseFloat(Chunk473749.borderRightWidth)))
    });
    return require.observe(exports.current), () => require.disconnect()
  }, [module]), [exports, require, a]
}