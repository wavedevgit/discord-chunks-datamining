/** Chunk was on 97492 **/
/** chunk id: 689874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk313961 = require("./313961.js"),
  Chunk15285 = require("./15285.js"),
  Chunk616356 = require("./616356.js"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk639291 = require("./639291.js");
let g = e => {
  let {
    channelId: t
  } = e;
  return (0, l.bG)([u.A, o.A, d.A, c.Ay], () => {
    var e;
    if (null == t) returnfalse;
    let n = u.A.getCurrentUserActiveStream(),
      r = null == (e = c.Ay.getVisibleGame()) ? true : e.windowHandle;
    return !!(null != n && (0, f.TD)() || null != r && (0, f.Ao)()) || o.A.getParticipants(t).some(e => e.type === p.lp.USER && d.A.isClipsEnabledForUser(e.user.id))
  }) ? (0, r.jsx)(a.m, {
    text: h.intl.string(h.t.DJXW3G),
    children: (0, r.jsxs)("div", {
      className: b.g0,
      children: [(0, r.jsx)(s.fkz, {
        icon: s.xgA,
        shape: s.EGs.ROUND_LEFT,
        color: i.A.unsafe_rawColors.PRIMARY_500.css,
        className: b.Z7
      }), (0, r.jsx)(s.LpS, {
        text: h.intl.string(h.t.pCMkDb),
        shape: s.EGs.ROUND_RIGHT,
        color: i.A.unsafe_rawColors.PRIMARY_500.css,
        className: b.lm
      })]
    })
  }) : null
}