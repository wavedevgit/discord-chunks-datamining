/** Chunk was on 46673 **/
/** chunk id: 386952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk968338 = require("./968338.js");

function s() {
  let [e, t] = i.useState(false);
  return {
    isTruncated: e,
    ExpandableTextContainer: i.memo(function(e) {
      let {
        showAll: n = false,
        className: i,
        children: l,
        lineClamp: s = 2
      } = e;
      return (0, r.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: a()(o.I, i),
        style: n ? true : {
          lineClamp: s,
          WebkitLineClamp: s
        },
        children: l
      })
    })
  }
}