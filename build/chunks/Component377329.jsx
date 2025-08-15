/** Chunk was on 61 **/
/** chunk id: 377329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    guildEvent: j,
    guildEventId: y,
    error: b
  } = e, E = l.useMemo(() => (0, x.Gb)(j, p), [j, p]), {
    channel_id: O,
    name: N,
    image: C,
    description: T
  } = E, S = (0, i.e7)([c.Z], () => c.Z.getChannel(O), [O]), I = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]), Z = (0, m.cS)(E), P = (0, i.e7)([d.default], () => null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser(), [j.creatorId]), w = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]), D = (0, s.KS)(S, I);
  return (0, r.jsxs)("div", {
    className: f.content,
    children: [(0, r.jsx)(v.Z, {
      className: f.previewCard,
      guild: I,
      channel: S,
      location: null != Z ? Z : true,
      creator: P,
      name: N,
      description: T,
      imageSource: (n = (0, x.Gb)(j, p, y), null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
      isActive: false,
      isUserLurking: w,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: E,
      eventPreview: E
    }), (0, r.jsxs)("div", {
      className: f.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-xl/semibold",
        children: h.intl.string(h.t.yBsFEx)
      }), (0, r.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: f.subheader,
        children: null != location ? h.intl.string(h.t.KDPFi4) : h.intl.format(h.t.f55NX1, {
          channelName: null != (t = null == S ? true : S.name) ? t : "",
          channelHook: () => {
            var e;
            return (0, r.jsxs)("div", {
              className: f.channelName,
              children: [null != D ? (0, r.jsx)(D, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: f.icon
              }) : (0, r.jsx)(a._tJ, {
                size: "custom",
                color: "currentColor",
                height: 18,
                width: 18,
                className: f.locationIcon
              }), null != (e = null == S ? true : S.name) ? e : Z]
            })
          }
        })
      }), null != b && (0, r.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: f.subheader,
        children: b.getAnyErrorMessage()
      })]
    })]
  })
}