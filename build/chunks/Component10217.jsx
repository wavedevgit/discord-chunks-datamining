/** Chunk was on 57478 **/
/** chunk id: 10217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk872175 = require("./872175.js"),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk212605 = require("./212605.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk318374 = require("./318374.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk962399 = require("./962399.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk39604 = require("./39604.js"),
  Chunk572720 = require("./572720.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk134351 = require("./134351.js");
let S = function(e) {
  var t, n, r;
  let {
    clip: o,
    exporting: s,
    actionsDisabled: u,
    isNew: m,
    onDelete: f,
    onEdit: g,
    onShare: j
  } = e, v = (0, d.Wu)([_.default], () => o.users.map(e => _.default.getUser(e)).filter(O.lm)), {
    analyticsLocations: w
  } = (0, x.ZP)(h.Z.CLIPS_GALLERY_ITEM), [N, S] = a.useState(false), D = a.useRef(null), M = (0, c.Z)(null != (r = null == (t = o.editMetadata) ? true : t.start) ? r : 0), R = a.useRef(new p.sW(500, () => {
    var e;
    let t = D.current;
    null != t && t.paused && (t.currentTime = M.current, null == (e = D.current) || e.play())
  })), H = a.useCallback(() => {
    let e = D.current;
    null != e && (e.pause(), e.src = "")
  }, []), A = a.useCallback(() => {
    var e;
    S(true), null == (e = R.current) || e.delay()
  }, []), z = a.useCallback(() => {
    var e, t, n;
    S(false);
    let l = D.current;
    null == (e = R.current) || e.cancel(), null != l && (l.pause(), l.currentTime = null != (n = null == (t = o.editMetadata) ? true : t.start) ? n : 0)
  }, [null == (n = o.editMetadata) ? true : n.start]), B = a.useCallback(e => {
    var t, n;
    (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? true : t.parentElement) !== e.currentTarget.parentElement && z()
  }, [z]), V = new Date(P.default.extractTimestamp(o.id)), F = V.toLocaleDateString(), G = V.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), K = "".concat(F, " • ").concat(G);
  return (0, l.jsx)(x.Gt, {
    value: w,
    children: (0, l.jsxs)(b.kL8, {
      "aria-disabled": u,
      "aria-label": E.intl.string(E.t.bt75u7),
      onClick: u ? true : () => {
        g(o), C.default.track(T.rMx.CLIP_GALLERY_CARD_CLICKED)
      },
      className: i()(I.clipItem, {
        [I.disabled]: u
      }),
      onBlur: B,
      onFocus: A,
      onMouseOver: A,
      onMouseLeave: z,
      children: [(0, l.jsx)(k, {
        clip: o,
        isNew: m,
        videoRef: D
      }), (0, l.jsxs)("div", {
        className: I.clipFooter,
        children: [(0, l.jsx)(Z, {
          clip: o,
          focused: N,
          onFocus: A
        }), (0, l.jsx)(b.Text, {
          className: I.clipMetadata,
          color: "text-default",
          variant: "text-md/medium",
          children: o.applicationName
        }), (0, l.jsx)(b.Text, {
          className: I.clipMetadata,
          color: "text-default",
          variant: "text-md/medium",
          children: K
        }), (0, l.jsxs)("div", {
          className: I.usersAndDelete,
          children: [(0, l.jsx)(y.Z, {
            maxUsers: 4,
            users: v,
            onFocusOverflow: e => {
              var t, n, l, a;
              let r = e.relatedTarget,
                i = null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement) ? true : t.parentElement;
              (null == r ? true : r.parentElement) !== i && (null == r || null == (a = r.parentElement) || null == (l = a.parentElement) ? true : l.parentElement) !== i && A()
            },
            "aria-label": E.intl.string(E.t.WTozwc)
          }), N && (0, l.jsx)(L, {
            clip: o,
            actionsDisabled: u,
            exporting: s,
            onBeforeDelete: H,
            onDelete: f,
            onEdit: g,
            onShare: j,
            onBlur: e => {
              var t;
              (null == (t = e.relatedTarget) ? true : t.parentElement) !== e.currentTarget.parentElement && z()
            }
          })]
        })]
      })]
    })
  })
};

function k(e) {
  let {
    clip: t,
    isNew: n,
    videoRef: r
  } = e, i = 0 === t.length, [o, c] = a.useMemo(() => {
    let e = t.length,
      n = false,
      l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != l && 1e3 * l < t.length && (e = 1e3 * l, n = true), [n, s().duration(e)]
  }, [t.length, t.editMetadata]), u = "".concat(c.seconds()).padStart(2, "0");
  return (0, l.jsxs)("div", {
    className: I.clipThumbContainer,
    children: [(0, l.jsx)(D, {
      clip: t,
      videoRef: r
    }), (0, l.jsxs)("div", {
      className: I.clipBadges,
      children: [i && (0, l.jsx)("div", {
        className: I.clipProcessingBadge,
        children: (0, l.jsx)(b.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: E.intl.string(E.t["2Fp7OD"])
        })
      }), !i && n && (0, l.jsxs)(b.Text, {
        className: I.clipNewBadge,
        variant: "eyebrow",
        color: "always-white",
        children: [(0, l.jsx)(b.T$Z, {
          size: "md",
          color: "currentColor",
          className: I.newIcon
        }), E.intl.string(E.t.y2b7CA).toUpperCase()]
      }), !i && (0, l.jsxs)("div", {
        className: I.clipDurationBadge,
        children: [o ? (0, l.jsx)(v.Z, {
          className: I.clipDurationEditIcon
        }) : null, (0, l.jsx)(b.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: "".concat(c.minutes(), ":").concat(u)
        })]
      })]
    })]
  })
}

function Z(e) {
  var t;
  let {
    clip: n,
    focused: r,
    onFocus: i
  } = e, [o, s] = a.useState(n.name), c = !n.name, [u, d] = a.useState(false), [p, f] = a.useState(null != (t = n.name) ? t : ""), [g, h] = a.useState(false), x = async () => {
    h(true), await (0, w.Tm)(n.id, {
      name: "" === p ? true : p
    }), h(false), d(false)
  };
  return (a.useEffect(() => {
    if (o !== n.name) {
      var e;
      s(n.name), f(null != (e = n.name) ? e : "")
    }
  }, [n.name, o]), u) ? (0, l.jsx)(b.oil, {
    onClick: e => e.stopPropagation(),
    value: p,
    autoFocus: true,
    onKeyDown: e => {
      "Enter" === e.key && x()
    },
    disabled: g,
    onChange: f,
    onBlur: x
  }) : (0, l.jsxs)(b.P3F, {
    className: I.clipTitleInputPlaceholder,
    onFocus: i,
    onClick: e => {
      e.stopPropagation(), d(true)
    },
    children: [c ? (0, l.jsx)(b.Heading, {
      className: I.clipTitle,
      color: "text-muted",
      variant: "heading-lg/medium",
      children: E.intl.string(E.t["x+/nmJ"])
    }) : (0, l.jsx)(b.Heading, {
      className: I.clipTitle,
      color: "text-default",
      variant: "heading-lg/medium",
      children: n.name
    }), r && (0, l.jsx)(b.vdY, {
      size: "custom",
      "aria-label": E.intl.string(E.t.bt75u7),
      color: b.TVs.colors.TEXT_MUTED,
      height: m.Z.sm,
      width: m.Z.sm,
      className: I.clipTitleIcon
    })]
  })
}

function D(e) {
  let {
    clip: t,
    videoRef: n
  } = e, a = (0, N.l)(t);
  return 0 === t.length ? (0, l.jsx)(b.$jN, {
    type: b.RAz.SPINNING_CIRCLE_SIMPLE,
    className: I.clipThumb
  }) : null != a ? (0, l.jsx)(j.Z, {
    preload: "metadata",
    muted: true,
    poster: t.thumbnail,
    src: a,
    loop: true,
    className: I.clipThumb,
    ref: n
  }) : (0, l.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: I.clipThumb
  })
}

function L(e) {
  let {
    clip: t,
    exporting: n,
    actionsDisabled: r,
    onBeforeDelete: i,
    onDelete: o,
    onEdit: s,
    onShare: c,
    onBlur: d
  } = e, p = (0, u.Z)(), m = a.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (i(), (0, w.sS)(t.filepath)) : o(t, i), C.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [o, i, t]), h = a.useCallback(e => {
    e.stopPropagation(), s(t), C.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [s, t]), x = a.useCallback(e => {
    e.stopPropagation(), c(t), C.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [c, t]);
  return (0, l.jsxs)("div", {
    className: I.buttonContainer,
    children: [null != o && (0, l.jsx)(f.u, {
      text: E.intl.string(E.t.oyYWHB),
      children: (0, l.jsx)(g.zx, {
        disabled: r,
        color: p ? g.zx.Colors.RED : g.zx.Colors.PRIMARY,
        onClick: m,
        className: I.button,
        size: g.zx.Sizes.NONE,
        look: g.zx.Looks.FILLED,
        children: (0, l.jsx)(b.XHJ, {
          size: "md",
          color: "currentColor",
          className: I.miniIcon
        })
      })
    }), (0, l.jsx)(f.u, {
      text: E.intl.string(E.t.bt75u7),
      children: (0, l.jsx)(g.zx, {
        disabled: r,
        color: g.zx.Colors.PRIMARY,
        onClick: h,
        className: I.button,
        size: g.zx.Sizes.NONE,
        look: g.zx.Looks.FILLED,
        children: (0, l.jsx)(v.Z, {
          className: I.miniIcon
        })
      })
    }), (0, l.jsx)(f.u, {
      text: E.intl.string(E.t.RDE0SU),
      children: (0, l.jsx)(g.zx, {
        disabled: r && !n,
        submitting: n,
        color: g.zx.Colors.BRAND,
        onBlur: e => {
          d(e)
        },
        onClick: x,
        className: I.button,
        size: g.zx.Sizes.NONE,
        look: g.zx.Looks.FILLED,
        children: (0, l.jsx)(b.aAc, {
          size: "lg",
          color: "currentColor",
          className: I.miniIcon
        })
      })
    })]
  })
}