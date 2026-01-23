/** Chunk was on 81881 **/
/** chunk id: 519716, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
}), require("./747238.js"), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77468 = require("./77468.js"),
  Chunk573648 = require("./573648.js"),
  Chunk114716 = require("./114716.jsx"),
  Chunk321987 = require("./321987.jsx"),
  Chunk950198 = require("./950198.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk859409 = require("./859409.js");
let f = (0, Chunk114716.C)(function(e) {
  let {
    match: t
  } = e, r = t.params.type, s = i.A.get(r);
  if (null == s) return (0, n.jsx)(c.$, {
    children: (0, n.jsx)(l.Text, {
      className: m.z3,
      variant: "text-md/normal",
      color: "text-feedback-warning",
      children: u.intl.string(u.t.WLDKSb)
    })
  });
  async function f() {
    var e, t, n;
    let a = new URLSearchParams(window.location.search),
      {
        body: l
      } = await o.A.authorize(r, {
        location: "Connection Intermediate",
        twoWayLink: null != a.get("two_way_link") ? "true" === a.get("two_way_link") : true,
        twoWayLinkType: null != (e = a.get("two_way_link_type")) ? e : true,
        userCode: null != (t = a.get("two_way_user_code")) ? t : true,
        successRedirect: null != (n = a.get("success_redirect")) ? n : true
      });
    window.location = l.url
  }
  return (0, n.jsx)(c.$, {
    wrapperClassName: m.iE,
    children: (0, n.jsxs)("div", {
      className: m.zr,
      children: [(0, n.jsx)(d.Jq, {
        className: m.ry,
        platform: s
      }), (0, n.jsx)(l.Heading, {
        variant: "text-lg/bold",
        className: m.wx,
        children: u.intl.format(u.t.Pw4vee, {
          provider: s.name
        })
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: m.rf,
        children: u.intl.format(u.t.rHlSVB, {
          provider: s.name
        })
      }), (0, n.jsx)(a.$n, {
        size: a.$n.Sizes.LARGE,
        color: a.$n.Colors.BRAND,
        onClick: f,
        children: u.intl.string(u.t["+NJGEj"])
      })]
    })
  })
})