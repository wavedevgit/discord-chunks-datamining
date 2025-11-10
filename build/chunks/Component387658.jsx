/** Chunk was on web.js **/
/** chunk id: 387658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk202874 = require("./202874.js"),
  Chunk698342 = require("./698342.js");
let L = 5,
  M = "placeholder",
  j = [, , , , , ].fill(M);

function k(e) {
  var t, n;
  let {
    context: a,
    command: o,
    section: l,
    sectionName: c
  } = e, d = i.useCallback(() => {
    let e = O.Z.entrypoint();
    y.y(v.ti.COMMAND), (0, E.Mo)({
      command: o,
      location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c
    }), "channel" === a.type && (_.Po({
      channelId: a.channel.id,
      command: o,
      section: l,
      location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c,
      source: e,
      commandOrigin: m.bB.APPLICATION_LAUNCHER
    }), b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: a.channel.id
    }))
  }, [a, o, l, c]), f = (null != (n = null == (t = o.options) ? true : t.length) ? n : 0) > 0, p = i.useMemo(() => (0, C.ae)(o.displayDescription, true), [o.displayDescription]), h = i.useMemo(() => (0, r.jsxs)("div", {
    className: x.commandTextContainer,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: o.displayName
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      children: p
    })]
  }), [o.displayName, p]);
  return (0, r.jsxs)(u.P3F, {
    className: x.command,
    onClick: d,
    children: [(0, r.jsx)(u.Rny, {
      className: x.commandFocusBlock,
      children: h
    }), f ? (0, r.jsx)(s.F, {}) : (0, r.jsx)(G, {
      context: a,
      command: o,
      sectionName: c
    })]
  })
}

function U() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = Chunk647438.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 20 * Math.random(), "%"),
        height: "auto"
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%"),
        height: "auto"
      }
    }), []),
    a = Chunk647438.useMemo(() => (0, Chunk951288.jsxs)("div", {
      className: Chunk698342.commandTextContainerPlaceholder,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk202874.textPlaceholder,
        style: exports,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk202874.hidden,
          variant: "text-sm/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk202874.textPlaceholder,
        style: require,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk202874.hidden,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), [exports, require]);
  return (0, Chunk951288.jsx)("div", {
    className: o()(Chunk698342.command, Chunk202874.loadingAnimation, {
      [Chunk202874.noAnimation]: module
    }),
    children: Chunk120356
  })
}

function G(e) {
  let {
    context: t,
    command: n,
    sectionName: a
  } = e;
  (0, p.PL)(true, true), (0, p.em)(t, true, true);
  let o = (0, I.D)(t),
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
            sectionName: a
          }
        });
        e && (await (0, A.Y$)({
          command: n,
          optionValues: {},
          context: o,
          sectionName: a,
          commandOrigin: m.bB.APP_LAUNCHER_APPLICATION_VIEW
        }), y.y(v.ti.COMMAND))
      } finally {
        c(false)
      }
    }, [n, t, a, o]);
  return (0, r.jsx)(u.Button, {
    type: "submit",
    onClick: d,
    disabled: s,
    variant: "secondary",
    "aria-label": w.intl.formatToPlainString(w.t.UXw6W2, {
      commandName: n.untranslatedName
    }),
    text: w.intl.string(w.t.TXNS7S),
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
    headerName: a,
    sectionName: o,
    children: s
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: x.commandListHeader,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-sm/semibold",
        children: a
      }), s]
    }), (0, r.jsx)("ul", {
      className: x.commandContainer,
      "aria-label": a,
      children: n.map((e, n) => e === M ? (0, r.jsx)(U, {}, e + n) : (0, r.jsx)(k, {
        context: t,
        command: e,
        section: i,
        sectionName: o
      }, e.id))
    })]
  })
}

function Z(e) {
  var t;
  let {
    context: n,
    application: a,
    sectionName: o,
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
      applicationId: a.id
    },
    allowFetch: true
  }), p = null != (t = f.find(e => e.id === a.id)) ? t : null, {
    sortOrder: m,
    setSortOrder: g,
    commands: E,
    canSort: b
  } = (0, T.Z)({
    sectionId: a.id,
    commandsByActiveSection: u
  });
  i.useEffect(() => {
    c(a.id)
  }, [a.id, c]);
  let y = (0, S.Z)({
    context: n,
    commands: E,
    limit: L
  });
  return (i.useEffect(() => {
    l(E.length > 0)
  }, [l, E]), _ || 0 !== E.length) ? (0, r.jsxs)("ul", {
    className: x.contentContainer,
    children: [(0, r.jsx)(B, {
      context: n,
      section: p,
      commands: y,
      headerName: w.intl.string(w.t.acSE0h),
      sectionName: o
    }), (0, r.jsx)(B, {
      context: n,
      section: p,
      commands: _ ? j : E,
      headerName: w.intl.string(w.t.DUU9L3),
      sectionName: o,
      children: b && (0, r.jsx)(N.Z, {
        sortOrder: m,
        onSortOptionClick: g
      })
    })]
  }) : null
}