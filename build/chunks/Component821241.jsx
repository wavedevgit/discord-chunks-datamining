/** Chunk was on 64935 **/
/** chunk id: 821241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk763754 = require("./763754.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234054 = require("./234054.js");

function h(e) {
  var t;
  let {
    message: n,
    compact: i,
    usernameHook: h,
    channel: b
  } = e, A = (0, a.bG)([c.A], () => c.A.getGuild(b.guild_id)), y = (0, u.Ay)(n), v = h(y), {
    avatarSrc: x,
    eventHandlers: {
      onMouseEnter: O,
      onMouseLeave: E
    }
  } = (0, p.a)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: O,
    onMouseLeave: E,
    children: (0, r.jsx)(m.A, {
      className: l()(_.rs, {
        [_.oE]: i
      }),
      iconNode: i ? null : (0, r.jsx)(p.l, {
        src: x
      }),
      iconContainerClassName: _.zc,
      compact: i,
      children: (0, r.jsxs)("div", {
        className: l()(_.Qs, {
          [_.oE]: i
        }),
        children: [(0, r.jsx)(d.ix, {
          message: n,
          messageClassname: _.he,
          className: l()(_.QV, _.he, {
            [_.oE]: i
          }),
          username: (0, r.jsxs)("div", {
            className: _.he,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: _.Xh,
              children: g.intl.string(g.t.hG1StD)
            }), (0, r.jsx)(o.A, {
              type: f.nu.SYSTEM_DM,
              className: _.Al
            })]
          }),
          compact: i,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(_.__invalid_messageContent, {
            [_.oE]: i
          }),
          children: g.intl.format(g.t.W0UBI3, {
            username: y.nick,
            usernameHook: v,
            guildName: null != (t = null == A ? true : A.name) ? t : ""
          })
        })]
      })
    })
  })
}