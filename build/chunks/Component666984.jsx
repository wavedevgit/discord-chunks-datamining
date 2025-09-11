/** Chunk was on web.js **/
/** chunk id: 666984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk503438 = require("./503438.js"),
  Chunk829820 = require("./829820.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663907 = require("./663907.js");

function g(e) {
  var t, n, g, E;
  let {
    user: b,
    activity: y,
    onAction: O
  } = e, {
    themeType: v
  } = (0, d.z)(), I = (0, c.Ih)(y, b), T = (0, c.Fe)(y, b);
  if (!(0, l.Z)(y) || !(0, s.Z)(y, _.xjy.PLAY) && !(0, s.Z)(y, _.xjy.SYNC)) return null;
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
  return v === p.l.MODAL_V2 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.u, {
      asContainer: true,
      text: T.tooltip,
      children: (0, r.jsx)(f.tG, {
        text: null != (t = T.label) ? t : h.intl.string(h.t.eU3inJ),
        disabled: T.disabled,
        submitting: T.loading,
        size: a.Ph.TINY,
        themeColor: "secondary",
        onClick: A
      })
    }), (0, r.jsx)(i.u, {
      asContainer: true,
      text: I.tooltip,
      children: (0, r.jsx)(f.tG, {
        text: null != (n = I.label) ? n : h.intl.string(h.t.rRffNz),
        disabled: I.disabled,
        submitting: I.loading,
        size: a.Ph.TINY,
        themeColor: "secondary",
        onClick: S
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.u, {
      asContainer: true,
      text: I.tooltip,
      children: (0, r.jsx)(f.tG, {
        icon: () => (0, r.jsx)(u.Z, {}),
        text: null != (g = I.label) ? g : h.intl.string(h.t.rRffNz),
        disabled: I.disabled,
        submitting: I.loading,
        wrapperClassName: m.primaryButton,
        themeColor: "secondary",
        fullWidth: true,
        onClick: S
      })
    }), (0, r.jsx)(f.ef, {
      icon: o.iOO,
      tooltipText: null != (E = T.tooltip) ? E : h.intl.string(h.t.eU3inJ),
      disabled: T.disabled,
      submitting: T.loading,
      themeColor: "secondary",
      fullWidth: true,
      onClick: A
    })]
  })
}