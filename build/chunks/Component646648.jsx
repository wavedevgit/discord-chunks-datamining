/** Chunk was on web.js **/
/** chunk id: 646648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk833349 = require("./833349.js"),
  Chunk90644 = require("./90644.js"),
  Chunk353411 = require("./353411.js"),
  Chunk879945 = require("./879945.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");

function m(e) {
  var t, n, m, g, E;
  let {
    user: y,
    activity: b,
    onAction: O
  } = e, {
    themeType: v
  } = (0, u.E)(), A = (0, l._B)(b, y), I = (0, l.J$)(b, y);
  if (!(0, s.A)(b) || !(0, o.A)(b, f.jUm.PLAY) && !(0, o.A)(b, f.jUm.SYNC)) return null;
  let S = e => {
      null == e || e.stopPropagation(), null == O || O({
        action: "PRESS_PLAY_ON_SPOTIFY_BUTTON"
      }), A.onClick()
    },
    T = e => {
      e.stopPropagation(), null == O || O({
        action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON"
      }), I.onClick()
    };
  return v === p.d.MODAL_V2 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.m, {
      text: I.tooltip,
      children: (0, r.jsx)(d.FD, {
        text: null != (g = I.label) ? g : _.intl.string(_.t.eU3inB),
        onClick: T,
        disabled: I.disabled,
        loading: I.loading
      })
    }), (0, r.jsx)(i.m, {
      text: A.tooltip,
      children: (0, r.jsx)(d.FD, {
        text: null != (E = A.label) ? E : _.intl.string(_.t.rRffNz),
        onClick: S,
        disabled: A.disabled,
        loading: A.loading
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: h.FS,
      children: (0, r.jsx)(i.m, {
        text: A.tooltip,
        children: (0, r.jsx)(d.FD, {
          icon: () => (0, r.jsx)(c.A, {}),
          text: null != (t = A.label) ? t : _.intl.string(_.t.rRffNz),
          onClick: S,
          disabled: A.disabled,
          loading: A.loading,
          fullWidth: true
        })
      })
    }), (0, r.jsx)(d.q3, {
      icon: a.J2m,
      tooltipText: null != (n = I.tooltip) ? n : _.intl.string(_.t.eU3inB),
      "aria-label": null != (m = I.label) ? m : _.intl.string(_.t.eU3inB),
      disabled: I.disabled,
      loading: I.loading,
      onClick: T
    })]
  })
}