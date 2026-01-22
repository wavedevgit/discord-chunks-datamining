/** Chunk was on web.js **/
/** chunk id: 848570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk143236 = require("./143236.js"),
  Chunk719442 = require("./719442.js"),
  Chunk264322 = require("./264322.js"),
  Chunk861382 = require("./861382.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk408018 = require("./408018.js"),
  Chunk870748 = require("./870748.js"),
  Chunk414940 = require("./414940.js"),
  Chunk407315 = require("./407315.js"),
  Chunk119707 = require("./119707.js"),
  Chunk913728 = require("./913728.js"),
  Chunk113001 = require("./113001.js"),
  Chunk2368 = require("./2368.js"),
  Chunk999978 = require("./999978.js");
require("./665611.js");
var Chunk552046 = require("./552046.js"),
  Chunk270265 = require("./270265.js"),
  Chunk236576 = require("./236576.js"),
  Chunk350971 = require("./350971.js"),
  Chunk18722 = require("./18722.js"),
  Chunk551483 = require("./551483.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  let t = r.useContext(l.Ay),
    n = c.SI.useSetting(),
    [i] = r.useState(() => {
      let r = (0, a.ie)();
      return r.children = (0, u.x7)(""), r.selection = {
        anchor: S.K,
        focus: S.K
      }, w(N(T({}, e), {
        editor: r,
        windowContext: t,
        previewMarkdown: n
      })), r
    });
  return r.useEffect(() => {
    let e = () => i.onChange();
    return o.A.addChangeListener(e), s.Ay.addChangeListener(e), () => {
      o.A.removeChangeListener(e), s.Ay.removeChangeListener(e)
    }
  }, [i]), r.useEffect(() => {
    i.previewMarkdown !== n && (i.previewMarkdown = n, i.onChange())
  }, [i, n]), i
}

function w(e) {
  var t, n, r;
  let {
    editor: a,
    chatInputType: s,
    channel: o,
    canUseCommands: l,
    canOnlyUseTextCommands: c,
    windowContext: u,
    previewMarkdown: S,
    forTests: I,
    onChangeStart: T,
    onChangeEnd: C,
    updateState: N
  } = e, R = a, {
    onChange: w
  } = R;
  R.chatInputType = s, R.windowContext = u, R.previewMarkdown = S, R.composition = null, R.events = new i.EventEmitter, R.isMac = "MacIntel" === navigator.platform, R.onChange = () => {
    R.events.emit("onChange"), w()
  }, R = (0, y.o)(R, true === I), R = (0, b.A)(R), R = (0, E.A)(R), (null == (t = s.commands) ? true : t.enabled) && (R = (0, d.A)(R, o, true === l, true === c)), R = (0, g.Ay)(R, o.guild_id, o.id), (null == (n = s.markdown) ? true : n.disableBlockQuotes) || (R = (0, f.A)(R)), (null == (r = s.markdown) ? true : r.disableCodeBlocks) || (R = (0, p.Ay)(R)), I && (R = (0, A.A)(R)), R = (0, m.A)(R), R = (0, _.A)(R), R = (0, O.A)(R), R = (0, v.A)(R, T, C), R = (0, h.A)(R, e => {
    let {
      newValue: t,
      newSelection: n
    } = e;
    return N(R, "undo", {
      value: t,
      selection: n
    })
  })
}