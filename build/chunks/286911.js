/** Chunk was on 46875 **/
/** chunk id: 286911, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./321073.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk355622 = require("./355622.js"),
  Chunk522602 = require("./522602.js"),
  Chunk304162 = require("./304162.js"),
  Chunk835134 = require("./835134.js");

function o(e, t) {
  var n, o;
  let {
    mediaAttachments: d,
    hasThumbnail: u
  } = function(e) {
    let [t, n] = l.useState(null), c = (0, r.yK)([i.A], () => {
      let t = i.A.getUploads(e.id, a.oU.CREATE_FORUM_POST.drafts.type),
        n = t.find(e => e.isThumbnail);
      return null != n ? [n] : t.filter(e => e.isVideo || e.isImage)
    }), o = l.useMemo(() => c.some(e => e.isThumbnail), [c]);
    return l.useEffect(() => {
      let e = [];
      return n(c.slice(0, s.A8).flatMap(t => {
        var n;
        let l = null == t || null == (n = t.item) ? true : n.file;
        if (null == l) return [];
        let r = URL.createObjectURL(l);
        return e.push(r), {
          id: t.id,
          src: r,
          spoiler: t.spoiler,
          alt: t.description,
          isThumbnail: t.isThumbnail,
          upload: true === t.isThumbnail ? t : true,
          isVideo: t.isVideo
        }
      })), () => {
        n(null), e.forEach(e => URL.revokeObjectURL(e))
      }
    }, [c]), {
      mediaAttachments: t,
      hasThumbnail: o
    }
  }(e), m = Math.max(s.A8 - (null != (n = null == d ? true : d.length) ? n : 0), 0), {
    embeds: h
  } = (0, c.w)(u, m, t), f = l.useMemo(() => null == h ? true : h.flatMap(e => {
    let t = (0, s.m3)(e);
    return null == t ? [] : {
      id: t,
      src: t,
      spoiler: false,
      alt: e.title
    }
  }), [h]), g = [...null != d ? d : []];
  return !u && m > 0 && g.push(...null != (o = null == f ? true : f.slice(0, m)) ? o : []), g
}