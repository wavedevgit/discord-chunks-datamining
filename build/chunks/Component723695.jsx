/** Chunk was on web.js **/
/** chunk id: 723695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk10716 = require("./10716.js"),
  Chunk631628 = require("./631628.js"),
  Chunk711765 = require("./711765.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk918831 = require("./918831.js"),
  Chunk361926 = require("./361926.js"),
  Chunk429913 = require("./429913.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk713804 = require("./713804.js"),
  Chunk611010 = require("./611010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk735991 = require("./735991.js"),
  Chunk485878 = require("./485878.js"),
  Chunk396533 = require("./396533.js"),
  Chunk567367 = require("./567367.jsx"),
  Chunk382607 = require("./382607.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk516995 = require("./516995.js"),
  Chunk206314 = require("./206314.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}
let P = 2,
  D = 2e3;

function L(e) {
  let {
    context: t,
    application: n,
    videoUrl: a,
    imageCoverUrl: l,
    sectionName: u,
    hasCommands: f
  } = e, p = i.useMemo(() => {
    var e;
    return null != (e = (0, b.u8)(n)) ? e : ""
  }, [n]), _ = (0, s.bG)([c.A], () => c.A.inDevModeForApplication(n.id)), {
    isSlideReady: h
  } = (0, O.uM)(), [g, E] = i.useState(false);
  i.useEffect(() => {
    h && E(true)
  }, [h]);
  let y = null != a;
  return (0, r.jsxs)("div", {
    className: C.kL,
    children: [(0, r.jsxs)("div", {
      children: [y ? (0, r.jsxs)("div", {
        className: C.j,
        children: [g ? (0, r.jsx)(m.A, {
          className: o()(C.l3, C.Ki),
          loop: true,
          muted: true,
          autoPlay: true,
          src: a,
          poster: l
        }) : null, (0, r.jsx)("img", {
          className: C.l3,
          src: l,
          "aria-label": T.intl.string(T.t.X4IxWL)
        })]
      }) : null, (0, r.jsxs)("div", {
        className: y ? C.iw : C.bH,
        children: [(0, r.jsx)(M, {
          application: n
        }), (0, r.jsx)(j, {
          application: n
        }), p.length > 0 ? (0, r.jsx)(G, {
          description: p
        }) : null, _ ? (0, r.jsx)("div", {
          className: C.G,
          children: (0, r.jsx)(d.F, {
            hideSearch: true,
            className: C.bz
          })
        }) : null, (0, r.jsx)(U, {
          context: t,
          application: n,
          sectionName: u,
          isDeveloperOfThisApp: _,
          hasCommands: f
        })]
      })]
    }), (0, r.jsx)(x, {
      application: n
    })]
  })
}

function x(e) {
  let {
    application: t
  } = e, n = (0, b.K4)(t), i = (0, b.ME)(t);
  return n || i ? (0, r.jsxs)("div", {
    className: C.fP,
    children: [n ? (0, r.jsxs)("div", {
      className: C.wi,
      children: [(0, r.jsx)(l.U1X, {
        size: "sm",
        color: l.LU0.colors.ICON_MUTED
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: T.intl.string(T.t["8z5B2U"])
      })]
    }) : null, i ? (0, r.jsxs)("div", {
      className: C.wi,
      children: [(0, r.jsx)(l.d2Y, {
        size: "sm",
        color: l.LU0.colors.ICON_MUTED
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: T.intl.string(T.t["5khEk8"])
      })]
    }) : null]
  }) : null
}

function M(e) {
  var t;
  let {
    application: n
  } = e, i = (0, b.$B)(n) ? n.name : null != (t = (0, b.lq)(n)) ? t : "", a = (0, b.b7)(n);
  return (0, r.jsxs)("div", {
    className: C.gn,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-xl/extrabold",
      lineClamp: 1,
      children: i
    }), a ? (0, r.jsx)("div", {
      className: C.s3,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: T.intl.string(T.t.LO4f0P)
      })
    }) : null]
  })
}

function j(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => {
    var e;
    return (0, b.$B)(t) && null != (e = null == t ? true : t.tags) ? e : []
  }, [t]);
  return (0, b.Ag)(t) ? (0, r.jsxs)("div", {
    className: C.Pc,
    children: [(0, r.jsx)(k, {
      application: t
    }), n.map((e, t) => (0, r.jsx)("div", {
      className: C.I8,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "interactive-text-default",
        children: e
      })
    }, e + t))]
  }) : null
}

function k(e) {
  var t;
  let {
    application: n
  } = e;
  if (!(0, b.Ag)(n)) return null;
  let i = null != (t = (0, b.$B)(n) ? n instanceof E.Ay ? n.maxParticipants : n.max_participants : 0) ? t : 0;
  return (0, r.jsxs)("div", {
    className: C.I8,
    children: [(0, r.jsx)(l.nFg, {
      size: "xs",
      color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "interactive-text-default",
      children: (0, u.cL)(i)
    })]
  })
}

function U(e) {
  var t;
  let {
    context: n,
    application: a,
    sectionName: o,
    hasCommands: s,
    isDeveloperOfThisApp: c
  } = e, u = (0, _.E0)(n, a.id), d = (0, h.h)(a.id), m = null == d || null == (t = d.bot) ? true : t.id, g = (0, p.A)({
    context: n,
    application: a,
    botUserId: m
  }), {
    analyticsLocations: E
  } = (0, f.Ay)();
  return (i.useEffect(() => {
    if (!(0, b.$B)(a) || !(0, b.Ag)(a)) return;
    let e = setTimeout(() => {
      (null == u || null == m) && y.default.track(S.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
        application_id: a.id,
        is_primary_entry_point_command_non_null: null != u,
        is_bot_user_id_non_null: null != m,
        show_try_it_out_button: g
      })
    }, D);
    return () => clearTimeout(e)
  }, [a, u, m, g]), (0, b.$B)(a) && (0, b.Ag)(a)) ? null != u && null != m ? (0, r.jsxs)(l.ButtonGroup, {
    fullWidth: true,
    children: [(0, r.jsx)(A.A, {
      context: n,
      application: a,
      sectionName: o,
      primaryEntryPointCommand: u
    }), g && null != m ? (0, r.jsx)(I.A, {
      botUserId: m,
      applicationId: a.id,
      analyticsLocations: E
    }) : null]
  }) : c && !s && (0, b.Ag)(a) ? (0, r.jsx)(l.po8, {
    className: C.ai,
    messageType: l.YCn.WARNING,
    children: T.intl.format(T.t["s/3hjE"], {})
  }) : null : null
}

function G(e) {
  let {
    description: t
  } = e, [n, a] = i.useState(true);
  i.useLayoutEffect(() => a(false), []);
  let o = i.useMemo(() => (0, g.parseBioReact)(t), [t]),
    {
      ref: s,
      lineHeight: c,
      lineCount: u
    } = V(),
    d = i.useMemo(() => {
      if (null == c || null == u) return {
        key: 0
      };
      let e = c * u;
      return {
        key: 1,
        minHeightOverride: Math.min(e, P * c),
        maxHeightOverride: e
      }
    }, [u, c]),
    {
      ref: f,
      isTransitioning: p,
      onTransitionEnd: _
    } = (0, v.A)(R({
      isExpanded: n
    }, d)),
    h = n || p;
  return (0, r.jsxs)("div", {
    className: C.iQ,
    children: [(0, r.jsx)("div", {
      ref: f,
      className: C.ZT,
      onTransitionEnd: _,
      children: (0, r.jsx)(l.Text, {
        ref: s,
        className: N.PT,
        variant: "text-sm/medium",
        lineClamp: h ? true : P,
        style: {
          maxHeight: h ? true : d.minHeightOverride
        },
        children: o
      })
    }), null != u && u > P ? (0, r.jsxs)(l.DUT, {
      className: C.lP,
      onClick: () => a(e => !e),
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-brand",
        children: h ? T.intl.string(T.t.u4YJ8g) : T.intl.string(T.t["N/tajD"])
      }), h ? (0, r.jsx)(l.tN5, {
        size: "sm",
        color: l.LU0.colors.TEXT_BRAND
      }) : (0, r.jsx)(l.abt, {
        size: "sm",
        color: l.LU0.colors.TEXT_BRAND
      })]
    }) : null]
  })
}

function V() {
  let e = i.useRef(null),
    [t, n] = i.useState(null),
    [r, a] = i.useState(null);
  return i.useLayoutEffect(() => {
    let t = e.current;
    if (null === t || 0 === t.clientHeight) return;
    let r = parseInt(getComputedStyle(t).lineHeight);
    isNaN(r) || (n(r), a(Math.floor(t.clientHeight / r)))
  }, []), {
    ref: e,
    lineHeight: t,
    lineCount: r
  }
}