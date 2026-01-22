/** Chunk was on 97492 **/
/** chunk id: 732077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk108197 = require("./108197.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk316945 = require("./316945.js");
let b = Chunk64700.memo(function(e) {
  let {
    channel: t,
    selectedChannel: n,
    selectedVoiceChannelId: l,
    sortedThreadIds: i,
    withGuildIcon: b
  } = e, {
    density: g
  } = (0, o.wRf)(), m = (0, s.yK)([c.A], () => i.map(e => c.A.getChannel(e)).filter(d.Vq), [i]), A = (0, s.bG)([u.Ay], () => {
    let e = m[m.length - 1];
    if (null == e) return 0;
    let t = u.Ay.getVoiceStates(e.guild_id)[e.id];
    return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8
  });
  return (0, r.jsx)("li", {
    className: h.kL,
    children: (0, r.jsxs)("ul", {
      role: "group",
      "aria-label": p.intl.formatToPlainString(p.t.EiyIi6, {
        channelName: t.name
      }),
      children: [(0, r.jsx)("div", {
        className: a()(h.eh, {
          [h.ET]: b
        }),
        style: {
          bottom: ("cozy" === g ? 28 : 24) + A
        }
      }), m.map((e, t) => (0, r.jsx)(f.A, {
        thread: e,
        isSelectedChannel: (null == n ? true : n.id) === e.id,
        isSelectedVoice: l === e.id,
        isLast: t === m.length - 1,
        withGuildIcon: b
      }, e.id))]
    })
  })
})