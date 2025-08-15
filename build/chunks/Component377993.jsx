/** Chunk was on 73551 **/
/** chunk id: 377993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk144144 = require("./144144.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk545957 = require("./545957.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk850020 = require("./850020.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk233870 = require("./233870.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32482 = require("./32482.js");

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
let N = [],
  A = Chunk998502.ZP.getEnableHardwareAcceleration();

function w(e) {
  let {
    user: t,
    channel: o,
    status: u,
    activities: d
  } = e, p = (0, a.e7)([_.Z], () => null != _.Z.getTypingUsers(o.id)[t.id]), f = (0, a.e7)([C.default], () => C.default.getCurrentUser()), x = (0, a.e7)([b.Z], () => b.Z.isMobileOnline(t.id)), j = (0, a.e7)([y.Z], () => y.Z.getNickname(t.id)), E = (0, h.Z)(t.id), Z = i.useRef(null), N = e => {
    (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("49062")]).then(n.bind(n, 354589));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = T({}, n), l = l = {
          user: t,
          channel: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, w = () => {
    let e = "@".concat(O.ZP.getUserTag(t, {
        decoration: "never"
      })),
      n = "<@".concat(t.id, ">");
    v.S.dispatch(P.CkL.TEXTAREA_FOCUS, {
      channelId: o.id
    }), v.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, {
      plainText: e,
      rawText: n
    }), c.Z.startTyping(o.id)
  }, R = (0, m.K)({
    user: t
  }), [M, k] = i.useState(false);
  return (0, r.jsx)(g.Z, {
    targetElementRef: Z,
    user: t,
    channelId: o.id,
    position: l.tq ? "window_center" : "left",
    spacing: 16,
    onShiftClick: w,
    shouldShow: M,
    onRequestClose: () => k(false),
    children: e => {
      var {
        onClick: n,
        onMouseDown: i
      } = e, l = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onClick", "onMouseDown"]);
      return (0, r.jsx)(S.Z, T({
        ref: Z,
        user: t,
        currentUser: f,
        isOwner: t.id === o.ownerId,
        ownerTooltipText: I.intl.string(I.t["MRXZ+/"]),
        shouldAnimateStatus: A,
        isTyping: p,
        status: u,
        activities: d,
        applicationStream: E,
        channel: o,
        onContextMenu: N,
        selected: M,
        isMobile: x,
        nick: j,
        nameplate: R,
        onClick: e => {
          e.shiftKey ? null == w || w() : k(e => !e)
        },
        onMouseDown: e => {
          M ? e.stopPropagation() : null == i || i(e)
        }
      }, l), t.id)
    }
  })
}

function R(e, t) {
  if (e.listItems.length !== t.listItems.length) returnfalse;
  for (let n = 0; n < e.listItems.length; n++) {
    let r = e.listItems[n],
      i = t.listItems[n];
    if (r.user !== i.user || r.status !== i.status || r.activities !== i.activities) returnfalse
  }
  returntrue
}

function M(e) {
  let {
    channel: t
  } = e, n = C.default.getCurrentUser(), l = null == n ? true : n.isStaff(), {
    analyticsLocations: s
  } = (0, d.ZP)(u.Z.MEMBER_LIST), {
    listItems: c
  } = (0, a.e7)([y.Z, C.default, b.Z], () => {
    let e = (0, j.T)(t.recipients, C.default),
      n = {};
    for (let t of e) {
      var r, i, l;
      y.Z.isFriend(t.id) || t.id === (null == (r = C.default.getCurrentUser()) ? true : r.id) ? n[t.id] = {
        status: null != (i = b.Z.getStatus(t.id)) ? i : P.Skl.OFFLINE,
        activities: null != (l = b.Z.getActivities(t.id)) ? l : N
      } : n[t.id] = {
        status: P.Skl.OFFLINE,
        activities: N
      }
    }
    let a = [];
    for (let t of e) {
      let e = {
        user: t,
        status: n[t.id].status,
        activities: n[t.id].activities
      };
      a.push(e)
    }
    return {
      listItems: a
    }
  }, [t], R);
  i.useEffect(() => {
    x.default.track(P.rMx.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let h = l && c.every(e => e.user.isStaff());
  return (0, r.jsx)(d.Gt, {
    value: s,
    children: (0, r.jsx)("div", {
      className: Z.container,
      children: (0, r.jsx)("aside", {
        className: Z.membersWrap,
        children: (0, r.jsxs)(o.Ttm, {
          className: Z.members,
          fade: true,
          children: [(0, r.jsxs)(f.Z, {
            className: Z.membersGroup,
            children: ["".concat(I.intl.string(I.t["9Oq93t"]), "—").concat(c.length, " "), h && (0, r.jsx)(p.Z, {
              type: p.Z.Types.STAFF_ONLY_DM
            })]
          }), c.map(e => (0, r.jsx)(w, {
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