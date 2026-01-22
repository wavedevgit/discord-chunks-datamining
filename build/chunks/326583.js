/** Chunk was on web.js **/
/** chunk id: 326583, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  try {
    return false !== Function.toString.call(e).indexOf("[native code]")
  } catch (t) {
    return "function" == typeof e
  }
}, module.exports.__esModule = true, module.exports.default = module.exports