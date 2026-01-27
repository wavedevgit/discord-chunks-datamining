/** Chunk was on 7034 **/
/** chunk id: 900210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
  W: () => s
}), require("./896048.js"), require("./446912.js");
var i, l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  s = ((l = {}).HOVER = "HOVER", l.EXTERNAL = "EXTERNAL", l.RANDOM = "RANDOM", l);
let u = {},
  c = {},
  d = {},
  p = (e, t) => {
    let n = null != t.id ? t.id : t.name;
    return "".concat(e, ":").concat(n)
  };
class h extends(i = Chunk311907.Ay.Store) {
  getReactionPickerAnimation(e, t, n) {
    return u["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
  }
  getEffectForEmojiId(e, t, n) {
    var i;
    let l = p(t, n);
    return null == (i = c[e]) ? true : i[l]
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "BurstReactionEffectsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "BurstReactionEffectsStore";
let m = new h(Chunk73153.h, {
  BURST_REACTION_EFFECT_CLEAR: e => {
    var t;
    let {
      channelId: n,
      messageId: i,
      emoji: l
    } = e, r = p(i, l);
    null == (t = c[n]) || delete t[r]
  },
  BURST_REACTION_EFFECT_PLAY: e => {
    var t, n, i;
    let {
      channelId: l,
      messageId: r,
      emoji: o,
      key: a
    } = e, s = p(r, o);
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
        let l = Object.fromEntries(Object.entries(null != (n = c[t]) ? n : {}).filter(e => {
          let [, t] = e;
          return t === i
        }));
        if (Object.keys(l).length >= 5 && "EXTERNAL" === e) {
          for (let e in l)
            if (null == d[t] || null == d[t][e]) {
              delete c[t][e], delete l[e];
              break
            }
        }
        return Object.keys(l).length
      })(a, l) >= 5) return;
    let u = null != (t = c[l]) ? t : {},
      h = (null != (n = d[l]) ? n : {})[s],
      m = u[s];
    ("HOVER" !== a || null == m) && ("HOVER" === m && "EXTERNAL" === a && null != h && ("function" == typeof h.destroy && h.destroy(), null == (i = d[l]) || delete i[s], m = true), null == m && (null != c[l] ? c[l][s] = a : c[l] = {
      [s]: a
    }))
  },
  BURST_REACTION_ANIMATION_ADD: e => {
    let {
      channelId: t,
      messageId: n,
      emoji: i,
      animation: l
    } = e, r = p(n, i);
    null == d[t] && (d[t] = {}), d[t][r] = l
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: i,
      startPosition: l
    } = e;
    u["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")] = l
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: i
    } = e;
    delete u["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")]
  }
})