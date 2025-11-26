/** Chunk was on web.js **/
/** chunk id: 537363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => l,
  l: () => c
});
var Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk282793 = require("./282793.js"),
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx");
let l = (e, t) => {
    var n;
    if (null == t) return null;
    let l = null == (n = t.recipients) ? true : n.find(t => t !== e.id),
      c = r.default.getUser(l);
    if (null == c) return null;
    let u = (0, i.XM)(c),
      d = (0, a.sO)(),
      f = s.intl.format(o.default.MkcFjx, {
        receiverName: u,
        premiumGroupProductName: d
      });
    return {
      message: f,
      header: s.intl.formatToPlainString(o.default["5uwv8J"], {
        premiumGroupProductName: d
      }),
      body: s.intl.formatToPlainString(o.default["AmE0B/"], {
        receiverName: u
      })
    }
  },
  c = (e, t) => {
    let n = (0, i.XM)(e),
      r = (0, a.sO)(),
      l = s.intl.format(o.default["51Kv/4"], {
        senderName: n,
        premiumGroupProductName: r,
        helpCenterLink: a.j3
      });
    return {
      message: l,
      header: s.intl.string(o.default.ssge1y),
      body: t ? s.intl.formatToPlainString(o.default.tej76V, {
        senderName: n,
        premiumGroupProductName: r
      }) : s.intl.formatToPlainString(o.default.MkcdX8, {
        senderName: n,
        premiumGroupProductName: r
      })
    }
  }