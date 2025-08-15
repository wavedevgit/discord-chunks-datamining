/** Chunk was on 30243 **/
/** chunk id: 197653, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  $Y: () => c,
  am: () => o,
  e4: () => s
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let i = Chunk647438.createContext(null),
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
  let e = Chunk647438.useContext(i);
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
    t = Chunk647438.useRef(null),
    [r, n] = Chunk647438.useState(0),
    [i, o] = Chunk647438.useState(0);
  return Chunk647438.useLayoutEffect(() => {
    if (null == exports.current) return;
    let r = new ResizeObserver(() => {
      let r = exports.current.getBoundingClientRect().width,
        l = getComputedStyle(exports.current);
      Chunk951288(require + (parseFloat(Chunk647438.marginLeft) + parseFloat(Chunk647438.marginRight))), module && o(require - (parseFloat(Chunk647438.paddingLeft) + parseFloat(Chunk647438.paddingRight) + parseFloat(Chunk647438.borderLeftWidth) + parseFloat(Chunk647438.borderRightWidth)))
    });
    return require.observe(exports.current), () => require.disconnect()
  }, [module]), [exports, require, i]
}