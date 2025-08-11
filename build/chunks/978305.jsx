/** Chunk was on 90688 **/
/** chunk id: 978305, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22419 = require("./22419.js"),
  Chunk20493 = require("./20493.js");
let _ = e => {
  let {
    transitionState: r,
    onClose: t
  } = e, a = (0, m.Z)(), [i, _] = o.useState(false), {
    getLinkCode: j,
    isGetLinkCodeLoading: O
  } = (0, C.G)({}), q = (0, p.rW)(), N = (0, p.gU)(), z = o.useRef(N);
  l()(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let k = () => {
    _(e => (f.default.track(b.rMx.FAMILY_CENTER_ACTION, {
      action: i ? x.YC.HideQRCode : x.YC.RevealQRCode
    }), !e)), i || setTimeout(() => {
      t()
    }, x.f2)
  };
  (0, d.ZP)(() => {
    j()
  }), o.useEffect(() => {
    N > z.current && t()
  }, [z, N, t]);
  let S = i && !O && null != q;
  return <c.Y0X data-migration-pending={true} className={y.modalRoot} transitionState={r} parentComponent={"FamilyCenterQRCodeModal"}>{<c.qXd className={y.notice} color={c.DM8.WARNING}>{<c.d3s size={"sm"} color={"currentColor"} />}{h.intl.string(g.default.iHYMAw)}</c.qXd>}{<c.hzk data-migration-pending={true} className={y.content}>{<c.Text className={v.marginBottom8} variant={"text-lg/bold"} color={"header-primary"}>{h.intl.string(g.default.AVTZaG)}</c.Text>}{<c.Text className={v.marginBottom20} variant={"text-sm/normal"} color={"header-secondary"}>{h.intl.format(g.default.LyyCsL, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })}</c.Text>}{<div className={y.qrCodeContainer}><c.P3F className={s()(y.qrCodeObscure, {
            [y.visible]: S
          })} onClick={k}><u.c2 size={272} text={S ? q : x.vH} overlaySize={u.cK.SIZE_60} className={y.qrCodeOverlay} /></c.P3F></div>}{<c.Text className={y.reminder} variant={"text-xs/semibold"} color={"header-secondary"}>{h.intl.string(g.default.goDyoa)}</c.Text>}{<div className={s()(y.buttonContainer, v.marginTop20)}><c.hE2 fullWidth={true}>{<c.zxk variant={"secondary"} text={h.intl.string(h.t.cpT0Cg)} onClick={t} />}{<c.zxk variant={"primary"} text={i ? h.intl.string(g.default.wg2xwc) : h.intl.string(g.default["10dX6e"])} onClick={k} loading={i && O} />}</c.hE2></div>}</c.hzk>}</c.Y0X>
}