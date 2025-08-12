/** Chunk was on web.js **/
/** chunk id: 387658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk140835 = require("./140835.jsx"),
  Chunk246521 = require("./246521.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk555573 = require("./555573.js"),
  Chunk213459 = require("./213459.js"),
  Chunk10718 = require("./10718.js"),
  Chunk895924 = require("./895924.js"),
  Chunk104919 = require("./104919.js"),
  Chunk583027 = require("./583027.js"),
  Chunk585483 = require("./585483.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk496158 = require("./496158.js"),
  Chunk676161 = require("./676161.js"),
  Chunk660090 = require("./660090.js"),
  Chunk783097 = require("./783097.js"),
  Chunk176412 = require("./176412.js"),
  Chunk870205 = require("./870205.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk74761 = require("./74761.js"),
  Chunk387191 = require("./387191.js");
let x = 5,
  M = "placeholder",
  k = [, , , , , ].fill(M);

function j(e) {
  var t, n;
  let {
    context: o,
    command: a,
    section: l,
    sectionName: c
  } = e, d = i.useCallback(() => {
    let e = O.Z.entrypoint();
    y.yT(v.ti.COMMAND), (0, E.Mo)({
      command: a,
      location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c
    }), "channel" === o.type && (_.Po({
      channelId: o.channel.id,
      command: a,
      section: l,
      location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c,
      source: e,
      commandOrigin: m.bB.APPLICATION_LAUNCHER
    }), b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: o.channel.id
    }))
  }, [o, a, l, c]), f = (null != (n = null == (t = a.options) ? true : t.length) ? n : 0) > 0, p = i.useMemo(() => (0, N.ae)(a.displayDescription, true), [a.displayDescription]), h = i.useMemo(() => (0, r.jsxs)("div", {
    className: L.commandTextContainer,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: a.displayName
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      children: p
    })]
  }), [a.displayName, p]);
  return (0, r.jsxs)(u.P3F, {
    className: L.command,
    onClick: d,
    children: [(0, r.jsx)(u.Rny, {
      className: L.commandFocusBlock,
      children: h
    }), f ? (0, r.jsx)(s.F, {}) : (0, r.jsx)(G, {
      context: o,
      command: a,
      sectionName: c
    })]
  })
}

function U() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = Chunk73800.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 20 * Math.random(), "%"),
        height: "auto"
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%"),
        height: "auto"
      }
    }), []),
    o = Chunk73800.useMemo(() => (0, Chunk255367.jsxs)("div", {
      className: Chunk387191.commandTextContainerPlaceholder,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk74761.textPlaceholder,
        style: exports,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk74761.hidden,
          variant: "text-sm/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk74761.textPlaceholder,
        style: require,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk74761.hidden,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), [exports, require]);
  return (0, Chunk255367.jsx)("div", {
    className: a()(Chunk387191.command, Chunk74761.loadingAnimation, {
      [Chunk74761.noAnimation]: module
    }),
    children: Chunk120356
  })
}

function G(e) {
  let {
    context: t,
    command: n,
    sectionName: o
  } = e;
  (0, p.PL)(true, true), (0, p.em)(t, true, true);
  let a = (0, I.D)(t),
    [s, c] = i.useState(false),
    d = i.useCallback(async e => {
      if ("channel" !== t.type) return;
      e.stopPropagation();
      let r = O.Z.lastShownEntrypoint();
      try {
        let {
          isAuthorized: e
        } = await (0, g.L)({
          applicationId: n.applicationId,
          channel: "channel" === t.type ? t.channel : true,
          commandIntegrationTypes: n.integration_types,
          appLauncherContext: {
            entrypoint: r,
            location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: o
          }
        });
        e && (await (0, A.Y$)({
          command: n,
          optionValues: {},
          context: a,
          sectionName: o,
          commandOrigin: m.bB.APP_LAUNCHER_APPLICATION_VIEW
        }), y.yT(v.ti.COMMAND))
      } finally {
        c(false)
      }
    }, [n, t, o, a]);
  return (0, r.jsx)(u.zxk, {
    type: "submit",
    onClick: d,
    disabled: s,
    variant: "secondary",
    "aria-label": w.intl.formatToPlainString(w.t.UXw6W1, {
      commandName: n.untranslatedName
    }),
    text: w.intl.string(w.t.TXNS7e),
    icon: l.U,
    iconPosition: "end",
    size: "md"
  })
}

function B(e) {
  let {
    context: t,
    commands: n,
    section: i,
    headerName: o,
    sectionName: a,
    children: s
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: L.commandListHeader,
      children: [(0, r.jsx)(u.X6q, {
        variant: "heading-sm/semibold",
        children: o
      }), s]
    }), (0, r.jsx)("ul", {
      className: L.commandContainer,
      "aria-label": o,
      children: n.map((e, n) => e === M ? (0, r.jsx)(U, {}, e + n) : (0, r.jsx)(j, {
        context: t,
        command: e,
        section: i,
        sectionName: a
      }, e.id))
    })]
  })
}

function Z(e) {
  var t;
  let {
    context: n,
    application: o,
    sectionName: a,
    installOnDemand: s,
    setHasCommands: l
  } = e, {
    filterSection: c,
    commandsByActiveSection: u,
    sectionDescriptors: f,
    loading: _
  } = h.wi({
    context: n,
    filters: {
      commandTypes: [d.yU.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: P.tn,
      includeFrecency: true,
      allowApplicationState: s,
      installOnDemand: s,
      applicationId: o.id
    },
    allowFetch: true
  }), p = null != (t = f.find(e => e.id === o.id)) ? t : null, {
    sortOrder: m,
    setSortOrder: g,
    commands: E,
    canSort: b
  } = (0, S.Z)({
    sectionId: o.id,
    commandsByActiveSection: u
  });
  i.useEffect(() => {
    c(o.id)
  }, [o.id, c]);
  let y = (0, T.Z)({
    context: n,
    commands: E,
    limit: x
  });
  return (i.useEffect(() => {
    l(E.length > 0)
  }, [l, E]), _ || 0 !== E.length) ? (0, r.jsxs)("ul", {
    className: L.contentContainer,
    children: [(0, r.jsx)(B, {
      context: n,
      section: p,
      commands: y,
      headerName: w.intl.string(w.t.acSE0t),
      sectionName: a
    }), (0, r.jsx)(B, {
      context: n,
      section: p,
      commands: _ ? k : E,
      headerName: w.intl.string(w.t.DUU9Ly),
      sectionName: a,
      children: b && (0, r.jsx)(C.Z, {
        sortOrder: m,
        onSortOptionClick: g
      })
    })]
  }) : null
}