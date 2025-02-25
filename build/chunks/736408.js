/** Chunk was on 93259 **/
n.d(t, {
  $: () => c
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var a = n(134432),
  o = n(768581),
  r = n(981631);
let {
  API_ENDPOINT: i,
  CDN_HOST: l
} = window.GLOBAL_ENV;

function c(e) {
  let {
    itemId: t,
    hash: n,
    containerWidth: c = 1024
  } = e, s = new URLSearchParams({
    size: (0, a.oO)(c * (0, a.x_)()).toString()
  }).toString(), d = o.$k ? "webp" : "png";
  return null != l ? "".concat(location.protocol, "//").concat(l, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(d, "?").concat(s) : "".concat(location.protocol).concat(i).concat(r.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, d), "?").concat(s)
}