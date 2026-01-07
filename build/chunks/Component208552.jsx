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
  return (0, n.jsx)("span", {
    className: w.ellipsis,
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
  }] = (0, p.E_)(), [P, N] = (0, u.Ls)(_.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), T = P.concat(N), [R, M] = null != (r = (0, v.Z)(a)) ? r : [d, g], A = (0, x.L)(a), L = (0, m.M)(R), U = Z === l.vA.CAMERA, G = null != I, D = null != I ? null == I || null == (e = I.id) ? true : e.startsWith(l.vA.CAMERA) : U, H = a === j.tI.PRESET_AUTO, B = G ? true : a === j.tI.PRESET_VIDEO ? y.intl.string(b.default.MuHUFe) : a === j.tI.PRESET_DOCUMENTS ? y.intl.string(b.default.y0JuYR) : a === j.tI.PRESET_AUTO ? y.intl.string(b.default.m4jtlc) : true, k = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, h.isLinux)());
  return (0, n.jsxs)("div", {
    className: w.root,
    children: [G && (0, n.jsx)(C, {
      source: I
    }), (0, n.jsxs)("div", {
      className: w.summary,
      children: [(0, n.jsx)(c.Text, {
        className: w.sourceOrPresetName,
        variant: "text-md/semibold",
        color: "text-strong",
        children: G ? null != (i = null == I ? true : I.name) ? i : y.intl.string(b.default["hJMA+x"]) : A
      }), (0, n.jsxs)(c.Text, {
        className: w.summaryDetail,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [G && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("span", {
            className: w.iconSummaryContainer,
            children: [(0, n.jsx)(c.ewm, {
              className: w.icon,
              size: "xxs",
              color: "currentColor"
            }), A]
          }), (0, n.jsx)(O, {})]
        }), null != B && (0, n.jsx)("span", {
          children: B
        }), !H && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(O, {}), (0, n.jsx)("span", {
            children: L
          }), (0, n.jsx)(O, {}), (0, n.jsx)("span", {
            children: "".concat(M, "fps")
          })]
        }), S && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(O, {}), (0, n.jsxs)("span", {
            className: w.iconSummaryContainer,
            children: [(0, n.jsx)(c.OyP, {
              className: s()(w.icon, w.mutedIcon),
              size: "xxs",
              color: "currentColor"
            }), y.intl.string(b.default.FzMGWR)]
          })]
        }), !S && !D && k && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(O, {}), y.intl.string(b.default["n9/rUq"])]
        }), D ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(O, {}), (0, n.jsx)("span", {
            children: null == (t = T.find(e => {
              let {
                id: t
              } = e;
              return E === t
            })) ? true : t.name
          })]
        }) : null]
      })]
    })]
  })
}