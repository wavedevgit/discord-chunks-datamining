/** Chunk was on web.js **/
/** chunk id: 145885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk731068 = require("./731068.js"),
  Chunk608214 = require("./608214.jsx"),
  Chunk269849 = require("./269849.js"),
  Chunk294520 = require("./294520.js"),
  Chunk448381 = require("./448381.js"),
  Chunk718266 = require("./718266.jsx"),
  Chunk564107 = require("./564107.jsx"),
  Chunk394839 = require("./394839.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk644447 = require("./644447.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk652215 = require("./652215.js");

function E(e) {
  let {
    message: t
  } = (0, m.jc)(), n = (0, a.bG)([_.A], () => _.A.getChannel(null == t ? true : t.channel_id)), {
    shouldHideMediaOptions: E,
    enabledContentHarmTypeFlags: y,
    gifAutoPlay: b,
    getGifFavButton: O,
    getOnMediaItemContextMenu: v
  } = (0, f.X)();
  if (null == t || null == n) return null;
  let A = e.items.map(e => (0, o.FX)(e.media, t)).filter(e => "INVALID" !== e.type),
    {
      srcToOnClickOverride: I,
      srcToHandlePreloadImage: S
    } = A.length > 1 ? (0, l.o)(A, {
      shouldHideMediaOptions: E,
      enabledContentHarmTypeFlags: y
    }, "Media Mosaic") : {
      srcToOnClickOverride: {},
      srcToHandlePreloadImage: {}
    };

  function T(e, n) {
    var r;
    let i = e.originalItem;
    return (0, c.tt)(i.media, n, i.spoiler, null != (r = null == t ? true : t.author.bot) && r)
  }
  let C = e.items.map((e, n) => {
    let r = e.media,
      a = (e, t, n) => {},
      o = null == v ? true : v(r),
      l = {
        message: t,
        item: {
          uniqueId: "".concat(r.proxyUrl, "--").concat(n),
          originalItem: e,
          type: (0, u.wz)(r),
          downloadUrl: r.url,
          height: r.height,
          width: r.width,
          spoiler: e.spoiler,
          contentType: r.contentType,
          srcIsAnimated: (0, i.Lt)(r.flags, s.e5.IS_ANIMATED)
        },
        onContextMenu: o,
        autoPlayGif: b,
        getObscureReason: T,
        renderImageComponent: d.Bu,
        renderVideoComponent: d.PI,
        renderVisualPlaceholderComponent: d.oo,
        renderAudioComponent: g.tEg,
        renderPlaintextFilePreview: g.tEg,
        renderGenericFileComponent: g.tEg,
        renderMosaicItemFooter: g.tEg,
        gifFavoriteButton: O(r),
        onPlay: a,
        canRemoveItem: false,
        onRemoveItem: g.tEg
      },
      c = (0, h.E)({
        proxyURL: r.proxyUrl,
        url: r.url
      });
    return c in I && (l.onClick = I[c], l.handlePreloadImage = S[c]), l
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(p.A, {
      items: C,
      isInAppComponentsV2: true
    })
  })
}