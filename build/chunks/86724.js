/** Chunk was on web.js **/
/** chunk id: 86724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => P,
  Z: () => C
}), require("./388685.js"), require("./781311.js"), require("./539854.js"), require("./704826.js"), require("./35282.js"), require("./290780.js"), require("./583741.js"), require("./125548.js");
var Chunk373793 = require("./373793.js"),
  Chunk911969 = require("./911969.js"),
  Chunk555573 = require("./555573.js"),
  Chunk456007 = require("./456007.js"),
  Chunk10718 = require("./10718.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk509716 = require("./509716.js"),
  Chunk826298 = require("./826298.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk91313 = require("./91313.js"),
  Chunk53529 = require("./53529.js"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk42530 = require("./42530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk761652 = require("./761652.js");
let T = new Set(["applicationCommandOption"]),
  S = new Set([Chunk911969.jw.ATTACHMENT]),
  A = new Set(["line", "applicationCommand"]);

function C(e, t, n, r) {
  let {
    insertData: i,
    isInline: d,
    isVoid: f,
    onChange: _,
    deleteBackward: p,
    deleteForward: h,
    deleteFragment: m
  } = e;
  e.insertData = n => {
    if (null != t && y.bN.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: i,
          interactionOptions: d
        } = (0, u.XA)(e),
        {
          application: f,
          command: _
        } = s.Xq({
          channel: t,
          type: "channel"
        }, i);
      if (null != _) {
        var r, l;
        let e = null != f ? {
          type: c.Qi.APPLICATION,
          id: f.id,
          icon: f.icon,
          name: null != (l = null == (r = f.bot) ? true : r.username) ? l : f.name,
          application: f
        } : null;
        return a.Po({
          channelId: t.id,
          command: _,
          section: e,
          location: c.Vh.PASTE,
          initialValues: (0, o.Dw)(_, null != d ? d : [])
        }), null
      }
    }
    return i(n)
  }, e.isInline = e => !!T.has(e.type) || d(e), e.isVoid = e => !!("applicationCommandOption" === e.type && S.has(e.optionType)) || f(e), e.deleteBackward = t => {
    M(e, () => p(t))
  }, e.deleteForward = t => {
    M(e, () => h(t))
  }, e.deleteFragment = t => {
    M(e, () => m(t))
  };
  let E = null,
    b = null,
    O = null,
    v = null,
    I = null;
  return e.onChange = () => {
    if (null != t) {
      let i = l.Z.getState(t.id),
        a = s.Hf({
          channel: t,
          type: "channel"
        });
      if (y.bN.richValue(e) !== E || !y.Ew.equals(e.selection, b) || i.activeCommand !== O || null == I || a.some((e, t) => I[t] !== e)) {
        let o = g.T.withMergedEntry(e, () => {
          var a;
          return N({
            editor: e,
            storeCommandState: i,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: r,
            commandChanged: (null == (a = i.activeCommand) ? true : a.id) !== (null == O ? true : O.id),
            previousOptionValues: v
          })
        });
        if (null != o) {
          let t = g.T.currentEntry(e);
          null != t && (t.commandId = o.commandId), v = o.optionValues
        } else v = null;
        E = y.bN.richValue(e), b = e.selection, O = i.activeCommand, I = a
      }
    }
    _()
  }, e
}

function N(e) {
  var t, n;
  let {
    editor: i,
    storeCommandState: o,
    channel: s,
    canUseCommands: l,
    canOnlyUseTextCommands: u,
    commandChanged: d,
    previousOptionValues: f
  } = e, {
    command: _,
    commandText: p
  } = L(i), h = o.activeCommand;
  if (!l && (null == h || null == (t = h.integration_types) ? true : t.includes(r.Y.GUILD_INSTALL)) || u && (null == h ? true : h.inputType) !== c.iw.BUILT_IN_TEXT && (null == h ? true : h.inputType) !== c.iw.BUILT_IN_INTEGRATION) return null != _ && P(i, s.id, h, true), null;
  if (null != _) {
    if (y.bN.isEditorEmpty(i) || null == h) return P(i, s.id, h, false), null;
    let e = "".concat(I.GI).concat(_.displayName);
    if (null == p || !p.startsWith(e) || 0 === m.cu(i).length && (p.length < e.length + 1 || " " !== p[e.length])) return P(i, s.id, h, true), null
  } else {
    if (null != h && d) {
      let e = R(i, s, o),
        t = m.tM(i, h, s.id);
      return x({
        guildId: s.guild_id,
        channelId: s.id,
        command: h,
        activeOption: e,
        currentOptionValues: t,
        previousOptionValues: null,
        validateAll: true,
        allowEmpty: true
      }), {
        commandId: h.id,
        optionValues: t
      }
    }
    if (null != h && !d) return a.Po({
      channelId: s.id,
      command: null,
      section: null
    }), null;
    let e = y.bN.richValue(i)[0],
      t = e.children[0];
    if (A.has(e.type) && y.LC.isText(t)) {
      let e = k(t.text, s);
      if (null != e) return a.Po({
        channelId: s.id,
        command: e.command,
        section: e.section
      }), null
    }
  }
  if (null != h && null != _) {
    D(i, h) || w(i, h);
    let e = m.tM(i, h, s.id),
      t = y.bN.above(i, {
        match: e => y.bN.isInline(i, e) && "applicationCommandOption" === e.type,
        mode: "lowest"
      }),
      r = null != (n = null == t ? true : t[0].optionName) ? n : null;
    return x({
      guildId: s.guild_id,
      channelId: s.id,
      command: h,
      activeOption: r,
      currentOptionValues: e,
      previousOptionValues: f,
      validateAll: false,
      allowEmpty: false
    }), {
      commandId: _.id,
      optionValues: e
    }
  }
  return null
}

function R(e, t, n) {
  var r, i, a, o, s;
  let l, {
    initialValues: c,
    activeCommand: u
  } = n;
  if (null == u) return null;
  let d = (null != (a = null == (r = u.options) ? true : r.length) ? a : 0) > 0 ? m.zb(e, u) : null,
    f = (0, E.sk)(y.bN.richValue(e), {
      mode: "raw",
      range: {
        anchor: y.bN.start(e, []),
        focus: null != (o = null == d || null == (i = d[0]) ? true : i.keyRange.anchor) ? o : y.bN.end(e, [])
      }
    }),
    _ = "",
    p = f.toLocaleLowerCase(),
    h = "".concat(I.GI).concat(u.displayName, " ").toLocaleLowerCase(),
    g = "".concat(I.GI).concat(u.untranslatedName, " ").toLocaleLowerCase();
  p.startsWith(h) ? _ = f.substring(h.length).trim() : p.startsWith(g) && (_ = f.substring(g.length).trim());
  let v = [],
    T = null,
    A = null;
  if (null != u.options) {
    let e = new Set;
    if (null != d)
      for (let r of d) {
        e.add(r.name);
        let i = null != (s = j(n, t, r.name)) ? s : r.text,
          a = {
            type: "applicationCommandOption",
            optionName: r.name,
            optionDisplayName: r.displayName,
            optionType: r.type,
            children: [{
              text: i
            }]
          };
        v.push(a), 0 === r.text.length && null == T && (T = a)
      }
    for (let r of u.options)
      if (!e.has(r.name) && (r.required || null != c[r.name])) {
        let e, i;
        _.length > 0 && !S.has(r.type) ? (e = _, _ = "") : e = null != (i = j(n, t, r.name)) ? i : "";
        let a = {
          type: "applicationCommandOption",
          optionName: r.name,
          optionDisplayName: r.displayName,
          optionType: r.type,
          children: [{
            text: e
          }]
        };
        v.push(a), 0 === e.length && null == T && (T = a), null == i && (A = a)
      }
  }
  l = _.length > 0 ? "".concat(I.GI).concat(u.displayName, " ").concat(_.replace(/\r|\n/g, " ")) : 0 === v.length ? "".concat(I.GI).concat(u.displayName, " ") : "".concat(I.GI).concat(u.displayName), v.unshift({
    text: l
  });
  let C = {
    type: "applicationCommand",
    children: v,
    command: {
      id: u.id,
      name: u.untranslatedName,
      displayName: u.displayName
    }
  };
  y.bN.withoutNormalizing(e, () => {
    for (let [, t] of(b.Q.insertNodes(e, [C], {
        at: O.YD
      }), y.bN.blocks(e).reverse())) y.C0.isAfter(t, O.YD) && b.Q.removeNodes(e, {
      at: t,
      voids: true
    })
  });
  let N = null;
  return null != T ? (b.Q.selectCommandOption(e, T.optionName), N = T.optionName) : null != A ? (b.Q.selectCommandOption(e, A.optionName, false), N = A.optionName) : b.Q.resetSelectionToEditorEnd(e), null == A && w(e, u), N
}

function P(e, t, n, r) {
  let [i] = y.bN.blocks(e)[0], o = (r ? (0, E.sg)(i, {
    mode: "plain"
  }).trimEnd() : "").split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), s = [o.length - 1];
  for (let [, t] of(b.Q.insertNodes(e, o, {
      at: O.YD
    }), y.bN.blocks(e).reverse())) y.C0.isAfter(t, s) && b.Q.removeNodes(e, {
    at: t,
    voids: true
  });
  null != n && a.Po({
    channelId: t,
    command: null,
    section: null
  })
}

function D(e, t) {
  if (null == t.options || 0 === t.options.length) returnfalse;
  let n = m.zb(e, t);
  return 0 !== n.length && (y.bN.withoutNormalizing(e, () => {
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      b.Q.textToInline(e, {
        type: "applicationCommandOption",
        optionName: r.name,
        optionDisplayName: r.displayName,
        optionType: r.type,
        children: [{
          text: r.text
        }]
      }, {
        anchor: r.keyRange.anchor,
        focus: r.valueRange.focus
      })
    }
    let t = y.bN.getFirstText(e);
    if (null == t) returnfalse;
    let r = t.text.trim();
    t.text !== r && b.Q.textToText(e, r, {
      anchor: {
        path: O.u9,
        offset: 0
      },
      focus: {
        path: O.u9,
        offset: t.text.length
      }
    })
  }), true)
}

function w(e, t) {
  if (null == t.options || 1 !== t.options.length || true === t.options[0].required || S.has(t.options[0].type) || m.cu(e).length > 0 || null == m.cr(e)) returnfalse;
  let n = y.bN.getFirstText(e);
  if (null == n) returnfalse;
  let r = t.options[0],
    i = {
      path: O.u9,
      offset: t.displayName.length + 2
    },
    a = {
      path: O.u9,
      offset: n.text.length
    };
  return !(!n.text.startsWith("".concat(I.GI).concat(t.displayName, " ").toLocaleLowerCase()) || y.Jz.equals(i, a)) && (b.Q.textToInline(e, {
    type: "applicationCommandOption",
    optionName: r.name,
    optionDisplayName: r.displayName,
    optionType: r.type,
    children: [{
      text: n.text.substring(t.displayName.length + 2)
    }]
  }, {
    anchor: i,
    focus: a
  }), true)
}

function x(e) {
  let {
    guildId: t,
    channelId: n,
    command: r,
    activeOption: i,
    currentOptionValues: o,
    previousOptionValues: s,
    validateAll: c,
    allowEmpty: u
  } = e;
  if (null == r.options) returnfalse;
  let f = c ? null : l.Z.getActiveOptionName(n),
    _ = {},
    p = l.Z.getOptionStates(n),
    h = false;
  for (let e of r.options) {
    var m, g, E;
    let r = p[e.name],
      a = c || e.name === f && f !== i || (null == r || null == (m = r.lastValidationResult) ? true : m.success) === false && (null == o ? true : o[e.name]) !== (null == s ? true : s[e.name]),
      l = {
        hasValue: null != o && e.name in o,
        isActive: e.name === i,
        lastValidationResult: a ? (0, d.f)({
          option: e,
          content: null != (E = null == o ? true : o[e.name]) ? E : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: u
        }) : null == r ? true : r.lastValidationResult
      };
    (null == r || r.hasValue !== l.hasValue || r.isActive !== l.isActive || a && (null == (g = r.lastValidationResult) ? true : g.success) === false) && (_[e.name] = l, h = true)
  }
  h && a.g7(n, _)
}

function L(e) {
  let t = m.cr(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, r = n.children[0];
  return y.LC.isText(r) ? {
    command: n.command,
    commandText: r.text
  } : {
    command: n.command,
    commandText: null
  }
}

function M(e, t) {
  let n = m.cu(e)[0];
  t();
  let r = y.M8.toPoint(e.selection);
  if (null == r || n === m.cu(e)[0]) return;
  let {
    command: i,
    commandText: a
  } = L(e);
  !(null == i || null == a || a.endsWith(" ")) && y.Jz.equals(r, {
    path: O.u9,
    offset: i.displayName.length + 1
  }) && b.Q.insertText(e, " ")
}

function k(e, t) {
  if (!e.startsWith("/")) return null;
  let n = (0, f.hV)(t, e.substring(1));
  if (!n.hasSpaceTerminator) return null;
  let {
    commands: r,
    sections: a
  } = s.VB({
    channel: t,
    type: "channel"
  }, i.yU.CHAT, n.text);
  if (0 === r.length) return null;
  let o = n.text.trim(),
    l = o + " ",
    u = r.filter(e => e.inputType !== c.iw.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(l)));
  if (1 === u.length && u[0].displayName === o) {
    let e = u[0],
      t = a.find(t => {
        var n;
        return (null == (n = t.application) ? true : n.id) === e.applicationId
      });
    return {
      command: e,
      section: t
    }
  }
  return null
}

function j(e, t, n) {
  var r, a, o, s;
  let l = null == (a = e.activeCommand) || null == (r = a.options) ? true : r.find(e => e.name === n),
    c = e.initialValues[n];
  if (null == l || null == c) return null;
  if (null != l.choices) return null == (s = l.choices.find(e => e.value === c.value)) ? true : s.displayName;
  let u = null == (o = c.value) ? true : o.toString();
  return l.type === i.jw.CHANNEL || l.type === i.jw.MENTIONABLE && null != _.Z.getChannel(u) ? "<#".concat(u, ">	") : l.type === i.jw.USER || l.type === i.jw.MENTIONABLE && null != h.default.getUser(u) ? "<@".concat(u, ">") : l.type === i.jw.ROLE || l.type === i.jw.MENTIONABLE && null != p.Z.getRole(t.guild_id, null != u ? u : v.lds) ? "<@&".concat(u, ">") : u
}