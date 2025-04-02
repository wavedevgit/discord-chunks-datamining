/** Chunk was on 35755 **/
n.d(t, {
  Z: () => U
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(140835),
  c = n(246521),
  s = n(442837),
  d = n(481060),
  u = n(911969),
  p = n(607070),
  m = n(555573),
  f = n(213459),
  h = n(10718),
  b = n(895924),
  v = n(583027),
  C = n(585483),
  _ = n(499254),
  x = n(541099),
  y = n(827498),
  N = n(496158),
  g = n(676161),
  j = n(660090),
  P = n(783097),
  E = n(46332),
  A = n(176412),
  O = n(870205),
  I = n(981631),
  S = n(689079),
  T = n(388032),
  L = n(692033),
  R = n(87049);
let w = "placeholder",
  k = [, , , , , ].fill(w);

function Z(e) {
  var t, n;
  let {
    context: l,
    command: o,
    section: c,
    sectionName: s
  } = e, u = r.useCallback(() => {
    let e = x.Z.entrypoint();
    _.yT(y.ti.COMMAND), (0, v.Mo)({
      command: o,
      location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: s
    }), "channel" === l.type && (m.Po({
      channelId: l.channel.id,
      command: o,
      section: c,
      location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: s,
      source: e,
      commandOrigin: b.bB.APPLICATION_LAUNCHER
    }), C.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: l.channel.id
    }))
  }, [l, o, c, s]), p = (null !== (n = null === (t = o.options) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0, f = r.useMemo(() => (0, A.ae)(o.displayDescription, void 0), [o.displayDescription]), h = r.useMemo(() => (0, i.jsxs)("div", {
    className: R.commandTextContainer,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: o.displayName
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      children: f
    })]
  }), [o.displayName, f]);
  return (0, i.jsxs)(d.P3F, {
    className: R.command,
    onClick: u,
    children: [(0, i.jsx)(d.Rny, {
      className: R.commandFocusBlock,
      children: h
    }), p ? (0, i.jsx)(a.F, {}) : (0, i.jsx)(D, {
      context: l,
      command: o,
      sectionName: s
    })]
  })
}

function M() {
  let e = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = r.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 20 * Math.random(), "%"),
        height: "auto"
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%"),
        height: "auto"
      }
    }), []),
    l = r.useMemo(() => (0, i.jsxs)("div", {
      className: R.commandTextContainerPlaceholder,
      children: [(0, i.jsx)("div", {
        className: L.textPlaceholder,
        style: t,
        children: (0, i.jsx)(d.Text, {
          className: L.hidden,
          variant: "text-sm/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, i.jsx)("div", {
        className: L.textPlaceholder,
        style: n,
        children: (0, i.jsx)(d.Text, {
          className: L.hidden,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), [t, n]);
  return (0, i.jsx)("div", {
    className: o()(R.command, L.loadingAnimation, {
      [L.noAnimation]: e
    }),
    children: l
  })
}

function D(e) {
  let {
    context: t,
    command: n,
    sectionName: l
  } = e;
  (0, f.PL)(!0, !0), (0, f.em)(t, !0, !0);
  let o = (0, N.D)(t),
    [a, s] = r.useState(!1),
    u = r.useCallback(async e => {
      if ("channel" !== t.type) return;
      e.stopPropagation();
      let i = x.Z.lastShownEntrypoint();
      try {
        await (0, E.L)({
          applicationId: n.applicationId,
          channel: "channel" === t.type ? t.channel : void 0,
          sectionName: l,
          location: b.Vh.APP_LAUNCHER_APPLICATION_VIEW,
          entrypoint: i,
          commandIntegrationTypes: n.integration_types
        }) && (await (0, P.Y$)({
          command: n,
          optionValues: {},
          context: o,
          sectionName: l,
          commandOrigin: b.bB.APP_LAUNCHER_APPLICATION_VIEW
        }), _.yT(y.ti.COMMAND))
      } finally {
        s(!1)
      }
    }, [n, t, l, o]);
  return (0, i.jsxs)(d.zxk, {
    type: "submit",
    onClick: u,
    disabled: a,
    size: d.PhG.ICON,
    color: d.zxk.Colors.PRIMARY,
    className: R.commandSentCTAButton,
    innerClassName: R.commandSentCTAButtonInner,
    "aria-label": T.NW.formatToPlainString(T.t.UXw6W1, {
      commandName: n.untranslatedName
    }),
    children: [(0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      children: T.NW.string(T.t.TXNS7e)
    }), (0, i.jsx)(c.U, {
      size: "xs",
      color: "currentColor"
    })]
  })
}

function W(e) {
  let {
    context: t,
    commands: n,
    section: r,
    headerName: l,
    sectionName: o,
    children: a
  } = e;
  return 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: R.commandListHeader,
      children: [(0, i.jsx)(d.X6q, {
        variant: "heading-sm/semibold",
        children: l
      }), a]
    }), (0, i.jsx)("ul", {
      className: R.commandContainer,
      "aria-label": l,
      children: n.map((e, n) => e === w ? (0, i.jsx)(M, {}, e + n) : (0, i.jsx)(Z, {
        context: t,
        command: e,
        section: r,
        sectionName: o
      }, e.id))
    })]
  })
}

function U(e) {
  var t;
  let {
    context: n,
    application: l,
    sectionName: o,
    installOnDemand: a,
    setHasCommands: c
  } = e, {
    filterSection: s,
    commandsByActiveSection: d,
    sectionDescriptors: p,
    loading: m
  } = h.wi({
    context: n,
    filters: {
      commandTypes: [u.yU.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: S.tn,
      includeFrecency: !0,
      allowApplicationState: a,
      installOnDemand: a,
      applicationId: l.id
    },
    allowFetch: !0
  }), f = null !== (t = p.find(e => e.id === l.id)) && void 0 !== t ? t : null, {
    sortOrder: b,
    setSortOrder: v,
    commands: C,
    canSort: _
  } = (0, j.Z)({
    sectionId: l.id,
    commandsByActiveSection: d
  });
  r.useEffect(() => {
    s(l.id)
  }, [l.id, s]);
  let x = (0, g.Z)({
    context: n,
    commands: C,
    limit: 5
  });
  return (r.useEffect(() => {
    c(C.length > 0)
  }, [c, C]), m || 0 !== C.length) ? (0, i.jsxs)("ul", {
    className: R.contentContainer,
    children: [(0, i.jsx)(W, {
      context: n,
      section: f,
      commands: x,
      headerName: T.NW.string(T.t.acSE0t),
      sectionName: o
    }), (0, i.jsx)(W, {
      context: n,
      section: f,
      commands: m ? k : C,
      headerName: T.NW.string(T.t.DUU9Ly),
      sectionName: o,
      children: _ && (0, i.jsx)(O.Z, {
        sortOrder: b,
        onSortOptionClick: v
      })
    })]
  }) : null
}