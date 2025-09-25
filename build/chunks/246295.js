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
  let [t, n] = c.useState(false), [o, s] = c.useState(false), [a, d] = c.useState(false);
  return {
    rules: c.useMemo(() => {
      let c = l.intl.format(l.t.S2lVJS, {
        onCommunityGuidelinesClick: () => (0, i.lW)({
          articleId: r.BhN.PUBLIC_GUILD_GUILDLINES,
          guildId: e,
          modalStep: i.tK.AGREE_TO_RULES
        }),
        onDiscoveryGuidelinesClick: () => (0, i.lW)({
          articleId: r.BhN.SERVER_DISCOVERY_GUIDELINES,
          guildId: e,
          modalStep: i.tK.AGREE_TO_RULES
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
        onCheck: () => s(!o),
        checked: o
      }, {
        key: "guidelines",
        title: c,
        body: l.intl.string(l.t.u0Go2t),
        onCheck: () => d(!a),
        checked: a
      }]
    }, [a, e, t, o]),
    rulesAccepted: t && o && a
  }
}