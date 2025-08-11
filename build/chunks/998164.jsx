/** Chunk was on 22988 **/
/** chunk id: 998164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710344 = require("./710344.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk430677 = require("./430677.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773100 = require("./773100.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = [];

function b() {
  return <div className={Chunk773100.actionItemContainer}><div className={Chunk773100.actionItem}>{<div className={Chunk773100.actionItemEmojiWrapper}><Chunk481060.snC size={"custom"} color={"currentColor"} height={20} width={22} /></div>}{<div className={Chunk773100.actionItemText}><Chunk481060.Text variant={"text-md/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t["K/i3iY"])}</Chunk481060.Text></div>}</div></div>
}

function x(e) {
  let {
    guildId: t,
    onAddAction: l
  } = e, s = i.useCallback(() => {
    if (null != t) return (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("7590").then(n.bind(n, 380716));
      return n => <e{...h(p({}, n), {
        guildId: t,
        onSave: l
      })} />
    })
  }, [t, l]);
  return <a.P3F className={g.addActionItem} onClick={s}>{<a.oFk size={"xs"} color={"currentColor"} />}{<a.Text variant={"text-md/normal"} color={"none"}>{m.intl.string(m.t.qce3EB)}</a.Text>}</a.P3F>
}
let j = function(e) {
  let {
    guildId: t
  } = e, n = (0, l.Wu)([d.Z], () => {
    var e;
    return null != (e = d.Z.getSettings().newMemberActions) ? e : f
  }), a = i.useCallback((e, n) => {
    (0, c.vR)(e);
    let r = d.Z.getSettings();
    if (null == r) return;
    let {
      channelId: i
    } = e;
    (0, c.oo)(t, r, true).then(() => {
      null != n && (0, c.ad)(t, i, n, true)
    })
  }, [t]), m = i.useCallback((e, r, i, l) => {
    var a;
    let s = null == (a = n[e]) ? true : a.channelId;
    if (null == s) return;
    let o = d.Z.getSettings();
    null != o && ((0, c.el)(s, r), (0, c.oo)(t, o, true).then(() => {
      (0, c.ad)(t, s, i, l)
    }))
  }, [n, t]), j = i.useCallback(e => {
    var r;
    let i = null == (r = n[e]) ? true : r.channelId;
    if (null == i) return;
    (0, c.Hr)(i);
    let l = d.Z.getSettings();
    (0, c.oo)(t, l, true)
  }, [n, t]), v = n.map(e => h(p({}, e), {
    id: e.channelId
  })), _ = i.useCallback(e => {
    (0, c.hS)(e);
    let n = d.Z.getSettings();
    null != n && (0, c.oo)(t, n, true)
  }, [t]), {
    handleDragStart: O,
    handleDragReset: y,
    handleDragComplete: C
  } = (0, s.Z)(v, _);
  return <div className={g.section}>{n.map((e, n) => <u.Z guildId={t} action={e} actionIndex={n} onChange={m} onDelete={j} onDragStart={O} onDragReset={y} onDragComplete={C} />)}{<b />}{n.length < o.O9 && <x guildId={t} onAddAction={a} />}</div>
}