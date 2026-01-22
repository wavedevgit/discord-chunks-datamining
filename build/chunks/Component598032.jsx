/** Chunk was on 96811 **/
/** chunk id: 598032, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function _() {
  return (0, n.jsx)("span", {
    className: A.gO,
    children: "•"
  })
}

function O(e) {
  let {
    source: t
  } = e, {
    data: r
  } = (0, o.YY)(null != t && (0, m.l)(t) ? t.id : true);
  return null == t ? (0, n.jsx)(c.Fzq, {
    className: A.Jd,
    size: "md",
    color: "currentColor"
  }) : (0, m.l)(t) ? (0, n.jsx)(d.A, {
    game: r,
    pid: t.pid
  }) : null == t.icon || "" === t.icon ? (0, n.jsx)(c.Fzq, {
    className: A.Jd,
    size: "md",
    color: "currentColor"
  }) : (0, n.jsx)("img", {
    src: t.icon,
    alt: "",
    className: A.pI
  })
}

function C() {
  var e, t, r, l;
  let [{
    preset: o,
    resolution: d,
    fps: m,
    muteStreamAudio: C,
    selectedSource: w,
    sourceType: E,
    audioSourceId: N
  }] = (0, p.tS)(), [I, T] = (0, f.tR)(v.oh.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), R = I.concat(T), [P, M] = null != (e = (0, g.A)(o)) ? e : [d, m], D = (0, x.K)(o), U = (0, j.b)(P), L = E === i.fS.CAMERA, G = null != w, k = null != w ? null == w || null == (r = w.id) ? true : r.startsWith(i.fS.CAMERA) : L, F = o === b.jQ.PRESET_AUTO, Z = G ? true : o === b.jQ.PRESET_VIDEO ? S.intl.string(y.default.MuHUFe) : o === b.jQ.PRESET_DOCUMENTS ? S.intl.string(y.default.y0JuYR) : o === b.jQ.PRESET_AUTO ? S.intl.string(y.default.m4jtlc) : true, H = (0, a.bG)([u.A], () => u.A.getUseSystemScreensharePicker() && (0, h.isLinux)());
  return (0, n.jsxs)("div", {
    className: A.zr,
    children: [G && (0, n.jsx)(O, {
      source: w
    }), (0, n.jsxs)("div", {
      className: A.z,
      children: [(0, n.jsx)(c.Text, {
        className: A.fB,
        variant: "text-md/semibold",
        color: "text-strong",
        children: G ? null != (t = null == w ? true : w.name) ? t : S.intl.string(y.default["hJMA+x"]) : D
      }), (0, n.jsxs)(c.Text, {
        className: A.kI,
        variant: "text-xs/medium",
        color: "text-muted",
        children: [G && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("span", {
            className: A.x5,
            children: [(0, n.jsx)(c.Zes, {
              className: A.Kk,
              size: "xxs",
              color: "currentColor"
            }), D]
          }), (0, n.jsx)(_, {})]
        }), null != Z && (0, n.jsx)("span", {
          children: Z
        }), !F && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_, {}), (0, n.jsx)("span", {
            children: U
          }), (0, n.jsx)(_, {}), (0, n.jsx)("span", {
            children: "".concat(M, "fps")
          })]
        }), C && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_, {}), (0, n.jsxs)("span", {
            className: A.x5,
            children: [(0, n.jsx)(c._RO, {
              className: s()(A.Kk, A.tG),
              size: "xxs",
              color: "currentColor"
            }), S.intl.string(y.default.FzMGWR)]
          })]
        }), !C && !k && H && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_, {}), S.intl.string(y.default["n9/rUq"])]
        }), k ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_, {}), (0, n.jsx)("span", {
            children: null == (l = R.find(e => {
              let {
                id: t
              } = e;
              return N === t
            })) ? true : l.name
          })]
        }) : null]
      })]
    })]
  })
}