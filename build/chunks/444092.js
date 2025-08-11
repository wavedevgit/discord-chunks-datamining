/** Chunk was on web.js **/
/** chunk id: 444092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk63063 = require("./63063.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  let i = null;
  return "failed" === t ? i = s(e, n.code) : "n/a" === t && (i = l(e, n.code)), null != i && (i.errorCodeMessage = o.intl.format(o.t["1Bi9CQ"], {
    supportURL: r.Z.getSubmitRequestURL(),
    errorCode: n.code
  })), i
}

function s(e, t) {
  let {
    platform: n,
    name: r
  } = e;
  switch (t) {
    case i.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
      return {
        title: o.intl.string(o.t["GSZ+HB"]), body: o.intl.formatToPlainString(o.t["cYX/3N"], {
          deviceType: n
        })
      };
    case i.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
      return {
        title: o.intl.formatToPlainString(o.t.akd6S0, {
          deviceType: n
        }), body: o.intl.formatToPlainString(o.t.RyOvpK, {
          deviceName: r
        })
      };
    case i.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
      return {
        title: o.intl.formatToPlainString(o.t.M6Vzam, {
          deviceType: n
        }), body: o.intl.formatToPlainString(o.t.InKtnJ, {
          deviceName: r
        })
      };
    case i.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
      return {
        title: o.intl.string(o.t["QL1y9/"]), body: o.intl.formatToPlainString(o.t.D18eZm, {
          deviceType: n
        }), isAccountLinkError: true
      };
    default:
      return {
        title: o.intl.string(o.t["QL1y9/"]), body: o.intl.formatToPlainString(o.t["6ZyNHx"], {
          deviceName: r
        })
      }
  }
}

function l(e, t) {
  let {
    platform: n,
    name: r
  } = e;
  return t === i.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED ? {
    title: o.intl.formatToPlainString(o.t.KchfhI, {
      deviceType: n
    }),
    body: o.intl.formatToPlainString(o.t["21ndz8"], {
      deviceName: r
    })
  } : null
}