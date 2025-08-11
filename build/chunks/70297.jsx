/** Chunk was on 58121 **/
/** chunk id: 70297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C,
  q: () => _
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk434404 = require("./434404.js"),
  Chunk707076 = require("./707076.js"),
  Chunk398758 = require("./398758.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk402895 = require("./402895.js"),
  Chunk697611 = require("./697611.js");

function _(e) {
  return (0, m.te)(e) ? 250 : 152
}

function C(e) {
  let {
    guild: t
  } = e, n = (0, m.te)(t.id), r = (0, s.Nj)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), _ = n && !r ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
  (0, c.kk)(_);
  let C = n ? <l.Fragment>{<div>{<o.X6q className={g.heading} color={"always-white"} variant={"heading-lg/semibold"}>{f.intl.string(f.t.AalzkJ)}</o.X6q>}{<o.Text className={g.description} variant={"text-md/normal"} color={"always-white"}>{f.intl.string(f.t.CXh95e)}</o.Text>}{<o.zxk variant={"overlay-primary"} onClick={() => {
          d.Z.open(t.id, h.pNK.ONBOARDING), (0, s.Q3)(_, {
            dismissAction: p.L.PRIMARY
          })
        }} text={f.intl.string(f.t["+OtO4e"])} />}</div>}{<u.j isTooltip={true} />}</l.Fragment> : <div className={g.nuxContent}>{<img width={180} className={g.image} src={x} alt={""} aria-hidden={true} />}{<div>{<o.X6q className={g.heading} variant={"heading-lg/semibold"} color={"header-primary"}>{f.intl.string(f.t.utqWEB)}</o.X6q>}{<o.Text variant={"text-md/normal"} color={"header-secondary"}>{f.intl.string(f.t["+9etcH"])}</o.Text>}{<o.Text className={g.tip} variant={"text-md/normal"} color={"header-secondary"}>{f.intl.format(f.t.Z0axjo, {})}</o.Text>}</div>}</div>;
  return <div className={i()(g.container, {
      [g.adminUpsell]: n
    })}>{<o.P3F className={g.closeButton} onClick={() => {
        (0, s.Q3)(_, {
          dismissAction: p.L.DISMISS
        })
      }}><o.Dio size={"md"} color={"currentColor"} /></o.P3F>}{C}</div>
}