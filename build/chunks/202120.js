/** Chunk was on web.js **/
/** chunk id: 202120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
});
var Chunk457330 = require("./457330.js"),
  Chunk358085 = require("./358085.js"),
  Chunk856651 = require("./856651.js"),
  Chunk981631 = require("./981631.js");
async function s(e) {
  let {
    location: t,
    twoWayLinkType: n,
    successRedirect: s,
    handle: l
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 ? arguments[2] : true, u = 700, d = 640, f = Math.round(screen.width / 2 - u / 2), p = screen.height > d ? Math.round(screen.height / 2 - d / 2) : 0, _ = null;
  (0, i.isDesktop)() || (_ = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(o.Z5c.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(p, ",left=").concat(f, ",width=").concat(u, ",height=").concat(d)));
  let m = c;
  if (null == m && e !== a.Kt) try {
    let {
      body: i
    } = await r.Z.authorize(e, {
      location: t,
      twoWayLinkType: n,
      successRedirect: s,
      handle: l
    });
    m = i.url
  } catch (e) {
    throw null == _ || _.close(), e
  }
  if (null == m) {
    null == _ || _.close();
    return
  }
  return null != _ ? _.location.href = m : window.open(m), m
}