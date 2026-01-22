/** Chunk was on 64233 **/
/** chunk id: 409463, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk280513 = require("./280513.js"),
  Chunk397927 = require("./397927.js"),
  Chunk837011 = require("./837011.js"),
  Chunk90084 = require("./90084.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    guildId: t,
    channelType: n,
    className: d
  } = e, {
    guildProfile: p,
    fetchGuildProfile: g,
    fetchStatus: b
  } = (0, o.u)(t), m = b !== a.X.FETCHED, f = null != p && l.i.VISIBLE.has(p.visibility);
  r.useEffect(() => {
    g()
  }, [t, g]);
  let O = [];
  if (n === c.rbe.GUILD_ANNOUNCEMENT && (O.push(h.intl.format(h.t.tI7KNX, {
      documentationLink: u.A.getArticleURL(c.MVz.ANNOUNCEMENT_CHANNELS)
    })), !m && !f)) {
    let e = h.intl.string(h.t["2Ab4Id"]);
    O.push(e)
  }
  return 0 === O.length ? null : (0, i.jsx)(i.Fragment, {
    children: O.map((e, t) => (0, i.jsx)(s.Text, {
      className: d,
      variant: "text-sm/normal",
      children: e
    }, "description-".concat(t)))
  })
}