/** Chunk was on 2827 **/
/** chunk id: 443357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk873298 = require("./873298.js"),
  Chunk86689 = require("./86689.jsx"),
  Chunk639383 = require("./639383.jsx"),
  Chunk704724 = require("./704724.js"),
  Chunk171316 = require("./171316.js"),
  Chunk500470 = require("./500470.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let e = (0, c.k)(),
    t = (0, o.gr)();
  if (null == t || null == e) return null;
  let {
    goreContentFriendDm: n,
    goreContentNonFriendDm: u
  } = t, _ = t => {
    (0, a.qY)(e, t)
  }, p = [{
    value: i.TO.BLUR,
    label: d.intl.string(d.t.S49Uad)
  }, {
    value: i.TO.BLOCK,
    label: d.intl.string(d.t["D/157Y"])
  }];
  return (0, r.jsxs)(l.E, {
    description: d.intl.string(d.t.XgH9eh),
    children: [(0, r.jsx)(s.A, {
      title: d.intl.string(d.t["+uI23H"]),
      value: n,
      onChange: e => _({
        goreContentFriendDm: e
      }),
      options: p
    }), (0, r.jsx)(s.A, {
      title: d.intl.string(d.t["Yh+HX1"]),
      value: u,
      onChange: e => _({
        goreContentNonFriendDm: e
      }),
      options: p
    })]
  })
}