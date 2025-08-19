/** Chunk was on 99799 **/
/** chunk id: 248930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk26033 = require("./26033.js"),
  Chunk960870 = require("./960870.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk287954 = require("./287954.jsx"),
  Chunk660579 = require("./660579.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk64621 = require("./64621.jsx"),
  Chunk382405 = require("./382405.jsx"),
  Chunk386019 = require("./386019.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk704543 = require("./704543.js");

function j(e) {
  let {
    user: t,
    entry: n,
    profileGuildId: i,
    className: j,
    onClose: v,
    hideContextMenu: y = false
  } = e, I = o.useRef(null), {
    analyticsLocations: O
  } = (0, c.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
    themeType: Z
  } = (0, m.z)(), {
    interactionSource: P,
    interactionSourceId: T
  } = (0, u.Xo)(), C = (0, d.Z)({
    display: "recent",
    user: t,
    entry: n,
    analyticsLocations: O
  });
  return null != Z && (0, s.Rh)(n) ? (0, r.jsx)(c.Gt, {
    value: O,
    children: (0, r.jsx)(b.Z, {
      targetElementRef: I,
      sourceType: x.n_.ACTIVITY,
      user: t,
      children: (0, r.jsx)(f.Z, {
        user: t,
        guildId: i,
        themeType: Z,
        sourceId: n.id,
        entry: n,
        onAction: C,
        sourceType: x.n_.ACTIVITY,
        children: () => (0, r.jsx)(p.Z, {
          ref: I,
          user: t,
          className: _.toolbarContainer,
          interactionSourceId: n.id,
          sourceType: x.n_.ACTIVITY,
          onAction: C,
          onShowToolbar: () => C({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: y ? true : e => (0, r.jsx)(h.Z, {
            display: "recent",
            entry: n,
            user: t,
            onClose: v,
            children: e
          }),
          children: (0, r.jsx)(g.Z, {
            entry: n,
            user: t,
            onClose: v,
            className: l()(j, {
              [_.hoisted]: P === x.n_.ACTIVITY && T === n.id
            })
          })
        })
      })
    })
  }) : null
}