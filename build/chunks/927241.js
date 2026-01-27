/** Chunk was on web.js **/
/** chunk id: 927241, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./380744.js")("iterator"),
  i = false;
try {
  var a = 0,
    o = {
      next: function() {
        return {
          done: !!a++
        }
      },
      return: function() {
        i = true
      }
    };
  o[r] = function() {
    return this
  }, Array.from(o, function() {
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
    var a = {};
    a[r] = function() {
      return {
        next: function() {
          return {
            done: n = true
          }
        }
      }
    }, e(a)
  } catch (e) {}
  return n
}