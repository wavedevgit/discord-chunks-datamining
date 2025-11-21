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
  Chunk535139 = require("./535139.js"),
  Chunk222613 = require("./222613.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk428498 = require("./428498.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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
        isSubscribedToAuthorizeRequest: _,
        oauth2Token: T,
        hasConnectionEntrypointUrl: S,
        validFlows: A
      }
    } = (0, Chunk535139.F)(module, {
      debug: true
    }),
    C = (0, Chunk442837.e7)([Chunk757266.Z], () => null != module && Chunk757266.Z.isConnected(module.id)),
    N = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()),
    D = "authorization_debug",
    w = [{
      id: "authorization_debug",
      name: Chunk388032.intl.string(Chunk222613.default.vR0zs6)
    }],
    L = () => (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk428498.header,
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk428498.headerTextContainer,
          children: (0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/extrabold",
            children: Chunk388032.intl.format(Chunk222613.default.KoK4J9, {
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
    x = () => (s()(null != module, "Application should be defined when rendering the test mode panel"), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk428498.header,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk428498.headerTextContainer,
          children: (0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/extrabold",
            children: Chunk388032.intl.format(Chunk222613.default.KoK4J9, {
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
          selectedItem: D,
          onItemSelect: () => {},
          orientation: "horizontal",
          type: "top",
          look: "brand",
          children: w.map(e => (0, r.jsx)(d.njP.Item, {
            className: a()(I.tab, {
              [I.selected]: e.id === D
            }),
            id: e.id,
            "aria-label": e.name,
            children: e.name
          }, e.id))
        }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
          variant: "text-md/medium",
          color: "text-secondary",
          children: Chunk388032.intl.string(Chunk222613.default["no+FQS"])
        }), (0, Chunk54381.jsx)(R, {
          overallStatus: Chunk782568 ? 0 : C ? 3 : 1,
          name: Chunk388032.intl.string(Chunk222613.default.AGLx00),
          steps: [{
            status: C ? 2 : 4,
            text: Chunk388032.intl.string(Chunk222613.default.kxF9br),
            description: C ? null : Chunk388032.intl.string(Chunk222613.default.PFxxJa),
            learnMoreLink: C ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }, {
            status: Chunk782568 ? 2 : C ? 3 : 4,
            text: Chunk388032.intl.string(Chunk222613.default.S94dzs),
            description: Chunk782568 || !C ? null : Chunk388032.intl.string(Chunk222613.default.aTULMB),
            learnMoreLink: Chunk782568 || !C ? null : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log"
          }],
          isChosen: Chunk512722 === Chunk535139.r.RPC
        }), (0, Chunk54381.jsx)(R, {
          overallStatus: +!S,
          name: Chunk388032.intl.string(Chunk222613.default.K3ObrU),
          steps: [{
            status: S ? 2 : 4,
            text: Chunk388032.intl.string(Chunk222613.default["8a7IrV"]),
            description: S ? Chunk388032.intl.formatToPlainString(Chunk222613.default["9iLeL2"], {
              url: null == Chunk692547 ? true : Chunk692547.connectionEntrypointUrl
            }) : null
          }],
          isChosen: Chunk512722 === Chunk535139.r.WEB
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk428498.footer,
        children: [(0, Chunk54381.jsx)(P, {
          status: +!require,
          text: Chunk388032.intl.string(Chunk388032.t["Vu/zmQ"])
        }), 0 === A.length && (0, Chunk54381.jsx)(Chunk793030.xvT, {
          style: {
            minWidth: 0,
            overflow: "hidden"
          },
          variant: "text-md/medium",
          children: Chunk388032.intl.string(Chunk222613.default.eg0mNa)
        }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
          variant: "secondary",
          disabled: !exports || require,
          onClick: () => Chunk120356(),
          text: Chunk388032.intl.string(Chunk222613.default.w0pN4R),
          fullWidth: true
        }), null != T && (0, Chunk54381.jsx)(Chunk793030.zxk, {
          variant: "secondary",
          onClick: () => {
            Chunk384275.Z.delete(T.id);
            let t = N.get(module.id);
            null != exports && Chunk513202.Z.leaveActivity({
              location: exports.location,
              applicationId: module.id,
              showFeedback: false
            })
          },
          text: Chunk388032.intl.string(Chunk222613.default.tkIymA),
          fullWidth: true
        })]
      })]
    }));
  return (0, Chunk54381.jsx)("div", {
    "data-app-right-panel": true,
    className: Chunk428498.debugToolsPanel,
    children: (0, Chunk54381.jsx)(Chunk793030.y5t, {
      children: null != module ? x() : L()
    })
  })
}

function R(e) {
  let {
    overallStatus: t,
    name: n,
    steps: i,
    isChosen: a
  } = e;
  return (0, r.jsxs)("div", {
    className: I.categoryContainer,
    children: [(0, r.jsx)(P, {
      status: t,
      text: n
    }), i.map((e, t) => (0, r.jsx)(D, S({}, e), t)), a && (0, r.jsx)("div", {
      className: I.calloutBox,
      children: (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: v.intl.string(O.default.OEkrCx)
      })
    })]
  })
}

function P(e) {
  let {
    text: t,
    status: n
  } = e;
  return (0, r.jsxs)("div", {
    className: I.categoryHeader,
    children: [(0, r.jsx)(l.xvT, {
      variant: "text-md/semibold",
      color: "text-secondary",
      children: t
    }), (0, r.jsx)(w, {
      status: n
    })]
  })
}

function D(e) {
  let {
    status: t,
    text: n,
    description: i,
    learnMoreLink: a
  } = e;
  return (0, r.jsxs)("div", {
    className: I.statusRow,
    children: [(0, r.jsx)(w, {
      status: t
    }), (0, r.jsxs)("div", {
      className: I.statusTextContainer,
      children: [(0, r.jsx)(l.xvT, {
        variant: "text-md/medium",
        children: n
      }), null != i && (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: i
      }), null != a && (0, r.jsx)(l.Avr, {
        textVariant: "text-sm/medium",
        text: v.intl.string(v.t.hvVgAZ),
        onClick: () => (0, _.Z)(a)
      })]
    })]
  })
}

function w(e) {
  let {
    status: t
  } = e, n = {
    size: "sm",
    className: I.statusIcon
  };
  switch (t) {
    case 0:
      return (0, r.jsx)(l.owK, C(S({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 1:
      return (0, r.jsx)(l.k$p, C(S({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_CRITICAL
      }));
    case 2:
      return (0, r.jsx)(l.kmB, C(S({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_POSITIVE
      }));
    case 3:
      return (0, r.jsx)(l.aNP, C(S({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_WARNING
      }));
    case 4:
      return (0, r.jsx)(l.Dio, C(S({}, n), {
        color: u.Z.colors.ICON_FEEDBACK_CRITICAL
      }))
  }
}