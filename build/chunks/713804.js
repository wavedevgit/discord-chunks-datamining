/** Chunk was on web.js **/
/** chunk id: 713804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getOrParseBioAST: () => g,
  parseBioReact: () => h,
  parseBioReactWithCachedAST: () => E,
  parseBioReactWithoutScrolling: () => b
}), require("./733351.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk635377 = require("./635377.js"),
  s = require.n(Chunk635377),
  Chunk280230 = require("./280230.js"),
  l = require.n(Chunk280230),
  Chunk436857 = require("./436857.js"),
  Chunk999443 = require("./999443.jsx"),
  Chunk542664 = require("./542664.js");
require("./46054.js");
var Chunk551965 = require("./551965.js");
let p = (0, Chunk551965.A)([Chunk542664.A.PROFILE_BIO_RULES, (0, Chunk999443.A)({
    enableBuildOverrides: false,
    mustConfirmExternalLink: true
  })]),
  _ = new(s())({
    max: 2e3
  }),
  h = Chunk436857.aV(p),
  m;

function g(e) {
  let t = _.get(e);
  return null != t || (t = m(e, true), _.set(e, t)), t
}

function E(e) {
  if (0 === e.trim().length) return null;
  let t = g(e);
  return l().reactFor(l().ruleOutput(p, "react"))(t)
}
let y = ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"],
  b = Chunk436857.aV((0, Chunk551965.A)([i().omit(p, y), {
    emoji: {
      react: () => null
    }
  }]))