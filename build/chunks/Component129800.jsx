/** Chunk was on web.js **/
/** chunk id: 129800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk320448 = require("./320448.jsx"),
  Chunk559647 = require("./559647.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk775602 = require("./775602.js"),
  Chunk721768 = require("./721768.js"),
  Chunk264322 = require("./264322.js"),
  Chunk842209 = require("./842209.js"),
  Chunk392054 = require("./392054.js"),
  Chunk972995 = require("./972995.js"),
  Chunk390756 = require("./390756.js"),
  Chunk203982 = require("./203982.js"),
  Chunk211401 = require("./211401.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk555045 = require("./555045.js"),
  Chunk455440 = require("./455440.js"),
  Chunk720371 = require("./720371.js"),
  Chunk735991 = require("./735991.js"),
  Chunk297486 = require("./297486.js"),
  Chunk956522 = require("./956522.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk457806 = require("./457806.js"),
  Chunk577382 = require("./577382.js");
let L = 5,
  j = "placeholder",
  M = [, , , , , ].fill(j);

function k(e) {
  var t, n;
  let {
    context: a,
    command: s,
    section: l,
    sectionName: c
  } = e, d = i.useCallback(() => {
    let e = O.A.entrypoint();
    b.k(v.Se.COMMAND), (0, E.Mv)({
      command: s,
      location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c
    }), "channel" === a.type && (p.Gf({
      channelId: a.channel.id,
      command: s,
      section: l,
      location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c,
      source: e,
      commandOrigin: m.iw.APPLICATION_LAUNCHER
    }), y._.dispatch(R.jej.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: a.channel.id
    }))
  }, [a, s, l, c]), f = (null != (t = null == (n = s.options) ? true : n.length) ? t : 0) > 0, _ = i.useMemo(() => (0, C.SD)(s.displayDescription, true), [s.displayDescription]), h = i.useMemo(() => (0, r.jsxs)("div", {
    className: x.sd,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: s.displayName
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      children: _
    })]
  }), [s.displayName, _]);
  return (0, r.jsxs)(u.DUT, {
    className: x.G5,
    onClick: d,
    children: [(0, r.jsx)(u.M1G, {
      className: x.fg,
      children: h
    }), f ? (0, r.jsx)(o._, {}) : (0, r.jsx)(G, {
      context: a,
      command: s,
      sectionName: c
    })]
  })
}

function U() {
  let e = (0, c.bG)([f.A], () => f.A.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = i.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 20 * Math.random(), "%"),
        height: "auto"
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%"),
        height: "auto"
      }
    }), []),
    a = i.useMemo(() => (0, r.jsxs)("div", {
      className: x.Vc,
      children: [(0, r.jsx)("div", {
        className: D.jC,
        style: t,
        children: (0, r.jsx)(u.Text, {
          className: D.R,
          variant: "text-sm/semibold",
          color: "text-strong",
          lineClamp: 1,
          children: "_"
        })
      }), (0, r.jsx)("div", {
        className: D.jC,
        style: n,
        children: (0, r.jsx)(u.Text, {
          className: D.R,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), [t, n]);
  return (0, r.jsx)("div", {
    className: s()(x.G5, D.NX, {
      [D.cb]: e
    }),
    children: a
  })
}

function G(e) {
  let {
    context: t,
    command: n,
    sectionName: a
  } = e;
  (0, _.A4)(true, true), (0, _.SD)(t, true, true);
  let s = (0, A.e)(t),
    [o, c] = i.useState(false),
    d = i.useCallback(async e => {
      if ("channel" !== t.type) return;
      e.stopPropagation();
      let r = O.A.lastShownEntrypoint();
      try {
        let {
          isAuthorized: e
        } = await (0, g.q)({
          applicationId: n.applicationId,
          channel: "channel" === t.type ? t.channel : true,
          commandIntegrationTypes: n.integration_types,
          appLauncherContext: {
            entrypoint: r,
            location: m.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: a
          }
        });
        e && (await (0, T.MJ)({
          command: n,
          optionValues: {},
          context: s,
          sectionName: a,
          commandOrigin: m.iw.APP_LAUNCHER_APPLICATION_VIEW
        }), b.k(v.Se.COMMAND))
      } finally {
        c(false)
      }
    }, [n, t, a, s]);
  return (0, r.jsx)(u.Button, {
    type: "submit",
    onClick: d,
    disabled: o,
    variant: "secondary",
    "aria-label": P.intl.formatToPlainString(P.t.UXw6W2, {
      commandName: n.untranslatedName
    }),
    text: P.intl.string(P.t.TXNS7S),
    icon: l.l,
    iconPosition: "end",
    size: "md"
  })
}

function V(e) {
  let {
    context: t,
    commands: n,
    section: i,
    headerName: a,
    sectionName: s,
    children: o
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: x.Zp,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-sm/semibold",
        children: a
      }), o]
    }), (0, r.jsx)("ul", {
      className: x.dO,
      "aria-label": a,
      children: n.map((e, n) => e === j ? (0, r.jsx)(U, {}, e + n) : (0, r.jsx)(k, {
        context: t,
        command: e,
        section: i,
        sectionName: s
      }, e.id))
    })]
  })
}

function F(e) {
  var t;
  let {
    context: n,
    application: a,
    sectionName: s,
    installOnDemand: o,
    setHasCommands: l
  } = e, {
    filterSection: c,
    commandsByActiveSection: u,
    sectionDescriptors: f,
    loading: p
  } = h.cu({
    context: n,
    filters: {
      commandTypes: [d.kc.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: w.Hi,
      includeFrecency: true,
      allowApplicationState: o,
      installOnDemand: o,
      applicationId: a.id
    },
    allowFetch: true
  }), _ = null != (t = f.find(e => e.id === a.id)) ? t : null, {
    sortOrder: m,
    setSortOrder: g,
    commands: E,
    canSort: y
  } = (0, S.A)({
    sectionId: a.id,
    commandsByActiveSection: u
  });
  i.useEffect(() => {
    c(a.id)
  }, [a.id, c]);
  let b = (0, I.A)({
    context: n,
    commands: E,
    limit: L
  });
  return (i.useEffect(() => {
    l(E.length > 0)
  }, [l, E]), p || 0 !== E.length) ? (0, r.jsxs)("ul", {
    className: x.hQ,
    children: [(0, r.jsx)(V, {
      context: n,
      section: _,
      commands: b,
      headerName: P.intl.string(P.t.acSE0h),
      sectionName: s
    }), (0, r.jsx)(V, {
      context: n,
      section: _,
      commands: p ? M : E,
      headerName: P.intl.string(P.t.DUU9L3),
      sectionName: s,
      children: y && (0, r.jsx)(N.A, {
        sortOrder: m,
        onSortOptionClick: g
      })
    })]
  }) : null
}