/** Chunk was on 94678 **/
/** chunk id: 515541, original params: t,r,e (module,exports,require) **/
"use strict";
var n = require("./61748.js")("iterator"),
  o = false;
try {
  var s = 0,
    i = {
      next: function() {
        return {
          done: !!s++
        }
      },
      return: function() {
        o = true
      }
    };
  i[n] = function() {
    return this
  }, Array.from(i, function() {
    throw 2
  })
} catch (t) {}
module.exports = function(t, r) {
  try {
    if (!r && !o) returnfalse
  } catch (t) {
    returnfalse
  }
  var e = false;
  try {
    var s = {};
    s[n] = function() {
      return {
        next: function() {
          return {
            done: e = true
          }
        }
      }
    }, t(s)
  } catch (t) {}
  return e
}