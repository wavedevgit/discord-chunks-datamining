/** Chunk was on web.js **/
/** chunk id: 912648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk256754 = require("./256754.jsx"),
  Chunk372129 = require("./372129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144291 = require("./144291.js");

function d(e) {
  let {
    channel: t
  } = e, n = i.useRef(null), d = i.useRef(0), [f, _] = i.useState(false), [p, h] = i.useState(false), m = p || f, g = () => {
    var e;
    null == (e = n.current) || e.activateUploadDialogue()
  }, E = i.useCallback(async (e, n, r) => {
    var i;
    h(true), await (0, o.i)({
      userImage: {
        data: e,
        file: n,
        image: r
      },
      guildId: null != (i = null == t ? true : t.guild_id) ? i : null,
      analyticsLocation: {
        section: l.jXE.EXPRESSION_PICKER,
        page: (null == t ? true : t.guild_id) != null ? l.ZY5.GUILD_CHANNEL : l.ZY5.DM_CHANNEL
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
      className: u.fileInput,
      children: (0, r.jsx)(s.ZP, {
        ref: n,
        onChange: E,
        setLoading: _,
        disabled: m
      }, d.current)
    })]
  })
}