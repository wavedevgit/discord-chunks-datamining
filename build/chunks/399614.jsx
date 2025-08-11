/** Chunk was on 22988 **/
/** chunk id: 399614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710344 = require("./710344.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk922112 = require("./922112.js"),
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
let f = [],
  b = function(e) {
    let {
      guildId: t
    } = e, b = (0, l.Wu)([d.Z], () => {
      var e;
      return null != (e = d.Z.getSettings().resourceChannels) ? e : f
    }), x = i.useMemo(() => b.map(e => h(p({}, e), {
      id: e.channelId
    })), [b]), {
      handleDragStart: j,
      handleDragReset: v,
      handleDragComplete: _
    } = (0, s.Z)(x, c.lq), O = i.useCallback((e, n) => {
      let r = d.Z.getSettings();
      null != r && ((0, c.r2)(e), (0, c.oo)(t, r).then(() => {
        (0, c.mM)(t, e.channelId, n)
      }))
    }, [t]), y = i.useCallback(() => {
      if (null != t) return (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("84725").then(n.bind(n, 462499));
        return n => <e{...h(p({}, n), {
          guildId: t,
          onSave: c.r2,
          onIconUpload: O
        })} />
      })
    }, [t, O]);
    return <div className={g.editResources}>{b.map((e, n) => <u.Z guildId={t} resourceChannel={e} index={n} onDragStart={j} onDragReset={v} onDragComplete={_} />)}{b.length < o.x3 && <a.P3F className={g.addActionItem} onClick={y}>{<a.oFk size={"xs"} color={"currentColor"} />}{<a.Text variant={"text-md/normal"} color={"none"}>{m.intl.string(m.t["w9/qGR"])}</a.Text>}</a.P3F>}</div>
  }