/** Chunk was on 58023 **/
/** chunk id: 377329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk296845 = require("./296845.js");

function f(e) {
  var t, n;
  let {
    guildId: f,
    guildEvent: j,
    guildEventId: b,
    error: y
  } = e, O = l.useMemo(() => (0, m.Gb)(j, f), [j, f]), {
    channel_id: E,
    name: N,
    image: C,
    description: I
  } = O, S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]), T = (0, i.e7)([u.Z], () => u.Z.getGuild(f), [f]), P = (0, x.cS)(O), w = (0, i.e7)([d.default], () => null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser(), [j.creatorId]), Z = (0, i.e7)([o.Z], () => o.Z.isLurking(f), [f]), D = (0, s.KS)(S, T);
  return (0, r.jsxs)("div", {
    className: p.content,
    children: [(0, r.jsx)(h.Z, {
      className: p.previewCard,
      guild: T,
      channel: S,
      location: null != P ? P : true,
      creator: w,
      name: N,
      description: I,
      imageSource: (n = (0, m.Gb)(j, f, b), null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
      isActive: false,
      isUserLurking: Z,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: O,
      eventPreview: O
    }), (0, r.jsxs)("div", {
      className: p.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-xl/semibold",
        children: v.intl.string(v.t.yBsFEx)
      }), (0, r.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: p.subheader,
        children: null != location ? v.intl.string(v.t.KDPFi4) : v.intl.format(v.t.f55NX1, {
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
              }), null != (e = null == S ? true : S.name) ? e : P]
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