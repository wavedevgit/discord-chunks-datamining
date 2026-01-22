/** Chunk was on web.js **/
/** chunk id: 749795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234054 = require("./234054.js");

function h(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, h = (0, l.Ay)(t), m = i(h), {
    avatarSrc: g,
    eventHandlers: {
      onMouseEnter: E,
      onMouseLeave: b
    }
  } = (0, u.a)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: E,
    onMouseLeave: b,
    children: (0, r.jsx)(d.A, {
      className: a()(_.rs, {
        [_.oE]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.l, {
        src: g
      }),
      iconContainerClassName: _.zc,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: a()(_.Qs, {
          [_.oE]: n
        }),
        children: [(0, r.jsx)(c.ix, {
          message: t,
          messageClassname: _.he,
          className: a()(_.QV, _.he, {
            [_.oE]: n
          }),
          username: (0, r.jsxs)("div", {
            className: _.he,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: _.Xh,
              children: p.intl.string(p.t.hG1StD)
            }), (0, r.jsx)(o.A, {
              type: f.nu.SYSTEM_DM,
              className: _.Al
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(_.__invalid_messageContent, {
            [_.oE]: n
          }),
          children: p.intl.format(p.t.qntXNQ, {
            username: h.nick,
            usernameHook: m
          })
        })]
      })
    })
  })
}