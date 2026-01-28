/** Chunk was on 96811 **/
/** chunk id: 598032, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk627363 = require("./627363.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk74848 = require("./74848.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk461430 = require("./461430.js"),
  Chunk56439 = require("./56439.js"),
  Chunk654291 = require("./654291.js"),
  Chunk420659 = require("./420659.js"),
  Chunk753070 = require("./753070.js"),
  Chunk731854 = require("./731854.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk607186 = require("./607186.js");

function A() {
  return (0, n.jsx)("span", {
    className: S.gO,
    children: "•"
  })
}

function O(e) {
  let {
    source: t
  } = e, {
    data: r
  } = (0, c.YY)(null != t && (0, j.l)(t) ? t.id : true);
  return null == t ? (0, n.jsx)(o.Fzq, {
    className: S.Jd,
    size: "md",
    color: "currentColor"
  }) : (0, j.l)(t) ? (0, n.jsx)(d.A, {
    game: r,
    pid: t.pid
  }) : null == t.icon || "" === t.icon ? (0, n.jsx)(o.Fzq, {
    className: S.Jd,
    size: "md",
    color: "currentColor"
  }) : (0, n.jsx)("img", {
    src: t.icon,
    alt: "",
    className: S.pI
  })
}

function w() {
  var e, t, r, i;
  let [{
    preset: c,
    resolution: d,
    fps: j,
    muteStreamAudio: w,
    selectedSource: C,
    sourceType: E,
    audioSourceId: I
  }] = (0, p.tS)(), [N, T] = (0, u.tR)(v.oh.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), R = N.concat(T), [P, M] = null != (e = (0, g.A)(c)) ? e : [d, j], D = (0, x.K)(c), U = (0, m.b)(P), G = E === s.fS.CAMERA, L = null != C, k = null != C ? null == C || null == (r = C.id) ? true : r.startsWith(s.fS.CAMERA) : G, F = c === _.jQ.PRESET_AUTO, H = L ? true : c === _.jQ.PRESET_VIDEO ? y.intl.string(b.default.MuHUFe) : c === _.jQ.PRESET_DOCUMENTS ? y.intl.string(b.default.y0JuYR) : c === _.jQ.PRESET_AUTO ? y.intl.string(b.default.m4jtlc) : true, B = (0, a.bG)([f.A], () => f.A.getUseSystemScreensharePicker() && (0, h.isLinux)());
  return (0, n.jsxs)("div", {
    className: S.zr,
    children: [L && (0, n.jsx)(O, {
      source: C
    }), (0, n.jsxs)("div", {
      className: S.z,
      children: [(0, n.jsx)(o.Text, {
        className: S.fB,
        variant: "text-md/semibold",
        color: "text-strong",
        children: L ? null != (t = null == C ? true : C.name) ? t : y.intl.string(b.default["hJMA+x"]) : D
      }), (0, n.jsxs)(o.Text, {
        className: S.kI,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [L && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("span", {
            className: S.x5,
            children: [(0, n.jsx)(o.Zes, {
              className: S.Kk,
              size: "xxs",
              color: "currentColor"
            }), D]
          }), (0, n.jsx)(A, {})]
        }), null != H && (0, n.jsx)("span", {
          children: H
        }), !F && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(A, {}), (0, n.jsx)("span", {
            children: U
          }), (0, n.jsx)(A, {}), (0, n.jsx)("span", {
            children: "".concat(M, "fps")
          })]
        }), w && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(A, {}), (0, n.jsxs)("span", {
            className: S.x5,
            children: [(0, n.jsx)(o._RO, {
              className: l()(S.Kk, S.tG),
              size: "xxs",
              color: "currentColor"
            }), y.intl.string(b.default.FzMGWR)]
          })]
        }), !w && !k && B && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(A, {}), y.intl.string(b.default["n9/rUq"])]
        }), k ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(A, {}), (0, n.jsx)("span", {
            children: null == (i = R.find(e => {
              let {
                id: t
              } = e;
              return I === t
            })) ? true : i.name
          })]
        }) : null]
      })]
    })]
  })
}