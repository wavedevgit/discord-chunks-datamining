/** Chunk was on 67376 **/
/** chunk id: 246295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk905693 = require("./905693.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let [t, n] = i.useState(false), [o, a] = i.useState(false), [s, u] = i.useState(false);
  return {
    rules: i.useMemo(() => {
      let i = l.intl.format(l.t.S2lVJS, {
        onCommunityGuidelinesClick: () => (0, r.lW)({
          articleId: c.BhN.PUBLIC_GUILD_GUILDLINES,
          guildId: e,
          modalStep: r.tK.AGREE_TO_RULES
        }),
        onDiscoveryGuidelinesClick: () => (0, r.lW)({
          articleId: c.BhN.SERVER_DISCOVERY_GUIDELINES,
          guildId: e,
          modalStep: r.tK.AGREE_TO_RULES
        })
      });
      return [{
        key: "healthy",
        title: l.intl.string(l.t.jIi9go),
        body: l.intl.string(l.t["4uUAXl"]),
        onCheck: () => n(!t),
        checked: t
      }, {
        key: "nonNSFW",
        title: l.intl.string(l.t.iwnCh4),
        body: l.intl.string(l.t.UKFzER),
        onCheck: () => a(!o),
        checked: o
      }, {
        key: "guidelines",
        title: i,
        body: l.intl.string(l.t.u0Go2t),
        onCheck: () => u(!s),
        checked: s
      }]
    }, [s, e, t, o]),
    rulesAccepted: t && o && s
  }
}