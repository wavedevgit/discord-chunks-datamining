/** Chunk was on 97652 **/
/** chunk id: 478923, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk1596 = require("./1596.jsx"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk240515 = require("./240515.jsx"),
  Chunk858380 = require("./858380.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk111627 = require("./111627.js");

function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function E(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function y(t) {
  let {
    user: e,
    onBlock: n,
    onIgnore: i,
    location: o,
    disallowIgnore: s,
    guildId: d,
    channelId: y
  } = t, N = (0, l.e7)([f.Z], () => f.Z.isIgnored(e.id));
  return <div className={I.container}>{<div className={I.confirmationHeader}>{<div className={I.iconContainer}>{<c.qEK size={c.EFr.SIZE_56} src={e.getAvatarURL(true, 64)} aria-hidden={true} />}{<div className={I.icon}><c.t6m /></div>}</div>}{<div>{<c.X6q variant={"heading-xl/bold"} color={"header-primary"}>{b.intl.format(b.t.CIbzHR, {
            username: j.ZP.getName(d, y, e)
          })}</c.X6q>}{<c.Text variant={"text-md/medium"} color={"header-secondary"}>{b.intl.string(b.t.S70joq)}</c.Text>}</div>}</div>}{<a.Z />}{s || N ? null : <div className={I.otherOptions}>{<u.rT title={b.intl.string(b.t["+BJTcH"])}><u.JZ title={b.intl.string(b.t.hC8tcX)} description={b.intl.string(b.t.If89rK)} titleVariant={"text-md/medium"} descriptionVariant={"text-xs/medium"} buttonText={b.intl.string(b.t.mxJOd3)} onButtonPress={() => {
            O.default.track(g.rMx.USER_REMEDIATION_ACTION, {
              action: x.l.GOTO_IGNORE,
              location: o
            }), (0, c.pTH)(), (0, c.h7j)(t => (0, r.jsx)(p.default, E(h({}, t), {
              user: e,
              guildId: d,
              channelId: y,
              onIgnore: i,
              onBlock: n,
              location: o
            })))
          }} /></u.rT>}{<c.Text variant={"text-sm/medium"} className={I.featureGuide}>{b.intl.format(b.t.DJN6eX, {
          articleLink: m.Z.getArticleURL(g.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
        })}</c.Text>}</div>}</div>
}

function N(t) {
  var {
    user: e,
    onBlock: n,
    onCancel: l,
    onIgnore: a,
    location: u = "ContextMenu",
    disallowIgnore: f,
    guildId: m,
    channelId: j
  } = t, p = function(t, e) {
    if (null == t) return {};
    var n, r, i = function(t, e) {
      if (null == t) return {};
      var n, r, i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }(t, ["user", "onBlock", "onCancel", "onIgnore", "location", "disallowIgnore", "guildId", "channelId"]);
  return i.useLayoutEffect(() => () => {
    O.default.track(g.rMx.USER_REMEDIATION_ACTION, {
      action: x.l.DISMISS_BLOCK,
      location: u
    })
  }, [u]), <c.ConfirmModal{...E(h({
    confirmText: b.intl.string(b.t.l4EmaW),
    cancelText: b.intl.string(b.t["ETE/oK"]),
    onCancel: () => {
      O.default.track(g.rMx.USER_REMEDIATION_ACTION, {
        action: x.l.CANCEL_BLOCK,
        location: u
      }), null == l || l()
    },
    onConfirm: () => {
      null == n || n(), s.Z.blockUser(e.id, {
        location: u
      }).then(() => {
        O.default.track(g.rMx.BLOCK_USER_CONFIRMED), d.Z.showBlockSuccessToast(e.id, null != j ? j : true)
      })
    },
    impression: {
      impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION
    }
  }, p), {
    children: (0, r.jsx)(y, {
      user: e,
      guildId: m,
      channelId: j,
      onBlock: n,
      onIgnore: a,
      disallowIgnore: f
    })
  })} />
}