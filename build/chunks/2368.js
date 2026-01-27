/** Chunk was on web.js **/
/** chunk id: 2368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  eF: () => y,
  lE: () => v
}), require("./896048.js"), require("./264879.js"), require("./747238.js"), require("./321073.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk155718 = require("./155718.js"),
  Chunk861382 = require("./861382.js"),
  Chunk224868 = require("./224868.js"),
  Chunk186306 = require("./186306.js"),
  Chunk22098 = require("./22098.js"),
  Chunk323350 = require("./323350.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js");
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
    let r = f.VW.richValue(e);
    (r !== o || e.previewMarkdown !== s) && (l.o.withMergedEntry(e, () => {
      f.VW.withoutNormalizing(e, () => y(e, t, n))
    }), o = r, s = e.previewMarkdown), a()
  }, e
}

function y(e, t, n) {
  let r = f.VW.areStylesDisabled(e);
  for (let i of f.VW.blocks(e))
    if (m.has(i[0].type)) r ? O(e, i, true, null) : b(e, i, t, n);
    else {
      let [a, o] = i;
      for (let i = a.children.length - 1; i >= 0; i--) {
        let s = a.children[i];
        if (!f.l5.isText(s) && g.has(s.type)) {
          let a = [s, f.PW.child(o, i)];
          r ? O(e, a, true, null) : b(e, a, t, n)
        }
      }
    }
}

function b(e, t, n, r) {
  var i;
  let a = "line" === t[0].type && (null == (i = t[0].codeBlockState) ? true : i.isInCodeBlock) === true,
    o = f.cv.markdown(t[0], n);
  O(e, t, a, o) && (t = f.cv.updateElement(e, t), o = f.cv.markdown(t[0], n)), a || (v(e, t, r, o) && (t = f.cv.updateElement(e, t), o = f.cv.markdown(t[0], n)), A(e, t, n, r, o))
}

function O(e, t, n, r) {
  let [i, a] = t, o = false;
  for (let t = i.children.length - 1; t >= 0; t--) {
    let s = i.children[t];
    if (f.l5.isText(s) && !n) {
      let n = t < i.children.length - 1 ? i.children[t + 1] : null;
      if (null == n || !f.cv.isElement(n) || !e.isVoid(n)) continue;
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
        let r = f.PW.child(a, t + 1);
        d.b.voidToText(e, (0, u.IQ)(n, {
          mode: "plain",
          preventEmojiSurrogates: true
        }), r), o = true
      }
    } else if (f.cv.isElement(s) && e.isVoid(s)) {
      let i = f.PW.child(a, t),
        l = {
          path: f.PW.child(i, 0),
          offset: 0
        };
      (n || null != r && S(e, a, l, r)) && (d.b.voidToText(e, (0, u.IQ)(s, {
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
    if (!T(n, t[0], l)) continue;
    let p = (0, c.Q)(e, i, r.serializedChildren, u.start),
      _ = (0, c.Q)(e, i, r.serializedChildren, u.start + u.text.length);
    d.b.textToVoid(e, l, {
      anchor: p,
      focus: _
    }), a = true
  }
  return a
}

function A(e, t, n, r, i) {
  let [a, o] = t, l = false;
  for (let c = a.children.length - 1; c >= 0; c--) {
    let u, d = a.children[c];
    if (!f.l5.isText(d)) continue;
    let _ = f.PW.child(o, c),
      h = [];
    for (p.lastIndex = 0; null != (u = p.exec(d.text));) {
      if (0 !== u.index && null == d.text.charAt(u.index - 1).match(/(\t|\s)/)) {
        p.lastIndex = u.index + 1;
        continue
      }
      if (S(e, o, {
          path: _,
          offset: u.index
        }, i)) continue;
      let a = (0, s.p)(u[0], n, r);
      null != a && T(r, t[0], a) ? h.push({
        index: u.index,
        length: u[0].length,
        node: a
      }) : p.lastIndex = u.index + 1
    }
    for (let t of h.reverse()) I(e, [d, f.PW.child(o, c)], t.index, t.length, t.node), l = true
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
  i()(l.offset >= 0 && l.offset <= o.text.length, "Failed to find valid start position for raw mention replace"), i()(c.offset >= 0 && c.offset <= o.text.length, "Failed to find valid end position for raw mention replace"), d.b.textToVoid(e, a, {
    anchor: l,
    focus: c
  })
}

function S(e, t, n, r) {
  let i = 0;
  for (let [r, a] of f.VW.nodes(e, {
      at: {
        anchor: f.VW.start(e, t),
        focus: n
      },
      mode: "lowest"
    })) f.l5.isText(r) ? f.PW.equals(a, n.path) ? i += n.offset : i += r.text.length : i += 1;
  for (let e of r.entries) {
    if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
    let t = e.start,
      n = e.start + e.text.length;
    if (t <= i && n >= i) returntrue
  }
  returnfalse
}

function T(e, t, n) {
  if ("applicationCommandOption" !== t.type) returntrue;
  switch (t.optionType) {
    case a.n4.CHANNEL:
      return "channelMention" === n.type;
    case a.n4.ROLE:
      return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case a.n4.USER:
      return "userMention" === n.type;
    case a.n4.MENTIONABLE:
      return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case a.n4.STRING: {
      let n = null != e ? o.A.getOption(e, t.optionName) : null;
      return (null == n ? true : n.choices) == null && (null == n ? true : n.autocomplete) !== true
    }
    default:
      returnfalse
  }
}