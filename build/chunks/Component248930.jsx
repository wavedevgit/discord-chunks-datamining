/** Chunk was on 8853 **/
/** chunk id: 248930, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function v(e) {
  let {
    user: n,
    entry: t,
    profileGuildId: l,
    className: v,
    onClose: _,
    hideContextMenu: y = false
  } = e, I = o.useRef(null), {
    analyticsLocations: O
  } = (0, a.ZP)(c.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
    themeType: P
  } = (0, p.z)(), {
    interactionSource: Z,
    interactionSourceId: T
  } = (0, u.Xo)(), A = (0, d.Z)({
    display: "recent",
    user: n,
    entry: t,
    analyticsLocations: O
  });
  return null != P && (0, s.Rh)(t) ? (0, r.jsx)(a.Gt, {
    value: O,
    children: (0, r.jsx)(b.Z, {
      targetElementRef: I,
      sourceType: h.n_.ACTIVITY,
      user: n,
      children: (0, r.jsx)(f.Z, {
        user: n,
        guildId: l,
        themeType: P,
        sourceId: t.id,
        entry: t,
        onAction: A,
        sourceType: h.n_.ACTIVITY,
        children: () => (0, r.jsx)(m.Z, {
          ref: I,
          user: n,
          className: j.toolbarContainer,
          interactionSourceId: t.id,
          sourceType: h.n_.ACTIVITY,
          onAction: A,
          onShowToolbar: () => A({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: y ? true : e => (0, r.jsx)(g.Z, {
            display: "recent",
            entry: t,
            user: n,
            onClose: _,
            children: e
          }),
          children: (0, r.jsx)(x.Z, {
            entry: t,
            user: n,
            onClose: _,
            className: i()(v, {
              [j.hoisted]: Z === h.n_.ACTIVITY && T === t.id
            })
          })
        })
      })
    })
  }) : null
}