/** Chunk was on web.js **/
/** chunk id: 77188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk836560 = require("./836560.js"),
  Chunk327432 = require("./327432.js"),
  Chunk213459 = require("./213459.js"),
  Chunk998698 = require("./998698.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk752305 = require("./752305.js"),
  Chunk86724 = require("./86724.js"),
  Chunk886027 = require("./886027.js"),
  Chunk515270 = require("./515270.js"),
  Chunk265446 = require("./265446.js"),
  Chunk196483 = require("./196483.js"),
  Chunk417662 = require("./417662.js"),
  Chunk847302 = require("./847302.js"),
  Chunk374157 = require("./374157.js");
require("./209073.js");
var Chunk814011 = require("./814011.js"),
  Chunk50607 = require("./50607.js"),
  Chunk618136 = require("./618136.js"),
  Chunk247765 = require("./247765.js"),
  Chunk15559 = require("./15559.js"),
  Chunk42530 = require("./42530.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let t = r.useContext(l.ZP),
    n = c.R$.useSetting(),
    [i] = r.useState(() => {
      let r = (0, a.Jh)();
      return r.children = (0, u.JM)(""), r.selection = {
        anchor: I.nO,
        focus: I.nO
      }, w(N(C({}, e), {
        editor: r,
        windowContext: t,
        previewMarkdown: n
      })), r
    });
  return r.useEffect(() => {
    let e = () => i.onChange();
    return s.Z.addChangeListener(e), o.ZP.addChangeListener(e), () => {
      s.Z.removeChangeListener(e), o.ZP.removeChangeListener(e)
    }
  }, [i]), r.useEffect(() => {
    i.previewMarkdown !== n && (i.previewMarkdown = n, i.onChange())
  }, [i, n]), i
}

function w(e) {
  var t, n, r;
  let {
    editor: a,
    chatInputType: o,
    channel: s,
    canUseCommands: l,
    canOnlyUseTextCommands: c,
    windowContext: u,
    previewMarkdown: I,
    forTests: T,
    onChangeStart: C,
    onChangeEnd: A,
    updateState: N
  } = e, P = a, {
    onChange: w
  } = P;
  P.chatInputType = o, P.windowContext = u, P.previewMarkdown = I, P.composition = null, P.events = new i.EventEmitter, P.isMac = "MacIntel" === navigator.platform, P.onChange = () => {
    P.events.emit("onChange"), w()
  }, P = (0, y.B)(P, true === T), P = (0, b.Z)(P), P = (0, E.Z)(P), (null == (t = o.commands) ? true : t.enabled) && (P = (0, d.Z)(P, s, true === l, true === c)), P = (0, g.ZP)(P, s.guild_id, s.id), (null == (n = o.markdown) ? true : n.disableBlockQuotes) || (P = (0, f.Z)(P)), (null == (r = o.markdown) ? true : r.disableCodeBlocks) || (P = (0, p.ZP)(P)), T && (P = (0, v.Z)(P)), P = (0, m.Z)(P), P = (0, _.Z)(P), P = (0, O.Z)(P), P = (0, S.Z)(P, C, A), P = (0, h.Z)(P, e => {
    let {
      newValue: t,
      newSelection: n
    } = e;
    return N(P, "undo", {
      value: t,
      selection: n
    })
  })
}