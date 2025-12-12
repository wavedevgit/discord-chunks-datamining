/** Chunk was on web.js **/
/** chunk id: 260720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => f
});
var Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk941651 = require("./941651.js"),
  Chunk388032 = require("./388032.jsx");
let d = (e, t) => {
    var n;
    if (null == t) return null;
    let r = null == (n = t.recipients) ? true : n.find(t => t !== e.id),
      i = o.default.getUser(r);
    return null == i ? null : (0, a.XM)(i)
  },
  f = e => {
    let t, n, {
        sender: o,
        channel: f,
        isSender: p,
        inviteState: _
      } = e,
      m = (0, s.sO)();
    if (p) {
      let e = d(o, f);
      if (null == e) return null;
      let a = u.intl.format(c.default.MkcFjx, {
        receiverName: e,
        premiumGroupProductName: m
      });
      switch (_) {
        case s.bZ.ACCEPTED:
          t = u.intl.formatToPlainString(c.default["5uwv8J"], {
            premiumGroupProductName: m
          }), n = u.intl.formatToPlainString(c.default["W7e/z1"], {
            receiverName: e
          });
          break;
        case s.bZ.REMOVED:
        case s.bZ.NOT_FOUND:
        case s.bZ.ERROR:
          t = u.intl.formatToPlainString(c.default.YLvraS, {
            premiumGroupProductName: m
          }), n = u.intl.format(c.default.BHxlIR, {
            premiumGroupProductName: m,
            onClick: () => {
              (0, i.openUserSettings)(r.n.SUBSCRIPTIONS_PANEL, {
                section: l.oAB.SUBSCRIPTIONS
              })
            }
          });
          break;
        case s.bZ.PENDING:
        default:
          t = u.intl.formatToPlainString(c.default["5uwv8J"], {
            premiumGroupProductName: m
          }), n = u.intl.formatToPlainString(c.default["AmE0B/"], {
            receiverName: e
          })
      }
      return {
        message: a,
        header: t,
        body: n
      }
    } else {
      let e = (0, a.XM)(o),
        r = u.intl.format(c.default["51Kv/4"], {
          senderName: e,
          premiumGroupProductName: m,
          helpCenterLink: s.j3
        });
      switch (_) {
        case s.bZ.ACCEPTED:
          t = u.intl.string(c.default.ssge1y), n = u.intl.formatToPlainString(c.default.fTAcw3, {
            senderName: e
          });
          break;
        case s.bZ.REMOVED:
        case s.bZ.NOT_FOUND:
        case s.bZ.ERROR:
          t = u.intl.formatToPlainString(c.default["AmLUw+"], {
            premiumGroupProductName: m
          }), n = u.intl.formatToPlainString(c.default["7XAuyg"], {
            premiumGroupProductName: m
          });
          break;
        case s.bZ.PENDING:
        default:
          t = u.intl.string(c.default.ssge1y), n = u.intl.formatToPlainString(c.default.MkcdX8, {
            senderName: e,
            premiumGroupProductName: m
          })
      }
      return {
        message: r,
        header: t,
        body: n
      }
    }
  }