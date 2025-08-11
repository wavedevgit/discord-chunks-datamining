/** Chunk was on 36312 **/
/** chunk id: 153932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk906732 = require("./906732.js"),
  Chunk321488 = require("./321488.js"),
  Chunk417183 = require("./417183.js"),
  Chunk170245 = require("./170245.js"),
  Chunk892001 = require("./892001.js"),
  Chunk974042 = require("./974042.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk511515 = require("./511515.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), s.forEach(function(t) {
      var s;
      s = n[t], t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = s
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      n.push.apply(n, s)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    user: t,
    status: n,
    ignoredUser: o
  } = e;
  let {
    analyticsLocations: i
  } = (0, d.ZP)(), r = e => {
    e.stopPropagation(), c.Z.cancelFriendRequest(t.id, {
      location: "Spam requests modal"
    })
  }, l = e => {
    e.stopPropagation(), c.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Spam requests modal"
      }
    })
  }, h = n === g.Skl.OFFLINE ? g.Skl.UNKNOWN : n, _ = o ? O.intl.string(O.t.pO68Oz) : O.intl.string(O.t["gp+Yt7"]);
  return <div className={f.spamRequest}><m.Z isFocused={false} user={t} className={f.listItem} activeClassName={f.active} onClick={() => (0, b.openUserProfileModal)({
        userId: t.id,
        sourceAnalyticsLocations: i
      })}>{e => (0, s.jsxs)("div", {
        className: f.listItemContents,
        children: [(0, s.jsx)(u.Z, {
          user: t,
          hovered: e,
          status: h,
          subText: _,
          className: f.userInfo
        }), (0, s.jsxs)("div", {
          className: f.actions,
          children: [(0, s.jsx)(p.Z, {
            icon: a.dz2,
            actionType: p.Z.ActionTypes.ACCEPT,
            tooltip: O.intl.string(O.t.ZcibdX),
            onClick: l,
            shouldHighlight: e
          }), (0, s.jsx)(p.Z, {
            icon: a.Dio,
            actionType: p.Z.ActionTypes.DENY,
            tooltip: O.intl.string(O.t.xuio0N),
            onClick: r,
            shouldHighlight: e
          })]
        })]
      })}</m.Z></div>
}

function N(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    rows: d
  } = (0, l.cj)([h.ZP], () => h.ZP.getState()), p = d.filter(g.pJs.PENDING_IGNORED), m = d.filter(g.pJs.SPAM), u = m.length + p.length;
  return o.useEffect(() => {
    0 === u && n()
  }, [u, n]), <a.Y0X transitionState={t} className={f.modal} impression={{
      impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
    }} parentComponent={"OtherFriendRequestsModal"}>{<a.xBx separator={false} className={f.modalHeader}>{<a.X6q variant={"heading-lg/bold"} className={f.heading}>{O.intl.string(O.t.kaYqnp)}</a.X6q>}{<a.Text variant={"text-md/medium"} color={"header-secondary"}>{O.intl.string(O.t.tRxb4O)}</a.Text>}</a.xBx>}{<a.hzk className={f.modalContent}>{p.map(e => (0, o.createElement)(y, j(_({}, e), {
        isFocused: false,
        key: e.key,
        ignoredUser: true
      })))}{m.map(e => (0, o.createElement)(y, j(_({}, e), {
        isFocused: false,
        key: e.key
      })))}</a.hzk>}{u > 1 && <div className={f.modalFooter}><r.zx className={f.clearAllButton} onClick={() => {
          c.Z.clearPendingSpamAndIgnored(), n()
        }}>{O.intl.string(O.t.O8k7Oz)}</r.zx></div>}</a.Y0X>
}