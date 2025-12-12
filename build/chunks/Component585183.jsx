/** Chunk was on 51343 **/
/** chunk id: 585183, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  h: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js");
let N = new Chunk710845.Z("TwoWayLinkDiscordConsentWeb");

function C(e) {
  let {
    platformType: t,
    clientId: a,
    scopes: s,
    authToken: d,
    onContinue: C,
    onError: j,
    onClose: p,
    redirectUri: v
  } = e, [f, b] = n.useState(false), k = n.useCallback(async e => {
    let a, l, {
        location: n
      } = e,
      {
        callbackCode: s,
        callbackState: r
      } = d;
    try {
      a = await o.Z.completeTwoWayLink(t, n, s, r)
    } catch (e) {
      var i;
      N.error("".concat(t, " link error:"), e), l = null == (i = e.body) ? true : i.code
    }
    null != a ? C() : j(l)
  }, [t, d, C, j]), {
    header: g,
    body: E,
    appDetails: T,
    sendAuthorize: O
  } = (0, u.useOAuth2AuthorizeForm)({
    clientId: a,
    scopes: s,
    responseType: "code",
    callback: k,
    isTrustedName: true,
    isEmbeddedFlow: true,
    redirectUri: v,
    isTwoWayLinkDiscordConsent: true
  }), R = n.useCallback(() => {
    r()(null != O, "sendAuthorize not available"), b(true), O(true)
  }, [O]);
  return (0, l.jsxs)(x.Z, {
    children: [(0, l.jsxs)(i.xBx, {
      direction: c.Z.Direction.VERTICAL,
      className: h.header,
      separator: false,
      children: [(0, l.jsx)(i.Text, {
        className: h.stepHeader,
        variant: "text-xs/bold",
        color: "text-default",
        children: m.intl.format(m.t.fHz6eR, {
          number: 2,
          total: 2
        })
      }), null != p && (0, l.jsx)(i.olH, {
        className: h.closeButton,
        onClick: p
      })]
    }), (0, l.jsxs)(i.hzk, {
      className: h.consentContent,
      paddingFix: false,
      children: [(0, l.jsx)("div", {
        className: h.consentHeader,
        children: g
      }), E, T]
    }), (0, l.jsx)(i.mzw, {
      className: h.footer,
      children: (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.footerButton,
        children: (0, l.jsx)(i.Button, {
          variant: "primary",
          text: m.intl.string(m.t.ZN4hkc),
          loading: f,
          onClick: R
        })
      })
    })]
  })
}