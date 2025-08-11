/** Chunk was on 79764 **/
/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk565138 = require("./565138.js"),
  Chunk273387 = require("./273387.js"),
  Chunk16853 = require("./16853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk275017 = require("./275017.js"),
  Chunk36705 = require("./36705.js"),
  Chunk216019 = require("./216019.js");

function g(e) {
  let {
    guild: t,
    onClick: n
  } = e;
  return <o.P3F className={C.clickableGuildRow} onClick={n}>{<d.Z guild={t} size={d.Z.Sizes.MEDIUM} active={true} />}{<o.Text className={C.guildName} variant={"text-md/semibold"}>{t.name}</o.Text>}{<img alt={""} src={p} />}</o.P3F>
}

function f(e) {
  let {
    directoryChannelId: t,
    guild: n
  } = e, l = (0, r.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id)), a = s.useRef(null);
  return <div className={C.guildRow}>{<d.Z guild={n} size={d.Z.Sizes.MEDIUM} active={true} />}{<o.Text className={C.guildName} variant={"text-md/normal"}>{n.name}</o.Text>}{<m.Z entry={l} targetElementRef={a}>{e => {
        var t, n;
        return (0, i.jsx)(o.xhG, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          ref: a,
          size: "md",
          color: "currentColor"
        }, e), n = n = {
          className: C.overflowIcon
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }}</m.Z>}</div>
}

function j(e) {
  let t, {
      directoryChannelId: n,
      onClose: l,
      onGuildChosen: r,
      handleChooseCreate: d,
      directoryGuildName: u,
      availableGuilds: m,
      addedGuilds: p,
      loading: j
    } = e,
    [_, b] = s.useState(0);
  return t = j ? <div className={C.emptyContainer}><o.$jN /></div> : 0 === _ ? 0 === m.length ? <div className={C.emptyContainer}>{<img src={h} alt={""} className={C.emptyImage} />}{<o.Text className={C.emptyText} color={"header-secondary"} variant={"text-md/normal"}>{x.intl.string(x.t.liuEhY)}</o.Text>}</div> : m.map(e => <g guild={e} onClick={() => r(e)} />) : 0 === p.length ? <div className={C.emptyContainer}>{<img src={h} alt={""} className={C.emptyImage} />}{<o.Text className={C.emptyText} color={"header-secondary"} variant={"text-md/normal"}>{x.intl.string(x.t.WJLuKC)}</o.Text>}</div> : p.map(e => <f directoryChannelId={n} guild={e} />), <i.Fragment>{<o.xBx direction={c.Z.Direction.VERTICAL} className={C.header} separator={false}>{null != l && <o.olH className={C.closeButton} onClick={l} />}{<o.X6q className={C.title} variant={"heading-xl/semibold"}>{x.intl.format(x.t["9SKJdH"], {
          guildName: u
        })}</o.X6q>}{<o.Text className={C.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{x.intl.string(x.t.pYFZ9v)}</o.Text>}{<o.njP className={C.tabBar} selectedItem={_} onItemSelect={b} type={"top"} look={"brand"}>{<o.njP.Item className={a()(C.tabBarItem, {
            [C.selectedTab]: 0 === _
          })} id={0}>{x.intl.string(x.t.FTe8HR)}</o.njP.Item>}{<o.njP.Item className={a()(C.tabBarItem, {
            [C.selectedTab]: 1 === _
          })} id={1}>{x.intl.string(x.t.epOump)}</o.njP.Item>}</o.njP>}</o.xBx>}{<o.hzk className={C.guildList} paddingFix={false}>{t}</o.hzk>}{<o.mzw className={C.footer}>{<o.X6q variant={"heading-lg/semibold"} className={C.footerTitle}>{x.intl.string(x.t.pgCZRE)}</o.X6q>}{<div data-button-hoisted-classname-wrapper={true} className={C.footerButton}><o.zxk variant={"secondary"} text={x.intl.string(x.t.WqJbLi)} onClick={d} /></div>}</o.mzw>}</i.Fragment>
}