/** Chunk was on 52199 **/
/** chunk id: 216595, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let E = {
  top: 8,
  bottom: 8,
  left: false,
  right: false
};

function A(e) {
  let {
    channel: t,
    children: r
  } = e;
  return (0, n.jsx)(i.vN3, {
    offset: E,
    children: (0, n.jsxs)("div", {
      className: _.ZO,
      "data-recents-channel": t.id,
      children: [(0, n.jsx)(y, {
        channel: t
      }), t.isPrivate() ? null : (0, n.jsx)(a.ChevronSmallRightIcon, {
        size: "xxs"
      }), (0, n.jsx)(S, {
        channel: t
      }), r]
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, r = (0, o.bG)([f.A], () => f.A.getGuild(t.guild_id));
  return null != r ? (0, n.jsx)(p.A, {
    className: _.Kk,
    guild: r,
    size: p.A.Sizes.SMALLER,
    "aria-hidden": true
  }) : t.isGroupDM() ? (0, n.jsx)(h.A, {
    channel: t,
    size: c._3J.SIZE_24
  }) : (0, n.jsx)("div", {
    className: s()(_.Kk, _.ro),
    children: (0, n.jsx)(a.ChatIcon, {
      size: "xxs"
    })
  })
}

function S(e) {
  let {
    channel: t
  } = e, r = (0, o.bG)([f.A], () => f.A.getGuild(t.guild_id)), l = (0, u.Ay)(t, false), s = (0, d.gU)(t, r), a = t.isPrivate() || null == s, i = t.isDM() ? g.intl.formatToPlainString(g.t.smD7XV, {
    username: l
  }) : l;
  return (0, n.jsxs)("div", {
    className: _.yP,
    children: [a ? null : (0, n.jsx)(s, {
      className: _.j1,
      size: "xxs"
    }), (0, n.jsx)(c.Heading, {
      variant: "text-md/semibold",
      color: "text-default",
      children: i
    })]
  })
}