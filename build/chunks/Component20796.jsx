/** Chunk was on 7685 **/
/** chunk id: 20796, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk808380 = require("./808380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk652215 = require("./652215.js");
let g = {
  [Chunk808380.Y.XBOX]: Chunk266080.A,
  [Chunk808380.Y.PLAYSTATION]: Chunk790381.A
};

function f(e) {
  let {
    activities: t,
    gameProfileEntry: n,
    gameIconSize: i,
    platformIconSizePx: c
  } = e, d = r.useMemo(() => t.find(e => {
    let {
      type: t
    } = e;
    return t === h.$pd.PLAYING
  }), [t]), f = (0, a.h)(null == d ? true : d.application_id);
  return null == d ? null : function(e) {
    var t;
    let {
      gameProfileEntry: n,
      gameApplication: r,
      gameIconSize: i,
      platformIconSizePx: a
    } = e, c = null == n || null == (t = n.extra) ? true : t.platform, d = null != c ? g[c] : null, h = null != d ? (0, l.jsx)(d, {
      width: a,
      height: a,
      color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT
    }) : null, f = null == r ? true : r.getIconURL(a), p = null != f ? (0, l.jsx)(o.V, {
      src: f,
      alt: null == r ? true : r.name,
      size: a
    }) : null;
    return (0, l.jsx)(u.A, {
      game: r,
      size: i,
      unknownGameIconFallback: null != h ? h : p
    })
  }({
    gameProfileEntry: n,
    gameApplication: f,
    gameIconSize: i,
    platformIconSizePx: c
  })
}