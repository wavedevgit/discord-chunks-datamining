/** Chunk was on web.js **/
/** chunk id: 847302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gg: () => v,
  KH: () => b,
  ZP: () => E
}), require("./388685.js"), require("./583741.js"), require("./35282.js"), require("./539854.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk998698 = require("./998698.js"),
  Chunk465343 = require("./465343.js"),
  Chunk53529 = require("./53529.js"),
  Chunk341702 = require("./341702.js"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js");
let p = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
  _ = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp", "gameMention"]),
  m = new Set(["gameMentionInput", "timestampMentionInput"]),
  h = new Set(["line", "blockQuote"]),
  g = new Set(["applicationCommandOption"]);

function E(e, t, n) {
  let {
    isInline: r,
    isVoid: i,
    onChange: o
  } = e;
  e.isVoid = e => !!_.has(e.type) || i(e), e.isInline = e => !!(_.has(e.type) || m.has(e.type)) || r(e);
  let a = null,
    s = true;
  return e.onChange = () => {
    let r = f.bN.richValue(e);
    (r !== a || e.previewMarkdown !== s) && (l.T.withMergedEntry(e, () => {
      f.bN.withoutNormalizing(e, () => b(e, t, n))
    }), a = r, s = e.previewMarkdown), o()
  }, e
}

function b(e, t, n) {
  let r = f.bN.areStylesDisabled(e);
  for (let i of f.bN.blocks(e))
    if (h.has(i[0].type)) r ? O(e, i, true, null) : y(e, i, t, n);
    else {
      let [o, a] = i;
      for (let i = o.children.length - 1; i >= 0; i--) {
        let s = o.children[i];
        if (g.has(s.type)) {
          let o = [s, f.C0.child(a, i)];
          r ? O(e, o, true, null) : y(e, o, t, n)
        }
      }
    }
}

function y(e, t, n, r) {
  var i;
  let o = "line" === t[0].type && (null == (i = t[0].codeBlockState) ? true : i.isInCodeBlock) === true,
    a = f.q.markdown(t[0], n);
  O(e, t, o, a) && (t = f.q.updateElement(e, t), a = f.q.markdown(t[0], n)), o || (v(e, t, r, a) && (t = f.q.updateElement(e, t), a = f.q.markdown(t[0], n)), S(e, t, n, r, a))
}

function O(e, t, n, r) {
  let [i, o] = t, a = false;
  for (let t = i.children.length - 1; t >= 0; t--) {
    let s = i.children[t],
      l = t < i.children.length - 1 ? i.children[t + 1] : null;
    if (f.LC.isText(s) && !n) {
      if (null == l || !e.isVoid(l)) continue;
      let n = false,
        r = 0;
      for (;;) {
        let e = s.text.indexOf("\\", r);
        if (false === e) break;
        if (e === s.text.length - 1) {
          n = true;
          break
        }
        r = e + 2
      }
      if (n) {
        let n = f.C0.child(o, t + 1);
        d.Q.voidToText(e, (0, u.sg)(l, {
          mode: "plain",
          preventEmojiSurrogates: true
        }), n), a = true
      }
    } else if (e.isVoid(s)) {
      let i = f.C0.child(o, t),
        l = {
          path: f.C0.child(i, 0),
          offset: 0
        };
      (n || null != r && T(e, o, l, r)) && (d.Q.voidToText(e, (0, u.sg)(s, {
        mode: "plain",
        preventEmojiSurrogates: true
      }), i), a = true)
    }
  }
  return a
}

function v(e, t, n, r) {
  let i = t[1],
    o = false,
    a = [...r.entries].reverse();
  for (let s = 0; s < a.length; s++) {
    let l, u = a[s],
      f = a[s + 1];
    if (null != f && f.text.endsWith("\\") && u.start === f.start + f.text.length) continue;
    switch (u.attributes[0]) {
      case "emoji":
        l = {
          type: "emoji",
          emoji: {
            name: u.data.name,
            src: u.data.src,
            surrogate: u.data.surrogate,
            jumboable: true === u.data.jumboable
          },
          children: [{
            text: ""
          }]
        };
        break;
      case "customEmoji":
        l = {
          type: "customEmoji",
          emoji: {
            emojiId: u.data.emojiId,
            name: u.data.name,
            animated: u.data.animated,
            jumboable: true === u.data.jumboable
          },
          children: [{
            text: ""
          }]
        };
        break;
      case "textMention":
        l = {
          type: "textMention",
          name: u.data.text,
          children: [{
            text: ""
          }]
        };
        break;
      case "mention":
        l = {
          type: "userMention",
          userId: u.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "roleMention":
        l = {
          type: "roleMention",
          roleId: u.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "channelMention":
        l = {
          type: "channelMention",
          channelId: u.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "staticRouteLink":
        l = {
          type: "staticRouteLink",
          id: u.data.id,
          itemId: u.data.itemId,
          children: [{
            text: ""
          }]
        };
        break;
      case "soundboard":
        l = {
          type: "soundboard",
          guildId: u.data.guildId,
          soundId: u.data.soundId,
          children: [{
            text: ""
          }]
        };
        break;
      case "timestamp":
        l = {
          type: "timestamp",
          parsed: u.data,
          children: [{
            text: ""
          }]
        };
        break;
      case "gameMention":
        l = {
          type: "gameMention",
          applicationId: u.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "timestampMentionInput":
        l = {
          type: "timestampMentionInput",
          children: [{
            text: u.data.content
          }]
        };
        break;
      default:
        continue
    }
    if (!C(n, t[0], l)) continue;
    let p = (0, c.t)(e, i, r.serializedChildren, u.start),
      _ = (0, c.t)(e, i, r.serializedChildren, u.start + u.text.length);
    d.Q.textToVoid(e, l, {
      anchor: p,
      focus: _
    }), o = true
  }
  return o
}

function S(e, t, n, r, i) {
  let [o, a] = t, l = false;
  for (let c = o.children.length - 1; c >= 0; c--) {
    let u, d = o.children[c];
    if (!f.LC.isText(d)) continue;
    let _ = f.C0.child(a, c),
      m = [];
    for (p.lastIndex = 0; null != (u = p.exec(d.text));) {
      if (0 !== u.index && null == d.text.charAt(u.index - 1).match(/(\t|\s)/)) {
        p.lastIndex = u.index + 1;
        continue
      }
      if (T(e, a, {
          path: _,
          offset: u.index
        }, i)) continue;
      let o = (0, s.i)(u[0], n, r);
      null != o && C(r, t[0], o) ? m.push({
        index: u.index,
        length: u[0].length,
        node: o
      }) : p.lastIndex = u.index + 1
    }
    for (let t of m.reverse()) I(e, [d, f.C0.child(a, c)], t.index, t.length, t.node), l = true
  }
  return l
}

function I(e, t, n, r, o) {
  let [a, s] = t, l = {
    path: s,
    offset: n
  }, c = {
    path: s,
    offset: n + r
  };
  i()(l.offset >= 0 && l.offset <= a.text.length, "Failed to find valid start position for raw mention replace"), i()(c.offset >= 0 && c.offset <= a.text.length, "Failed to find valid end position for raw mention replace"), d.Q.textToVoid(e, o, {
    anchor: l,
    focus: c
  })
}

function T(e, t, n, r) {
  let i = 0;
  for (let [r, o] of f.bN.nodes(e, {
      at: {
        anchor: f.bN.start(e, t),
        focus: n
      },
      mode: "lowest"
    })) f.LC.isText(r) ? f.C0.equals(o, n.path) ? i += n.offset : i += r.text.length : i += 1;
  for (let e of r.entries) {
    if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
    let t = e.start,
      n = e.start + e.text.length;
    if (t <= i && n >= i) returntrue
  }
  returnfalse
}

function C(e, t, n) {
  if ("applicationCommandOption" !== t.type) returntrue;
  switch (t.optionType) {
    case o.jw.CHANNEL:
      return "channelMention" === n.type;
    case o.jw.ROLE:
      return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case o.jw.USER:
      return "userMention" === n.type;
    case o.jw.MENTIONABLE:
      return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case o.jw.STRING: {
      let n = null != e ? a.Z.getOption(e, t.optionName) : null;
      return (null == n ? true : n.choices) == null && (null == n ? true : n.autocomplete) !== true
    }
    default:
      returnfalse
  }
}