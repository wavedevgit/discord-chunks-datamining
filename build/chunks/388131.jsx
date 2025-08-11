/** Chunk was on 46786 **/
/** chunk id: 388131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  default: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk881052 = require("./881052.js"),
  Chunk911969 = require("./911969.js"),
  Chunk185413 = require("./185413.jsx"),
  Chunk600164 = require("./600164.js"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js"),
  Chunk146085 = require("./146085.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk441609 = require("./441609.js");

function y(e, t) {
  return {
    id: e,
    type: t,
    deny: m.Hn,
    allow: p.yP
  }
}

function C(e) {
  let {
    transitionState: t,
    onClose: n,
    channelId: m
  } = e, C = (0, h.Dt)(), E = (0, a.e7)([x.Z], () => x.Z.getChannel(m)), S = (0, a.e7)([g.Z], () => g.Z.getGuild(null == E ? true : E.getGuildId())), [k, v] = l.useState({}), [w, R] = l.useState(false), [f, A] = l.useState(null);
  if (null == E || null == S) return null;
  let N = async () => {
    R(true);
    try {
      await
      function(e, t) {
        let n = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === b.aC.ROLE ? y(t.id, s.BN.ROLE) : y(t.id, s.BN.MEMBER)
        });
        return (0, d.hw)(e.id, n, true)
      }(E, k), n()
    } catch (t) {
      let e = new o.Hx(t);
      R(false), A(e)
    }
  };
  return <i.Y0X transitionState={t} aria-labelledby={C} size={i.CgR.SMALL} className={_.modalRoot} parentComponent={"AddModeratorsModal"}>{<i.xBx separator={false} direction={u.Z.Direction.VERTICAL} align={u.Z.Align.CENTER} className={_.header}>{<i.X6q variant={"heading-xl/semibold"}>{j.intl.string(j.t.dMJ3Y2)}</i.X6q>}{<i.Text variant={"text-md/normal"} color={"header-secondary"} className={_.headerSubtitle}>{<i.ewx size={"xs"} color={"currentColor"} className={_.headerSubtitleIcon} />}{E.name}</i.Text>}</i.xBx>}{<c.U guild={S} channel={E} permission={p.yP} pendingAdditions={k} setPendingAdditions={v} />}{null != f ? <i.Text className={_.error} variant={"text-xs/normal"} color={"text-danger"}>{f.getAnyErrorMessage()}</i.Text> : null}{<i.mzw><i.hE2 direction={"horizontal-reverse"}>{<i.zxk variant={"primary"} text={j.intl.string(j.t.OYkgVl)} onClick={N} loading={w} />}{<i.zxk variant={"secondary"} text={j.intl.string(j.t["ETE/oK"])} onClick={n} />}</i.hE2></i.mzw>}</i.Y0X>
}