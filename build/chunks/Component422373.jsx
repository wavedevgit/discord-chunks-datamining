/** Chunk was on 78870 **/
/** chunk id: 422373, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk300233 = require("./300233.jsx"),
  Chunk599941 = require("./599941.js"),
  Chunk922975 = require("./922975.js"),
  Chunk700206 = require("./700206.js"),
  Chunk815332 = require("./815332.jsx"),
  Chunk456540 = require("./456540.jsx"),
  Chunk136179 = require("./136179.jsx"),
  Chunk250253 = require("./250253.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk235201 = require("./235201.js");

function b(e) {
  var t;
  let {
    guildId: r
  } = e, i = (0, o.uk)(r)[0], {
    editStateIds: b
  } = l.d0(null != (t = null == i ? true : i.id) ? t : null, r), {
    activeSubscription: C
  } = (0, s.A)(null == i ? true : i.id);
  return (0, n.jsxs)("div", {
    className: f.k,
    children: [null != i ? (0, n.jsx)(c.A, {
      groupListingId: i.id,
      subscription: C
    }) : null, (0, n.jsx)(a.A, {
      subscription: C
    }), (0, n.jsx)(d.A, {
      guildId: r,
      children: b.map(e => {
        var t;
        return (0, n.jsx)(u.A, {
          guildId: r,
          groupListingId: null != (t = null == i ? true : i.id) ? t : "",
          listingId: e,
          analyticsLocation: p.ThZ.ROLE_SUBSCRIPTIONS_TAB
        }, e)
      })
    })]
  })
}

function C(e) {
  let {
    guildId: t
  } = e;
  return (0, n.jsx)(i.H, {
    guildId: t,
    refetchOnMount: true,
    children: (0, n.jsx)(b, {
      guildId: t
    })
  })
}