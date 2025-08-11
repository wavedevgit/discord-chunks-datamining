/** Chunk was on web.js **/
/** chunk id: 925975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => g
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
let p = /\\([*?+/])/g,
  h = {
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
        if (null != n.guild_id) return o.Z.changeNickname(n.guild_id, n.id, _.ME, e), {
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
        if (n || !f.Z.hasPresent(r.id)) return;
        let i = f.Z.getMessages(r.id).last();
        if (null == i || null == i.id) return;
        let o = l.ZP.getDisambiguatedEmojiContext(r.guild_id).getByName(e.trim().slice(2, false));
        if (null != o) return (0, c.rU)(r.id, i.id, (0, u.g1)(o)), {
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
          channel: o
        } = t;
        if (i) return;
        let s = f.Z.getLastEditableMessage(o.id);
        if (null == s || null == s.id) return {
          content: ""
        };
        let [l, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []), _ = null != (r = null == d ? true : d.split("")) ? r : [];
        c = c.replace(p, (e, t) => t), u = u.replace(p, (e, t) => t);
        let h = _.includes("g") ? s.content.replaceAll(c, u) : s.content.replace(c, u);
        return (null == h || "" === h.trim()) && 0 === s.attachments.length ? a.Z.deleteMessage(o.id, s.id) : h !== s.content && a.Z.editMessage(o.id, s.id, {
          content: h
        }), {
          content: ""
        }
      }
    },
    spoiler: {
      action: e => ({
        content: (0, _.XmY)(e).trim()
      })
    }
  };

function m(e, t, n, r) {
  return s.ZP.trackWithMetadata(_.rMx.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, r)
}

function g(e, t) {
  for (let r in h) {
    let i = h[r];
    if (null != i.match) {
      var n;
      if (null == (n = i.match.regex) ? true : n.test(e)) return m(r, i, e, t);
      continue
    }
    if (d.dN.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (r === n[0].slice(1) && null != i.action) return m(r, i, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(h, null)