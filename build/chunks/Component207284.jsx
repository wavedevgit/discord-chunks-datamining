/** Chunk was on web.js **/
/** chunk id: 207284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk644508 = require("./644508.jsx"),
  Chunk824832 = require("./824832.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk428042 = require("./428042.js");

function d(e) {
  let {
    channel: t
  } = e, n = i.useRef(null), d = i.useRef(0), [f, p] = i.useState(false), [_, h] = i.useState(false), m = _ || f, g = () => {
    var e;
    null == (e = n.current) || e.activateUploadDialogue()
  }, E = i.useCallback(async (e, n, r) => {
    var i;
    h(true), await (0, s.f)({
      userImage: {
        data: e,
        file: n,
        image: r
      },
      guildId: null != (i = null == t ? true : t.guild_id) ? i : null,
      analyticsLocation: {
        section: l.JJy.EXPRESSION_PICKER,
        page: (null == t ? true : t.guild_id) != null ? l.liQ.GUILD_CHANNEL : l.liQ.DM_CHANNEL
      }
    }), d.current += 1, h(false)
  }, [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      text: c.intl.string(c.t.iMJO37),
      variant: "secondary",
      onClick: g,
      disabled: m
    }), (0, r.jsx)("div", {
      className: u.F,
      children: (0, r.jsx)(o.Ay, {
        ref: n,
        onChange: E,
        setLoading: p,
        disabled: m
      }, d.current)
    })]
  })
}