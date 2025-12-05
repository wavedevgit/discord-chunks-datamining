/** Chunk was on web.js **/
/** chunk id: 537363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => c
});
var Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk282793 = require("./282793.js"),
  Chunk441677 = require("./441677.js"),
  Chunk388032 = require("./388032.jsx");
let l = (e, t) => {
    var n;
    if (null == t) return null;
    let a = null == (n = t.recipients) ? true : n.find(t => t !== e.id),
      o = r.default.getUser(a);
    return null == o ? null : (0, i.XM)(o)
  },
  c = e => {
    let t, n, {
        sender: r,
        channel: c,
        isSender: u,
        inviteState: d,
        isMobile: f = false
      } = e,
      p = (0, a.sO)();
    if (u) {
      let e = l(r, c);
      if (null == e) return null;
      let i = s.intl.format(o.default.MkcFjx, {
        receiverName: e,
        premiumGroupProductName: p
      });
      switch (d) {
        case a.bZ.ACCEPTED:
          t = s.intl.formatToPlainString(o.default["5uwv8J"], {
            premiumGroupProductName: p
          }), n = s.intl.formatToPlainString(o.default["W7e/z1"], {
            receiverName: e
          });
          break;
        case a.bZ.REMOVED:
        case a.bZ.NOT_FOUND:
        case a.bZ.ERROR:
          t = s.intl.formatToPlainString(o.default.YLvraS, {
            premiumGroupProductName: p
          }), n = s.intl.format(o.default.BHxlIR, {
            premiumGroupProductName: p,
            onClick: () => {}
          });
          break;
        case a.bZ.PENDING:
        default:
          t = s.intl.formatToPlainString(o.default["5uwv8J"], {
            premiumGroupProductName: p
          }), n = s.intl.formatToPlainString(o.default["AmE0B/"], {
            receiverName: e
          })
      }
      return {
        message: i,
        header: t,
        body: n
      }
    } else {
      let e = (0, i.XM)(r),
        l = s.intl.format(o.default["51Kv/4"], {
          senderName: e,
          premiumGroupProductName: p,
          helpCenterLink: a.j3
        });
      switch (d) {
        case a.bZ.ACCEPTED:
          t = s.intl.string(o.default.ssge1y), n = s.intl.formatToPlainString(o.default.fTAcw3, {
            senderName: e
          });
          break;
        case a.bZ.REMOVED:
        case a.bZ.NOT_FOUND:
        case a.bZ.ERROR:
          t = s.intl.formatToPlainString(o.default["AmLUw+"], {
            premiumGroupProductName: p
          }), n = s.intl.formatToPlainString(o.default["7XAuyg"], {
            premiumGroupProductName: p
          });
          break;
        case a.bZ.PENDING:
        default:
          t = s.intl.string(o.default.ssge1y), n = f ? s.intl.formatToPlainString(o.default.tej76V, {
            senderName: e,
            premiumGroupProductName: p
          }) : s.intl.formatToPlainString(o.default.MkcdX8, {
            senderName: e,
            premiumGroupProductName: p
          })
      }
      return {
        message: l,
        header: t,
        body: n
      }
    }
  }