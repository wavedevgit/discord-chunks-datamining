/** Chunk was on 63962 **/
/** chunk id: 535834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk144144 = require("./144144.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk545957 = require("./545957.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk850020 = require("./850020.js"),
  Chunk456077 = require("./456077.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk233870 = require("./233870.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk854641 = require("./854641.js");

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
  R = Chunk998502.ZP.getEnableHardwareAcceleration();

function w(e) {
  let {
    user: t,
    channel: s,
    status: u,
    activities: p
  } = e, h = (0, a.e7)([O.Z], () => null != O.Z.getTypingUsers(s.id)[t.id]), g = (0, a.e7)([j.default], () => j.default.getCurrentUser()), x = (0, a.e7)([_.Z], () => _.Z.isMobileOnline(t.id)), C = (0, a.e7)([y.Z], () => y.Z.getNickname(t.id)), S = (0, f.Z)(t.id), P = i.useRef(null), N = e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("66165"), n.e("92775")]).then(n.bind(n, 354589));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = T({}, n), l = l = {
          user: t,
          channel: s
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
    let e = "@".concat(I.ZP.getUserTag(t, {
        decoration: "never"
      })),
      n = "<@".concat(t.id, ">");
    v.S.dispatch(E.CkL.TEXTAREA_FOCUS, {
      channelId: s.id
    }), v.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, {
      plainText: e,
      rawText: n
    }), c.Z.startTyping(s.id)
  }, A = (0, m.K)({
    user: t
  }), [D, L] = i.useState(false);
  return (0, r.jsx)(b.Z, {
    targetElementRef: P,
    user: t,
    channelId: s.id,
    position: l.tq ? "window_center" : "left",
    spacing: 16,
    onShiftClick: w,
    shouldShow: D,
    onRequestClose: () => L(false),
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
      return (0, r.jsx)(d.Z, T({
        ref: P,
        user: t,
        currentUser: g,
        isOwner: t.id === s.ownerId,
        ownerTooltipText: Z.intl.string(Z.t["MRXZ+x"]),
        shouldAnimateStatus: R,
        isTyping: h,
        status: u,
        activities: p,
        applicationStream: S,
        channel: s,
        onContextMenu: N,
        selected: D,
        isMobile: x,
        nick: C,
        nameplate: A,
        onClick: e => {
          e.shiftKey ? null == w || w() : L(e => !e)
        },
        onMouseDown: e => {
          D ? e.stopPropagation() : null == i || i(e)
        }
      }, l), t.id)
    }
  })
}

function A(e, t) {
  if (e.listItems.length !== t.listItems.length) returnfalse;
  for (let n = 0; n < e.listItems.length; n++) {
    let r = e.listItems[n],
      i = t.listItems[n];
    if (r.user !== i.user || r.status !== i.status || r.activities !== i.activities) returnfalse
  }
  returntrue
}

function D(e) {
  let {
    channel: t
  } = e, n = j.default.getCurrentUser(), l = null == n ? true : n.isStaff(), {
    analyticsLocations: o
  } = (0, p.ZP)(u.Z.MEMBER_LIST), {
    listItems: c
  } = (0, a.e7)([y.Z, j.default, _.Z], () => {
    let e = (0, C.T)(t.recipients, j.default),
      n = {};
    for (let t of e) {
      var r, i, l;
      y.Z.isFriend(t.id) || t.id === (null == (r = j.default.getCurrentUser()) ? true : r.id) ? n[t.id] = {
        status: null != (i = _.Z.getStatus(t.id)) ? i : E.Skl.OFFLINE,
        activities: null != (l = _.Z.getActivities(t.id)) ? l : N
      } : n[t.id] = {
        status: E.Skl.OFFLINE,
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
  }, [t], A);
  i.useEffect(() => {
    x.default.track(E.rMx.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let d = l && c.every(e => e.user.isStaff());
  return (0, r.jsx)(p.Gt, {
    value: o,
    children: (0, r.jsx)("div", {
      className: P.container,
      children: (0, r.jsx)("aside", {
        className: P.membersWrap,
        children: (0, r.jsxs)(s.Ttm, {
          className: P.members,
          fade: true,
          children: [(0, r.jsxs)(g.Z, {
            className: P.membersGroup,
            children: ["".concat(Z.intl.string(Z.t["9Oq93m"]), "—").concat(c.length, " "), d && (0, r.jsx)(h.Z, {
              type: h.Z.Types.STAFF_ONLY_DM
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