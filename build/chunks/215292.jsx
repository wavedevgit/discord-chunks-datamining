/** Chunk was on 42483 **/
/** chunk id: 215292, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  F: () => g,
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.js"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.js"),
  Chunk78389 = require("./78389.js");

function g(t) {
  let {
    createdGuildId: n,
    hasFooter: e = true,
    onClose: g,
    onChannelPromptCompleted: x,
    isSlideReady: T
  } = t, [E, h] = l.useState(""), [I, G] = l.useState(null), [y, D] = l.useState(false), z = (0, m.Dt)(), U = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]), j = l.useRef(null);
  l.useEffect(() => {
    var t;
    T && (null == (t = j.current) || t.focus())
  }, [T]);
  let N = l.useCallback(async t => {
      if (t.preventDefault(), null == U) return;
      D(true), G(null);
      let n = p.ZP.getDefaultChannel(U.id);
      try {
        let t = _.intl.formatToPlainString(_.t.V4lepK, {
          topic: E
        });
        await d.Z.createTextChannel(U.id, E, null == n ? true : n.parent_id, t), x()
      } catch (t) {
        G(new c.yZ(t))
      }
      D(false)
    }, [U, E, x]),
    f = <i.Fragment>{<r.zxk variant={"primary"} text={_.intl.string(_.t.i4jeWV)} onClick={N} disabled={0 === E.length} loading={y} />}{<s.zx className={L.skipButton} look={s.zx.Looks.BLANK} size={s.zx.Sizes.MIN} onClick={x}>{_.intl.string(_.t["5WxrcX"])}</s.zx>}</i.Fragment>;
  return {
    content: <i.Fragment>{<r.xBx className={L.header} direction={o.Z.Direction.VERTICAL} separator={false}>{null != U && <C.Z guild={U} />}{<r.Text className={L.guildName} color={"header-primary"} variant={"text-sm/semibold"}>{null == U ? true : U.name}</r.Text>}{<r.X6q className={L.title} variant={"heading-sm/semibold"}>{_.intl.string(_.t["8VRa7e"])}</r.X6q>}{<r.Text className={L.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{_.intl.string(_.t["+855Pj"])}</r.Text>}{null != g && <r.olH className={L.closeButton} onClick={g} />}</r.xBx>}{<r.hzk className={L.channelPrompt}>{<form onSubmit={N}><r.xJW title={_.intl.string(_.t.bY20tb)} tag={"label"} htmlFor={z} error={null == I ? true : I.getFieldMessage("name")}><r.oil type={"text"} value={E} id={z} onChange={h} placeholder={_.intl.string(_.t.xGOYAw)} inputRef={j} /></r.xJW></form>}{null != I && 0 === Object.keys(I.fields).length && <r.Text variant={"text-xs/normal"} color={"text-danger"}>{I.message}</r.Text>}</r.hzk>}{e && <r.mzw>{f}</r.mzw>}</i.Fragment>,
    footer: f
  }
}

function x(t) {
  let {
    content: n
  } = g(t);
  return n
}