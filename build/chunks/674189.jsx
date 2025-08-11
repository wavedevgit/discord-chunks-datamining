/** Chunk was on 8102 **/
/** chunk id: 674189, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk560067 = require("./560067.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk313741 = require("./313741.js"),
  Chunk526079 = require("./526079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352897 = require("./352897.js");

function b(e) {
  let {
    className: t,
    guildId: i,
    onChange: l,
    isGuildIncluded: r
  } = e, {
    options: a
  } = (0, G.Z)({
    isGuildIncluded: r
  });
  return <u.VcW className={t} onChange={l} value={i} options={a} placeholder={C.intl.string(C.t.etZ9tb)} />
}

function h(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: r,
    section: G,
    subsection: C
  } = e, h = (0, d.Dt)(), {
    canCreateGuild: v,
    createGuildCta: S,
    createGuildDescription: f,
    selectGuildCta: Z,
    title: x,
    description: j,
    isGuildSupported: I
  } = (0, g.K)(r), [O, _] = l.useState(), [k, y] = l.useState(false), E = async () => {
    y(true);
    let e = await new Promise(e => {
      o.Z.openCreateGuildModal({
        onSuccess: e
      })
    });
    await new Promise(t => {
      p.Z.addChangeListener(function i() {
        null != p.Z.getGuild(e) && (p.Z.removeChangeListener(i), t())
      })
    }), c.Z.open(e, G, true, C), null == i || i()
  };
  return <u.Y0X transitionState={t} aria-labelledby={h} parentComponent={"GuildSettingsPickerModal"}>{<u.xBx className={m.modalHeader} separator={false}>{<u.X6q id={h} variant={"heading-lg/medium"}>{x}</u.X6q>}{<u.olH onClick={i} />}</u.xBx>}{<u.hzk className={m.modalContent}>{<u.Kqy direction={"vertical"} gap={8}>{<u.Text variant={"text-md/medium"}>{j}</u.Text>}{<div className={m.guildSelection}>{<div className={m.guildSelectorContainer}><b guildId={O} onChange={_} isGuildIncluded={I} /></div>}{<u.zxk variant={"primary"} text={Z} onClick={() => {
              a()(null != O, "Guild ID must not be null on click"), c.Z.open(O, G, true, C), null == i || i()
            }} disabled={null == O} />}</div>}</u.Kqy>}{v && <u.Kqy direction={"vertical"} gap={8}>{<u.Text variant={"text-md/medium"}>{f}</u.Text>}{<s.zx onClick={E} submitting={k} className={m.createGuildButton}>{S}</s.zx>}</u.Kqy>}</u.hzk>}</u.Y0X>
}