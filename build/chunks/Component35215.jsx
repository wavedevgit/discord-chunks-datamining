/** Chunk was on web.js **/
/** chunk id: 35215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk879048 = require("./879048.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 8,
  O = 20,
  v = e => {
    let {
      game: t
    } = e, i = (0, a.e7)([l.Z], () => l.Z.getApplication(t.applicationId)), s = () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("89311"), n.e("83123")]).then(n.bind(n, 644941));
        return n => (0, r.jsx)(e, g({
          applicationId: t.applicationId,
          source: d.m1.QuestBar
        }, n))
      })
    };
    return (0, r.jsx)(o.ua7, {
      text: t.name,
      children: e => (0, r.jsx)(o.P3F, b(g({}, e), {
        className: h.gameClickable,
        onClick: s,
        children: (0, r.jsx)(_.C, {
          game: t,
          application: i,
          className: h.coverArt,
          size: _.Z.SMALL
        })
      }))
    })
  };

function I(e) {
  let {
    applications: t,
    onClose: n
  } = e;
  (0, c.Z)(t), i.useEffect(() => {
    t.length > 1 && s.Z.getDetectableGamesSupplemental(t)
  }, [t]);
  let l = (0, a.e7)([u.Z], () => t.some(e => u.Z.isFetching(e))),
    d = (0, a.e7)([u.Z], () => t.some(e => u.Z.didFetchingFail(e))),
    _ = (0, a.Wu)([u.Z], () => t.map(e => u.Z.getGame(e)).filter(e => null != e).filter(e => (0, f.z6)(e.applicationId)).slice(0, y));
  return !l && 0 === _.length || d ? null : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: h.headerContent,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-primary",
          children: p.intl.string(p.t["D+DkEB"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-tertiary",
          children: p.intl.format(p.t.JhwFc3, {
            count: _.length
          })
        })]
      }), (0, r.jsx)(o.P3F, {
        className: h.closeButton,
        "aria-label": p.intl.string(p.t.cpT0Cg),
        onClick: n,
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)("div", {
      className: h.gameGrid,
      children: _.map(e => (0, r.jsx)(v, {
        game: e
      }, e.applicationId))
    })]
  })
}
let T = function(e) {
  let {
    targetElementRef: t,
    applications: n,
    children: a,
    onGameSheetOpened: s,
    onGameSheetClosed: l
  } = e, c = i.useRef(null);
  if (n.length <= 1) return null;
  let u = (null == t ? true : t.current) != null,
    d = u ? t : c,
    f = u ? "right" : "top",
    _ = u ? "bottom" : true;
  return (0, r.jsx)(o.yRy, {
    targetElementRef: d,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(I, {
        applications: n,
        onClose: t
      })
    },
    onRequestOpen: s,
    onRequestClose: l,
    position: f,
    align: _,
    spacing: O,
    children: e => a(e, c)
  })
}