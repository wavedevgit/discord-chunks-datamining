/** Chunk was on 35755 **/
/** chunk id: 387658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk387206 = require("./387206.js"),
  Chunk613321 = require("./613321.js");
let Z = "placeholder",
  w = [, , , , , ].fill(Z);

function k(e) {
  var t, n;
  let {
    context: r,
    command: a,
    section: s,
    sectionName: c
  } = e, d = l.useCallback(() => {
    let e = N.Z.entrypoint();
    b.yT(j.ti.COMMAND), (0, g.Mo)({
      command: a,
      location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c
    }), "channel" === r.type && (m.Po({
      channelId: r.channel.id,
      command: a,
      section: s,
      location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c,
      source: e,
      commandOrigin: v.bB.APPLICATION_LAUNCHER
    }), x.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: r.channel.id
    }))
  }, [r, a, s, c]), p = (null != (n = null == (t = a.options) ? true : t.length) ? n : 0) > 0, f = l.useMemo(() => (0, _.ae)(a.displayDescription, true), [a.displayDescription]), h = l.useMemo(() => (0, i.jsxs)("div", {
    className: R.commandTextContainer,
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: a.displayName
    }), (0, i.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      children: f
    })]
  }), [a.displayName, f]);
  return (0, i.jsxs)(u.P3F, {
    className: R.command,
    onClick: d,
    children: [(0, i.jsx)(u.Rny, {
      className: R.commandFocusBlock,
      children: h
    }), p ? (0, i.jsx)(o.F, {}) : (0, i.jsx)(U, {
      context: r,
      command: a,
      sectionName: c
    })]
  })
}

function M() {
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
    r = Chunk647438.useMemo(() => (0, Chunk951288.jsxs)("div", {
      className: Chunk613321.commandTextContainerPlaceholder,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk387206.textPlaceholder,
        style: exports,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk387206.hidden,
          variant: "text-sm/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk387206.textPlaceholder,
        style: require,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk387206.hidden,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), [exports, require]);
  return (0, Chunk951288.jsx)("div", {
    className: a()(Chunk613321.command, Chunk387206.loadingAnimation, {
      [Chunk387206.noAnimation]: module
    }),
    children: Chunk120356
  })
}

function U(e) {
  let {
    context: t,
    command: n,
    sectionName: r
  } = e;
  (0, f.PL)(true, true), (0, f.em)(t, true, true);
  let a = (0, C.D)(t),
    [o, c] = l.useState(false),
    d = l.useCallback(async e => {
      if ("channel" !== t.type) return;
      e.stopPropagation();
      let i = N.Z.lastShownEntrypoint();
      try {
        let {
          isAuthorized: e
        } = await (0, y.L)({
          applicationId: n.applicationId,
          channel: "channel" === t.type ? t.channel : true,
          commandIntegrationTypes: n.integration_types,
          appLauncherContext: {
            entrypoint: i,
            location: v.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: r
          }
        });
        e && (await (0, A.Y$)({
          command: n,
          optionValues: {},
          context: a,
          sectionName: r,
          commandOrigin: v.bB.APP_LAUNCHER_APPLICATION_VIEW
        }), b.yT(j.ti.COMMAND))
      } finally {
        c(false)
      }
    }, [n, t, r, a]);
  return (0, i.jsx)(u.Button, {
    type: "submit",
    onClick: d,
    disabled: o,
    variant: "secondary",
    "aria-label": T.intl.formatToPlainString(T.t.UXw6W2, {
      commandName: n.untranslatedName
    }),
    text: T.intl.string(T.t.TXNS7S),
    icon: s.U,
    iconPosition: "end",
    size: "md"
  })
}

function D(e) {
  let {
    context: t,
    commands: n,
    section: l,
    headerName: r,
    sectionName: a,
    children: o
  } = e;
  return 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: R.commandListHeader,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-sm/semibold",
        children: r
      }), o]
    }), (0, i.jsx)("ul", {
      className: R.commandContainer,
      "aria-label": r,
      children: n.map((e, n) => e === Z ? (0, i.jsx)(M, {}, e + n) : (0, i.jsx)(k, {
        context: t,
        command: e,
        section: l,
        sectionName: a
      }, e.id))
    })]
  })
}

function H(e) {
  var t;
  let {
    context: n,
    application: r,
    sectionName: a,
    installOnDemand: o,
    setHasCommands: s
  } = e, {
    filterSection: c,
    commandsByActiveSection: u,
    sectionDescriptors: p,
    loading: m
  } = h.wi({
    context: n,
    filters: {
      commandTypes: [d.yU.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: S.tn,
      includeFrecency: true,
      allowApplicationState: o,
      installOnDemand: o,
      applicationId: r.id
    },
    allowFetch: true
  }), f = null != (t = p.find(e => e.id === r.id)) ? t : null, {
    sortOrder: v,
    setSortOrder: y,
    commands: g,
    canSort: x
  } = (0, P.Z)({
    sectionId: r.id,
    commandsByActiveSection: u
  });
  l.useEffect(() => {
    c(r.id)
  }, [r.id, c]);
  let b = (0, E.Z)({
    context: n,
    commands: g,
    limit: 5
  });
  return (l.useEffect(() => {
    s(g.length > 0)
  }, [s, g]), m || 0 !== g.length) ? (0, i.jsxs)("ul", {
    className: R.contentContainer,
    children: [(0, i.jsx)(D, {
      context: n,
      section: f,
      commands: b,
      headerName: T.intl.string(T.t.acSE0h),
      sectionName: a
    }), (0, i.jsx)(D, {
      context: n,
      section: f,
      commands: m ? w : g,
      headerName: T.intl.string(T.t.DUU9L3),
      sectionName: a,
      children: x && (0, i.jsx)(O.Z, {
        sortOrder: v,
        onSortOptionClick: y
      })
    })]
  }) : null
}