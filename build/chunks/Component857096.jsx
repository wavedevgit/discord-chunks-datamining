/** Chunk was on web.js **/
/** chunk id: 857096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk928518 = require("./928518.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
  Chunk754376 = require("./754376.jsx"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk326464 = require("./326464.js"),
  Chunk290953 = require("./290953.js"),
  Chunk533348 = require("./533348.js");

function C(e) {
  let {
    isLoading: t
  } = e, n = (0, o.e7)([E.Z], () => E.Z.getConnectedFrame()), i = (0, o.e7)([E.Z], () => E.Z.getFrameLayoutMode()), u = (0, f.q)(null == n ? true : n.applicationId), d = (0, o.e7)([E.Z], () => null != u && E.Z.isProxyTicketRefreshing(u.id), [u]), C = (0, o.e7)([p.Z], () => p.Z.getWindowOpen(O.KJ3.ACTIVITY_POPOUT)), A = (0, o.e7)([m.Z], () => m.Z.isFrameHidden()), N = i === y.U.PIP && !A && !C, P = N && null != m.Z.pipVideoWindow && null != m.Z.pipFrameWindow;
  if (null == n || null == u || C) return null;
  let w = {
    instance_id: "example-cl-instance",
    platform: v.S4.DESKTOP
  };

  function R(e) {
    let {
      onActive: t,
      onForceIdle: i,
      idle: a
    } = e;
    return N && null != n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: t,
        onMouseDown: t,
        onMouseLeave: i,
        className: S.clickShield
      }), (0, r.jsx)(b.F, {
        idle: a,
        onMouseMove: t,
        onMouseDown: t,
        onMouseLeave: i,
        onFocus: () => {
          g.Z.updateFrameLayoutMode({
            applicationId: n.applicationId,
            layoutMode: y.U.FOCUSED
          })
        },
        applicationId: n.applicationId
      })]
    }) : null
  }
  return null != n.proxyTicket && (w.discord_proxy_ticket = n.proxyTicket), (0, r.jsx)(h.ZP, {
    timeout: 2e3,
    children: e => {
      let {
        idle: i,
        onActive: o,
        onForceIdle: f
      } = e;
      return (0, r.jsxs)(_.Z, {
        className: a()(S.root, {
          [S.pipMode]: N,
          [T.elevationHigh]: N,
          [I.idle]: i,
          [S.pipModeShort]: N,
          [S.hidden]: A,
          [S.multiPIPMode]: P
        }),
        noBorder: !N,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: R({
            onActive: o,
            onForceIdle: f,
            idle: i
          })
        }), t || d ? (0, r.jsx)(s.$jN, {
          className: a()(S.iframe, {
            [S.pipModeShort]: N
          })
        }) : (0, r.jsx)(c.J, {
          allowPopups: (0, l.h)(u),
          referrerPolicy: "origin",
          url: n.url,
          queryParams: w,
          className: a()(S.iframe, {
            [S.pipModeShort]: N,
            [S.pipNonInteractive]: N
          }),
          shouldRefocus: !N
        })]
      })
    }
  })
}
let A = () => {
  let {
    analyticsLocations: e
  } = (0, d.ZP)(u.Z.FRAME_PIP), t = (0, o.e7)([E.Z], () => E.Z.isFrameActive());
  return (0, r.jsx)(d.Gt, {
    value: e,
    children: (0, r.jsx)(C, {
      isLoading: !t
    })
  })
}