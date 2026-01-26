/** Chunk was on 10117 **/
/** chunk id: 558628, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk20805 = require("./20805.js"),
  Chunk351638 = require("./351638.jsx"),
  Chunk388535 = require("./388535.jsx"),
  Chunk8738 = require("./8738.jsx");

function d(e) {
  let {
    user: a,
    entry: n,
    className: d,
    onClose: x,
    hideContextMenu: m = false,
    appContext: p
  } = e, {
    analyticsLocations: j
  } = (0, i.Ay)(s.A.USER_PROFILE_RECENT_ACTIVITY_CARD);
  return (0, r.$R)(n) ? (0, t.jsx)(i.f5, {
    value: j,
    children: (0, t.jsx)(c.A, {
      entry: n,
      user: a,
      className: d,
      onClose: x,
      header: (0, t.jsx)(l.A, {
        contextMenu: m ? null : (0, t.jsx)(o.A, {
          display: "recent",
          entry: n,
          user: a,
          onClose: x,
          appContext: p
        })
      })
    })
  }) : null
}