/** Chunk was on web.js **/
/** chunk id: 786074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk490983 = require("./490983.js"),
  Chunk388032 = require("./388032.jsx");
let a = {
  MENTION_EVERYONE: () => ({
    test: "everyone",
    text: "@everyone",
    description: Chunk388032.intl.string(Chunk388032.t.lHC4zy)
  }),
  MENTION_HERE: () => ({
    test: "here",
    text: "@here",
    description: Chunk388032.intl.string(Chunk388032.t.OE6mOz)
  }),
  MENTION_GAME: () => ({
    test: "game",
    text: "@game",
    inlineAutocompleteType: "gameMentionInput",
    description: Chunk388032.intl.string(Chunk388032.t["1kR88y"])
  }),
  MENTION_TIMESTAMP: () => ({
    test: "time",
    text: "@time",
    inlineAutocompleteType: "timestampMentionInput",
    description: Chunk388032.intl.string(Chunk388032.t.V6L3TV)
  }),
  LAUNCHABLE_APPLICATIONS: () => Chunk490983.Z.launchableApplicationViewItems
}