/** Chunk was on 85831 **/
/** chunk id: 249597, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  H: () => c,
  a: () => l
});
var Chunk54381 = require("./54381.js");

function l(e) {
  let {
    type: n,
    children: t,
    value: l,
    items: c
  } = e;
  switch (n) {
    case "ordered":
      let a = (l + c.length - 1).toString().length;
      return (0, r.jsx)("ol", {
        start: l,
        style: {
          "--totalCharacters": a
        },
        children: t
      });
    case "unordered":
      return (0, r.jsx)("ul", {
        children: t
      })
  }
}

function c(e) {
  let {
    children: n
  } = e;
  return (0, r.jsx)("li", {
    children: n
  })
}
require("./473749.js")