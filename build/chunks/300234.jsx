/** Chunk was on 91315 **/
/** chunk id: 300234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk493773 = require("./493773.js"),
  Chunk884338 = require("./884338.js"),
  Chunk592125 = require("./592125.js"),
  Chunk720202 = require("./720202.js"),
  Chunk594174 = require("./594174.js"),
  Chunk260483 = require("./260483.js"),
  Chunk314208 = require("./314208.js"),
  Chunk124368 = require("./124368.js"),
  Chunk915298 = require("./915298.js");
let v = Chunk73800.memo(function(e) {
  let {
    threadId: t,
    goToThread: l,
    showChannelName: i
  } = e, c = (0, a.e7)([d.Z], () => d.Z.getChannel(t)), u = (0, a.e7)([d.Z], () => d.Z.getChannel(c.parent_id));
  return <s.P3F className={j.container} onClick={e => l(c, e.shiftKey)} onContextMenu={e => (0, o.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("46154"), n.e("48334")]).then(n.bind(n, 422200));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), l = l = {
          channel: c
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })}>{<div className={j.left}>{<s.X6q className={j.threadNameLine} variant={"heading-md/semibold"}>{<span className={j.threadName}>{c.name}</span>}{i && null != u ? <span className={j.parentName}>{"#".concat(u.name)}</span> : null}</s.X6q>}{(0, m.Z)(c)}</div>}{<x channel={c} />}</s.P3F>
});

function x(e) {
  let {
    channel: t
  } = e, n = (0, a.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getMemberIdsPreview(t.id)) ? e : []
  }), l = (0, a.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getMemberCount(t.id)) ? e : 0
  }), s = (0, a.Wu)([h.default], () => n.map(e => h.default.getUser(e)));
  return ((0, i.ZP)(() => {
    n.filter((e, t) => null == s[t]).forEach(e => {
      u.Z.requestMember(t.guild_id, e)
    })
  }), 0 === n.length) ? null : <c.ZP className={j.facepile} showDefaultAvatarsForNullUsers={true} guildId={t.guild_id} users={s} count={l} max={f.yX} />
}