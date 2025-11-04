/** Chunk was on web.js **/
/** chunk id: 657871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kB: () => i,
  zM: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-09_mention_suggestion",
  label: "Mention Suggestions",
  defaultConfig: {
    enabled: false,
    suggestionDesign: "horizontal",
    highlightDesign: "mention",
    onlyExactMatch: false,
    eagerRecentSenders: false,
    largeGuildExactMatchRecentSenders: false
  },
  treatments: [{
    id: 1,
    label: "Default",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: false,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 2,
    label: "Exact match only",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: true,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 3,
    label: "Alternate highlight design",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "mention",
      onlyExactMatch: false,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 4,
    label: "Horizontal suggestions",
    config: {
      enabled: true,
      suggestionDesign: "horizontal",
      highlightDesign: "simple",
      onlyExactMatch: false,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 5,
    label: "Exact match + eager recent senders",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: true,
      eagerRecentSenders: true,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 6,
    label: "Eager match recent senders for small guilds, exact match for large guilds",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: true,
      eagerRecentSenders: true,
      largeGuildExactMatchRecentSenders: true
    }
  }]
});

function i(e, t) {
  return r.getCurrentConfig({
    location: e
  }, t)
}

function a(e, t) {
  return r.useExperiment({
    location: e
  }, t)
}