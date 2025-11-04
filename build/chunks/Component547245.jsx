/** Chunk was on 69283 **/
/** chunk id: 547245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk308982 = require("./308982.js"),
  Chunk36706 = require("./36706.js");

function o(e) {
  let {
    channelId: t
  } = e, n = (0, i.E1)(t, e => e.prompt), o = a.useRef(null), [c, u] = a.useState("auto"), s = a.useCallback(e => {
    i.kg.getState().setPrompt(t, e.target.value)
  }, [t]);
  return a.useLayoutEffect(() => {
    let e = o.current;
    if (null != e) {
      let t = e.style.height;
      e.style.height = "auto";
      let n = e.scrollHeight;
      e.style.height = t, u("".concat(n, "px"))
    }
  }, [n]), (0, r.jsx)("textarea", {
    ref: o,
    className: l.promptInput,
    value: n,
    onChange: s,
    placeholder: "Type a prompt or hit shuffle to start",
    style: {
      height: c
    }
  })
}