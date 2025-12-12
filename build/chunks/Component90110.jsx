/** Chunk was on web.js **/
/** chunk id: 90110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk782568 = require("./782568.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk550385 = require("./550385.js"),
  Chunk757266 = require("./757266.js"),
  Chunk695103 = require("./695103.js"),
  Chunk524995 = require("./524995.js"),
  Chunk202392 = require("./202392.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk428498 = require("./428498.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R() {
  let e = (0, Chunk835473.q)(Chunk695103.Z.testModeApplicationId),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(Chunk100527.Z.SDK_DEBUG_TOOLS),
    {
      canStartAuthorization: n,
      hasAlreadyLinked: i,
      startAuthorization: a,
      preferredFlow: u,
      connectionApp: p,
      debug: {
        isSubscribedToAuthorizeRequest: C,
        oauth2Token: A,
        hasConnectionEntrypointUrl: N,
        validFlows: P
      }
    } = (0, Chunk524995.F)(module, {
      debug: true
    }),
    R = (0, Chunk442837.e7)([Chunk757266.Z], () => null != module && Chunk757266.Z.isConnected(module.id)),
    x = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()),
    L = "authorization_debug",
    j = [{
      id: "authorization_debug",
      name: Chunk388032.intl.string(Chunk202392.default.vR0zs6)
    }],
    M = () => (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk428498.header,
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk428498.headerTextContainer,
          children: (0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/extrabold",
            children: Chunk388032.intl.format(Chunk202392.default.KoK4J9, {
              appName: ""
            })
          })
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk428498.body,
        children: (0, Chunk54381.jsx)(Chunk793030.$jN, {
          className: Chunk428498.spinner
        })
      })]
    }),
    k = () => (s()(null != module, "Application should be defined when rendering the test mode panel"), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk428498.header,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk428498.headerTextContainer,
          children: (0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/extrabold",
            children: Chunk388032.intl.format(Chunk202392.default.KoK4J9, {
              appName: module.name
            })
          })
        }), (0, Chunk54381.jsx)(Chunk793030.hU, {
          variant: "icon-only",
          icon: Chunk793030.CTb,
          "aria-label": "Close",
          onClick: () => (0, Chunk550385.Ll)()
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk428498.body,
        children: [(0, Chunk54381.jsx)(Chunk481060.njP, {
          className: Chunk428498.tabBar,
          selectedItem: L,
          onItemSelect: () => {},
          orientation: "horizontal",
          type: "top",
          look: "brand",
          children: j.map(e => (0, r.jsx)(d.njP.Item, {
            className: o()(T.tab, {
              [T.selected]: e.id === L
            }),
            id: e.id,
            "aria-label": e.name,
            children: e.name
          }, e.id))
        }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: Chunk388032.intl.string(Chunk202392.default["no+FQS"])
        }), (0, Chunk54381.jsx)(w, {
          overallStatus: C ? 0 : R ? 3 : 1,
          name: Chunk388032.intl.string(Chunk202392.default.AGLx00),
          steps: [{
            status: R ? 2 : 4,
            text: Chunk388032.intl.string(Chunk202392.default.kxF9br),
            description: R ? null : Chunk388032.intl.string(Chunk202392.default.PFxxJa),
            learnMoreLink: R ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }, {
            status: C ? 2 : R ? 3 : 4,
            text: Chunk388032.intl.string(Chunk202392.default.S94dzs),
            description: C || !R ? null : Chunk388032.intl.string(Chunk202392.default.aTULMB),
            learnMoreLink: C || !R ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }],
          isChosen: Chunk692547 === Chunk524995.r.RPC
        }), (0, Chunk54381.jsx)(w, {
          overallStatus: +!N,
          name: Chunk388032.intl.string(Chunk202392.default.K3ObrU),
          steps: [{
            status: N ? 2 : 4,
            text: Chunk388032.intl.string(Chunk202392.default["8a7IrV"]),
            description: N ? Chunk388032.intl.formatToPlainString(Chunk202392.default["9iLeL2"], {
              url: null == Chunk782568 ? true : Chunk782568.connectionEntrypointUrl
            }) : null
          }],
          isChosen: Chunk692547 === Chunk524995.r.WEB
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk428498.footer,
        children: [(0, Chunk54381.jsx)(D, {
          status: +!Chunk120356,
          text: Chunk388032.intl.string(Chunk388032.t["Vu/zmQ"])
        }), 0 === P.length && (0, Chunk54381.jsx)(Chunk793030.xvT, {
          style: {
            minWidth: 0,
            overflow: "hidden"
          },
          variant: "text-md/medium",
          children: Chunk388032.intl.string(Chunk202392.default.eg0mNa)
        }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
          variant: "secondary",
          disabled: !require || Chunk120356,
          onClick: () => Chunk512722({
            analyticsLocations: exports
          }),
          text: Chunk388032.intl.string(Chunk202392.default.w0pN4R),
          fullWidth: true
        }), null != A && (0, Chunk54381.jsx)(Chunk793030.zxk, {
          variant: "secondary",
          onClick: () => {
            Chunk384275.Z.delete(A.id);
            let t = x.get(module.id);
            null != exports && Chunk513202.Z.leaveActivity({
              location: exports.location,
              applicationId: module.id,
              showFeedback: false
            })
          },
          text: Chunk388032.intl.string(Chunk202392.default.tkIymA),
          fullWidth: true
        })]
      })]
    }));
  return (0, Chunk54381.jsx)("div", {
    "data-app-right-panel": true,
    className: Chunk428498.debugToolsPanel,
    children: (0, Chunk54381.jsx)(Chunk793030.y5t, {
      children: null != module ? k() : M()
    })
  })
}

function w(e) {
  let {
    overallStatus: t,
    name: n,
    steps: i,
    isChosen: o
  } = e;
  return (0, r.jsxs)("div", {
    className: T.categoryContainer,
    children: [(0, r.jsx)(D, {
      status: t,
      text: n
    }), i.map((e, t) => (0, r.jsx)(x, A({}, e), t)), o && (0, r.jsx)("div", {
      className: T.calloutBox,
      children: (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: I.intl.string(S.default.OEkrCx)
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
    className: T.categoryHeader,
    children: [(0, r.jsx)(l.xvT, {
      variant: "text-md/semibold",
      color: "text-subtle",
      children: t
    }), (0, r.jsx)(L, {
      status: n
    })]
  })
}

function x(e) {
  let {
    status: t,
    text: n,
    description: i,
    learnMoreLink: o
  } = e;
  return (0, r.jsxs)("div", {
    className: T.statusRow,
    children: [(0, r.jsx)(L, {
      status: t
    }), (0, r.jsxs)("div", {
      className: T.statusTextContainer,
      children: [(0, r.jsx)(l.xvT, {
        variant: "text-md/medium",
        children: n
      }), null != i && (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i
      }), null != o && (0, r.jsx)(l.Avr, {
        textVariant: "text-sm/medium",
        text: I.intl.string(I.t.hvVgAZ),
        onClick: () => (0, p.Z)(o)
      })]
    })]
  })
}

function L(e) {
  let {
    status: t
  } = e, n = {
    size: "sm",
    className: T.statusIcon
  };
  switch (t) {
    case 0:
      return (0, r.jsx)(l.owK, P(A({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 1:
      return (0, r.jsx)(l.k$p, P(A({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_CRITICAL
      }));
    case 2:
      return (0, r.jsx)(l.kmB, P(A({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 3:
      return (0, r.jsx)(l.aNP, P(A({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_WARNING
      }));
    case 4:
      return (0, r.jsx)(l.Dio, P(A({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_CRITICAL
      }))
  }
}