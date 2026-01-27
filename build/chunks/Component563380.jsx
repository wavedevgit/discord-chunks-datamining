/** Chunk was on web.js **/
/** chunk id: 563380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk824552 = require("./824552.js"),
  Chunk975807 = require("./975807.js"),
  Chunk933958 = require("./933958.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk793943 = require("./793943.js"),
  Chunk134861 = require("./134861.js"),
  Chunk147964 = require("./147964.js"),
  Chunk362490 = require("./362490.js"),
  Chunk271469 = require("./271469.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk410758 = require("./410758.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R() {
  let e = (0, E.h)(O.A.testModeApplicationId),
    {
      analyticsLocations: t
    } = (0, g.Ay)(m.A.SDK_DEBUG_TOOLS),
    {
      canStartAuthorization: n,
      hasAlreadyLinked: i,
      startAuthorization: o,
      chosenFlow: u,
      connectionApp: p,
      debug: {
        isSubscribedToAuthorizeRequest: T,
        oauth2Token: C,
        hasConnectionEntrypointUrl: N,
        validFlows: w
      }
    } = (0, v.RD)(e, {
      debug: true
    }),
    R = (0, c.bG)([b.A], () => null != e && b.A.isConnected(e.id)),
    L = (0, c.bG)([_.Ay], () => _.Ay.getSelfEmbeddedActivities()),
    x = "authorization_debug",
    M = [{
      id: "authorization_debug",
      name: I.intl.string(A.default.vR0zs6)
    }],
    j = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: S.wx,
        children: (0, r.jsx)("div", {
          className: S.if,
          children: (0, r.jsx)(l.DZT, {
            variant: "heading-lg/extrabold",
            children: I.intl.format(A.default.KoK4J9, {
              appName: ""
            })
          })
        })
      }), (0, r.jsx)("div", {
        className: S.rf,
        children: (0, r.jsx)(l.y$y, {
          className: S.u1
        })
      })]
    }),
    k = () => (s()(null != e, "Application should be defined when rendering the test mode panel"), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: S.wx,
        children: [(0, r.jsx)("div", {
          className: S.if,
          children: (0, r.jsx)(l.DZT, {
            variant: "heading-lg/extrabold",
            children: I.intl.format(A.default.KoK4J9, {
              appName: e.name
            })
          })
        }), (0, r.jsx)(l.K0, {
          variant: "icon-only",
          icon: l.UlM,
          "aria-label": "Close",
          onClick: () => (0, y.Jp)()
        })]
      }), (0, r.jsxs)("div", {
        className: S.rf,
        children: [(0, r.jsx)(d.VQ0, {
          className: S.$H,
          selectedItem: x,
          onItemSelect: () => {},
          orientation: "horizontal",
          type: "top",
          look: "brand",
          children: M.map(e => (0, r.jsx)(d.VQ0.Item, {
            className: a()(S.Mf, {
              [S.wH]: e.id === x
            }),
            id: e.id,
            "aria-label": e.name,
            children: e.name
          }, e.id))
        }), (0, r.jsx)(l.EYj, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: I.intl.string(A.default["no+FQS"])
        }), (0, r.jsx)(P, {
          overallStatus: T ? 0 : R ? 3 : 1,
          name: I.intl.string(A.default.AGLx00),
          steps: [{
            status: R ? 2 : 4,
            text: I.intl.string(A.default.kxF9br),
            description: R ? null : I.intl.string(A.default.PFxxJa),
            learnMoreLink: R ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }, {
            status: T ? 2 : R ? 3 : 4,
            text: I.intl.string(A.default.S94dzs),
            description: T || !R ? null : I.intl.string(A.default.aTULMB),
            learnMoreLink: T || !R ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }],
          isChosen: u === v._M.RPC
        }), (0, r.jsx)(P, {
          overallStatus: +!N,
          name: I.intl.string(A.default.K3ObrU),
          steps: [{
            status: N ? 2 : 4,
            text: I.intl.string(A.default["8a7IrV"]),
            description: N ? I.intl.formatToPlainString(A.default["9iLeL2"], {
              url: null == p ? true : p.connectionEntrypointUrl
            }) : null
          }],
          isChosen: u === v._M.WEB
        })]
      }), (0, r.jsxs)("div", {
        className: S.qr,
        children: [(0, r.jsx)(D, {
          status: +!i,
          text: I.intl.string(I.t["Vu/zmQ"])
        }), 0 === w.length && (0, r.jsx)(l.EYj, {
          style: {
            minWidth: 0,
            overflow: "hidden"
          },
          variant: "text-md/medium",
          children: I.intl.string(A.default.eg0mNa)
        }), (0, r.jsx)(l.$nd, {
          variant: "secondary",
          disabled: !n || i,
          onClick: () => o({
            analyticsLocations: t
          }),
          text: I.intl.string(A.default.w0pN4R),
          fullWidth: true
        }), null != C && (0, r.jsx)(l.$nd, {
          variant: "secondary",
          onClick: () => {
            f.A.delete(C.id);
            let t = L.get(e.id);
            null != t && h.A.leaveActivity({
              location: t.location,
              applicationId: e.id,
              showFeedback: false
            })
          },
          text: I.intl.string(A.default.tkIymA),
          fullWidth: true
        })]
      })]
    }));
  return (0, r.jsx)("div", {
    "data-app-right-panel": true,
    className: S.nE,
    children: (0, r.jsx)(l.Fmo, {
      children: null != e ? k() : j()
    })
  })
}

function P(e) {
  let {
    overallStatus: t,
    name: n,
    steps: i,
    isChosen: a
  } = e;
  return (0, r.jsxs)("div", {
    className: S.Wk,
    children: [(0, r.jsx)(D, {
      status: t,
      text: n
    }), i.map((e, t) => (0, r.jsx)(L, C({}, e), t)), a && (0, r.jsx)("div", {
      className: S.MH,
      children: (0, r.jsx)(l.EYj, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: I.intl.string(A.default.OEkrCx)
      })
    })]
  })
}

function D(e) {
  let {
    text: t,
    status: n
  } = e;
  return (0, r.jsxs)("div", {
    className: S.Km,
    children: [(0, r.jsx)(l.EYj, {
      variant: "text-md/semibold",
      color: "text-subtle",
      children: t
    }), (0, r.jsx)(x, {
      status: n
    })]
  })
}

function L(e) {
  let {
    status: t,
    text: n,
    description: i,
    learnMoreLink: a
  } = e;
  return (0, r.jsxs)("div", {
    className: S.jf,
    children: [(0, r.jsx)(x, {
      status: t
    }), (0, r.jsxs)("div", {
      className: S.bc,
      children: [(0, r.jsx)(l.EYj, {
        variant: "text-md/medium",
        children: n
      }), null != i && (0, r.jsx)(l.EYj, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i
      }), null != a && (0, r.jsx)(l.QWc, {
        textVariant: "text-sm/medium",
        text: I.intl.string(I.t.hvVgAZ),
        onClick: () => (0, p.A)(a)
      })]
    })]
  })
}

function x(e) {
  let {
    status: t
  } = e, n = {
    size: "sm",
    className: S.I8
  };
  switch (t) {
    case 0:
      return (0, r.jsx)(l.yr3, w(C({}, n), {
        color: u.A.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 1:
      return (0, r.jsx)(l.aXh, w(C({}, n), {
        color: u.A.colors.ICON_FEEDBACK_CRITICAL
      }));
    case 2:
      return (0, r.jsx)(l.Uzd, w(C({}, n), {
        color: u.A.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 3:
      return (0, r.jsx)(l.id, w(C({}, n), {
        color: u.A.colors.ICON_FEEDBACK_WARNING
      }));
    case 4:
      return (0, r.jsx)(l.PGe, w(C({}, n), {
        color: u.A.colors.ICON_FEEDBACK_CRITICAL
      }))
  }
}