/** Chunk was on 89479 **/
/** chunk id: 59198, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  W: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk77468 = require("./77468.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk185311 = require("./185311.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk689588 = require("./689588.js");
let h = new Chunk626584.A("TwoWayLinkDiscordConsentWeb");

function p(a) {
  let {
    platformType: e,
    clientId: t,
    scopes: s,
    authToken: d,
    onContinue: p,
    onError: j,
    onClose: C,
    redirectUri: g
  } = a, [v, b] = r.useState(false), E = r.useCallback(async a => {
    let t, n, {
        location: r
      } = a,
      {
        callbackCode: s,
        callbackState: i
      } = d;
    try {
      t = await c.A.completeTwoWayLink(e, r, s, i)
    } catch (a) {
      var l;
      h.error("".concat(e, " link error:"), a), n = null == (l = a.body) ? true : l.code
    }
    null != t ? p() : j(n)
  }, [e, d, p, j]), {
    header: f,
    body: k,
    appDetails: A,
    sendAuthorize: T
  } = (0, x.useOAuth2AuthorizeForm)({
    clientId: t,
    scopes: s,
    responseType: "code",
    callback: E,
    isTrustedName: true,
    isEmbeddedFlow: true,
    redirectUri: g,
    isTwoWayLinkDiscordConsent: true
  }), w = r.useCallback(() => {
    i()(null != T, "sendAuthorize not available"), b(true), T(true)
  }, [T]);
  return (0, n.jsxs)(m.A, {
    children: [(0, n.jsxs)(l.rQ0, {
      "data-migration-pending": true,
      direction: o.A.Direction.VERTICAL,
      className: N.wx,
      separator: false,
      children: [(0, n.jsx)(l.Text, {
        className: N.u1,
        variant: "text-xs/bold",
        color: "text-default",
        children: u.intl.format(u.t.fHz6eR, {
          number: 2,
          total: 2
        })
      }), null != C && (0, n.jsx)(l.s_y, {
        className: N.b,
        onClick: C
      })]
    }), (0, n.jsxs)(l.$mQ, {
      "data-migration-pending": true,
      className: N.mB,
      paddingFix: false,
      children: [(0, n.jsx)("div", {
        className: N.a8,
        children: f
      }), k, A]
    }), (0, n.jsx)(l.jlY, {
      "data-migration-pending": true,
      className: N.qr,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: N.wC,
        children: (0, n.jsx)(l.Button, {
          variant: "primary",
          text: u.intl.string(u.t.ZN4hkc),
          loading: v,
          onClick: w
        })
      })
    })]
  })
}