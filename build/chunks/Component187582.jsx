/** Chunk was on 17534 **/
/** chunk id: 187582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk414798 = require("./414798.js"),
  Chunk110574 = require("./110574.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk87664 = require("./87664.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk111864 = require("./111864.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk398219 = require("./398219.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk701939 = require("./701939.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let P = [],
  w = Chunk837921.Ay.getEnableHardwareAcceleration();

function R(e) {
  let {
    user: t,
    channel: a,
    status: d,
    activities: h
  } = e, p = (0, s.bG)([O.A], () => null != O.A.getTypingUsers(a.id)[t.id]), f = (0, s.bG)([_.default], () => _.default.getCurrentUser()), j = (0, s.bG)([A.A], () => A.A.isMobileOnline(t.id)), v = (0, s.bG)([y.A], () => y.A.getNickname(t.id)), C = (0, g.A)(t.id), N = l.useRef(null), P = e => {
    (0, o.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("62891"), n.e("42296")]).then(n.bind(n, 228006));
      return n => {
        var l, i;
        return (0, r.jsx)(e, (l = T({}, n), i = i = {
          user: t,
          channel: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    })
  }, R = () => {
    let e = "@".concat(E.Ay.getUserTag(t, {
        decoration: "never"
      })),
      n = "<@".concat(t.id, ">");
    x._.dispatch(S.jej.TEXTAREA_FOCUS, {
      channelId: a.id
    }), x._.dispatchToLastSubscribed(S.jej.INSERT_TEXT, {
      plainText: e,
      rawText: n
    }), c.A.startTyping(a.id)
  }, D = (0, m.r)({
    user: t
  }), [L, M] = l.useState(false);
  return (0, r.jsx)(b.A, {
    targetElementRef: N,
    user: t,
    channelId: a.id,
    position: i.Fr ? "window_center" : "left",
    spacing: 16,
    onShiftClick: R,
    shouldShow: L,
    onRequestClose: () => M(false),
    children: e => {
      let {
        onClick: n,
        onMouseDown: l
      } = e, i = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }
        if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
          }(e, t), Object.getOwnPropertySymbols)
          for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(e, ["onClick", "onMouseDown"]);
      return (0, r.jsx)(u.A, T({
        ref: N,
        user: t,
        currentUser: f,
        isOwner: t.id === a.ownerId,
        ownerTooltipText: I.intl.string(I.t["MRXZ+x"]),
        shouldAnimateStatus: w,
        isTyping: p,
        status: d,
        activities: h,
        applicationStream: C,
        channel: a,
        onContextMenu: P,
        selected: L,
        isMobile: j,
        nick: v,
        nameplate: D,
        onClick: e => {
          e.shiftKey ? null == R || R() : M(e => !e)
        },
        onMouseDown: e => {
          L ? e.stopPropagation() : null == l || l(e)
        }
      }, i), t.id)
    }
  })
}

function D(e, t) {
  if (e.listItems.length !== t.listItems.length) returnfalse;
  for (let n = 0; n < e.listItems.length; n++) {
    let r = e.listItems[n],
      l = t.listItems[n];
    if (r.user !== l.user || r.status !== l.status || r.activities !== l.activities) returnfalse
  }
  returntrue
}

function L(e) {
  let {
    channel: t
  } = e, n = _.default.getCurrentUser(), i = null == n ? true : n.isStaff(), {
    analyticsLocations: o
  } = (0, h.Ay)(d.A.MEMBER_LIST), {
    listItems: c
  } = (0, s.bG)([y.A, _.default, A.A], () => {
    let e = (0, v.F)(t.recipients, _.default),
      n = {};
    for (let t of e) {
      var r, l, i;
      y.A.isFriend(t.id) || t.id === (null == (r = _.default.getCurrentUser()) ? true : r.id) ? n[t.id] = {
        status: null != (l = A.A.getStatus(t.id)) ? l : S.clD.OFFLINE,
        activities: null != (i = A.A.getActivities(t.id)) ? i : P
      } : n[t.id] = {
        status: S.clD.OFFLINE,
        activities: P
      }
    }
    let s = [];
    for (let t of e) {
      let e = {
        user: t,
        status: n[t.id].status,
        activities: n[t.id].activities
      };
      s.push(e)
    }
    return {
      listItems: s
    }
  }, [t], D);
  l.useEffect(() => {
    j.default.track(S.HAw.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let u = i && c.every(e => e.user.isStaff());
  return (0, r.jsx)(h.f5, {
    value: o,
    children: (0, r.jsx)("div", {
      className: N.kL,
      children: (0, r.jsx)("aside", {
        className: N.yg,
        children: (0, r.jsxs)(a.HOs, {
          className: N.ol,
          fade: true,
          children: [(0, r.jsxs)(f.A, {
            className: N.lL,
            children: ["".concat(I.intl.string(I.t["9Oq93m"]), "—").concat(c.length, " "), u && (0, r.jsx)(p.A, {
              type: p.A.Types.STAFF_ONLY_DM
            })]
          }), c.map(e => (0, r.jsx)(R, {
            user: e.user,
            status: e.status,
            activities: e.activities,
            channel: t
          }, e.user.id))]
        })
      })
    })
  })
}