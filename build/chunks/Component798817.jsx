/** Chunk was on 21738 **/
/** chunk id: 798817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk399925 = require("./399925.js"),
  Chunk665039 = require("./665039.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: p
  } = e, h = (0, l.bG)([s.A], () => {
    var e;
    let t = null == (e = s.A.getLastClipsSession()) ? true : e.newClipIds;
    return null == t ? null : s.A.getClips().filter(e => t.includes(e.id))[0]
  }), g = (0, u.j)(h), f = i.useCallback(() => {
    (0, c.jA)()
  }, []);
  return null == h ? null : h.type !== o.nQ.SCREENSHOT && h.type !== o.nQ.VOICE_CLIP && null != g ? (0, r.jsx)(a.HZ, {
    targetElementRef: {
      current: n
    },
    position: "bottom",
    title: d.intl.string(d.t.JugHO7),
    body: d.intl.format(d.t["+qxkzC"], {
      count: p.newClipIds.length
    }),
    assetUrl: g,
    disableMediaViewer: true,
    caretConfig: {
      align: "center"
    },
    action: {
      text: d.intl.string(d.t.tQPBml),
      onClick: t
    },
    onRequestClose: f
  }) : (0, r.jsx)(a.AM, {
    targetElementRef: {
      current: n
    },
    position: "bottom",
    title: d.intl.string(d.t.JugHO7),
    body: d.intl.format(d.t["+qxkzC"], {
      count: p.newClipIds.length
    }),
    graphic: null != h.thumbnail ? {
      type: "image",
      src: h.thumbnail
    } : true,
    caretConfig: {
      align: "center"
    },
    actions: [{
      text: d.intl.string(d.t.tQPBml),
      onClick: t
    }],
    onRequestClose: f
  })
}