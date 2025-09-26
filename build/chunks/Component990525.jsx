/** Chunk was on 43342 **/
/** chunk id: 990525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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

function _(e) {
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

function w(e, t) {
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
let C = e => {
  let {
    voiceFilter: t,
    hasNitro: n,
    analyticsContext: o
  } = e, {
    activeVoice: C,
    mostRecentlyRequestedVoiceId: E
  } = (0, O.o)(), I = (0, v.z)(t.id), S = t.id === C, T = !t.available && !t.temporarilyAvailable, N = t.temporarilyAvailable && !n && !S, D = !S && t.id === E, [Z, k] = i.useState(false);
  i.useEffect(() => {
    let e = D ? setTimeout(() => k(D), 200) : true;
    return () => {
      clearTimeout(e), k(false)
    }
  }, [D]);
  let M = (0, y.J_)({
      location: "voice_filter_item",
      autoTrackExposure: true,
      disable: !m.ZP.canCheckVoiceFilterFilesExist()
    }),
    A = (0, a.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
    R = null == I ? true : I.previewSoundURLs,
    [V, F] = i.useState(0),
    {
      isPlaying: L,
      playSound: U,
      stopSound: Y,
      preloadSound: H
    } = (0, d.Z)(null != R ? R[V] : null, {
      soundId: t.id
    }),
    z = P[t.styleKey],
    q = i.useCallback(() => {
      n || !T ? ((0, f.v6)(C === t.id ? null : t.id, o), N && p.default.track(j.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, _({
        voice_filter_id: t.id
      }, (0, b.w)(o)))) : (0, u.i)()
    }, [n, T, C, t.id, o, N]),
    B = i.useCallback(() => {
      p.default.track(j.rMx.VOICE_FILTER_PREVIEW_PLAYED, _({
        voice_filter_id: t.id
      }, (0, b.w)(o))), U({
        volume: .5,
        outputChannel: h.w.VOICE
      }), (.25 > Math.random() || V > 0) && null != R && F(e => (e + 1) % R.length)
    }, [o, U, V, R, t.id]),
    W = null != I ? x.intl.string(I.name) : "";
  return (0, r.jsxs)("div", {
    className: l()(P.filter, z, {
      [P.selected]: S,
      [P.locked]: T && !S
    }),
    children: [(0, r.jsx)(c.ua7, {
      shouldShow: M && !A,
      "aria-label": x.intl.string(x.t.SQ7qMD),
      text: (0, r.jsxs)("div", {
        className: P.downloadRequiredContent,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: x.intl.string(x.t.SQ7qMD)
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: x.intl.string(x.t.TbnPVl)
        })]
      }),
      children: e => (0, r.jsxs)(c.P3F, w(_({
        className: P.selector
      }, e), {
        onClick: () => {
          var t;
          q(), null == e || null == (t = e.onClick) || t.call(e)
        },
        onMouseEnter: () => {
          var t;
          H(), null == e || null == (t = e.onMouseEnter) || t.call(e)
        },
        children: [(0, r.jsxs)("div", {
          className: P.iconTreatmentsWrapper,
          children: [(0, r.jsxs)("div", {
            className: l()(P.profile, {
              [P.underDevelopment]: t.underDevelopment
            }),
            children: [(0, r.jsx)("img", {
              className: P.thumbnail,
              alt: "",
              src: null == I ? true : I.iconURL,
              draggable: false
            }), (0, r.jsx)("div", {
              className: P.insetBorder
            })]
          }), S && (0, r.jsx)("div", {
            className: P.iconCircle,
            children: (0, r.jsx)(c.owK, {
              size: "md",
              color: "currentColor",
              colorClass: P.checkmark,
              secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
            })
          }), T && !S && (0, r.jsx)("div", {
            className: l()([P.iconCircle, P.lockedCircle]),
            children: (0, r.jsx)(c.mBM, {
              size: "custom",
              height: 16,
              width: 16,
              color: "currentColor",
              colorClass: P.lockedIcon
            })
          }), N && (0, r.jsx)("div", {
            className: l()([P.iconCircle, P.iconBorder]),
            children: (0, r.jsx)("div", {
              className: l()([P.clockCircle]),
              children: (0, r.jsx)(c.T39, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: P.clockIcon
              })
            })
          }), Z && (0, r.jsx)("div", {
            className: P.spinnerWrapper,
            children: (0, r.jsx)(c.$jN, {
              type: c.$jN.Type.CHASING_DOTS,
              animated: true,
              className: P.spinner
            })
          })]
        }), (0, r.jsxs)("div", {
          className: P.filterName,
          children: [(0, r.jsxs)(c.Text, {
            variant: "text-xs/medium",
            color: t.underDevelopment ? "header-muted" : "header-primary",
            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", W]
          }), M && !A ? (0, r.jsx)(c._8t, {
            size: "xxs"
          }) : null]
        })]
      }))
    }), null != R && (0, r.jsx)(c.ua7, {
      text: x.intl.string(L ? x.t.ItuPbm : x.t["0gtbEx"]),
      children: e => (0, r.jsx)(c.P3F, w(_({}, e), {
        className: l()([P.hoverButtonCircle, P.previewButton], {
          [P.visible]: L
        }),
        onClick: L ? Y : B,
        "aria-label": x.intl.formatToPlainString(x.t.gDzvjY, {
          voiceFilterName: W
        }),
        children: L ? (0, r.jsx)(c.wNq, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        }) : (0, r.jsx)(c.o1U, {
          size: "custom",
          height: 16,
          width: 16,
          color: "white"
        })
      }))
    })]
  })
}