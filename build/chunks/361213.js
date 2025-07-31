/** Chunk was on 91396 **/
t.d(n, {
  Z: () => r
});
var o = t(981631);

function r(e, n) {
  let t, r = window.GLOBAL_ENV.CDN_HOST,
    i = window.GLOBAL_ENV.API_ENDPOINT;
  return null != r ? "https://".concat(r, "/app-assets/").concat(e, "/store/").concat(n, ".mp4") : "".concat(location.protocol).concat(i).concat(o.ANM.STORE_ASSET(e, n, "mp4"))
}