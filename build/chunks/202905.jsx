/** Chunk was on 22988 **/
/** chunk id: 202905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk580685 = require("./580685.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk944163 = require("./944163.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk548522 = require("./548522.js"),
  Chunk651390 = require("./651390.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk870751 = require("./870751.js");
let v = {
  id: "0",
  name: "",
  description: "",
  icon: "",
  customBanner: null,
  onlineCount: 0,
  memberCount: 0,
  traits: [],
  gameApplicationIds: [],
  gameActivity: {},
  visibility: Chunk580685.k.RESTRICTED,
  brandColorPrimary: null,
  tag: null,
  badge: null,
  badgeHash: null,
  badgeColorPrimary: null,
  badgeColorSecondary: null
};

function _(e) {
  let {
    pendingFields: t
  } = e, {
    guild: n,
    guildProfile: _
  } = (0, s.cj)([p.Z], () => ({
    guild: p.Z.getGuild(),
    guildProfile: p.Z.getGuildProfile()
  })), O = null == n ? true : n.id, y = (0, s.e7)([d.Z], () => d.Z.get(O)), {
    fetchGuildProfile: C
  } = (0, u.u)(O), N = (null == _ ? true : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? true : _.visibility), I = (null == _ ? true : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
  i.useEffect(() => {
    null != O && C()
  }, [O, C]);
  let E = i.useMemo(() => null == n || null == _ ? v : _, [n, _]),
    S = i.useCallback(() => {
      (null == n ? true : n.id) != null && (I ? g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC
      }) : g.Z.updateGuildProfile(n.id, {
        visibility: l.k.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? true : n.id, I]),
    T = i.useCallback(() => {
      g.Z.setSection(b.pNK.PROFILE)
    }, []);
  if (null == n) return null;
  let P = null != t ? t : null == y ? true : y.formFields;
  return <r.Fragment>{<a.X6 variant={"heading-md/semibold"} color={"header-primary"}>{x.intl.string(x.t.AHJddH)}</a.X6>}{<a.xv tag={"p"} variant={"text-sm/medium"} color={"text-secondary"} className={j.applicationBody}>{x.intl.string(x.t.Z7TCtb)}</a.xv>}{<f.c guildId={n.id} />}{<div className={j.form}>{null != P ? (0, r.jsx)(h.y, {
        guild: n,
        formFields: P
      }) : (0, r.jsx)(c.$jN, {})}</div>}{<div className={j.divider} />}{<c.hjN className={j.twoColumnContainer}>{<div className={j.column}>{<c.j7V onChange={S} value={I} hideBorder={true} disabled={N}>{x.intl.string(x.t["N/0239"])}</c.j7V>}{<a.xv variant={"text-sm/normal"} color={"text-secondary"}>{x.intl.string(x.t["3TSZYG"])}</a.xv>}{N && <a.xv variant={"text-xs/normal"} color={"text-muted"}>{x.intl.format(x.t.Bk0VOj, {
            profileLink: (e, t) => (0, r.jsx)(c.eee, {
              onClick: T,
              children: e
            }, t)
          })}</a.xv>}</div>}{<div className={j.column}><div className={j.previewWrapper}>{<div className={j.gradient} />}{<m.ZP className={j.preview} profile={E} CTAOverride={(0, r.jsx)(o.zx, {
              className: j.previewButton,
              size: o.zx.Sizes.SMALL,
              fullWidth: true,
              children: x.intl.string(x.t["7XdMW1"])
            })} disableGuildNameClick={true} />}</div></div>}</c.hjN>}</r.Fragment>
}