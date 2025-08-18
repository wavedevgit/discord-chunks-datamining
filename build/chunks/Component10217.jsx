/** Chunk was on 2668 **/
/** chunk id: 10217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk212605 = require("./212605.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk237617 = require("./237617.js"),
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

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = function(e) {
  var t, n, a;
  let {
    clip: o,
    exporting: s,
    actionsDisabled: c,
    isNew: p,
    onDelete: m,
    onEdit: j,
    onShare: v
  } = e, w = (0, u.Wu)([x.default], () => o.users.map(e => x.default.getUser(e)).filter(C.lm)), {
    analyticsLocations: N
  } = (0, g.ZP)(b.Z.CLIPS_GALLERY_ITEM), [Z, L] = l.useState(false), D = l.useRef(null), M = (0, y.Z)(null != (a = null == (t = o.editMetadata) ? true : t.start) ? a : 0), z = l.useRef(new d.sW(500, () => {
    var e;
    let t = D.current;
    null != t && t.paused && (t.currentTime = M.current, null == (e = D.current) || e.play())
  })), R = l.useCallback(() => {
    let e = D.current;
    null != e && (e.pause(), e.src = "")
  }, []), A = l.useCallback(() => {
    var e;
    L(true), null == (e = z.current) || e.delay()
  }, []), H = l.useCallback(() => {
    var e, t, n;
    L(false);
    let r = D.current;
    null == (e = z.current) || e.cancel(), null != r && (r.pause(), r.currentTime = null != (n = null == (t = o.editMetadata) ? true : t.start) ? n : 0)
  }, [null == (n = o.editMetadata) ? true : n.start]), V = l.useCallback(e => {
    var t, n;
    (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? true : t.parentElement) !== e.currentTarget.parentElement && H()
  }, [H]), B = new Date(P.default.extractTimestamp(o.id)), F = B.toLocaleDateString(), G = B.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), Y = "".concat(F, " • ").concat(G);
  return (0, r.jsx)(g.Gt, {
    value: N,
    children: (0, r.jsxs)(f.kL8, {
      "aria-disabled": c,
      "aria-label": S.intl.string(S.t.bt75u7),
      onClick: c ? true : () => {
        j(o), O.default.track(E.rMx.CLIP_GALLERY_CARD_CLICKED)
      },
      className: i()(k.clipItem, {
        [k.disabled]: c
      }),
      onBlur: V,
      onFocus: A,
      onMouseOver: A,
      onMouseLeave: H,
      children: [(0, r.jsx)(I, {
        clip: o,
        isNew: p,
        videoRef: D
      }), (0, r.jsxs)("div", {
        className: k.clipFooter,
        children: [(0, r.jsx)(T, {
          clip: o,
          focused: Z,
          onFocus: A
        }), (0, r.jsx)(f.Text, {
          className: k.clipMetadata,
          color: "text-default",
          variant: "text-md/medium",
          children: o.applicationName
        }), (0, r.jsx)(f.Text, {
          className: k.clipMetadata,
          color: "text-default",
          variant: "text-md/medium",
          children: Y
        }), (0, r.jsxs)("div", {
          className: k.usersAndDelete,
          children: [(0, r.jsx)(h.Z, {
            maxUsers: 4,
            users: w,
            onFocusOverflow: e => {
              var t, n, r, l;
              let a = e.relatedTarget,
                i = null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement) ? true : t.parentElement;
              (null == a ? true : a.parentElement) !== i && (null == a || null == (l = a.parentElement) || null == (r = l.parentElement) ? true : r.parentElement) !== i && A()
            },
            "aria-label": S.intl.string(S.t.WTozwc)
          }), Z && (0, r.jsx)(_, {
            clip: o,
            actionsDisabled: c,
            exporting: s,
            onBeforeDelete: R,
            onDelete: m,
            onEdit: j,
            onShare: v,
            onBlur: e => {
              var t;
              (null == (t = e.relatedTarget) ? true : t.parentElement) !== e.currentTarget.parentElement && H()
            }
          })]
        })]
      })]
    })
  })
};

function I(e) {
  let {
    clip: t,
    isNew: n,
    videoRef: a
  } = e, i = 0 === t.length, [o, c] = l.useMemo(() => {
    let e = t.length,
      n = false,
      r = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != r && 1e3 * r < t.length && (e = 1e3 * r, n = true), [n, s().duration(e)]
  }, [t.length, t.editMetadata]), u = "".concat(c.seconds()).padStart(2, "0");
  return (0, r.jsxs)("div", {
    className: k.clipThumbContainer,
    children: [(0, r.jsx)(M, {
      clip: t,
      videoRef: a
    }), (0, r.jsxs)("div", {
      className: k.clipBadges,
      children: [i && (0, r.jsx)("div", {
        className: k.clipProcessingBadge,
        children: (0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: S.intl.string(S.t["2Fp7OD"])
        })
      }), !i && n && (0, r.jsxs)(f.Text, {
        className: k.clipNewBadge,
        variant: "eyebrow",
        color: "always-white",
        children: [(0, r.jsx)(f.T$Z, {
          size: "md",
          color: "currentColor",
          className: k.newIcon
        }), S.intl.string(S.t.y2b7CA).toUpperCase()]
      }), !i && (0, r.jsxs)("div", {
        className: k.clipDurationBadge,
        children: [o ? (0, r.jsx)(v.Z, {
          className: k.clipDurationEditIcon
        }) : null, (0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: "".concat(c.minutes(), ":").concat(u)
        })]
      })]
    })]
  })
}

function T(e) {
  var t;
  let {
    clip: n,
    focused: a,
    onFocus: i
  } = e, [o, s] = l.useState(n.name), c = !n.name, [u, d] = l.useState(false), [m, b] = l.useState(null != (t = n.name) ? t : ""), [g, j] = l.useState(false), y = async () => {
    j(true), await (0, w.Tm)(n.id, {
      name: "" === m ? true : m
    }), j(false), d(false)
  };
  return (l.useEffect(() => {
    if (o !== n.name) {
      var e;
      s(n.name), b(null != (e = n.name) ? e : "")
    }
  }, [n.name, o]), u) ? (0, r.jsx)(f.oil, {
    onClick: e => e.stopPropagation(),
    value: m,
    autoFocus: true,
    onKeyDown: e => {
      "Enter" === e.key && y()
    },
    disabled: g,
    onChange: b,
    onBlur: y
  }) : (0, r.jsxs)(f.P3F, {
    className: k.clipTitleInputPlaceholder,
    onFocus: i,
    onClick: e => {
      e.stopPropagation(), d(true)
    },
    children: [c ? (0, r.jsx)(f.X6q, {
      className: k.clipTitle,
      color: "text-muted",
      variant: "heading-lg/medium",
      children: S.intl.string(S.t["x+/nmJ"])
    }) : (0, r.jsx)(f.X6q, {
      className: k.clipTitle,
      color: "text-default",
      variant: "heading-lg/medium",
      children: n.name
    }), a && (0, r.jsx)(f.vdY, {
      size: "custom",
      "aria-label": S.intl.string(S.t.bt75u7),
      color: f.TVs.colors.TEXT_MUTED,
      height: p.Z.sm,
      width: p.Z.sm,
      className: k.clipTitleIcon
    })]
  })
}

function M(e) {
  let {
    clip: t,
    videoRef: n
  } = e, l = (0, N.l)(t);
  return 0 === t.length ? (0, r.jsx)(f.$jN, {
    type: f.RAz.SPINNING_CIRCLE_SIMPLE,
    className: k.clipThumb
  }) : null != l ? (0, r.jsx)(j.Z, {
    preload: "metadata",
    muted: true,
    poster: t.thumbnail,
    src: l,
    loop: true,
    className: k.clipThumb,
    ref: n
  }) : (0, r.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: k.clipThumb
  })
}

function _(e) {
  let {
    clip: t,
    exporting: n,
    actionsDisabled: a,
    onBeforeDelete: i,
    onDelete: o,
    onEdit: s,
    onShare: u,
    onBlur: d
  } = e, p = (0, c.Z)(), b = l.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (i(), (0, w.sS)(t.filepath)) : o(t, i), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [o, i, t]), g = l.useCallback(e => {
    e.stopPropagation(), s(t), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [s, t]), j = l.useCallback(e => {
    e.stopPropagation(), u(t), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [u, t]);
  return (0, r.jsxs)("div", {
    className: k.buttonContainer,
    children: [null != o && (0, r.jsx)(f.ua7, {
      text: S.intl.string(S.t.oyYWHB),
      children: e => (0, r.jsx)(m.zx, L(Z({}, e), {
        disabled: a,
        color: p ? m.zx.Colors.RED : m.zx.Colors.PRIMARY,
        onClick: b,
        className: k.button,
        size: m.zx.Sizes.NONE,
        look: m.zx.Looks.FILLED,
        children: (0, r.jsx)(f.XHJ, {
          size: "md",
          color: "currentColor",
          className: k.miniIcon
        })
      }))
    }), (0, r.jsx)(f.ua7, {
      text: S.intl.string(S.t.bt75u7),
      children: e => (0, r.jsx)(m.zx, L(Z({}, e), {
        disabled: a,
        color: m.zx.Colors.PRIMARY,
        onClick: g,
        className: k.button,
        size: m.zx.Sizes.NONE,
        look: m.zx.Looks.FILLED,
        children: (0, r.jsx)(v.Z, {
          className: k.miniIcon
        })
      }))
    }), (0, r.jsx)(f.ua7, {
      text: S.intl.string(S.t.RDE0SU),
      children: e => {
        var {
          onBlur: t
        } = e, l = function(e, t) {
          if (null == e) return {};
          var n, r, l = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
          }
          return l
        }(e, ["onBlur"]);
        return (0, r.jsx)(m.zx, L(Z({}, l), {
          disabled: a && !n,
          submitting: n,
          color: m.zx.Colors.BRAND,
          onBlur: e => {
            d(e), null == t || t()
          },
          onClick: j,
          className: k.button,
          size: m.zx.Sizes.NONE,
          look: m.zx.Looks.FILLED,
          children: (0, r.jsx)(f.aAc, {
            size: "lg",
            color: "currentColor",
            className: k.miniIcon
          })
        }))
      }
    })]
  })
}