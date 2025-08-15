/** Chunk was on web.js **/
/** chunk id: 195302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => u,
  p: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk775953 = require("./775953.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722);
let l = Chunk73800.createContext(true);

function c(e) {
  let {
    children: t
  } = e, [n, a] = i.useState(null), o = i.useMemo(() => ({
    setComponentToSnapshot: a
  }), [a]);
  return (0, r.jsxs)(l.Provider, {
    value: o,
    children: [t, null != n && (0, r.jsx)("div", {
      id: "component-to-image-container",
      style: {
        position: "fixed",
        top: "-1000px",
        right: "-1000px"
      },
      children: n
    })]
  })
}

function u(e) {
  let {
    renderComponent: t,
    imageOptions: n
  } = e, r = i.useContext(l);
  s()(null != r, "useComponentToImageContext must be used within a ComponentToImageProvider");
  let [o, c] = i.useState(false);
  return {
    generatingImage: o,
    generateImage: () => new Promise((e, i) => {
      c(true);
      let o = async t => {
        try {
          let r = await (0, a.SE)(t, n);
          s()(null != r, "Unable to generate image"), e(r)
        } catch (e) {
          i(e)
        } finally {
          c(false), r.setComponentToSnapshot(null)
        }
      };
      r.setComponentToSnapshot(t({
        generateImageRef: o
      }))
    })
  }
}