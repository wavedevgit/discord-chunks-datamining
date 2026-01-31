/** Chunk was on 17534 **/
/** chunk id: 751258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => b
}), require("./733351.js"), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk280230 = require("./280230.js"),
  l = require.n(Chunk280230),
  Chunk715943 = require("./715943.js"),
  Chunk843472 = require("./843472.js"),
  Chunk58149 = require("./58149.js"),
  Chunk508675 = require("./508675.js"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk253932 = require("./253932.js"),
  Chunk320501 = require("./320501.js"),
  Chunk652215 = require("./652215.js");
let g = /\\([*?+/])/g,
  f = {
    tts: {
      action: () => ({
        tts: d.on.getSetting()
      })
    },
    me: {
      action: e => ({
        content: "_".concat(e, "_")
      })
    },
    tableflip: {
      action: e => ({
        content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      })
    },
    unflip: {
      action: e => ({
        content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      })
    },
    shrug: {
      action: e => ({
        content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
      })
    },
    nick: {
      action(e, t) {
        let {
          channel: n
        } = t;
        if (null != n.guild_id) return i.A.changeNickname(n.guild_id, n.id, p.ME, e), {
          content: ""
        }
      }
    },
    reaction: {
      match: l().anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: r
        } = t;
        if (n || !h.A.hasPresent(r.id)) return;
        let l = h.A.getMessages(r.id).last();
        if (null == l || null == l.id) return;
        let i = o.Ay.getDisambiguatedEmojiContext(r.guild_id).getByName(e.trim().slice(2, false));
        if (null != i) return (0, c.BB)(r.id, l.id, (0, u.jq)(i)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: l().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
      action(e, t) {
        var n, r;
        let {
          isEdit: l,
          channel: i
        } = t;
        if (l) return;
        let a = h.A.getLastEditableMessage(i.id);
        if (null == a || null == a.id) return {
          content: ""
        };
        let [o, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []), p = null != (r = null == d ? true : d.split("")) ? r : [];
        c = c.replace(g, (e, t) => t), u = u.replace(g, (e, t) => t);
        let f = p.includes("g") ? a.content.replaceAll(c, u) : a.content.replace(c, u);
        return (null == f || "" === f.trim()) && 0 === a.attachments.length ? s.A.deleteMessage(i.id, a.id) : f !== a.content && s.A.editMessage(i.id, a.id, {
          content: f
        }), {
          content: ""
        }
      }
    },
    spoiler: {
      action: e => ({
        content: (0, p.ZGg)(e).trim()
      })
    }
  };

function m(e, t, n, r) {
  return a.Ay.trackWithMetadata(p.HAw.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, r)
}

function b(e, t) {
  for (let r in f) {
    let l = f[r];
    if (null != l.match) {
      var n;
      if (null == (n = l.match.regex) ? true : n.test(e)) return m(r, l, e, t);
      continue
    }
    if (d.D_.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (r === n[0].slice(1) && null != l.action) return m(r, l, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(f, null)