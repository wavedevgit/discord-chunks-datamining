/** Chunk was on 77370 **/
/** chunk id: 83950, original params: a,t,e (module,exports,require) **/
require.d(exports, {
  default: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk300284 = require("./300284.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk777134 = require("./777134.js"),
  Chunk749423 = require("./749423.js");

function k() {
  let a = (0, Chunk768581.NZ)({
      avatarDecoration: {
        asset: "a_49c479e15533fb4c02eb320c9c137433"
      },
      canAnimate: false,
      size: (0, Chunk1585.y9)(Chunk481060.EFr.SIZE_120)
    }),
    t = (0, Chunk768581.NZ)({
      avatarDecoration: {
        asset: "a_c3cffc19e9784f7d0b005eecdf1b566e"
      },
      canAnimate: false,
      size: (0, Chunk1585.y9)(Chunk481060.EFr.SIZE_120)
    }),
    e = (0, Chunk768581.NZ)({
      avatarDecoration: {
        asset: "a_d72066b8cecbadd9fc951913ebcc384f"
      },
      canAnimate: false,
      size: (0, Chunk1585.y9)(Chunk481060.EFr.SIZE_120)
    });
  return <div className={Chunk777134.avatarBackground}>{<Chunk481060.qEK size={Chunk481060.EFr.SIZE_120} src={Chunk749423} avatarDecoration={module} className={Chunk777134.leftAvatar} aria-hidden={true} />}{<Chunk481060.qEK size={Chunk481060.EFr.SIZE_120} src={Chunk749423} avatarDecoration={exports} className={Chunk777134.centerAvatar} aria-hidden={true} />}{<Chunk481060.qEK size={Chunk481060.EFr.SIZE_120} src={Chunk749423} avatarDecoration={require} className={Chunk777134.rightAvatar} aria-hidden={true} />}</div>
}

function A(a) {
  let {
    transitionState: t,
    onClose: e,
    skuId: f
  } = a, L = (0, E.Dt)(), {
    analyticsLocations: A
  } = (0, _.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL), I = (0, x.Z)({
    analyticsLocations: A
  }), C = n.useRef(null);
  return n.useEffect(() => ((0, o.Mn)({
    avatarDecoration: null
  }), () => {
    v.default.track(p.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
      reason: C.current,
      sku_id: f
    })
  }), [f]), (0, d.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
    properties: {
      location_stack: A,
      sku_id: f
    }
  }), <c.Y0X transitionState={t} aria-labelledby={L} className={b.container} parentComponent={"CollectiblesExpiryModal"}>{<k />}{<c.olH onClick={() => {
        C.current = "tap_close_button", e()
      }} className={b.closeButton} />}{<c.hzk className={b.content}>{<c.X6q variant={"heading-xl/bold"} className={b.title}>{h.intl.string(h.t.xz81o6)}</c.X6q>}{<c.Text variant={"text-sm/medium"} className={b.body}>{h.intl.string(h.t.Vrbnnp)}</c.Text>}</c.hzk>}{<c.mzw className={b.footer}>{<c.zxk variant={"secondary"} text={h.intl.string(h.t["x8T+k5"])} onClick={() => {
          C.current = "change_avatar_decoration", e(), (0, i.xf)(), I(), (0, u.ps)({
            analyticsLocations: A
          })
        }} />}{<c.zxk variant={"primary"} text={h.intl.string(h.t.fmqMER)} onClick={() => {
          C.current = "go_to_shop", e(), (0, m.mK)({
            analyticsLocations: A,
            analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
            openInLayer: false
          })
        }} />}</c.mzw>}</c.Y0X>
}