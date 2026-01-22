/** Chunk was on web.js **/
/** chunk id: 672182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk724511 = require("./724511.jsx"),
  Chunk850992 = require("./850992.js"),
  Chunk338464 = require("./338464.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk240248 = require("./240248.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk905208 = require("./905208.js");
let E = (0, Chunk240248.xI)(Chunk319060.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
  b = (0, Chunk240248.xI)(Chunk319060.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
  y = e => {
    let t = null,
      n = null;
    if (!(0, _.FD)(e) && !(0, _.Xw)(e) || (0, _.Xw)(e)) {
      let i = u.A.getGuild(e.guild_id);
      null != i && (t = m.intl.format(m.t.cZOkbs, {
        source: i.name
      }), n = (0, r.jsx)(o.A, {
        guild: i
      }))
    } else if ((0, _.FD)(e)) {
      let i = f.A.getStickerPack(e.pack_id);
      null != i && (t = m.intl.format(m.t.cZOkbs, {
        source: i.name
      }), n = (0, r.jsx)(h.A, {
        size: b,
        sticker: (0, _.Id)(i),
        disableAnimation: true
      }))
    }
    return {
      title: t,
      graphic: n
    }
  },
  O = Chunk64700.memo(function(e) {
    let {
      stickersGrid: t
    } = e, n = l.bM.useStore(e => e.inspectedExpressionPosition), a = i.useMemo(() => {
      var e;
      let {
        rowIndex: r,
        columnIndex: i
      } = n, a = null == (e = t[r]) ? true : e[i];
      return (null == a ? true : a.type) === p.op.CREATE_STICKER ? {
        guild_id: a.guild_id,
        name: a.name
      } : (null == a ? true : a.type) !== p.op.STICKER ? null : a.sticker
    }, [t, n]);
    if (null == a) return null;
    let {
      graphic: o,
      title: u
    } = y(a), d = (0, _.FD)(a) || (0, _.Xw)(a) ? (0, r.jsx)(h.A, {
      isInteracting: true,
      size: E,
      sticker: a,
      disableAnimation: true
    }) : (0, r.jsx)("div", {
      className: g.P,
      children: (0, r.jsx)(s.j96, {
        size: "md",
        color: "currentColor",
        className: g.K
      })
    });
    return (0, r.jsx)(c.A, {
      graphicPrimary: d,
      graphicSecondary: o,
      titlePrimary: a.name,
      titleSecondary: (0, _.FD)(a) || (0, _.Xw)(a) ? u : null
    })
  })