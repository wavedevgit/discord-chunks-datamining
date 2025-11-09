/** Chunk was on 33840 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk556389 = require("./556389.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk396678 = require("./396678.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk832832 = require("./832832.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk460255 = require("./460255.js");

function C() {
  return (0, Chunk951288.jsx)("span", {
    className: Chunk460255.ellipsis,
    children: "•"
  })
}

function O(e) {
  let {
    source: t
  } = e, {
    data: n
  } = (0, c.IX)(null != t && (0, _.T)(t) ? t.id : true);
  return null == t ? (0, r.jsx)(a.hGI, {
    className: y.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, _.T)(t) ? (0, r.jsx)(d.Z, {
    game: n,
    pid: t.pid
  }) : null == t.icon || "" === t.icon ? (0, r.jsx)(a.hGI, {
    className: y.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, r.jsx)("img", {
    src: t.icon,
    alt: "",
    className: y.sourceIcon
  })
}

function w() {
  var e, t, n, i;
  let [{
    preset: c,
    resolution: d,
    fps: _,
    muteStreamAudio: w,
    selectedSource: P,
    sourceType: T,
    audioSourceId: Z
  }] = (0, Chunk615161.E_)(), [I, E] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), N = I.concat(E), [R, A] = null != (n = (0, Chunk396678.Z)(Chunk728345)) ? require : [Chunk925329, Chunk556389], M = (0, Chunk672811.L)(Chunk728345), k = (0, Chunk891180.M)(R), D = T === Chunk268146.vA.CAMERA, B = null != P, L = null != P ? null == P || null == (e = P.id) ? true : module.startsWith(Chunk268146.vA.CAMERA) : D, G = Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_AUTO, U = B ? true : Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_VIDEO ? Chunk388032.intl.string(Chunk832832.default.MuHUFe) : Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_DOCUMENTS ? Chunk388032.intl.string(Chunk832832.default.y0JuYR) : Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_AUTO ? Chunk388032.intl.string(Chunk832832.default.m4jtlc) : true, F = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getUseSystemScreensharePicker() && (0, Chunk358085.isLinux)());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk460255.root,
    children: [B && (0, Chunk951288.jsx)(O, {
      source: P
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk460255.summary,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk460255.sourceOrPresetName,
        variant: "text-md/semibold",
        color: "header-primary",
        children: B ? null != (i = null == P ? true : P.name) ? Chunk120356 : Chunk388032.intl.string(Chunk832832.default["hJMA+x"]) : M
      }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
        className: Chunk460255.summaryDetail,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [B && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsxs)("span", {
            className: Chunk460255.iconSummaryContainer,
            children: [(0, Chunk951288.jsx)(Chunk481060.ewm, {
              className: Chunk460255.icon,
              size: "xxs",
              color: "currentColor"
            }), M]
          }), (0, Chunk951288.jsx)(C, {})]
        }), null != U && (0, Chunk951288.jsx)("span", {
          children: U
        }), !G && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)("span", {
            children: k
          }), (0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)("span", {
            children: "".concat(A, "fps")
          })]
        }), w && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsxs)("span", {
            className: Chunk460255.iconSummaryContainer,
            children: [(0, Chunk951288.jsx)(Chunk481060.OyP, {
              className: l()(Chunk460255.icon, Chunk460255.mutedIcon),
              size: "xxs",
              color: "currentColor"
            }), Chunk388032.intl.string(Chunk832832.default.FzMGWR)]
          })]
        }), !w && !L && F && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(C, {}), Chunk388032.intl.string(Chunk832832.default["n9/rUq"])]
        }), L ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)("span", {
            children: null == (t = N.find(e => {
              let {
                id: t
              } = e;
              return Z === t
            })) ? true : exports.name
          })]
        }) : null]
      })]
    })]
  })
}