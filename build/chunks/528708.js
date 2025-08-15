/** Chunk was on 95355 **/
/** chunk id: 528708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => a
});
var Chunk944296 = require("./944296.js"),
  Chunk73800 = require("./73800.js"),
  Chunk440717 = require("./440717.js");
let u = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};

function a(e) {
  let {
    children: t,
    elementType: n = "div",
    isFocusable: a,
    style: s,
    ...l
  } = e, {
    visuallyHiddenProps: c
  } = function(e = {}) {
    let {
      style: t,
      isFocusable: n
    } = e, [r, a] = (0, i.useState)(false), {
      focusWithinProps: s
    } = (0, o.L)({
      isDisabled: !n,
      onFocusWithinChange: e => a(e)
    }), l = (0, i.useMemo)(() => r ? t : t ? {
      ...u,
      ...t
    } : u, [r]);
    return {
      visuallyHiddenProps: {
        ...s,
        style: l
      }
    }
  }(e);
  return i.createElement(n, (0, r.d)(l, c), t)
}