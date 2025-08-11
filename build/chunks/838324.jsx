/** Chunk was on 22988 **/
/** chunk id: 838324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk889369 = require("./889369.js"),
  Chunk974513 = require("./974513.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk974283 = require("./974283.js");

function p(e) {
  let {
    guildId: t,
    scrollToQuestions: n
  } = e, p = (0, i.e7)([s.Z], () => s.Z.isAdvancedMode(t)), h = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [f, b] = (0, o.VF)(t, h), [x, j] = (0, d.OA)(t, [...h]), v = p ? j.length : b.length, _ = p ? x.length : f.length, O = v < u.md, y = _ >= u.X, C = j.length - b.length, N = <a.owK size={"sm"} color={l.Z.unsafe_rawColors.BRAND_500.css} secondaryColor={l.Z.unsafe_rawColors.WHITE_100.css} className={g.icon} />, I = <a.k$p size={"sm"} className={g.icon} color={l.Z.colors.WHITE.css} secondaryColor={l.Z.colors.BACKGROUND_ACCENT.css} />, E = [Math.min(u.X, _) / u.md * 100, Math.min(u.md, v) / u.md * 100], S = !O && y ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css, l.Z.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
  return <div className={g.container}>{<div className={g.header}>{<a.Text variant={"text-xs/bold"} color={"text-brand"}>{m.intl.format(m.t.kvroKC, {
          count: _
        })}</a.Text>}{<a.Text variant={"text-xs/bold"} color={"text-muted"}>{m.intl.format(m.t["0MjxJy"], {
          count: v
        })}</a.Text>}</div>}{<a.yGy foregroundColors={S} percents={E} size={a.yGy.Sizes.XSMALL} />}{<div className={g.requiredItem}>{O ? I : N}{<a.Text variant={"text-xs/normal"} color={"text-muted"}>{m.intl.format(m.t.k0COZW, {
          count: u.md
        })}</a.Text>}</div>}{<div className={g.requiredItem}>{y ? N : I}{<a.Text variant={"text-xs/normal"} color={"text-muted"}>{m.intl.format(m.t.PwXgS0, {
          count: u.X
        })}</a.Text>}</div>}{p && <r.Fragment>{<div className={g.requiredItem}>{<a.d3s size={"sm"} color={l.Z.colors.WHITE.css} secondaryColor={l.Z.colors.BACKGROUND_ACCENT.css} className={g.icon} />}{<a.Text variant={"text-xs/normal"} color={"text-muted"}>{m.intl.string(m.t.AyvkOD)}</a.Text>}</div>}{<div className={g.requiredItem}>{<a.d3s size={"sm"} color={l.Z.colors.WHITE.css} secondaryColor={l.Z.colors.BACKGROUND_ACCENT.css} className={g.icon} />}{<a.Text variant={"text-xs/normal"} color={"text-muted"}>{m.intl.format(m.t["8Geut7"], {
            count: C,
            prejoinHook: e => (0, r.jsx)(a.eee, {
              onClick: n,
              children: (0, r.jsx)(a.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-link",
                children: e
              })
            })
          })}</a.Text>}</div>}</r.Fragment>}</div>
}