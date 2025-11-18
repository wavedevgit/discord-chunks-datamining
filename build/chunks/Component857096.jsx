/** Chunk was on web.js **/
/** chunk id: 857096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk963614 = require("./963614.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
  Chunk754376 = require("./754376.jsx"),
  Chunk408491 = require("./408491.js"),
  Chunk701488 = require("./701488.js"),
  Chunk51434 = require("./51434.js"),
  Chunk533362 = require("./533362.js"),
  Chunk285236 = require("./285236.js");

function T(e) {
  let {
    isLoading: t
  } = e, n = (0, o.e7)([g.Z], () => g.Z.getConnectedFrame()), i = (0, o.e7)([g.Z], () => g.Z.getFrameLayoutMode()), u = (0, f.q)(null == n ? true : n.applicationId), d = (0, o.e7)([h.Z], () => h.Z.isFrameHidden()), T = i === b.U.PIP && !d, S = T && null != h.Z.pipVideoWindow && null != h.Z.pipFrameWindow;
  if (null == n || null == u) return null;
  let A = {
    instance_id: "example-cl-instance",
    platform: y.S4.DESKTOP
  };

  function C(e) {
    let {
      onActive: t,
      onForceIdle: i,
      idle: a
    } = e;
    return T && null != n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: t,
        onMouseDown: t,
        onMouseLeave: i,
        className: O.clickShield
      }), (0, r.jsx)(E.F, {
        idle: a,
        onMouseMove: t,
        onMouseDown: t,
        onMouseLeave: i,
        onFocus: () => {
          m.Z.updateFrameLayoutMode({
            applicationId: n.applicationId,
            layoutMode: b.U.FOCUSED
          })
        },
        applicationId: n.applicationId
      })]
    }) : null
  }
  return null != n.proxyTicket && (A.discord_proxy_ticket = n.proxyTicket), (0, r.jsx)(p.ZP, {
    timeout: 2e3,
    children: e => {
      let {
        idle: i,
        onActive: o,
        onForceIdle: f
      } = e;
      return (0, r.jsxs)(_.Z, {
        className: a()(O.root, {
          [O.pipMode]: T,
          [I.elevationHigh]: T,
          [v.idle]: i,
          [O.pipModeShort]: T,
          [O.hidden]: d,
          [O.multiPIPMode]: S
        }),
        noBorder: !T,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: C({
            onActive: o,
            onForceIdle: f,
            idle: i
          })
        }), t ? (0, r.jsx)(s.$jN, {
          className: a()(O.iframe, {
            [O.pipModeShort]: T
          })
        }) : (0, r.jsx)(c.J, {
          allowPopups: (0, l.h)(u),
          referrerPolicy: "origin",
          url: n.url,
          queryParams: A,
          className: a()(O.iframe, {
            [O.pipModeShort]: T,
            [O.pipNonInteractive]: T
          }),
          shouldRefocus: !T
        })]
      })
    }
  })
}
let S = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.FRAME_PIP), t = (0, Chunk442837.e7)([Chunk591472.Z], () => Chunk591472.Z.isFrameActive());
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk54381.jsx)(T, {
      isLoading: !exports
    })
  })
}