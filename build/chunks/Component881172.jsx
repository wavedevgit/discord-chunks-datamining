/** Chunk was on 21738 **/
/** chunk id: 881172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk890687 = require("./890687.js"),
  Chunk150574 = require("./150574.jsx"),
  Chunk91973 = require("./91973.jsx"),
  Chunk60171 = require("./60171.js");

function c(e) {
  let {
    onSelectTab: t
  } = e, {
    claimedQuests: n,
    isFetchingClaimedQuests: c
  } = (0, l.Iq)();
  return c && 0 === n.length ? (0, r.jsx)(i.y$y, {
    className: o.u
  }) : 0 === n.length ? (0, r.jsx)(s.A, {
    onClick: () => t(l.NC.ALL)
  }) : (0, r.jsx)("div", {
    className: o.U,
    children: [...n].sort((e, t) => {
      var n, r, i, l;
      return (null != (n = null == (i = t.userStatus) ? true : i.claimedAt) ? n : "").localeCompare(null != (r = null == (l = e.userStatus) ? true : l.claimedAt) ? r : "")
    }).map(e => (0, r.jsx)(a.A, {
      quest: e
    }, e.id))
  })
}