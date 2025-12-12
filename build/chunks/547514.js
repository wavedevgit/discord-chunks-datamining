/** Chunk was on web.js **/
/** chunk id: 547514, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./751736.js")("iterator"),
  i = false;
try {
  var o = 0,
    a = {
      next: function() {
        return {
          done: !!o++
        }
      },
      return: function() {
        i = true
      }
    };
  a[r] = function() {
    return this
  }, Array.from(a, function() {
    throw 2
  })
} catch (e) {}
module.exports = function(e, t) {
  try {
    if (!t && !i) returnfalse
  } catch (e) {
    returnfalse
  }
  var n = false;
  try {
    var o = {};
    o[r] = function() {
      return {
        next: function() {
          return {
            done: n = true
          }
        }
      }
    }, e(o)
  } catch (e) {}
  return n
}