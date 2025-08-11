/** Chunk was on 22988 **/
/** chunk id: 450215, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk937615 = require("./937615.js"),
  Chunk817460 = require("./817460.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.js"),
  Chunk290348 = require("./290348.js"),
  Chunk857081 = require("./857081.js"),
  Chunk869269 = require("./869269.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301849 = require("./301849.js");

function C(e) {
  var t, n;
  let {
    guildId: l,
    initialEditStateId: s,
    allSubscriptionListings: C,
    priceTiers: N,
    onDeleteEditState: I,
    groupListingId: E,
    onBeforeDispatchNewListing: S,
    onAfterDispatchNewListing: T
  } = e, [P, w] = i.useState(s), R = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(P)), Z = null == R, [D, A] = i.useState(Z), k = null == R ? true : R.subscription_plans[0], L = null != (t = null == R ? true : R.published) && t, M = null != (n = null == R ? true : R.archived) && n, G = !M && !L && true !== R, U = true === R, B = (0, f.mY)(), [F] = x._T(P), [H] = x.mR(P), [z] = x.PK(P), [W] = x.d9(P, 1024), V = "" !== F ? F : O.intl.string(O.t.QWhe9P), Y = "" !== F && null != W && "" !== z && null != H && !B, K = x.rU(P), {
    loading: q,
    error: X,
    handleCreateOrUpdateFromEditState: Q
  } = x.Xo(), {
    submitting: J,
    error: $,
    publishSubscriptionListing: ee
  } = (0, p.HQ)(), et = q || J;
  return <div className={y.container}>{<div className={a()(y.header, {
        [y.headerExpanded]: D
      })}>{<div className={y.headerImageContainer}>{null == W ? (0, r.jsx)(j.Z, {
          className: y.starIcon,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          className: y.headerImage,
          src: W,
          alt: V
        })}</div>}{<div className={y.headerListingInfo}>{<d.Text variant={"text-md/medium"} color={"interactive-active"}>{V}</d.Text>}{<d.LZC size={2} />}{<div className={y.headerDescriptionContainer}>{G && <d.IGR color={(0, u.Lq)(_.Ilk.YELLOW_300)} text={O.intl.string(O.t.vosPk5)} className={y.draftBadge} />}{M && <d.IGR color={(0, u.Lq)(_.Ilk.PRIMARY_500)} text={O.intl.string(O.t.nhbtEh)} className={y.archivedBadge} />}{U && <d.IGR color={(0, u.Lq)(_.Ilk.PRIMARY_500)} text={O.intl.string(O.t.aiwXen)} className={y.unsavedBadge} />}{null != k && <d.Text color={"interactive-normal"} variant={"text-sm/normal"}>{(0, m.T4)(k.price, k.currency)}{"/"}{(0, g.JE)(k)}</d.Text>}</div>}</div>}{D ? <div className={y.headerActions}>{<d.Avr variant={"secondary"} onClick={() => {
            x.GM(P), Z ? null == I || I() : A(false)
          }} text={O.intl.string(O.t["ETE/oK"])} />}{<d.zxk variant={"primary"} onClick={() => Q({
            guildId: l,
            editStateId: P,
            groupListingId: E,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: e => {
              w(e.id), null == T || T(e)
            }
          })} disabled={!Y || !K} loading={et} text={O.intl.string(O.t.R3BPHx)} />}</div> : <d.P3F onClick={() => A(true)} aria-label={O.intl.string(O.t["2qPbmJ"])}><d.vdY size={"xs"} color={"currentColor"} className={y.pencilIcon} /></d.P3F>}</div>}{D && <b.I editStateId={P} guildId={l} groupListingId={E}><v.Z allSubscriptionListings={C} priceTiers={N} loading={et} error={null != X ? X : $} handlePublishTier={() => {
          o()(null != E, "group listing doesnt exist"), o()(null != R, "subscription listing doesnt exist"), ee({
            guildId: l,
            groupListingId: E,
            listingId: R.id
          })
        }} onDeleteEditState={I} /></b.I>}</div>
}