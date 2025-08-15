/** Chunk was on 31253 **/
/** chunk id: 696014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk886886 = require("./886886.js");

function c() {
  let [e, t] = Chunk73800.useState(false);
  return {
    isTruncated: module,
    ExpandableTextContainer: Chunk73800.memo(function(e) {
      let {
        showAll: n = false,
        className: i,
        children: l,
        lineClamp: c = 2
      } = e;
      return (0, r.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: o()(a.lineClamp, i),
        style: n ? true : {
          lineClamp: c,
          WebkitLineClamp: c
        },
        children: l
      })
    })
  }
}