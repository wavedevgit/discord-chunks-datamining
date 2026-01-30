/** Chunk was on 49559 **/
/** chunk id: 145885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    message: t
  } = (0, b.jc)(), n = (0, a.bG)([f.A], () => f.A.getChannel(null == t ? true : t.channel_id)), {
    shouldHideMediaOptions: h,
    enabledContentHarmTypeFlags: j,
    gifAutoPlay: g,
    getGifFavButton: A,
    getOnMediaItemContextMenu: v
  } = (0, p.X)();
  if (null == t || null == n) return null;
  let E = e.items.map(e => (0, o.FX)(e.media, t)).filter(e => "INVALID" !== e.type),
    {
      srcToOnClickOverride: C,
      srcToHandlePreloadImage: x
    } = E.length > 1 ? (0, s.o)(E, {
      shouldHideMediaOptions: h,
      enabledContentHarmTypeFlags: j
    }, "Media Mosaic") : {
      srcToOnClickOverride: {},
      srcToHandlePreloadImage: {}
    };

  function N(e, n) {
    var r;
    let l = e.originalItem;
    return (0, c.tt)(l.media, n, l.spoiler, null != (r = null == t ? true : t.author.bot) && r)
  }
  let I = e.items.map((e, n) => {
    let r = e.media,
      a = null == v ? true : v(r),
      o = {
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
        autoPlayGif: g,
        getObscureReason: N,
        renderImageComponent: d.Bu,
        renderVideoComponent: d.PI,
        renderVisualPlaceholderComponent: d.oo,
        renderAudioComponent: y.tEg,
        renderPlaintextFilePreview: y.tEg,
        renderGenericFileComponent: y.tEg,
        renderMosaicItemFooter: y.tEg,
        gifFavoriteButton: A(r),
        onPlay: (e, t, n) => {},
        canRemoveItem: false,
        onRemoveItem: y.tEg
      },
      s = (0, O.E)({
        proxyURL: r.proxyUrl,
        url: r.url
      });
    return s in C && (o.onClick = C[s], o.handlePreloadImage = x[s]), o
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(m.A, {
      items: I,
      isInAppComponentsV2: true
    })
  })
}