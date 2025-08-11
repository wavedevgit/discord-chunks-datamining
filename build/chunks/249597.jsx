/** Chunk was on 85831 **/
/** chunk id: 249597, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  H: () => c,
  a: () => l
});
var Chunk255367 = require("./255367.js");

function l(e) {
  let {
    type: n,
    children: t,
    value: l,
    items: c
  } = e;
  switch (n) {
    case "ordered":
      let i = (l + c.length - 1).toString().length;
      return <ol start={l} style={{
          "--totalCharacters": i
        }}>{t}</ol>;
    case "unordered":
      return <ul>{t}</ul>
  }
}

function c(e) {
  let {
    children: n
  } = e;
  return <li>{n}</li>
}
require("./73800.js")