/** Chunk was on 49131 **/
/** chunk id: 124252, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./539854.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk541716 = require("./541716.js"),
  Chunk117530 = require("./117530.js"),
  Chunk154135 = require("./154135.js"),
  Chunk337077 = require("./337077.js");

function c(e, t) {
  var n, c;
  let {
    mediaAttachments: d,
    hasThumbnail: u
  } = function(e) {
    let [t, n] = r.useState(null), o = (0, a.Wu)([l.Z], () => {
      let t = l.Z.getUploads(e.id, i.Ie.CREATE_FORUM_POST.drafts.type),
        n = t.find(e => e.isThumbnail);
      return null != n ? [n] : t.filter(e => e.isVideo || e.isImage)
    }), c = r.useMemo(() => o.some(e => e.isThumbnail), [o]);
    return r.useEffect(() => {
      let e = [];
      return n(o.slice(0, s.Yh).flatMap(t => {
        var n;
        let r = null == t || null == (n = t.item) ? true : n.file;
        if (null == r) return [];
        let a = URL.createObjectURL(r);
        return e.push(a), {
          id: t.id,
          src: a,
          spoiler: t.spoiler,
          alt: t.description,
          isThumbnail: t.isThumbnail,
          upload: true === t.isThumbnail ? t : true,
          isVideo: t.isVideo
        }
      })), () => {
        n(null), e.forEach(e => URL.revokeObjectURL(e))
      }
    }, [o]), {
      mediaAttachments: t,
      hasThumbnail: c
    }
  }(e), m = Math.max(s.Yh - (null != (n = null == d ? true : d.length) ? n : 0), 0), {
    embeds: h
  } = (0, o.M)(u, m, t), f = r.useMemo(() => null == h ? true : h.flatMap(e => {
    let t = (0, s.Vh)(e);
    return null == t ? [] : {
      id: t,
      src: t,
      spoiler: false,
      alt: e.title
    }
  }), [h]), g = [...null != d ? d : []];
  return !u && m > 0 && g.push(...null != (c = null == f ? true : f.slice(0, m)) ? c : []), g
}