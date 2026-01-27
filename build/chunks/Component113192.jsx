/** Chunk was on web.js **/
/** chunk id: 113192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk646865 = require("./646865.js"),
  Chunk795816 = require("./795816.js"),
  Chunk47294 = require("./47294.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk384059 = require("./384059.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk271195 = require("./271195.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk625180 = require("./625180.js"),
  Chunk262579 = require("./262579.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk31545 = require("./31545.js"),
  Chunk319567 = require("./319567.js");

function b(e) {
  var t;
  let {
    applicationId: n,
    onMouseDown: b,
    onMouseMove: O,
    onMouseLeave: v,
    onFocus: A,
    idle: I
  } = e, S = (0, l.h)(n), T = (0, d.Us)() === g.BRT.POPOUT, {
    parentAnalyticsLocation: C
  } = (0, s.Ay)(), N = () => {
    (0, c.X)(C, c.O.POPOUT, true), (0, o.A)({
      onConfirm: async () => {
        await h.A.refreshProxyTicket({
          applicationId: n
        }), (0, a.jp)()
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: y._v,
    onMouseMove: O,
    onMouseDown: b,
    onMouseLeave: v,
    children: [(0, r.jsx)("div", {
      className: y.K1,
      children: (0, r.jsx)(p.X, {
        idle: I,
        title: null != (t = null == S ? true : S.name) ? t : "",
        onJumpToChannel: A,
        preventIdleComponent: f.A
      })
    }), (0, r.jsx)("div", {
      className: y.q6,
      children: (0, r.jsxs)(u.A, {
        grow: 1,
        shrink: 1,
        justify: u.A.Justify.END,
        align: u.A.Align.CENTER,
        children: [T || (0, i.f)() ? null : (0, r.jsx)(_.A, {
          className: E.BD,
          popoutOpen: false,
          onOpenPopout: N,
          onClosePopout: g.FXj
        }), (0, r.jsx)(m.A, {
          applicationId: n,
          className: E.BD
        })]
      })
    })]
  })
}