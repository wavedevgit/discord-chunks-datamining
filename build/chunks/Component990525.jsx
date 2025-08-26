/** Chunk was on web.js **/
/** chunk id: 990525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = 200,
  R = e => {
    let {
      voiceFilter: t,
      hasNitro: n,
      analyticsContext: o
    } = e, {
      activeVoice: T,
      mostRecentlyRequestedVoiceId: A
    } = (0, b.o)(), R = (0, E.z)(t.id), P = t.id === T, w = !t.available && !t.temporarilyAvailable, D = t.temporarilyAvailable && !n && !P, x = !P && t.id === A, [L, j] = i.useState(false);
    i.useEffect(() => {
      let e = x ? setTimeout(() => j(x), N) : true;
      return () => {
        clearTimeout(e), j(false)
      }
    }, [x]);
    let M = (0, m.J_)({
        location: "voice_filter_item",
        autoTrackExposure: true,
        disable: !_.ZP.canCheckVoiceFilterFilesExist()
      }),
      k = (0, s.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
      U = null == R ? true : R.previewSoundURLs,
      [G, B] = i.useState(0),
      {
        isPlaying: Z,
        playSound: F,
        stopSound: V,
        preloadSound: H
      } = (0, d.Z)(null != U ? U[G] : null, {
        soundId: t.id
      }),
      Y = I[t.styleKey],
      W = i.useCallback(() => {
        n || !w ? ((0, p.v6)(T === t.id ? null : t.id, o), D && f.default.track(y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, S({
          voice_filter_id: t.id
        }, (0, h.w)(o)))) : (0, u.i)()
      }, [n, w, T, t.id, o, D]),
      K = i.useCallback(() => {
        f.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, S({
          voice_filter_id: t.id
        }, (0, h.w)(o))), F({
          volume: .5,
          outputChannel: O.w.VOICE
        }), (.25 > Math.random() || G > 0) && null != U && B(e => (e + 1) % U.length)
      }, [o, F, G, U, t.id]),
      z = null != R ? v.intl.string(R.name) : "";
    return (0, r.jsxs)("div", {
      className: a()(I.filter, Y, {
        [I.selected]: P,
        [I.locked]: w && !P
      }),
      children: [(0, r.jsx)(c.ua7, {
        shouldShow: M && !k,
        "aria-label": v.intl.string(v.t.SQ7qMD),
        text: (0, r.jsxs)("div", {
          className: I.downloadRequiredContent,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: v.intl.string(v.t.SQ7qMD)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            children: v.intl.string(v.t.TbnPVl)
          })]
        }),
        children: e => (0, r.jsxs)(c.P3F, C(S({
          className: I.selector
        }, e), {
          onClick: () => {
            var t;
            W(), null == e || null == (t = e.onClick) || t.call(e)
          },
          onMouseEnter: () => {
            var t;
            H(), null == e || null == (t = e.onMouseEnter) || t.call(e)
          },
          children: [(0, r.jsxs)("div", {
            className: I.iconTreatmentsWrapper,
            children: [(0, r.jsxs)("div", {
              className: a()(I.profile, {
                [I.underDevelopment]: t.underDevelopment
              }),
              children: [(0, r.jsx)("img", {
                className: I.thumbnail,
                alt: "",
                src: null == R ? true : R.iconURL,
                draggable: false
              }), (0, r.jsx)("div", {
                className: I.insetBorder
              })]
            }), P && (0, r.jsx)("div", {
              className: I.iconCircle,
              children: (0, r.jsx)(c.owK, {
                size: "md",
                color: "currentColor",
                colorClass: I.checkmark,
                secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
              })
            }), w && !P && (0, r.jsx)("div", {
              className: a()([I.iconCircle, I.lockedCircle]),
              children: (0, r.jsx)(c.mBM, {
                size: "custom",
                height: 16,
                width: 16,
                color: "currentColor",
                colorClass: I.lockedIcon
              })
            }), D && (0, r.jsx)("div", {
              className: a()([I.iconCircle, I.iconBorder]),
              children: (0, r.jsx)("div", {
                className: a()([I.clockCircle]),
                children: (0, r.jsx)(c.T39, {
                  size: "custom",
                  height: 16,
                  width: 16,
                  color: "currentColor",
                  colorClass: I.clockIcon
                })
              })
            }), L && (0, r.jsx)("div", {
              className: I.spinnerWrapper,
              children: (0, r.jsx)(c.$jN, {
                type: c.$jN.Type.CHASING_DOTS,
                animated: true,
                className: I.spinner
              })
            })]
          }), (0, r.jsxs)("div", {
            className: I.filterName,
            children: [(0, r.jsxs)(c.Text, {
              variant: "text-xs/medium",
              color: t.underDevelopment ? "header-muted" : "header-primary",
              children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", z]
            }), M && !k ? (0, r.jsx)(c._8t, {
              size: "xxs"
            }) : null]
          })]
        }))
      }), null != U && (0, r.jsx)(c.ua7, {
        text: v.intl.string(Z ? v.t.ItuPbm : v.t["0gtbEx"]),
        children: e => (0, r.jsx)(c.P3F, C(S({}, e), {
          className: a()([I.hoverButtonCircle, I.previewButton], {
            [I.visible]: Z
          }),
          onClick: Z ? V : K,
          "aria-label": v.intl.formatToPlainString(v.t.gDzvjY, {
            voiceFilterName: z
          }),
          children: Z ? (0, r.jsx)(c.wNq, {
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