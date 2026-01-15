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
  h = new Set(["gameMentionInput", "timestampMentionInput"]),
  m = new Set(["line", "blockQuote"]),
  g = new Set(["applicationCommandOption"]);

function E(e, t, n) {
  let {
    isInline: r,
    isVoid: i,
    onChange: a
  } = e;
  e.isVoid = e => !!_.has(e.type) || i(e), e.isInline = e => !!(_.has(e.type) || h.has(e.type)) || r(e);
  let o = null,
    s = true;
  return e.onChange = () => {
    let r = f.bN.richValue(e);
    (r !== o || e.previewMarkdown !== s) && (l.T.withMergedEntry(e, () => {
      f.bN.withoutNormalizing(e, () => b(e, t, n))
    }), o = r, s = e.previewMarkdown), a()
  }, e
}

function b(e, t, n) {
  let r = f.bN.areStylesDisabled(e);
  for (let i of f.bN.blocks(e))
    if (m.has(i[0].type)) r ? O(e, i, true, null) : y(e, i, t, n);
    else {
      let [a, o] = i;
      for (let i = a.children.length - 1; i >= 0; i--) {
        let s = a.children[i];
        if (!f.LC.isText(s) && g.has(s.type)) {
          let a = [s, f.C0.child(o, i)];
          r ? O(e, a, true, null) : y(e, a, t, n)
        }
      }
    }
}

function y(e, t, n, r) {
  var i;
  let a = "line" === t[0].type && (null == (i = t[0].codeBlockState) ? true : i.isInCodeBlock) === true,
    o = f.q.markdown(t[0], n);
  O(e, t, a, o) && (t = f.q.updateElement(e, t), o = f.q.markdown(t[0], n)), a || (v(e, t, r, o) && (t = f.q.updateElement(e, t), o = f.q.markdown(t[0], n)), S(e, t, n, r, o))
}

function O(e, t, n, r) {
  let [i, a] = t, o = false;
  for (let t = i.children.length - 1; t >= 0; t--) {
    let s = i.children[t];
    if (f.LC.isText(s) && !n) {
      let n = t < i.children.length - 1 ? i.children[t + 1] : null;
      if (null == n || !f.q.isElement(n) || !e.isVoid(n)) continue;
      let r = false,
        l = 0;
      for (;;) {
        let e = s.text.indexOf("\\", l);
        if (false === e) break;
        if (e === s.text.length - 1) {
          r = true;
          break
        }
        l = e + 2
      }
      if (r) {
        let r = f.C0.child(a, t + 1);
        d.Q.voidToText(e, (0, u.sg)(n, {
          mode: "plain",
          preventEmojiSurrogates: true
        }), r), o = true
      }
    } else if (f.q.isElement(s) && e.isVoid(s)) {
      let i = f.C0.child(a, t),
        l = {
          path: f.C0.child(i, 0),
          offset: 0
        };
      (n || null != r && T(e, a, l, r)) && (d.Q.voidToText(e, (0, u.sg)(s, {
        mode: "plain",
        preventEmojiSurrogates: true
      }), i), o = true)
    }
  }
  return o
}

function v(e, t, n, r) {
  let i = t[1],
    a = false,
    o = [...r.entries].reverse();
  for (let s = 0; s < o.length; s++) {
    let l, u = o[s],
      f = o[s + 1];
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
    }), a = true
  }
  return a
}

function S(e, t, n, r, i) {
  let [a, o] = t, l = false;
  for (let c = a.children.length - 1; c >= 0; c--) {
    let u, d = a.children[c];
    if (!f.LC.isText(d)) continue;
    let _ = f.C0.child(o, c),
      h = [];
    for (p.lastIndex = 0; null != (u = p.exec(d.text));) {
      if (0 !== u.index && null == d.text.charAt(u.index - 1).match(/(\t|\s)/)) {
        p.lastIndex = u.index + 1;
        continue
      }
      if (T(e, o, {
          path: _,
          offset: u.index
        }, i)) continue;
      let a = (0, s.i)(u[0], n, r);
      null != a && C(r, t[0], a) ? h.push({
        index: u.index,
        length: u[0].length,
        node: a
      }) : p.lastIndex = u.index + 1
    }
    for (let t of h.reverse()) I(e, [d, f.C0.child(o, c)], t.index, t.length, t.node), l = true
  }
  return l
}

function I(e, t, n, r, a) {
  let [o, s] = t, l = {
    path: s,
    offset: n
  }, c = {
    path: s,
    offset: n + r
  };
  i()(l.offset >= 0 && l.offset <= o.text.length, "Failed to find valid start position for raw mention replace"), i()(c.offset >= 0 && c.offset <= o.text.length, "Failed to find valid end position for raw mention replace"), d.Q.textToVoid(e, a, {
    anchor: l,
    focus: c
  })
}

function T(e, t, n, r) {
  let i = 0;
  for (let [r, a] of f.bN.nodes(e, {
      at: {
        anchor: f.bN.start(e, t),
        focus: n
      },
      mode: "lowest"
    })) f.LC.isText(r) ? f.C0.equals(a, n.path) ? i += n.offset : i += r.text.length : i += 1;
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
    case a.jw.CHANNEL:
      return "channelMention" === n.type;
    case a.jw.ROLE:
      return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case a.jw.USER:
      return "userMention" === n.type;
    case a.jw.MENTIONABLE:
      return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case a.jw.STRING: {
      let n = null != e ? o.Z.getOption(e, t.optionName) : null;
      return (null == n ? true : n.choices) == null && (null == n ? true : n.autocomplete) !== true
    }
    default:
      returnfalse
  }
}