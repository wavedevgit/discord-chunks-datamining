/** Chunk was on web.js **/
/** chunk id: 491173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk65029 = require("./65029.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk624138 = require("./624138.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749510 = require("./749510.js");
let E = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
  b = (0, Chunk624138.Mg)(Chunk477690.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
  y = e => {
    let t = null,
      n = null;
    if (!(0, p.jl)(e) && !(0, p.J8)(e) || (0, p.J8)(e)) {
      let i = u.Z.getGuild(e.guild_id);
      null != i && (t = m.intl.format(m.t.cZOkbm, {
        source: i.name
      }), n = (0, r.jsx)(s.Z, {
        guild: i
      }))
    } else if ((0, p.jl)(e)) {
      let i = f.Z.getStickerPack(e.pack_id);
      null != i && (t = m.intl.format(m.t.cZOkbm, {
        source: i.name
      }), n = (0, r.jsx)(h.Z, {
        size: b,
        sticker: (0, p.Zt)(i),
        disableAnimation: true
      }))
    }
    return {
      title: t,
      graphic: n
    }
  },
  O = Chunk73800.memo(function(e) {
    let {
      stickersGrid: t
    } = e, n = l.ZN.useStore(e => e.inspectedExpressionPosition), o = i.useMemo(() => {
      var e;
      let {
        rowIndex: r,
        columnIndex: i
      } = n, o = null == (e = t[r]) ? true : e[i];
      return (null == o ? true : o.type) === _.al.CREATE_STICKER ? {
        guild_id: o.guild_id,
        name: o.name
      } : (null == o ? true : o.type) !== _.al.STICKER ? null : o.sticker
    }, [t, n]);
    if (null == o) return null;
    let {
      graphic: s,
      title: u
    } = y(o), d = (0, p.jl)(o) || (0, p.J8)(o) ? (0, r.jsx)(h.Z, {
      isInteracting: true,
      size: E,
      sticker: o,
      disableAnimation: true
    }) : (0, r.jsx)("div", {
      className: g.iconWrapper,
      children: (0, r.jsx)(a.qJs, {
        size: "md",
        color: "currentColor",
        className: g.icon
      })
    });
    return (0, r.jsx)(c.Z, {
      graphicPrimary: d,
      graphicSecondary: s,
      titlePrimary: o.name,
      titleSecondary: (0, p.jl)(o) || (0, p.J8)(o) ? u : null
    })
  })