/** Chunk was on 22988 **/
/** chunk id: 390583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js");
require("./674180.js");
var Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.js"),
  Chunk290348 = require("./290348.js"),
  Chunk764163 = require("./764163.js"),
  Chunk861345 = require("./861345.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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

function p(e, t) {
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

function h() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [n, h] = Chunk290348.UE(module), f = Chunk73800.useMemo(() => new Set(require.map(e => e.ref_id)), [require]);

  function b(e, t) {
    let {
      channelId: r,
      description: i,
      emojiId: l,
      emojiName: a
    } = e, s = [...n], o = {
      name: "",
      description: i,
      emoji_id: l,
      emoji_name: a,
      ref_type: u.Qs.CHANNEL,
      ref_id: r
    };
    null != t ? s[t] = o : s.push(o), h(s)
  }
  let x = (0, Chunk723047.mY)();
  return <Chunk255367.Fragment>{<Chunk861345.p benefits={require} onEdit={function(e) {
        (0, l.h7j)(i => (0, r.jsx)(c.x3, p(g({}, i), {
          guildId: t,
          omitChannelIds: f,
          initialData: n[e],
          onSave: t => b(t, e),
          onDelete: () => (function(e) {
            let t = [...n];
            t.splice(e, 1), h(t)
          })(e)
        })))
      }} onMove={function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), h(r)
      }} guildId={exports} />}{require.length > 0 && <Chunk481060.LZC size={8} />}{<Chunk861345.s onClick={function() {
        (0, Chunk481060.h7j)(e => (0, r.jsx)(c.x3, p(g({}, e), {
          guildId: t,
          omitChannelIds: f,
          onSave: e => b(e)
        })))
      }} disabled={x}>{Chunk388032.intl.string(Chunk388032.t.PLSCUl)}</Chunk861345.s>}</Chunk255367.Fragment>
}