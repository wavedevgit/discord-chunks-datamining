/** Chunk was on 50448 **/
/** chunk id: 997391, original params: t,r,n (module,exports,require) **/
"use strict";
var e = require("./394370.js")("iterator"),
  o = false;
try {
  var i = 0,
    u = {
      next: function() {
        return {
          done: !!i++
        }
      },
      return: function() {
        o = true
      }
    };
  u[e] = function() {
    return this
  }, Array.from(u, function() {
    throw 2
  })
} catch (t) {}
module.exports = function(t, r) {
  try {
    if (!r && !o) returnfalse
  } catch (t) {
    returnfalse
  }
  var n = false;
  try {
    var i = {};
    i[e] = function() {
      return {
        next: function() {
          return {
            done: n = true
          }
        }
      }
    }, t(i)
  } catch (t) {}
  return n
}