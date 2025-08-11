/** Chunk was on 51343 **/
/** chunk id: 212598, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  t: () => v
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk478677 = require("./478677.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk202120 = require("./202120.js"),
  Chunk600164 = require("./600164.js"),
  Chunk710845 = require("./710845.js"),
  Chunk424071 = require("./424071.js"),
  Chunk388032 = require("./388032.js"),
  Chunk475286 = require("./475286.js");
let p = new Chunk710845.Z("TwoWayLink");

function v(e) {
  let {
    platformType: a,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: m,
    onAuthToken: v,
    onError: k,
    onClose: f,
    img: b,
    title: E,
    body: T,
    redirectDestination: g
  } = e, O = s.useCallback(async () => {
    let e;
    try {
      if (e = await (0, u.H)(a, {
          twoWayLinkType: i.g.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      p.error("Error opening provider authorize page", e), k();
      return
    }
    let {
      state: t
    } = (0, x.xp)(e);
    l()(null != t, "Authorize URL state query parameter must be present"), null == n || n(t)
  }, [a, k, n]), y = s.useCallback(e => {
    let {
      callbackCode: t,
      callbackState: r
    } = e;
    if (r !== m) return void p.warn("".concat(a, " link: received mismatching callback state!"));
    v({
      callbackCode: t,
      callbackState: r
    })
  }, [a, m, v]);
  return s.useEffect(() => (d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", y), () => {
    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", y)
  }), [y]), <N.Z>{<c.xBx direction={h.Z.Direction.VERTICAL} className={j.header} separator={false}>{<c.Text className={j.stepHeader} variant={"text-xs/bold"} color={"header-secondary"}>{C.intl.format(C.t.fHz6eX, {
          number: 1,
          total: 2
        })}</c.Text>}{<div className={j.illustration}>{b}{" "}</div>}{<c.X6q className={j.title} variant={"heading-xl/extrabold"}>{E}</c.X6q>}{null != f && <c.olH className={j.closeButton} onClick={f} />}</c.xBx>}{<c.hzk className={j.body} paddingFix={false}>{<c.Text tag={"p"} variant={"text-md/normal"} color={"header-secondary"}>{T}</c.Text>}{!t && null != g && <c.Text tag={"p"} variant={"text-sm/normal"} color={"header-secondary"}>{C.intl.format(C.t.XhlYYm, {
          redirectUrl: g
        })}</c.Text>}</c.hzk>}{<c.mzw className={j.footer}><o.zx className={j.footerButton} color={t ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND} onClick={O}>{t ? C.intl.string(C.t["5911LS"]) : C.intl.string(C.t["3PatS0"])}{<c.rgF color={"currentColor"} className={j.launchIcon} size={"xs"} />}</o.zx></c.mzw>}</N.Z>
}