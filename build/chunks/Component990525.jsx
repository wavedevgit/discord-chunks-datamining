/** Chunk was on 43342 **/
/** chunk id: 990525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function w(e) {
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
    analyticsContext: o
  } = e, {
    activeVoice: C,
    mostRecentlyRequestedVoiceId: E
  } = (0, O.o)(), I = (0, j.z)(t.id), T = t.id === C, S = !t.available && !t.temporarilyAvailable, N = t.temporarilyAvailable && !n && !T, Z = !T && t.id === E, [D, k] = i.useState(false);
  i.useEffect(() => {
    let e = Z ? setTimeout(() => k(Z), 200) : true;
    return () => {
      clearTimeout(e), k(false)
    }
  }, [Z]);
  let M = (0, v.J_)({
      location: "voice_filter_item",
      autoTrackExposure: true,
      disable: !f.ZP.canCheckVoiceFilterFilesExist()
    }),
    A = (0, a.e7)([y.Z], () => y.Z.isVoiceFilterDownloaded(t.id), [t]),
    R = null == I ? true : I.previewSoundURLs,
    [L, V] = i.useState(0),
    {
      isPlaying: F,
      playSound: U,
      stopSound: Y,
      preloadSound: H
    } = (0, p.Z)(null != R ? R[L] : null, {
      soundId: t.id
    }),
    z = P[t.styleKey],
    B = i.useCallback(() => {
      n || !S ? ((0, b.v6)(C === t.id ? null : t.id, o), N && m.default.track(h.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, w({
        voice_filter_id: t.id
      }, (0, g.w)(o)))) : (0, d.i)()
    }, [n, S, C, t.id, o, N]),
    q = i.useCallback(() => {
      m.default.track(h.rMx.VOICE_FILTER_PREVIEW_PLAYED, w({
        voice_filter_id: t.id
      }, (0, g.w)(o))), U({
        volume: .5,
        outputChannel: x.w.VOICE
      }), (.25 > Math.random() || L > 0) && null != R && V(e => (e + 1) % R.length)
    }, [o, U, L, R, t.id]),
    W = null != I ? _.intl.string(I.name) : "";
  return (0, r.jsxs)("div", {
    className: l()(P.filter, z, {
      [P.selected]: T,
      [P.locked]: S && !T
    }),
    children: [(0, r.jsx)(c.u, {
      asContainer: true,
      shouldShow: M && !A,
      "aria-label": _.intl.string(_.t.SQ7qMG),
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: P.downloadRequiredContent,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: _.intl.string(_.t.SQ7qMG)
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: _.intl.string(_.t.TbnPVp)
        })]
      }),
      children: (0, r.jsxs)(u.P3F, {
        className: P.selector,
        onClick: () => {
          B()
        },
        onMouseEnter: () => {
          H()
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
          }), T && (0, r.jsx)("div", {
            className: P.iconCircle,
            children: (0, r.jsx)(u.owK, {
              size: "md",
              color: "currentColor",
              colorClass: P.checkmark,
              secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
            })
          }), S && !T && (0, r.jsx)("div", {
            className: l()([P.iconCircle, P.lockedCircle]),
            children: (0, r.jsx)(u.mBM, {
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
              children: (0, r.jsx)(u.T39, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: P.clockIcon
              })
            })
          }), D && (0, r.jsx)("div", {
            className: P.spinnerWrapper,
            children: (0, r.jsx)(u.$jN, {
              type: u.$jN.Type.CHASING_DOTS,
              animated: true,
              className: P.spinner
            })
          })]
        }), (0, r.jsxs)("div", {
          className: P.filterName,
          children: [(0, r.jsxs)(u.Text, {
            variant: "text-xs/medium",
            color: t.underDevelopment ? "header-muted" : "header-primary",
            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", W]
          }), M && !A ? (0, r.jsx)(u._8t, {
            size: "xxs"
          }) : null]
        })]
      })
    }), null != R && (0, r.jsx)(c.u, {
      asContainer: true,
      text: _.intl.string(F ? _.t.ItuPbp : _.t["0gtbE8"]),
      children: (0, r.jsx)(u.P3F, {
        className: l()([P.hoverButtonCircle, P.previewButton], {
          [P.visible]: F
        }),
        onClick: F ? Y : q,
        "aria-label": _.intl.formatToPlainString(_.t.gDzvjd, {
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