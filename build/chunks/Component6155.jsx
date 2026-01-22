/** Chunk was on web.js **/
/** chunk id: 6155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk31728 = require("./31728.js"),
  Chunk933958 = require("./933958.js"),
  Chunk587895 = require("./587895.js"),
  Chunk313961 = require("./313961.js"),
  Chunk616356 = require("./616356.js"),
  Chunk334463 = require("./334463.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk319567 = require("./319567.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    closePopout: t,
    idle: n,
    pipWindows: i,
    voiceChannelId: s,
    onSelect: h
  } = e;
  n && t();
  let b = (0, a.bG)([u.Ay], () => u.Ay.getCurrentEmbeddedActivity()),
    y = (0, a.bG)([_.A], () => _.A.pipWindow),
    O = (0, a.bG)([f.A], () => f.A.getSelectedParticipant(s)),
    A = (0, a.bG)([f.A], () => f.A.getStreamParticipants(s));

  function v(e) {
    (null == y ? true : y.id) !== e.pipWindow.id && (0, c.mf)(e.pipWindow.id);
    let t = e.participant;
    null != t && t.type !== g.lp.ACTIVITY && l.A.selectParticipant(s, t.id)
  }

  function S(e) {
    if (e.pipWindow.component === m.o1q.ACTIVITY && null != b) {
      var t;
      let e = null == (t = d.A.getApplication(b.applicationId)) ? true : t.name;
      return null == e ? E.intl.string(E.t["8raC1P"]) : E.intl.formatToPlainString(E.t["a9+V+V"], {
        activityName: e
      })
    }
    return null == e.participant || e.participant.type !== g.lp.STREAM ? E.intl.string(E.t["ng/Kwl"]) : E.intl.formatToPlainString(E.t.sqmFRg, {
      username: e.participant.userNick
    })
  }

  function I() {
    let e = [],
      t = i.find(e => e.component === m.o1q.VIDEO);
    return null != t && A.forEach(n => {
      let r = p.A.getActiveStreamForApplicationStream(n.stream),
        i = n.id === (null == O ? true : O.id) && (null == y ? true : y.id) === t.id;
      null == r || i || e.push({
        pipWindow: t,
        participant: n,
        stream: r
      })
    }), e
  }

  function T(e) {
    var t;
    let n = e.pipWindow.id,
      i = null == (t = e.participant) ? true : t.id,
      a = S(e),
      s = "".concat(n).concat(null != i ? i : "");
    return (0, r.jsx)(o.Drp, {
      id: s,
      label: a,
      action: () => v(e)
    }, s)
  }
  return (0, r.jsx)(o.W1t, {
    navId: "pip-menu",
    "aria-label": "switch PIP",
    onClose: t,
    onSelect: h,
    children: I().map(T)
  })
}
let I = function(e) {
  let {
    voiceChannelId: t,
    idle: n
  } = e, l = i.useRef(null), c = Array.from((0, a.bG)([_.A], () => _.A.pipWindows).values()).filter(e => e.component !== m.o1q.ACTIVITY), u = (0, a.yK)([p.A], () => p.A.getAllActiveStreamsForChannel(t)).filter(e => {
    var n;
    return e.ownerId !== (null == (n = h.default.getCurrentUser()) ? true : n.id) && e.channelId === t
  }), d = 1 === c.length && c[0].component === m.o1q.ACTIVITY || 0 === u.length, f = 1 === c.length && u.length <= 1;
  return d || f ? null : (0, r.jsx)(o.YNO, {
    targetElementRef: l,
    position: "bottom",
    renderPopout: e => (0, r.jsx)(S, O({
      voiceChannelId: t,
      pipWindows: c,
      idle: n
    }, e)),
    children: e => (0, r.jsx)(o.DUT, v(O({
      className: b.ro
    }, e), {
      innerRef: l,
      children: (0, r.jsx)(o.FHP, {
        size: "md",
        color: s.A.unsafe_rawColors.WHITE.css
      })
    }))
  })
}