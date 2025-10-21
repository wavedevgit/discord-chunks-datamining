/** Chunk was on 61 **/
/** chunk id: 377329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  var t, n;
  let {
    guildId: j,
    guildEvent: f,
    guildEventId: b,
    error: y
  } = e, O = l.useMemo(() => (0, g.Gb)(f, j), [f, j]), {
    channel_id: E,
    name: N,
    image: P,
    description: C
  } = O, S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]), I = (0, i.e7)([u.Z], () => u.Z.getGuild(j), [j]), T = (0, m.cS)(O), Z = (0, i.e7)([d.default], () => null != f.creatorId ? d.default.getUser(f.creatorId) : d.default.getCurrentUser(), [f.creatorId]), w = (0, i.e7)([o.Z], () => o.Z.isLurking(j), [j]), D = (0, s.KS)(S, I);
  return (0, r.jsxs)("div", {
    className: p.content,
    children: [(0, r.jsx)(h.Z, {
      className: p.previewCard,
      guild: I,
      channel: S,
      location: null != T ? T : true,
      creator: Z,
      name: N,
      description: C,
      imageSource: (n = (0, g.Gb)(f, j, b), null == P && null == n.image ? null : null != P && /^data:/.test(P) ? P : (0, x.Z)(n)),
      isActive: false,
      isUserLurking: w,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: O,
      eventPreview: O
    }), (0, r.jsxs)("div", {
      className: p.textContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: v.intl.string(v.t.yBsFE3)
      }), (0, r.jsx)(a.Text, {
        color: "text-secondary",
        variant: "text-md/normal",
        className: p.subheader,
        children: null != location ? v.intl.string(v.t.KDPFi9) : v.intl.format(v.t.f55NX0, {
          channelName: null != (t = null == S ? true : S.name) ? t : "",
          channelHook: () => {
            var e;
            return (0, r.jsxs)("div", {
              className: p.channelName,
              children: [null != D ? (0, r.jsx)(D, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: p.icon
              }) : (0, r.jsx)(a._tJ, {
                size: "custom",
                color: "currentColor",
                height: 18,
                width: 18,
                className: p.locationIcon
              }), null != (e = null == S ? true : S.name) ? e : T]
            })
          }
        })
      }), null != y && (0, r.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: p.subheader,
        children: y.getAnyErrorMessage()
      })]
    })]
  })
}