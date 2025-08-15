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
  Chunk668519 = require("./668519.js"),
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

function O() {
  return (0, Chunk951288.jsx)("span", {
    className: Chunk214795.ellipsis,
    children: "•"
  })
}

function I(e) {
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

function Z(e) {
  var t, n, i, c;
  let {
    nativePickerEnabled: d
  } = e, [{
    preset: g,
    resolution: Z,
    fps: w,
    muteStreamAudio: N,
    selectedSource: T,
    sourceType: E,
    audioSourceId: P
  }] = (0, _.E_)(), {
    twoClickVariant: R
  } = (0, h.a)({
    location: "go_live_modal_refresh",
    autoTrackExposure: false
  }), [A, M] = (0, u.Ls)(S.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), k = A.concat(M), [L, D] = null != (i = (0, v.Z)(g)) ? i : [Z, w], B = (0, p.L)(g), U = (0, x.M)(L), G = E === s.vA.CAMERA, W = null != T || !!R && (!d || G), F = null != T ? null == T || null == (t = T.id) ? true : t.startsWith(s.vA.CAMERA) : G, H = W ? true : g === j.tI.PRESET_VIDEO ? C.intl.string(b.default.MuHUFR) : g === j.tI.PRESET_DOCUMENTS ? C.intl.string(b.default.y0JuYW) : true, z = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, m.isLinux)());
  return (0, r.jsxs)("div", {
    className: y.root,
    children: [W && (0, r.jsx)(I, {
      source: T
    }), (0, r.jsxs)("div", {
      className: y.summary,
      children: [(0, r.jsx)(a.Text, {
        className: y.sourceOrPresetName,
        variant: "text-md/semibold",
        color: "header-primary",
        children: W ? null != (c = null == T ? true : T.name) ? c : C.intl.string(b.default["hJMA+/"]) : B
      }), (0, r.jsxs)(a.Text, {
        className: y.summaryDetail,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [W && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("span", {
            className: y.iconSummaryContainer,
            children: [(0, r.jsx)(a.ewm, {
              className: y.icon,
              size: "xxs",
              color: "currentColor"
            }), B]
          }), (0, r.jsx)(O, {})]
        }), null != H && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            children: H
          }), (0, r.jsx)(O, {})]
        }), (0, r.jsx)("span", {
          children: U
        }), (0, r.jsx)(O, {}), (0, r.jsx)("span", {
          children: "".concat(D, "fps")
        }), N && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(O, {}), (0, r.jsxs)("span", {
            className: y.iconSummaryContainer,
            children: [(0, r.jsx)(a.OyP, {
              className: l()(y.icon, y.mutedIcon),
              size: "xxs",
              color: "currentColor"
            }), C.intl.string(b.default.FzMGWV)]
          })]
        }), !N && !F && z && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(O, {}), C.intl.string(b.default["n9/rUl"])]
        }), F ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(O, {}), (0, r.jsx)("span", {
            children: null == (n = k.find(e => {
              let {
                id: t
              } = e;
              return P === t
            })) ? true : n.name
          })]
        }) : null]
      })]
    })]
  })
}