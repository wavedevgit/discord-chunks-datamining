/** Chunk was on 77069 **/
/** chunk id: 367889, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk160913 = require("./160913.js"),
  Chunk813732 = require("./813732.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk684610 = require("./684610.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let _ = (0, Chunk509613.wf)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.trSpHX),
    StronglyDiscouragedCustomComponent: Chunk813732.Z,
    buildLayout: () => []
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.trSpHX),
    buildLayout: () => [Chunk684610.E]
  }),
  N = (0, Chunk509613.m7)(Chunk313789.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.trSpHX),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("SubscriptionsPanel") ? true : Chunk726985.s6.SUBSCRIPTIONS,
    icon: Chunk657707.XOf,
    trailing: {
      type: Chunk970013.W.STRONGLY_DISCOURAGED_CUSTOM,
      useCustomDecoration: () => (0, Chunk160913.U)() ? (0, Chunk54381.jsx)(Chunk793030.Mgn, {
        size: "xs",
        color: Chunk692547.Z.unsafe_rawColors.YELLOW_300
      }) : null
    },
    buildLayout: () => (0, Chunk526665.Gl)("SubscriptionsPanel") ? [I] : [_]
  })