/** Chunk was on 31748 **/
/** chunk id: 973947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => C
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
let C = e => {
  let {
    voiceFilter: t,
    hasNitro: n,
    analyticsContext: i
  } = e, {
    activeVoice: C,
    mostRecentlyRequestedVoiceId: N
  } = (0, b.f)(), I = (0, A.e)(t.id), j = t.id === C, T = !t.available && !t.temporarilyAvailable, w = t.temporarilyAvailable && !n && !j, P = !j && t.id === N, [R, D] = l.useState(false);
  l.useEffect(() => {
    let e = P ? setTimeout(() => D(P), 200) : true;
    return () => {
      clearTimeout(e), D(false)
    }
  }, [P]);
  let k = (0, h.B2)({
      location: "voice_filter_item",
      autoTrackExposure: true,
      disable: !g.Ay.canCheckVoiceFilterFilesExist()
    }),
    L = (0, o.bG)([y.A], () => y.A.isVoiceFilterDownloaded(t.id), [t]),
    M = null == I ? true : I.previewSoundURLs,
    [U, V] = l.useState(0),
    {
      isPlaying: F,
      playSound: G,
      stopSound: B,
      preloadSound: H
    } = (0, f.A)(null != M ? M[U] : null, {
      soundId: t.id
    }),
    W = x[t.styleKey],
    z = l.useCallback(() => {
      n || !T ? ((0, m.OR)(C === t.id ? null : t.id, i), w && p.default.track(E.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, S({
        voice_filter_id: t.id
      }, (0, _.A)(i)))) : (0, d.n)()
    }, [n, T, C, t.id, i, w]),
    Y = l.useCallback(() => {
      p.default.track(E.HAw.VOICE_FILTER_PREVIEW_PLAYED, S({
        voice_filter_id: t.id
      }, (0, _.A)(i))), G({
        volume: .5,
        outputChannel: v.a.VOICE
      }), (.25 > Math.random() || U > 0) && null != M && V(e => (e + 1) % M.length)
    }, [i, G, U, M, t.id]),
    K = null != I ? O.intl.string(I.name) : "";
  return (0, r.jsxs)("div", {
    className: a()(x.filter, W, {
      [x.selected]: j,
      [x.locked]: T && !j
    }),
    children: [(0, r.jsx)(c.m, {
      asContainer: true,
      shouldShow: k && !L,
      "aria-label": O.intl.string(O.t.SQ7qMG),
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: x.downloadRequiredContent,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: O.intl.string(O.t.SQ7qMG)
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: O.intl.string(O.t.TbnPVp)
        })]
      }),
      children: (0, r.jsxs)(u.DUT, {
        className: x.selector,
        onClick: () => {
          z()
        },
        onMouseEnter: () => {
          H()
        },
        children: [(0, r.jsxs)("div", {
          className: x.iconTreatmentsWrapper,
          children: [(0, r.jsxs)("div", {
            className: a()(x.profile, {
              [x.underDevelopment]: t.underDevelopment
            }),
            children: [(0, r.jsx)("img", {
              className: x.thumbnail,
              alt: "",
              src: null == I ? true : I.iconURL,
              draggable: false
            }), (0, r.jsx)("div", {
              className: x.insetBorder
            })]
          }), j && (0, r.jsx)("div", {
            className: x.iconCircle,
            children: (0, r.jsx)(u.yr3, {
              size: "md",
              color: "currentColor",
              colorClass: x.checkmark,
              secondaryColor: s.A.unsafe_rawColors.WHITE.css
            })
          }), T && !j && (0, r.jsx)("div", {
            className: a()([x.iconCircle, x.lockedCircle]),
            children: (0, r.jsx)(u.XAi, {
              size: "custom",
              height: 16,
              width: 16,
              color: "currentColor",
              colorClass: x.lockedIcon
            })
          }), w && (0, r.jsx)("div", {
            className: a()([x.iconCircle, x.iconBorder]),
            children: (0, r.jsx)("div", {
              className: a()([x.clockCircle]),
              children: (0, r.jsx)(u.O4, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: x.clockIcon
              })
            })
          }), R && (0, r.jsx)("div", {
            className: x.spinnerWrapper,
            children: (0, r.jsx)(u.y$y, {
              type: u.y$y.Type.CHASING_DOTS,
              animated: true,
              className: x.spinner
            })
          })]
        }), (0, r.jsxs)("div", {
          className: x.filterName,
          children: [(0, r.jsxs)(u.Text, {
            variant: "text-xs/medium",
            color: t.underDevelopment ? "text-muted" : "text-strong",
            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", K]
          }), k && !L ? (0, r.jsx)(u.s3U, {
            size: "xxs"
          }) : null]
        })]
      })
    }), null != M && (0, r.jsx)(c.m, {
      asContainer: true,
      text: O.intl.string(F ? O.t.ItuPbp : O.t["0gtbE8"]),
      children: (0, r.jsx)(u.DUT, {
        className: a()([x.hoverButtonCircle, x.previewButton], {
          [x.visible]: F
        }),
        onClick: F ? B : Y,
        "aria-label": O.intl.formatToPlainString(O.t.gDzvjd, {
          voiceFilterName: K
        }),
        children: F ? (0, r.jsx)(u.wFz, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        }) : (0, r.jsx)(u.udU, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        })
      })
    })]
  })
}