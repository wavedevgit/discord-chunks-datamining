/** Chunk was on 62880 **/
/** chunk id: 527790, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk26033 = require("./26033.js"),
  Chunk194811 = require("./194811.jsx"),
  Chunk382405 = require("./382405.jsx"),
  Chunk670451 = require("./670451.jsx");

function d(e) {
  let {
    user: a,
    entry: t,
    className: d,
    onClose: x,
    hideContextMenu: m = false,
    appContext: j
  } = e, {
    analyticsLocations: p
  } = (0, s.ZP)(n.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
  return (0, l.Rh)(t) ? (0, i.jsx)(s.Gt, {
    value: p,
    children: (0, i.jsx)(c.Z, {
      entry: t,
      user: a,
      className: d,
      onClose: x,
      header: (0, i.jsx)(r.Z, {
        contextMenu: m ? null : (0, i.jsx)(o.Z, {
          display: "recent",
          entry: t,
          user: a,
          onClose: x,
          appContext: j
        })
      })
    })
  }) : null
}