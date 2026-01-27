/** Chunk was on 20941 **/
/** chunk id: 145885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e) {
  let {
    message: t
  } = (0, b.jc)(), n = (0, a.bG)([p.A], () => p.A.getChannel(null == t ? true : t.channel_id)), {
    shouldHideMediaOptions: x,
    enabledContentHarmTypeFlags: y,
    gifAutoPlay: v,
    getGifFavButton: j,
    getOnMediaItemContextMenu: C
  } = (0, m.X)();
  if (null == t || null == n) return null;
  let _ = e.items.map(e => (0, s.FX)(e.media, t)).filter(e => "INVALID" !== e.type),
    {
      srcToOnClickOverride: A,
      srcToHandlePreloadImage: O
    } = _.length > 1 ? (0, o.o)(_, {
      shouldHideMediaOptions: x,
      enabledContentHarmTypeFlags: y
    }, "Media Mosaic") : {
      srcToOnClickOverride: {},
      srcToHandlePreloadImage: {}
    };

  function E(e, n) {
    var r;
    let l = e.originalItem;
    return (0, c.tt)(l.media, n, l.spoiler, null != (r = null == t ? true : t.author.bot) && r)
  }
  let S = e.items.map((e, n) => {
    let r = e.media,
      a = null == C ? true : C(r),
      s = {
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
          srcIsAnimated: (0, l.Lt)(r.flags, i.e5.IS_ANIMATED)
        },
        onContextMenu: a,
        autoPlayGif: v,
        getObscureReason: E,
        renderImageComponent: d.Bu,
        renderVideoComponent: d.PI,
        renderVisualPlaceholderComponent: d.oo,
        renderAudioComponent: g.tEg,
        renderPlaintextFilePreview: g.tEg,
        renderGenericFileComponent: g.tEg,
        renderMosaicItemFooter: g.tEg,
        gifFavoriteButton: j(r),
        onPlay: (e, t, n) => {},
        canRemoveItem: false,
        onRemoveItem: g.tEg
      },
      o = (0, h.E)({
        proxyURL: r.proxyUrl,
        url: r.url
      });
    return o in A && (s.onClick = A[o], s.handlePreloadImage = O[o]), s
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(f.A, {
      items: S,
      isInAppComponentsV2: true
    })
  })
}