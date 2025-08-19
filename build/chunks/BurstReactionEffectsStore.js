/** Chunk was on 38626 **/
/** chunk id: 960020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s,
  Z: () => m
}), require("./388685.js"), require("./467055.js");
var i, l, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  s = ((l = {}).HOVER = "HOVER", l.EXTERNAL = "EXTERNAL", l.RANDOM = "RANDOM", l);
let c = {},
  u = {},
  d = {},
  h = (e, t) => {
    let n = null != t.id ? t.id : t.name;
    return "".concat(e, ":").concat(n)
  };
class p extends(i = Chunk442837.ZP.Store) {
  getReactionPickerAnimation(e, t, n) {
    return c["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
  }
  getEffectForEmojiId(e, t, n) {
    var i;
    let l = h(t, n);
    return null == (i = u[e]) ? true : i[l]
  }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
  value: "BurstReactionEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = "BurstReactionEffectsStore";
let m = new p(Chunk570140.Z, {
  BURST_REACTION_EFFECT_CLEAR: e => {
    var t;
    let {
      channelId: n,
      messageId: i,
      emoji: l
    } = e, r = h(i, l);
    null == (t = u[n]) || delete t[r]
  },
  BURST_REACTION_EFFECT_PLAY: e => {
    var t, n, i;
    let {
      channelId: l,
      messageId: r,
      emoji: o,
      key: a
    } = e, s = h(r, o);
    if (((e, t) => {
        var n;
        let i;
        switch (e) {
          case "HOVER":
            i = "HOVER";
            break;
          case "RANDOM":
            i = "RANDOM";
            break;
          default:
            i = "EXTERNAL"
        }
        let l = Object.fromEntries(Object.entries(null != (n = u[t]) ? n : {}).filter(e => {
          let [, t] = e;
          return t === i
        }));
        if (Object.keys(l).length >= 5 && "EXTERNAL" === e) {
          for (let e in l)
            if (null == d[t] || null == d[t][e]) {
              delete u[t][e], delete l[e];
              break
            }
        }
        return Object.keys(l).length
      })(a, l) >= 5) return;
    let c = null != (t = u[l]) ? t : {},
      p = (null != (n = d[l]) ? n : {})[s],
      m = c[s];
    ("HOVER" !== a || null == m) && ("HOVER" === m && "EXTERNAL" === a && null != p && ("function" == typeof p.destroy && p.destroy(), null == (i = d[l]) || delete i[s], m = true), null == m && (null != u[l] ? u[l][s] = a : u[l] = {
      [s]: a
    }))
  },
  BURST_REACTION_ANIMATION_ADD: e => {
    let {
      channelId: t,
      messageId: n,
      emoji: i,
      animation: l
    } = e, r = h(n, i);
    null == d[t] && (d[t] = {}), d[t][r] = l
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: i,
      startPosition: l
    } = e;
    c["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")] = l
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: i
    } = e;
    delete c["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")]
  }
})