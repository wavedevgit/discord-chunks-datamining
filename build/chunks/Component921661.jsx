/** Chunk was on web.js **/
/** chunk id: 921661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk557158 = require("./557158.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk692433 = require("./692433.js");
let h = 3,
  m = e => {
    let {
      emojis: t
    } = e, {
      analyticsLocations: n
    } = (0, a.Ay)();
    i.useEffect(() => {
      l.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, {
        type: f.e.EMOJI_AUTOCOMPLETE_INLINE,
        location_stack: n
      })
    }, [n]);
    let m = (0, r.jsx)("div", {
      className: _.gm,
      children: t.slice(0, h).map((e, t) => {
        if (null == e.id) return null;
        let n = 2 === t,
          i = (0, r.jsx)("div", {
            className: _.rT,
            children: (0, r.jsx)("img", {
              alt: e.name,
              className: _.Zg,
              src: c.Ay.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: d.L4
              })
            })
          }, e.id);
        return n ? i : (0, r.jsx)(o.Ay, {
          className: _.j3,
          mask: o.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
          children: i
        }, e.id)
      })
    });
    return (0, r.jsxs)(s.Mr, {
      className: _.UX,
      children: [(0, r.jsx)(s.oC, {
        children: (0, r.jsx)(s.dB, {
          children: p.intl.format(p.t.uEky42, {
            count: t.length
          })
        })
      }), (0, r.jsx)(s.Aq, {
        children: m
      })]
    })
  }