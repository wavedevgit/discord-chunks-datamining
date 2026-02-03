/** Chunk was on 61344 **/
/** chunk id: 973947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk336060 = require("./336060.jsx"),
  Chunk584014 = require("./584014.js"),
  Chunk954571 = require("./954571.js"),
  Chunk837921 = require("./837921.js"),
  Chunk504292 = require("./504292.js"),
  Chunk656088 = require("./656088.js"),
  Chunk253541 = require("./253541.js"),
  Chunk971778 = require("./971778.js"),
  Chunk774030 = require("./774030.js"),
  Chunk494783 = require("./494783.js"),
  Chunk652215 = require("./652215.js"),
  Chunk257645 = require("./257645.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk854147 = require("./854147.js");

function S(e) {
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
}
let x = e => {
  let {
    voiceFilter: t,
    hasNitro: n,
    analyticsContext: i
  } = e, {
    activeVoice: x,
    mostRecentlyRequestedVoiceId: j
  } = (0, y.f)(), I = (0, _.e)(t.id), T = t.id === x, N = !t.available && !t.temporarilyAvailable, P = t.temporarilyAvailable && !n && !T, w = !T && t.id === j, [R, D] = r.useState(false);
  r.useEffect(() => {
    let e = w ? setTimeout(() => D(w), 200) : true;
    return () => {
      clearTimeout(e), D(false)
    }
  }, [w]);
  let M = (0, A.B2)({
      location: "voice_filter_item",
      autoTrackExposure: true,
      disable: !f.Ay.canCheckVoiceFilterFilesExist()
    }),
    k = (0, s.bG)([b.A], () => b.A.isVoiceFilterDownloaded(t.id), [t]),
    L = null == I ? true : I.previewSoundURLs,
    [U, G] = r.useState(0),
    {
      isPlaying: F,
      playSound: H,
      stopSound: B,
      preloadSound: V
    } = (0, h.A)(null != L ? L[U] : null, {
      soundId: t.id
    }),
    K = C[t.styleKey],
    W = r.useCallback(() => {
      n || !N ? ((0, m.OR)(x === t.id ? null : t.id, i), P && p.default.track(v.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, S({
        voice_filter_id: t.id
      }, (0, g.A)(i)))) : (0, d.n)()
    }, [n, N, x, t.id, i, P]),
    z = r.useCallback(() => {
      p.default.track(v.HAw.VOICE_FILTER_PREVIEW_PLAYED, S({
        voice_filter_id: t.id
      }, (0, g.A)(i))), H({
        volume: .5,
        outputChannel: E.a.VOICE
      }), (.25 > Math.random() || U > 0) && null != L && G(e => (e + 1) % L.length)
    }, [i, H, U, L, t.id]),
    Y = null != I ? O.intl.string(I.name) : "";
  return (0, l.jsxs)("div", {
    className: a()(C.filter, K, {
      [C.selected]: T,
      [C.locked]: N && !T
    }),
    children: [(0, l.jsx)(c.m, {
      asContainer: true,
      shouldShow: M && !k,
      "aria-label": O.intl.string(O.t.SQ7qMG),
      __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
        className: C.downloadRequiredContent,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: O.intl.string(O.t.SQ7qMG)
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: O.intl.string(O.t.TbnPVp)
        })]
      }),
      children: (0, l.jsxs)(u.DUT, {
        className: C.selector,
        onClick: () => {
          W()
        },
        onMouseEnter: () => {
          V()
        },
        children: [(0, l.jsxs)("div", {
          className: C.iconTreatmentsWrapper,
          children: [(0, l.jsxs)("div", {
            className: a()(C.profile, {
              [C.underDevelopment]: t.underDevelopment
            }),
            children: [(0, l.jsx)("img", {
              className: C.thumbnail,
              alt: "",
              src: null == I ? true : I.iconURL,
              draggable: false
            }), (0, l.jsx)("div", {
              className: C.insetBorder
            })]
          }), T && (0, l.jsx)("div", {
            className: C.iconCircle,
            children: (0, l.jsx)(u.yr3, {
              size: "md",
              color: "currentColor",
              colorClass: C.checkmark,
              secondaryColor: o.A.unsafe_rawColors.WHITE.css
            })
          }), N && !T && (0, l.jsx)("div", {
            className: a()([C.iconCircle, C.lockedCircle]),
            children: (0, l.jsx)(u.XAi, {
              size: "custom",
              height: 16,
              width: 16,
              color: "currentColor",
              colorClass: C.lockedIcon
            })
          }), P && (0, l.jsx)("div", {
            className: a()([C.iconCircle, C.iconBorder]),
            children: (0, l.jsx)("div", {
              className: a()([C.clockCircle]),
              children: (0, l.jsx)(u.O4, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: C.clockIcon
              })
            })
          }), R && (0, l.jsx)("div", {
            className: C.spinnerWrapper,
            children: (0, l.jsx)(u.y$y, {
              type: u.y$y.Type.CHASING_DOTS,
              animated: true,
              className: C.spinner
            })
          })]
        }), (0, l.jsxs)("div", {
          className: C.filterName,
          children: [(0, l.jsxs)(u.Text, {
            variant: "text-xs/medium",
            color: t.underDevelopment ? "text-muted" : "text-strong",
            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", Y]
          }), M && !k ? (0, l.jsx)(u.s3U, {
            size: "xxs"
          }) : null]
        })]
      })
    }), null != L && (0, l.jsx)(c.m, {
      asContainer: true,
      text: O.intl.string(F ? O.t.ItuPbp : O.t["0gtbE8"]),
      children: (0, l.jsx)(u.DUT, {
        className: a()([C.hoverButtonCircle, C.previewButton], {
          [C.visible]: F
        }),
        onClick: F ? B : z,
        "aria-label": O.intl.formatToPlainString(O.t.gDzvjd, {
          voiceFilterName: Y
        }),
        children: F ? (0, l.jsx)(u.wFz, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        }) : (0, l.jsx)(u.udU, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        })
      })
    })]
  })
}