/** Chunk was on 71879 **/
/** chunk id: 474366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk326706 = require("./326706.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk710111 = require("./710111.js"),
  Chunk130883 = require("./130883.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773967 = require("./773967.js");

function O(e) {
  let {
    className: t,
    sound: n,
    playSound: a,
    isPlaying: s,
    text: d
  } = e, u = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, m = _.intl.formatToPlainString(_.t.tuMUJy, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  }), h = i.useCallback(() => {
    x.default.track(b.rMx.MODERATOR_QUEUE_ACTION, {
      guild_id: f.Z.getGuildId(),
      action: "airhorn"
    }), null != a && a()
  }, [a]);
  return <o.P3F aria-label={m} tag={"span"} onClick={h} className={l()(y.inlineContainer, y.inlineButton, {
      [y.playing]: true === s
    }, t)}>{u && <c.Z emojiId={null == n ? true : n.emojiId} emojiName={null == n ? true : n.emojiName} className={y.soundmojiEmoji} />}{<span>{" ".concat(d, " ")}</span>}</o.P3F>
}

function w(e) {
  let {
    containerRef: t,
    text: n
  } = e, a = i.useRef(null), l = (0, s.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getSoundsForGuild(v.X8)) ? true : e.find(e => "airhorn" === e.name)
  }), {
    createMultipleConfettiAt: o
  } = i.useContext(m.h), c = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), {
    isPlaying: f,
    playSound: x
  } = (0, p.W)(l);
  (0, d.ZP)(() => {
    (0, h.w)()
  });
  let b = i.useCallback(async () => {
    if (await x()) {
      var e;
      if (null == (e = a.current) || e.addAnimation(), !c && (null == t ? true : t.current) != null) {
        let e = t.current.getBoundingClientRect(),
          n = {
            x: e.left + e.width / 2,
            y: e.top + e.height / 3
          },
          r = j.CA[Math.floor(Math.random() * j.CA.length)];
        o(n.x, n.y, {
          velocity: {
            type: "static-random",
            minValue: {
              x: false,
              y: false
            },
            maxValue: {
              x: 500,
              y: false
            }
          }
        }, 40, {
          sprite: r
        })
      }
    }
  }, [x, o, c, t]);
  return true === l ? null : <O sound={l} playSound={b} isPlaying={f} text={n} />
}

function P() {
  let e = Chunk73800.useRef(null);
  return <Chunk481060.Kqy className={Chunk773967.container} direction={"vertical"} align={"center"} justify={"center"} padding={{
      top: 24,
      bottom: 24
    }} ref={module}>{<Chunk481060.l22 size={"custom"} width={48} height={48} />}{<Chunk481060.Kqy direction={"vertical"} align={"center"} justify={"center"}>{<Chunk481060.X6q className={Chunk773967.header} variant={"heading-md/medium"}>{Chunk388032.intl.string(Chunk130883.default.h6QNk5)}</Chunk481060.X6q>}{<Chunk481060.Text className={Chunk773967.text} variant={"text-md/medium"} color={"text-secondary"}>{Chunk388032.intl.format(Chunk130883.default["8N4c5+"], {
          airhornHook: t => (0, r.jsx)(w, {
            containerRef: e,
            text: t
          })
        })}</Chunk481060.Text>}</Chunk481060.Kqy>}</Chunk481060.Kqy>
}