/** Chunk was on web.js **/
/** chunk id: 91313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HZ: () => m,
  IB: () => E,
  cr: () => _,
  cu: () => h,
  lk: () => b,
  tM: () => g,
  xi: () => y,
  zb: () => O
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./467055.js"), require("./781311.js");
var Chunk911969 = require("./911969.js"),
  Chunk555573 = require("./555573.js"),
  Chunk998698 = require("./998698.js"),
  Chunk344896 = require("./344896.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk752305 = require("./752305.js"),
  Chunk925994 = require("./925994.js"),
  Chunk887490 = require("./887490.js"),
  Chunk42530 = require("./42530.js");
let p = RegExp("([\\p{L}\\p{N}\\p{sc=Deva}\\p{sc=Thai}_-]+):", "gu");

function _(e) {
  let t = d.bN.richValue(e)[0];
  return null == t || "applicationCommand" !== t.type ? null : [t, f.YD]
}

function m(e) {
  var t, n;
  if (null == e.selection) return null;
  let r = null != (t = d.bN.above(e, {
    at: e.selection.focus,
    match: e => d.aj.isType(e, "applicationCommandOption")
  })) ? t : null;
  return null != r || d.M8.isCollapsed(e.selection) ? r : null != (n = d.bN.above(e, {
    at: e.selection.anchor,
    match: e => d.aj.isType(e, "applicationCommandOption")
  })) ? n : null
}

function h(e) {
  let t = _(e),
    n = [],
    r = null == t ? true : t[0].children;
  if (null != r)
    for (let e of r) d.aj.isType(e, "applicationCommandOption") && n.push(e.optionName);
  return n
}

function g(e, t, n) {
  let r = {};
  if (null == t.options) return {};
  let i = _(e),
    a = Object.fromEntries(t.options.map(e => [e.name, e])),
    o = null == i ? true : i[0].children;
  if (null != o) {
    for (let t of o)
      if (d.aj.isType(t, "applicationCommandOption")) {
        let i = a[t.optionName];
        null != i && (r[t.optionName] = E(e, i, t, n))
      }
  }
  return r
}

function E(e, t, n, i) {
  let a = n.children.map(n => {
    if (t.type === r.jw.ATTACHMENT) {
      let e = l.Z.getUpload(i, t.name, s.d.SlashCommand);
      if (null != e) {
        var a;
        return {
          type: "text",
          text: null != (a = e.filename) ? a : ""
        }
      }
    }
    if (d.LC.isText(n)) return {
      type: "text",
      text: n.text
    };
    if (d.bN.isVoid(e, n)) {
      let e = (0, c.VI)(n);
      if (null != e) return e
    }
    return {
      type: "text",
      text: (0, u.sg)(n, {
        mode: "raw"
      })
    }
  });
  if (t.type !== r.jw.STRING) {
    for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim();) a.shift();
    for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim();) a.pop()
  }
  return a
}

function b(e, t, n, r, a) {
  if (null == e.options) return {};
  let s = Object.fromEntries(e.options.map(e => {
    var i;
    return [e.name, o.f({
      option: e,
      content: null != (i = r[e.name]) ? i : null,
      guildId: t,
      channelId: n,
      allowEmptyValues: a
    })]
  }));
  return i.VP(n, s), s
}

function y(e, t, n, r, s) {
  var l;
  let [c] = r, u = a.Z.getActiveCommand(n), d = null == u || null == (l = u.options) ? true : l.find(e => e.name === c.optionName);
  if (null == d) return;
  let f = E(e, d, c, n),
    p = o.f({
      option: d,
      content: f,
      guildId: t,
      channelId: n,
      allowEmptyValues: s
    });
  return i.g7(n, {
    [c.optionName]: {
      lastValidationResult: p
    }
  }), p
}

function O(e, t) {
  if (null == t.options || 0 === t.options.length) return [];
  let n = d.bN.richValue(e),
    r = [],
    i = new Set(h(e)),
    a = {},
    o = new Set;
  for (let e of t.options) a[e.displayName] = e, i.has(e.name) || o.add(e.displayName);
  let s = null;
  for (let t = 0; t < n.length; t++) {
    let i = n[t];
    if ("line" === i.type || "applicationCommand" === i.type)
      for (let c = 0; c < i.children.length; c++) {
        let f, _ = i.children[c],
          m = [t, c];
        if (d.aj.isType(_, "applicationCommandOption")) {
          if (null != s) {
            var l;
            s.valueRange.focus = null != (l = d.bN.before(e, m)) ? l : d.bN.start(e, []), s.text = (0, u.sk)(n, {
              mode: "raw",
              range: s.valueRange
            }).trim(), r.push(s), s = null
          }
          continue
        }
        if (d.LC.isText(_))
          for (p.lastIndex = 0; null != (f = p.exec(_.text));) {
            if (0 !== f.index && null == _.text.charAt(f.index - 1).match(/(\t|\s)/)) continue;
            let e = f[1];
            if (!o.has(e)) continue;
            o.delete(e);
            let t = a[e];
            if (null == t) continue;
            let i = {
                path: m,
                offset: f.index
              },
              l = {
                path: m,
                offset: i.offset + f[0].length
              },
              c = {
                path: m,
                offset: l.offset
              },
              d = {
                name: t.name,
                displayName: t.displayName,
                type: t.type,
                keyRange: {
                  anchor: i,
                  focus: l
                },
                valueRange: {
                  anchor: c,
                  focus: c
                },
                text: ""
              };
            null != s && (s.valueRange.focus = d.keyRange.anchor, s.text = (0, u.sk)(n, {
              mode: "raw",
              range: s.valueRange
            }).trim(), r.push(s)), s = d
          }
      }
  }
  return null != s && (s.valueRange.focus = d.bN.end(e, []), s.text = (0, u.sk)(n, {
    mode: "raw",
    range: s.valueRange
  }).trim(), r.push(s)), r
}