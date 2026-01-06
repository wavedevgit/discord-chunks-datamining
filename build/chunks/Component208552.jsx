/** Chunk was on 46746 **/
/** chunk id: 208552, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk443762 = require("./443762.jsx"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk556389 = require("./556389.js"),
  Chunk226372 = require("./226372.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk879293 = require("./879293.js");

function O() {
  return (0, Chunk54381.jsx)("span", {
    className: Chunk879293.ellipsis,
    children: "•"
  })
}

function C(e) {
  let {
    source: t
  } = e, {
    data: r
  } = (0, a.IX)(null != t && (0, g.T)(t) ? t.id : true);
  return null == t ? (0, n.jsx)(c.hGI, {
    className: w.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, g.T)(t) ? (0, n.jsx)(d.Z, {
    game: r,
    pid: t.pid
  }) : null == t.icon || "" === t.icon ? (0, n.jsx)(c.hGI, {
    className: w.screenArrowIcon,
    size: "md",
    color: "currentColor"
  }) : (0, n.jsx)("img", {
    src: t.icon,
    alt: "",
    className: w.sourceIcon
  })
}

function S() {
  var e, t, r, i;
  let [{
    preset: a,
    resolution: d,
    fps: g,
    muteStreamAudio: S,
    selectedSource: I,
    sourceType: Z,
    audioSourceId: E
  }] = (0, Chunk443762.E_)(), [P, N] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), T = P.concat(N), [R, M] = null != (r = (0, Chunk226372.Z)(Chunk728345)) ? require : [Chunk925329, Chunk556389], A = (0, Chunk672811.L)(Chunk728345), L = (0, Chunk891180.M)(R), U = Z === Chunk268146.vA.CAMERA, G = null != I, D = null != I ? null == I || null == (e = I.id) ? true : module.startsWith(Chunk268146.vA.CAMERA) : U, H = Chunk728345 === Chunk37113.tI.PRESET_AUTO, B = G ? true : Chunk728345 === Chunk37113.tI.PRESET_VIDEO ? Chunk388032.intl.string(Chunk715689.default.MuHUFe) : Chunk728345 === Chunk37113.tI.PRESET_DOCUMENTS ? Chunk388032.intl.string(Chunk715689.default.y0JuYR) : Chunk728345 === Chunk37113.tI.PRESET_AUTO ? Chunk388032.intl.string(Chunk715689.default.m4jtlc) : true, k = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getUseSystemScreensharePicker() && (0, Chunk358085.isLinux)());
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk879293.root,
    children: [G && (0, Chunk54381.jsx)(C, {
      source: I
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk879293.summary,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk879293.sourceOrPresetName,
        variant: "text-md/semibold",
        color: "text-strong",
        children: G ? null != (i = null == I ? true : I.name) ? Chunk120356 : Chunk388032.intl.string(Chunk715689.default["hJMA+x"]) : A
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        className: Chunk879293.summaryDetail,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [G && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsxs)("span", {
            className: Chunk879293.iconSummaryContainer,
            children: [(0, Chunk54381.jsx)(Chunk481060.ewm, {
              className: Chunk879293.icon,
              size: "xxs",
              color: "currentColor"
            }), A]
          }), (0, Chunk54381.jsx)(O, {})]
        }), null != B && (0, Chunk54381.jsx)("span", {
          children: B
        }), !H && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(O, {}), (0, Chunk54381.jsx)("span", {
            children: L
          }), (0, Chunk54381.jsx)(O, {}), (0, Chunk54381.jsx)("span", {
            children: "".concat(M, "fps")
          })]
        }), S && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(O, {}), (0, Chunk54381.jsxs)("span", {
            className: Chunk879293.iconSummaryContainer,
            children: [(0, Chunk54381.jsx)(Chunk481060.OyP, {
              className: s()(Chunk879293.icon, Chunk879293.mutedIcon),
              size: "xxs",
              color: "currentColor"
            }), Chunk388032.intl.string(Chunk715689.default.FzMGWR)]
          })]
        }), !S && !D && k && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(O, {}), Chunk388032.intl.string(Chunk715689.default["n9/rUq"])]
        }), D ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(O, {}), (0, Chunk54381.jsx)("span", {
            children: null == (t = T.find(e => {
              let {
                id: t
              } = e;
              return E === t
            })) ? true : exports.name
          })]
        }) : null]
      })]
    })]
  })
}