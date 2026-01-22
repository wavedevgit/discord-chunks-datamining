/** Chunk was on web.js **/
/** chunk id: 574318, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "FIX",
    contains: [{
      begin: /[^\u2401\u0001]+/,
      end: /[\u2401\u0001]/,
      excludeEnd: true,
      returnBegin: true,
      returnEnd: false,
      contains: [{
        begin: /([^\u2401\u0001=]+)/,
        end: /=([^\u2401\u0001=]+)/,
        returnEnd: true,
        returnBegin: false,
        className: "attr"
      }, {
        begin: /=/,
        end: /([\u2401\u0001])/,
        excludeEnd: true,
        excludeBegin: true,
        className: "string"
      }]
    }],
    case_insensitive: true
  }
}