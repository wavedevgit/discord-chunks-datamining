/** Chunk was on web.js **/
/** chunk id: 857096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
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
  Chunk505386 = require("./505386.js"),
  Chunk186880 = require("./186880.js"),
  Chunk315091 = require("./315091.js");

function I(e) {
  let {
    isLoading: t
  } = e, n = (0, o.e7)([g.Z], () => g.Z.getConnectedFrame()), i = (0, o.e7)([g.Z], () => g.Z.getFrameLayoutMode()), u = (0, f.q)(null == n ? true : n.applicationId), d = (0, o.e7)([m.Z], () => m.Z.isFrameHidden()), I = i === b.U.PIP && !d, T = I && null != m.Z.pipVideoWindow && null != m.Z.pipFrameWindow;
  if (null == n || null == u) return null;
  let C = {
    instance_id: "example-cl-instance",
    platform: y.S4.DESKTOP
  };

  function A(e) {
    let {
      onActive: t,
      onForceIdle: i,
      idle: a
    } = e;
    return I && null != n ? (0, r.jsxs)(r.Fragment, {
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
          h.Z.updateFrameLayoutMode({
            applicationId: n.applicationId,
            layoutMode: b.U.FOCUSED
          })
        },
        applicationId: n.applicationId
      })]
    }) : null
  }
  return null != n.proxyTicket && (C.discord_proxy_ticket = n.proxyTicket), (0, r.jsx)(_.ZP, {
    timeout: 2e3,
    children: e => {
      let {
        idle: i,
        onActive: o,
        onForceIdle: f
      } = e;
      return (0, r.jsxs)(p.Z, {
        className: a()(O.root, {
          [O.pipMode]: I,
          [S.elevationHigh]: I,
          [v.idle]: i,
          [O.pipModeShort]: I,
          [O.hidden]: d,
          [O.multiPIPMode]: T
        }),
        noBorder: !I,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: A({
            onActive: o,
            onForceIdle: f,
            idle: i
          })
        }), t ? (0, r.jsx)(s.$jN, {
          className: a()(O.iframe, {
            [O.pipModeShort]: I
          })
        }) : (0, r.jsx)(c.J, {
          allowPopups: (0, l.h)(u),
          referrerPolicy: "origin",
          url: n.url,
          queryParams: C,
          className: a()(O.iframe, {
            [O.pipModeShort]: I,
            [O.pipNonInteractive]: I
          }),
          shouldRefocus: !I
        })]
      })
    }
  })
}
let T = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.FRAME_PIP), t = (0, Chunk442837.e7)([Chunk591472.Z], () => Chunk591472.Z.isFrameActive());
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk54381.jsx)(I, {
      isLoading: !exports
    })
  })
}