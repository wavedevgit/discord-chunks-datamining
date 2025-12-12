/** Chunk was on 61342 **/
/** chunk id: 10217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk872175 = require("./872175.js"),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk962399 = require("./962399.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js"),
  Chunk367825 = require("./367825.jsx"),
  Chunk572720 = require("./572720.js"),
  Chunk930311 = require("./930311.js"),
  Chunk542055 = require("./542055.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk134351 = require("./134351.js");
let T = function(e) {
  var t, i, s, c, v;
  let {
    clip: y,
    actionsDisabled: x,
    isNew: S,
    onClick: E
  } = e, N = (0, u.Wu)([g.default], () => y.users.map(e => g.default.getUser(e)).filter(w.lm)), M = (0, u.e7)([h.Z], () => null != y.channelId ? h.Z.getChannel(y.channelId) : null), T = (0, u.e7)([j.Z], () => null != y.guildId ? j.Z.getGuild(y.guildId) : null), {
    analyticsLocations: V
  } = (0, b.ZP)(f.Z.CLIPS_GALLERY_ITEM), {
    selectedClipIds: U,
    toggleClipSelection: z,
    isMultiSelectMode: B
  } = r.useContext(D.U), [G, F] = r.useState(false), Y = r.useRef(null), K = (0, o.Z)(null != (v = null == (t = y.editMetadata) ? true : t.start) ? v : 0), q = U.has(y.id), X = y.type === I.NJ.SCREENSHOT, W = "" === y.applicationName && (null == M ? true : M.name) != null && "" !== M.name ? M.name : y.applicationName, J = (0, C.Xf)(new Date(P.default.extractTimestamp(y.id))), Q = r.useMemo(() => {
    let e = [];
    if (y.type === I.NJ.VOICE_CLIP)(null == T ? true : T.name) != null && e.push(T.name), (null == M ? true : M.name) != null && e.push(M.name);
    else {
      var t, n;
      "" !== W && null != W && e.push(W), (null == (t = y.activity) ? true : t.state) != null && "" !== y.activity.state && e.push(y.activity.state), (null == (n = y.activity) ? true : n.details) != null && "" !== y.activity.details && e.push(y.activity.details)
    }
    return e.join(" › ")
  }, [W, null == T ? true : T.name, null == M ? true : M.name, null == (i = y.activity) ? true : i.state, null == (s = y.activity) ? true : s.details, y.type]), $ = r.useCallback(() => {
    let e = Y.current;
    null != e && (e.pause(), e.src = "")
  }, []), ee = r.useCallback(() => {
    var e;
    if (true === X) return;
    let t = Y.current;
    null != t && t.paused && (t.currentTime = K.current, null == (e = Y.current) || e.play())
  }, [X, K]), et = r.useCallback(() => {
    var e, t;
    if (true === X) return;
    let n = Y.current;
    null != n && (n.pause(), n.currentTime = null != (t = null == (e = y.editMetadata) ? true : e.start) ? t : 0)
  }, [X, null == (c = y.editMetadata) ? true : c.start]), en = r.useCallback(e => {
    var t, n;
    (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? true : t.parentElement) !== e.currentTarget.parentElement && et()
  }, [et]), el = r.useCallback(() => {
    F(false)
  }, []), er = r.useCallback(e => {
    var t;
    F(true), null == (t = Y.current) || t.pause();
    let r = B && U.size > 0 ? k.Z.getClips().filter(e => U.has(e.id)) : [y];
    (0, m.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("32157"), n.e("56052")]).then(n.bind(n, 151090));
      return t => {
        var n, i;
        return (0, l.jsx)(e, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, t), i = i = {
          clips: r,
          actionsDisabled: x,
          showShareAndEdit: true,
          onShare: () => {
            O.default.track(Z.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
              type: "share"
            })
          },
          onEdit: () => {
            O.default.track(Z.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
              type: "edit"
            })
          },
          onBeforeDelete: $,
          onAfterDelete: () => {
            O.default.track(Z.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
              type: "delete"
            })
          }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    }, {
      onClose: el
    })
  }, [y, B, U, x, $, el]), ei = r.useCallback(e => {
    x || (e.preventDefault(), e.stopPropagation(), er(e))
  }, [x, er]), ea = r.useCallback(e => {
    x || (e.shiftKey ? (e.preventDefault(), z(y.id)) : B ? z(y.id) : null != E && E(y), O.default.track(Z.rMx.CLIP_GALLERY_CARD_CLICKED))
  }, [x, B, z, y, E]);
  return (0, l.jsx)(b.Gt, {
    value: V,
    children: (0, l.jsxs)(p.kL8, {
      "aria-disabled": x,
      "aria-label": L.intl.string(true === X ? L.t["HO/oXl"] : L.t.bt75uw),
      onClick: x ? true : ea,
      onContextMenu: ei,
      className: a()(H.clipItem, {
        [H.disabled]: x,
        [H.focused]: G,
        [H.selected]: q
      }),
      onBlur: en,
      onFocus: ee,
      onMouseOver: ee,
      onMouseLeave: et,
      children: [(0, l.jsx)(A, {
        clip: y,
        isNew: S,
        videoRef: Y,
        onOpenContextMenu: er,
        actionsDisabled: x
      }), (0, l.jsxs)("div", {
        className: H.clipMetadata,
        children: [(0, l.jsx)(_, {
          clip: y
        }), (0, l.jsxs)("div", {
          className: H.clipTextInfo,
          children: [(0, l.jsx)(R, {
            clip: y
          }), (0, l.jsx)(p.Text, {
            className: H.clipSubtitle,
            color: "text-subtle",
            variant: "text-sm/medium",
            children: Q
          }), (0, l.jsx)(p.Text, {
            className: H.clipSubtitle,
            color: "text-subtle",
            variant: "text-sm/normal",
            children: J
          })]
        }), (0, l.jsx)("div", {
          className: H.clipAvatars,
          children: (0, l.jsx)(d.Z, {
            maxUsers: 3,
            users: N,
            size: p.EFr.SIZE_24,
            onFocusOverflow: e => {
              var t, n, l, r;
              let i = e.relatedTarget,
                a = null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement) ? true : t.parentElement;
              (null == i ? true : i.parentElement) !== a && (null == i || null == (r = i.parentElement) || null == (l = r.parentElement) ? true : l.parentElement) !== a && ee()
            },
            "aria-label": L.intl.string(L.t.WTozwe)
          })
        })]
      })]
    })
  })
};

function A(e) {
  let {
    clip: t,
    isNew: n,
    videoRef: i,
    onOpenContextMenu: a,
    actionsDisabled: s
  } = e, o = 0 === t.length, u = true === t.pending, [d, m] = r.useState(0);
  r.useEffect(() => {
    let e = i.current;
    if (null == e || o) return;
    let n = null,
      l = () => {
        var r, i, a, s;
        if (e.paused || e.ended) {
          n = null, m(0);
          return
        }
        let c = null != (a = null == (r = t.editMetadata) ? true : r.start) ? a : 0,
          o = null != (s = null == (i = t.editMetadata) ? true : i.end) ? s : e.duration,
          u = (e.currentTime - c) / (o - c) * 100;
        m(isNaN(u) ? 0 : Math.max(0, Math.min(100, u))), n = requestAnimationFrame(l)
      },
      r = () => {
        null == n && (n = requestAnimationFrame(l))
      },
      a = () => {
        null != n && (cancelAnimationFrame(n), n = null, m(0))
      };
    return e.addEventListener("play", r), e.addEventListener("pause", a), e.addEventListener("ended", a), e.paused || r(), () => {
      null != n && (cancelAnimationFrame(n), m(0)), e.removeEventListener("play", r), e.removeEventListener("pause", a), e.removeEventListener("ended", a)
    }
  }, [i, o, t.editMetadata]);
  let {
    durationDisplay: f,
    isClipEdited: b
  } = r.useMemo(() => {
    let e = t.length,
      n = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
      l = false;
    if (null != t.editMetadata) {
      let r = null != n && 1e3 * n < t.length,
        i = false === t.editMetadata.applicationAudio || false === t.editMetadata.voiceAudio || false === t.editMetadata.soundboardAudio;
      l = r || i, null != n && 1e3 * n < t.length && (e = 1e3 * n)
    }
    let r = c().duration(e),
      i = r.minutes(),
      a = r.seconds();
    return 0 === i ? {
      durationDisplay: "".concat(a, "s"),
      isClipEdited: l
    } : {
      durationDisplay: "".concat(i, ":").concat(a.toString().padStart(2, "0")),
      isClipEdited: l
    }
  }, [t.length, t.editMetadata]), v = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), S.Pr(t)
  }, [t]), y = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), s || a(e)
  }, [s, a]);
  return (0, l.jsxs)("div", {
    className: H.clipThumbContainer,
    children: [(0, l.jsx)("div", {
      className: H.clipThumbOverlay
    }), !s && (0, l.jsxs)("div", {
      className: H.clipHoverButtons,
      children: [(0, l.jsx)(p.hU, {
        onClick: v,
        icon: t.isFavorite ? p.h_8 : p.Pzh,
        "aria-label": L.intl.string(L.t.k8fFjp),
        variant: "overlay-secondary",
        size: "sm"
      }), (0, l.jsx)(p.hU, {
        onClick: y,
        icon: p.Huf,
        "aria-label": L.intl.string(L.t["UKOtz+"]),
        variant: "overlay-secondary",
        size: "sm"
      })]
    }), (0, l.jsx)(V, {
      clip: t,
      videoRef: i
    }), !o && d > 0 && (0, l.jsx)("div", {
      className: H.clipProgressBar,
      children: (0, l.jsx)("div", {
        className: H.clipProgressFill,
        style: {
          width: "".concat(d, "%")
        }
      })
    }), "auto" === t.clipMethod && (0, l.jsxs)("div", {
      className: H.clipTemporaryBadge,
      children: [t.isTemporary && (0, l.jsx)(p.T39, {
        size: "sm",
        color: "currentColor"
      }), (0, l.jsx)(p.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: L.intl.string(L.t["3Y2DJ8"])
      })]
    }), (n || !o) && (0, l.jsxs)("div", {
      className: H.clipBadge,
      children: [!u && n && (0, l.jsx)(p.IGR, {
        text: L.intl.string(L.t.y2b7CA)
      }), !o && (0, l.jsxs)(l.Fragment, {
        children: [b && (0, l.jsx)(x.Z, {
          color: "white",
          width: 16,
          height: 16
        }), (0, l.jsx)("span", {
          children: (0, l.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            tabularNumbers: true,
            children: u ? L.intl.string(L.t["2Fp7OP"]) : f
          })
        })]
      })]
    })]
  })
}

function R(e) {
  let {
    clip: t
  } = e, n = (0, M.q)(t), r = "" !== n;
  return (0, l.jsx)(p.Text, {
    className: H.clipTitle,
    variant: "text-md/normal",
    color: r ? "text-subtle" : "text-default",
    children: r ? n : t.name
  })
}

function V(e) {
  let {
    clip: t,
    videoRef: n
  } = e, r = (0, N.l)(t), i = t.type === I.NJ.SCREENSHOT;
  return t.type === I.NJ.VOICE_CLIP ? (0, l.jsx)(E.Z, {
    className: H.clipThumb
  }) : i ? (0, l.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: H.clipThumb
  }) : null != r ? (0, l.jsx)(y.Z, {
    preload: "metadata",
    poster: t.thumbnail,
    muted: true,
    src: r,
    loop: true,
    className: H.clipThumb,
    ref: n
  }) : "" !== t.thumbnail ? (0, l.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: H.clipThumb
  }) : (0, l.jsx)("div", {
    className: a()(H.clipThumb, H.clipThumbEmpty),
    children: (0, l.jsx)(p.Roe, {
      size: "custom",
      width: 64,
      height: 64
    })
  })
}

function _(e) {
  let {
    clip: t
  } = e, n = (0, u.e7)([v.Z], () => null != t.applicationId ? v.Z.getApplication(t.applicationId) : null), r = null == n ? true : n.getIconURL(32);
  return (0, l.jsx)("div", {
    className: H.clipIcon,
    "aria-hidden": "true",
    children: null != r ? (0, l.jsx)("img", {
      src: r,
      alt: "",
      className: H.clipIconImage
    }) : t.type === I.NJ.VOICE_CLIP ? (0, l.jsx)(p.gj8, {
      size: "sm",
      color: "currentColor"
    }) : (0, l.jsx)(p.pzj, {
      size: "sm",
      color: "currentColor"
    })
  })
}