/** Chunk was on web.js **/
/** chunk id: 511618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk906732 = require("./906732.js"),
  Chunk965386 = require("./965386.js"),
  Chunk686546 = require("./686546.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk292290 = require("./292290.js");
let h = 3,
  m = e => {
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
    let m = <div className={p.emojis}>{t.slice(0, h).map((e, t) => {
        if (null == e.id) return null;
        let n = 2 === t,
          i = (0, r.jsx)("div", {
            className: p.emojiBackground,
            children: (0, r.jsx)("img", {
              alt: e.name,
              className: p.emoji,
              src: c.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: d.$U
              })
            })
          }, e.id);
        return n ? i : (0, r.jsx)(s.ZP, {
          className: p.emojiMask,
          mask: s.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
          children: i
        }, e.id)
      })}</div>;
    return <a.RX className={p.upsell}>{<a.z5><a.BR>{_.intl.format(_.t["uEky4+"], {
            count: t.length
          })}</a.BR></a.z5>}{<a.dY>{m}</a.dY>}</a.RX>
  }