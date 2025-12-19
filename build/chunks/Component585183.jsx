/** Chunk was on 51343 **/
/** chunk id: 585183, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  h: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js");
let p = new Chunk710845.Z("TwoWayLinkDiscordConsentWeb");

function N(e) {
  let {
    platformType: t,
    clientId: a,
    scopes: r,
    authToken: d,
    onContinue: N,
    onError: g,
    onClose: C,
    redirectUri: j
  } = e, [v, f] = i.useState(false), k = i.useCallback(async e => {
    let a, n, {
        location: i
      } = e,
      {
        callbackCode: r,
        callbackState: l
      } = d;
    try {
      a = await o.Z.completeTwoWayLink(t, i, r, l)
    } catch (e) {
      var s;
      p.error("".concat(t, " link error:"), e), n = null == (s = e.body) ? true : s.code
    }
    null != a ? N() : g(n)
  }, [t, d, N, g]), {
    header: b,
    body: E,
    appDetails: T,
    sendAuthorize: O
  } = (0, u.useOAuth2AuthorizeForm)({
    clientId: a,
    scopes: r,
    responseType: "code",
    callback: k,
    isTrustedName: true,
    isEmbeddedFlow: true,
    redirectUri: j,
    isTwoWayLinkDiscordConsent: true
  }), w = i.useCallback(() => {
    l()(null != O, "sendAuthorize not available"), f(true), O(true)
  }, [O]);
  return (0, n.jsxs)(x.Z, {
    children: [(0, n.jsxs)(s.xBx, {
      "data-migration-pending": true,
      direction: c.Z.Direction.VERTICAL,
      className: h.header,
      separator: false,
      children: [(0, n.jsx)(s.Text, {
        className: h.stepHeader,
        variant: "text-xs/bold",
        color: "text-default",
        children: m.intl.format(m.t.fHz6eR, {
          number: 2,
          total: 2
        })
      }), null != C && (0, n.jsx)(s.olH, {
        className: h.closeButton,
        onClick: C
      })]
    }), (0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: h.consentContent,
      paddingFix: false,
      children: [(0, n.jsx)("div", {
        className: h.consentHeader,
        children: b
      }), E, T]
    }), (0, n.jsx)(s.mzw, {
      "data-migration-pending": true,
      className: h.footer,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.footerButton,
        children: (0, n.jsx)(s.Button, {
          variant: "primary",
          text: m.intl.string(m.t.ZN4hkc),
          loading: v,
          onClick: w
        })
      })
    })]
  })
}