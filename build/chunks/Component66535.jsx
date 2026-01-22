/** Chunk was on 58652 **/
/** chunk id: 66535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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
let h = e => {
  let {
    message: t
  } = e, n = (0, o.Ay)(t), h = (0, a.bG)([x.A], () => x.A.getChannel(t.channel_id)), j = r.useMemo(() => (0, s.A)(t), [t]), {
    content: _
  } = (0, b.A)(j, {
    hideSimpleEmbedContent: false
  }), A = p.hH.useSetting(), y = r.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, m.o)(t, _, false, false, "", {
      leadingIconClass: v.$r,
      trailingIconClass: v.$r,
      iconSize: g.eJ
    });
    return (0, l.jsxs)("div", {
      className: v.hQ,
      children: [e, (0, l.jsx)(d.Ay, {
        message: t,
        content: _,
        compact: A
      }), n]
    })
  }, [t, _, A]);
  return null == h ? null : (0, l.jsxs)("div", {
    className: v.kL,
    children: [(0, l.jsx)(i.Heading, {
      className: v.wx,
      variant: "heading-sm/semibold",
      children: f.intl.string(f.t.iouM3a)
    }), (0, l.jsx)(i.HOs, {
      className: v.PI,
      children: (0, l.jsx)(c.A, {
        childrenMessageContent: y(),
        childrenHeader: (0, l.jsx)(u.Ay, {
          message: t,
          channel: h,
          author: n,
          guildId: h.guild_id
        }),
        disableInteraction: true,
        author: n
      })
    })]
  })
}