/** Chunk was on 46746 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214795 = require("./214795.js");

function y() {
  return (0, Chunk951288.jsx)("span", {
    className: Chunk214795.ellipsis,
    children: "•"
  })
}

function O(e) {
  let {
    source: t
  } = e, {
    data: n
  } = (0, c.IX)(null != t && (0, x.T)(t) ? t.id : true);
  return null == t ? (0, r.jsx)(a.hGI, {
    className: S.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, x.T)(t) ? (0, r.jsx)(d.Z, {
    game: n,
    pid: t.pid
  }) : null == t.icon || "" === t.icon ? (0, r.jsx)(a.hGI, {
    className: S.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, r.jsx)("img", {
    src: t.icon,
    alt: "",
    className: S.sourceIcon
  })
}

function Z() {
  var e, t, n, i;
  let [{
    preset: c,
    resolution: d,
    fps: x,
    muteStreamAudio: Z,
    selectedSource: w,
    sourceType: I,
    audioSourceId: N
  }] = (0, Chunk615161.E_)(), [T, P] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), E = T.concat(P), [R, A] = null != (n = (0, Chunk396678.Z)(Chunk728345)) ? require : [Chunk925329, Chunk556389], k = (0, Chunk672811.L)(Chunk728345), M = (0, Chunk891180.M)(R), D = I === Chunk268146.vA.CAMERA, L = null != w, B = null != w ? null == w || null == (e = w.id) ? true : module.startsWith(Chunk268146.vA.CAMERA) : D, G = L ? true : Chunk728345 === Chunk37113.tI.PRESET_VIDEO ? Chunk388032.intl.string(Chunk637824.default.MuHUFR) : Chunk728345 === Chunk37113.tI.PRESET_DOCUMENTS ? Chunk388032.intl.string(Chunk637824.default.y0JuYW) : true, U = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getUseSystemScreensharePicker() && (0, Chunk358085.isLinux)());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk214795.root,
    children: [L && (0, Chunk951288.jsx)(O, {
      source: w
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk214795.summary,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk214795.sourceOrPresetName,
        variant: "text-md/semibold",
        color: "header-primary",
        children: L ? null != (i = null == w ? true : w.name) ? Chunk120356 : Chunk388032.intl.string(Chunk637824.default["hJMA+/"]) : k
      }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
        className: Chunk214795.summaryDetail,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [L && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsxs)("span", {
            className: Chunk214795.iconSummaryContainer,
            children: [(0, Chunk951288.jsx)(Chunk481060.ewm, {
              className: Chunk214795.icon,
              size: "xxs",
              color: "currentColor"
            }), k]
          }), (0, Chunk951288.jsx)(y, {})]
        }), null != G && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)("span", {
            children: G
          }), (0, Chunk951288.jsx)(y, {})]
        }), (0, Chunk951288.jsx)("span", {
          children: M
        }), (0, Chunk951288.jsx)(y, {}), (0, Chunk951288.jsx)("span", {
          children: "".concat(A, "fps")
        }), Z && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(y, {}), (0, Chunk951288.jsxs)("span", {
            className: Chunk214795.iconSummaryContainer,
            children: [(0, Chunk951288.jsx)(Chunk481060.OyP, {
              className: l()(Chunk214795.icon, Chunk214795.mutedIcon),
              size: "xxs",
              color: "currentColor"
            }), Chunk388032.intl.string(Chunk637824.default.FzMGWV)]
          })]
        }), !Z && !B && U && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(y, {}), Chunk388032.intl.string(Chunk637824.default["n9/rUl"])]
        }), B ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(y, {}), (0, Chunk951288.jsx)("span", {
            children: null == (t = E.find(e => {
              let {
                id: t
              } = e;
              return N === t
            })) ? true : exports.name
          })]
        }) : null]
      })]
    })]
  })
}