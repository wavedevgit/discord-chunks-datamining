/** Chunk was on 43889 **/
/** chunk id: 279875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GuildSubscriptionSelectionModal: () => m
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.js"),
  Chunk430824 = require("./430824.js"),
  Chunk270144 = require("./270144.js"),
  Chunk689011 = require("./689011.js"),
  Chunk388032 = require("./388032.js"),
  Chunk251216 = require("./251216.js");

function m(e) {
  let {
    transitionState: t,
    onClose: n,
    sku: m,
    onSelect: p,
    currentGuildId: h
  } = e, [j, _] = s.useState(), {
    guilds: b,
    isFetching: g
  } = (0, d.CR)(m.applicationId, m.id, true), f = s.useMemo(() => {
    if (!g && null != h) return b.findIndex(e => {
      let {
        id: t
      } = e;
      return t === h
    }) >= 0
  }, [h, b, g]);
  s.useLayoutEffect(() => {
    f && _(h)
  }, [h, f]);
  let v = s.useMemo(() => {
    let e = [];
    for (let t of b) {
      let n = {
        value: t.id,
        label: t.name
      };
      f && t.id === h ? e.unshift(n) : e.push(n)
    }
    return e
  }, [h, b, f]);
  return <r.Y0X transitionState={t} size={r.CgR.SMALL} className={x.modal} parentComponent={"GuildSubscriptionSelectionModal"}>{<c.t onClose={n} />}{<r.hzk className={x.content}>{<r.Text variant={"text-sm/medium"} className={x.breadCrumb}>{u.intl.string(u.t["xgtI/P"])}</r.Text>}{<div className={x.selectionBody}>{<r.Text variant={"text-md/medium"}>{u.intl.string(u.t.rAXXxM)}</r.Text>}{<r.Text variant={"eyebrow"}>{u.intl.string(u.t["5qyruL"])}</r.Text>}{g ? <r.$jN type={r.$jN.Type.PULSING_ELLIPSIS} className={x.spinner} /> : v.length > 0 ? <r.VcW options={v} value={j} onChange={_} renderOptionPrefix={e => {
            let t = null == e ? true : e.value,
              n = null != t ? o.Z.getGuild(t) : null;
            return null == n ? null : (0, i.jsx)(a.Z, {
              guild: n,
              size: a.Z.Sizes.MINI
            })
          }} renderOptionLabel={e => {
            let {
              label: t,
              value: n
            } = e;
            return (0, i.jsxs)("div", {
              children: [(0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                children: t
              }), n === h && (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: u.intl.string(u.t.RjtuAA)
              })]
            })
          }} /> : <r.Wn messageType={r.QYI.WARNING}><r.Text variant={"text-sm/normal"}>{u.intl.string(u.t.M2TbbG)}</r.Text></r.Wn>}</div>}</r.hzk>}{<r.mzw className={x.footer}>{<l.zx look={l.zx.Looks.BLANK} size={l.zx.Sizes.MIN} className={x.closeBtn} onClick={n}>{u.intl.string(u.t.cpT0Cg)}</l.zx>}{<r.zxk variant={"primary"} size={"sm"} text={u.intl.string(u.t["cY+Ooa"])} disabled={null == j} onClick={function() {
          null != j && (p(j), n())
        }} />}</r.mzw>}</r.Y0X>
}