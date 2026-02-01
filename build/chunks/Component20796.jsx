/** Chunk was on 71447 **/
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
let p = {
  [Chunk808380.Y.XBOX]: Chunk266080.A,
  [Chunk808380.Y.PLAYSTATION]: Chunk790381.A
};

function f(e) {
  let {
    activities: t,
    gameProfileEntry: n,
    gameIconSize: l,
    platformIconSizePx: c
  } = e, d = r.useMemo(() => t.find(e => {
    let {
      type: t
    } = e;
    return t === h.$pd.PLAYING
  }), [t]), f = (0, s.h)(null == d ? true : d.application_id);
  return null == d ? null : function(e) {
    var t;
    let {
      gameProfileEntry: n,
      gameApplication: r,
      gameIconSize: l,
      platformIconSizePx: s
    } = e, c = null == n || null == (t = n.extra) ? true : t.platform, d = null != c ? p[c] : null, h = null != d ? (0, i.jsx)(d, {
      width: s,
      height: s,
      color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT
    }) : null, f = null == r ? true : r.getIconURL(s), g = null != f ? (0, i.jsx)(o.V, {
      src: f,
      alt: null == r ? true : r.name,
      size: s
    }) : null;
    return (0, i.jsx)(u.A, {
      game: r,
      size: l,
      unknownGameIconFallback: null != h ? h : g
    })
  }({
    gameProfileEntry: n,
    gameApplication: f,
    gameIconSize: l,
    platformIconSizePx: c
  })
}