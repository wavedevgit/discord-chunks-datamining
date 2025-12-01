/** Chunk was on web.js **/
/** chunk id: 666984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk704543 = require("./704543.js");

function h(e) {
  var t, n, h, g, E;
  let {
    user: b,
    activity: y,
    onAction: O
  } = e, {
    themeType: v
  } = (0, u.z)(), S = (0, l.Ih)(y, b), I = (0, l.Fe)(y, b);
  if (!(0, s.Z)(y) || !(0, o.Z)(y, f.xjy.PLAY) && !(0, o.Z)(y, f.xjy.SYNC)) return null;
  let T = e => {
      null == e || e.stopPropagation(), null == O || O({
        action: "PRESS_PLAY_ON_SPOTIFY_BUTTON"
      }), S.onClick()
    },
    A = e => {
      e.stopPropagation(), null == O || O({
        action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON"
      }), I.onClick()
    };
  return v === p.l.MODAL_V2 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.u, {
      text: I.tooltip,
      children: (0, r.jsx)(d.O1, {
        text: null != (t = I.label) ? t : _.intl.string(_.t.eU3inB),
        onClick: A,
        disabled: I.disabled,
        loading: I.loading
      })
    }), (0, r.jsx)(i.u, {
      text: S.tooltip,
      children: (0, r.jsx)(d.O1, {
        text: null != (n = S.label) ? n : _.intl.string(_.t.rRffNz),
        onClick: T,
        disabled: S.disabled,
        loading: S.loading
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.primaryButton,
      children: (0, r.jsx)(i.u, {
        text: S.tooltip,
        children: (0, r.jsx)(d.O1, {
          icon: () => (0, r.jsx)(c.Z, {}),
          text: null != (h = S.label) ? h : _.intl.string(_.t.rRffNz),
          onClick: T,
          disabled: S.disabled,
          loading: S.loading,
          fullWidth: true
        })
      })
    }), (0, r.jsx)(d.pt, {
      icon: a.iOO,
      tooltipText: null != (g = I.tooltip) ? g : _.intl.string(_.t.eU3inB),
      "aria-label": null != (E = I.label) ? E : _.intl.string(_.t.eU3inB),
      disabled: I.disabled,
      loading: I.loading,
      onClick: A
    })]
  })
}