/** Chunk was on 4918 **/
/** chunk id: 555957, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk66455 = require("./66455.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk549685 = require("./549685.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk405269 = require("./405269.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk399925 = require("./399925.js"),
  Chunk226421 = require("./226421.jsx"),
  Chunk665039 = require("./665039.js"),
  Chunk718812 = require("./718812.js"),
  Chunk543428 = require("./543428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk746869 = require("./746869.js");
let T = function(e) {
  var t, i, s, c, b;
  let {
    clip: v,
    actionsDisabled: O,
    isNew: I,
    onClick: S
  } = e, N = (0, u.yK)([g.default], () => v.users.map(e => g.default.getUser(e)).filter(w.Vq)), k = (0, u.bG)([j.A], () => null != v.channelId ? j.A.getChannel(v.channelId) : null), T = (0, u.bG)([h.A], () => null != v.guildId ? h.A.getGuild(v.guildId) : null), {
    analyticsLocations: G
  } = (0, y.Ay)(f.A.CLIPS_GALLERY_ITEM), {
    selectedClipIds: K,
    toggleClipSelection: z,
    isMultiSelectMode: U
  } = r.useContext(D.$), [F, Y] = r.useState(false), B = r.useRef(null), Q = (0, o.A)(null != (t = null == (i = v.editMetadata) ? true : i.start) ? t : 0), X = K.has(v.id), q = v.type === E.nQ.SCREENSHOT, Z = "" === v.applicationName && (null == k ? true : k.name) != null && "" !== k.name ? k.name : v.applicationName, W = (0, C.Fe)(new Date(P.default.extractTimestamp(v.id))), $ = r.useMemo(() => {
    let e = [];
    if (v.type === E.nQ.VOICE_CLIP)(null == T ? true : T.name) != null && e.push(T.name), (null == k ? true : k.name) != null && e.push(k.name);
    else {
      var t, l;
      "" !== Z && null != Z && e.push(Z), (null == (t = v.activity) ? true : t.state) != null && "" !== v.activity.state && e.push(v.activity.state), (null == (l = v.activity) ? true : l.details) != null && "" !== v.activity.details && e.push(v.activity.details)
    }
    return e.join(" › ")
  }, [Z, null == T ? true : T.name, null == k ? true : k.name, null == (s = v.activity) ? true : s.state, null == (c = v.activity) ? true : c.details, v.type]), J = r.useCallback(() => {
    let e = B.current;
    null != e && (e.pause(), e.src = "")
  }, []), ee = r.useCallback(() => {
    var e;
    if (true === q) return;
    let t = B.current;
    null != t && t.paused && (t.currentTime = Q.current, null == (e = B.current) || e.play())
  }, [q, Q]), et = r.useCallback(() => {
    var e, t;
    if (true === q) return;
    let l = B.current;
    null != l && (l.pause(), l.currentTime = null != (e = null == (t = v.editMetadata) ? true : t.start) ? e : 0)
  }, [q, null == (b = v.editMetadata) ? true : b.start]), el = r.useCallback(e => {
    var t, l;
    (null == (l = e.relatedTarget) || null == (t = l.parentElement) ? true : t.parentElement) !== e.currentTarget.parentElement && et()
  }, [et]), en = r.useCallback(() => {
    Y(false)
  }, []), er = r.useCallback(e => {
    var t;
    Y(true), null == (t = B.current) || t.pause();
    let r = U && K.size > 0 ? A.A.getClips().filter(e => K.has(e.id)) : [v];
    (0, m.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([l.e("80628"), l.e("80559")]).then(l.bind(l, 183903));
      return t => {
        var l, i;
        return (0, n.jsx)(e, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(l);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
              return Object.getOwnPropertyDescriptor(l, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = l[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, t), i = i = {
          clips: r,
          actionsDisabled: O,
          showShareAndEdit: true,
          onShare: () => {
            x.default.track(M.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
              type: "share"
            })
          },
          onEdit: () => {
            x.default.track(M.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
              type: "edit"
            })
          },
          onBeforeDelete: J,
          onAfterDelete: () => {
            x.default.track(M.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
              type: "delete"
            })
          }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var l = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            l.push.apply(l, n)
          }
          return l
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      onClose: en
    })
  }, [v, U, K, O, J, en]), ei = r.useCallback(e => {
    O || (e.preventDefault(), e.stopPropagation(), er(e))
  }, [O, er]), ea = r.useCallback(e => {
    O || (e.shiftKey ? (e.preventDefault(), z(v.id)) : U ? z(v.id) : null != S && S(v), x.default.track(M.HAw.CLIP_GALLERY_CARD_CLICKED))
  }, [O, U, z, v, S]);
  return (0, n.jsx)(y.f5, {
    value: G,
    children: (0, n.jsxs)(p.sqX, {
      "aria-disabled": O,
      "aria-label": L.intl.string(true === q ? L.t["HO/oXl"] : L.t.bt75uw),
      onClick: O ? true : ea,
      onContextMenu: ei,
      className: a()(H.QN, {
        [H.r9]: O,
        [H.in]: F,
        [H.wH]: X
      }),
      onBlur: el,
      onFocus: ee,
      onMouseOver: ee,
      onMouseLeave: et,
      children: [(0, n.jsx)(R, {
        clip: v,
        isNew: I,
        videoRef: B,
        onOpenContextMenu: er,
        actionsDisabled: O
      }), (0, n.jsxs)("div", {
        className: H.wI,
        children: [(0, n.jsx)(_, {
          clip: v
        }), (0, n.jsxs)("div", {
          className: H.i0,
          children: [(0, n.jsx)(V, {
            clip: v
          }), (0, n.jsx)(p.Text, {
            className: H.xD,
            color: "text-subtle",
            variant: "text-sm/medium",
            children: $
          }), (0, n.jsx)(p.Text, {
            className: H.xD,
            color: "text-subtle",
            variant: "text-sm/normal",
            children: W
          })]
        }), (0, n.jsx)("div", {
          className: H.jW,
          children: (0, n.jsx)(d.A, {
            maxUsers: 3,
            users: N,
            size: p._3J.SIZE_24,
            onFocusOverflow: e => {
              var t, l, n, r;
              let i = e.relatedTarget,
                a = null == (l = e.currentTarget.parentElement) || null == (t = l.parentElement) ? true : t.parentElement;
              (null == i ? true : i.parentElement) === a || (null == i || null == (r = i.parentElement) || null == (n = r.parentElement) ? true : n.parentElement) !== a && ee()
            },
            "aria-label": L.intl.string(L.t.WTozwe)
          })
        })]
      })]
    })
  })
};

function R(e) {
  let {
    clip: t,
    isNew: l,
    videoRef: i,
    onOpenContextMenu: a,
    actionsDisabled: s
  } = e, o = 0 === t.length, u = true === t.pending, [d, m] = r.useState(0);
  r.useEffect(() => {
    let e = i.current;
    if (null == e || o) return;
    let l = null,
      n = () => {
        var r, i, a, s;
        if (e.paused || e.ended) {
          l = null, m(0);
          return
        }
        let c = null != (r = null == (a = t.editMetadata) ? true : a.start) ? r : 0,
          o = null != (i = null == (s = t.editMetadata) ? true : s.end) ? i : e.duration,
          u = (e.currentTime - c) / (o - c) * 100;
        m(isNaN(u) ? 0 : Math.max(0, Math.min(100, u))), l = requestAnimationFrame(n)
      },
      r = () => {
        null == l && (l = requestAnimationFrame(n))
      },
      a = () => {
        null != l && (cancelAnimationFrame(l), l = null, m(0))
      };
    return e.addEventListener("play", r), e.addEventListener("pause", a), e.addEventListener("ended", a), e.paused || r(), () => {
      null != l && (cancelAnimationFrame(l), m(0)), e.removeEventListener("play", r), e.removeEventListener("pause", a), e.removeEventListener("ended", a)
    }
  }, [i, o, t.editMetadata]);
  let {
    durationDisplay: f,
    isClipEdited: y
  } = r.useMemo(() => {
    let e = t.length,
      l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
      n = false;
    if (null != t.editMetadata) {
      let r = null != l && 1e3 * l < t.length,
        i = false === t.editMetadata.applicationAudio || false === t.editMetadata.voiceAudio || false === t.editMetadata.soundboardAudio;
      n = r || i, null != l && 1e3 * l < t.length && (e = 1e3 * l)
    }
    let r = c().duration(e),
      i = r.minutes(),
      a = r.seconds();
    return 0 === i ? {
      durationDisplay: "".concat(a, "s"),
      isClipEdited: n
    } : {
      durationDisplay: "".concat(i, ":").concat(a.toString().padStart(2, "0")),
      isClipEdited: n
    }
  }, [t.length, t.editMetadata]), b = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), I.XK(t)
  }, [t]), v = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), s || a(e)
  }, [s, a]);
  return (0, n.jsxs)("div", {
    className: H.QB,
    children: [(0, n.jsx)("div", {
      className: H.ne
    }), !s && (0, n.jsxs)("div", {
      className: H.g3,
      children: [(0, n.jsx)(p.K0, {
        onClick: b,
        icon: t.isFavorite ? p.C3E : p.yhu,
        "aria-label": L.intl.string(L.t.k8fFjp),
        variant: "overlay-secondary",
        size: "sm"
      }), (0, n.jsx)(p.K0, {
        onClick: v,
        icon: p.FHP,
        "aria-label": L.intl.string(L.t["UKOtz+"]),
        variant: "overlay-secondary",
        size: "sm"
      })]
    }), (0, n.jsx)(G, {
      clip: t,
      videoRef: i
    }), !o && d > 0 && (0, n.jsx)("div", {
      className: H.X7,
      children: (0, n.jsx)("div", {
        className: H.Z2,
        style: {
          width: "".concat(d, "%")
        }
      })
    }), "auto" === t.clipMethod && (0, n.jsxs)("div", {
      className: H.jt,
      children: [t.isTemporary && (0, n.jsx)(p.O4, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(p.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: L.intl.string(L.t["3Y2DJ8"])
      })]
    }), (l || !o) && (0, n.jsxs)("div", {
      className: H.OH,
      children: [!u && l && (0, n.jsx)(p.LpS, {
        text: L.intl.string(L.t.y2b7CA)
      }), !o && (0, n.jsxs)(n.Fragment, {
        children: [y && (0, n.jsx)(O.A, {
          color: "white",
          width: 16,
          height: 16
        }), (0, n.jsx)("span", {
          children: (0, n.jsx)(p.Text, {
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

function V(e) {
  let {
    clip: t
  } = e, l = (0, k.h)(t), r = "" !== l;
  return (0, n.jsx)(p.Text, {
    className: H.NV,
    variant: "text-md/normal",
    color: r ? "text-subtle" : "text-default",
    children: r ? l : t.name
  })
}

function G(e) {
  let {
    clip: t,
    videoRef: l
  } = e, r = (0, N.j)(t), i = t.type === E.nQ.SCREENSHOT;
  return t.type === E.nQ.VOICE_CLIP ? (0, n.jsx)(S.A, {
    className: H.fT
  }) : i ? (0, n.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: H.fT
  }) : null != r ? (0, n.jsx)(v.A, {
    preload: "metadata",
    poster: t.thumbnail,
    muted: true,
    src: r,
    loop: true,
    className: H.fT,
    ref: l
  }) : "" !== t.thumbnail ? (0, n.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: H.fT
  }) : (0, n.jsx)("div", {
    className: a()(H.fT, H.Is),
    children: (0, n.jsx)(p.TAc, {
      size: "custom",
      width: 64,
      height: 64
    })
  })
}

function _(e) {
  let {
    clip: t
  } = e, l = (0, u.bG)([b.A], () => null != t.applicationId ? b.A.getApplication(t.applicationId) : null), r = null == l ? true : l.getIconURL(32);
  return (0, n.jsx)("div", {
    className: H.gS,
    "aria-hidden": "true",
    children: null != r ? (0, n.jsx)("img", {
      src: r,
      alt: "",
      className: H.NH
    }) : t.type === E.nQ.VOICE_CLIP ? (0, n.jsx)(p.HKD, {
      size: "sm",
      color: "currentColor"
    }) : (0, n.jsx)(p.kN9, {
      size: "sm",
      color: "currentColor"
    })
  })
}