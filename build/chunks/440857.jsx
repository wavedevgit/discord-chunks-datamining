/** Chunk was on 6850 **/
/** chunk id: 440857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk692547 = require("./692547.js"),
  Chunk215569 = require("./215569.js"),
  Chunk180035 = require("./180035.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk852860 = require("./852860.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk910693 = require("./910693.js"),
  Chunk241559 = require("./241559.js"),
  Chunk256003 = require("./256003.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk571031 = require("./571031.js");

function v(e) {
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    guildId: t
  } = e, O = (0, f.xC)(t), {
    selectedUserIds: H,
    clearSelection: _
  } = (0, h.Z)(t), w = H.size > 0, N = async (e, t, n, r) => {
    try {
      let l = await u.Z.banMultipleUsers(e, t, n, r);
      (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.AsCe5O), c.ToastType.SUCCESS)), b.default.track(j.rMx.BULK_MODERATION_ACTION_COMPLETED, y(v({}, (0, C.hH)(e)), {
        action_type: p.jQ.BAN,
        target_user_ids: [...H],
        mod_user_id: m.default.getId(),
        successful_user_ids: l.body.banned_users,
        location
      }))
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.mICAWV), c.ToastType.FAILURE))
    }
    _()
  }, S = l.useCallback(() => {
    _()
  }, [_]), Z = <span className={x.messageContainer}>{<c.tBG size={"custom"} width={24} height={24} color={(0, a.d)(o.Z.unsafe_rawColors.PRIMARY_500).hex()} />}{<c.Text variant={"heading-md/bold"} color={"text-default"}>{g.intl.format(g.t.TstoSU, {
        count: H.size
      })}</c.Text>}{<c.Avr text={g.intl.string(g.t.yW6ZdH)} onClick={S} />}</span>, D = <span className={x.buttonContainer}>{<c.pgN size={"custom"} color={"currentColor"} width={20} height={20} />}{<c.Text variant={"text-sm/semibold"} color={"currentColor"}>{g.intl.string(g.t["2a50fH"])}</c.Text>}</span>;
  return O ? <i.W component={"div"} className={x.saveNoticeContainer}>{w && (0, r.jsx)(c.oXn, {
      children: (0, r.jsx)(d.Z, {
        onSave: () => {
          b.default.track(j.rMx.BULK_MODERATION_ACTION_STARTED, y(v({}, (0, C.hH)(t)), {
            action_type: p.jQ.BAN,
            target_user_ids: [...H],
            mod_user_id: m.default.getId(),
            location
          })), (0, c.ZDy)(async () => {
            let {
              default: e
            } = await n.e("43350").then(n.bind(n, 98746));
            return n => (0, r.jsx)(e, y(v({}, n), {
              guildId: t,
              canBulkBan: O,
              userIds: H,
              onBanMultiple: N
            }))
          })
        },
        onSaveText: D,
        onSaveButtonColor: s.Tt.RED,
        message: Z
      })
    })}</i.W> : null
}