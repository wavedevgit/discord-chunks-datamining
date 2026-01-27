/** Chunk was on 92917 **/
/** chunk id: 749795, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234054 = require("./234054.js");

function g(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, g = (0, o.Ay)(t), h = i(g), {
    avatarSrc: _,
    eventHandlers: {
      onMouseEnter: b,
      onMouseLeave: A
    }
  } = (0, u.a)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: b,
    onMouseLeave: A,
    children: (0, r.jsx)(d.A, {
      className: l()(f.rs, {
        [f.oE]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.l, {
        src: _
      }),
      iconContainerClassName: f.zc,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: l()(f.Qs, {
          [f.oE]: n
        }),
        children: [(0, r.jsx)(c.ix, {
          message: t,
          messageClassname: f.he,
          className: l()(f.QV, f.he, {
            [f.oE]: n
          }),
          username: (0, r.jsxs)("div", {
            className: f.he,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: f.Xh,
              children: m.intl.string(m.t.hG1StD)
            }), (0, r.jsx)(s.A, {
              type: p.nu.SYSTEM_DM,
              className: f.Al
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(f.__invalid_messageContent, {
            [f.oE]: n
          }),
          children: m.intl.format(m.t.qntXNQ, {
            username: g.nick,
            usernameHook: h
          })
        })]
      })
    })
  })
}