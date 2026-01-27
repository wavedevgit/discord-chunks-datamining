/** Chunk was on 77870 **/
/** chunk id: 595567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk93055 = require("./93055.js"),
  Chunk985018 = require("./985018.jsx");
let o = Chunk64700.memo(function(e) {
  let {
    "aria-label": t = false,
    children: n
  } = e, o = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, s.CJ)();
    return l.useEffect(() => {
      if (e) {
        let e = setTimeout(() => {
          t()
        }, 1500);
        return () => {
          t(), clearTimeout(e)
        }
      }
    }, [e, t]), e
  }();
  return o ? (0, r.jsx)(i.m_, {
    forceOpen: o,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    align: "center",
    text: a.intl.string(a.t["4tSWQg"]),
    "aria-label": t,
    children: (0, r.jsx)("div", {
      children: n
    })
  }) : n
})