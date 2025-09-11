/** Chunk was on 61 **/
/** chunk id: 377329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk949957 = require("./949957.js");

function f(e) {
  var t, n;
  let {
    guildId: f,
    guildEvent: j,
    guildEventId: y,
    error: b
  } = e, E = r.useMemo(() => (0, x.Gb)(j, f), [j, f]), {
    channel_id: N,
    name: O,
    image: C,
    description: S
  } = E, T = (0, i.e7)([c.Z], () => c.Z.getChannel(N), [N]), Z = (0, i.e7)([u.Z], () => u.Z.getGuild(f), [f]), I = (0, m.cS)(E), P = (0, i.e7)([d.default], () => null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser(), [j.creatorId]), w = (0, i.e7)([o.Z], () => o.Z.isLurking(f), [f]), D = (0, s.KS)(T, Z);
  return (0, l.jsxs)("div", {
    className: p.content,
    children: [(0, l.jsx)(v.Z, {
      className: p.previewCard,
      guild: Z,
      channel: T,
      location: null != I ? I : true,
      creator: P,
      name: O,
      description: S,
      imageSource: (n = (0, x.Gb)(j, f, y), null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
      isActive: false,
      isUserLurking: w,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: E,
      eventPreview: E
    }), (0, l.jsxs)("div", {
      className: p.textContainer,
      children: [(0, l.jsx)(a.X6q, {
        variant: "heading-xl/semibold",
        children: h.intl.string(h.t.yBsFEx)
      }), (0, l.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: p.subheader,
        children: null != location ? h.intl.string(h.t.KDPFi4) : h.intl.format(h.t.f55NX1, {
          channelName: null != (t = null == T ? true : T.name) ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: p.channelName,
              children: [null != D ? (0, l.jsx)(D, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: p.icon
              }) : (0, l.jsx)(a._tJ, {
                size: "custom",
                color: "currentColor",
                height: 18,
                width: 18,
                className: p.locationIcon
              }), null != (e = null == T ? true : T.name) ? e : I]
            })
          }
        })
      }), null != b && (0, l.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: p.subheader,
        children: b.getAnyErrorMessage()
      })]
    })]
  })
}