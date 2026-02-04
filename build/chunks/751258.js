/** Chunk was on 17869 **/
/** chunk id: 751258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => A
}), require("./733351.js"), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk791332 = require("./791332.js"),
  r = require.n(Chunk791332),
  Chunk715943 = require("./715943.js"),
  Chunk843472 = require("./843472.js"),
  Chunk58149 = require("./58149.js"),
  Chunk508675 = require("./508675.js"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk253932 = require("./253932.js"),
  Chunk320501 = require("./320501.js"),
  Chunk652215 = require("./652215.js");
let f = /\\([*?+/])/g,
  m = {
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
      match: r().anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: l
        } = t;
        if (n || !h.A.hasPresent(l.id)) return;
        let r = h.A.getMessages(l.id).last();
        if (null == r || null == r.id) return;
        let i = o.Ay.getDisambiguatedEmojiContext(l.guild_id).getByName(e.trim().slice(2, false));
        if (null != i) return (0, c.BB)(l.id, r.id, (0, u.jq)(i)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: r().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
      action(e, t) {
        var n, l;
        let {
          isEdit: r,
          channel: i
        } = t;
        if (r) return;
        let s = h.A.getLastEditableMessage(i.id);
        if (null == s || null == s.id) return {
          content: ""
        };
        let [o, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []), p = null != (l = null == d ? true : d.split("")) ? l : [];
        c = c.replace(f, (e, t) => t), u = u.replace(f, (e, t) => t);
        let m = p.includes("g") ? s.content.replaceAll(c, u) : s.content.replace(c, u);
        return (null == m || "" === m.trim()) && 0 === s.attachments.length ? a.A.deleteMessage(i.id, s.id) : m !== s.content && a.A.editMessage(i.id, s.id, {
          content: m
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

function g(e, t, n, l) {
  return s.Ay.trackWithMetadata(p.HAw.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, l)
}

function A(e, t) {
  for (let l in m) {
    let r = m[l];
    if (null != r.match) {
      var n;
      if (null == (n = r.match.regex) ? true : n.test(e)) return g(l, r, e, t);
      continue
    }
    if (d.D_.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (l === n[0].slice(1) && null != r.action) return g(l, r, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(m, null)