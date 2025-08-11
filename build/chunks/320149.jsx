/** Chunk was on 1272 **/
/** chunk id: 320149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk665149 = require("./665149.js"),
  Chunk910611 = require("./910611.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk718538 = require("./718538.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk560460 = require("./560460.js"),
  Chunk46467 = require("./46467.js");

function C(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, C = (0, O.ZP)(t), S = (0, f.K)(), N = (0, f.V)(), T = (0, l.e7)([d.Z], () => d.Z.isMessageRequest(t.id)), P = (0, l.e7)([p.Z], () => p.Z.isSpam(t.id)), j = (0, g.V)(t.id, t.getRecipientId()), x = i.useCallback(() => {
    b.Z.closeChannelSidebar(_.uZ), T && S && (0, m.Kh)(t.id), P && N && (0, m.Kh)(t.id)
  }, [t.id, P, N, T, S]), A = i.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(y.intl.string(y.t.pIQ3h4), o.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: Z
  } = (0, h.m)({
    onAcceptSuccess: x,
    onError: A
  });
  if (null == t || !t.isDM()) return null;
  let w = [<c.ZP.Icon icon={o.Dio} tooltip={y.intl.string(y.t.cpT0Cg)} onClick={() => b.Z.closeChannelSidebar(n)} />];
  return <r.Fragment>{<c.ZP toolbar={w} aria-label={y.intl.string(y.t.BIYAqa)}>{(0, u.ud)({
        channel: t,
        channelName: C,
        inSidebar: true
      })}</c.ZP>}{P && <div className={I.hamBanner}>{<o.Text className={I.__invalid_hamBannerText} variant={"text-sm/normal"}>{y.intl.string(y.t.XVOKgo)}</o.Text>}{<a.zx className={I.hamBannerButton} size={a.Ph.SMALL} onClick={() => Z(t, j)}>{y.intl.string(y.t.koqL3d)}</a.zx>}</div>}{<div className={v.chat}><E.Z channel={t} guild={null} chatInputType={s.Ie.SIDEBAR} /></div>}</r.Fragment>
}