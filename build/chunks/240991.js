/** Chunk was on web.js **/
/** chunk id: 240991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getOrParseBioAST: () => g,
  parseBioReact: () => m,
  parseBioReactWithCachedAST: () => E,
  parseBioReactWithoutScrolling: () => y
}), require("./781311.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775),
  Chunk159635 = require("./159635.js"),
  l = require.n(Chunk159635),
  Chunk25209 = require("./25209.js"),
  Chunk691424 = require("./691424.jsx"),
  Chunk428595 = require("./428595.js");
require("./454585.js");
var Chunk364458 = require("./364458.js");
let p = (0, Chunk364458.Z)([Chunk428595.Z.PROFILE_BIO_RULES, (0, Chunk691424.Z)({
    enableBuildOverrides: false,
    mustConfirmExternalLink: true
  })]),
  _ = new(o())({
    max: 2e3
  }),
  m = Chunk25209.w4(p),
  h = true;

function g(e) {
  let t = _.get(e);
  return null != t || (t = h(e, true), _.set(e, t)), t
}

function E(e) {
  if (0 === e.trim().length) return null;
  let t = g(e);
  return l().reactFor(l().ruleOutput(p, "react"))(t)
}
let b = ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"],
  y = Chunk25209.w4((0, Chunk364458.Z)([i().omit(p, b), {
    emoji: {
      react: () => null
    }
  }]))