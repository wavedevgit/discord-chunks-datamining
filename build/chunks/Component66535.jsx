/** Chunk was on 12236 **/
/** chunk id: 66535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk387408 = require("./387408.js"),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk643204 = require("./643204.jsx"),
  Chunk448368 = require("./448368.jsx"),
  Chunk538355 = require("./538355.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk205435 = require("./205435.js");
let v = e => {
  let {
    message: t
  } = e, n = (0, o.Ay)(t), v = (0, i.bG)([_.A], () => _.A.getChannel(t.channel_id)), f = r.useMemo(() => (0, s.A)(t), [t]), {
    content: j
  } = (0, p.A)(f, {
    hideSimpleEmbedContent: false
  }), A = b.hH.useSetting(), y = r.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, m.o)(t, j, false, false, "", {
      leadingIconClass: h.$r,
      trailingIconClass: h.$r,
      iconSize: g.eJ
    });
    return (0, l.jsxs)("div", {
      className: h.hQ,
      children: [e, (0, l.jsx)(c.Ay, {
        message: t,
        content: j,
        compact: A
      }), n]
    })
  }, [t, j, A]);
  return null == v ? null : (0, l.jsxs)("div", {
    className: h.kL,
    children: [(0, l.jsx)(a.Heading, {
      className: h.wx,
      variant: "heading-sm/semibold",
      children: x.intl.string(x.t.iouM3a)
    }), (0, l.jsx)(a.HOs, {
      className: h.PI,
      children: (0, l.jsx)(d.A, {
        childrenMessageContent: y(),
        childrenHeader: (0, l.jsx)(u.Ay, {
          message: t,
          channel: v,
          author: n,
          guildId: v.guild_id
        }),
        disableInteraction: true,
        author: n
      })
    })]
  })
}