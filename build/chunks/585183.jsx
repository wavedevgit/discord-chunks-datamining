/** Chunk was on 51343 **/
/** chunk id: 585183, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  h: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk600164 = require("./600164.js"),
  Chunk710845 = require("./710845.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475286 = require("./475286.js");
let N = new Chunk710845.Z("TwoWayLinkDiscordConsentWeb");

function C(e) {
  let {
    platformType: a,
    clientId: t,
    scopes: n,
    authToken: d,
    onContinue: C,
    onError: j,
    onClose: p,
    redirectUri: v
  } = e, [k, f] = s.useState(false), b = s.useCallback(async e => {
    let t, r, {
        location: s
      } = e,
      {
        callbackCode: n,
        callbackState: l
      } = d;
    try {
      t = await o.Z.completeTwoWayLink(a, s, n, l)
    } catch (e) {
      var i;
      N.error("".concat(a, " link error:"), e), r = null == (i = e.body) ? true : i.code
    }
    null != t ? C() : j(r)
  }, [a, d, C, j]), {
    header: E,
    body: T,
    appDetails: g,
    sendAuthorize: O
  } = (0, x.useOAuth2AuthorizeForm)({
    clientId: t,
    scopes: n,
    responseType: "code",
    callback: b,
    isTrustedName: true,
    isEmbeddedFlow: true,
    redirectUri: v,
    isTwoWayLinkDiscordConsent: true
  }), y = s.useCallback(() => {
    l()(null != O, "sendAuthorize not available"), f(true), O(true)
  }, [O]);
  return <u.Z>{<i.xBx direction={c.Z.Direction.VERTICAL} className={m.header} separator={false}>{<i.Text className={m.stepHeader} variant={"text-xs/bold"} color={"header-secondary"}>{h.intl.format(h.t.fHz6eX, {
          number: 2,
          total: 2
        })}</i.Text>}{null != p && <i.olH className={m.closeButton} onClick={p} />}</i.xBx>}{<i.hzk className={m.consentContent} paddingFix={false}>{<div className={m.consentHeader}>{E}</div>}{T}{g}</i.hzk>}{<i.mzw className={m.footer}><div data-button-hoisted-classname-wrapper={true} className={m.footerButton}><i.zxk variant={"primary"} text={h.intl.string(h.t.ZN4hkZ)} loading={k} onClick={y} /></div></i.mzw>}</u.Z>
}