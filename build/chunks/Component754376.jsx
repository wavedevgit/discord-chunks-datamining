/** Chunk was on web.js **/
/** chunk id: 754376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => y
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
  Chunk48131 = require("./48131.js"),
  Chunk611500 = require("./611500.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk322785 = require("./322785.js"),
  Chunk290953 = require("./290953.js");

function y(e) {
  var t;
  let {
    applicationId: n,
    onMouseDown: y,
    onMouseMove: O,
    onMouseLeave: v,
    onFocus: S,
    idle: I
  } = e, T = (0, l.q)(n), C = (0, d.bp)() === g.IlC.POPOUT, {
    parentAnalyticsLocation: A
  } = (0, s.ZP)(), N = () => {
    (0, c.v)(A, c.d.POPOUT, true), (0, o.Z)({
      onConfirm: async () => {
        await h.Z.refreshProxyTicket({
          applicationId: n
        }), (0, a.Gj)()
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: b.videoControls,
    onMouseMove: O,
    onMouseDown: y,
    onMouseLeave: v,
    children: [(0, r.jsx)("div", {
      className: b.topControls,
      children: (0, r.jsx)(p.r, {
        idle: I,
        title: null != (t = null == T ? true : T.name) ? t : "",
        onJumpToChannel: S,
        preventIdleComponent: f.Z
      })
    }), (0, r.jsx)("div", {
      className: b.bottomControls,
      children: (0, r.jsxs)(u.Z, {
        grow: 1,
        shrink: 1,
        justify: u.Z.Justify.END,
        align: u.Z.Align.CENTER,
        children: [C || (0, i.R)() ? null : (0, r.jsx)(_.Z, {
          className: E.rightPipIcon,
          popoutOpen: false,
          onOpenPopout: N,
          onClosePopout: g.VqG
        }), (0, r.jsx)(m.Z, {
          applicationId: n,
          className: E.rightPipIcon
        })]
      })
    })]
  })
}