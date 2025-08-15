/** Chunk was on web.js **/
/** chunk id: 675993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk115130 = require("./115130.js"),
  Chunk147865 = require("./147865.js"),
  Chunk427996 = require("./427996.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk706302 = require("./706302.js"),
  Chunk812236 = require("./812236.js"),
  Chunk835473 = require("./835473.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk240991 = require("./240991.js"),
  Chunk973616 = require("./973616.js"),
  Chunk626135 = require("./626135.js"),
  Chunk783097 = require("./783097.js"),
  Chunk695676 = require("./695676.js"),
  Chunk520315 = require("./520315.js"),
  Chunk29380 = require("./29380.jsx"),
  Chunk783685 = require("./783685.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk208733 = require("./208733.js"),
  Chunk430864 = require("./430864.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}
let w = 2,
  D = 2e3;

function L(e) {
  let {
    context: t,
    application: n,
    videoUrl: o,
    imageCoverUrl: l,
    sectionName: u,
    hasCommands: f
  } = e, _ = i.useMemo(() => {
    var e;
    return null != (e = (0, y.jD)(n)) ? e : ""
  }, [n]), p = (0, s.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)), {
    isSlideReady: h
  } = (0, O.hH)(), [g, E] = i.useState(false);
  i.useEffect(() => {
    h && E(true)
  }, [h]);
  let b = null != o;
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsxs)("div", {
      children: [b ? (0, r.jsxs)("div", {
        className: N.videoContainer,
        children: [g ? (0, r.jsx)(m.Z, {
          className: a()(N.videoCover, N.video),
          loop: true,
          muted: true,
          autoPlay: true,
          src: o,
          poster: l
        }) : null, (0, r.jsx)("img", {
          className: N.videoCover,
          src: l,
          "aria-label": A.intl.string(A.t.X4IxWF)
        })]
      }) : null, (0, r.jsxs)("div", {
        className: b ? N.overviewContainerWithVideo : N.overviewContainerNoVideo,
        children: [(0, r.jsx)(M, {
          application: n
        }), (0, r.jsx)(j, {
          application: n
        }), _.length > 0 ? (0, r.jsx)(G, {
          description: _
        }) : null, p ? (0, r.jsx)("div", {
          className: N.developerShelfControlsContainer,
          children: (0, r.jsx)(d.W, {
            hideSearch: true,
            className: N.developerShelfControls
          })
        }) : null, (0, r.jsx)(U, {
          context: t,
          application: n,
          sectionName: u,
          isDeveloperOfThisApp: p,
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
  } = e, n = (0, y.Cb)(t), i = (0, y.Hu)(t);
  return n || i ? (0, r.jsxs)("div", {
    className: N.monetizationDisclosureContainerStyle,
    children: [n ? (0, r.jsxs)("div", {
      className: N.monetizationDisclosureStyle,
      children: [(0, r.jsx)(l.EOn, {
        size: "sm",
        color: l.TVs.colors.INTERACTIVE_MUTED
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: A.intl.string(A.t["8z5B2d"])
      })]
    }) : null, i ? (0, r.jsxs)("div", {
      className: N.monetizationDisclosureStyle,
      children: [(0, r.jsx)(l.uMN, {
        size: "sm",
        color: l.TVs.colors.INTERACTIVE_MUTED
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: A.intl.string(A.t["5khEk5"])
      })]
    }) : null]
  }) : null
}

function M(e) {
  var t;
  let {
    application: n
  } = e, i = (0, y.BQ)(n) ? n.name : null != (t = (0, y.$d)(n)) ? t : "", o = (0, y.vJ)(n);
  return (0, r.jsxs)("div", {
    className: N.titleContainer,
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-xl/extrabold",
      lineClamp: 1,
      children: i
    }), o ? (0, r.jsx)("div", {
      className: N.partnerLabelContainer,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: A.intl.string(A.t.LO4f0N)
      })
    }) : null]
  })
}

function j(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => {
    var e;
    return (0, y.BQ)(t) && null != (e = null == t ? true : t.tags) ? e : []
  }, [t]);
  return (0, y.ye)(t) ? (0, r.jsxs)("div", {
    className: N.tagsContainer,
    children: [(0, r.jsx)(k, {
      application: t
    }), n.map((e, t) => (0, r.jsx)("div", {
      className: N.tagContainer,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
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
  if (!(0, y.ye)(n)) return null;
  let i = null != (t = (0, y.BQ)(n) ? n instanceof E.ZP ? n.maxParticipants : n.max_participants : 0) ? t : 0;
  return (0, r.jsxs)("div", {
    className: N.tagContainer,
    children: [(0, r.jsx)(l.BFJ, {
      size: "xs",
      color: l.TVs.colors.INTERACTIVE_NORMAL
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "interactive-normal",
      children: (0, u.lY)(i)
    })]
  })
}

function U(e) {
  var t;
  let {
    context: n,
    application: o,
    sectionName: a,
    hasCommands: s,
    isDeveloperOfThisApp: c
  } = e, u = (0, p.Fs)(n, o.id), d = (0, h.q)(o.id), m = null == d || null == (t = d.bot) ? true : t.id, g = (0, _.Z)({
    context: n,
    application: o,
    botUserId: m
  }), {
    analyticsLocations: E
  } = (0, f.ZP)();
  return (i.useEffect(() => {
    if (!(0, y.BQ)(o) || !(0, y.ye)(o)) return;
    let e = setTimeout(() => {
      (null == u || null == m) && b.default.track(S.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
        application_id: o.id,
        is_primary_entry_point_command_non_null: null != u,
        is_bot_user_id_non_null: null != m,
        show_try_it_out_button: g
      })
    }, D);
    return () => clearTimeout(e)
  }, [o, u, m, g]), (0, y.BQ)(o) && (0, y.ye)(o)) ? null != u && null != m ? (0, r.jsxs)(l.hE2, {
    fullWidth: true,
    children: [(0, r.jsx)(I.Z, {
      context: n,
      application: o,
      sectionName: a,
      primaryEntryPointCommand: u
    }), g && null != m ? (0, r.jsx)(T.Z, {
      botUserId: m,
      applicationId: o.id,
      analyticsLocations: E
    }) : null]
  }) : c && !s && (0, y.ye)(o) ? (0, r.jsx)(l.Wn, {
    className: N.primaryEntryPointWarningMessage,
    messageType: l.QYI.WARNING,
    children: A.intl.format(A.t["s/3hjI"], {})
  }) : null : null
}

function G(e) {
  let {
    description: t
  } = e, [n, o] = i.useState(true);
  i.useLayoutEffect(() => o(false), []);
  let a = i.useMemo(() => (0, g.parseBioReact)(t), [t]),
    {
      ref: s,
      lineHeight: c,
      lineCount: u
    } = B(),
    d = i.useMemo(() => {
      if (null == c || null == u) return {
        key: 0
      };
      let e = c * u;
      return {
        key: 1,
        minHeightOverride: Math.min(e, w * c),
        maxHeightOverride: e
      }
    }, [u, c]),
    {
      ref: f,
      isTransitioning: _,
      onTransitionEnd: p
    } = (0, v.Z)(P({
      isExpanded: n
    }, d)),
    h = n || _;
  return (0, r.jsxs)("div", {
    className: N.descriptionContainer,
    children: [(0, r.jsx)("div", {
      ref: f,
      className: N.overflowHidden,
      onTransitionEnd: p,
      children: (0, r.jsx)(l.Text, {
        ref: s,
        className: C.markup,
        variant: "text-sm/medium",
        lineClamp: h ? true : w,
        style: {
          maxHeight: h ? true : d.minHeightOverride
        },
        children: a
      })
    }), null != u && u > w ? (0, r.jsxs)(l.P3F, {
      className: N.expandableDescriptionClickable,
      onClick: () => o(e => !e),
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-brand",
        children: h ? A.intl.string(A.t.u4YJ8v) : A.intl.string(A.t["N/tajI"])
      }), h ? (0, r.jsx)(l.u04, {
        size: "sm",
        color: l.TVs.colors.TEXT_BRAND
      }) : (0, r.jsx)(l.CJ0, {
        size: "sm",
        color: l.TVs.colors.TEXT_BRAND
      })]
    }) : null]
  })
}

function B() {
  let e = Chunk73800.useRef(null),
    [t, n] = Chunk73800.useState(null),
    [r, o] = Chunk73800.useState(null);
  return Chunk73800.useLayoutEffect(() => {
    let t = module.current;
    if (null === exports || 0 === exports.clientHeight) return;
    let r = parseInt(getComputedStyle(exports).lineHeight);
    isNaN(Chunk255367) || (require(Chunk255367), Chunk120356(Math.floor(exports.clientHeight / Chunk255367)))
  }, []), {
    ref: module,
    lineHeight: exports,
    lineCount: Chunk255367
  }
}