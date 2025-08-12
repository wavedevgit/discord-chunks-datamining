/** Chunk was on web.js **/
/** chunk id: 131565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk788900 = require("./788900.js"),
  Chunk357352 = require("./357352.js"),
  Chunk565942 = require("./565942.js"),
  Chunk626135 = require("./626135.js"),
  Chunk436952 = require("./436952.js"),
  Chunk411149 = require("./411149.js"),
  Chunk115215 = require("./115215.js"),
  Chunk151480 = require("./151480.js"),
  Chunk461762 = require("./461762.js"),
  Chunk680783 = require("./680783.js"),
  Chunk981631 = require("./981631.js"),
  Chunk658517 = require("./658517.js"),
  g = require("./413135.js").Buffer;

function E(e) {
  let {
    chatWallpaperState: t
  } = e, n = c.qM.useExperiment({
    location: "channel_chat_wallpaper"
  }).enabled, d = (0, _.Z)(t.wallpaperId), p = null != d ? (0, a.I)(d.asset) : null, E = (null == d ? true : d.thumbhash) != null ? (0, o.xS)(g.from(d.thumbhash, "base64")) : true, [b, y] = i.useState(E);
  return (i.useEffect(() => {
    null == p && t.isViewable && u.Z.shouldFetchWallpapers && (0, f.k9)()
  }, [p, t.isViewable]), i.useEffect(() => {
    if (null == p) return void y(true);
    let e = performance.now();
    y(E), (0, s.p)(p, t => {
      if (t === p) {
        y(true);
        let n = performance.now() - e;
        l.default.track(h.rMx.CHAT_WALLPAPER_DOWNLOADED, {
          time_used_in_ms: n,
          asset_url: t
        })
      }
    })
  }, [p, E]), t.isViewable && null != d) ? (0, r.jsxs)(r.Fragment, {
    children: [null != b && (0, r.jsx)("div", {
      className: m.thumbhashContainer,
      children: (0, r.jsx)("img", {
        src: b,
        alt: "",
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: m.wallpaperContainer,
      style: {
        backgroundImage: null != p ? "url(".concat(p, ")") : true,
        opacity: n ? d.opacity : true
      }
    })]
  }) : null
}

function b(e) {
  let {
    channel: t
  } = e, n = (0, p.Z)(t.id);
  return null == n || !n.isViewable || !t.isDM() && !t.isMultiUserDM() && !t.isGroupDM() || d.t(t) && !n.isPreview ? null : (0, r.jsx)(E, {
    chatWallpaperState: n
  })
}