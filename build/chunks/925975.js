/** Chunk was on 88647 **/
/** chunk id: 925975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => b
}), require("./781311.js"), require("./388685.js"), require("./35282.js"), require("./704826.js"), require("./804061.js");
var Chunk159635 = require("./159635.js"),
  i = require.n(Chunk159635),
  Chunk969812 = require("./969812.js"),
  Chunk904245 = require("./904245.js"),
  Chunk367907 = require("./367907.js"),
  Chunk339085 = require("./339085.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk695346 = require("./695346.js"),
  Chunk375954 = require("./375954.js"),
  Chunk981631 = require("./981631.js");
let h = /\\([*?+/])/g,
  m = {
    tts: {
      action: () => ({
        tts: Chunk695346.OW.getSetting()
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
        if (null != n.guild_id) return l.Z.changeNickname(n.guild_id, n.id, f.ME, e), {
          content: ""
        }
      }
    },
    reaction: {
      match: i().anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: r
        } = t;
        if (n || !p.Z.hasPresent(r.id)) return;
        let i = p.Z.getMessages(r.id).last();
        if (null == i || null == i.id) return;
        let l = s.ZP.getDisambiguatedEmojiContext(r.guild_id).getByName(e.trim().slice(2, false));
        if (null != l) return (0, c.rU)(r.id, i.id, (0, u.g1)(l)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: i().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
      action(e, t) {
        var n, r;
        let {
          isEdit: i,
          channel: l
        } = t;
        if (i) return;
        let o = p.Z.getLastEditableMessage(l.id);
        if (null == o || null == o.id) return {
          content: ""
        };
        let [s, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []), f = null != (r = null == d ? true : d.split("")) ? r : [];
        c = c.replace(h, (e, t) => t), u = u.replace(h, (e, t) => t);
        let m = f.includes("g") ? o.content.replaceAll(c, u) : o.content.replace(c, u);
        return (null == m || "" === m.trim()) && 0 === o.attachments.length ? a.Z.deleteMessage(l.id, o.id) : m !== o.content && a.Z.editMessage(l.id, o.id, {
          content: m
        }), {
          content: ""
        }
      }
    },
    spoiler: {
      action: e => ({
        content: (0, f.XmY)(e).trim()
      })
    }
  };

function g(e, t, n, r) {
  return o.ZP.trackWithMetadata(f.rMx.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, r)
}

function b(e, t) {
  for (let r in m) {
    let i = m[r];
    if (null != i.match) {
      var n;
      if (null == (n = i.match.regex) ? true : n.test(e)) return g(r, i, e, t);
      continue
    }
    if (d.dN.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (r === n[0].slice(1) && null != i.action) return g(r, i, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(m, null)