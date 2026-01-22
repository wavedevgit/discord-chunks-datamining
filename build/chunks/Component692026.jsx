/** Chunk was on 342 **/
/** chunk id: 692026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./228524.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk857071 = require("./857071.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk794782 = require("./794782.js"),
  Chunk9448 = require("./9448.js"),
  Chunk691012 = require("./691012.js"),
  Chunk895202 = require("./895202.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk330156 = require("./330156.js");

function f(e) {
  var t, n;
  let {
    guildId: f,
    guildEvent: p,
    guildEventId: b,
    error: y
  } = e, O = r.useMemo(() => (0, x.hQ)(p, f), [p, f]), {
    channel_id: A,
    name: E,
    image: N,
    description: P
  } = O, C = (0, i.bG)([c.A], () => c.A.getChannel(A), [A]), S = (0, i.bG)([u.A], () => u.A.getGuild(f), [f]), T = (0, g.oF)(O), w = (0, i.bG)([d.default], () => null != p.creatorId ? d.default.getUser(p.creatorId) : d.default.getCurrentUser(), [p.creatorId]), I = (0, i.bG)([o.A], () => o.A.isLurking(f), [f]), D = (0, a.gU)(C, S);
  return (0, l.jsxs)("div", {
    className: v.Qs,
    children: [(0, l.jsx)(h.A, {
      className: v.B0,
      guild: S,
      channel: C,
      location: null != T ? T : true,
      creator: w,
      name: E,
      description: P,
      imageSource: (n = (0, x.hQ)(p, f, b), null == N && null == n.image ? null : null != N && /^data:/.test(N) ? N : (0, m.A)(n)),
      isActive: false,
      isUserLurking: I,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: O,
      eventPreview: O,
      hideAgeVerificationNotice: true
    }), (0, l.jsxs)("div", {
      className: v.FS,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: j.intl.string(j.t.yBsFE3)
      }), (0, l.jsx)(s.Text, {
        color: "text-subtle",
        variant: "text-md/normal",
        className: v.m_,
        children: null != location ? j.intl.string(j.t.KDPFi9) : j.intl.format(j.t.f55NX0, {
          channelName: null != (t = null == C ? true : C.name) ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: v.HA,
              children: [null != D ? (0, l.jsx)(D, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: v.Kk
              }) : (0, l.jsx)(s.BT6, {
                size: "custom",
                color: "currentColor",
                height: 18,
                width: 18,
                className: v.NR
              }), null != (e = null == C ? true : C.name) ? e : T]
            })
          }
        })
      }), null != y && (0, l.jsx)(s.Text, {
        color: "text-feedback-critical",
        variant: "text-xs/normal",
        className: v.m_,
        children: y.getAnyErrorMessage()
      })]
    })]
  })
}