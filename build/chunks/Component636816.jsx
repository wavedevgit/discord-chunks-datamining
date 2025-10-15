/** Chunk was on 29497 **/
/** chunk id: 636816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk580685 = require("./580685.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guildId: t,
    channelType: n,
    className: u
  } = e, {
    guildProfile: p,
    fetchGuildProfile: g,
    fetchStatus: m
  } = (0, o.u)(t), C = m !== a.a.FETCHED, b = null != p && s.Y.VISIBLE.has(p.visibility);
  i.useEffect(() => {
    g()
  }, [t, g]);
  let N = [];
  if (n === d.d4z.GUILD_ANNOUNCEMENT && (N.push(h.intl.format(h.t.tI7KNT, {
      documentationLink: c.Z.getArticleURL(d.BhN.ANNOUNCEMENT_CHANNELS)
    })), !C && !b)) {
    let e = h.intl.string(h.t["2Ab4IS"]);
    N.push(e)
  }
  return 0 === N.length ? null : (0, r.jsx)(r.Fragment, {
    children: N.map((e, t) => (0, r.jsx)(l.Text, {
      className: u,
      variant: "text-sm/normal",
      children: e
    }, "description-".concat(t)))
  })
}