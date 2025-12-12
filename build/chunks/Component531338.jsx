/** Chunk was on 58131 **/
/** chunk id: 531338, original params: e,t,o (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
}), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk726542 = require("./726542.js"),
  Chunk77987 = require("./77987.jsx"),
  Chunk787025 = require("./787025.jsx"),
  Chunk656649 = require("./656649.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736902 = require("./736902.js");
let v = (0, Chunk77987.e)(function(e) {
  let {
    match: t
  } = e, o = t.params.type, s = i.Z.get(o);
  if (null == s) return (0, n.jsx)(c.G, {
    children: (0, n.jsx)(a.Text, {
      className: f.error,
      variant: "text-md/normal",
      color: "text-feedback-warning",
      children: u.intl.string(u.t.WLDKSb)
    })
  });
  async function v() {
    var e, t, n;
    let r = new URLSearchParams(window.location.search),
      {
        body: a
      } = await l.Z.authorize(o, {
        location: "Connection Intermediate",
        twoWayLink: null != r.get("two_way_link") ? "true" === r.get("two_way_link") : true,
        twoWayLinkType: null != (e = r.get("two_way_link_type")) ? e : true,
        userCode: null != (t = r.get("two_way_user_code")) ? t : true,
        successRedirect: null != (n = r.get("success_redirect")) ? n : true
      });
    window.location = a.url
  }
  return (0, n.jsx)(c.G, {
    wrapperClassName: f.wrapper,
    children: (0, n.jsxs)("div", {
      className: f.root,
      children: [(0, n.jsx)(d.KJ, {
        className: f.logos,
        platform: s
      }), (0, n.jsx)(a.Heading, {
        variant: "text-lg/bold",
        className: f.header,
        children: u.intl.format(u.t.Pw4vee, {
          provider: s.name
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        className: f.body,
        children: u.intl.format(u.t.rHlSVB, {
          provider: s.name
        })
      }), (0, n.jsx)(r.zx, {
        size: r.zx.Sizes.LARGE,
        color: r.zx.Colors.BRAND,
        onClick: v,
        children: u.intl.string(u.t["+NJGEj"])
      })]
    })
  })
})