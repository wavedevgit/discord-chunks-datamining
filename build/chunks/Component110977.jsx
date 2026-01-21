/** Chunk was on 82124 **/
/** chunk id: 110977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk593214 = require("./593214.js"),
  Chunk388032 = require("./388032.jsx");
let s = Chunk473749.memo(function(e) {
  let {
    "aria-label": t = false,
    children: n
  } = e, s = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, a.up)();
    return i.useEffect(() => {
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
  return s ? (0, r.jsx)(l.u, {
    forceOpen: s,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    align: "center",
    text: o.intl.string(o.t["4tSWQg"]),
    "aria-label": t,
    children: (0, r.jsx)("div", {
      children: n
    })
  }) : n
})