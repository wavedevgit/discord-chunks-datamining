/** Chunk was on 44183 **/
/** chunk id: 351911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk65337 = require("./65337.js");

function C() {
  return (0, Chunk54381.jsx)("span", {
    className: Chunk65337.ellipsis,
    children: "•"
  })
}

function O(e) {
  let {
    source: t
  } = e, {
    data: n
  } = (0, c.IX)(null != t && (0, g.T)(t) ? t.id : true);
  return null == t ? (0, r.jsx)(a.hGI, {
    className: y.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, g.T)(t) ? (0, r.jsx)(d.Z, {
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
    fps: g,
    muteStreamAudio: w,
    selectedSource: Z,
    sourceType: P,
    audioSourceId: I
  }] = (0, Chunk615161.E_)(), [E, T] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), N = E.concat(T), [A, R] = null != (n = (0, Chunk396678.Z)(Chunk728345)) ? require : [Chunk925329, Chunk556389], M = (0, Chunk672811.L)(Chunk728345), k = (0, Chunk891180.M)(A), D = P === Chunk268146.vA.CAMERA, L = null != Z, B = null != Z ? null == Z || null == (e = Z.id) ? true : module.startsWith(Chunk268146.vA.CAMERA) : D, G = Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_AUTO, U = L ? true : Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_VIDEO ? Chunk388032.intl.string(Chunk715689.default.MuHUFe) : Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_DOCUMENTS ? Chunk388032.intl.string(Chunk715689.default.y0JuYR) : Chunk728345 === Chunk37113.ApplicationStreamPresets.PRESET_AUTO ? Chunk388032.intl.string(Chunk715689.default.m4jtlc) : true, F = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getUseSystemScreensharePicker() && (0, Chunk358085.isLinux)());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk65337.root,
    children: [L && (0, Chunk54381.jsx)(O, {
      source: Z
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk65337.summary,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk65337.sourceOrPresetName,
        variant: "text-md/semibold",
        color: "text-strong",
        children: L ? null != (i = null == Z ? true : Z.name) ? Chunk120356 : Chunk388032.intl.string(Chunk715689.default["hJMA+x"]) : M
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        className: Chunk65337.summaryDetail,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [L && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsxs)("span", {
            className: Chunk65337.iconSummaryContainer,
            children: [(0, Chunk54381.jsx)(Chunk481060.ewm, {
              className: Chunk65337.icon,
              size: "xxs",
              color: "currentColor"
            }), M]
          }), (0, Chunk54381.jsx)(C, {})]
        }), null != U && (0, Chunk54381.jsx)("span", {
          children: U
        }), !G && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(C, {}), (0, Chunk54381.jsx)("span", {
            children: k
          }), (0, Chunk54381.jsx)(C, {}), (0, Chunk54381.jsx)("span", {
            children: "".concat(R, "fps")
          })]
        }), w && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(C, {}), (0, Chunk54381.jsxs)("span", {
            className: Chunk65337.iconSummaryContainer,
            children: [(0, Chunk54381.jsx)(Chunk481060.OyP, {
              className: l()(Chunk65337.icon, Chunk65337.mutedIcon),
              size: "xxs",
              color: "currentColor"
            }), Chunk388032.intl.string(Chunk715689.default.FzMGWR)]
          })]
        }), !w && !B && F && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(C, {}), Chunk388032.intl.string(Chunk715689.default["n9/rUq"])]
        }), B ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(C, {}), (0, Chunk54381.jsx)("span", {
            children: null == (t = N.find(e => {
              let {
                id: t
              } = e;
              return I === t
            })) ? true : exports.name
          })]
        }) : null]
      })]
    })]
  })
}