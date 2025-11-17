/** Chunk was on 29497 **/
/** chunk id: 636816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk580685 = require("./580685.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    guildId: t,
    channelType: n,
    className: h
  } = e, {
    guildProfile: p,
    fetchGuildProfile: g,
    fetchStatus: m
  } = (0, o.u)(t), C = m !== a.a.FETCHED, f = null != p && l.Y.VISIBLE.has(p.visibility);
  r.useEffect(() => {
    g()
  }, [t, g]);
  let O = [];
  if (n === u.d4z.GUILD_ANNOUNCEMENT && (O.push(d.intl.format(d.t.tI7KNX, {
      documentationLink: c.Z.getArticleURL(u.BhN.ANNOUNCEMENT_CHANNELS)
    })), !C && !f)) {
    let e = d.intl.string(d.t["2Ab4Id"]);
    O.push(e)
  }
  return 0 === O.length ? null : (0, i.jsx)(i.Fragment, {
    children: O.map((e, t) => (0, i.jsx)(s.Text, {
      className: h,
      variant: "text-sm/normal",
      children: e
    }, "description-".concat(t)))
  })
}