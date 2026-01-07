/** Chunk was on 40184 **/
/** chunk id: 925975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => b
}), require("./781311.js"), require("./388685.js"), require("./35282.js"), require("./704826.js"), require("./804061.js");
var Chunk159635 = require("./159635.js"),
  r = require.n(Chunk159635),
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
        tts: d.OW.getSetting()
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
      match: r().anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: i
        } = t;
        if (n || !p.Z.hasPresent(i.id)) return;
        let r = p.Z.getMessages(i.id).last();
        if (null == r || null == r.id) return;
        let l = s.ZP.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, false));
        if (null != l) return (0, c.rU)(i.id, r.id, (0, u.g1)(l)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: r().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
      action(e, t) {
        var n, i;
        let {
          isEdit: r,
          channel: l
        } = t;
        if (r) return;
        let o = p.Z.getLastEditableMessage(l.id);
        if (null == o || null == o.id) return {
          content: ""
        };
        let [s, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []), f = null != (i = null == d ? true : d.split("")) ? i : [];
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

function g(e, t, n, i) {
  return o.ZP.trackWithMetadata(f.rMx.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, i)
}

function b(e, t) {
  for (let i in m) {
    let r = m[i];
    if (null != r.match) {
      var n;
      if (null == (n = r.match.regex) ? true : n.test(e)) return g(i, r, e, t);
      continue
    }
    if (d.dN.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (i === n[0].slice(1) && null != r.action) return g(i, r, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(m, null)