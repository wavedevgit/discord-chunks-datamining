/** Chunk was on web.js **/
/** chunk id: 216595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk348635 = require("./348635.js");
let g = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function E(e) {
  let {
    channel: t,
    children: n
  } = e;
  return (0, r.jsx)(o.vN3, {
    offset: g,
    children: (0, r.jsxs)("div", {
      className: m.ZO,
      "data-recents-channel": t.id,
      children: [(0, r.jsx)(b, {
        channel: t
      }), t.isPrivate() ? null : (0, r.jsx)(s.ChevronSmallRightIcon, {
        size: "xxs"
      }), (0, r.jsx)(y, {
        channel: t
      }), n]
    })
  })
}

function b(e) {
  let {
    channel: t
  } = e, n = (0, l.bG)([_.A], () => _.A.getGuild(t.guild_id));
  return null != n ? (0, r.jsx)(p.A, {
    className: m.Kk,
    guild: n,
    size: p.A.Sizes.SMALLER,
    "aria-hidden": true
  }) : t.isGroupDM() ? (0, r.jsx)(f.A, {
    channel: t,
    size: c._3J.SIZE_24
  }) : (0, r.jsx)("div", {
    className: a()(m.Kk, m.ro),
    children: (0, r.jsx)(s.ChatIcon, {
      size: "xxs"
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = (0, l.bG)([_.A], () => _.A.getGuild(t.guild_id)), i = (0, u.Ay)(t, false), a = (0, d.gU)(t, n), s = t.isPrivate() || null == a, o = t.isDM() ? h.intl.formatToPlainString(h.t.smD7XV, {
    username: i
  }) : i;
  return (0, r.jsxs)("div", {
    className: m.yP,
    children: [s ? null : (0, r.jsx)(a, {
      className: m.j1,
      size: "xxs"
    }), (0, r.jsx)(c.Heading, {
      variant: "text-md/semibold",
      color: "text-default",
      children: o
    })]
  })
}