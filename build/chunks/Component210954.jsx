/** Chunk was on web.js **/
/** chunk id: 210954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk536246 = require("./536246.js"),
  Chunk398866 = require("./398866.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk869146 = require("./869146.js"),
  Chunk272812 = require("./272812.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk334463 = require("./334463.js"),
  Chunk625180 = require("./625180.js"),
  Chunk91242 = require("./91242.js"),
  Chunk113192 = require("./113192.jsx"),
  Chunk165610 = require("./165610.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk463967 = require("./463967.js"),
  Chunk319567 = require("./319567.js"),
  Chunk976092 = require("./976092.js");

function T(e) {
  let {
    isLoading: t
  } = e, n = (0, s.bG)([E.A], () => E.A.getConnectedFrame()), i = (0, s.bG)([E.A], () => E.A.getFrameLayoutMode()), u = (0, f.h)(null == n ? true : n.applicationId), d = (0, s.bG)([E.A], () => null != u && E.A.isProxyTicketRefreshing(u.id), [u]), T = (0, s.bG)([p.A], () => p.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT)), C = (0, s.bG)([m.A], () => m.A.isFrameHidden()), N = i === b.y.PIP && !C && !T, R = N && null != m.A.pipVideoWindow && null != m.A.pipFrameWindow;
  if (null == n || null == u || T) return null;
  let w = {
    instance_id: "example-cl-instance",
    platform: v.vu.DESKTOP
  };

  function P(e) {
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
        className: A.OB
      }), (0, r.jsx)(y.v, {
        idle: a,
        onMouseMove: t,
        onMouseDown: t,
        onMouseLeave: i,
        onFocus: () => {
          g.A.updateFrameLayoutMode({
            applicationId: n.applicationId,
            layoutMode: b.y.FOCUSED
          })
        },
        applicationId: n.applicationId
      })]
    }) : null
  }
  return null != n.proxyTicket && (w.discord_proxy_ticket = n.proxyTicket), (0, r.jsx)(h.Ay, {
    timeout: 2e3,
    children: e => {
      let {
        idle: i,
        onActive: s,
        onForceIdle: f
      } = e;
      return (0, r.jsxs)(_.A, {
        className: a()(A.zr, {
          [A.NW]: N,
          [S.a8]: N,
          [I.N7]: i,
          [A.p0]: N,
          [A.R]: C,
          [A.Gq]: R
        }),
        noBorder: !N,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: P({
            onActive: s,
            onForceIdle: f,
            idle: i
          })
        }), t || d ? (0, r.jsx)(o.y$y, {
          className: a()(A.pU, {
            [A.p0]: N
          })
        }) : (0, r.jsx)(c.o, {
          allowPopups: (0, l.b)(u),
          referrerPolicy: "origin",
          url: n.url,
          queryParams: w,
          className: a()(A.pU, {
            [A.p0]: N,
            [A.v8]: N
          }),
          shouldRefocus: !N
        })]
      })
    }
  })
}
let C = () => {
  let {
    analyticsLocations: e
  } = (0, d.Ay)(u.A.FRAME_PIP), t = (0, s.bG)([E.A], () => E.A.isFrameActive());
  return (0, r.jsx)(d.f5, {
    value: e,
    children: (0, r.jsx)(T, {
      isLoading: !t
    })
  })
}