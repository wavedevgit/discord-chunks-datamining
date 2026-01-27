/** Chunk was on web.js **/
/** chunk id: 738104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => s
});
var Chunk77468 = require("./77468.js"),
  Chunk723702 = require("./723702.js"),
  Chunk783419 = require("./783419.js"),
  Chunk652215 = require("./652215.js");
async function s(e) {
  let {
    location: t,
    twoWayLinkType: n,
    successRedirect: s,
    handle: l
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 ? arguments[2] : true, u = 700, d = 640, f = Math.round(screen.width / 2 - u / 2), p = screen.height > d ? Math.round(screen.height / 2 - d / 2) : 0, _ = null;
  (0, i.isDesktop)() || (_ = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(o.BVt.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(p, ",left=").concat(f, ",width=").concat(u, ",height=").concat(d)));
  let h = c;
  if (null == h && e !== a.zR) try {
    let {
      body: i
    } = await r.A.authorize(e, {
      location: t,
      twoWayLinkType: n,
      successRedirect: s,
      handle: l
    });
    h = i.url
  } catch (e) {
    throw null == _ || _.close(), e
  }
  if (null == h) {
    null == _ || _.close();
    return
  }
  return null != _ ? _.location.href = h : window.open(h), h
}