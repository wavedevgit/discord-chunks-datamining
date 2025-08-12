/** Chunk was on 11776 **/
/** chunk id: 248930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk227832 = require("./227832.js");

function h(e) {
  let {
    user: t,
    entry: n,
    profileGuildId: i,
    className: h,
    onClose: O,
    hideContextMenu: v = false
  } = e, _ = l.useRef(null), {
    analyticsLocations: I
  } = (0, c.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
    themeType: P
  } = (0, m.z)(), {
    interactionSource: E,
    interactionSourceId: Z
  } = (0, u.Xo)(), T = (0, d.Z)({
    display: "recent",
    user: t,
    entry: n,
    analyticsLocations: I
  });
  return null != P && (0, s.Rh)(n) ? (0, r.jsx)(c.Gt, {
    value: I,
    children: (0, r.jsx)(g.Z, {
      targetElementRef: _,
      sourceType: y.n_.ACTIVITY,
      user: t,
      children: (0, r.jsx)(f.Z, {
        user: t,
        guildId: i,
        themeType: P,
        sourceId: n.id,
        entry: n,
        onAction: T,
        sourceType: y.n_.ACTIVITY,
        children: () => (0, r.jsx)(p.Z, {
          ref: _,
          user: t,
          className: x.toolbarContainer,
          interactionSourceId: n.id,
          sourceType: y.n_.ACTIVITY,
          onAction: T,
          onShowToolbar: () => T({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: v ? true : e => (0, r.jsx)(j.Z, {
            display: "recent",
            entry: n,
            user: t,
            onClose: O,
            children: e
          }),
          children: (0, r.jsx)(b.Z, {
            entry: n,
            user: t,
            onClose: O,
            className: o()(h, {
              [x.hoisted]: E === y.n_.ACTIVITY && Z === n.id
            })
          })
        })
      })
    })
  }) : null
}