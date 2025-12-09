/** Chunk was on 1272 **/
/** chunk id: 203259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js"),
  Chunk572720 = require("./572720.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: p
  } = e, f = (0, l.e7)([s.Z], () => {
    var e;
    let t = null == (e = s.Z.getLastClipsSession()) ? true : e.newClipIds;
    return null == t ? null : s.Z.getClips().filter(e => t.includes(e.id))[0]
  }), g = (0, u.l)(f), h = i.useCallback(() => {
    (0, c.eL)()
  }, []);
  return null == f ? null : f.type !== o.NJ.SCREENSHOT && f.type !== o.NJ.VOICE_CLIP && null != g ? (0, r.jsx)(a.Mb, {
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
    onRequestClose: h
  }) : (0, r.jsx)(a.J2, {
    targetElementRef: {
      current: n
    },
    position: "bottom",
    title: d.intl.string(d.t.JugHO7),
    body: d.intl.format(d.t["+qxkzC"], {
      count: p.newClipIds.length
    }),
    graphic: null != f.thumbnail ? {
      type: "image",
      src: f.thumbnail
    } : true,
    caretConfig: {
      align: "center"
    },
    actions: [{
      text: d.intl.string(d.t.tQPBml),
      onClick: t
    }],
    onRequestClose: h
  })
}