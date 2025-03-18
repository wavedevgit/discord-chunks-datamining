/** Chunk was on 35755 **/
n.d(t, {
  Z: () => _
}), n(47120), n(266796);
var i = n(200651),
  l = n(192379),
  r = n(120356),
  o = n.n(r),
  a = n(442837),
  s = n(481060),
  c = n(115130),
  u = n(147865),
  d = n(427996),
  p = n(906732),
  m = n(706302),
  f = n(812236),
  h = n(835473),
  v = n(70097),
  y = n(240991),
  b = n(973616),
  N = n(626135),
  g = n(783097),
  x = n(695676),
  j = n(520315),
  E = n(29380),
  P = n(783685),
  C = n(981631),
  O = n(388032),
  A = n(469249),
  I = n(509045);

function _(e) {
  let {
    context: t,
    application: n,
    videoUrl: r,
    imageCoverUrl: s,
    sectionName: u,
    hasCommands: p
  } = e, m = l.useMemo(() => {
    var e;
    return null !== (e = (0, g.jD)(n)) && void 0 !== e ? e : ""
  }, [n]), f = (0, a.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)), h = null != r, {
    isSlideReady: y
  } = (0, x.hH)(), [b, N] = l.useState(!1);
  return l.useEffect(() => {
    y && N(!0)
  }, [y]), (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsxs)("div", {
      children: [h ? (0, i.jsxs)("div", {
        className: A.videoContainer,
        children: [b ? (0, i.jsx)(v.Z, {
          className: o()(A.videoCover, A.video),
          loop: !0,
          muted: !0,
          autoPlay: !0,
          src: r,
          poster: s
        }) : null, (0, i.jsx)("img", {
          className: A.videoCover,
          src: s,
          "aria-label": O.NW.string(O.t.X4IxWF)
        })]
      }) : null, (0, i.jsxs)("div", {
        className: h ? A.overviewContainerWithVideo : A.overviewContainerNoVideo,
        children: [(0, i.jsx)(T, {
          application: n
        }), (0, i.jsx)(L, {
          application: n
        }), m.length > 0 ? (0, i.jsx)(w, {
          description: m
        }) : null, f ? (0, i.jsx)("div", {
          className: A.developerShelfControlsContainer,
          children: (0, i.jsx)(d.W, {
            hideSearch: !0,
            className: A.developerShelfControls
          })
        }) : null, (0, i.jsx)(R, {
          context: t,
          application: n,
          sectionName: u,
          isDeveloperOfThisApp: f,
          hasCommands: p
        })]
      })]
    }), (0, i.jsx)(S, {
      application: n
    })]
  })
}

function S(e) {
  let {
    application: t
  } = e, n = (0, g.Cb)(t), l = (0, g.Hu)(t);
  return n || l ? (0, i.jsxs)("div", {
    className: A.monetizationDisclosureContainerStyle,
    children: [n ? (0, i.jsxs)("div", {
      className: A.monetizationDisclosureStyle,
      children: [(0, i.jsx)(s.EOn, {
        size: "sm",
        color: s.TVs.colors.INTERACTIVE_MUTED
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: O.NW.string(O.t["8z5B2d"])
      })]
    }) : null, l ? (0, i.jsxs)("div", {
      className: A.monetizationDisclosureStyle,
      children: [(0, i.jsx)(s.uMN, {
        size: "sm",
        color: s.TVs.colors.INTERACTIVE_MUTED
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: O.NW.string(O.t["5khEk5"])
      })]
    }) : null]
  }) : null
}

function T(e) {
  var t;
  let {
    application: n
  } = e, l = (0, g.BQ)(n) ? n.name : null !== (t = (0, g.$d)(n)) && void 0 !== t ? t : "", r = (0, g.vJ)(n);
  return (0, i.jsxs)("div", {
    className: A.titleContainer,
    children: [(0, i.jsx)(s.X6q, {
      variant: "heading-xl/extrabold",
      lineClamp: 1,
      children: l
    }), r ? (0, i.jsx)("div", {
      className: A.partnerLabelContainer,
      children: (0, i.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: O.NW.string(O.t.LO4f0N)
      })
    }) : null]
  })
}

function L(e) {
  let {
    application: t
  } = e, n = l.useMemo(() => {
    var e;
    return (0, g.BQ)(t) && null !== (e = null == t ? void 0 : t.tags) && void 0 !== e ? e : []
  }, [t]);
  return (0, g.ye)(t) ? (0, i.jsxs)("div", {
    className: A.tagsContainer,
    children: [(0, i.jsx)(Z, {
      application: t
    }), n.map((e, t) => (0, i.jsx)("div", {
      className: A.tagContainer,
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
        children: e
      })
    }, e + t))]
  }) : null
}

