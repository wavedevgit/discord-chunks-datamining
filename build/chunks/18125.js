/** Chunk was on web.js **/
/** chunk id: 18125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk975571 = require("./975571.js"),
  Chunk544105 = require("./544105.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n) {
  let i = null;
  return "failed" === t ? i = s(e, n.code) : "n/a" === t && (i = l(e, n.code)), null != i && (i.errorCodeMessage = a.intl.format(a.t["1Bi9Cf"], {
    supportURL: r.A.getSubmitRequestURL(),
    errorCode: n.code
  })), i
}

function s(e, t) {
  let {
    platform: n,
    name: r
  } = e;
  switch (t) {
    case i.K8.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
      return {
        title: a.intl.string(a.t["GSZ+HI"]), body: a.intl.formatToPlainString(a.t["cYX/3E"], {
          deviceType: n
        })
      };
    case i.K8.CONSOLE_DEVICE_INVALID_POWER_MODE:
      return {
        title: a.intl.formatToPlainString(a.t.akd6Sx, {
          deviceType: n
        }), body: a.intl.formatToPlainString(a.t.RyOvpJ, {
          deviceName: r
        })
      };
    case i.K8.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
      return {
        title: a.intl.formatToPlainString(a.t.M6Vzat, {
          deviceType: n
        }), body: a.intl.formatToPlainString(a.t.InKtnC, {
          deviceName: r
        })
      };
    case i.K8.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
      return {
        title: a.intl.string(a.t.QL1y93), body: a.intl.formatToPlainString(a.t.D18eZu, {
          deviceType: n
        }), isAccountLinkError: true
      };
    default:
      return {
        title: a.intl.string(a.t.QL1y93), body: a.intl.formatToPlainString(a.t["6ZyNH/"], {
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
  return t === i.K8.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED ? {
    title: a.intl.formatToPlainString(a.t.KchfhO, {
      deviceType: n
    }),
    body: a.intl.formatToPlainString(a.t["21ndz7"], {
      deviceName: r
    })
  } : null
}