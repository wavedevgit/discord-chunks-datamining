/** Chunk was on 75708 **/
/** chunk id: 450468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk881052 = require("./881052.js"),
  Chunk128069 = require("./128069.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk600164 = require("./600164.js"),
  Chunk431369 = require("./431369.js"),
  Chunk210887 = require("./210887.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk485312 = require("./485312.js");
async function v(e, t, n, i) {
  let r = (0, E.MY)(e, t);
  await (0, m.bG)(n), await (0, u.Mg)(e, {
    items: r
  }, {
    amount: 0,
    currency: e.currency
  }, (0, E.UX)(r, e.currency, e.paymentSourceId), i)
}

function S(e) {
  let {
    premiumSubscription: t,
    guildBoostSlotId: n,
    onNext: s,
    onClose: u
  } = e, [m, h] = r.useState(false), j = (0, l.e7)([_.Z], () => _.Z.theme), {
    analyticsLocations: S
  } = (0, f.ZP)(), [T, I] = r.useState(null);
  return <i.Fragment>{<d.xBx separator={false}>{<d.vwX tag={d.RB0.H4}>{C.intl.string(C.t.l52ih4)}</d.vwX>}{<d.olH onClick={u} />}</d.xBx>}{<d.hzk className={O.body}>{null !== T && <d.kzN className={O.error}>{T}</d.kzN>}{C.intl.string(C.t.DY2CXl)}</d.hzk>}{<d.mzw justify={b.Z.Justify.START}>{<d.zxk variant={"primary"} text={C.intl.string(C.t.etZP4O)} onClick={async () => {
          try {
            h(true), I(null);
            let e = (0, x.g)(t, 1);
            a()((0, E.uV)(e) <= (0, E.uV)(t.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await v(t, e, n, S), s()
          } catch (t) {
            let e = t instanceof p.HF ? t : new p.HF(t, t.code);
            I(C.intl.string(e.code === g.SM.BILLING_PAUSE_INVALID_UPDATE ? C.t.dq4vq6 : C.t["5mlOCQ"])), h(false)
          }
        }} loading={m} />}{<c.zx look={c.zx.Looks.LINK} color={(0, o.ap)(j) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE} onClick={u} disabled={m}>{C.intl.string(C.t.oEAioK)}</c.zx>}</d.mzw>}</i.Fragment>
}

function T(e) {
  let {
    onClose: t
  } = e;
  return <i.Fragment>{<d.xBx separator={false}>{<d.vwX tag={d.RB0.H4}>{C.intl.string(C.t.H9QUAA)}</d.vwX>}{<d.olH onClick={t} />}</d.xBx>}{<d.hzk className={O.body}>{<div className={O.uncancelImage} />}{<div>{C.intl.string(C.t.G27uHR)}</div>}</d.hzk>}{<d.mzw><d.zxk variant={"primary"} text={C.intl.string(C.t.BddRzc)} onClick={t} /></d.mzw>}</i.Fragment>
}

function I(e) {
  let t, {
      guildBoostSlotId: n,
      transitionState: s,
      onClose: a
    } = e,
    {
      analyticsLocations: o
    } = (0, f.ZP)(h.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  r.useEffect(() => {
    j.Z.hasFetchedSubscriptions() || (0, u.jg)()
  }, []);
  let c = (0, l.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()),
    [m, p] = r.useState(1);
  if (null == c) t = <d.hzk><d.$jN /></d.hzk>;
  else switch (m) {
    case 1:
      t = <S premiumSubscription={c} guildBoostSlotId={n} onNext={() => p(2)} onClose={a} />;
      break;
    case 2:
      t = <T onClose={a} />;
      break;
    default:
      throw Error("Unexpected step: ".concat(m))
  }
  return <f.Gt value={o}><d.Y0X transitionState={s} parentComponent={"GuildBoostSlotUncancellationModal"}>{t}</d.Y0X></f.Gt>
}