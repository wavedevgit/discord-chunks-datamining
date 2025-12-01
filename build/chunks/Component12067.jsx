/** Chunk was on web.js **/
/** chunk id: 12067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk768494 = require("./768494.js"),
  Chunk549635 = require("./549635.jsx"),
  Chunk120324 = require("./120324.js"),
  Chunk169525 = require("./169525.js"),
  Chunk499376 = require("./499376.js"),
  Chunk611170 = require("./611170.jsx"),
  Chunk128854 = require("./128854.jsx"),
  Chunk884182 = require("./884182.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk52824 = require("./52824.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let {
    message: t
  } = (0, h.CJ)(), n = (0, a.e7)([_.Z], () => _.Z.getChannel(null == t ? true : t.channel_id)), {
    shouldHideMediaOptions: E,
    enabledContentHarmTypeFlags: b,
    gifAutoPlay: y,
    getGifFavButton: O,
    getOnMediaItemContextMenu: v
  } = (0, f.c)();
  if (null == t || null == n) return null;
  let S = e.items.map(e => (0, s.ze)(e.media, t)).filter(e => "INVALID" !== e.type),
    {
      srcToOnClickOverride: I,
      srcToHandlePreloadImage: T
    } = S.length > 1 ? (0, l.G)(S, {
      shouldHideMediaOptions: E,
      enabledContentHarmTypeFlags: b
    }, "Media Mosaic") : {
      srcToOnClickOverride: {},
      srcToHandlePreloadImage: {}
    };

  function A(e, n) {
    var r;
    let i = e.originalItem;
    return (0, c.lK)(i.media, n, i.spoiler, null != (r = null == t ? true : t.author.bot) && r)
  }
  let C = e.items.map((e, n) => {
    let r = e.media,
      a = (e, t, n) => {},
      s = null == v ? true : v(r),
      l = {
        message: t,
        item: {
          uniqueId: "".concat(r.proxyUrl, "--").concat(n),
          originalItem: e,
          type: (0, u.pU)(r),
          downloadUrl: r.url,
          height: r.height,
          width: r.width,
          spoiler: e.spoiler,
          contentType: r.contentType,
          srcIsAnimated: (0, i.yE)(r.flags, o.hR.IS_ANIMATED)
        },
        onContextMenu: s,
        autoPlayGif: y,
        getObscureReason: A,
        renderImageComponent: d.aB,
        renderVideoComponent: d.rJ,
        renderVisualPlaceholderComponent: d.yF,
        renderAudioComponent: g.dG4,
        renderPlaintextFilePreview: g.dG4,
        renderGenericFileComponent: g.dG4,
        renderMosaicItemFooter: g.dG4,
        gifFavoriteButton: O(r),
        onPlay: a,
        canRemoveItem: false,
        onRemoveItem: g.dG4
      },
      c = (0, m.q)({
        proxyURL: r.proxyUrl,
        url: r.url
      });
    return c in I && (l.onClick = I[c], l.handlePreloadImage = T[c]), l
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(p.Z, {
      items: C,
      isInAppComponentsV2: true
    })
  })
}