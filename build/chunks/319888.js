/** Chunk was on web.js **/
/** chunk id: 319888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./896048.js"), require("./321073.js");
let r = {
    1: "bold",
    4: "underline"
  },
  i = {
    30: "black",
    31: "red",
    32: "green",
    33: "yellow",
    34: "blue",
    35: "magenta",
    36: "cyan",
    37: "white"
  },
  a = {
    40: "black",
    41: "red",
    42: "green",
    43: "yellow",
    44: "blue",
    45: "magenta",
    46: "cyan",
    47: "white"
  },
  s = /\x1B\[(\d+(?:[:;]\d+)*)m/,
  o = new RegExp("(?=".concat(s.source, ")"));

function l() {
  let e = {
      className: "ansi-control-sequence",
      begin: s,
      starts: {
        end: o,
        endsParent: true
      }
    },
    t = [...u("foreground", i, ["38", "39"], true), ...u("background", a, ["48", "49"], true), ...u("style", r, [], false), e];
  return d(t), {
    contains: [{
      begin: o,
      contains: t
    }]
  }
}

function c(e, t, n, r) {
  return {
    className: "ansi-".concat(e, "-").concat(t),
    endsParent: true,
    begin: o,
    "on:begin": (e, t) => {
      let i = e[1].split(";");
      for (let e of (true === t.data.isOn && (t.data.isOn = false), i)) e === n ? t.data.isOn = true : r.includes(e) && (t.data.isOn = false);
      t.data.isOn || t.ignoreMatch()
    }
  }
}

function u(e, t, n, r) {
  let i = ["0", ...n];
  return r && i.push(...Object.keys(t)), Object.entries(t).map(t => {
    let [n, r] = t;
    return c(e, r, n, i)
  })
}

function d(e) {
  for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1)
}