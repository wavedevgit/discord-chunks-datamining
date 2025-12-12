/** Chunk was on web.js **/
/** chunk id: 203247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk965386 = require("./965386.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11079 = require("./11079.js");
let m = 3,
  h = e => {
    let {
      emojis: t
    } = e, {
      analyticsLocations: n
    } = (0, o.ZP)();
    i.useEffect(() => {
      l.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
        type: f.cd.EMOJI_AUTOCOMPLETE_INLINE,
        location_stack: n
      })
    }, [n]);
    let h = (0, r.jsx)("div", {
      className: _.emojis,
      children: t.slice(0, m).map((e, t) => {
        if (null == e.id) return null;
        let n = 2 === t,
          i = (0, r.jsx)("div", {
            className: _.emojiBackground,
            children: (0, r.jsx)("img", {
              alt: e.name,
              className: _.emoji,
              src: c.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: d.$U
              })
            })
          }, e.id);
        return n ? i : (0, r.jsx)(s.ZP, {
          className: _.emojiMask,
          mask: s.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
          children: i
        }, e.id)
      })
    });
    return (0, r.jsxs)(a.RX, {
      className: _.upsell,
      children: [(0, r.jsx)(a.z5, {
        children: (0, r.jsx)(a.BR, {
          children: p.intl.format(p.t.uEky42, {
            count: t.length
          })
        })
      }), (0, r.jsx)(a.dY, {
        children: h
      })]
    })
  }