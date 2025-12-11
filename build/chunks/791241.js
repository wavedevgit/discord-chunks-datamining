/** Chunk was on 85032 **/
/** chunk id: 791241, original params: e,t,n (module,exports,require) **/
function r(e) {
  return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function i(e) {
  return null !== e && "object" === r(e) && Object.prototype.hasOwnProperty.call(e, "current")
}
require.d(exports, {
  d: () => i
})