/** Chunk was on 51343 **/
/** chunk id: 585183, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  h: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200025 = require("./200025.js");
let N = new Chunk710845.Z("TwoWayLinkDiscordConsentWeb");

function C(e) {
  let {
    platformType: a,
    clientId: t,
    scopes: s,
    authToken: d,
    onContinue: C,
    onError: j,
    onClose: p,
    redirectUri: v
  } = e, [b, f] = r.useState(false), k = r.useCallback(async e => {
    let t, n, {
        location: r
      } = e,
      {
        callbackCode: s,
        callbackState: l
      } = d;
    try {
      t = await o.Z.completeTwoWayLink(a, r, s, l)
    } catch (e) {
      var i;
      N.error("".concat(a, " link error:"), e), n = null == (i = e.body) ? true : i.code
    }
    null != t ? C() : j(n)
  }, [a, d, C, j]), {
    header: g,
    body: E,
    appDetails: T,
    sendAuthorize: O
  } = (0, x.useOAuth2AuthorizeForm)({
    clientId: t,
    scopes: s,
    responseType: "code",
    callback: k,
    isTrustedName: true,
    isEmbeddedFlow: true,
    redirectUri: v,
    isTwoWayLinkDiscordConsent: true
  }), R = r.useCallback(() => {
    l()(null != O, "sendAuthorize not available"), f(true), O(true)
  }, [O]);
  return (0, n.jsxs)(u.Z, {
    children: [(0, n.jsxs)(i.xBx, {
      direction: c.Z.Direction.VERTICAL,
      className: m.header,
      separator: false,
      children: [(0, n.jsx)(i.Text, {
        className: m.stepHeader,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: h.intl.format(h.t.fHz6eR, {
          number: 2,
          total: 2
        })
      }), null != p && (0, n.jsx)(i.olH, {
        className: m.closeButton,
        onClick: p
      })]
    }), (0, n.jsxs)(i.hzk, {
      className: m.consentContent,
      paddingFix: false,
      children: [(0, n.jsx)("div", {
        className: m.consentHeader,
        children: g
      }), E, T]
    }), (0, n.jsx)(i.mzw, {
      className: m.footer,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: m.footerButton,
        children: (0, n.jsx)(i.Button, {
          variant: "primary",
          text: h.intl.string(h.t.ZN4hkc),
          loading: b,
          onClick: R
        })
      })
    })]
  })
}