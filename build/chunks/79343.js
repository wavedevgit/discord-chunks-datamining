/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
function t(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      l = s.value
  } catch (e) {
    return void n(e)
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i)
}

function n(e) {
  return function() {
    var n = this,
      r = arguments;
    return new Promise(function(i, o) {
      var a = e.apply(n, r);

      function s(e) {
        t(a, i, o, s, l, "next", e)
      }

      function l(e) {
        t(a, i, o, s, l, "throw", e)
      }
      s(void 0)
    })
  }
}
e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports