/** Chunk was on 30243 **/
/** chunk id: 197653, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  $Y: () => c,
  am: () => o,
  e4: () => s
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let i = Chunk73800.createContext(null),
  o = {
    Root(e) {
      let {
        containerInnerWidth: t,
        children: r
      } = e, o = l.useMemo(() => ({
        isParentWidthLimited: true,
        parentContainerInnerWidth: t
      }), [t]);
      return (0, n.jsx)(i.Provider, {
        value: o,
        children: r
      })
    },
    NestedContainer(e) {
      let {
        containerOuterWidth: t,
        containerInnerWidth: r,
        children: o
      } = e, {
        isParentWidthLimited: c,
        parentContainerInnerWidth: s
      } = a(), u = c && s === t, d = l.useMemo(() => ({
        isParentWidthLimited: u,
        parentContainerInnerWidth: r
      }), [u, r]);
      return (0, n.jsx)(i.Provider, {
        value: d,
        children: o
      })
    },
    AutoMeasuredNestedContainer(e) {
      let {
        children: t
      } = e, [r, l, i] = s(true);
      return (0, n.jsx)(o.NestedContainer, {
        containerOuterWidth: l,
        containerInnerWidth: i,
        children: t(r)
      })
    }
  };

function a() {
  let e = Chunk73800.useContext(i);
  if (null == module) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
  return module
}

function c(e) {
  let {
    isParentWidthLimited: t,
    parentContainerInnerWidth: r
  } = a();
  return t && r === e
}

function s() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = Chunk73800.useRef(null),
    [r, n] = Chunk73800.useState(0),
    [i, o] = Chunk73800.useState(0);
  return Chunk73800.useLayoutEffect(() => {
    if (null == exports.current) return;
    let r = new ResizeObserver(() => {
      let r = exports.current.getBoundingClientRect().width,
        l = getComputedStyle(exports.current);
      Chunk255367(require + (parseFloat(Chunk73800.marginLeft) + parseFloat(Chunk73800.marginRight))), module && o(require - (parseFloat(Chunk73800.paddingLeft) + parseFloat(Chunk73800.paddingRight) + parseFloat(Chunk73800.borderLeftWidth) + parseFloat(Chunk73800.borderRightWidth)))
    });
    return require.observe(exports.current), () => require.disconnect()
  }, [module]), [exports, require, i]
}