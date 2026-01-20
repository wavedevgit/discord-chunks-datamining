/** Chunk was on 11010 **/
/** chunk id: 990525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk457165 = require("./457165.jsx"),
  Chunk469121 = require("./469121.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk743498 = require("./743498.js"),
  Chunk778033 = require("./778033.js"),
  Chunk967021 = require("./967021.js"),
  Chunk709706 = require("./709706.js"),
  Chunk56848 = require("./56848.js"),
  Chunk378441 = require("./378441.js"),
  Chunk981631 = require("./981631.js"),
  Chunk509571 = require("./509571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk223296 = require("./223296.js");

function x(e) {
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
let I = e => {
  let {
    voiceFilter: t,
    hasNitro: n,
    analyticsContext: l
  } = e, {
    activeVoice: I,
    mostRecentlyRequestedVoiceId: N
  } = (0, y.o)(), T = (0, E.z)(t.id), j = t.id === I, P = !t.available && !t.temporarilyAvailable, w = t.temporarilyAvailable && !n && !j, Z = !j && t.id === N, [A, R] = i.useState(false);
  i.useEffect(() => {
    let e = Z ? setTimeout(() => R(Z), 200) : true;
    return () => {
      clearTimeout(e), R(false)
    }
  }, [Z]);
  let D = (0, h.J_)({
      location: "voice_filter_item",
      autoTrackExposure: true,
      disable: !g.ZP.canCheckVoiceFilterFilesExist()
    }),
    M = (0, o.e7)([v.Z], () => v.Z.isVoiceFilterDownloaded(t.id), [t]),
    k = null == T ? true : T.previewSoundURLs,
    [L, U] = i.useState(0),
    {
      isPlaying: F,
      playSound: V,
      stopSound: W,
      preloadSound: B
    } = (0, f.Z)(null != k ? k[L] : null, {
      soundId: t.id
    }),
    G = S[t.styleKey],
    H = i.useCallback(() => {
      n || !P ? ((0, m.v6)(I === t.id ? null : t.id, l), w && p.default.track(_.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, x({
        voice_filter_id: t.id
      }, (0, b.w)(l)))) : (0, d.i)()
    }, [n, P, I, t.id, l, w]),
    z = i.useCallback(() => {
      p.default.track(_.rMx.VOICE_FILTER_PREVIEW_PLAYED, x({
        voice_filter_id: t.id
      }, (0, b.w)(l))), V({
        volume: .5,
        outputChannel: O.w.VOICE
      }), (.25 > Math.random() || L > 0) && null != k && U(e => (e + 1) % k.length)
    }, [l, V, L, k, t.id]),
    Y = null != T ? C.intl.string(T.name) : "";
  return (0, r.jsxs)("div", {
    className: a()(S.filter, G, {
      [S.selected]: j,
      [S.locked]: P && !j
    }),
    children: [(0, r.jsx)(s.u, {
      asContainer: true,
      shouldShow: D && !M,
      "aria-label": C.intl.string(C.t.SQ7qMG),
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: S.downloadRequiredContent,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: C.intl.string(C.t.SQ7qMG)
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: C.intl.string(C.t.TbnPVp)
        })]
      }),
      children: (0, r.jsxs)(u.P3F, {
        className: S.selector,
        onClick: () => {
          H()
        },
        onMouseEnter: () => {
          B()
        },
        children: [(0, r.jsxs)("div", {
          className: S.iconTreatmentsWrapper,
          children: [(0, r.jsxs)("div", {
            className: a()(S.profile, {
              [S.underDevelopment]: t.underDevelopment
            }),
            children: [(0, r.jsx)("img", {
              className: S.thumbnail,
              alt: "",
              src: null == T ? true : T.iconURL,
              draggable: false
            }), (0, r.jsx)("div", {
              className: S.insetBorder
            })]
          }), j && (0, r.jsx)("div", {
            className: S.iconCircle,
            children: (0, r.jsx)(u.owK, {
              size: "md",
              color: "currentColor",
              colorClass: S.checkmark,
              secondaryColor: c.Z.unsafe_rawColors.WHITE.css
            })
          }), P && !j && (0, r.jsx)("div", {
            className: a()([S.iconCircle, S.lockedCircle]),
            children: (0, r.jsx)(u.mBM, {
              size: "custom",
              height: 16,
              width: 16,
              color: "currentColor",
              colorClass: S.lockedIcon
            })
          }), w && (0, r.jsx)("div", {
            className: a()([S.iconCircle, S.iconBorder]),
            children: (0, r.jsx)("div", {
              className: a()([S.clockCircle]),
              children: (0, r.jsx)(u.T39, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: S.clockIcon
              })
            })
          }), A && (0, r.jsx)("div", {
            className: S.spinnerWrapper,
            children: (0, r.jsx)(u.$jN, {
              type: u.$jN.Type.CHASING_DOTS,
              animated: true,
              className: S.spinner
            })
          })]
        }), (0, r.jsxs)("div", {
          className: S.filterName,
          children: [(0, r.jsxs)(u.Text, {
            variant: "text-xs/medium",
            color: t.underDevelopment ? "text-muted" : "text-strong",
            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", Y]
          }), D && !M ? (0, r.jsx)(u._8t, {
            size: "xxs"
          }) : null]
        })]
      })
    }), null != k && (0, r.jsx)(s.u, {
      asContainer: true,
      text: C.intl.string(F ? C.t.ItuPbp : C.t["0gtbE8"]),
      children: (0, r.jsx)(u.P3F, {
        className: a()([S.hoverButtonCircle, S.previewButton], {
          [S.visible]: F
        }),
        onClick: F ? W : z,
        "aria-label": C.intl.formatToPlainString(C.t.gDzvjd, {
          voiceFilterName: Y
        }),
        children: F ? (0, r.jsx)(u.wNq, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        }) : (0, r.jsx)(u.o1U, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        })
      })
    })]
  })
}