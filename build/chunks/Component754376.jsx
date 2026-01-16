/** Chunk was on web.js **/
/** chunk id: 754376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk617552 = require("./617552.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk522651 = require("./522651.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk922745 = require("./922745.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk611500 = require("./611500.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk322785 = require("./322785.js"),
  Chunk290953 = require("./290953.js");

function b(e) {
  var t;
  let {
    applicationId: n,
    onMouseDown: b,
    onMouseMove: y,
    onMouseLeave: O,
    onFocus: v,
    idle: S
  } = e, I = (0, l.q)(n), T = (0, d.bp)() === m.IlC.POPOUT, {
    parentAnalyticsLocation: C
  } = (0, s.ZP)(), A = () => {
    (0, c.v)(C, c.d.POPOUT, true), (0, o.Z)({
      onConfirm: async () => {
        null != I && await (0, a.nJ)(I.id, null), (0, a.Gj)()
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: E.videoControls,
    onMouseMove: y,
    onMouseDown: b,
    onMouseLeave: O,
    children: [(0, r.jsx)("div", {
      className: E.topControls,
      children: (0, r.jsx)(p.r, {
        idle: S,
        title: null != (t = null == I ? true : I.name) ? t : "",
        onJumpToChannel: v,
        preventIdleComponent: f.Z
      })
    }), (0, r.jsx)("div", {
      className: E.bottomControls,
      children: (0, r.jsxs)(u.Z, {
        grow: 1,
        shrink: 1,
        justify: u.Z.Justify.END,
        align: u.Z.Align.CENTER,
        children: [T || (0, i.R)() ? null : (0, r.jsx)(_.Z, {
          className: g.rightPipIcon,
          popoutOpen: false,
          onOpenPopout: A,
          onClosePopout: m.VqG
        }), (0, r.jsx)(h.Z, {
          applicationId: n,
          className: g.rightPipIcon
        })]
      })
    })]
  })
}