/** Chunk was on 60827 **/
/** chunk id: 324239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk809206 = require("./809206.js"),
  Chunk600164 = require("./600164.js"),
  Chunk390885 = require("./390885.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk630724 = require("./630724.js"),
  Chunk388032 = require("./388032.js"),
  Chunk327342 = require("./327342.js");

function S(e) {
  let {
    email: t,
    setEmail: n,
    claimRequired: m,
    onSuccess: f,
    onClose: d
  } = e, [S, N] = o.useState(), [x, y] = o.useState(""), [C, b] = o.useState(""), [v, O] = o.useState(false);
  o.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT), []);
  let j = async e => {
    e.preventDefault(), O(true), N(""), b("");
    try {
      await (0, c.S2)({
        email: t,
        password: x
      }), O(false), f()
    } catch (e) {
      var n, r;
      (null == e || null == (n = e.body) ? true : n.email) && N(e.body.email), (null == e || null == (r = e.body) ? true : r.password) && b(e.body.password), O(false)
    }
  };
  return <div>{<s.xBx className={g.formHeader} direction={a.Z.Direction.VERTICAL} separator={false}>{<div className={g.formImage} />}{<s.X6q className={g.formTitle} variant={"heading-xl/semibold"}>{_.intl.string(_.t.uQShv7)}</s.X6q>}{<s.Text className={g.formBody} variant={"text-md/normal"} color={"header-secondary"}>{m ? _.intl.string(_.t.sW28gY) : _.intl.string(_.t["gP/vPT"])}</s.Text>}{<s.olH className={g.closeButton} onClick={d} />}</s.xBx>}{<s.hzk><form className={g.formContent} onSubmit={j}>{<s.xJW title={_.intl.string(_.t.dI4d4e)} className={g.formItem}><s.oil value={t} error={S} onChange={e => n(e)} autoFocus={true} /></s.xJW>}{<s.xJW title={_.intl.string(_.t["CIGa+/"])} className={g.formItem}><s.oil type={"password"} value={x} error={C} onChange={e => y(e)} /></s.xJW>}{<l.zx type={"submit"} size={l.zx.Sizes.LARGE} fullWidth={true} submitting={v} disabled={0 === t.length || 0 === x.length}>{_.intl.string(_.t.fiNVio)}</l.zx>}{m && <l.zx className={g.logoutButton} color={l.zx.Colors.PRIMARY} look={l.zx.Looks.LINK} size={l.zx.Sizes.NONE} onClick={() => {
            i.Z.logout("claim_account_modal"), d()
          }}>{_.intl.string(_.t["2jxGen"])}</l.zx>}</form></s.hzk>}</div>
}

function N(e) {
  let {
    email: t,
    claimRequired: n,
    onClose: i
  } = e, c = n ? _.t.D7trIC : _.t.JNWX7O;
  return o.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT_SUCCESS), []), <div>{<s.hzk className={g.successContent}>{!n && <s.olH className={g.closeButton} onClick={i} />}{<div className={g.successImage} />}{<s.Text className={g.successTitle} variant={"text-lg/semibold"}>{_.intl.format(c, {
          email: t
        })}</s.Text>}{<s.Text className={g.successPromotion} variant={"text-md/normal"}>{_.intl.string(_.t.eXqM2d)}</s.Text>}</s.hzk>}{n ? <s.mzw direction={a.Z.Direction.VERTICAL}><l.zx size={l.zx.Sizes.LARGE} onClick={i}>{_.intl.string(_.t.BddRzc)}</l.zx></s.mzw> : <s.mzw direction={a.Z.Direction.VERTICAL}><l.zx color={l.zx.Colors.BRAND} size={l.zx.Sizes.LARGE} onClick={function() {
          window.open((0, f.t3)(), "_blank"), m.default.track(d.rMx.DOWNLOAD_APP, {
            platform: (0, f.DW)(),
            ptb: false,
            released: true,
            has_e_mail: true,
            referring_location: "Claim Modal",
            qr_code: false
          })
        }}>{_.intl.string(_.t.ygArIS)}</l.zx></s.mzw>}</div>
}

function x(e) {
  let {
    onClose: t,
    transitionState: n,
    claimRequired: l = false
  } = e, [i, c] = o.useState(""), [a, u] = o.useState(false);
  return a ? <s.Y0X transitionState={n} parentComponent={"ClaimAccountModal"}><N email={i} claimRequired={l} onClose={t} /></s.Y0X> : <s.Y0X transitionState={n} parentComponent={"ClaimAccountModal"}><S email={i} setEmail={c} claimRequired={l} onSuccess={() => u(true)} onClose={t} /></s.Y0X>
}