/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(583584),
  i = function() {
    return !!r
  };
i.hasArrayLengthDefineBug = function() {
  if (!r) return null;
  try {
    return 1 !== r([], "length", {
      value: 1
    }).length
  } catch (e) {
    return !0
  }
}, e.exports = i