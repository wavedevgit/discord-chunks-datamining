/** Chunk was on 34779 **/
/** chunk id: 40153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OG: () => j,
  ZP: () => C,
  Zu: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk539202 = require("./539202.js"),
  Chunk749210 = require("./749210.js"),
  Chunk626135 = require("./626135.js"),
  Chunk727258 = require("./727258.js"),
  Chunk662146 = require("./662146.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk217873 = require("./217873.js");

function b(e) {
  let t = i.useRef(null),
    n = e.map(e => e[0]);
  return i.useLayoutEffect(() => {
    let n = requestAnimationFrame(() => {
      let n = t.current;
      if (null != n)
        for (let [t, r] of e) t ? n.classList.add(r) : n.classList.remove(r)
    });
    return () => cancelAnimationFrame(n)
  }, n), t
}

function O(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return a()(t.type !== h.eD.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!r || e.type !== h.eD.FOLDER || t.type !== h.eD.FOLDER) && (e.type !== h.eD.FOLDER || null == t.parentId),
    drop(e) {
      let {
        nodeId: i
      } = e;
      r && t.type !== h.eD.FOLDER && d.default.track(f.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(i, t.id, n, r)
    },
    collect: e => ({
      canDrop: e.canDrop(),
      isOver: e.isOver()
    })
  }
}

function _(e) {
  let {
    name: t,
    targetNode: n,
    combine: l,
    below: o
  } = e, s = i.useMemo(() => O([h.eD.GUILD, h.eD.FOLDER], n, o, l), [n, o, l]), [{
    canDrop: a,
    isOver: u
  }, d] = (0, c.L)(s), p = b([
    [a, m.autoPointerEvents],
    [u, m.dragOver]
  ]);
  return <div ref={e => {
      p.current = e, d(e)
    }} data-dnd-name={g.intl.formatToPlainString(g.t.A5aDw8, {
      itemName: t
    })} className={m.target} />
}

function y(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: l
  } = e, [{
    canDrop: s,
    isOver: a
  }, u] = (0, c.L)(() => O([h.eD.GUILD], n, true, true));
  i.useEffect(() => {
    null == l || l(a)
  }, [l, a]);
  let d = b([
    [s, m.autoPointerEvents],
    [a, m.dragOver]
  ]);
  return <p.Z text={t} shouldShow={a} forceOpen={a} disableWrapper={true} tooltipClass={m.centerTargetTooltip}><div ref={e => {
        d.current = e, u(e)
      }} data-dnd-name={g.intl.formatToPlainString(g.t.qiQ0QE, {
        itemName: t
      })} className={o()(m.centerTarget, {})} /></p.Z>
}
let C = Chunk73800.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: i = false,
    below: l = false,
    onDragOverChanged: o
  } = e, s = !i && null == n.parentId;
  return <div className={m.wrapper} aria-hidden={true}>{<_ name={t} targetNode={n} below={l} />}{s ? <y name={t} targetNode={n} onDragOverChanged={o} /> : null}</div>
});

function v(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: i,
    isOver: l
  }, o] = (0, c.L)(() => O([h.eD.GUILD], n, true, true)), s = b([
    [l, m.wrapperOver]
  ]), a = b([
    [l, m.dragOver],
    [i, m.autoPointerEvents]
  ]);
  return <div ref={s} className={m.folderEndWrapper} aria-hidden={true}><div className={m.folderTarget}><div ref={e => {
          a.current = e, o(e)
        }} aria-label={"At end of ".concat(t)} className={m.target} /></div></div>
}

function j(e) {
  let {
    children: t
  } = e, [, n] = (0, c.L)({
    accept: []
  });
  return <div ref={e => {
      n(e)
    }}>{t}</div>
}