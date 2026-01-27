/** Chunk was on web.js **/
/** chunk id: 559405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./446912.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk319354 = require("./319354.js"),
  Chunk51183 = require("./51183.jsx"),
  Chunk886019 = require("./886019.js"),
  Chunk358957 = require("./358957.js"),
  Chunk708455 = require("./708455.js");
let u = new Set([Chunk934551.MagicDoorIcon.name, Chunk934551.GameControllerIcon.name, Chunk934551.EmbedIcon.name, Chunk934551.ObjectIcon.name]),
  d = Object.fromEntries(Object.entries(Chunk319354.E).map(e => {
    let [t, n] = e;
    return [n, t]
  })),
  f = e => {
    var t, n;
    let {
      className: i,
      hangStatusActivity: a,
      size: f,
      animate: p = true,
      fallbackVariant: _ = "twemoji",
      userId: h
    } = e, m = (0, l.e)(h, null == a ? true : a.state), g = (0, s.vt)(h, a, _);
    if ((m[0] === c.Kk.CUSTOM || (null == g ? true : g.emoji) != null) && null != a) {
      let e = null != (t = null == g ? true : g.emoji) ? t : a.emoji;
      return null != e ? (0, r.jsx)(o.A, {
        emoji: e,
        className: i,
        hideTooltip: true,
        animate: p
      }) : null
    }
    let E = null == g ? true : g.icon;
    if (null == E) return null;
    if ("string" == typeof E) return null != E ? (0, r.jsx)("img", {
      src: E,
      alt: "",
      className: null != i ? i : true
    }) : null;
    let y = E;
    return u.has(E.name) ? (0, r.jsx)(y, {
      size: null != (n = d[f]) ? n : true,
      className: i
    }) : (0, r.jsx)(y, {
      size: f,
      className: i
    })
  }