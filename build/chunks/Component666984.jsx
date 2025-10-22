/** Chunk was on web.js **/
/** chunk id: 666984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk503438 = require("./503438.js"),
  Chunk829820 = require("./829820.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663907 = require("./663907.js");

function m(e) {
  var t, n, m, g, E;
  let {
    user: b,
    activity: y,
    onAction: O
  } = e, {
    themeType: v
  } = (0, u.z)(), I = (0, l.Ih)(y, b), T = (0, l.Fe)(y, b);
  if (!(0, s.Z)(y) || !(0, o.Z)(y, f.xjy.PLAY) && !(0, o.Z)(y, f.xjy.SYNC)) return null;
  let S = e => {
      null == e || e.stopPropagation(), null == O || O({
        action: "PRESS_PLAY_ON_SPOTIFY_BUTTON"
      }), I.onClick()
    },
    A = e => {
      e.stopPropagation(), null == O || O({
        action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON"
      }), T.onClick()
    };
  return v === _.l.MODAL_V2 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.u, {
      text: T.tooltip,
      children: (0, r.jsx)(d.O1, {
        text: null != (t = T.label) ? t : p.intl.string(p.t.eU3inB),
        onClick: A,
        disabled: T.disabled,
        loading: T.loading
      })
    }), (0, r.jsx)(i.u, {
      text: I.tooltip,
      children: (0, r.jsx)(d.O1, {
        text: null != (n = I.label) ? n : p.intl.string(p.t.rRffNz),
        onClick: S,
        disabled: I.disabled,
        loading: I.loading
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: h.primaryButton,
      children: (0, r.jsx)(i.u, {
        text: I.tooltip,
        children: (0, r.jsx)(d.O1, {
          icon: () => (0, r.jsx)(c.Z, {}),
          text: null != (m = I.label) ? m : p.intl.string(p.t.rRffNz),
          onClick: S,
          disabled: I.disabled,
          loading: I.loading,
          fullWidth: true
        })
      })
    }), (0, r.jsx)(d.pt, {
      icon: a.iOO,
      tooltipText: null != (g = T.tooltip) ? g : p.intl.string(p.t.eU3inB),
      "aria-label": null != (E = T.label) ? E : p.intl.string(p.t.eU3inB),
      disabled: T.disabled,
      loading: T.loading,
      onClick: A
    })]
  })
}