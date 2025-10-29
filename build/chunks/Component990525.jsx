/** Chunk was on 52344 **/
/** chunk id: 990525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk478875 = require("./478875.js");

function P(e) {
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
let w = e => {
  let {
    voiceFilter: t,
    hasNitro: n,
    analyticsContext: o
  } = e, {
    activeVoice: w,
    mostRecentlyRequestedVoiceId: C
  } = (0, O.o)(), S = (0, j.z)(t.id), I = t.id === w, N = !t.available && !t.temporarilyAvailable, T = t.temporarilyAvailable && !n && !I, D = !I && t.id === C, [k, Z] = i.useState(false);
  i.useEffect(() => {
    let e = D ? setTimeout(() => Z(D), 200) : true;
    return () => {
      clearTimeout(e), Z(false)
    }
  }, [D]);
  let M = (0, y.J_)({
      location: "voice_filter_item",
      autoTrackExposure: true,
      disable: !f.ZP.canCheckVoiceFilterFilesExist()
    }),
    A = (0, a.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
    L = null == S ? true : S.previewSoundURLs,
    [R, V] = i.useState(0),
    {
      isPlaying: F,
      playSound: U,
      stopSound: Y,
      preloadSound: H
    } = (0, p.Z)(null != L ? L[R] : null, {
      soundId: t.id
    }),
    z = _[t.styleKey],
    B = i.useCallback(() => {
      n || !N ? ((0, b.v6)(w === t.id ? null : t.id, o), T && m.default.track(h.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, P({
        voice_filter_id: t.id
      }, (0, v.w)(o)))) : (0, d.i)()
    }, [n, N, w, t.id, o, T]),
    G = i.useCallback(() => {
      m.default.track(h.rMx.VOICE_FILTER_PREVIEW_PLAYED, P({
        voice_filter_id: t.id
      }, (0, v.w)(o))), U({
        volume: .5,
        outputChannel: x.w.VOICE
      }), (.25 > Math.random() || R > 0) && null != L && V(e => (e + 1) % L.length)
    }, [o, U, R, L, t.id]),
    W = null != S ? E.intl.string(S.name) : "";
  return (0, r.jsxs)("div", {
    className: l()(_.filter, z, {
      [_.selected]: I,
      [_.locked]: N && !I
    }),
    children: [(0, r.jsx)(c.u, {
      asContainer: true,
      shouldShow: M && !A,
      "aria-label": E.intl.string(E.t.SQ7qMG),
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: _.downloadRequiredContent,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: E.intl.string(E.t.SQ7qMG)
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: E.intl.string(E.t.TbnPVp)
        })]
      }),
      children: (0, r.jsxs)(u.P3F, {
        className: _.selector,
        onClick: () => {
          B()
        },
        onMouseEnter: () => {
          H()
        },
        children: [(0, r.jsxs)("div", {
          className: _.iconTreatmentsWrapper,
          children: [(0, r.jsxs)("div", {
            className: l()(_.profile, {
              [_.underDevelopment]: t.underDevelopment
            }),
            children: [(0, r.jsx)("img", {
              className: _.thumbnail,
              alt: "",
              src: null == S ? true : S.iconURL,
              draggable: false
            }), (0, r.jsx)("div", {
              className: _.insetBorder
            })]
          }), I && (0, r.jsx)("div", {
            className: _.iconCircle,
            children: (0, r.jsx)(u.owK, {
              size: "md",
              color: "currentColor",
              colorClass: _.checkmark,
              secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
            })
          }), N && !I && (0, r.jsx)("div", {
            className: l()([_.iconCircle, _.lockedCircle]),
            children: (0, r.jsx)(u.mBM, {
              size: "custom",
              height: 16,
              width: 16,
              color: "currentColor",
              colorClass: _.lockedIcon
            })
          }), T && (0, r.jsx)("div", {
            className: l()([_.iconCircle, _.iconBorder]),
            children: (0, r.jsx)("div", {
              className: l()([_.clockCircle]),
              children: (0, r.jsx)(u.T39, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: _.clockIcon
              })
            })
          }), k && (0, r.jsx)("div", {
            className: _.spinnerWrapper,
            children: (0, r.jsx)(u.$jN, {
              type: u.$jN.Type.CHASING_DOTS,
              animated: true,
              className: _.spinner
            })
          })]
        }), (0, r.jsxs)("div", {
          className: _.filterName,
          children: [(0, r.jsxs)(u.Text, {
            variant: "text-xs/medium",
            color: t.underDevelopment ? "header-muted" : "header-primary",
            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", W]
          }), M && !A ? (0, r.jsx)(u._8t, {
            size: "xxs"
          }) : null]
        })]
      })
    }), null != L && (0, r.jsx)(c.u, {
      asContainer: true,
      text: E.intl.string(F ? E.t.ItuPbp : E.t["0gtbE8"]),
      children: (0, r.jsx)(u.P3F, {
        className: l()([_.hoverButtonCircle, _.previewButton], {
          [_.visible]: F
        }),
        onClick: F ? Y : G,
        "aria-label": E.intl.formatToPlainString(E.t.gDzvjd, {
          voiceFilterName: W
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