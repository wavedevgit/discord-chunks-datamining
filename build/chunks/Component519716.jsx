/** Chunk was on 81881 **/
/** chunk id: 519716, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
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
let m = (0, Chunk114716.C)(function(e) {
  let {
    match: t
  } = e, n = t.params.type, o = s.A.get(n);
  if (null == o) return (0, a.jsx)(c.$, {
    children: (0, a.jsx)(l.Text, {
      className: f.z3,
      variant: "text-md/normal",
      color: "text-feedback-warning",
      children: u.intl.string(u.t.WLDKSb)
    })
  });
  async function m() {
    var e, t, a;
    let r = new URLSearchParams(window.location.search),
      {
        body: l
      } = await i.A.authorize(n, {
        location: "Connection Intermediate",
        twoWayLink: null != r.get("two_way_link") ? "true" === r.get("two_way_link") : true,
        twoWayLinkType: null != (e = r.get("two_way_link_type")) ? e : true,
        userCode: null != (t = r.get("two_way_user_code")) ? t : true,
        successRedirect: null != (a = r.get("success_redirect")) ? a : true
      });
    window.location = l.url
  }
  return (0, a.jsx)(c.$, {
    wrapperClassName: f.iE,
    children: (0, a.jsxs)("div", {
      className: f.zr,
      children: [(0, a.jsx)(d.Jq, {
        className: f.ry,
        platform: o
      }), (0, a.jsx)(l.Heading, {
        variant: "text-lg/bold",
        className: f.wx,
        children: u.intl.format(u.t.Pw4vee, {
          provider: o.name
        })
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        className: f.rf,
        children: u.intl.format(u.t.rHlSVB, {
          provider: o.name
        })
      }), (0, a.jsx)(r.$n, {
        size: r.$n.Sizes.LARGE,
        color: r.$n.Colors.BRAND,
        onClick: m,
        children: u.intl.string(u.t["+NJGEj"])
      })]
    })
  })
})