/** Chunk was on 61 **/
/** chunk id: 377329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk41776 = require("./41776.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk236373 = require("./236373.js"),
  Chunk230900 = require("./230900.js"),
  Chunk405613 = require("./405613.js"),
  Chunk460838 = require("./460838.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492718 = require("./492718.js");

function p(e) {
  var t, n;
  let {
    guildId: p,
    guildEvent: f,
    guildEventId: b,
    error: y
  } = e, O = l.useMemo(() => (0, x.Gb)(f, p), [f, p]), {
    channel_id: E,
    name: C,
    image: N,
    description: P
  } = O, S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]), T = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]), Z = (0, g.cS)(O), w = (0, i.e7)([d.default], () => null != f.creatorId ? d.default.getUser(f.creatorId) : d.default.getCurrentUser(), [f.creatorId]), I = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]), D = (0, s.KS)(S, T);
  return (0, r.jsxs)("div", {
    className: j.content,
    children: [(0, r.jsx)(v.Z, {
      className: j.previewCard,
      guild: T,
      channel: S,
      location: null != Z ? Z : true,
      creator: w,
      name: C,
      description: P,
      imageSource: (n = (0, x.Gb)(f, p, b), null == N && null == n.image ? null : null != N && /^data:/.test(N) ? N : (0, m.Z)(n)),
      isActive: false,
      isUserLurking: I,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: O,
      eventPreview: O
    }), (0, r.jsxs)("div", {
      className: j.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-xl/semibold",
        children: h.intl.string(h.t.yBsFEx)
      }), (0, r.jsx)(a.Text, {
        color: "text-secondary",
        variant: "text-md/normal",
        className: j.subheader,
        children: null != location ? h.intl.string(h.t.KDPFi4) : h.intl.format(h.t.f55NX1, {
          channelName: null != (t = null == S ? true : S.name) ? t : "",
          channelHook: () => {
            var e;
            return (0, r.jsxs)("div", {
              className: j.channelName,
              children: [null != D ? (0, r.jsx)(D, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: j.icon
              }) : (0, r.jsx)(a._tJ, {
                size: "custom",
                color: "currentColor",
                height: 18,
                width: 18,
                className: j.locationIcon
              }), null != (e = null == S ? true : S.name) ? e : Z]
            })
          }
        })
      }), null != y && (0, r.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: j.subheader,
        children: y.getAnyErrorMessage()
      })]
    })]
  })
}