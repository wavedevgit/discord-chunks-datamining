/** Chunk was on 86357 **/
/** chunk id: 131565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk173893 = require("./173893.js"),
  b = require("./413135.js").Buffer;

function y(e) {
  let {
    chatWallpaperState: t
  } = e, n = c.qM.useExperiment({
    location: "channel_chat_wallpaper"
  }).enabled, d = (0, h.Z)(t.wallpaperId), f = null != d ? (0, a.I)(d.asset) : null, y = (null == d ? true : d.thumbhash) != null ? (0, l.xS)(b.from(d.thumbhash, "base64")) : true, [_, C] = i.useState(y);
  return (i.useEffect(() => {
    null == f && t.isViewable && u.Z.shouldFetchWallpapers && (0, p.k9)()
  }, [f, t.isViewable]), i.useEffect(() => {
    if (null == f) return void C(true);
    let e = performance.now();
    C(y), (0, o.p)(f, t => {
      if (t === f) {
        C(true);
        let n = performance.now();
        s.default.track(m.rMx.CHAT_WALLPAPER_DOWNLOADED, {
          time_used_in_ms: n - e,
          asset_url: t
        })
      }
    })
  }, [f, y]), t.isViewable && null != d) ? (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)("div", {
      className: g.thumbhashContainer,
      children: (0, r.jsx)("img", {
        src: _,
        alt: "",
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: g.wallpaperContainer,
      style: {
        backgroundImage: null != f ? "url(".concat(f, ")") : true,
        opacity: n ? d.opacity : true
      }
    })]
  }) : null
}

function _(e) {
  let {
    channel: t
  } = e, n = (0, f.Z)(t.id);
  return null == n || !n.isViewable || !t.isDM() && !t.isMultiUserDM() && !t.isGroupDM() || d.t(t) && !n.isPreview ? null : (0, r.jsx)(y, {
    chatWallpaperState: n
  })
}