/** Chunk was on 58131 **/
/** chunk id: 531338, original params: e,t,o (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
}), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk726542 = require("./726542.js"),
  Chunk77987 = require("./77987.jsx"),
  Chunk787025 = require("./787025.js"),
  Chunk656649 = require("./656649.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk664237 = require("./664237.js");
let p = (0, Chunk77987.e)(function(e) {
  let {
    match: t
  } = e, o = t.params.type, i = s.Z.get(o);
  if (null == i) return <c.G><a.Text className={f.error} variant={"text-md/normal"} color={"text-feedback-warning"}>{u.intl.string(u.t.WLDKSU)}</a.Text></c.G>;
  async function p() {
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
  return <c.G wrapperClassName={f.wrapper}><div className={f.root}>{<d.KJ className={f.logos} platform={i} />}{<a.X6q variant={"text-lg/bold"} className={f.header}>{u.intl.format(u.t.Pw4veX, {
          provider: i.name
        })}</a.X6q>}{<a.Text variant={"text-md/normal"} className={f.body}>{u.intl.format(u.t.rHlSVF, {
          provider: i.name
        })}</a.Text>}{<r.zx size={r.zx.Sizes.LARGE} color={r.zx.Colors.BRAND} onClick={p}>{u.intl.string(u.t["+NJGEh"])}</r.zx>}</div></c.G>
})