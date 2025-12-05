/** Chunk was on web.js **/
/** chunk id: 90110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk835473 = require("./835473.js"),
  Chunk550385 = require("./550385.js"),
  Chunk757266 = require("./757266.js"),
  Chunk695103 = require("./695103.js"),
  Chunk524995 = require("./524995.js"),
  Chunk652271 = require("./652271.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk428498 = require("./428498.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N() {
  let e = (0, Chunk835473.q)(Chunk695103.Z.testModeApplicationId),
    {
      canStartAuthorization: t,
      hasAlreadyLinked: n,
      startAuthorization: i,
      preferredFlow: o,
      connectionApp: u,
      debug: {
        isSubscribedToAuthorizeRequest: p,
        oauth2Token: I,
        hasConnectionEntrypointUrl: T,
        validFlows: A
      }
    } = (0, Chunk524995.F)(module, {
      debug: true
    }),
    C = (0, Chunk442837.e7)([Chunk757266.Z], () => null != module && Chunk757266.Z.isConnected(module.id)),
    N = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()),
    w = "authorization_debug",
    D = [{
      id: "authorization_debug",
      name: Chunk388032.intl.string(Chunk652271.default.vR0zs6)
    }],
    x = () => (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk428498.header,
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk428498.headerTextContainer,
          children: (0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/extrabold",
            children: Chunk388032.intl.format(Chunk652271.default.KoK4J9, {
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
    L = () => (s()(null != module, "Application should be defined when rendering the test mode panel"), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk428498.header,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk428498.headerTextContainer,
          children: (0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/extrabold",
            children: Chunk388032.intl.format(Chunk652271.default.KoK4J9, {
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
          selectedItem: w,
          onItemSelect: () => {},
          orientation: "horizontal",
          type: "top",
          look: "brand",
          children: D.map(e => (0, r.jsx)(d.njP.Item, {
            className: a()(S.tab, {
              [S.selected]: e.id === w
            }),
            id: e.id,
            "aria-label": e.name,
            children: e.name
          }, e.id))
        }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: Chunk388032.intl.string(Chunk652271.default["no+FQS"])
        }), (0, Chunk54381.jsx)(P, {
          overallStatus: Chunk782568 ? 0 : C ? 3 : 1,
          name: Chunk388032.intl.string(Chunk652271.default.AGLx00),
          steps: [{
            status: C ? 2 : 4,
            text: Chunk388032.intl.string(Chunk652271.default.kxF9br),
            description: C ? null : Chunk388032.intl.string(Chunk652271.default.PFxxJa),
            learnMoreLink: C ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }, {
            status: Chunk782568 ? 2 : C ? 3 : 4,
            text: Chunk388032.intl.string(Chunk652271.default.S94dzs),
            description: Chunk782568 || !C ? null : Chunk388032.intl.string(Chunk652271.default.aTULMB),
            learnMoreLink: Chunk782568 || !C ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }],
          isChosen: Chunk512722 === Chunk524995.r.RPC
        }), (0, Chunk54381.jsx)(P, {
          overallStatus: +!T,
          name: Chunk388032.intl.string(Chunk652271.default.K3ObrU),
          steps: [{
            status: T ? 2 : 4,
            text: Chunk388032.intl.string(Chunk652271.default["8a7IrV"]),
            description: T ? Chunk388032.intl.formatToPlainString(Chunk652271.default["9iLeL2"], {
              url: null == Chunk692547 ? true : Chunk692547.connectionEntrypointUrl
            }) : null
          }],
          isChosen: Chunk512722 === Chunk524995.r.WEB
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk428498.footer,
        children: [(0, Chunk54381.jsx)(R, {
          status: +!require,
          text: Chunk388032.intl.string(Chunk388032.t["Vu/zmQ"])
        }), 0 === A.length && (0, Chunk54381.jsx)(Chunk793030.xvT, {
          style: {
            minWidth: 0,
            overflow: "hidden"
          },
          variant: "text-md/medium",
          children: Chunk388032.intl.string(Chunk652271.default.eg0mNa)
        }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
          variant: "secondary",
          disabled: !exports || require,
          onClick: () => Chunk120356(),
          text: Chunk388032.intl.string(Chunk652271.default.w0pN4R),
          fullWidth: true
        }), null != I && (0, Chunk54381.jsx)(Chunk793030.zxk, {
          variant: "secondary",
          onClick: () => {
            Chunk384275.Z.delete(I.id);
            let t = N.get(module.id);
            null != exports && Chunk513202.Z.leaveActivity({
              location: exports.location,
              applicationId: module.id,
              showFeedback: false
            })
          },
          text: Chunk388032.intl.string(Chunk652271.default.tkIymA),
          fullWidth: true
        })]
      })]
    }));
  return (0, Chunk54381.jsx)("div", {
    "data-app-right-panel": true,
    className: Chunk428498.debugToolsPanel,
    children: (0, Chunk54381.jsx)(Chunk793030.y5t, {
      children: null != module ? L() : x()
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
    className: S.categoryContainer,
    children: [(0, r.jsx)(R, {
      status: t,
      text: n
    }), i.map((e, t) => (0, r.jsx)(w, T({}, e), t)), a && (0, r.jsx)("div", {
      className: S.calloutBox,
      children: (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: v.intl.string(O.default.OEkrCx)
      })
    })]
  })
}

function R(e) {
  let {
    text: t,
    status: n
  } = e;
  return (0, r.jsxs)("div", {
    className: S.categoryHeader,
    children: [(0, r.jsx)(l.xvT, {
      variant: "text-md/semibold",
      color: "text-subtle",
      children: t
    }), (0, r.jsx)(D, {
      status: n
    })]
  })
}

function w(e) {
  let {
    status: t,
    text: n,
    description: i,
    learnMoreLink: a
  } = e;
  return (0, r.jsxs)("div", {
    className: S.statusRow,
    children: [(0, r.jsx)(D, {
      status: t
    }), (0, r.jsxs)("div", {
      className: S.statusTextContainer,
      children: [(0, r.jsx)(l.xvT, {
        variant: "text-md/medium",
        children: n
      }), null != i && (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i
      }), null != a && (0, r.jsx)(l.Avr, {
        textVariant: "text-sm/medium",
        text: v.intl.string(v.t.hvVgAZ),
        onClick: () => (0, p.Z)(a)
      })]
    })]
  })
}

function D(e) {
  let {
    status: t
  } = e, n = {
    size: "sm",
    className: S.statusIcon
  };
  switch (t) {
    case 0:
      return (0, r.jsx)(l.owK, C(T({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 1:
      return (0, r.jsx)(l.k$p, C(T({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_CRITICAL
      }));
    case 2:
      return (0, r.jsx)(l.kmB, C(T({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 3:
      return (0, r.jsx)(l.aNP, C(T({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_WARNING
      }));
    case 4:
      return (0, r.jsx)(l.Dio, C(T({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_CRITICAL
      }))
  }
}