function Z(e) {
  var t;
  let {
    application: n
  } = e;
  if (!(0, g.ye)(n)) return null;
  let l = null !== (t = (0, g.BQ)(n) ? n instanceof b.ZP ? n.maxParticipants : n.max_participants : 0) && void 0 !== t ? t : 0;
  return (0, i.jsxs)("div", {
    className: A.tagContainer,
    children: [(0, i.jsx)(s.BFJ, {
      size: "xs",
      color: s.TVs.colors.INTERACTIVE_NORMAL
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "interactive-normal",
      children: (0, u.lY)(l)
    })]
  })
}

function R(e) {
  var t;
  let {
    context: n,
    application: r,
    sectionName: o,
    hasCommands: a,
    isDeveloperOfThisApp: c
  } = e, u = (0, f.Fs)(n, r.id), d = (0, h.q)(r.id), v = null == d ? void 0 : null === (t = d.bot) || void 0 === t ? void 0 : t.id, y = (0, m.Z)({
    context: n,
    applicationId: r.id,
    botUserId: v
  }), {
    analyticsLocations: b
  } = (0, p.ZP)();
  if (l.useEffect(() => {
      if (!(0, g.BQ)(r) || !(0, g.ye)(r)) return;
      let e = setTimeout(() => {
        (null == u || null == v) && N.default.track(C.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
          application_id: r.id,
          is_primary_entry_point_command_non_null: null != u,
          is_bot_user_id_non_null: null != v,
          show_try_it_out_button: y
        })
      }, 2e3);
      return () => clearTimeout(e)
    }, [r, u, v, y]), !(0, g.BQ)(r) || !(0, g.ye)(r)) return null;
  let x = s.PhG.MAX;
  return null != u && null != v ? (0, i.jsxs)("div", {
    className: A.entrypointContainer,
    children: [(0, i.jsx)("div", {
      className: A.entryPointContainerFlexChild,
      children: (0, i.jsx)(E.Z, {
        context: n,
        application: r,
        sectionName: o,
        primaryEntryPointCommand: u,
        buttonSize: x
      })
    }), y && null != v ? (0, i.jsx)("div", {
      className: A.entryPointContainerFlexChild,
      children: (0, i.jsx)(P.Z, {
        botUserId: v,
        applicationId: r.id,
        buttonSize: x,
        analyticsLocations: b
      })
    }) : null]
  }) : c && !a && (0, g.ye)(r) ? (0, i.jsx)(s.Wn, {
    className: A.primaryEntryPointWarningMessage,
    messageType: s.QYI.WARNING,
    children: O.NW.format(O.t["s/3hjI"], {})
  }) : null
}

function w(e) {
  let {
    description: t
  } = e, [n, r] = l.useState(!0);
  l.useLayoutEffect(() => r(!1), []);
  let o = l.useMemo(() => (0, y.parseBioReact)(t), [t]),
    {
      ref: a,
      lineHeight: c,
      lineCount: u
    } = function() {
      let e = l.useRef(null),
        [t, n] = l.useState(null),
        [i, r] = l.useState(null);
      return l.useLayoutEffect(() => {
        let t = e.current;
        if (null === t || 0 === t.clientHeight) return;
        let i = parseInt(getComputedStyle(t).lineHeight);
        !isNaN(i) && (n(i), r(Math.floor(t.clientHeight / i)))
      }, []), {
        ref: e,
        lineHeight: t,
        lineCount: i
      }
    }(),
    d = l.useMemo(() => {
      if (null == c || null == u) return {
        key: 0
      };
      let e = c * u;
      return {
        key: 1,
        minHeightOverride: Math.min(e, +c),
        maxHeightOverride: e
      }
    }, [u, c]),
    {
      ref: p,
      isTransitioning: m,
      onTransitionEnd: f
    } = (0, j.Z)(function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i
        })
      }
      return e
    }({
      isExpanded: n
    }, d)),
    h = n || m;
  return (0, i.jsxs)("div", {
    className: A.descriptionContainer,
    children: [(0, i.jsx)("div", {
      ref: p,
      className: A.overflowHidden,
      onTransitionEnd: f,
      children: (0, i.jsx)(s.Text, {
        ref: a,
        className: I.markup,
        variant: "text-sm/medium",
        lineClamp: h ? void 0 : 1,
        style: {
          maxHeight: h ? void 0 : d.minHeightOverride
        },
        children: o
      })
    }), null != u && u > 1 ? (0, i.jsxs)(s.P3F, {
      className: A.expandableDescriptionClickable,
      onClick: () => r(e => !e),
      children: [(0, i.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "text-brand",
        children: h ? O.NW.string(O.t.u4YJ8v) : O.NW.string(O.t["N/tajI"])
      }), h ? (0, i.jsx)(s.u04, {
        size: "sm",
        color: s.TVs.colors.TEXT_BRAND
      }) : (0, i.jsx)(s.CJ0, {
        size: "sm",
        color: s.TVs.colors.TEXT_BRAND
      })]
    }) : null]
  })
}