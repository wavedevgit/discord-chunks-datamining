/** Chunk was on 78431 **/
/** chunk id: 935554, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk730647 = require("./730647.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk290348 = require("./290348.js"),
  Chunk934826 = require("./934826.js"),
  Chunk330181 = require("./330181.jsx"),
  Chunk939225 = require("./939225.jsx"),
  Chunk36246 = require("./36246.jsx"),
  Chunk305342 = require("./305342.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk705914 = require("./705914.js");

function f(e) {
  var t;
  let {
    guildId: r
  } = e, i = (0, o.GG)(r)[0], {
    editStateIds: f
  } = l.B7(null != (t = null == i ? true : i.id) ? t : null, r), {
    activeSubscription: b
  } = (0, s.Z)(null == i ? true : i.id);
  return (0, n.jsxs)("div", {
    className: p.container,
    children: [null != i ? (0, n.jsx)(c.Z, {
      groupListingId: i.id,
      subscription: b
    }) : null, (0, n.jsx)(a.Z, {
      subscription: b
    }), (0, n.jsx)(d.Z, {
      guildId: r,
      children: f.map(e => {
        var t;
        return (0, n.jsx)(u.Z, {
          guildId: r,
          groupListingId: null != (t = null == i ? true : i.id) ? t : "",
          listingId: e,
          analyticsLocation: C.Sbl.ROLE_SUBSCRIPTIONS_TAB
        }, e)
      })
    })]
  })
}

function b(e) {
  let {
    guildId: t
  } = e;
  return (0, n.jsx)(i.l, {
    guildId: t,
    refetchOnMount: true,
    children: (0, n.jsx)(f, {
      guildId: t
    })
  })
}