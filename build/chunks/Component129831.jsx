/** Chunk was on 21738 **/
/** chunk id: 129831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c,
  x: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk828043 = require("./828043.js");

function c(e) {
  let {
    user: t,
    status: n,
    isFocused: i,
    guildId: l
  } = e;
  return (0, r.jsxs)("div", {
    className: o.Ku,
    children: [(0, r.jsx)(a.euF, {
      src: t.getAvatarURL(l, 24),
      className: o.my,
      "aria-label": t.username,
      size: a._3J.SIZE_24,
      status: n,
      statusColor: i ? "currentColor" : true
    }), (0, r.jsx)(s.A, {
      user: t,
      hideDiscriminator: true
    })]
  })
}

function u(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.Ku,
    children: [(0, r.jsx)("div", {
      className: l()(o.my, o.L5)
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}