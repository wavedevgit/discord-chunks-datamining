/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  J: () => s,
  V: () => l
});
var r = n(512722),
  i = n.n(r),
  o = n(476326),
  a = n(861990);

function s(e, t) {
  var n;
  i()(e.item.platform === o.ow.WEB, "Upload must be in the Web format");
  let r = (0, a.B)(e, t);
  return Promise.resolve({
    file: e.item.file,
    name: null !== (n = r.filename) && void 0 !== n ? n : ""
  })
}
async function l(e) {}