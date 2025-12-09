/** Chunk was on web.js **/
/** chunk id: 303628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk166459 = require("./166459.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk209613 = require("./209613.js"),
  Chunk998698 = require("./998698.js"),
  Chunk117530 = require("./117530.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk859235 = require("./859235.jsx"),
  Chunk444282 = require("./444282.jsx"),
  Chunk898463 = require("./898463.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk83120 = require("./83120.js"),
  Chunk154257 = require("./154257.js");

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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = [];

function D(e) {
  let {
    channelId: t,
    type: n,
    ignoreFile: a,
    smallAttachments: I = false
  } = e, A = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled), P = (0, _.Z)("attachments", l.hy.HORIZONTAL), D = (0, c.e7)([h.Z], () => h.Z.getUploads(t, n.drafts.type)), {
    isApplicationCommand: w,
    commandOptions: x,
    commandOptionStates: L
  } = (0, c.cj)([m.Z], () => {
    let e = m.Z.getActiveCommand(t);
    if (null == e) return {
      isApplicationCommand: false,
      commandOptions: R,
      commandOptionStates: null
    };
    let n = m.Z.getOptionStates(t);
    return {
      isApplicationCommand: true,
      commandOptions: e.options,
      commandOptionStates: n
    }
  }), j = i.useMemo(() => {
    var e;
    return null != (e = null == x ? true : x.filter(e => {
      var t;
      return e.type === f.jw.ATTACHMENT && (null == L || null == (t = L[e.name]) ? true : t.hasValue)
    })) ? e : []
  }, [x, L]), [M, k] = i.useState([]);
  i.useEffect(() => {
    let e = () => {
      d.Z.clearAll(t, n.drafts.type)
    };
    return u.Z.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => u.Z.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
  }, [t, n]);
  let U = i.useCallback(() => {
    P.focusFirstVisibleItem()
  }, [P]);
  (0, g.yp)({
    event: O.CkL.FOCUS_ATTACHMENT_AREA,
    handler: U
  });
  let G = {
      isApplicationCommand: w,
      previousUploadOptions: M,
      uploadOptions: j
    },
    Z = i.useRef(G);
  i.useEffect(() => {
    Z.current = G
  }), i.useEffect(() => {
    let {
      isApplicationCommand: e,
      previousUploadOptions: r,
      uploadOptions: i
    } = Z.current;
    if (e) {
      let e = [];
      r.forEach(t => {
        i.some(e => t.name === e.name) || e.push(t)
      }), e.forEach(e => {
        d.Z.remove(t, e.name, n.drafts.type)
      }), k(i)
    }
  }, [t, j.length, n]);
  let B = D.filter(e => e.filename !== a);
  return !w && 0 === B.length || w && 0 === j.length ? null : (0, r.jsx)(s.bG, {
    navigator: P,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: i
        } = e, a = N(e, ["ref"]);
        return (0, r.jsx)("ul", C(T({
          ref: i
        }, a), {
          className: o()(v.channelAttachmentArea, S.scrollbarGhost),
          children: w ? j.map(e => (0, r.jsx)(b.Z, {
            channelId: t,
            keyboardModeEnabled: A,
            option: e
          }, e.name)) : B.map(e => (0, r.jsx)(y.Z, {
            channelId: t,
            draftType: n.drafts.type,
            upload: e,
            keyboardModeEnabled: A,
            clip: e.clip,
            size: I ? E.q.SMALL : E.q.MEDIUM
          }, e.id))
        }))
      }
    })
  })
}

function w(e) {
  let {
    channelId: t,
    type: n,
    canAttachFiles: i,
    ignoreFile: a,
    smallAttachments: o = false
  } = e;
  return i ? (0, r.jsx)(D, {
    channelId: t,
    type: n,
    ignoreFile: a,
    smallAttachments: o
  }) : null
}
let x = Chunk473749.memo(w)